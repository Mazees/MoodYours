import { useState } from "react";
import Sidebar from "../Components/Sidebar.jsx";
import Header from "../Components/Header.jsx";
import Modal from "../Components/Modal.jsx";
import MainLayout from "../Components/MainLayout.jsx";
import Button from "../Components/Button.jsx";

function Home() {
  return (
    <MainLayout>
      <Button onClick={()=>alert(Halo)}>Halo</Button>
    </MainLayout>
  );
}
export default Home;
