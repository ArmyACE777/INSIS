import React, { useState } from "react";

const ayatList = [
  {
    id: 1,
    ayat: "QS. Al-A’raf: 31",
    arab: "وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ",
    terjemah: "Makan dan minumlah, tetapi jangan berlebihan. Sungguh, Allah tidak menyukai orang-orang yang berlebih-lebihan.",
    tafsir: (
      <>
        <p>
          Ayat ini menegaskan pentingnya pola hidup sehat dan seimbang. <b>Ibnu Katsir</b> menafsirkan bahwa Allah memerintahkan manusia untuk menikmati makanan dan minuman yang halal, namun melarang berlebihan karena dapat membahayakan tubuh dan jiwa.
        </p>
        <p>
          <b>Imam Al-Qurtubi</b> menambahkan bahwa menjaga kesehatan adalah bagian dari syukur atas nikmat Allah, dan berlebihan dalam makan/minum dapat menimbulkan penyakit.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{margin: "8px 0 0 18px", padding: 0}}>
            <li>
              <a
                href="https://tafsirweb.com/1013-surat-al-araf-ayat-31.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Al-A’raf: 31
              </a>
            </li>
            <li>
              <a
                href="https://alqurtubi.id/surat-al-araf-ayat-31/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Al-Qurtubi, QS. Al-A’raf: 31
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 2,
    ayat: "QS. Al-Baqarah: 168",
    arab: "يَا أَيُّهَا النَّاسُ كُلُوا مِمَّا فِي الْأَرْضِ حَلَالًا طَيِّبًا",
    terjemah: "Wahai manusia! Makanlah dari (makanan) yang halal dan baik yang terdapat di bumi...",
    tafsir: (
      <>
        <p>
          Allah memerintahkan manusia untuk mengonsumsi makanan yang halal dan baik. <b>Ibnu Katsir</b> menafsirkan bahwa menjaga asupan makanan adalah bagian dari menjaga kesehatan dan keimanan.
        </p>
        <p>
          <b>Imam Al-Qurtubi</b> menegaskan, makanan yang halal dan baik akan membawa keberkahan dan kesehatan bagi tubuh.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{margin: "8px 0 0 18px", padding: 0}}>
            <li>
              <a
                href="https://tafsirweb.com/172-surat-al-baqarah-ayat-168.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Al-Baqarah: 168
              </a>
            </li>
            <li>
              <a
                href="https://alqurtubi.id/surat-al-baqarah-ayat-168/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Al-Qurtubi, QS. Al-Baqarah: 168
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 3,
    ayat: "QS. Al-Ma’idah: 6",
    arab: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ",
    terjemah: "Wahai orang-orang yang beriman! Apabila kamu hendak melaksanakan salat, basuhlah wajahmu dan tanganmu...",
    tafsir: (
      <>
        <p>
          Ayat ini menegaskan pentingnya menjaga kebersihan melalui wudhu sebelum salat. <b>Ibnu Katsir</b> menafsirkan bahwa kebersihan adalah bagian dari iman dan syarat sahnya ibadah.
        </p>
        <p>
          <b>Imam Al-Qurtubi</b> menambahkan, menjaga kebersihan tubuh dan lingkungan adalah perintah langsung dari Allah.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{margin: "8px 0 0 18px", padding: 0}}>
            <li>
              <a
                href="https://tafsirweb.com/3247-surat-al-maidah-ayat-6.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Al-Ma’idah: 6
              </a>
            </li>
            <li>
              <a
                href="https://alqurtubi.id/surat-al-maidah-ayat-6/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Al-Qurtubi, QS. Al-Ma’idah: 6
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  }
];

export default function Kesehatan() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="article-detail" style={{maxWidth: 700, margin: "0 auto", padding: "2rem 1rem"}}>
      <h1 style={{color: "#43cea2", marginBottom: 12}}>Kesehatan dalam Al-Qur’an</h1>
      <p style={{fontSize: "1.1rem", color: "#e0f7fa"}}>
        Kesehatan adalah nikmat besar yang harus dijaga. Al-Qur’an mengajarkan pentingnya menjaga kebersihan, makanan halal dan baik, serta hidup seimbang agar tubuh dan jiwa tetap sehat.
      </p>

      <section style={{margin: "2.5rem 0"}}>
        <h2 style={{color: "#56ccf2"}}>Kumpulan Ayat Terkait Kesehatan</h2>
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
        <h2 style={{color: "#56ccf2"}}>Contoh Menjaga Kesehatan dalam Kehidupan Sehari-hari</h2>
        <ul style={{color: "#e0f7fa", fontSize: "1.05rem", lineHeight: 1.8, marginLeft: 24}}>
          <li>Makan makanan halal dan bergizi.</li>
          <li>Tidak berlebihan dalam makan dan minum.</li>
          <li>Menjaga kebersihan diri dan lingkungan.</li>
          <li>Berolahraga secara teratur.</li>
          <li>Istirahat yang cukup dan mengelola stres.</li>
        </ul>
      </section>
    </div>
  );
}