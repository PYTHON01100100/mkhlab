import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";

/**
 * مخلب WhatsApp Channel
 *
 * Scoped service bot (per Meta's Jan 2026 policy):
 * - Prayer times (أوقات الصلاة)
 * - Hijri calendar (التقويم الهجري)
 * - Quran search (بحث القرآن)
 * - Translation (ترجمة)
 *
 * NOT a general-purpose AI chatbot (banned on WhatsApp).
 */

interface WhatsAppMessage {
  from: string;
  id: string;
  timestamp: string;
  type: "text" | "image" | "audio" | "document";
  text?: { body: string };
}

interface WhatsAppWebhookPayload {
  object: string;
  entry: Array<{
    id: string;
    changes: Array<{
      value: {
        messaging_product: string;
        metadata: { phone_number_id: string };
        messages?: WhatsAppMessage[];
      };
    }>;
  }>;
}

// Skill routing: detect intent from Arabic message
function detectSkill(
  text: string
): "prayer" | "hijri" | "quran" | "translate" | "greeting" | "unknown" {
  const lower = text.toLowerCase();
  const arabic = text;

  // Prayer times
  if (
    arabic.includes("صلاة") ||
    arabic.includes("صلاه") ||
    arabic.includes("أذان") ||
    arabic.includes("اذان") ||
    arabic.includes("فجر") ||
    arabic.includes("ظهر") ||
    arabic.includes("عصر") ||
    arabic.includes("مغرب") ||
    arabic.includes("عشاء") ||
    lower.includes("prayer") ||
    lower.includes("salah") ||
    lower.includes("athan")
  ) {
    return "prayer";
  }

  // Hijri calendar
  if (
    arabic.includes("هجري") ||
    arabic.includes("تاريخ") ||
    arabic.includes("رمضان") ||
    arabic.includes("عيد") ||
    arabic.includes("محرم") ||
    lower.includes("hijri") ||
    lower.includes("ramadan")
  ) {
    return "hijri";
  }

  // Quran
  if (
    arabic.includes("قرآن") ||
    arabic.includes("قران") ||
    arabic.includes("آية") ||
    arabic.includes("ايه") ||
    arabic.includes("سورة") ||
    arabic.includes("سوره") ||
    lower.includes("quran") ||
    lower.includes("surah") ||
    lower.includes("ayah")
  ) {
    return "quran";
  }

  // Greetings
  if (
    arabic.includes("السلام عليكم") ||
    arabic.includes("مرحبا") ||
    arabic.includes("أهلا") ||
    arabic.includes("اهلا")
  ) {
    return "greeting";
  }

  // Translation (English text or explicit request)
  if (
    arabic.includes("ترجم") ||
    arabic.includes("ترجمة") ||
    arabic.includes("translate") ||
    /^[a-zA-Z\s.,!?]+$/.test(text.trim())
  ) {
    return "translate";
  }

  return "unknown";
}

// Format response for WhatsApp (max 4096 chars)
function formatForWhatsApp(text: string): string {
  if (text.length <= 4096) return text;
  return text.slice(0, 4090) + "\n...";
}

export default definePluginEntry({
  id: "mkhlab-whatsapp",
  name: "مخلب WhatsApp Channel",
  register(api) {
    api.registerChannel({
      id: "whatsapp",
      name: "WhatsApp",
      description: "مخلب on WhatsApp — Arabic AI skills via WhatsApp Business API",

      // Webhook verification (GET request from Meta)
      async handleWebhookVerification(req) {
        const mode = req.query["hub.mode"];
        const token = req.query["hub.verify_token"];
        const challenge = req.query["hub.challenge"];

        if (mode === "subscribe" && token === req.config.verifyToken) {
          return { status: 200, body: challenge };
        }
        return { status: 403, body: "Forbidden" };
      },

      // Incoming message handler
      async handleMessage(payload: WhatsAppWebhookPayload, config) {
        const messages: Array<{
          senderId: string;
          text: string;
          messageId: string;
        }> = [];

        for (const entry of payload.entry) {
          for (const change of entry.changes) {
            if (change.value.messages) {
              for (const msg of change.value.messages) {
                if (msg.type === "text" && msg.text) {
                  messages.push({
                    senderId: msg.from,
                    text: msg.text.body,
                    messageId: msg.id,
                  });
                }
              }
            }
          }
        }

        return messages;
      },

      // Send reply via WhatsApp Cloud API
      async sendMessage(to: string, text: string, config) {
        const url = `https://graph.facebook.com/v21.0/${config.phoneNumberId}/messages`;
        const body = {
          messaging_product: "whatsapp",
          to,
          type: "text",
          text: { body: formatForWhatsApp(text) },
        };

        await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
      },

      // Route messages to appropriate skills
      async routeMessage(text: string) {
        const skill = detectSkill(text);
        const scopeMessage =
          "🦅 أنا مخلب، مساعدك على واتساب!\n\n" +
          "أقدر أساعدك في:\n" +
          "🕌 أوقات الصلاة — مثال: «أوقات الصلاة في الرياض»\n" +
          "📅 التقويم الهجري — مثال: «التاريخ الهجري اليوم»\n" +
          "📖 بحث القرآن — مثال: «آية الكرسي»\n" +
          "🔄 ترجمة — مثال: «ترجم Hello World»\n";

        if (skill === "unknown") {
          return { skill: null, fallbackMessage: scopeMessage };
        }

        if (skill === "greeting") {
          return {
            skill: null,
            fallbackMessage:
              "وعليكم السلام ورحمة الله وبركاته! 🦅\n\n" + scopeMessage,
          };
        }

        return { skill, query: text };
      },
    });
  },
});
