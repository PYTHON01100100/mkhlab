---
name: hijri-bootstrap
description: "Inject current Hijri date and nearest prayer time into every new session."
events: ["agent:bootstrap"]
priority: 50
---

# Hijri Date Bootstrap Hook

Injects Arabic/Islamic context into every new agent session automatically.

## What it injects
- Current Hijri date (day, month, year)
- Current Gregorian date
- Day of week in Arabic
- Upcoming Islamic event (if within 30 days)
- System note: "The user may be Muslim. Be respectful of Islamic practices."
