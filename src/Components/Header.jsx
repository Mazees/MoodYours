export default function Header() {
  return (
    <header className="navbar bg-base-200 shadow-sm min-h-[10vh] sticky top-0 left-0 z-50">
      <div className="flex-none">
        <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost lg:hidden flex">
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
      <div className="flex-1">
        <a href="#" className="btn btn-ghost text-xl">MoodYours</a>
      </div>
      <div className="flex-none">
      </div>
    </header>
  );
}
