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
  },
});
