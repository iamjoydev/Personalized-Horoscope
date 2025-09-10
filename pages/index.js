import { useState } from 'react';
import axios from 'axios';
import HoroscopeCard from '../components/HoroscopeCard';
import PDFButton from '../components/PDFButton';
import ZodiacSelector from '../components/ZodiacSelector';

export default function Home() {
  const [dob, setDob] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [zodiacSign, setZodiacSign] = useState('');
  const [horoscope, setHoroscope] = useState(null);

  const generateHoroscope = async () => {
    try {
      const res = await axios.post('/api/horoscope', { dob, time, location, zodiacSign });
      setHoroscope(res.data.data);
    } catch (error) {
      console.error(error);
      alert('Failed to generate horoscope.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">Personalized Horoscope Generator</h1>

      <div className="flex flex-col gap-4 w-full max-w-md">
        <input type="date" value={dob} onChange={e => setDob(e.target.value)} className="input-field"/>
        <input type="time" value={time} onChange={e => setTime(e.target.value)} className="input-field"/>
        <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} className="input-field"/>
        <ZodiacSelector selected={zodiacSign} onSelect={setZodiacSign}/>
        <button onClick={generateHoroscope} className="btn-primary">Generate Horoscope</button>
      </div>

      {horoscope && (
        <div className="mt-8 w-full max-w-xl">
          <HoroscopeCard data={horoscope}/>
          <PDFButton data={horoscope}/>
        </div>
      )}
    </div>
  );
}
