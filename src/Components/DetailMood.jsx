import { useState, useEffect, useRef } from "react";
import OutlineButton from "./OutlineButton.jsx";
import moods from "../Data/moods.jsx";
import EnergyBar from "./EnergyBar.jsx";

// Komponen utama untuk menambah mood harian
export default function DetailMood({ data = {}, className = "" }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const selectRef = useRef(null);
  return (
    <>
      {/* Tombol untuk membuka modal input mood */}
      <OutlineButton onClick={() => setIsDisabled(false)} className="text-xs">
        DETAIL
      </OutlineButton>

      {/* Checkbox untuk mengontrol modal */}
      <input
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
        checked={!isDisabled}
      />

      {/* Modal input mood */}
      <div className="modal" role="dialog">
        <div className="modal-box flex flex-col gap-5 w-full bg-brown-primary rounded-lg p-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-brown-tertiary absolute top-2 right-2 cursor-pointer w-10 h-10 hover:text-brown-primary"
            onClick={() => setIsDisabled(true)}
          >
            <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z" />
          </svg>
          <div className="flex text-white items-center">
            <span className="text-5xl lg:text-7xl">
              {moods[data.idMood].emoji}
            </span>
            <div className="flex flex-col ml-2 text-brown-quaternary ">
              <span className=" poppins-extralight text-lg md:text-2xl">
                Detail Mood:
              </span>
              <span className=" poppins-semibold text-xl md:text-4xl">
                {moods[data.idMood].name}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="text-brown-primary w-full italic poppins-light bg-brown-quaternary py-5 rounded-lg lg:text-base text-xs flex items-center justify-center text-center">
              {`"${data.keterangan}"`}
            </div>
          </div>
          <div className="flex gap-2">
            <div className="text-brown-primary w-1/2 bg-brown-quaternary p-3 rounded-lg lg:text-base text-xs flex flex-col items-center justify-center text-center">
              <h1 className="poppins-bold">Tanggal:</h1>
              <p className=" poppins-light">{data.date}</p>
            </div>
            <div className="text-brown-primary w-1/2 bg-brown-quaternary p-3 rounded-lg lg:text-base text-xs flex flex-col items-center justify-center text-center">
              <h1 className="poppins-bold">Kategori:</h1>
              <p className=" poppins-light">
                {data.score > 50
                  ? "Positf"
                  : data.score == 50
                  ? "Netral"
                  : "Negatif"}
              </p>
            </div>
          </div>
          <div className="text-brown-quaternary flex w-full flex-col items-center gap-5">
            <h1 className="poppins-bold text-xl">{`Happiness: ${data.score}`}</h1>
            <div className="flex">
              <EnergyBar
                className={`w-16 ${
                  data.score >= 50 ? "text-yellow-500" : "text-red-600"
                }`}
              />
              <EnergyBar
                className={`w-16 ${
                  data.score >= 50 ? "text-yellow-500" : "text-white"
                }`}
              />
              <EnergyBar
                className={`w-16 ${
                  data.score > 50 ? "text-yellow-500" : "text-white"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
