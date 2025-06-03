import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Keadilan from "./pages/Keadilan";
import Kesehatan from "./pages/Kesehatan";
import IlmuPengetahuan from "./pages/IlmuPengetahuan";
import Lingkungan from "./pages/Lingkungan";
import Keluarga from "./pages/Keluarga";
import Persaudaraan from "./pages/Persaudaraan";
import AkhlakMulia from "./pages/AkhlakMulia";
import EkonomiRezeki from "./pages/EkonomidanRezeki";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react"

function App() {
  const handleScrollToArticles = () => {
    document.getElementById("articles")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home onScrollToArticles={handleScrollToArticles} />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Keadilan" element={<Keadilan />} />
          <Route path="/Kesehatan" element={<Kesehatan />} />
          <Route path="/IlmuPengetahuan" element={<IlmuPengetahuan />} />
          <Route path="/Lingkungan" element={<Lingkungan />} />
          <Route path="/Keluarga" element={<Keluarga />} />
          <Route path="/Persaudaraan" element={<Persaudaraan />} />
          <Route path="/AkhlakMulia" element={<AkhlakMulia />} />
          <Route path="/EkonomidanRezeki" element={<EkonomiRezeki />} />
        </Routes>
      </main>
      <Footer />
    </>
    
  );
}

export default App;