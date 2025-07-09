import Sidebar from "../Components/Sidebar.jsx";
import Header from "../Components/Header.jsx";

export default function MainLayout({children}) {
  return (
    <div className={`bg-brown-secondary h-screen overflow-y-scroll`}>
      <Header />
      <Sidebar>
        {children}
      </Sidebar>
    </div>
  );
}
