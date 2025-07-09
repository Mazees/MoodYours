import React from "react";
import badmood from "../assets/badmood.jpg";
import Header from "../Components/Header";
import moods from "../Data/moods";
import Footer from "../Components/Footer";
import OutlineButton from "../Components/OutlineButton";
import { useNavigate, NavLink } from "react-router-dom";

const Opening = () => {
  const navigate = useNavigate();
  const openWindow = (link) => {
    window.open(link, "_blank");
  };

  return (
    <main className="w-screen bg-brown-secondary">
      <Header hiddenAdMood={true}>
        <OutlineButton
          className="mr-2 lg:flex hidden"
          onClick={() =>
            openWindow(
              "https://www.instagram.com/madaputra21?igsh=MXV1bWZqc3NxdWdleA=="
            )
          }
        >
          DEVELOPER
        </OutlineButton>
        <OutlineButton
          className="mr-2 lg:flex hidden"
          onClick={() => openWindow("https://saweria.co/MadaPutraYT")}
        >
          DONATE
        </OutlineButton>
        <OutlineButton
          className="mr-2 lg:flex hidden"
          onClick={() => openWindow("https://github.com/Mazees/MoodYours")}
        >
          SOURCE
        </OutlineButton>
        <OutlineButton
          className="mr-2 bg-brown-secondary border-none shadow-2xl"
          onClick={() => navigate("/home")}
        >
          LOGIN
        </OutlineButton>
      </Header>
      <section className="w-full flex flex-col justify-center items-center p-15 gap-5">
        <h1
          data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="700"
          className="poppins-extrabold text-3xl text-brown-quaternary lg:text-5xl w-full lg:w-1/2 text-center text-"
        >
          INOVASI TERBAIK UNTUK MENGENAL DIRIMU{" "}
          <br className="lg:block hidden" /> LEBIH BAIK
        </h1>
        <p
          data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="700"
          className="poppins-light text-sm lg:text-base text-center italic"
        >
          <span className="poppins-bold italic">MoodYours</span> membantumu
          mencatat suasana hati, memahami pola emosimu,{" "}
          <br className="lg:block hidden" /> dan menumbuhkan kebiasaan refleksi
          diri secara sederhana namun bermakna.
        </p>
      </section>
      <img
        data-aos="zoom-in"
        src={badmood}
        className="w-[90%] lg:w-1/2 rounded-2xl hover:shadow-2xl mx-auto caret-transparent"
      />
      <section>
        <h1 className="poppins-extrabold text-3xl text-brown-quaternary lg:text-5xl w-full lg:w-1/2 text-center mt-10 lg:mt-30 mx-auto">
          MACAM-MACAM EMOSI MANUSIA
        </h1>
        <ul className="w-full lg:w-[80%] mx-auto flex flex-col gap-24 mt-10 p-7">
          {moods.map((moods, index) => (
            <li
              data-aos="zoom-in"
              className={`w-full flex justify-between gap-10 ${
                index % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } flex-col`}
            >
              <div className="lg:w-1/2 w-full flex flex-col justify-center items-center gap-4">
                <h1 className="poppins-bold text-4xl text-brown-quaternary w-full">
                  {index + 1}. {moods.name}
                </h1>
                <p className="poppins-light text-sm">{moods.desc}</p>
              </div>
              <div className="lg:w-1/2 w-full text-9xl text-center bg-brown-primary p-8 caret-transparent">
                {moods.emoji}
              </div>
            </li>
          ))}
        </ul>
      </section>
      <h1 className="poppins-extrabold text-3xl my-20 text-brown-quaternary lg:text-5xl w-full text-center" data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="500">
        STAY CHILL, STAY AWARE, STAY YOU
      </h1>
      <Footer />
    </main>
  );
};

export default Opening;
