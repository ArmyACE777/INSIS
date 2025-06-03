import React, { useState } from "react";

const ayatList = [
  {
    id: 1,
    ayat: "QS. Al-A'raf: 56",
    arab: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا",
    terjemah: "Dan janganlah kamu berbuat kerusakan di muka bumi setelah (Allah) memperbaikinya...",
    tafsir: (
      <>
        <p>
          Ayat ini menegaskan larangan keras untuk membuat kerusakan di bumi, baik berupa pencemaran, perusakan alam, maupun tindakan yang merusak tatanan kehidupan. <b>Ibnu Katsir</b> menafsirkan bahwa kerusakan di bumi mencakup segala bentuk maksiat, perusakan lingkungan, dan tindakan yang mengganggu keseimbangan alam.
        </p>
        <p>
          <b>Imam Al-Qurtubi</b> menambahkan bahwa menjaga bumi adalah bagian dari ketaatan kepada Allah, dan setiap kerusakan yang disengaja merupakan dosa besar.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{margin: "8px 0 0 18px", padding: 0}}>
            <li>
              <a
                href="https://tafsirweb.com/1012-surat-al-araf-ayat-56.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Al-A'raf: 56
              </a>
            </li>
            <li>
              <a
                href="https://alqurtubi.id/surat-al-araf-ayat-56/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Al-Qurtubi, QS. Al-A'raf: 56
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 2,
    ayat: "QS. Al-Baqarah: 205",
    arab: "وَإِذَا تَوَلَّىٰ سَعَىٰ فِي الْأَرْضِ لِيُفْسِدَ فِيهَا وَيُهْلِكَ الْحَرْثَ وَالنَّسْلَ",
    terjemah: "Dan apabila ia berpaling (dari kamu), ia berjalan di bumi untuk mengadakan kerusakan padanya dan merusak tanaman-tanaman dan binatang ternak...",
    tafsir: (
      <>
        <p>
          Ayat ini menggambarkan perilaku orang yang suka membuat kerusakan di bumi, seperti merusak tanaman, hewan, dan lingkungan. <b>Ibnu Katsir</b> menafsirkan bahwa tindakan merusak alam adalah ciri orang munafik dan sangat dibenci Allah.
        </p>
        <p>
          <b>Imam Ath-Thabari</b> menegaskan bahwa menjaga kelestarian alam adalah bagian dari iman dan tanggung jawab manusia sebagai khalifah di bumi.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{margin: "8px 0 0 18px", padding: 0}}>
            <li>
              <a
                href="https://tafsirweb.com/282-surat-al-baqarah-ayat-205.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Al-Baqarah: 205
              </a>
            </li>
            <li>
              <a
                href="https://tafsirweb.com/282-surat-al-baqarah-ayat-205.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ath-Thabari, QS. Al-Baqarah: 205
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 3,
    ayat: "QS. Ar-Rum: 41",
    arab: "ظَهَرَ الْفَسَادُ فِي الْبَرِّ وَالْبَحْرِ بِمَا كَسَبَتْ أَيْدِي النَّاسِ",
    terjemah: "Telah tampak kerusakan di darat dan di laut disebabkan karena perbuatan tangan manusia...",
    tafsir: (
      <>
        <p>
          Ayat ini menegaskan bahwa kerusakan lingkungan, baik di darat maupun di laut, adalah akibat ulah manusia sendiri. <b>Ibnu Katsir</b> menafsirkan bahwa dosa, maksiat, dan perusakan alam menyebabkan bencana dan musibah.
        </p>
        <p>
          <b>Imam Al-Qurtubi</b> menambahkan bahwa manusia wajib menjaga bumi dan tidak boleh melakukan eksploitasi berlebihan yang merusak ekosistem.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{margin: "8px 0 0 18px", padding: 0}}>
            <li>
              <a
                href="https://tafsirweb.com/15841-surat-ar-rum-ayat-41.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Ar-Rum: 41
              </a>
            </li>
            <li>
              <a
                href="https://alqurtubi.id/surat-ar-rum-ayat-41/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Al-Qurtubi, QS. Ar-Rum: 41
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 4,
    ayat: "QS. Al-An'am: 141",
    arab: "وَلَا تُسْرِفُوا إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ",
    terjemah: "Dan janganlah kamu berlebih-lebihan. Sesungguhnya Allah tidak menyukai orang-orang yang berlebih-lebihan.",
    tafsir: (
      <>
        <p>
          Ayat ini menegaskan larangan berlebihan dalam menggunakan sumber daya alam. <b>Ibnu Katsir</b> menafsirkan bahwa israf (berlebihan) dalam makanan, minuman, dan pemanfaatan alam adalah perbuatan tercela.
        </p>
        <p>
          <b>Imam Al-Qurtubi</b> menekankan pentingnya hidup hemat, tidak boros, dan menjaga keseimbangan dalam memanfaatkan alam.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{margin: "8px 0 0 18px", padding: 0}}>
            <li>
              <a
                href="https://tafsirweb.com/4272-surat-al-anam-ayat-141.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Al-An'am: 141
              </a>
            </li>
            <li>
              <a
                href="https://alqurtubi.id/surat-al-anam-ayat-141/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Al-Qurtubi, QS. Al-An'am: 141
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  }
];

export default function Lingkungan() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="article-detail" style={{maxWidth: 700, margin: "0 auto", padding: "2rem 1rem"}}>
      <h1 style={{color: "#43cea2", marginBottom: 12}}>Menjaga Lingkungan dalam Al-Qur’an</h1>
      <p style={{fontSize: "1.1rem", color: "#e0f7fa"}}>
        Menjaga lingkungan adalah bagian dari ajaran Islam. Al-Qur’an menegaskan pentingnya merawat bumi, tidak berbuat kerusakan, dan memanfaatkan sumber daya secara bijak. Setiap Muslim bertanggung jawab menjaga kelestarian alam sebagai bentuk syukur dan amanah dari Allah.
      </p>

      <section style={{margin: "2.5rem 0"}}>
        <h2 style={{color: "#56ccf2"}}>Kumpulan Ayat Terkait Menjaga Lingkungan</h2>
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
        <h2 style={{color: "#56ccf2"}}>Contoh Menjaga Lingkungan dalam Kehidupan Sehari-hari</h2>
        <ul style={{color: "#e0f7fa", fontSize: "1.05rem", lineHeight: 1.8, marginLeft: 24}}>
          <li>Tidak membuang sampah sembarangan dan menjaga kebersihan lingkungan.</li>
          <li>Menghemat air, listrik, dan sumber daya alam lainnya.</li>
          <li>Menanam pohon dan merawat tanaman di sekitar rumah.</li>
          <li>Tidak merusak fasilitas umum atau alam (hutan, sungai, laut).</li>
          <li>Mengurangi penggunaan plastik sekali pakai dan mendaur ulang sampah.</li>
          <li>Mengajak keluarga dan masyarakat untuk peduli lingkungan.</li>
        </ul>
      </section>
    </div>
  );
}