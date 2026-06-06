# map.md — Mkhlab project, skills, and agents map

Quick navigation map for the Arabic-first OpenClaw plugin repository.

## Project snapshot

- Name: `@mkhlab/openclaw-mkhlab`
- Version: `0.1.0`
- Root: `/mnt/c/Users/d7oom/Desktop/presention/mkhlab`
- Type: OpenClaw plugin / skill collection
- Skills in `skills/`: `61`
- Agents in `agents/`: `6`
- Extensions in `extensions/`: `3`
- Hooks in `hooks/`: `3`

## Project tree

```text
mkhlab/
├── skills/                  OpenClaw skill definitions
├── hermes-skills/           Hermes-compatible skill mirror
├── agents/                  Preconfigured Arabic agent personas
├── extensions/              Plugin entry + channels
│   ├── mkhlab-core/         Core tools/providers
│   ├── telegram-channel/    Telegram Bot API channel
│   └── whatsapp-channel/    WhatsApp Business Cloud API channel
├── hooks/                   Bootstrap/preprocess/compact hooks
├── docs/                    Landing page, assets, research notes
├── scripts/                 Demo/helper scripts
├── clawhub.json             Skill collection metadata
├── package.json             npm workspace root
├── SOUL.md                  Arabic persona rules
├── IDENTITY.md              Branding
├── CLAUDE.md                Repo instructions
└── map.md                   This map
```

## Extensions map

| Extension | Plugin id | Purpose |
|---|---|---|
| `mkhlab-core` | `mkhlab-core` | Arabic-first AI assistant plugin for OpenClaw. Prayer times, Hijri calendar, Quran search, translation, dialect detection, Arabic NLP tools, and more. |
| `telegram-channel` | `mkhlab-telegram` | Telegram Bot API channel for مخلب. All 20+ Arabic skills available via Telegram bot. |
| `whatsapp-channel` | `mkhlab-whatsapp` | WhatsApp Business API channel for مخلب. Scoped to Arabic skills: prayer times, translation, Quran search, Hijri calendar. |

## Hooks map

| Hook | Purpose |
|---|---|
| `arabic-compact` | Preserve Arabic dialect and cultural context during session compaction. |
| `arabic-preprocess` | Pre-process Arabic messages before dispatch: detect dialect, convert Arabizi, normalize text. |
| `hijri-bootstrap` | Inject current Hijri date and nearest prayer time into every new session. |

## Agents map

| Agent dir | Name | Main skills | Purpose |
|---|---|---|---|
| `agents/business/AGENT.md` | 💼 رائد أعمال | `saudi-business`, `saudi-einvoice`, `saudi-ecommerce`, `saudi-pay`, `saudi-shipping`, `saudi-stocks`, `saudi-hr`, `saudi-openbanking`, ... | مستشار أعمال سعودي — متخصص في التجارة الإلكترونية والدفع والفوترة والشحن والخدمات الحكومية. |
| `agents/cloud/AGENT.md` | ☁️ سحابة | `saudi-telecom`, `saudi-opendata`, `saudi-business`, `saudi-procurement`, `saudi-legal`, `saudi-address`, `arabic-web-search`, `arabic-code-review`, ... | مهندس سحابة عربي — يساعد في اختيار مزودي السحابة، تصميم البنية، تقدير التكلفة، والأمان والامتثال في السعودية والمنطقة. |
| `agents/developer/AGENT.md` | 💻 مطوّر | `arabic-code-review`, `bidi-guard`, `raqeeb`, `qalam`, `arabic-web-search`, `artok`, `khalas`, `saudi-einvoice`, ... | مطوّر عربي — مراجعة كود مع فحص RTL وUnicode وأمان النصوص العربية. |
| `agents/scholar/AGENT.md` | 📖 عالم | `quran-search`, `hadith-search`, `hijri-calendar`, `prayer-times`, `adhan-player`, `islamic-finance`, `translate`, `saudi-legal` | باحث إسلامي — متخصص في القرآن والحديث والفقه والتاريخ الإسلامي. |
| `agents/translator/AGENT.md` | 🔄 مترجم | `translate`, `dialect-detect`, `tashkeel`, `arabic-grammar`, `arabic-science`, `arabic-legal`, `saudi-hr`, `saudi-opendata` | مترجم عربي-إنجليزي محترف — يراعي اللهجات والسياق والمصطلحات المتخصصة. |
| `agents/travel-advisor/AGENT.md` | ✈️ travel-advisor | `travel-advisor-visa`, `arabic-web-search`, `saudi-tourism`, `arab-travel` | مستشار سفر وسياحة — يساعد في التأشيرات، متطلبات الدخول، والتخطيط للسفر مع الاعتماد على المصادر الرسمية. |

## Skills map by category

### agriculture (1)

| Skill | Description |
|---|---|
| `skills/livestock-manager` | إدارة الحلال — ساعد مربي الأغنام والماعز في إدارة قطيعهم: تغذية، صحة، ولادات، مبيعات، حسابات. مبني على تطبيق مراح. استخدم عندما يسأل المستخدم عن تربية الحلال أو إدارة المراح. |

### business (3)

| Skill | Description |
|---|---|
| `skills/arabic-email` | كاتب إيميلات عربية — اكتب رسائل بريد إلكتروني رسمية وشبه رسمية بالعربي بأسلوب احترافي. استخدم عندما يطلب المستخدم كتابة إيميل بالعربي. |
| `skills/arabic-legal` | مصطلحات قانونية عربية — ترجم واشرح مصطلحات قانونية، ساعد في فهم العقود والمستندات القانونية بالعربي. استخدم عندما يسأل عن قانون أو عقد. |
| `skills/arabic-resume` | كاتب السيرة الذاتية — اكتب سيرة ذاتية احترافية بالعربي أو ثنائية اللغة. استخدم عندما يطلب المستخدم مساعدة في CV أو سيرة ذاتية. |

### developer (1)

| Skill | Description |
|---|---|
| `skills/arabic-code-review` | مراجعة كود عربي — راجع الكود مع فحص التعامل مع النصوص العربية وRTL والتعليقات العربية. استخدم عندما يطلب المستخدم مراجعة كود يتعامل مع العربي. |

### education (3)

| Skill | Description |
|---|---|
| `skills/arabic-kids` | تعليم أطفال بالعربي — محتوى تعليمي للأطفال: قصص، ألعاب تعليمية، تعلم الحروف والأرقام، أناشيد. استخدم عندما يسأل أولياء الأمور عن محتوى تعليمي لأطفالهم. |
| `skills/arabic-math` | رياضيات بالعربي — حل مسائل رياضية مع شرح بالعربي ودعم الأرقام العربية (٠-٩). استخدم عندما يطلب المستخدم حل مسألة رياضية أو شرح مفهوم رياضي. |
| `skills/arabic-science` | مصطلحات علمية عربية — ترجم واشرح مصطلحات علمية بالعربي. يغطي: فيزياء، كيمياء، أحياء، حاسوب، هندسة. استخدم عندما يسأل عن مصطلح علمي أو يحتاج شرح علمي بالعربي. |

### islamic (6)

| Skill | Description |
|---|---|
| `skills/adhan-player` | مشغّل الأذان — شغّل أذان بأصوات مؤذنين مختلفين (العفاسي، عبدالباسط، المجالي...). استخدم عندما يطلب المستخدم سماع الأذان أو تشغيل صوت مؤذن. |
| `skills/hadith-search` | بحث في الأحاديث النبوية — ابحث عن أحاديث بالكلمة أو الموضوع من صحيح البخاري ومسلم وغيرها. استخدم عندما يسأل المستخدم عن حديث نبوي. |
| `skills/hijri-calendar` | التقويم الهجري — تحويل التواريخ بين الميلادي والهجري ومعرفة المناسبات الإسلامية. استخدم عندما يسأل المستخدم عن تاريخ هجري أو مناسبة إسلامية. |
| `skills/islamic-finance` | المالية الإسلامية — حاسبة زكاة، فحص حلال للاستثمارات، مصطلحات بنكية إسلامية. استخدم عندما يسأل المستخدم عن زكاة أو استثمار حلال أو بنوك إسلامية. |
| `skills/prayer-times` | أوقات الصلاة — احسب أوقات الصلوات الخمس بناءً على موقع المستخدم. استخدم هذه المهارة عندما يسأل المستخدم عن وقت الصلاة أو الأذان أو الإقامة. |
| `skills/quran-search` | بحث في القرآن الكريم — ابحث عن آيات بالكلمة أو رقم السورة والآية. استخدم عندما يسأل المستخدم عن آية قرآنية أو تفسير أو سورة. |

### language (6)

| Skill | Description |
|---|---|
| `skills/arabic-grammar` | مدقق القواعد العربية — صحح الأخطاء النحوية والإملائية في النصوص العربية. استخدم عندما يطلب المستخدم تصحيح نص أو مراجعة لغوية. |
| `skills/arabic-names` | أسماء عربية — ابحث عن معاني الأسماء العربية، اقترح أسماء لمواليد، واعرف أصل الاسم ومعناه. استخدم عندما يسأل عن معنى اسم أو يريد اقتراح أسماء. |
| `skills/arabic-poetry` | الشعر العربي — ابحث عن أبيات شعرية، اشرح قصائد، اكتب شعر بأي بحر. استخدم عندما يسأل المستخدم عن شعر أو بيت أو يريد كتابة شعر. |
| `skills/dialect-detect` | اكتشاف اللهجة العربية — حدد لهجة المستخدم وردّ بنفس لهجته. يعمل بالخلفية مع كل رسالة عربية. |
| `skills/tashkeel` | التشكيل — أضف الحركات (الفتحة، الضمة، الكسرة، السكون، الشدة، التنوين) على النصوص العربية. استخدم عندما يطلب المستخدم تشكيل نص. |
| `skills/translate` | ترجمة عربي ↔ إنجليزي — ترجم نصوص بين العربية والإنجليزية مع مراعاة اللهجات والسياق. استخدم عندما يطلب المستخدم ترجمة أو يرسل نص بلغة ويريده بالأخرى. |

### lifestyle (3)

| Skill | Description |
|---|---|
| `skills/arab-travel` | دليل السفر العربي — معلومات سياحية عن الدول العربية: تأشيرات، أماكن، تكاليف، نصائح. استخدم عندما يسأل المستخدم عن السفر لدولة عربية. |
| `skills/arabic-cooking` | وصفات عربية — ابحث واقترح وصفات من المطبخ العربي (سعودي، مصري، شامي، مغربي، خليجي). استخدم عندما يسأل المستخدم عن طبخ أو وصفة أو مكوّنات. |
| `skills/arabic-health` | مصطلحات صحية عربية — ترجم واشرح مصطلحات طبية بالعربي، ساعد في فهم التقارير الطبية، واعطِ معلومات صحية عامة. استخدم عندما يسأل عن صحة أو طب. |

### media (4)

| Skill | Description |
|---|---|
| `skills/arabic-ocr` | التعرف على النص العربي في الصور — استخرج نص عربي من صور ومستندات ومخطوطات. استخدم عندما يرسل المستخدم صورة تحتوي نص عربي. |
| `skills/voice-assistant` | مساعد صوتي عربي — حوّل الصوت لنص، عالجه، وردّ بصوت عربي. خط أنابيب كامل: Whisper → LLM → TTS. استخدم عندما يريد المستخدم تفاعل صوتي كامل. |
| `skills/voxtral-tts` | تحويل النص لصوت عربي — حوّل أي نص عربي لملف صوتي باستخدام Voxtral أو SILMA TTS. استخدم عندما يريد المستخدم سماع نص أو توليد صوت عربي. |
| `skills/whisper-arabic` | تحويل الصوت لنص عربي — فرّغ ملفات صوتية عربية لنص مكتوب باستخدام Whisper. استخدم عندما يريد المستخدم تفريغ صوت أو فيديو عربي. |

### nlp-tools (10)

| Skill | Description |
|---|---|
| `skills/arabench` | معيار جودة العربية — قيّم جودة أي نموذج ذكاء اصطناعي بالعربي عبر 8 فئات (ترجمة، قواعد، لهجات، تشكيل...). استخدم عندما يريد المستخدم مقارنة نماذج أو اختبار جودة العربي. |
| `skills/arabic-rag` | بحث دلالي عربي — ابحث في القرآن والأحاديث والنصوص العربية بالمعنى مو بالكلمة. يستخدم AraGemma embeddings للبحث الذكي. استخدم عندما البحث النصي البسيط ما يكفي. |
| `skills/artok` | حاسبة ضريبة التوكنات — قارن تكلفة التوكنات العربية عبر 18 محلل (tokenizer) واعرض كفاءة كل مزوّد. استخدم لتحليل تكاليف API. |
| `skills/bidi-guard` | حماية من هجمات Trojan Source — اكتشف حروف Unicode الاتجاهية المخفية في الكود (CVE-2021-42574). استخدم لفحص الكود المصدري أمنياً. |
| `skills/khalas` | تحسين التوكنات العربية — حلل وقلل تكلفة البرومبتات العربية. استخدم عندما يريد المستخدم توفير تكاليف API أو فهم كفاءة التوكنات. |
| `skills/majal` | فاحص بيانات التدريب العربية — اكتشف مشاكل الترميز والمحتوى المخفي وخلط اللهجات في ملفات JSONL. استخدم لتنظيف بيانات التدريب. |
| `skills/qalam` | توثيق عربي من الكود — ولّد توثيق عربي تلقائي من كود Python/JS/TS مع قاموس تقني مدمج (300+ مصطلح). يعمل بدون إنترنت. |
| `skills/raqeeb` | فاحص RTL — اكتشف مشاكل الاتجاه من اليمين لليسار في HTML/CSS واحصل على تقييم RTL (0-100). استخدم لفحص المواقع العربية. |
| `skills/safha` | كاشط محتوى عربي — اجمع محتوى عربي من الويب، نظّفه، واكتشف لهجته. مخصص لتجهيز بيانات التدريب. |
| `skills/sarih` | فلترة المحتوى العربي — اكتشف المحتوى السام والكراهية والسبام بـ5 لهجات عربية. يعمل بدون إنترنت. استخدم لفحص النصوص أو تنظيف بيانات. |

### not-in-clawhub (21)

| Skill | Description |
|---|---|
| `skills/saudi-address` | العنوان الوطني — ابحث وتحقق من العناوين السعودية، حوّل إحداثيات لعنوان، واعثر على أقرب الخدمات. يستخدم واجهة العنوان الوطني الرسمية من البريد السعودي. |
| `skills/saudi-business` | بيانات الشركات السعودية — استعلم عن السجلات التجارية وتحقق من الشركات عبر منصة وثق الرسمية. استخدم عندما يسأل المستخدم عن شركة سعودية أو سجل تجاري. |
| `skills/saudi-customs` | الجمارك والتجارة السعودية — Saudi customs, import/export via Fasah, ZATCA APIs, tariffs, and HS codes |
| `skills/saudi-ecommerce` | منصات التجارة الإلكترونية السعودية — ربط مع سلة وزد ونون عبر API. استخدم عندما يسأل المستخدم عن التجارة الإلكترونية أو سلة أو زد أو نون. |
| `skills/saudi-einvoice` | الفوترة الإلكترونية (زاتكا) — إصدار فواتير إلكترونية والتحقق من الامتثال عبر منصة فاتورة. استخدم عندما يسأل المستخدم عن الفوترة الإلكترونية أو زاتكا أو فاتورة. |
| `skills/saudi-food` | تقنيات المطاعم والتوصيل في السعودية — Saudi restaurant POS, food delivery APIs: Foodics, HungerStation, Jahez, Careem |
| `skills/saudi-hr` | واجهات الموارد البشرية والتوظيف السعودية — Saudi HR & employment APIs via Masdr, Mudad, Qiwa, and Musaned |
| `skills/saudi-identity` | التحقق من الهوية الرقمية السعودية — Saudi digital identity verification via Nafath & Yakeen APIs |
| `skills/saudi-legal` | الخدمات القانونية السعودية — Saudi legal services via Najiz & Wathq APIs for courts, deeds, and power of attorney |
| `skills/saudi-openbanking` | الخدمات المصرفية المفتوحة السعودية — Saudi Open Banking APIs via SAMA framework, Lean Technologies, and bank portals |
| `skills/saudi-opendata` | البيانات المفتوحة السعودية — Saudi Open Data Portal with 11,000+ datasets from 289+ government organizations |
| `skills/saudi-pay` | بوابات الدفع السعودية — ربط بوابات الدفع مثل مويسر وتاب وهايبرباي وتابي وتمارا. استخدم عندما يسأل المستخدم عن قبول المدفوعات أو بوابات الدفع في السعودية. |
| `skills/saudi-procurement` | المشتريات الحكومية السعودية عبر اعتماد — Saudi government procurement, contracts, and salary certificates via Etimad |
| `skills/saudi-shipping` | الشحن والتوصيل في السعودية — تتبع شحنات وإنشاء بوالص شحن عبر شركات مثل سمسا وأرامكس وناقل. استخدم عندما يسأل المستخدم عن شحن أو تتبع طرد في السعودية. |
| `skills/saudi-stocks` | أسهم تداول — استعلم عن أسعار الأسهم السعودية ومؤشر تاسي والبيانات المالية للشركات المدرجة في السوق السعودي. |
| `skills/saudi-telecom` | واجهات شركات الاتصالات السعودية — Saudi telecom developer APIs for SMS, OTP, and payments via STC, Mobily, Zain |
| `skills/saudi-tourism` | السياحة في السعودية — Saudi tourism attractions, events, visa info, and tourism APIs |
| `skills/saudi-tts` | تحويل النص إلى كلام بالعربية السعودية — Saudi Arabic text-to-speech with NAMAA, Lahajati, and dialect support |
| `skills/saudi-weather` | طقس المدن السعودية — استعلم عن درجة الحرارة والرطوبة والرياح في مدن المملكة. استخدم عندما يسأل المستخدم عن الطقس في مدينة سعودية. |
| `skills/travel-advisor-visa` | مستشار السفر والتأشيرات — افحص متطلبات الدخول والتأشيرة حسب جنسية المستخدم ووجهته، مع أولوية للمصادر الرسمية مثل مواقع السفارات، وزارات الخارجية، والبوابات الحكومية. |
| `skills/unifonic` | يونيفونك — إرسال رسائل SMS وواتساب ومكالمات صوتية — Unifonic Saudi CPaaS for SMS, WhatsApp, voice, and OTP |

### regional (2)

| Skill | Description |
|---|---|
| `skills/saudi-apps` | تطبيقات سعودية — دليل التطبيقات والخدمات السعودية المحلية: توصيل، حكومية، بنكية، تسوق. استخدم عندما يسأل المستخدم عن تطبيق أو خدمة سعودية أو خليجية. |
| `skills/snapchat-content` | محتوى سناب شات — ساعد في إنشاء محتوى سناب شات عربي: أفكار سنابات، نصوص، استراتيجيات نمو. استخدم عندما يسأل المستخدم عن سناب شات أو صناعة محتوى عربي. |

### search (1)

| Skill | Description |
|---|---|
| `skills/arabic-web-search` | بحث ويب عربي — ابحث في الإنترنت بالعربي مع أولوية للمواقع العربية الموثوقة. استخدم عندما يسأل المستخدم سؤال يحتاج معلومات حديثة. |

## Common commands

```bash
npm install
npm run audit
npm run demo
npm run map
openclaw skills list
```

## Conventions

- Skill instructions/descriptions are Arabic-first.
- TypeScript code and comments are English.
- `SKILL.md` frontmatter uses OpenClaw format.
- Keep API keys and channel credentials in environment/config, never in repo files.