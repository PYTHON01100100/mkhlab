import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";

export default definePluginEntry({
  id: "mkhlab-core",
  name: "مخلب — Arabic AI Skills",
  register(api) {
    // ── Arabic Greeting Tool ──
    // Responds to common Arabic greetings with appropriate Islamic responses
    api.registerTool({
      name: "arabic-greeting",
      description:
        "Respond to Arabic/Islamic greetings appropriately. " +
        "Use when the user says السلام عليكم, مرحبا, أهلاً, صباح الخير, etc.",
      parameters: {
        type: "object",
        properties: {
          greeting: {
            type: "string",
            description: "The greeting text from the user",
          },
        },
        required: ["greeting"],
      },
      async execute({ greeting }) {
        const greetings: Record<string, string> = {
          "السلام عليكم": "وعليكم السلام ورحمة الله وبركاته",
          "صباح الخير": "صباح النور",
          "مساء الخير": "مساء النور",
          "مرحبا": "أهلاً وسهلاً",
          "أهلاً": "أهلاً بك",
          "يعطيك العافية": "الله يعافيك",
          "جزاك الله خيراً": "وإياك",
          "بارك الله فيك": "وفيك بارك الله",
        };

        const normalized = greeting.trim();
        for (const [key, response] of Object.entries(greetings)) {
          if (normalized.includes(key)) {
            return { response, detected: key };
          }
        }
        return { response: "أهلاً وسهلاً! كيف أقدر أساعدك؟", detected: null };
      },
    });

    // ── Arabizi Converter Tool ──
    // Converts Arabizi (Franco-Arabic) to Arabic script
    api.registerTool({
      name: "arabizi-convert",
      description:
        "Convert Arabizi/Franco-Arabic text (like '7abibi', 'mara7ba', '3adi') to Arabic script. " +
        "Use when the user writes in Latin characters representing Arabic sounds.",
      parameters: {
        type: "object",
        properties: {
          text: {
            type: "string",
            description: "The Arabizi text to convert",
          },
        },
        required: ["text"],
      },
      async execute({ text }) {
        // Arabizi number mappings (most common)
        const map: Record<string, string> = {
          "2": "ء",
          "3": "ع",
          "3'": "غ",
          "5": "خ",
          "6": "ط",
          "6'": "ظ",
          "7": "ح",
          "8": "ق",
          "9": "ص",
          "9'": "ض",
          sh: "ش",
          ch: "تش",
          th: "ث",
          dh: "ذ",
          kh: "خ",
          gh: "غ",
          a: "ا",
          b: "ب",
          t: "ت",
          j: "ج",
          d: "د",
          r: "ر",
          z: "ز",
          s: "س",
          f: "ف",
          q: "ق",
          k: "ك",
          l: "ل",
          m: "م",
          n: "ن",
          h: "ه",
          w: "و",
          y: "ي",
          e: "ي",
          i: "ي",
          o: "و",
          u: "و",
        };

        // Simple conversion (real implementation would use ML model)
        let result = text.toLowerCase();
        // Sort by length descending so longer patterns match first
        const sorted = Object.entries(map).sort(
          ([a], [b]) => b.length - a.length
        );
        for (const [latin, arabic] of sorted) {
          result = result.replaceAll(latin, arabic);
        }

        return {
          original: text,
          arabic: result,
          note: "تحويل تقريبي — قد يحتاج مراجعة",
        };
      },
    });

    // ── Islamic Date Tool ──
    // Quick Hijri date lookup without full skill invocation
    api.registerTool({
      name: "hijri-today",
      description:
        "Get today's Hijri (Islamic) date quickly. " +
        "Use when someone asks 'what is today in Hijri' or 'التاريخ الهجري اليوم'.",
      parameters: {
        type: "object",
        properties: {},
      },
      async execute() {
        try {
          const response = await fetch(
            "https://api.aladhan.com/v1/gToH"
          );
          const data = await response.json();
          const hijri = data.data.hijri;
          return {
            hijri: `${hijri.day} ${hijri.month.ar} ${hijri.year} هـ`,
            hijriEn: `${hijri.day} ${hijri.month.en} ${hijri.year} AH`,
            gregorian: `${data.data.gregorian.date}`,
            weekday: hijri.weekday.ar,
          };
        } catch {
          return { error: "تعذر الاتصال بالخدمة" };
        }
      },
    });

    // ── Native Arabic Speech Provider ──
    // Registers Arabic TTS via Voxtral/SILMA as a native OpenClaw speech provider
    if (typeof api.registerSpeechProvider === "function") {
      api.registerSpeechProvider({
        id: "mkhlab-arabic-tts",
        label: "Arabic TTS (Voxtral)",
        languages: ["ar", "ar-SA", "ar-EG", "ar-AE", "ar-MA", "ar-JO"],
        async synthesize(text: string, options?: { voice?: string }) {
          const voice = options?.voice || "aria";
          const apiKey = process.env.MISTRAL_API_KEY;
          if (!apiKey) {
            throw new Error("MISTRAL_API_KEY required for Arabic TTS");
          }
          const res = await fetch("https://api.mistral.ai/v1/audio/speech", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "voxtral-mini-2025-12",
              input: text,
              voice,
              language: "ar",
              response_format: "mp3",
            }),
          });
          if (!res.ok) throw new Error(`TTS failed: ${res.status}`);
          return { audio: await res.arrayBuffer(), format: "mp3" };
        },
      });
    }

    // ── Native Arabic Web Search Provider ──
    // Arabic-optimized search with trusted Arabic source prioritization
    if (typeof api.registerWebSearchProvider === "function") {
      api.registerWebSearchProvider({
        id: "mkhlab-arabic-search",
        label: "Arabic Web Search",
        async search(query: string, options?: { limit?: number }) {
          const limit = options?.limit || 5;
          // Use DuckDuckGo with Arabic region
          const encodedQuery = encodeURIComponent(
            query + " site:*.sa OR site:*.eg OR site:*.ae OR site:*.ma"
          );
          const res = await fetch(
            `https://api.duckduckgo.com/?q=${encodedQuery}&format=json&kl=xa-ar`
          );
          const data = await res.json();

          const results = (data.RelatedTopics || [])
            .slice(0, limit)
            .map((topic: { Text?: string; FirstURL?: string }) => ({
              title: topic.Text?.slice(0, 100) || "",
              url: topic.FirstURL || "",
              snippet: topic.Text || "",
            }));

          return { results };
        },
      });
    }

    // ── Native Arabic Media Understanding (OCR) ──
    if (typeof api.registerMediaUnderstandingProvider === "function") {
      api.registerMediaUnderstandingProvider({
        id: "mkhlab-arabic-ocr",
        label: "Arabic OCR (Tesseract)",
        supportedTypes: ["image/png", "image/jpeg", "image/webp"],
        async understand(
          media: ArrayBuffer,
          mimeType: string
        ): Promise<{ text: string }> {
          // Delegate to tesseract CLI
          const { execSync } = await import("child_process");
          const fs = await import("fs");
          const tmpPath = `/tmp/mkhlab_ocr_${Date.now()}.png`;
          fs.writeFileSync(tmpPath, Buffer.from(media));
          try {
            const result = execSync(
              `tesseract ${tmpPath} stdout -l ara+eng 2>/dev/null`
            ).toString();
            return { text: result.trim() };
          } finally {
            fs.unlinkSync(tmpPath);
          }
        },
      });
    }
  },
});
