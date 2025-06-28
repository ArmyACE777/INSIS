import React from "react";
import logo2 from "../assets/logo2.png"; // import logo kedua

export default function Footer() {
  return (
    <footer>
      <div className="footer-content" style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <div className="footer-logo" style={{ display: "flex", alignItems: "center", gap: 16 }}>
        </div>
        <div className="footer-copy" style={{ marginLeft: "auto", color: "#fff" }}>
          &copy; 2025 Al-Quran Tematik
        </div>
      </div>
    </footer>
  );
}