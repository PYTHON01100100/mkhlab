---
name: arabic-preprocess
description: "Pre-process Arabic messages before dispatch: detect dialect, convert Arabizi, normalize text."
events: ["message:received", "before_dispatch"]
priority: 100
---

# Arabic Pre-Processing Hook

Runs on every incoming message before it reaches the agent.

## What it does
1. **Detect language** — Is the message Arabic, English, or Arabizi?
2. **Convert Arabizi** — Transform "7abibi" → "حبيبي", "3adi" → "عادي"
3. **Detect dialect** — Egyptian, Gulf, Levantine, Maghrebi, Iraqi, or MSA
4. **Normalize Arabic** — Standardize alef forms (أإآ→ا), taa marbuta, etc.
5. **Set context variables** — `mkhlab.dialect`, `mkhlab.language`, `mkhlab.isArabic`

## Context variables set
- `mkhlab.dialect` — detected dialect code (eg, gulf, lev, mag, iq, msa)
- `mkhlab.language` — "ar", "en", "arabizi"
- `mkhlab.isArabic` — boolean
- `mkhlab.normalizedText` — cleaned Arabic text
