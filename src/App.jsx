import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar.jsx";
import Header from "./Components/Header.jsx";
import Modal from "./Components/Modal.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";

function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
