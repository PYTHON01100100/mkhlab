# skills category index

Total skills: `61`

## islamic (6)

| Skill | Path | Description |
|---|---|---|
| `adhan-player` | `skills/islamic/adhan-player` | مشغّل الأذان — شغّل أذان بأصوات مؤذنين مختلفين (العفاسي، عبدالباسط، المجالي...). استخدم عندما يطلب المستخدم سماع الأذان أو تشغيل صوت مؤذن. |
| `hadith-search` | `skills/islamic/hadith-search` | بحث في الأحاديث النبوية — ابحث عن أحاديث بالكلمة أو الموضوع من صحيح البخاري ومسلم وغيرها. استخدم عندما يسأل المستخدم عن حديث نبوي. |
| `hijri-calendar` | `skills/islamic/hijri-calendar` | التقويم الهجري — تحويل التواريخ بين الميلادي والهجري ومعرفة المناسبات الإسلامية. استخدم عندما يسأل المستخدم عن تاريخ هجري أو مناسبة إسلامية. |
| `islamic-finance` | `skills/islamic/islamic-finance` | المالية الإسلامية — حاسبة زكاة، فحص حلال للاستثمارات، مصطلحات بنكية إسلامية. استخدم عندما يسأل المستخدم عن زكاة أو استثمار حلال أو بنوك إسلامية. |
| `prayer-times` | `skills/islamic/prayer-times` | أوقات الصلاة — احسب أوقات الصلوات الخمس بناءً على موقع المستخدم. استخدم هذه المهارة عندما يسأل المستخدم عن وقت الصلاة أو الأذان أو الإقامة. |
| `quran-search` | `skills/islamic/quran-search` | بحث في القرآن الكريم — ابحث عن آيات بالكلمة أو رقم السورة والآية. استخدم عندما يسأل المستخدم عن آية قرآنية أو تفسير أو سورة. |

## language (6)

| Skill | Path | Description |
|---|---|---|
| `arabic-grammar` | `skills/language/arabic-grammar` | مدقق القواعد العربية — صحح الأخطاء النحوية والإملائية في النصوص العربية. استخدم عندما يطلب المستخدم تصحيح نص أو مراجعة لغوية. |
| `arabic-names` | `skills/language/arabic-names` | أسماء عربية — ابحث عن معاني الأسماء العربية، اقترح أسماء لمواليد، واعرف أصل الاسم ومعناه. استخدم عندما يسأل عن معنى اسم أو يريد اقتراح أسماء. |
| `arabic-poetry` | `skills/language/arabic-poetry` | الشعر العربي — ابحث عن أبيات شعرية، اشرح قصائد، اكتب شعر بأي بحر. استخدم عندما يسأل المستخدم عن شعر أو بيت أو يريد كتابة شعر. |
| `dialect-detect` | `skills/language/dialect-detect` | اكتشاف اللهجة العربية — حدد لهجة المستخدم وردّ بنفس لهجته. يعمل بالخلفية مع كل رسالة عربية. |
| `tashkeel` | `skills/language/tashkeel` | التشكيل — أضف الحركات (الفتحة، الضمة، الكسرة، السكون، الشدة، التنوين) على النصوص العربية. استخدم عندما يطلب المستخدم تشكيل نص. |
| `translate` | `skills/language/translate` | ترجمة عربي ↔ إنجليزي — ترجم نصوص بين العربية والإنجليزية مع مراعاة اللهجات والسياق. استخدم عندما يطلب المستخدم ترجمة أو يرسل نص بلغة ويريده بالأخرى. |

## media (5)

| Skill | Path | Description |
|---|---|---|
| `arabic-ocr` | `skills/media/arabic-ocr` | التعرف على النص العربي في الصور — استخرج نص عربي من صور ومستندات ومخطوطات. استخدم عندما يرسل المستخدم صورة تحتوي نص عربي. |
| `saudi-tts` | `skills/media/saudi-tts` | تحويل النص إلى كلام بالعربية السعودية — Saudi Arabic text-to-speech with NAMAA, Lahajati, and dialect support |
| `voice-assistant` | `skills/media/voice-assistant` | مساعد صوتي عربي — حوّل الصوت لنص، عالجه، وردّ بصوت عربي. خط أنابيب كامل: Whisper → LLM → TTS. استخدم عندما يريد المستخدم تفاعل صوتي كامل. |
| `voxtral-tts` | `skills/media/voxtral-tts` | تحويل النص لصوت عربي — حوّل أي نص عربي لملف صوتي باستخدام Voxtral أو SILMA TTS. استخدم عندما يريد المستخدم سماع نص أو توليد صوت عربي. |
| `whisper-arabic` | `skills/media/whisper-arabic` | تحويل الصوت لنص عربي — فرّغ ملفات صوتية عربية لنص مكتوب باستخدام Whisper. استخدم عندما يريد المستخدم تفريغ صوت أو فيديو عربي. |

## nlp-tools (10)

| Skill | Path | Description |
|---|---|---|
| `arabench` | `skills/nlp-tools/arabench` | معيار جودة العربية — قيّم جودة أي نموذج ذكاء اصطناعي بالعربي عبر 8 فئات (ترجمة، قواعد، لهجات، تشكيل...). استخدم عندما يريد المستخدم مقارنة نماذج أو اختبار جودة العربي. |
| `arabic-rag` | `skills/nlp-tools/arabic-rag` | بحث دلالي عربي — ابحث في القرآن والأحاديث والنصوص العربية بالمعنى مو بالكلمة. يستخدم AraGemma embeddings للبحث الذكي. استخدم عندما البحث النصي البسيط ما يكفي. |
| `artok` | `skills/nlp-tools/artok` | حاسبة ضريبة التوكنات — قارن تكلفة التوكنات العربية عبر 18 محلل (tokenizer) واعرض كفاءة كل مزوّد. استخدم لتحليل تكاليف API. |
| `bidi-guard` | `skills/nlp-tools/bidi-guard` | حماية من هجمات Trojan Source — اكتشف حروف Unicode الاتجاهية المخفية في الكود (CVE-2021-42574). استخدم لفحص الكود المصدري أمنياً. |
| `khalas` | `skills/nlp-tools/khalas` | تحسين التوكنات العربية — حلل وقلل تكلفة البرومبتات العربية. استخدم عندما يريد المستخدم توفير تكاليف API أو فهم كفاءة التوكنات. |
| `majal` | `skills/nlp-tools/majal` | فاحص بيانات التدريب العربية — اكتشف مشاكل الترميز والمحتوى المخفي وخلط اللهجات في ملفات JSONL. استخدم لتنظيف بيانات التدريب. |
| `qalam` | `skills/nlp-tools/qalam` | توثيق عربي من الكود — ولّد توثيق عربي تلقائي من كود Python/JS/TS مع قاموس تقني مدمج (300+ مصطلح). يعمل بدون إنترنت. |
| `raqeeb` | `skills/nlp-tools/raqeeb` | فاحص RTL — اكتشف مشاكل الاتجاه من اليمين لليسار في HTML/CSS واحصل على تقييم RTL (0-100). استخدم لفحص المواقع العربية. |
| `safha` | `skills/nlp-tools/safha` | كاشط محتوى عربي — اجمع محتوى عربي من الويب، نظّفه، واكتشف لهجته. مخصص لتجهيز بيانات التدريب. |
| `sarih` | `skills/nlp-tools/sarih` | فلترة المحتوى العربي — اكتشف المحتوى السام والكراهية والسبام بـ5 لهجات عربية. يعمل بدون إنترنت. استخدم لفحص النصوص أو تنظيف بيانات. |

## search (1)

| Skill | Path | Description |
|---|---|---|
| `arabic-web-search` | `skills/search/arabic-web-search` | بحث ويب عربي — ابحث في الإنترنت بالعربي مع أولوية للمواقع العربية الموثوقة. استخدم عندما يسأل المستخدم سؤال يحتاج معلومات حديثة. |

## developer (1)

| Skill | Path | Description |
|---|---|---|
| `arabic-code-review` | `skills/developer/arabic-code-review` | مراجعة كود عربي — راجع الكود مع فحص التعامل مع النصوص العربية وRTL والتعليقات العربية. استخدم عندما يطلب المستخدم مراجعة كود يتعامل مع العربي. |

## education (3)

| Skill | Path | Description |
|---|---|---|
| `arabic-kids` | `skills/education/arabic-kids` | تعليم أطفال بالعربي — محتوى تعليمي للأطفال: قصص، ألعاب تعليمية، تعلم الحروف والأرقام، أناشيد. استخدم عندما يسأل أولياء الأمور عن محتوى تعليمي لأطفالهم. |
| `arabic-math` | `skills/education/arabic-math` | رياضيات بالعربي — حل مسائل رياضية مع شرح بالعربي ودعم الأرقام العربية (٠-٩). استخدم عندما يطلب المستخدم حل مسألة رياضية أو شرح مفهوم رياضي. |
| `arabic-science` | `skills/education/arabic-science` | مصطلحات علمية عربية — ترجم واشرح مصطلحات علمية بالعربي. يغطي: فيزياء، كيمياء، أحياء، حاسوب، هندسة. استخدم عندما يسأل عن مصطلح علمي أو يحتاج شرح علمي بالعربي. |

## travel (3)

| Skill | Path | Description |
|---|---|---|
| `arab-travel` | `skills/travel/arab-travel` | دليل السفر العربي — معلومات سياحية عن الدول العربية: تأشيرات، أماكن، تكاليف، نصائح. استخدم عندما يسأل المستخدم عن السفر لدولة عربية. |
| `saudi-tourism` | `skills/travel/saudi-tourism` | السياحة في السعودية — Saudi tourism attractions, events, visa info, and tourism APIs |
| `travel-advisor-visa` | `skills/travel/travel-advisor-visa` | مستشار السفر والتأشيرات — افحص متطلبات الدخول والتأشيرة حسب جنسية المستخدم ووجهته، مع أولوية للمصادر الرسمية مثل مواقع السفارات، وزارات الخارجية، والبوابات الحكومية. |

## lifestyle (4)

| Skill | Path | Description |
|---|---|---|
| `arabic-cooking` | `skills/lifestyle/arabic-cooking` | وصفات عربية — ابحث واقترح وصفات من المطبخ العربي (سعودي، مصري، شامي، مغربي، خليجي). استخدم عندما يسأل المستخدم عن طبخ أو وصفة أو مكوّنات. |
| `arabic-health` | `skills/lifestyle/arabic-health` | مصطلحات صحية عربية — ترجم واشرح مصطلحات طبية بالعربي، ساعد في فهم التقارير الطبية، واعطِ معلومات صحية عامة. استخدم عندما يسأل عن صحة أو طب. |
| `livestock-manager` | `skills/lifestyle/livestock-manager` | إدارة الحلال — ساعد مربي الأغنام والماعز في إدارة قطيعهم: تغذية، صحة، ولادات، مبيعات، حسابات. مبني على تطبيق مراح. استخدم عندما يسأل المستخدم عن تربية الحلال أو إدارة المراح. |
| `snapchat-content` | `skills/lifestyle/snapchat-content` | محتوى سناب شات — ساعد في إنشاء محتوى سناب شات عربي: أفكار سنابات، نصوص، استراتيجيات نمو. استخدم عندما يسأل المستخدم عن سناب شات أو صناعة محتوى عربي. |

## business (18)

| Skill | Path | Description |
|---|---|---|
| `arabic-email` | `skills/business/arabic-email` | كاتب إيميلات عربية — اكتب رسائل بريد إلكتروني رسمية وشبه رسمية بالعربي بأسلوب احترافي. استخدم عندما يطلب المستخدم كتابة إيميل بالعربي. |
| `arabic-legal` | `skills/business/arabic-legal` | مصطلحات قانونية عربية — ترجم واشرح مصطلحات قانونية، ساعد في فهم العقود والمستندات القانونية بالعربي. استخدم عندما يسأل عن قانون أو عقد. |
| `arabic-resume` | `skills/business/arabic-resume` | كاتب السيرة الذاتية — اكتب سيرة ذاتية احترافية بالعربي أو ثنائية اللغة. استخدم عندما يطلب المستخدم مساعدة في CV أو سيرة ذاتية. |
| `saudi-business` | `skills/business/saudi-business` | بيانات الشركات السعودية — استعلم عن السجلات التجارية وتحقق من الشركات عبر منصة وثق الرسمية. استخدم عندما يسأل المستخدم عن شركة سعودية أو سجل تجاري. |
| `saudi-customs` | `skills/business/saudi-customs` | الجمارك والتجارة السعودية — Saudi customs, import/export via Fasah, ZATCA APIs, tariffs, and HS codes |
| `saudi-ecommerce` | `skills/business/saudi-ecommerce` | منصات التجارة الإلكترونية السعودية — ربط مع سلة وزد ونون عبر API. استخدم عندما يسأل المستخدم عن التجارة الإلكترونية أو سلة أو زد أو نون. |
| `saudi-einvoice` | `skills/business/saudi-einvoice` | الفوترة الإلكترونية (زاتكا) — إصدار فواتير إلكترونية والتحقق من الامتثال عبر منصة فاتورة. استخدم عندما يسأل المستخدم عن الفوترة الإلكترونية أو زاتكا أو فاتورة. |
| `saudi-food` | `skills/business/saudi-food` | تقنيات المطاعم والتوصيل في السعودية — Saudi restaurant POS, food delivery APIs: Foodics, HungerStation, Jahez, Careem |
| `saudi-hr` | `skills/business/saudi-hr` | واجهات الموارد البشرية والتوظيف السعودية — Saudi HR & employment APIs via Masdr, Mudad, Qiwa, and Musaned |
| `saudi-identity` | `skills/business/saudi-identity` | التحقق من الهوية الرقمية السعودية — Saudi digital identity verification via Nafath & Yakeen APIs |
| `saudi-legal` | `skills/business/saudi-legal` | الخدمات القانونية السعودية — Saudi legal services via Najiz & Wathq APIs for courts, deeds, and power of attorney |
| `saudi-openbanking` | `skills/business/saudi-openbanking` | الخدمات المصرفية المفتوحة السعودية — Saudi Open Banking APIs via SAMA framework, Lean Technologies, and bank portals |
| `saudi-pay` | `skills/business/saudi-pay` | بوابات الدفع السعودية — ربط بوابات الدفع مثل مويسر وتاب وهايبرباي وتابي وتمارا. استخدم عندما يسأل المستخدم عن قبول المدفوعات أو بوابات الدفع في السعودية. |
| `saudi-procurement` | `skills/business/saudi-procurement` | المشتريات الحكومية السعودية عبر اعتماد — Saudi government procurement, contracts, and salary certificates via Etimad |
| `saudi-shipping` | `skills/business/saudi-shipping` | الشحن والتوصيل في السعودية — تتبع شحنات وإنشاء بوالص شحن عبر شركات مثل سمسا وأرامكس وناقل. استخدم عندما يسأل المستخدم عن شحن أو تتبع طرد في السعودية. |
| `saudi-stocks` | `skills/business/saudi-stocks` | أسهم تداول — استعلم عن أسعار الأسهم السعودية ومؤشر تاسي والبيانات المالية للشركات المدرجة في السوق السعودي. |
| `saudi-telecom` | `skills/business/saudi-telecom` | واجهات شركات الاتصالات السعودية — Saudi telecom developer APIs for SMS, OTP, and payments via STC, Mobily, Zain |
| `unifonic` | `skills/business/unifonic` | يونيفونك — إرسال رسائل SMS وواتساب ومكالمات صوتية — Unifonic Saudi CPaaS for SMS, WhatsApp, voice, and OTP |

## regional (4)

| Skill | Path | Description |
|---|---|---|
| `saudi-address` | `skills/regional/saudi-address` | العنوان الوطني — ابحث وتحقق من العناوين السعودية، حوّل إحداثيات لعنوان، واعثر على أقرب الخدمات. يستخدم واجهة العنوان الوطني الرسمية من البريد السعودي. |
| `saudi-apps` | `skills/regional/saudi-apps` | تطبيقات سعودية — دليل التطبيقات والخدمات السعودية المحلية: توصيل، حكومية، بنكية، تسوق. استخدم عندما يسأل المستخدم عن تطبيق أو خدمة سعودية أو خليجية. |
| `saudi-opendata` | `skills/regional/saudi-opendata` | البيانات المفتوحة السعودية — Saudi Open Data Portal with 11,000+ datasets from 289+ government organizations |
| `saudi-weather` | `skills/regional/saudi-weather` | طقس المدن السعودية — استعلم عن درجة الحرارة والرطوبة والرياح في مدن المملكة. استخدم عندما يسأل المستخدم عن الطقس في مدينة سعودية. |
