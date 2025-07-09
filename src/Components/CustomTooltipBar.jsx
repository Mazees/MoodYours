import moods from "../Data/moods.jsx";

export default function CustomTooltipBar({ active, payload, label }) {
  if (active && payload && payload.length) {
    const { score, keterangan, idMood } = payload[0].payload;
    return (
      <div className="bg-brown-secondary text-white p-3 rounded-lg shadow-md border border-brown-primary">
        <p className="font-bold text-sm">Mood: {moods[idMood].name}</p>
        <p className="font-bold text-sm">Tanggal: {label}</p>
        <p className="text-sm">Skor Mood: {score}</p>
        <p className="text-sm italic">"{keterangan}"</p>
      </div>
    );
  }

  return null;
}