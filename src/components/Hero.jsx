import React, { useState, useEffect } from "react";
const slides = [
  {
    title: "Al-Qur’an Tematik",
    desc: "Jelajahi tema-tema utama Al-Qur’an secara mudah, menarik, dan relevan untuk kehidupan masa kini.",
    image: "/images/slide1.png"
  },
  {
    title: "Bahasan Tematik Menarik",
    desc: "Pelajari tema Al-Qur’an seperti keadilan, kesehatan, keluarga, dan lainnya secara menyenangkan.",
    image: "/images/slide2.png"
  },
  {
    title: "Belajar & Amalkan",
    desc: "Setiap tema dilengkapi ayat, tafsir, dan contoh nyata agar mudah dipahami dan diamalkan dalam kehidupan.",
    image: "/images/slide3.png"
  }
];

export default function Hero({ onScrollToArticles }) {
  const [idx, setIdx] = React.useState(0);
  const [fade, setFade] = React.useState(true);
  const [direction, setDirection] = React.useState(1); // 1: next, -1: prev


  React.useEffect(() => {
  setFade(false);
  const fadeTimeout = setTimeout(() => setFade(true), 100);
  const timer = setTimeout(() => {
    setDirection(1);
    setIdx((idx + 1) % slides.length);
  }, 7000);
  return () => {
    clearTimeout(timer);
    clearTimeout(fadeTimeout);
  };
}, [idx]);

const goTo = (i) => {
  setDirection(i > idx ? 1 : -1);
  setFade(false);
  setTimeout(() => {
    setIdx(i);
    setFade(true);
  }, 200);
};

  // ...existing code...
return (
    <section className="hero">
      <div className={`hero-content${fade ? " fade" : ""} ${direction === 1 ? "slide-next" : "slide-prev"}`}>
        <h1>{slides[idx].title}</h1>
        <p>{slides[idx].desc}</p>
        <button className="cta-btn hero-btn" onClick={onScrollToArticles}>
          Mulai Membaca
        </button>
      </div>
      <div className={`hero-img${fade ? " fade" : ""} ${direction === 1 ? "slide-next" : "slide-prev"}`}>
        {/* Gambar dan efek */}
        <img
          src={slides[idx].image}
          alt={`${slides[idx].title} - ${slides[idx].desc}`}
          className="hero-image"
        />
      </div>
      {/* Navigasi bulat */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => goTo(i)}
            className={idx === i ? "active" : ""}
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: idx === i ? "#43cea2" : "#22313a",
              border: idx === i ? "2px solid #fff" : "2px solid #43cea2",
              cursor: "pointer",
              display: "inline-block",
              transition: "all 0.3s"
            }}
          />
        ))}
      </div>
    </section>
  );
}