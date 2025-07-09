import { useNavigate, NavLink } from "react-router-dom";
import AddMood from "./AddMood.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import AOSInit from "../Components/AOSInit.jsx";

export default function Header({ hiddenAdMood = false, children }) {
  const navigate = useNavigate();

  return (
    <header
      className="navbar px-4 bg-brown-primary shadow-sm min-h-[10vh] sticky top-0 left-0 z-50 rounded-b-lg"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
      data-aos="fade-down"
      data-aos-once="true"
    >
      <AOSInit />
      <div className="flex-none">
        <label
          htmlFor="my-drawer-2"
          className="p-3 bg-transparent btn hover:bg-brown-tertiary rounded-lg outline-none border-none cursor-pointer hover:bg-yellow-secondary lg:hidden flex rounded-field"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>{" "}
          </svg>
        </label>
      </div>
      <div className="flex-1 pl-4 text-xl poppins-extrabold caret-transparent">
        MOODYOURS
      </div>
      <div className="flex-none flex items-center gap-2">
        {children}
        <AddMood className={hiddenAdMood ? "hidden" : "flex"} isFold="true" />
      </div>
    </header>
  );
}
