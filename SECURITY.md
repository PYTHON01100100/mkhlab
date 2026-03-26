# Security Policy — سياسة الأمان

## Supported Versions

| Version | Supported |
|---------|-----------|
| v0.3.x | Yes |
| v0.2.x | Security fixes only |
| < v0.2 | No |

## Reporting a Vulnerability

If you discover a security vulnerability in مخلب, please report it responsibly:

1. **DO NOT** open a public GitHub issue
2. Email: security@mkhlab.dev (or open a private security advisory on GitHub)
3. Include: description, steps to reproduce, impact assessment
4. We will respond within 48 hours

## Security Measures

### Input Sanitization
- All user input is sanitized before processing
- Arabic text is validated for Unicode safety before API calls
- Arabizi conversion is sandboxed (no code execution)

### Bidi Attack Prevention
مخلب includes `bidi-guard` as a built-in skill specifically to detect and prevent bidirectional Unicode attacks (CVE-2021-42574 / Trojan Source). The `arabic-preprocess` hook strips dangerous bidi override characters from input.

Dangerous characters blocked:
- `U+202A` Left-to-Right Embedding
- `U+202B` Right-to-Left Embedding
- `U+202C` Pop Directional Formatting
- `U+202D` Left-to-Right Override
- `U+202E` Right-to-Left Override
- `U+2066` Left-to-Right Isolate
- `U+2067` Right-to-Left Isolate
- `U+2068` First Strong Isolate
- `U+2069` Pop Directional Isolate

### API Security
- No API keys are stored in the repository
- All API calls use environment variables for credentials
- WhatsApp webhook uses verification tokens
- Telegram bot supports user allowlists

### NemoClaw Integration
مخلب supports [NemoClaw](https://github.com/nvidia/nemoclaw) by NVIDIA for enhanced security:
- OpenShell sandboxing for tool execution
- Content safety guardrails
- Input/output filtering

To enable NemoClaw with مخلب:
```json
{
  "security": {
    "nemoclaw": {
      "enabled": true,
      "guardrails": ["content-safety", "input-filter", "output-filter"],
      "sandbox": "openshell"
    }
  }
}
```

### Content Moderation
The `sarih` skill provides offline Arabic content moderation with:
- 13 content filters
- 3 severity levels (low, medium, high)
- 5 dialect coverage
- Zero external API calls (fully offline)

### Data Privacy
- مخلب runs locally — no data leaves your machine unless you configure cloud APIs
- No telemetry or analytics
- No user data collection
- WhatsApp/Telegram channels process messages in real-time with no storage

## Dependencies

We regularly audit dependencies for known vulnerabilities. The CLI tools (arabench, khalas, sarih, etc.) are installed in isolated pipx environments.

## Responsible AI

مخلب follows responsible AI principles:
- Does not generate fatwa (religious rulings) — always redirects to scholars
- Does not provide medical diagnoses — always says "consult a doctor"
- Does not provide legal advice — always says "consult a lawyer"
- Does not engage in political or sectarian discussions
- Respects user privacy and cultural sensitivity
