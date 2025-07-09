import { useState, useEffect, useRef } from "react";
import OutlineButton from "./OutlineButton.jsx";
import moods from "../Data/moods.jsx";
import { useMood } from "../Contexts/MoodContext.jsx";

// Komponen utama untuk menambah mood harian
export default function AddMood({isFold=false, className=""}) {
  // Ref untuk input keterangan
  const keteranganRef = useRef(null);
  const selectRef = useRef(null);

  // State untuk mood yang dipilih
  const [selectedMood, setSelectedMood] = useState(null);
  // State untuk data mood yang sudah dimuat dari localStorage
  const [moodLoad, setMoodLoad] = useState([]);
  // State untuk data mood yang akan disimpan
  const [moodSave, setMoodSave] = useState([]);
  // State untuk input keterangan
  const [keterangan, setKeterangan] = useState("");
  // State untuk mengatur modal (form) aktif/tidak
  const [isDisabled, setIsDisabled] = useState(true);
  // Ambil fungsi setMood dari context
  const { setMood } = useMood();

  // Ambil data mood dari localStorage saat komponen pertama kali di-mount
  useEffect(() => {
    const savedMood = localStorage.getItem("mood");
    if (savedMood) {
      setMoodLoad(JSON.parse(savedMood));
    }
  }, []);

  // Simpan data mood ke localStorage setiap kali moodSave berubah
  useEffect(() => {
    if (moodSave.length > 0) {
      localStorage.setItem("mood", JSON.stringify(moodSave));
      setMood(moodSave); // Update context dengan mood baru
      // Reset state setelah menyimpan
      setMoodLoad(moodSave);
      setIsDisabled(true); // Tutup modal setelah simpan
      setSelectedMood(null); // Reset pilihan mood
      selectRef.current.value = "null"; // Reset dropdown ke default
      setKeterangan(""); // Reset input keterangan
    }
  }, [moodSave]);

  // Fungsi untuk menambah mood baru ke daftar
  const addMood = () => {
    if (selectedMood && selectedMood != "null") {
      // Ambil tanggal hari ini
      const date = new Date().toLocaleDateString("id-ID", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      // Buat objek mood baru
      const newMood = {
        idMood: selectedMood.id,
        score: selectedMood.score,
        keterangan: keterangan,
        date: date,
      };
      // Cari apakah sudah ada mood di tanggal yang sama
      const idx = moodLoad.findIndex((mood) => mood.date === newMood.date);
      // Jika belum ada, tambahkan mood baru
      // Jika sudah ada, update mood pada tanggal tersebut
      idx == -1
        ? setMoodSave([...moodLoad, newMood])
        : setMoodSave(() => {
            const moodUpdate = [...moodLoad];
            moodUpdate[idx] = newMood;
            return [...moodUpdate];
          });
    } else {
      // Jika mood belum dipilih, tampilkan alert
      alert("Silakan pilih mood terlebih dahulu!");
    }
  };

  return (
    <>
      {/* Tombol untuk membuka modal input mood */}
      <button
        onClick={() => setIsDisabled(false)}
        className={`btn text-white hover:bg-brown-tertiary rounded-lg hover:text-brown-primary hover:border-none btn-outline poppins-regular ${className}`}
      >
        {/* Icon buku catatan */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="15"
          height="15`"
          fill="currentColor"
        >
          <g data-name="50-Note Book">
            <path d="M8 2h18a2 2 0 0 1 2 2v10h2V4a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1H0a2 2 0 0 0 2 2v3H0a2 2 0 0 0 2 2v3H0a2 2 0 0 0 2 2v3H0a2 2 0 0 0 2 2v3H0a2 2 0 0 0 2 2v1a4 4 0 0 0 4 4h9v-2H8zM6 30a2 2 0 0 1-2-2v-1h2zm0-5H4v-3h2zm0-5H4v-3h2zm0-5H4v-3h2zm0-5H4V7h2zm0-5H4V4a2 2 0 0 1 2-2z" />
            <path d="M25 10V6a1 1 0 0 0-1-1H12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zm-2-1H13V7h10zM11 13h2v2h-2zM15 13h2v2h-2zM24 16a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6z" />
            <path d="m23 24.59-1.29-1.29-1.41 1.41 2 2a1 1 0 0 0 1.41 0l4-4-1.41-1.41z" />
          </g>
        </svg>
        <div className={isFold ? "lg:flex hidden" : "flex"}>CATAT MOOD HARI INI</div>
      </button>

      {/* Checkbox untuk mengontrol modal */}
      <input
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
        checked={!isDisabled}
      />

      {/* Modal input mood */}
      <div className="modal" role="dialog">
        <div className="modal-box bg-brown-secondary">
          <div className="flex justify-between items-center w-full">
            <h1 className="w-full poppins-bold text-lg lg:text-xl caret-transparent">
              CATAT MOOD ANDA!
            </h1>
            {/* Tombol close modal */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-brown-tertiary top-2 right-2 cursor-pointer w-10 h-10 hover:text-brown-primary"
              onClick={() => setIsDisabled(true)}
            >
              <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z" />
            </svg>
          </div>
          <div className="flex flex-col w-full gap-2 my-5">
            <h1 className="text-sm poppins-regular">
              Pilih Mood Anda Hari Ini:
            </h1>
            {/* Dropdown pilihan mood */}
            <select
              ref={selectRef}
              onChange={(e) => {
                setSelectedMood(moods.find((m) => m.id == e.target.value));
              }}
              defaultValue="null"
              className="select bg-brown-primary focus:outline-none max-h-[100px] overflow-y-auto w-full"
            >
              <option value="null" disabled>
                Pilih Mood
              </option>
              {moods.map((mood) => (
                <option value={mood.id} key={mood.id}>
                  {`${mood.emoji} ${mood.name}`}
                </option>
              ))}
            </select>
            <fieldset className="fieldset p-0 caret-transparent">
              <h1 className="text-sm poppins-regular">Tambahkan Catatan:</h1>
              {/* Input keterangan mood */}
              <input
                ref={keteranganRef}
                required
                value={keterangan}
                onChange={(e) => setKeterangan(e.target.value)}
                type="text"
                className="input bg-brown-primary focus:outline-none w-full caret-white"
                placeholder="Masukkan..."
              />
            </fieldset>
          </div>
          <div className="">
            {/* Tombol simpan mood */}
            <OutlineButton
              className="w-full flex item-center justify-center"
              onClick={() => {
                !keteranganRef.current.checkValidity()
                  ? keteranganRef.current.reportValidity()
                  : addMood();
              }}
            >
              SAVE
            </OutlineButton>
          </div>
        </div>
      </div>
    </>
  );
}
