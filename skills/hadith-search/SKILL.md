---
name: hadith-search
description: "بحث في الأحاديث النبوية — ابحث عن أحاديث بالكلمة أو الموضوع من صحيح البخاري ومسلم وغيرها. استخدم عندما يسأل المستخدم عن حديث نبوي."
metadata: {"openclaw": {"emoji": "📜", "requires": {"bins": ["curl"]}}}
---

# بحث في الأحاديث النبوية

## البحث عن حديث

### بحث بالكلمة (إنجليزي)
```bash
curl -s "https://api.sunnah.com/v1/hadiths?q=KEYWORD&limit=5" -H "x-api-key: SunnnahApiKey123"
```

### بحث بدون API key (بديل مجاني)
```bash
curl -s "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions.json"
```

### جلب حديث من كتاب محدد
```bash
# صحيح البخاري — كتاب رقم 1، حديث رقم 1
curl -s "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-bukhari/1/1.json"
```

### الكتب المتاحة
| الكود | الكتاب |
|-------|--------|
| `ara-bukhari` | صحيح البخاري |
| `ara-muslim` | صحيح مسلم |
| `ara-tirmidhi` | سنن الترمذي |
| `ara-abudawud` | سنن أبي داود |
| `ara-nasai` | سنن النسائي |
| `ara-ibnmajah` | سنن ابن ماجه |
| `ara-malik` | موطأ مالك |

## عرض النتيجة

📜 [اسم الكتاب] — حديث رقم [X]

> نص الحديث

- الراوي: [اسم الصحابي]
- الدرجة: [صحيح/حسن/ضعيف] إذا متاحة

## تنبيهات
- لا تحكم على صحة حديث من عندك
- إذا سأل عن حكم حديث، وجّه لموقع الدرر السنية أو إسلام ويب
- لا تستخدم أحاديث موضوعة أو ضعيفة جداً بدون تنبيه
