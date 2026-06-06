# PROJECT_MAP.md — Mkhlab project map

This is a quick orientation map for the مخلب / Mkhlab OpenClaw plugin repository.

## Snapshot

- Root: `/mnt/c/Users/d7oom/Desktop/presention/mkhlab`
- Type: Arabic-first OpenClaw plugin / skill collection
- Skills: `61` in `skills/`
- Hermes mirror skills: `63` in `hermes-skills/`
- Agent templates: `6` in `agents/`
- Extensions: `3` in `extensions/`
- Hooks: `3` in `hooks/`
- Messaging channels: Telegram + WhatsApp

## Main layout

```text
mkhlab/
├── skills/                  OpenClaw SKILL.md definitions
├── hermes-skills/           Hermes-compatible mirror of the skills
├── agents/                  Preconfigured Arabic agent templates
├── extensions/              Plugin entry + messaging channels
│   ├── mkhlab-core/         Core OpenClaw tools/providers
│   ├── telegram-channel/    Telegram Bot API channel
│   └── whatsapp-channel/    WhatsApp Business Cloud API channel
├── hooks/                   OpenClaw lifecycle/message hooks
├── docs/                    Landing page, logos, API research, social posts
├── scripts/                 Demo/helper scripts
├── clawhub.json             Skill collection metadata
├── package.json             npm workspace root
├── SOUL.md                  Arabic persona rules
├── IDENTITY.md              Branding
└── CLAUDE.md                Project instructions
```

## Agent templates

- `agents/business/AGENT.md`
- `agents/cloud/AGENT.md`
- `agents/developer/AGENT.md`
- `agents/scholar/AGENT.md`
- `agents/translator/AGENT.md`
- `agents/travel-advisor/AGENT.md`

## Extensions

- `extensions/mkhlab-core/`
- `extensions/telegram-channel/`
- `extensions/whatsapp-channel/`

## Hooks

- `hooks/arabic-compact/`
- `hooks/arabic-preprocess/`
- `hooks/hijri-bootstrap/`

## Skill categories from clawhub.json

- `agriculture` (1): `livestock-manager`
- `business` (3): `arabic-email`, `arabic-legal`, `arabic-resume`
- `developer` (1): `arabic-code-review`
- `education` (3): `arabic-kids`, `arabic-math`, `arabic-science`
- `islamic` (6): `adhan-player`, `hadith-search`, `hijri-calendar`, `islamic-finance`, `prayer-times`, `quran-search`
- `language` (6): `arabic-grammar`, `arabic-names`, `arabic-poetry`, `dialect-detect`, `tashkeel`, `translate`
- `lifestyle` (3): `arab-travel`, `arabic-cooking`, `arabic-health`
- `media` (4): `arabic-ocr`, `voice-assistant`, `voxtral-tts`, `whisper-arabic`
- `nlp-tools` (10): `arabench`, `arabic-rag`, `artok`, `bidi-guard`, `khalas`, `majal`, `qalam`, `raqeeb`, `safha`, `sarih`
- `regional` (2): `saudi-apps`, `snapchat-content`
- `search` (1): `arabic-web-search`

## File-type snapshot

- `.md`: 145
- `.json`: 9
- `.ts`: 9
- `[no ext]`: 2
- `.svg`: 2
- `.yml`: 1
- `.gif`: 1
- `.tape`: 1
- `.html`: 1
- `.sh`: 1

## Validation commands

```bash
npm install
npm audit --workspaces
openclaw skills list
bash scripts/demo.sh
```

## Notes

- `metadata` in each `SKILL.md` should stay single-line JSON, per project instructions.
- Code comments should be English; skill instructions should be Arabic-first.
- API keys and channel credentials must come from environment/config, not committed files.
