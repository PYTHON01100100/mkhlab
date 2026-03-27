# Social Media Launch — مخلب v0.4.0

## X/Twitter — English

```
just shipped مخلب (Mkhlab) v0.4.0 — the first Arabic AI plugin for @OpenClaw by @steipete

built with @AnthropicAI Claude. shoutout @TIIuae @NVIDIAAI @claudeai @SDAIA_SA

420 million Arabic speakers and literally zero open source Arabic AI assistants. GPT drops from 85% accuracy to 45% when you talk to it in your dialect. Arabic costs 2x to 3x more tokens than English on every single provider. OpenClaw has 337K stars and nothing for Arabic. not a single skill. not a single plugin. nothing.

so I built it.

60 Arabic AI skills. 4 pre configured agent templates. 2 messaging channels. hooks that detect your dialect before the message even hits the model. native Arabic TTS and STT providers. bidi attack prevention built into every single message. NemoClaw security sandbox support from NVIDIA.

prayer times for any city with the right calculation method for your region. Quran search by keyword or ayah number with uthmani script. hadith search across 9 books including Bukhari, Muslim, Tirmidhi, Abu Dawud, Nasai, Ibn Majah, Malik, Ahmad, and Darimi. hijri calendar with date conversion and Islamic event tracking. adhan player with 10+ muezzin voices. full Islamic finance toolkit with zakat calculator and halal investment checker.

translation that actually understands dialects. not just MSA. Egyptian. Gulf. Levantine. Maghrebi. Iraqi. it detects which one you speak and responds in the same dialect. Arabizi converter that turns "7abibi" and "3adi" into proper Arabic script. grammar checker. tashkeel diacritics. Arabic poetry search and composition across all 16 meters. baby name meanings and suggestions with Islamic naming rules.

Arabic TTS via Voxtral (just launched this week). Arabic STT via Whisper. Arabic OCR via Tesseract and QARI. full voice assistant pipeline that chains STT to LLM to TTS. Saudi dialect TTS via NAMAA-Saudi-TTS from Hugging Face. 192+ Arabic dialect voices via Lahajati.

9 Arabic NLP tools that I built separately and integrated as skills. arabench benchmarks any model's Arabic quality across 8 categories. khalas optimizes Arabic prompts to cut token costs. sarih moderates Arabic content offline across 5 dialects. bidi-guard catches Trojan Source attacks in code. qalam generates Arabic docs from Python/JS/TS. artok compares Arabic token costs across 18 tokenizers. majal inspects Arabic training data with 16 quality checks. safha scrapes and cleans Arabic web content. raqeeb finds RTL bugs in HTML/CSS with a score out of 100.

Arabic code review that checks for Unicode safety, RTL correctness, Arabic regex patterns, proper collation, and alef/taa normalization. Arabic web search that prioritizes trusted Arabic sources by domain. Arabic math solver with Arabic numeral support and full terminology. science term translator covering CS, physics, chemistry, and biology.

and then the Saudi ecosystem. 17 skills that plug directly into Saudi Arabia's digital infrastructure.

e-invoicing with @Zatca_sa Fatoorah API. compliance, reporting, and clearance endpoints for both B2B and B2C. commercial registration lookups via @Wathq_sa with 15+ government data APIs. national address search via @SPL_KSA_online. digital identity through Nafath and Yakeen by @elm.

payment gateways: @moyasarcom @gotapnow @HyperPay @PayTabs. buy now pay later via @paywithtabby and @useTamara. mobile payments via @stcpay_ksa. open banking through @LeanTechHQ with SAMA framework. stock market data from Tadawul and CMA.

shipping and logistics: @smsaexpress @Aramex @NaqelExpr @jtexpressme @BarqFleet. e-commerce platforms: @SallaApp (68K+ merchants) and @zidappcom. food delivery and restaurant POS: @foodics (30K+ restaurants) @HungerStation @JahezApp @CareemKSA.

government services: @najiz_sa for 63+ Ministry of Justice APIs. @etimadsa for procurement and contracts. @SaudiGOSI employment data via Masdr. @Qiwa_sa workforce management. Saudi customs via @Fasah import/export platform.

telecom developer APIs from @stc_ksa @Mobily @ZainKSA with SMS, OTP, and payment endpoints. @Unifonic for WhatsApp and voice CPaaS. tourism via @VisitSaudi partner API.

open data from @SDAIA_SA — 11,439 datasets from 289 government organizations. completely free. no API key needed.

weather for every Saudi city. Saudi dialect TTS that actually sounds Saudi.

Saudi apps guide covering 50+ apps. HungerStation, Jahez, Mrsool, @noon, Absher, Tawakkalna, Nafath, Najiz, Qiwa, Taqat, all of them with what they do and when to use them. Snapchat content creator built for the Saudi market because Saudi Arabia is literally #1 globally in Snapchat usage. Arabic cooking recipes organized by region. travel guide for 20+ Arab countries with visa info and best times to visit. health terms translator. Arabic resume and email writer. legal terminology. kids education. livestock management from our Maraah app.

4 agent templates ready to use. عالم (Scholar) for Islamic research. مترجم (Translator) for professional Arabic-English work. مطوّر (Developer) for Arabic-first coding. رائد أعمال (Entrepreneur) for Saudi business — e-commerce, payments, invoicing, shipping, government services, all wired up.

WhatsApp channel scoped to Islamic services because Meta banned general purpose AI bots in January 2026. Telegram channel with full access to all 60 skills in both polling and webhook modes.

hooks that run before every message. arabic-preprocess detects your language and dialect, converts Arabizi to Arabic, strips dangerous bidi override characters. hijri-bootstrap injects the current Hijri date and upcoming Islamic events into every new session automatically. arabic-compact preserves your dialect preference when OpenClaw compacts the session so it doesn't forget how you talk.

not a fork. it's a plugin. same architecture as openclaw-china (3,585 stars) which proved you can build a complete regional experience without touching core code. installs in 2 minutes. MIT license. works with any model you want. Claude, GPT, Gemini, Qwen, DeepSeek, GLM, Kimi. Arabic first models like Jais 2 from UAE, ALLaM from Saudi, SILMA, Falcon H1, Karnak from Egypt, Fanar from Qatar. local via Ollama, vLLM, or LM Studio. you pick the brain and مخلب handles the Arabic.

from the Saudi open source community 🇸🇦 for the entire Arab world

all the links you need:

🔗 GitHub repo: github.com/Moshe-ship/mkhlab
🌐 Landing page: moshe-ship.github.io/mkhlab
📦 Latest release: github.com/Moshe-ship/mkhlab/releases/tag/v0.4.0
📖 OpenClaw (the platform): github.com/openclaw/openclaw

Islamic APIs:
🕌 Prayer times API: aladhan.com/prayer-times-api
📖 Quran API: alquran.cloud
📜 Hadith API: api.hadith.gading.dev/books

Saudi government APIs:
🧾 ZATCA Fatoorah: zatca.gov.sa/en/E-Invoicing
🏢 Wathq: developer.wathq.sa
📍 National Address: api.address.gov.sa
⚖️ Najiz: developers.najiz.sa
📋 Etimad: apiportal.etimad.sa
👔 Masdr: portal.masdr.sa
📊 Saudi Open Data: data.gov.sa
🕌 Visit Saudi: partner.visitsaudi.com
🛃 Fasah: fasah.zatca.gov.sa

Saudi fintech/ecommerce:
💳 Moyasar: docs.moyasar.com
💳 Tap Payments: developers.tap.company
🛒 Salla: docs.salla.dev
🛒 Zid: docs.zid.sa
🏦 Lean Technologies: docs.leantech.me
💬 Unifonic: docs.unifonic.com
🍽️ Foodics: console.foodics.com

AI/ML:
🔊 Voxtral TTS: mistral.ai
🗣️ NAMAA Saudi TTS: huggingface.co/NAMAA-Space/NAMAA-Saudi-TTS
🧠 AraGemma embeddings: huggingface.co/Omartificial-Intelligence-Space/AraGemma-Embedding-300m
🦅 Falcon-H1 Arabic: huggingface.co/tiiuae/Falcon-H1-Arabic-7B
🤖 Jais 2: huggingface.co/inceptionai/Jais-2-8B-Chat-GGUF
🇸🇦 ALLaM: huggingface.co/sdaia/allam-1-13b-instruct
🏆 Arabic LLM Leaderboard: huggingface.co/blog/leaderboard-arabic
🐑 Maraah (livestock app): built on this domain knowledge

tools I built that power the NLP skills:
🔬 arabench: benchmarks Arabic LLM quality
✂️ khalas: Arabic token optimizer
🛡️ sarih: Arabic content moderator (offline)
🔒 bidi-guard: Trojan Source scanner
📝 qalam: Arabic docs generator
🧮 artok: Arabic token cost calculator
🔍 majal: Arabic dataset inspector
🕸️ safha: Arabic web scraper
↩️ raqeeb: RTL bug finder

star it ⭐ fork it 🍴 build on it 🔨
Arabic deserves better AI and this is the start
```

---

## X/Twitter — Arabic

```
أطلقت مخلب v0.4.0 أول إضافة عربية لـ @OpenClaw اللي أسسه @steipete

بنيته بـ @claudeai من @AnthropicAI. تحية لـ @TIIuae @NVIDIAAI @SDAIA_SA @Aborhaan

٤٢٠ مليون عربي وما في ولا مساعد ذكاء اصطناعي عربي مفتوح المصدر. GPT تنزل دقته من ٨٥٪ لـ ٤٥٪ لما تكلمه بلهجتك. العربي يكلفك ضعفين لثلاثة أضعاف الإنجليزي بالتوكنات. OpenClaw عنده ٣٣٧ ألف نجمة وما فيه ولا شي عربي. ولا skill. ولا plugin. ولا شي.

فسويته.

٦٠ مهارة ذكاء اصطناعي عربية. ٤ قوالب وكلاء جاهزة. ٢ قنوات تواصل. hooks تكتشف لهجتك قبل ما توصل رسالتك للنموذج. مزودين صوت عربي أصلي. حماية من هجمات bidi مدمجة بكل رسالة. دعم NemoClaw من NVIDIA للأمان.

أوقات صلاة لأي مدينة بطريقة الحساب الصح حسب منطقتك. بحث قرآن بالكلمة أو رقم الآية بالرسم العثماني. بحث أحاديث في ٩ كتب البخاري ومسلم والترمذي وأبي داود والنسائي وابن ماجه ومالك وأحمد والدارمي. تقويم هجري مع تحويل تواريخ ومتابعة المناسبات الإسلامية. مشغل أذان بأكثر من ١٠ أصوات مؤذنين. حاسبة زكاة كاملة وفاحص استثمارات حلال.

ترجمة تفهم اللهجات فعلاً. مو بس فصحى. مصري. خليجي. شامي. مغربي. عراقي. يكتشف لهجتك ويرد بنفسها. محول عربيزي يحول "7abibi" و"3adi" لعربي صحيح. مدقق نحوي. تشكيل. بحث شعر عربي وكتابة بكل البحور الـ١٦. معاني أسماء واقتراحات مواليد مع أحكام التسمية.

تحويل نص لصوت عربي عبر Voxtral. تفريغ صوت عربي عبر Whisper. التعرف على نص عربي بالصور. خط أنابيب صوتي كامل. صوت سعودي حقيقي عبر NAMAA-Saudi-TTS. ١٩٢+ لهجة عربية عبر Lahajati.

٩ أدوات NLP عربية بنيتها بشكل مستقل ودمجتها كمهارات. arabench يقيّم جودة أي نموذج بالعربي عبر ٨ فئات. khalas يحسّن البرومبتات العربية ويقلل التكلفة. sarih يفلتر المحتوى السام بـ٥ لهجات بدون إنترنت. bidi-guard يكشف هجمات Trojan Source بالكود. qalam يولّد توثيق عربي. artok يقارن تكلفة التوكنات العربية عبر ١٨ محلل. majal يفحص بيانات التدريب بـ١٦ فحص جودة. safha يكشط وينظف محتوى عربي من الويب. raqeeb يفحص مشاكل RTL ويعطي تقييم من ١٠٠.

مراجعة كود متخصصة بالعربي تفحص أمان Unicode وصحة RTL وأنماط regex العربية وتطبيع الألف والتاء المربوطة. بحث ويب عربي يعطي أولوية للمصادر العربية الموثوقة. رياضيات بالعربي مع دعم الأرقام العربية. ترجمة مصطلحات علمية تغطي حاسوب وفيزياء وكيمياء وأحياء.

وبعدين المنظومة السعودية. ١٧ مهارة تربطك مباشرة بالبنية التحتية الرقمية السعودية.

الفوترة الإلكترونية عبر @Zatca_sa فاتورة. تقارير ومطابقة للفواتير المبسطة والضريبية. الاستعلام عن السجلات التجارية عبر @Wathq_sa بأكثر من ١٥ واجهة حكومية. العنوان الوطني عبر @SPL_KSA_online. الهوية الرقمية عبر نفاذ ويقين من @elm.

بوابات الدفع عبر @moyasarcom و @gotapnow و @HyperPay و @PayTabs. تقسيط عبر @paywithtabby و @useTamara. دفع جوال عبر @stcpay_ksa. خدمات مصرفية مفتوحة عبر @LeanTechHQ بإطار @SAMA_GOV. بيانات أسهم تداول وهيئة السوق المالية.

الشحن والتوصيل عبر @smsaexpress و @Aramex و @NaqelExpr و @jtexpressme و @BarqFleet. التجارة الإلكترونية عبر @SallaApp اللي عندها أكثر من ٦٨ ألف تاجر و @zidappcom. توصيل المطاعم وأنظمة نقاط البيع عبر @foodics اللي تشغل أكثر من ٣٠ ألف مطعم و @HungerStation و @JahezApp و @CareemKSA.

الخدمات الحكومية عبر @najiz_sa بأكثر من ٦٣ واجهة من وزارة العدل. @etimadsa للمشتريات والعقود. @SaudiGOSI بيانات التوظيف عبر مصدر. @Qiwa_sa لإدارة القوى العاملة. الجمارك والاستيراد عبر @Fasah.

واجهات الاتصالات من @stc_ksa و @Mobily و @ZainKSA للرسائل والتحقق والدفع. @Unifonic للواتساب والصوت. السياحة عبر @VisitSaudi.

البيانات المفتوحة من @SDAIA_SA بأكثر من ١١ ألف مجموعة بيانات من ٢٨٩ جهة حكومية. مجانية بالكامل. بدون مفتاح.

طقس لكل مدينة سعودية. صوت سعودي حقيقي عبر NAMAA.

دليل تطبيقات سعودية لأكثر من ٥٠ تطبيق. @HungerStation و @JahezApp ومرسول و @noon وأبشر وتوكلنا ونفاذ وناجز وقوى. صانع محتوى سناب شات مبني للسوق السعودي لأن السعودية حرفياً رقم ١ عالمياً باستخدام سناب. وصفات طبخ عربي مرتبة حسب المنطقة. كبسة وكشري ومنسف وكسكس. دليل سفر لأكثر من ٢٠ دولة عربية. مصطلحات صحية لفهم التقارير الطبية. كاتب سيرة ذاتية وإيميلات رسمية. مصطلحات قانونية. تعليم أطفال بالحروف والقصص. إدارة حلال لمربي الأغنام والماعز مبني على تطبيقنا مراح.

٤ قوالب وكلاء جاهزة. عالم للبحث الإسلامي بمهارات القرآن والحديث والفقه. مترجم للترجمة الاحترافية مع وعي باللهجات. مطوّر للبرمجة العربية مع مراجعة RTL وأمان bidi. رائد أعمال للتجارة الإلكترونية والدفع والفوترة والشحن والخدمات الحكومية كل شي مربوط.

قناة واتساب مخصصة للخدمات الإسلامية لأن Meta منعت بوتات الذكاء الاصطناعي العامة بيناير ٢٠٢٦. قناة تلغرام بصلاحية كاملة لكل الـ٦٠ مهارة بوضعي polling و webhook.

hooks تشتغل قبل كل رسالة. arabic-preprocess يكتشف لغتك ولهجتك ويحول العربيزي لعربي وينظف حروف bidi الخطيرة. hijri-bootstrap يحقن التاريخ الهجري والمناسبات الإسلامية القادمة بكل جلسة جديدة تلقائياً. arabic-compact يحفظ تفضيلات لهجتك لما OpenClaw يضغط الجلسة عشان ما ينسى كيف تتكلم.

مو fork. هو plugin. نفس معمارية openclaw-china اللي أثبتت إنك تقدر تبني تجربة إقليمية كاملة بدون ما تعدل الكود الأساسي. يتثبت بدقيقتين. ترخيص MIT. يشتغل مع أي نموذج تبيه. Claude و GPT و Gemini و Qwen و DeepSeek و GLM و Kimi. نماذج عربية مثل Jais 2 من الإمارات و ALLaM من السعودية و SILMA و Falcon H1 و Karnak من مصر و Fanar من قطر. محلي عبر Ollama أو vLLM أو LM Studio. انت تختار المخ ومخلب يتكفل بالعربي.

من المجتمع السعودي مفتوح المصدر 🇸🇦 للعالم العربي كله

github.com/Moshe-ship/mkhlab
moshe-ship.github.io/mkhlab
github.com/Moshe-ship/mkhlab/releases/tag/v0.4.0
github.com/openclaw/openclaw

developer.wathq.sa
zatca.gov.sa/en/E-Invoicing
api.address.gov.sa
developers.najiz.sa
apiportal.etimad.sa
portal.masdr.sa
data.gov.sa
fasah.zatca.gov.sa

docs.moyasar.com
developers.tap.company
docs.salla.dev
docs.zid.sa
docs.leantech.me
docs.unifonic.com
console.foodics.com
partner.visitsaudi.com

huggingface.co/NAMAA-Space/NAMAA-Saudi-TTS
huggingface.co/tiiuae/Falcon-H1-Arabic-7B
huggingface.co/inceptionai/Jais-2-8B-Chat-GGUF
huggingface.co/sdaia/allam-1-13b-instruct
aladhan.com/prayer-times-api
alquran.cloud
mistral.ai

حط نجمة ⭐ انسخه 🍴 ابنِ عليه 🔨
العربي يستاهل ذكاء اصطناعي أفضل وهذي البداية
```

---

## LinkedIn

```
just shipped مخلب (Mkhlab) v0.4.0 — the first Arabic AI plugin for OpenClaw

420 million Arabic speakers and zero open source Arabic AI assistants. GPT drops from 85% to 45% accuracy on Arabic dialects. Arabic costs 2x to 3x more tokens than English. OpenClaw has 337K stars but zero Arabic support.

built مخلب to fix this. 60 Arabic AI skills. up from 40 in v0.3 — 17 brand new Saudi ecosystem integrations.

the core: Islamic services (prayer times, Quran search, hadith across 9 books, hijri calendar, adhan, Islamic finance), language (dialect-aware translation for Egyptian/Gulf/Levantine/Maghrebi/Iraqi, Arabizi conversion, grammar, tashkeel, poetry, names), developer tools (Arabic code review, bidi security, RTL testing, docs gen, token analysis), media (TTS/STT/OCR/voice pipeline, Saudi dialect TTS via NAMAA), education (math, science, kids), business (resume, email, legal), and regional (50+ Saudi apps, Snapchat content, cooking, travel, health, livestock management).

and now the Saudi ecosystem. 17 skills that plug directly into Saudi Arabia's digital infrastructure:

payments — Moyasar, Tap Payments, HyperPay, PayTabs, Tabby, Tamara, STC Pay. open banking via Lean Technologies under SAMA framework. e-invoicing with ZATCA Fatoorah API (compliance, reporting, clearance). commercial registration via Wathq (15+ government data APIs). national address via Saudi Post. digital identity via Nafath and Yakeen (Elm). stock market data from Tadawul.

shipping — SMSA Express, Aramex, Naqel, J&T Express, BARQ. e-commerce platforms — Salla (68K+ merchants), Zid. food delivery and POS — Foodics (30K+ restaurants), HungerStation, Jahez, Careem.

government — Najiz (63+ Ministry of Justice APIs), Etimad procurement, GOSI employment data via Masdr, Qiwa workforce, Fasah customs. telecom APIs from STC, Mobily, Zain KSA. messaging via Unifonic CPaaS. tourism via Visit Saudi.

open data from SDAIA — 11,439 datasets from 289 government organizations. free. no key needed.

4 agent templates: Islamic scholar, professional translator, Arabic developer, and now Saudi entrepreneur (wired into ecommerce, payments, invoicing, shipping, government services).

3 hooks preprocess Arabic before the model sees it. native speech providers. bidi attack prevention (CVE-2021-42574). NemoClaw security. WhatsApp + Telegram channels.

plugin architecture like openclaw-china (3,585 stars). works with any model including Arabic-first (Jais 2, ALLaM, SILMA, Falcon-H1, Karnak, Fanar) and local via Ollama. MIT license.

from the Saudi open source community for the Arab world.

🔗 GitHub: github.com/Moshe-ship/mkhlab
🌐 Landing page: moshe-ship.github.io/mkhlab
📦 Release: github.com/Moshe-ship/mkhlab/releases/tag/v0.4.0
📖 OpenClaw: github.com/openclaw/openclaw

Saudi APIs integrated:
🧾 ZATCA Fatoorah: zatca.gov.sa/en/E-Invoicing
🏢 Wathq: developer.wathq.sa
📍 National Address: api.address.gov.sa
⚖️ Najiz: developers.najiz.sa
💳 Moyasar: docs.moyasar.com
💳 Tap: developers.tap.company
🛒 Salla: docs.salla.dev
🏦 Lean: docs.leantech.me
💬 Unifonic: docs.unifonic.com
🍽️ Foodics: console.foodics.com
📊 Saudi Open Data: data.gov.sa
🗣️ NAMAA TTS: huggingface.co/NAMAA-Space/NAMAA-Saudi-TTS

#ArabicAI #OpenSource #SaudiArabia #OpenClaw #AI #NLP #Vision2030 #Fintech #SaudiTech
```

---

## Reddit (r/opensource + r/arabs + r/artificial + r/saudiarabia)

```
Title: مخلب (Mkhlab) v0.4.0 — 60 Arabic AI skills for OpenClaw with full Saudi ecosystem integration

420 million Arabic speakers and zero open source Arabic AI assistants until now. GPT accuracy drops from 85% to 45% on dialects. Arabic costs 2-3x more tokens. OpenClaw has 337K stars and nothing for Arabic.

Built مخلب to fix this. Now at 60 skills — up from 40 last release.

The big addition in v0.4: 17 Saudi ecosystem skills that plug into Saudi Arabia's digital infrastructure:

**Payments & Fintech:** Moyasar, Tap Payments, HyperPay, PayTabs, Tabby (BNPL), Tamara (BNPL), STC Pay. Open banking via Lean Technologies (SAMA-approved). Tadawul stock data.

**E-Invoicing:** ZATCA Fatoorah API — compliance CSID, B2B clearance, B2C reporting. Mandatory for all Saudi businesses.

**Government APIs:** Wathq (15+ Ministry of Commerce APIs), Najiz (63+ Ministry of Justice APIs), Etimad (procurement), Masdr/GOSI (employment data), Qiwa (workforce), Fasah (customs/import-export), National Address (Saudi Post), Nafath + Yakeen (digital identity by Elm).

**E-Commerce:** Salla (68K+ merchants, Saudi Shopify), Zid, Noon marketplace.

**Logistics:** SMSA Express, Aramex, Naqel, J&T Express, BARQ Fleet.

**Food/Restaurant:** Foodics POS (30K+ restaurants), HungerStation, Jahez, Careem.

**Telecom:** STC, Mobily, Zain KSA developer APIs. Unifonic CPaaS (SMS, WhatsApp, Voice).

**Data:** Saudi Open Data (11,439 datasets from 289 orgs, free). Tourism via Visit Saudi.

**Arabic Voice:** NAMAA-Saudi-TTS (actual Saudi dialect, MIT license), Lahajati (192+ dialects).

Plus everything from before: Islamic services (prayer, Quran, hadith, hijri, adhan, finance), language (5-dialect translation, Arabizi, grammar, tashkeel, poetry, names), 9 NLP tools, code review, voice pipeline, education, business tools, Snapchat content, cooking, travel, health, livestock management.

4 agent templates now — added Saudi Entrepreneur (رائد أعمال) wired into all Saudi business APIs.

Plugin (not fork). Works with any model including Jais, ALLaM, SILMA, Falcon-H1, Karnak, Fanar, and local via Ollama. MIT license.

From Saudi Arabia for the Arab world. Looking for contributors especially for Sudanese, Yemeni, Somali dialects.

Links:

GitHub: github.com/Moshe-ship/mkhlab
Landing page: moshe-ship.github.io/mkhlab
Release: github.com/Moshe-ship/mkhlab/releases/tag/v0.4.0
OpenClaw: github.com/openclaw/openclaw

Saudi APIs:
- ZATCA Fatoorah: zatca.gov.sa/en/E-Invoicing
- Wathq: developer.wathq.sa
- National Address: api.address.gov.sa
- Najiz: developers.najiz.sa
- Etimad: apiportal.etimad.sa
- Masdr: portal.masdr.sa
- Saudi Open Data: data.gov.sa
- Visit Saudi: partner.visitsaudi.com
- Fasah: fasah.zatca.gov.sa
- Moyasar: docs.moyasar.com
- Tap Payments: developers.tap.company
- Salla: docs.salla.dev
- Zid: docs.zid.sa
- Lean Technologies: docs.leantech.me
- Unifonic: docs.unifonic.com
- Foodics: console.foodics.com
- NAMAA Saudi TTS: huggingface.co/NAMAA-Space/NAMAA-Saudi-TTS

Previous links:
- Aladhan API: aladhan.com/prayer-times-api
- AlQuran API: alquran.cloud
- Hadith API: api.hadith.gading.dev/books
- Voxtral TTS: mistral.ai
- AraGemma: huggingface.co/Omartificial-Intelligence-Space/AraGemma-Embedding-300m
- Falcon-H1: huggingface.co/tiiuae/Falcon-H1-Arabic-7B
- Jais 2: huggingface.co/inceptionai/Jais-2-8B-Chat-GGUF
- ALLaM: huggingface.co/sdaia/allam-1-13b-instruct
- Arabic LLM Leaderboard: huggingface.co/blog/leaderboard-arabic
```

---

## Handle Reference

All @ mentions used in the posts above:

### Platform & AI
| Handle | Entity |
|--------|--------|
| @OpenClaw | OpenClaw platform |
| @steipete | Peter Steinberger (OpenClaw creator) |
| @AnthropicAI | Anthropic |
| @claudeai | Claude |
| @TIIuae | Technology Innovation Institute |
| @NVIDIAAI | NVIDIA AI |
| @SDAIA_SA | Saudi Data & AI Authority |

### Saudi Government
| Handle | Entity |
|--------|--------|
| @Zatca_sa | ZATCA (Zakat, Tax, Customs) |
| @Wathq_sa | Wathq (Ministry of Commerce) |
| @SAMA_GOV | Saudi Central Bank |
| @najiz_sa | Najiz (Ministry of Justice) |
| @etimadsa | Etimad (government procurement) |
| @SaudiGOSI | GOSI (social insurance) |
| @Qiwa_sa | Qiwa (workforce management) |
| @Fasah | Fasah (customs platform) |
| @SPL_KSA_online | Saudi Post |
| @elm | Elm Company (Yakeen, Nafath backend) |
| @VisitSaudi | Saudi Tourism Authority |

### Fintech & Payments
| Handle | Entity |
|--------|--------|
| @moyasarcom | Moyasar |
| @gotapnow | Tap Payments |
| @HyperPay | HyperPay |
| @PayTabs | PayTabs |
| @paywithtabby | Tabby (BNPL) |
| @useTamara | Tamara (BNPL) |
| @stcpay_ksa | STC Pay |
| @LeanTechHQ | Lean Technologies |

### E-Commerce & Logistics
| Handle | Entity |
|--------|--------|
| @SallaApp | Salla |
| @zidappcom | Zid |
| @noon | Noon |
| @smsaexpress | SMSA Express |
| @Aramex | Aramex |
| @NaqelExpr | Naqel Express |
| @jtexpressme | J&T Express ME |
| @BarqFleet | BARQ Fleet |

### Telecom
| Handle | Entity |
|--------|--------|
| @stc_ksa | STC |
| @Mobily | Mobily |
| @ZainKSA | Zain KSA |
| @Unifonic | Unifonic |

### Food & Delivery
| Handle | Entity |
|--------|--------|
| @foodics | Foodics |
| @HungerStation | HungerStation |
| @JahezApp | Jahez |
| @CareemKSA | Careem KSA |
