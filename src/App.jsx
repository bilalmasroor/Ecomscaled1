import React from 'react'
import Router from './router/Router'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <ToastContainer
        position="top-right"
      />
      <Navbar />
      <Router />
      <Footer />
    </div>
  )
}

export default App