import React from "react";
import logo from "../assets/logo.jpg";
import logo2 from "../assets/logo2.png"; // tambahkan logo kedua

export default function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <img
        src={logo}
        alt="INSIS Logo"
        width={80}
        height={80}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}