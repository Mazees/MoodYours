import Sidebar from "../Components/Sidebar.jsx";
import Header from "../Components/Header.jsx";

export default function MainLayout({children}) {
  return (
    <div className="bg-brown-secondary">
      <Header />
      <Sidebar>
        {children}
      </Sidebar>
    </div>
  );
}
