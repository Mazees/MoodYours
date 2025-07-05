import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import logoDefault from "/icon.svg"
import logoHover from "../assets/icon_hover.svg"

function HomeIcon({size=10, color="white"}){
  return <svg fill="currentColor" style={{ fontSize: `${size}px`, color: `${color}` }} width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.012 10.981 3 11h2v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9h2a1 1 0 0 0 .555-1.832l-9-6a1 1 0 0 0-1.11 0l-9 6a1 1 0 0 0-.277 1.387.98.98 0 0 0 .844.426zM10 14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h-4z"/></svg>
}

export default function Sidebar({ children }) {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col lg:ml-80">
        {children}
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-brown-primary rounded-r-lg rounded-tl-lg text-base-content min-h-full w-80 p-4 lg:mt-2 mt-[10vh] lg:fixed gap-1">
          <div className="bg-brown-secondary rounded-lg mb-3 p-5 w-full h-[150px] ">
            <img src={isHover ? logoHover : logoDefault} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={`w-full h-full object-contain cursor-grab transition-all duration-300 ${isHover ? "scale-110 animate-rotate" : ""}`}/>
          </div>
          <NavLink className={({isActive})=>`salsa-regular transition-all duration-300 flex py-2 px-4 w-full rounded-lg bg-brown-primary hover:bg-brown-secondary ${isActive ? "bg-brown-secondary" : ""}`} to="/">HOME</NavLink>
          <NavLink className={({isActive})=>`salsa-regular transition-all duration-300 flex py-2 px-4 w-full rounded-lg bg-brown-primary hover:bg-brown-secondary ${isActive ? "bg-brown-secondary" : ""}`} to="/About">ABOUT</NavLink>
        </ul>
      </div>
    </div>
  );
}
