import React, { useState } from "react";

const ayatList = [
  {
    id: 1,
    ayat: "QS. Al-Mujadilah: 11",
    arab: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
    terjemah: "Allah akan meninggikan orang-orang yang beriman di antara kamu dan orang-orang yang diberi ilmu pengetahuan beberapa derajat.",
    tafsir: (
      <>
        <p>
          Ayat ini menegaskan keutamaan ilmu pengetahuan. <b>Ibnu Katsir</b> menafsirkan bahwa Allah mengangkat derajat orang beriman dan berilmu di dunia dan akhirat. Ilmu menjadi pembeda utama dalam kemuliaan manusia.
        </p>
        <p>
          <b>Imam Al-Qurtubi</b> menambahkan, menuntut ilmu adalah ibadah dan jalan menuju kebaikan dunia-akhirat.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{margin: "8px 0 0 18px", padding: 0}}>
            <li>
              <a
                href="https://tafsirweb.com/13362-surat-al-mujadilah-ayat-11.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Al-Mujadilah: 11
              </a>
            </li>
            <li>
              <a
                href="https://alqurtubi.id/surat-al-mujadilah-ayat-11/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Al-Qurtubi, QS. Al-Mujadilah: 11
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 2,
    ayat: "QS. Az-Zumar: 9",
    arab: "قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ",
    terjemah: "Katakanlah: Apakah sama orang-orang yang mengetahui dengan orang-orang yang tidak mengetahui?",
    tafsir: (
      <>
        <p>
          Allah menegaskan keutamaan orang berilmu dibandingkan yang tidak berilmu. <b>Ibnu Katsir</b> menafsirkan, ilmu adalah cahaya yang membedakan manusia dari kebodohan dan kesesatan.
        </p>
        <p>
          <b>Imam Ath-Thabari</b> menambahkan, ilmu membawa manusia pada amal saleh dan pemahaman yang benar tentang agama.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{margin: "8px 0 0 18px", padding: 0}}>
            <li>
              <a
                href="https://tafsirweb.com/14697-surat-az-zumar-ayat-9.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Az-Zumar: 9
              </a>
            </li>
            <li>
              <a
                href="https://tafsirweb.com/14697-surat-az-zumar-ayat-9.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ath-Thabari, QS. Az-Zumar: 9
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 3,
    ayat: "QS. Al-‘Alaq: 1-5",
    arab: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ... عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ",
    terjemah: "Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan ... Dia mengajarkan manusia apa yang tidak diketahuinya.",
    tafsir: (
      <>
        <p>
          Wahyu pertama yang turun menekankan pentingnya membaca dan belajar. <b>Ibnu Katsir</b> menafsirkan, Islam adalah agama ilmu dan perintah pertama adalah membaca.
        </p>
        <p>
          <b>Imam Al-Qurtubi</b> menegaskan, kemajuan umat Islam sangat bergantung pada semangat menuntut ilmu.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{margin: "8px 0 0 18px", padding: 0}}>
            <li>
              <a
                href="https://tafsirweb.com/10541-surat-al-alaq-ayat-1-5.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Al-‘Alaq: 1-5
              </a>
            </li>
            <li>
              <a
                href="https://alqurtubi.id/surat-al-alaq-ayat-1-5/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Al-Qurtubi, QS. Al-‘Alaq: 1-5
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  }
];

export default function IlmuPengetahuan() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="article-detail" style={{maxWidth: 700, margin: "0 auto", padding: "2rem 1rem"}}>
      <h1 style={{color: "#43cea2", marginBottom: 12}}>Ilmu Pengetahuan dalam Al-Qur’an</h1>
      <p style={{fontSize: "1.1rem", color: "#e0f7fa"}}>
        Al-Qur’an sangat menekankan pentingnya ilmu pengetahuan. Ilmu adalah cahaya yang menerangi kehidupan, membimbing manusia menuju kebenaran dan kemajuan.
      </p>

      <section style={{margin: "2.5rem 0"}}>
        <h2 style={{color: "#56ccf2"}}>Kumpulan Ayat Terkait Ilmu Pengetahuan</h2>
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
        <h2 style={{color: "#56ccf2"}}>Contoh Mengamalkan Ilmu dalam Kehidupan Sehari-hari</h2>
        <ul style={{color: "#e0f7fa", fontSize: "1.05rem", lineHeight: 1.8, marginLeft: 24}}>
          <li>Rajin membaca dan mencari pengetahuan baru.</li>
          <li>Mengamalkan ilmu yang telah didapat.</li>
          <li>Berbagi ilmu kepada orang lain.</li>
          <li>Kritis dan terbuka terhadap kebenaran.</li>
          <li>Memanfaatkan teknologi untuk kebaikan.</li>
        </ul>
      </section>
    </div>
  );
}