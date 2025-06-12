import React from "react";
import { Link } from "react-router-dom"; // <-- Tambahkan import ini

const icons = {
  Keadilan: (
    // Timbangan
    <svg width="36" height="36" viewBox="0 0 36 36">
      <g stroke="#219653" strokeWidth="2" fill="none">
        <line x1="18" y1="8" x2="18" y2="26"/>
        <line x1="10" y1="14" x2="26" y2="14"/>
        {/* Kanan */}
        <path d="M24 14 Q25 18 22 18 Q19 18 20 14" fill="#56CCF2" opacity="0.5"/>
        {/* Kiri */}
        <path d="M12 14 Q11 18 14 18 Q17 18 16 14" fill="#56CCF2" opacity="0.5"/>
        {/* Dasar */}
        <rect x="15" y="26" width="6" height="2.5" rx="1" fill="#219653" />
      </g>
    </svg>
  ),
  Kesehatan: (
    // Simbol hati & salib (simbol kesehatan universal)
    <svg width="36" height="36" viewBox="0 0 36 36">
      <path d="M18 28 Q10 22 10 16 Q10 12 14 12 Q16 12 18 14 Q20 12 22 12 Q26 12 26 16 Q26 22 18 28Z"
        fill="#43cea2" stroke="#219653" strokeWidth="2"/>
      <rect x="16" y="16" width="4" height="8" rx="2" fill="#fff"/>
      <rect x="14" y="18" width="8" height="4" rx="2" fill="#fff"/>
    </svg>
  ),
  "Ilmu Pengetahuan": (
    // Buku terbuka dengan garis tengah
    <svg width="36" height="36" viewBox="0 0 36 36">
      <rect x="7" y="12" width="10" height="12" rx="2" fill="#56CCF2" stroke="#219653" strokeWidth="2"/>
      <rect x="19" y="12" width="10" height="12" rx="2" fill="#fff" stroke="#219653" strokeWidth="2"/>
      <line x1="18" y1="12" x2="18" y2="24" stroke="#219653" strokeWidth="2"/>
      <line x1="12" y1="16" x2="15" y2="16" stroke="#219653" strokeWidth="1"/>
      <line x1="21" y1="16" x2="24" y2="16" stroke="#219653" strokeWidth="1"/>
    </svg>
  ),
  Lingkungan: (
    // Daun dan bumi
    <svg width="36" height="36" viewBox="0 0 36 36">
      <circle cx="18" cy="18" r="10" fill="#56CCF2" opacity="0.2" stroke="#219653" strokeWidth="2"/>
      <path d="M18 28 Q22 22 18 18 Q14 22 18 28Z" fill="#219653" opacity="0.7" stroke="#219653" strokeWidth="1"/>
      <path d="M18 18 Q20 20 21 23" stroke="#fff" strokeWidth="1"/>
    </svg>
  ),
  Keluarga: (
    // Ikon keluarga: dua orang dewasa dan satu anak
    <svg width="36" height="36" viewBox="0 0 36 36">
      {/* Orang tua */}
      <circle cx="13" cy="18" r="3" fill="#56CCF2" stroke="#219653" strokeWidth="1"/>
      <circle cx="23" cy="18" r="3" fill="#219653" stroke="#219653" strokeWidth="1"/>
      {/* Anak */}
      <circle cx="18" cy="24" r="2" fill="#fff" stroke="#219653" strokeWidth="1"/>
      {/* Badan */}
      <path d="M13 21 Q18 28 23 21" stroke="#219653" strokeWidth="2" fill="none"/>
      <path d="M18 26 Q18 28 18 30" stroke="#219653" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  Persaudaraan: (
    // Dua tangan berjabat
    <svg width="36" height="36" viewBox="0 0 36 36">
      {/* Tangan kiri */}
      <path d="M10 22 Q14 18 18 22" stroke="#219653" strokeWidth="2" fill="none"/>
      {/* Tangan kanan */}
      <path d="M26 22 Q22 18 18 22" stroke="#56CCF2" strokeWidth="2" fill="none"/>
      {/* Jabat */}
      <ellipse cx="18" cy="22" rx="2.5" ry="1.2" fill="#43cea2" opacity="0.7"/>
    </svg>
  ),
  "Akhlak Mulia": (
    // Bintang besar
    <svg width="36" height="36" viewBox="0 0 36 36">
      <polygon points="18,8 21,16 29,16 23,21 25,29 18,24 11,29 13,21 7,16 15,16"
        fill="#43cea2" stroke="#219653" strokeWidth="2"/>
    </svg>
  ),
  "Ekonomi & Rezeki": (
    // Koin uang dengan simbol Rp
    <svg width="36" height="36" viewBox="0 0 36 36">
      <ellipse cx="18" cy="18" rx="9" ry="7" fill="#56CCF2" stroke="#219653" strokeWidth="2"/>
      <ellipse cx="18" cy="21" rx="9" ry="7" fill="#43cea2" opacity="0.7" stroke="#219653" strokeWidth="1"/>
      <text x="18" y="21" textAnchor="middle" fontSize="10" fill="#219653" fontWeight="bold">Rp</text>
    </svg>
  )
};

const articles = [
  { title: "Keadilan", desc: "Nilai keadilan dalam kehidupan menurut Al-Qur’an.", link: "/Keadilan" },
  { title: "Kesehatan", desc: "Panduan hidup sehat dan bersih dari Al-Qur’an.", link: "/Kesehatan" },
  { title: "Ilmu Pengetahuan", desc: "Motivasi menuntut ilmu dan berpikir kritis.", link: "/IlmuPengetahuan"},
  { title: "Lingkungan", desc: "Ajakan menjaga alam dan lingkungan sekitar.", link: "/Lingkungan" },
  { title: "Keluarga", desc: "Pentingnya keluarga harmonis dan penuh kasih.", link: "/Keluarga" },
  { title: "Persaudaraan", desc: "Menjaga ukhuwah dan persatuan umat.", link: "/Persaudaraan" },
  { title: "Akhlak Mulia", desc: "Meneladani akhlak terpuji dalam kehidupan.", link: "/AkhlakMulia" },
  { title: "Ekonomi & Rezeki", desc: "Etika mencari rezeki dan keadilan ekonomi.", link: "/EkonomidanRezeki" }
];

export default function Articles(props) {
  return (
    <section className="articles" id={props.id || "articles"}>
      <h2>Bacaan Tematik Al-Qur’an</h2>
      <div className="card-grid">
        {articles.map((a, i) => (
          <div className="card" key={i}>
            <div className="card-icon">{icons[a.title]}</div>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
            <Link to={a.link}>Baca Selengkapnya</Link>
          </div>
        ))}
      </div>
    </section>
  );
}