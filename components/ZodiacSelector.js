export default function ZodiacSelector({ selected, onSelect }) {
  const zodiacSigns = [
    'Aries','Taurus','Gemini','Cancer','Leo','Virgo',
    'Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'
  ];

  return (
    <select
      value={selected}
      onChange={e => onSelect(e.target.value)}
      className="input-field"
    >
      <option value="">Select Zodiac Sign</option>
      {zodiacSigns.map(sign => <option key={sign} value={sign}>{sign}</option>)}
    </select>
  );
}
