/**
 * Arabic Compaction Hook
 * Preserves dialect + cultural context before session compaction.
 */

interface CompactContext {
  metadata: Record<string, unknown>;
}

interface CompactResult {
  preserveNotes: string[];
}

export default function handler(ctx: CompactContext): CompactResult {
  const notes: string[] = [];

  const dialect = ctx.metadata["mkhlab.dialect"];
  if (dialect && dialect !== "unknown") {
    const dialectNames: Record<string, string> = {
      egyptian: "مصري",
      gulf: "خليجي",
      levantine: "شامي",
      maghrebi: "مغاربي",
      iraqi: "عراقي",
      msa: "فصحى",
    };
    notes.push(
      `User's Arabic dialect: ${dialectNames[dialect as string] || dialect}. Continue responding in this dialect.`
    );
  }

  const language = ctx.metadata["mkhlab.language"];
  if (language === "ar" || language === "arabizi") {
    notes.push(
      "User communicates in Arabic. Respond in Arabic unless asked otherwise."
    );
  }

  notes.push(
    "This user is using مخلب (Mkhlab), an Arabic AI assistant. Maintain cultural sensitivity."
  );

  return { preserveNotes: notes };
}
