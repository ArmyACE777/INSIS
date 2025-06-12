import React from "react";
import logo2 from "../assets/logo2.png"; // import logo kedua

export default function Footer() {
  return (
    <footer>
      <div className="footer-content" style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <div className="footer-logo" style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <img
            src={logo2}
            alt="Logo Kedua"
            width={80}
            height={80}
            style={{ objectFit: "contain", background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
          />
          <div style={{ color: "#fff", fontSize: 18, fontWeight: 500, lineHeight: 1.2 }}>
            INSTITUT AGAMA ISLAM<br />PERSIS GARUT
          </div>
        </div>
        <div className="footer-copy" style={{ marginLeft: "auto", color: "#fff" }}>
          &copy; 2025 Al-Quran Tematik
        </div>
      </div>
    </footer>
  );
}