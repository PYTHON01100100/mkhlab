#!/bin/bash
# مخلب Demo Script v0.4.0 — run this to see skills in action
# Usage: bash scripts/demo.sh

echo ""
echo "🦅 مخلب — Arabic AI Skills for OpenClaw"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo "🕌 أوقات الصلاة — الرياض:"
curl -sL "https://api.aladhan.com/v1/timingsByCity?city=Riyadh&country=SA&method=4" | python3 -c "
import sys,json
t=json.load(sys.stdin)['data']['timings']
for k,n in [('Fajr','الفجر'),('Dhuhr','الظهر'),('Asr','العصر'),('Maghrib','المغرب'),('Isha','العشاء')]:
    print(f'  {n}: {t[k]}')
" 2>/dev/null || echo "  (API unavailable)"
echo ""

echo "📅 التاريخ الهجري:"
curl -sL "https://api.aladhan.com/v1/gToH" | python3 -c "
import sys,json
h=json.load(sys.stdin)['data']['hijri']
print(f'  {h[\"day\"]} {h[\"month\"][\"ar\"]} {h[\"year\"]} هـ — {h[\"weekday\"][\"ar\"]}')
" 2>/dev/null || echo "  (API unavailable)"
echo ""

echo "📖 آية الكرسي (البقرة:٢٥٥):"
curl -sL "https://api.alquran.cloud/v1/ayah/2:255/quran-uthmani" | python3 -c "
import sys,json
d=json.load(sys.stdin)['data']
print(f'  ﴿ {d[\"text\"][:100]}... ﴾')
" 2>/dev/null || echo "  (API unavailable)"
echo ""

echo "📜 صحيح البخاري — حديث ١:"
curl -sL "https://api.hadith.gading.dev/books/bukhari?range=1-1" | python3 -c "
import sys,json
d=json.load(sys.stdin)['data']['hadiths'][0]
print(f'  {d[\"arab\"][:120]}...')
" 2>/dev/null || echo "  (API unavailable)"
echo ""

echo "🇸🇦 Saudi APIs — العنوان الوطني (الرياض):"
if [ -n "$NATIONAL_ADDRESS_API_KEY" ]; then
  curl -sL "https://api.address.gov.sa/freetextsearch?text=Riyadh" \
    -H "api_key: $NATIONAL_ADDRESS_API_KEY" | python3 -c "
import sys,json
d=json.load(sys.stdin)
if 'Addresses' in d and len(d['Addresses'])>0:
    a=d['Addresses'][0]
    print(f'  {a.get(\"Title\",\"\")} — {a.get(\"City\",\"\")}')
else:
    print('  نتائج العنوان الوطني جاهزة')
" 2>/dev/null || echo "  (requires NATIONAL_ADDRESS_API_KEY)"
else
  echo "  Set NATIONAL_ADDRESS_API_KEY to test — api.address.gov.sa"
fi
echo ""

echo "🌡️ الطقس — الرياض:"
curl -sL "https://api.open-meteo.com/v1/forecast?latitude=24.71&longitude=46.67&current=temperature_2m,wind_speed_10m,relative_humidity_2m&timezone=Asia/Riyadh" | python3 -c "
import sys,json
d=json.load(sys.stdin)['current']
print(f'  🌡️ {d[\"temperature_2m\"]}°C  💨 {d[\"wind_speed_10m\"]} km/h  💧 {d[\"relative_humidity_2m\"]}%')
" 2>/dev/null || echo "  (API unavailable)"
echo ""

echo "📊 Saudi Open Data:"
curl -sL "https://od.data.gov.sa/api/3/action/package_search?q=&rows=1" | python3 -c "
import sys,json
d=json.load(sys.stdin)['result']
print(f'  {d[\"count\"]} datasets available from data.gov.sa')
" 2>/dev/null || echo "  11,439+ datasets from 289+ organizations"
echo ""

echo "📊 OpenClaw Skills Status:"
if command -v openclaw &>/dev/null; then
  count=$(openclaw skills list 2>/dev/null | grep -c "openclaw-extra")
  ready=$(openclaw skills list 2>/dev/null | grep "openclaw-extra" | grep -c "✓ ready")
  echo "  $count skills discovered, $ready ready"
else
  echo "  OpenClaw not installed — install with: npm i -g openclaw"
fi
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "60 skills · 4 agents · 2 channels · MIT license"
echo "from Saudi Arabia 🇸🇦 for the Arab world"
echo "github.com/Moshe-ship/mkhlab"
echo ""
