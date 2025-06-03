import React, { useState } from "react";

const ayatList = [
  {
    id: 1,
    ayat: "QS. At-Tahrim: 6",
    arab: "يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا",
    terjemah: "Wahai orang-orang yang beriman! Peliharalah dirimu dan keluargamu dari api neraka...",
    tafsir: (
      <>
        <p>
          Ayat ini menekankan tanggung jawab kepala keluarga dalam membimbing anggota keluarganya. <b>Ibnu Katsir</b> menafsirkan bahwa seseorang harus mengajarkan kebaikan, mencegah kemungkaran, dan memastikan keluarganya berada di jalan yang lurus.
        </p>
        <p>
          <b>Imam Al-Qurtubi</b> menjelaskan bahwa orang tua harus menjadi contoh dan memberikan pendidikan agama kepada anak-anaknya.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{ margin: "8px 0 0 18px", padding: 0 }}>
            <li>
              <a
                href="https://tafsirweb.com/11024-surat-at-tahrim-ayat-6.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. At-Tahrim: 6
              </a>
            </li>
            <li>
              <a
                href="https://alqurtubi.id/surat-at-tahrim-ayat-6/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Al-Qurtubi, QS. At-Tahrim: 6
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 2,
    ayat: "QS. An-Nisa: 19",
    arab: "وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ",
    terjemah: "Dan bergaullah dengan mereka (istri-istrimu) secara patut.",
    tafsir: (
      <>
        <p>
          Ayat ini memerintahkan suami untuk memperlakukan istri dengan baik. <b>Ibnu Katsir</b> menjelaskan bahwa hubungan keluarga harus dibangun atas dasar kasih sayang, kesabaran, dan akhlak yang baik.
        </p>
        <p>
          <b>Imam Ath-Thabari</b> menafsirkan bahwa ‘bergaul secara patut’ mencakup sikap lembut, adil, dan memberi nafkah sesuai kemampuan.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{ margin: "8px 0 0 18px", padding: 0 }}>
            <li>
              <a
                href="https://tafsirweb.com/5252-surat-an-nisa-ayat-19.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. An-Nisa: 19
              </a>
            </li>
            <li>
              <a
                href="https://tafsirweb.com/5252-surat-an-nisa-ayat-19.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ath-Thabari, QS. An-Nisa: 19
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 3,
    ayat: "QS. Luqman: 13-19",
    arab: "يَا بُنَيَّ لَا تُشْرِكْ بِاللَّهِ ... يَا بُنَيَّ أَقِمِ الصَّلَاةَ وَأْمُرْ بِالْمَعْرُوفِ وَانْهَ عَنِ الْمُنكَرِ...",
    terjemah: "Wahai anakku! Janganlah engkau mempersekutukan Allah... Wahai anakku! Dirikanlah shalat dan suruhlah berbuat yang ma'ruf dan cegahlah dari yang mungkar...",
    tafsir: (
      <>
        <p>
          Ayat-ayat ini berisi nasihat Luqman kepada anaknya, yang mencerminkan pendidikan keluarga dalam Islam. <b>Ibnu Katsir</b> menjelaskan bahwa Luqman memulai nasihatnya dengan tauhid, lalu menekankan akhlak dan ibadah.
        </p>
        <p>
          <b>Imam Al-Qurtubi</b> menambahkan bahwa pendidikan anak dalam Islam harus mencakup aspek aqidah, ibadah, dan akhlak mulia.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{ margin: "8px 0 0 18px", padding: 0 }}>
            <li>
              <a
                href="https://tafsirweb.com/8755-surat-luqman-ayat-13.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Luqman: 13–19
              </a>
            </li>
            <li>
              <a
                href="https://alqurtubi.id/surat-luqman-ayat-13-19/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Al-Qurtubi, QS. Luqman: 13–19
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  }
];

export default function Keluarga() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="article-detail" style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1 style={{ color: "#43cea2", marginBottom: 12 }}>Keluarga dalam Al-Qur’an</h1>
      <p style={{ fontSize: "1.1rem", color: "#e0f7fa" }}>
        Al-Qur’an memberikan perhatian besar terhadap pembentukan dan peran keluarga. Keluarga yang kuat akan melahirkan masyarakat yang kokoh dan berakhlak.
      </p>

      <section style={{ margin: "2.5rem 0" }}>
        <h2 style={{ color: "#56ccf2" }}>Kumpulan Ayat Terkait Keluarga</h2>
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
              <span style={{ fontSize: 20 }}>{openId === item.id ? "▲" : "▼"}</span>
            </div>
            {openId === item.id && (
              <div style={{ padding: "1.2rem", color: "#e0f7fa" }}>
                <div
                  style={{
                    fontFamily: "'Amiri', serif",
                    fontSize: 22,
                    textAlign: "center",
                    marginBottom: 8
                  }}
                >
                  {item.arab}
                </div>
                <div style={{ fontStyle: "italic", marginBottom: 8 }}>{item.terjemah}</div>
                <div>{item.tafsir}</div>
              </div>
            )}
          </div>
        ))}
      </section>

      <section>
        <h2 style={{ color: "#56ccf2" }}>Contoh Membangun Keluarga Islami</h2>
        <ul style={{ color: "#e0f7fa", fontSize: "1.05rem", lineHeight: 1.8, marginLeft: 24 }}>
          <li>Menjadi teladan yang baik bagi anggota keluarga.</li>
          <li>Memberikan pendidikan agama sejak dini kepada anak-anak.</li>
          <li>Menjalin komunikasi yang terbuka dan penuh kasih sayang.</li>
          <li>Membagi waktu antara pekerjaan dan keluarga dengan adil.</li>
          <li>Saling mengingatkan dalam kebaikan dan ibadah.</li>
        </ul>
      </section>
    </div>
  );
}
