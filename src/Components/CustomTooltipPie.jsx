import moods from "../Data/moods.jsx";

export default function CustomTooltipPie({ active, payload, label }) {
  if (active && payload && payload.length) {
    const { name, value } = payload[0].payload;
    return (
      <div className="bg-brown-secondary text-white p-3 rounded-lg shadow-md border border-brown-primary">
        <p className="font-bold text-sm">{name}: {value}</p>
      </div>
    );
  }

  return null;
}