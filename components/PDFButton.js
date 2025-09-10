import jsPDF from 'jspdf';

export default function PDFButton({ data }) {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`${data.sign} Horoscope`, 20, 20);
    doc.setFontSize(12);
    doc.text(`Planets: ${Object.entries(data.planets).map(([p,v]) => `${p}: ${v}`).join(', ')}`, 20, 40);
    doc.text(`Daily: ${data.predictions.daily}`, 20, 60);
    doc.text(`Weekly: ${data.predictions.weekly}`, 20, 80);
    doc.text(`Monthly: ${data.predictions.monthly}`, 20, 100);
    doc.save(`${data.sign}-horoscope.pdf`);
  };

  return (
    <button onClick={generatePDF} className="btn-primary mt-4">
      Download PDF
    </button>
  );
}
