export default function HoroscopeCard({ data }) {
  return (
    <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-md border border-gray-700">
      <h2 className="text-2xl font-bold mb-2">{data.sign} Horoscope</h2>
      <div className="mb-2">
        <strong>Planets:</strong> {Object.entries(data.planets).map(([p,v]) => `${p}: ${v}`).join(', ')}
      </div>
      <div className="mb-2"><strong>Daily:</strong> {data.predictions.daily}</div>
      <div className="mb-2"><strong>Weekly:</strong> {data.predictions.weekly}</div>
      <div className="mb-2"><strong>Monthly:</strong> {data.predictions.monthly}</div>
    </div>
  );
}
