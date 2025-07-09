import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar.jsx";
import Header from "./Components/Header.jsx";
import Modal from "./Components/AddMood.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import History from "./Pages/History.jsx";
import Home from "./Pages/Home.jsx";
import Opening from "./Pages/Opening.jsx";
import { MoodProvider } from "./Contexts/MoodContext.jsx";
import "aos/dist/aos.css";
import AOSInit from "./Components/AOSInit.jsx";

function App() {
  const [count, setCount] = useState(0);
  return (
    <MoodProvider>
      <AOSInit />
      <Router>
        <Routes>
          <Route path="/" element={<Opening />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </MoodProvider>
  );
}

export default App;
