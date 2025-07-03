import { useState } from 'react'
import Sidebar from '../Components/Sidebar.jsx'
import Header from '../Components/Header.jsx'
import Modal from '../Components/Modal.jsx'

function Home() {
  return (
    <>
    <Header />
    <Sidebar>
        <button>Test</button>
    </Sidebar>
    </>
  )
}
export default Home;