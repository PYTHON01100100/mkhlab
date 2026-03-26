---
name: arabic-compact
description: "Preserve Arabic dialect and cultural context during session compaction."
events: ["session:compact:before"]
priority: 90
---

# Arabic Compaction Hook

Ensures critical Arabic context survives when OpenClaw compacts the session.

## What it preserves
- Detected dialect preference
- User's language (Arabic/English/Arabizi)
- Cultural context (Islamic greetings used, Hijri date awareness)
- Active skill context (e.g., prayer city, translation direction)
