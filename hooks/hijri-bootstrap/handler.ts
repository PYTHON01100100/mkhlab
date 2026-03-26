/**
 * Hijri Bootstrap Hook
 * Injects Islamic calendar context into every new session.
 */

interface BootstrapResult {
  systemContext: string;
}

const ISLAMIC_EVENTS: Record<string, { month: number; day: number }> = {
  "رأس السنة الهجرية": { month: 1, day: 1 },
  "يوم عاشوراء": { month: 1, day: 10 },
  "المولد النبوي": { month: 3, day: 12 },
  "الإسراء والمعراج": { month: 7, day: 27 },
  "بداية رمضان": { month: 9, day: 1 },
  "ليلة القدر (تقريباً)": { month: 9, day: 27 },
  "عيد الفطر": { month: 10, day: 1 },
  "يوم عرفة": { month: 12, day: 9 },
  "عيد الأضحى": { month: 12, day: 10 },
};

export default async function handler(): Promise<BootstrapResult> {
  try {
    const res = await fetch("https://api.aladhan.com/v1/gToH");
    const data = await res.json();
    const hijri = data.data.hijri;
    const gregorian = data.data.gregorian;

    const hijriDate = `${hijri.day} ${hijri.month.ar} ${hijri.year} هـ`;
    const gregorianDate = gregorian.date;
    const weekday = hijri.weekday.ar;

    // Check for upcoming Islamic events
    const currentMonth = parseInt(hijri.month.number);
    const currentDay = parseInt(hijri.day);
    let upcomingEvent = "";

    for (const [event, date] of Object.entries(ISLAMIC_EVENTS)) {
      if (
        date.month === currentMonth &&
        date.day >= currentDay &&
        date.day - currentDay <= 30
      ) {
        const daysLeft = date.day - currentDay;
        upcomingEvent =
          daysLeft === 0
            ? `اليوم: ${event}`
            : `قادم: ${event} (بعد ${daysLeft} يوم)`;
        break;
      }
    }

    const context = [
      `[مخلب] التاريخ الهجري: ${hijriDate} — ${weekday}`,
      `[مخلب] التاريخ الميلادي: ${gregorianDate}`,
      upcomingEvent ? `[مخلب] ${upcomingEvent}` : "",
      `[مخلب] المستخدم قد يكون مسلماً. احترم الممارسات الإسلامية.`,
    ]
      .filter(Boolean)
      .join("\n");

    return { systemContext: context };
  } catch {
    return {
      systemContext:
        "[مخلب] تعذر جلب التاريخ الهجري. استمر بشكل طبيعي.",
    };
  }
}
