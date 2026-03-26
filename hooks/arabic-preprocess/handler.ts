/**
 * Arabic Pre-Processing Hook
 * Runs on message:received and before_dispatch events.
 *
 * Detects Arabic/Arabizi, converts Arabizi to Arabic script,
 * identifies dialect, and normalizes text.
 */

// Security: Dangerous bidi override characters (CVE-2021-42574)
const BIDI_DANGEROUS =
  /[\u202A\u202B\u202C\u202D\u202E\u2066\u2067\u2068\u2069\u200F\u200E]/g;

// Arabic Unicode range detection
const ARABIC_REGEX = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;

// Arabizi number patterns (common Franco-Arabic substitutions)
const ARABIZI_NUMBERS = /[2-9](?=[a-zA-Z])|(?<=[a-zA-Z])[2-9]/;

// Dialect markers
const DIALECT_MARKERS: Record<string, RegExp[]> = {
  egyptian: [/كده|عايز|إزيك|فين|ليه|بتاع|حاجة|خالص|إيه/],
  gulf: [/شلونك|وش|أبي|أبغى|زين|إيش|يالله|كذا/],
  levantine: [/كيفك|هلق|بدي|شو|منيح|هيك|ليش/],
  maghrebi: [/لاباس|بغيت|واش|بزاف|ديال|راه/],
  iraqi: [/شكو ماكو|أريد|هواية|آني|گ/],
};

interface HookContext {
  message: { text: string; senderId?: string };
  metadata: Record<string, unknown>;
}

interface HookResult {
  context: Record<string, unknown>;
  modifiedText?: string;
}

function detectDialect(text: string): string {
  for (const [dialect, patterns] of Object.entries(DIALECT_MARKERS)) {
    for (const pattern of patterns) {
      if (pattern.test(text)) return dialect;
    }
  }
  return "msa"; // Default to Modern Standard Arabic
}

function isArabizi(text: string): boolean {
  // Has Latin chars + Arabizi number substitutions
  return !ARABIC_REGEX.test(text) && ARABIZI_NUMBERS.test(text);
}

function normalizeArabic(text: string): string {
  return text
    .replace(/[أإآ]/g, "ا") // Normalize alef
    .replace(/ة/g, "ه") // Taa marbuta for search
    .replace(/ى/g, "ي") // Alef maqsura
    .replace(/[\u064B-\u065F\u0670]/g, "") // Strip tashkeel for matching
    .trim();
}

// Basic Arabizi → Arabic conversion map
const ARABIZI_MAP: [RegExp, string][] = [
  [/3'/g, "غ"],
  [/9'/g, "ض"],
  [/6'/g, "ظ"],
  [/sh/gi, "ش"],
  [/ch/gi, "تش"],
  [/th/gi, "ث"],
  [/dh/gi, "ذ"],
  [/kh/gi, "خ"],
  [/gh/gi, "غ"],
  [/2/g, "ء"],
  [/3/g, "ع"],
  [/5/g, "خ"],
  [/6/g, "ط"],
  [/7/g, "ح"],
  [/8/g, "ق"],
  [/9/g, "ص"],
];

function convertArabizi(text: string): string {
  let result = text.toLowerCase();
  for (const [pattern, replacement] of ARABIZI_MAP) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

export default function handler(ctx: HookContext): HookResult {
  // Security: strip dangerous bidi override characters
  const sanitized = ctx.message.text.replace(BIDI_DANGEROUS, "");
  const text = sanitized;
  const hasArabic = ARABIC_REGEX.test(text);
  const hasArabizi = isArabizi(text);

  let language: string;
  let processedText = text;

  if (hasArabic) {
    language = "ar";
  } else if (hasArabizi) {
    language = "arabizi";
    processedText = convertArabizi(text);
  } else {
    language = "en";
  }

  const dialect = language === "ar" ? detectDialect(text) : "unknown";
  const normalized = hasArabic ? normalizeArabic(text) : text;

  return {
    context: {
      "mkhlab.dialect": dialect,
      "mkhlab.language": language,
      "mkhlab.isArabic": hasArabic || hasArabizi,
      "mkhlab.normalizedText": normalized,
    },
    modifiedText: hasArabizi ? processedText : undefined,
  };
}
