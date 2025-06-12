import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showPopup, setShowPopup] = React.useState(false);

  const handleDonasiClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [showProfilePopup, setShowProfilePopup] = React.useState(false);

  const handleTentangClick = (e) => {
    e.preventDefault();
    setShowProfilePopup(true);
  };

  const handleCloseProfilePopup = () => {
    setShowProfilePopup(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Logo />
      </div>
      <ul className="nav-links">
        <Link to="/">Beranda</Link>
        <li><a href="#">Al-Quran</a></li>
        <li><a href="#">Download</a></li>
        <li><a href="#">Kritik dan Saran</a></li>
        <li>
          <a href="#" onClick={handleTentangClick}>Tentang</a>
        </li>
      </ul>
      <a href="#" className="cta-btn" onClick={handleDonasiClick}>Support</a>
      {showPopup && (
        <div className="popup-overlay" style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000
        }}>
          <div className="popup-content" style={{
            background: "#fff",
            color: "#000",
            padding: "2rem",
            borderRadius: "8px",
            minWidth: "300px",
            textAlign: "center",
            position: "relative"
          }}>
            <button
              onClick={handleClosePopup}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "#000"
              }}
              aria-label="Tutup"
            >
              &times;
            </button>
            <h2>Support</h2>
            <p>Silakan transfer ke rekening berikut:</p>
            <div style={{margin: "1rem 0"}}>
              <strong>Dana</strong><br />
              089-655-809-893<br />
              a.n. Moch Nizar Akbar
            </div>
            <p>Terima kasih atas dukungan Anda!</p>
            <p>JazaakAllahu Khairan Katsiiraa</p>
          </div>
        </div>
      )}
      {showProfilePopup && (
        <div className="popup-overlay" style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000
        }}>
          <div className="popup-content" style={{
            background: "#fff",
            color: "#000",
            padding: "2rem",
            borderRadius: "8px",
            minWidth: "300px",
            textAlign: "center",
            position: "relative"
          }}>
            <button
              onClick={handleCloseProfilePopup}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "#000"
              }}
              aria-label="Tutup"
            >
              &times;
            </button>
            <h2>Tentang</h2>
            <p>
            <div style={{ textAlign: "left", margin: "0 0 1em 0" }}>
              Website ini dirancang oleh:
              <ol style={{ textAlign: "left", margin: "" }}>
                <li>Moch Nizar Akbar</li>
                <li>Muhammad Azzam Zulfan</li>
                <li>Hafidz Zulfa</li>
                <li>Mahmud Furqon Ramdani</li>
                <li>Amroini</li>
                <li>Budi Zaqy Al-Qalby</li>
              </ol>
              Mahasiswa IAIPI Garut semester enam Prodi Ilmu Al-Quran Tafsir.<br />
              Kontak: <a href="mailto:mochnizar@iaipersisgarut.ac.id">mochnizar@iaipersisgarut.ac.id</a>
            </div>
            </p>
            <p>
              Tujuan website ini adalah untuk memudahkan akses Al-Quran dan informasi Islami bagi semua orang.
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}