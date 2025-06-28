import React from "react";
import { Link } from "react-router-dom"; // <-- Tambahkan import ini

const icons = {
  Keadilan: (
    // Timbangan yang lebih estetis dan jelas dengan rantai yang lebih terlihat
    <svg width="36" height="36" viewBox="0 0 36 36">
      {/* Alas timbangan */}
      <rect x="13" y="26" width="10" height="4" rx="1" fill="#219653" stroke="#219653" strokeWidth="1"/>
      
      {/* Tiang timbangan */}
      <rect x="16.5" y="10" width="3" height="16" rx="1" fill="#219653"/>
      
      {/* Bagian atas timbangan */}
      <rect x="12" y="8" width="12" height="3" rx="1" fill="#219653"/>
      
      {/* Lengan timbangan kiri */}
      <rect x="6" y="10" width="10" height="1.5" rx="0.75" fill="#219653" transform="rotate(-10, 6, 10)"/>
      
      {/* Lengan timbangan kanan */}
      <rect x="20" y="10" width="10" height="1.5" rx="0.75" fill="#219653" transform="rotate(10, 30, 10)"/>
      
      {/* Rantai kiri - lebih panjang dan terlihat */}
      <line x1="6" y1="10" x2="6" y2="11" stroke="#219653" strokeWidth="1" />
      <line x1="6" y1="11.5" x2="6" y2="12.5" stroke="#219653" strokeWidth="1" />
      <line x1="6" y1="13" x2="6" y2="14" stroke="#219653" strokeWidth="1" />
      <line x1="6" y1="14.5" x2="6" y2="15.5" stroke="#219653" strokeWidth="1" />
      <line x1="6" y1="16" x2="6" y2="17" stroke="#219653" strokeWidth="1" />
      
      {/* Rantai kanan - lebih panjang dan terlihat */}
      <line x1="30" y1="10" x2="30" y2="11" stroke="#219653" strokeWidth="1" />
      <line x1="30" y1="11.5" x2="30" y2="12.5" stroke="#219653" strokeWidth="1" />
      <line x1="30" y1="13" x2="30" y2="14" stroke="#219653" strokeWidth="1" />
      <line x1="30" y1="14.5" x2="30" y2="15.5" stroke="#219653" strokeWidth="1" />
      <line x1="30" y1="16" x2="30" y2="17" stroke="#219653" strokeWidth="1" />
      
      {/* Mangkuk kiri - posisi lebih rendah */}
      <ellipse cx="6" cy="18" rx="4" ry="2" fill="#56CCF2" opacity="0.8" stroke="#219653" strokeWidth="1"/>
      
      {/* Mangkuk kanan - posisi lebih rendah */}
      <ellipse cx="30" cy="18" rx="4" ry="2" fill="#56CCF2" opacity="0.8" stroke="#219653" strokeWidth="1"/>
    </svg>
  ),
  Kesehatan: (
    // Simbol kesehatan yang lebih sesuai dengan gambar referensi
    <svg width="36" height="36" viewBox="0 0 36 36">
      {/* Lingkaran luar */}
      <circle cx="18" cy="18" r="14" fill="#219653" opacity="0.2" stroke="#219653" strokeWidth="1.5" strokeDasharray="2,1"/>
      
      {/* Bentuk hati */}
      <path d="M18 28 Q9 22 9 15 Q9 10 13 10 Q16 10 18 14 Q20 10 23 10 Q27 10 27 15 Q27 22 18 28Z"
        fill="#43cea2" opacity="0.9" stroke="#219653" strokeWidth="1.5"/>
      
      {/* Tanda plus di tengah hati */}
      <rect x="16" y="14" width="4" height="10" rx="1" fill="white" stroke="#219653" strokeWidth="0.5"/>
      <rect x="13" y="17" width="10" height="4" rx="1" fill="white" stroke="#219653" strokeWidth="0.5"/>
    </svg>
  ),
  "Ilmu Pengetahuan": (
    // Buku dan simbol pengetahuan yang lebih estetis dan detail
    <svg width="36" height="36" viewBox="0 0 36 36">
      {/* Latar belakang lingkaran ilmu */}
      <circle cx="18" cy="18" r="14" fill="none" stroke="#219653" strokeWidth="0.5" strokeDasharray="1,1"/>
      
      {/* Buku kiri - bentuk lebih halus */}
      <path d="M6,10 L16,8 L16,26 L6,24 Z" 
        fill="#56CCF2" opacity="0.9" stroke="#219653" strokeWidth="1.5"/>
      
      {/* Buku kanan - bentuk lebih halus */}
      <path d="M30,10 L20,8 L20,26 L30,24 Z" 
        fill="#fff" stroke="#219653" strokeWidth="1.5"/>
      
      {/* Garis tengah buku - lebih halus */}
      <path d="M16,8 Q18,9.5 20,8" fill="none" stroke="#219653" strokeWidth="1"/>
      <path d="M16,26 Q18,27.5 20,26" fill="none" stroke="#219653" strokeWidth="1"/>
      
      {/* Garis-garis teks - lebih rapi */}
      <line x1="8" y1="13" x2="14" y2="13" stroke="#219653" strokeWidth="0.8"/>
      <line x1="8" y1="16" x2="14" y2="16" stroke="#219653" strokeWidth="0.8"/>
      <line x1="8" y1="19" x2="14" y2="19" stroke="#219653" strokeWidth="0.8"/>
      <line x1="22" y1="13" x2="28" y2="13" stroke="#219653" strokeWidth="0.8"/>
      <line x1="22" y1="16" x2="28" y2="16" stroke="#219653" strokeWidth="0.8"/>
      <line x1="22" y1="19" x2="28" y2="19" stroke="#219653" strokeWidth="0.8"/>
      
      
      {/* Efek cahaya pengetahuan */}
      <path d="M18,6 L18,9" stroke="#43cea2" strokeWidth="0.8" strokeDasharray="0.5,0.5"/>
      <path d="M18,27 L18,30" stroke="#43cea2" strokeWidth="0.8" strokeDasharray="0.5,0.5"/>
      <path d="M6,18 L9,18" stroke="#43cea2" strokeWidth="0.8" strokeDasharray="0.5,0.5"/>
      <path d="M27,18 L30,18" stroke="#43cea2" strokeWidth="0.8" strokeDasharray="0.5,0.5"/>
    </svg>
  ),
  Lingkungan: (
    // Simbol lingkungan yang lebih komprehensif
    <svg width="36" height="36" viewBox="0 0 36 36">
      {/* Bumi */}
      <circle cx="18" cy="18" r="10" fill="#56CCF2" opacity="0.6" stroke="#219653" strokeWidth="1.5"/>
      {/* Garis lintang */}
      <path d="M8,18 Q13,22 18,22 Q23,22 28,18" fill="none" stroke="#219653" strokeWidth="0.8"/>
      <path d="M8,14 Q13,10 18,10 Q23,10 28,14" fill="none" stroke="#219653" strokeWidth="0.8"/>
      {/* Garis bujur */}
      <path d="M18,8 Q14,13 14,18 Q14,23 18,28" fill="none" stroke="#219653" strokeWidth="0.8"/>
      <path d="M18,8 Q22,13 22,18 Q22,23 18,28" fill="none" stroke="#219653" strokeWidth="0.8"/>
      {/* Pohon */}
      <path d="M28,12 L30,18 L26,18 Z" fill="#43cea2" stroke="#219653" strokeWidth="1"/>
      <line x1="28" y1="18" x2="28" y2="22" stroke="#219653" strokeWidth="1.5"/>
      {/* Daun */}
      <path d="M8,12 Q12,8 12,14 Q8,16 8,12 Z" fill="#43cea2" opacity="0.8" stroke="#219653" strokeWidth="1"/>
      <path d="M10,10 Q10,12 10,14" stroke="#219653" strokeWidth="0.5" fill="none"/>
    </svg>
  ),
  Keluarga: (
    // Simbol keluarga yang lebih harmonis dan detail
    <svg width="36" height="36" viewBox="0 0 36 36">
      {/* Lingkaran keluarga */}
      <circle cx="18" cy="20" r="12" fill="none" stroke="#219653" strokeWidth="0.5" strokeDasharray="2,1"/>
      {/* Orang tua 1 */}
      <circle cx="12" cy="12" r="4" fill="#56CCF2" stroke="#219653" strokeWidth="1.5"/>
      <path d="M12,16 L12,24" stroke="#219653" strokeWidth="1.5" fill="none"/>
      <path d="M12,18 L9,22" stroke="#219653" strokeWidth="1.5" fill="none"/>
      <path d="M12,18 L15,22" stroke="#219653" strokeWidth="1.5" fill="none"/>
      {/* Orang tua 2 */}
      <circle cx="24" cy="12" r="4" fill="#43cea2" stroke="#219653" strokeWidth="1.5"/>
      <path d="M24,16 L24,24" stroke="#219653" strokeWidth="1.5" fill="none"/>
      <path d="M24,18 L21,22" stroke="#219653" strokeWidth="1.5" fill="none"/>
      <path d="M24,18 L27,22" stroke="#219653" strokeWidth="1.5" fill="none"/>
      {/* Anak */}
      <circle cx="18" cy="18" r="3" fill="#fff" stroke="#219653" strokeWidth="1.5"/>
      <path d="M18,21 L18,26" stroke="#219653" strokeWidth="1.5" fill="none"/>
      <path d="M18,23 L16,26" stroke="#219653" strokeWidth="1.5" fill="none"/>
      <path d="M18,23 L20,26" stroke="#219653" strokeWidth="1.5" fill="none"/>
      {/* Hati keluarga */}
      <path d="M16,14 Q18,16 20,14" fill="none" stroke="#219653" strokeWidth="0.8"/>
    </svg>
  ),
  Persaudaraan: (
    // Simbol persaudaraan yang lebih kuat dan bermakna
    <svg width="36" height="36" viewBox="0 0 36 36">
      {/* Lingkaran persatuan */}
      <circle cx="18" cy="18" r="14" fill="none" stroke="#219653" strokeWidth="0.8" strokeDasharray="2,1"/>
      {/* Simbol persaudaraan: dua figur berpegangan tangan */}
      <circle cx="12" cy="14" r="3" fill="#56CCF2" opacity="0.8" stroke="#219653" strokeWidth="1"/>
      <circle cx="24" cy="14" r="3" fill="#43cea2" opacity="0.8" stroke="#219653" strokeWidth="1"/>
      {/* Badan */}
      <path d="M12,17 L12,24" stroke="#219653" strokeWidth="1.5" fill="none"/>
      <path d="M24,17 L24,24" stroke="#219653" strokeWidth="1.5" fill="none"/>
      {/* Tangan berjabat */}
      <path d="M12,20 Q15,17 18,20" stroke="#219653" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M24,20 Q21,17 18,20" stroke="#56CCF2" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Jabat tangan */}
      <circle cx="18" cy="20" r="2" fill="#43cea2" opacity="0.9"/>
      {/* Kaki */}
      <path d="M12,24 L10,28" stroke="#219653" strokeWidth="1.5" fill="none"/>
      <path d="M12,24 L14,28" stroke="#219653" strokeWidth="1.5" fill="none"/>
      <path d="M24,24 L22,28" stroke="#219653" strokeWidth="1.5" fill="none"/>
      <path d="M24,24 L26,28" stroke="#219653" strokeWidth="1.5" fill="none"/>
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