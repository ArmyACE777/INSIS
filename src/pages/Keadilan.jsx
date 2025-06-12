import React, { useState } from "react";

const ayatList = [
  {
    id: 1,
    ayat: "QS. An-Nisa: 135",
    arab: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ...",
    terjemah: "Wahai orang-orang yang beriman! Jadilah kamu penegak keadilan...",
    tafsir: (
      <>
        <p>
          Ayat ini merupakan perintah tegas kepada orang-orang beriman untuk menjadi penegak keadilan sejati. Mereka diingatkan agar selalu menjadi saksi yang jujur dan adil karena Allah, tanpa memandang siapa yang terlibat, baik itu diri mereka sendiri, orang tua, maupun kerabat terdekat.
        </p>
        <p>
          Keadilan harus ditegakkan meski terhadap orang yang disayangi atau dihormati, seperti anak, saudara, atau teman. Bahkan jika orang yang terlibat adalah kaya atau miskin, yang mungkin dapat memengaruhi keputusan mereka, keadilan tetap harus dijaga dengan sebaik-baiknya.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{ margin: "8px 0 0 18px", padding: 0 }}>
            <li>
              <a
                href="https://nu.or.id/tafsir/tafsir-surat-an-nisa-ayat-135-keadilan-sebagai-pilar-utama-dalam-islam-wFZTx"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir NU Online, QS. An-Nisa: 135
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 2,
    ayat: "QS. Al-Ma'idah: 8",
    arab: "وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَىٰ أَلَّا تَعْدِلُوا...",
    terjemah: "Dan janganlah kebencianmu terhadap suatu kaum mendorongmu untuk berlaku tidak adil...",
    tafsir: (
      <>
        <p>
          Ayat ini menggarisbawahi pentingnya keadilan meskipun dalam keadaan sulit atau terhadap kelompok yang tidak disukai. Tafsir Al-Tabari menekankan bahwa ayat ini mengajarkan umat Islam untuk menegakkan keadilan tanpa memandang perbedaan suku, agama, atau latar belakang sosial.
        </p>
        <p>
          Keadilan merupakan jalan terdekat menuju ketakwaan kepada Allah dan menjauhi keburukan. Seandainya prinsip keadilan itu diterapkan dalam hukum internasional, maka tidak akan ada peperangan.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{ margin: "8px 0 0 18px", padding: 0 }}>
            <li>
              <a
                href="https://tafsirq.com/id/topik/keadilan"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Web, QS. Al-Ma'idah: 8
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 3,
    ayat: "QS. Al-Hadid: 25",
    arab: "لَقَدْ أَرْسَلْنَا رُسُلَنَا بِالْبَيِّنَاتِ...",
    terjemah: "Sesungguhnya Kami telah mengutus rasul-rasul Kami dengan membawa bukti-bukti yang nyata...",
    tafsir: (
      <>
        <p>
          Ayat ini menunjukkan bahwa para rasul diutus dengan membawa bukti-bukti yang nyata dan kitab suci untuk menegakkan keadilan di antara manusia. Agama yang dibawa para rasul berisi keadilan dalam perintah dan larangan, dan dalam bermu’amalah.
        </p>
        <p>
          Ini merupakan dalil bahwa para rasul semuanya sepakat dalam kaidah syara’, yaitu menegakkan keadilan meskipun berbeda-beda gambaran keadilan itu sesuai situasi, kondisi, dan zaman.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{ margin: "8px 0 0 18px", padding: 0 }}>
            <li>
              <a
                href="https://tafsirq.com/id/topik/keadilan"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Web, QS. Al-Hadid: 25
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 4,
    ayat: "QS. Al-An'am: 160",
    arab: "مَنْ جَاءَ بِالْحَسَنَةِ فَلَهُ عَشْرُ أَمْثَالِهَا...",
    terjemah: "Siapa yang berbuat kebaikan, dia akan mendapat balasan sepuluh kali lipat amalnya...",
    tafsir: (
      <>
        <p>
          Ayat ini menegaskan bahwa kebaikan dan kejahatan akan mendapat balasan dengan adil. Siapa yang berbuat kebaikan, dia akan mendapat balasan sepuluh kali lipat amalnya. Siapa yang berbuat keburukan, dia tidak akan diberi balasan melainkan yang seimbang dengannya. Mereka sedikitpun tidak dizalimi (dirugikan).
        </p>
        <p>
          Ini menunjukkan bahwa Allah adalah Hakim Paling Adil yang memberikan balasan sesuai dengan perbuatan manusia.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{ margin: "8px 0 0 18px", padding: 0 }}>
            <li>
              <a
                href="https://www.islampos.com/ayat-alquran-tentang-keadilan-251617/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Islampos, QS. Al-An'am: 160
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 5,
    ayat: "QS. Al-A'raf: 54",
    arab: "إِنَّ رَبَّكُمُ اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ...",
    terjemah: "Sesungguhnya Tuhanmu adalah Allah yang telah menciptakan langit dan bumi dalam enam masa...",
    tafsir: (
      <>
        <p>
          Ayat ini menegaskan bahwa Allah sebagai Al-Hakam adalah yang Maha pengatur dan pencipta dengan adil. Dia menetapkan keadilan agar kalian tidak melampaui batas.
        </p>
        <p>
          Ini menunjukkan bahwa keadilan adalah salah satu sifat Allah yang harus dicontoh oleh manusia dalam kehidupan sehari-hari.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{ margin: "8px 0 0 18px", padding: 0 }}>
            <li>
              <a
                href="https://tafsirq.com/id/topik/keadilan"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Web, QS. Al-A'raf: 54
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  }
];
export default function Keadilan() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="article-detail" style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1 style={{ color: "#43cea2", marginBottom: 12 }}>Keadilan dalam Al-Qur’an</h1>
      <p style={{ fontSize: "1.1rem", color: "#e0f7fa" }}>
        Keadilan adalah prinsip utama dalam Islam. Al-Qur’an menegaskan pentingnya berlaku adil kepada siapa pun, bahkan terhadap diri sendiri, keluarga, maupun orang yang tidak disukai.
      </p>

      <section style={{ margin: "2.5rem 0" }}>
        <h2 style={{ color: "#56ccf2" }}>Kumpulan Ayat Terkait Keadilan</h2>
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
                <div style={{ fontFamily: "'Amiri', serif", fontSize: 22, textAlign: "center", marginBottom: 8 }}>{item.arab}</div>
                <div style={{ fontStyle: "italic", marginBottom: 8 }}>{item.terjemah}</div>
                <div>{item.tafsir}</div>
              </div>
            )}
          </div>
        ))}
      </section>

      <section>
        <h2 style={{ color: "#56ccf2" }}>Contoh Keadilan dalam Kehidupan Sehari-hari</h2>
        <ul style={{ color: "#e0f7fa", fontSize: "1.05rem", lineHeight: 1.8, marginLeft: 24 }}>
          <li>Bersikap adil dalam memutuskan perkara, meski terhadap keluarga sendiri.</li>
          <li>Tidak memihak dalam perselisihan.</li>
          <li>Memberikan hak kepada yang berhak tanpa diskriminasi.</li>
          <li>Tidak menzalimi orang lain dalam ucapan maupun perbuatan.</li>
          <li>Menegakkan kejujuran dan kebenaran dalam setiap urusan.</li>
        </ul>
      </section>
    </div>
  );
}