import moods from "../Data/moods.jsx";
import OutlineButton from "./OutlineButton.jsx";
import DetailMood from "./DetailMood.jsx";

export function ListHistory({ data = [] }) {
  return (
    <ul className="flex flex-col gap-1 w-full p-2 m-2 rounded-lg bg-brown-primary">
      <li className="flex w-full rounded-lg">
        <div className="lg:w-1/4 w-1/3 text-brown-quarternary poppins-regular p-3 flex justify-center items-center">Tanggal</div>
        <div className="lg:w-1/4 w-1/3 text-brown-quarternary poppins-regular p-3 flex justify-center items-center">Mood</div>
        <div className="w-1/4 text-brown-quarternary poppins-regular p-3 lg:flex hidden justify-center items-center">Happiness</div>
      </li>
      {data.map((data, index) => (
        <li className="flex w-full bg-brown-tertiary rounded-lg" key={data.date}>
          <div className="lg:w-1/4 w-1/3 text-brown-secondary lg:text-base text-xs poppins-regular p-3 flex justify-center items-center">{data.date}</div>
          <div className="lg:w-1/4 w-1/3 text-brown-secondary lg:text-base text-xs poppins-regular p-3 flex justify-center items-center">{moods[data.idMood].name}</div>
          <div className="w-1/4 text-brown-secondary lg:text-base text-xs poppins-regular p-3 lg:flex hidden justify-center items-center">{data.score}</div>
          <div className="lg:w-1/4 w-1/3 text-brown-secondary lg:text-base text-xs poppins-regular p-3 flex justify-end items-center overflow-hidden">
          <DetailMood className="text-xs" data={data}>DETAIL</DetailMood>
          </div>
        </li>
      ))}
    </ul>
  );
}
