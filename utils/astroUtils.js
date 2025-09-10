import { julian, planetposition, solar } from 'astronomia';
import { DateTime } from 'luxon';

export async function getHoroscope({ dob, time, location, zodiacSign }) {
  const birthDate = DateTime.fromISO(`${dob}T${time}`);

  const signs = [
    'Aries','Taurus','Gemini','Cancer','Leo','Virgo',
    'Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'
  ];
  const month = birthDate.month - 1;
  const sign = zodiacSign || signs[month % 12];

  const planets = {
    Sun: 'In Leo',
    Moon: 'In Cancer',
    Mars: 'In Gemini'
  };

  const predictions = {
    daily: `Today, ${sign} will experience cosmic energy influencing career and love.`,
    weekly: `This week, ${sign} should focus on financial decisions and spiritual growth.`,
    monthly: `This month, ${sign} will see opportunities in relationships and health.`
  };

  return { sign, planets, predictions };
}
