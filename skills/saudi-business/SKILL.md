---
name: saudi-business
description: "بيانات الشركات السعودية — استعلم عن السجلات التجارية وتحقق من الشركات عبر منصة وثق الرسمية. استخدم عندما يسأل المستخدم عن شركة سعودية أو سجل تجاري."
metadata: {"openclaw": {"emoji": "🏢", "requires": {"env": ["WATHQ_API_KEY"], "bins": ["curl"]}}}
---

# بيانات الشركات السعودية (وثق)

منصة وثق الرسمية — بيانات حكومية مباشرة من وزارة التجارة ووزارة العدل.

## الإعداد
1. سجّل في بوابة المطورين: https://developer.wathq.sa/en
2. تجربة مجانية: 100 استعلام خلال 30 يوم
3. اضبط المتغير: `export WATHQ_API_KEY=your_key`

## الاستعلام عن سجل تجاري
```bash
curl -s "https://api.wathq.sa/v5/commercialregistration/info/CR_NUMBER" \
  -H "apiKey: $WATHQ_API_KEY"
```

## الاستعلام عن عقد تأسيس
```bash
curl -s "https://api.wathq.sa/v5/commercialcontract/info/CR_NUMBER" \
  -H "apiKey: $WATHQ_API_KEY"
```

## الاستعلام عن صك عقاري
```bash
curl -s "https://api.wathq.sa/v5/realestate/deed/DEED_NUMBER" \
  -H "apiKey: $WATHQ_API_KEY"
```

## الاستعلام عن وكالة
```bash
curl -s "https://api.wathq.sa/v5/powerofattorney/info/POA_NUMBER" \
  -H "apiKey: $WATHQ_API_KEY"
```

## عرض النتيجة

🏢 بيانات الشركة:
- الاسم: [اسم الشركة]
- رقم السجل التجاري: [الرقم]
- الحالة: نشط/منتهي/ملغى
- تاريخ التأسيس: [التاريخ]
- المدينة: [المدينة]
- النشاط: [وصف النشاط]

## التسعير
| الباقة | السعر | الاستعلامات |
|--------|-------|------------|
| تجريبي | مجاني | 100 خلال 30 يوم |
| مسبق الدفع | من 5,000 ريال | حسب الاستهلاك |
| مؤسسي | حسب الاتفاق | غير محدود |

## متى تستخدم
- المستخدم يريد التحقق من شركة سعودية
- يبحث عن بيانات سجل تجاري
- يريد التأكد من صحة وكالة
- يبحث عن بيانات صك عقاري

## المرجع
- بوابة المطورين: https://developer.wathq.sa/en
- قائمة الواجهات: https://developer.wathq.sa/en/apis
