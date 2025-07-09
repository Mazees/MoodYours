import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import logoDefault from "/icon.svg";
import logoHover from "../assets/icon_hover.svg";
import logoDown from "../assets/icon_down.svg";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";

// Komponen Sidebar untuk navigasi utama aplikasi
export default function Sidebar({ children }) {
  const [isHover, setIsHover] = useState(false); // State untuk hover pada logo
  const [isDown, setIsDown] = useState(false); // State untuk mouse down pada logo
  const navigate = useNavigate();

  return (
    <div className="drawer lg:drawer-open">
      {/* Toggle drawer untuk mobile */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {/* Konten utama halaman */}
      <section className="drawer-content flex flex-col lg:ml-80 overflow-x-hidden">
        {children}
        {/* Page content here */}
      </section>
      {/* Sidebar */}
      <div className="drawer-side">
        {/* Overlay untuk menutup sidebar di mobile */}
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul
          className=" bg-brown-primary rounded-r-lg rounded-tl-lg text-base-content h-[90vh] w-80 flex flex-col p-4 lg:mt-2 mt-[10vh] lg:fixed gap-1"
          data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="500"
        >
          {/* Logo aplikasi */}
          <div className="bg-brown-secondary rounded-lg mb-3 p-5 w-full h-[150px] ">
            <img
              src={isHover ? logoHover : isDown ? logoDown : logoDefault}
              onMouseEnter={() =>
                isDown ? setIsHover(false) : setIsHover(true)
              }
              onContextMenu={(e) => e.preventDefault()}
              onMouseDown={(e) => {
                e.preventDefault();
                setIsHover(!isHover);
                setIsDown(!isDown);
              }}
              onMouseLeave={() => setIsHover(false)}
              className={`w-full h-full object-contain select-none caret-transparent ${
                isDown ? "cursor-grab" : "cursor-pointer"
              } transition-all duration-300 ${
                isHover ? "scale-110 animate-rotate" : ""
              }`}
            />
          </div>
          {/* Link ke Home */}
          <NavLink
            className={({ isActive }) =>
              `poppins-semibold transition-all duration-300 flex py-2 px-4 w-full rounded-lg bg-brown-primary hover:bg-brown-secondary ${
                isActive ? "bg-brown-secondary" : ""
              }`
            }
            to="/home"
          >
            HOME
          </NavLink>
          {/* Link ke Dashboard */}
          <NavLink
            className={({ isActive }) =>
              `poppins-semibold transition-all duration-300 flex py-2 px-4 w-full rounded-lg bg-brown-primary hover:bg-brown-secondary ${
                isActive ? "bg-brown-secondary" : ""
              }`
            }
            to="/dashboard"
          >
            DASHBOARD
          </NavLink>
          {/* Link ke Riwayat Mood */}
          <NavLink
            className={({ isActive }) =>
              `poppins-semibold transition-all duration-300 flex py-2 px-4 w-full rounded-lg bg-brown-primary hover:bg-brown-secondary ${
                isActive ? "bg-brown-secondary" : ""
              }`
            }
            to="/history"
          >
            RIWAYAT MOOD
          </NavLink>
          <div className="w-full h-full flex justify-end items-end">
            <div className="bg-brown-secondary w-fit h-fit p-3 rounded-lg flex gap-3">
              <a
                href="https://www.instagram.com/madaputra21?igsh=MXV1bWZqc3NxdWdleA=="
                target="_blank"
                className="p-2 w-fit bg-white rounded-lg hover:bg-brown-tertiary"
              >
                <img src={instagram} className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Mazees/MoodYours"
                target="_blank"
                className="p-2 w-fit bg-white rounded-lg hover:bg-brown-tertiary"
              >
                <img src={github} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
