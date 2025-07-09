import { useState, useEffect, use } from "react";
import MainLayout from "../Components/MainLayout.jsx";
import OutlineButton from "../Components/OutlineButton.jsx";
import AddMood from "../Components/AddMood.jsx";
import moods from "../Data/moods.jsx";
import { useMood } from "../Contexts/MoodContext.jsx";
import EnergyBar from "../Components/EnergyBar.jsx";

function Home() {
  const [moodLoad, setMoodLoad] = useState(null);
  const [moodToday, setMoodToday] = useState(null);
  const { mood } = useMood();

  useEffect(() => {
    const savedMood = localStorage.getItem("mood");
    if (savedMood) {
      setMoodLoad(JSON.parse(savedMood));
    }
  }, []);

  useEffect(() => {
    if (mood.length > 0) {
      setMoodLoad(mood);
    }
  }, [mood]);

  useEffect(() => {
    const today = new Date().toLocaleDateString("id-ID", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const todayMood = moodLoad?.find((mood) => mood.date === today);
    setMoodToday(todayMood);
  }, [moodLoad]);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const date = new Date();
  const jam = date.getHours();
  return (
    <MainLayout>
      <section className="w-full flex flex-col p-5 gap-1 mt-5 lg:items-center">
        <h1 className="poppins-medium text-2xl lg:text-5xl text-brown-quaternary">
          {`Selamat ${
            jam < 12 ? "Pagi" : jam < 15 ? "Siang" : jam < 18 ? "Sore" : "Malam"
          }!`}
        </h1>
        <p className="poppins-extralight text-sm lg:text-xl text-brown-quaternary">
          Semoga Harimu Berjalan Lancar
        </p>
      </section>
      <section className="px-5 flex flex-col gap-5 w-full lg:items-center">
        <div className="flex flex-col gap-5 w-full lg:w-3/4 bg-brown-primary rounded-lg p-5">
          <div className="flex text-white items-center">
            <span className="text-5xl lg:text-7xl">
              {moodToday ? moods[moodToday.idMood].emoji : ""}
            </span>
            <div className="flex flex-col ml-2 text-brown-quaternary ">
              <span className=" poppins-extralight text-lg md:text-2xl">
                Mood Hari Ini:
              </span>
              <span className=" poppins-semibold text-xl md:text-4xl">
                {moodToday
                  ? moods[moodToday.idMood].name
                  : "Belum ada mood hari ini"}
              </span>
            </div>
          </div>
          <AddMood className={moodToday ? "hidden" : "flex"}/>
          <div className={`gap-2 ${moodToday ? "flex" : "hidden"}`}>
            <div className="text-brown-primary w-1/2 italic poppins-light bg-brown-quaternary p-3 rounded-lg lg:text-base text-xs flex items-center justify-center text-center">
              {`"${
                moodToday ? moodToday.keterangan : "Belum ada mood hari ini"
              }"`}
            </div>
            <div className="py-2 px-4 bg-brown-quaternary rounded-lg flex items-center justify-center text-center w-1/2 lg:text-base text-xs text-brown-primary poppins-light p-3">
              {moodToday
                ? moods[moodToday.idMood].chats[getRandomInt(0, 4)]
                : "Belum ada mood hari ini"}
            </div>
          </div>
        </div>
      </section>
      <section className={`text-brown-quaternary w-full flex flex-col items-center mt-10 gap-5 ${moodToday ? "flex" : "hidden"}`}>
        <h1 className="poppins-medium text-2xl lg:text-5xl ">Your Energy:</h1>
        <div className="flex">
          <EnergyBar className={moodToday?.score >= 50 ? "text-yellow-500" : "text-red-600"}/>
          <EnergyBar className={moodToday?.score >= 50 ? "text-yellow-500" : "text-white"}/>
          <EnergyBar className={moodToday?.score > 50 ? "text-yellow-500" : "text-white"}/>
        </div>
      </section>
      <section className={`px-5 pb-10 flex flex-col items-center gap-5 mt-10 ${moodToday ? "flex" : "hidden"}`}>
        <h1 className="text-2xl lg:text-5xl underline poppins-extrabold text-brown-quaternary">
          {moodToday
            ? moods[moodToday.idMood].name.toUpperCase()
            : "Belum ada mood hari ini"}
        </h1>
        <p className="w-full lg:w-1/2 poppins-light text-center text-lg">
          {moodToday ? moods[moodToday.idMood].desc : "Belum ada mood hari ini"}
        </p>
      </section>
    </MainLayout>
  );
}

export default Home;
