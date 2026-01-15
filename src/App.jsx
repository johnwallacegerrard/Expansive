import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Reviews from "./components/Reviews.jsx";
import Price from "./components/Price.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/prices" element={<Price />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
