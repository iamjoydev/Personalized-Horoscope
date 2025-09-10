import { getHoroscope } from '../../utils/astroUtils';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send({ error: 'Method not allowed' });

  const { dob, time, location, zodiacSign } = req.body;

  try {
    const horoscopeData = await getHoroscope({ dob, time, location, zodiacSign });
    return res.status(200).json({ success: true, data: horoscopeData });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: 'Failed to generate horoscope' });
  }
}
