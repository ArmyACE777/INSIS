import React, { useState } from "react";

const ayatList = [
  {
    id: 1,
    ayat: "QS. Al-Hujurat: 10",
    arab: "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ",
    terjemah: "Sesungguhnya orang-orang mukmin itu bersaudara, karena itu damaikanlah antara kedua saudaramu itu...",
    tafsir: (
      <>
        <p>
          Ayat ini menegaskan bahwa ikatan keimanan melahirkan persaudaraan sejati. <b>Ibnu Katsir</b> menafsirkan, setiap Muslim wajib menjaga ukhuwah, saling memaafkan, dan mendamaikan jika terjadi perselisihan.
        </p>
        <p>
          <b>Imam Al-Qurtubi</b> menambahkan, persaudaraan dalam Islam adalah pondasi kekuatan umat, dan permusuhan harus dihindari.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{margin: "8px 0 0 18px", padding: 0}}>
            <li>
              <a
                href="https://tafsirweb.com/13041-surat-al-hujurat-ayat-10.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Al-Hujurat: 10
              </a>
            </li>
            <li>
              <a
                href="https://alqurtubi.id/surat-al-hujurat-ayat-10/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Al-Qurtubi, QS. Al-Hujurat: 10
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 2,
    ayat: "QS. Ali Imran: 103",
    arab: "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا",
    terjemah: "Dan berpeganglah kamu semuanya kepada tali (agama) Allah, dan janganlah kamu bercerai-berai...",
    tafsir: (
      <>
        <p>
          Ayat ini memerintahkan umat Islam untuk bersatu dan menghindari perpecahan. <b>Ibnu Katsir</b> menafsirkan, persatuan adalah kunci kekuatan umat dan perpecahan adalah sumber kelemahan.
        </p>
        <p>
          <b>Imam Ath-Thabari</b> menegaskan, menjaga ukhuwah dan persatuan adalah kewajiban setiap Muslim.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{margin: "8px 0 0 18px", padding: 0}}>
            <li>
              <a
                href="https://tafsirweb.com/105-surat-ali-imran-ayat-103.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Ali Imran: 103
              </a>
            </li>
            <li>
              <a
                href="https://tafsirweb.com/105-surat-ali-imran-ayat-103.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ath-Thabari, QS. Ali Imran: 103
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 3,
    ayat: "QS. Al-Ma’idah: 2",
    arab: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ",
    terjemah: "Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa, dan jangan tolong-menolong dalam berbuat dosa dan permusuhan...",
    tafsir: (
      <>
        <p>
          Ayat ini menegaskan pentingnya saling membantu dalam kebaikan dan takwa. <b>Ibnu Katsir</b> menafsirkan, kerja sama dalam kebaikan memperkuat persaudaraan dan mencegah permusuhan.
        </p>
        <p>
          <b>Imam Al-Qurtubi</b> menambahkan, tolong-menolong adalah ciri masyarakat yang sehat dan harmonis.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{margin: "8px 0 0 18px", padding: 0}}>
            <li>
              <a
                href="https://tafsirweb.com/3127-surat-al-maidah-ayat-2.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Al-Ma’idah: 2
              </a>
            </li>
            <li>
              <a
                href="https://alqurtubi.id/surat-al-maidah-ayat-2/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Al-Qurtubi, QS. Al-Ma’idah: 2
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  }
];

export default function Persaudaraan() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="article-detail" style={{maxWidth: 700, margin: "0 auto", padding: "2rem 1rem"}}>
      <h1 style={{color: "#43cea2", marginBottom: 12}}>Persaudaraan dalam Al-Qur’an</h1>
      <p style={{fontSize: "1.1rem", color: "#e0f7fa"}}>
        Persaudaraan adalah kekuatan yang menyatukan umat manusia. Al-Qur’an mengajarkan pentingnya ukhuwah, saling tolong-menolong, dan menghindari permusuhan.
      </p>

      <section style={{margin: "2.5rem 0"}}>
        <h2 style={{color: "#56ccf2"}}>Kumpulan Ayat Terkait Persaudaraan</h2>
        {ayatList.map((item) => (
          <div
            key={item.id}
            style={{
              marginBottom: 20,
              borderRadius: 14,
              background: "#22313a",
              boxShadow: openId === item.id ? "0 4px 16px #0002" : "none",
              transition: "all 0.2s"
            }}
          >
            <div
              style={{
                cursor: "pointer",
                padding: "1.2rem",
                color: "#56ccf2",
                fontWeight: 600,
                fontSize: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
            >
              <span>{item.ayat}</span>
              <span style={{fontSize: 20}}>{openId === item.id ? "▲" : "▼"}</span>
            </div>
            {openId === item.id && (
              <div style={{padding: "1.2rem", color: "#e0f7fa"}}>
                <div style={{fontFamily: "'Amiri', serif", fontSize: 22, textAlign: "center", marginBottom: 8}}>{item.arab}</div>
                <div style={{fontStyle: "italic", marginBottom: 8}}>{item.terjemah}</div>
                <div>{item.tafsir}</div>
              </div>
            )}
          </div>
        ))}
      </section>

      <section>
        <h2 style={{color: "#56ccf2"}}>Contoh Menjaga Persaudaraan dalam Kehidupan Sehari-hari</h2>
        <ul style={{color: "#e0f7fa", fontSize: "1.05rem", lineHeight: 1.8, marginLeft: 24}}>
          <li>Saling menolong dalam kebaikan.</li>
          <li>Mendamaikan teman atau saudara yang berselisih.</li>
          <li>Tidak membicarakan keburukan orang lain.</li>
          <li>Menjenguk teman yang sakit.</li>
          <li>Berbagi kebahagiaan dan kesedihan bersama.</li>
        </ul>
      </section>
    </div>
  );
}