import React, { useState } from "react";

const ayatList = [
  {
    id: 1,
    ayat: "QS. Adz-Dzariyat: 22",
    arab: "وَفِي السَّمَاءِ رِزْقُكُمْ وَمَا تُوعَدُونَ",
    terjemah: "Dan di langit terdapat rezekimu dan apa yang dijanjikan kepadamu.",
    tafsir: (
      <>
        <p>
          Ayat ini menegaskan bahwa rezeki datang dari Allah dan telah ditetapkan dari langit. <b>Ibnu Katsir</b> menafsirkan bahwa manusia harus yakin bahwa rezeki tidak datang semata dari usaha, tapi karena kehendak Allah.
        </p>
        <p>
          <b>Imam Al-Qurtubi</b> menyatakan, ayat ini mengajarkan agar tidak bergantung sepenuhnya pada dunia, karena Allah yang mengatur segala rezeki.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{margin: "8px 0 0 18px", padding: 0}}>
            <li>
              <a
                href="https://tafsirweb.com/13112-surat-adz-dzariyat-ayat-22.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Adz-Dzariyat: 22
              </a>
            </li>
            <li>
              <a
                href="https://alqurtubi.id/surat-adz-dzariyat-ayat-22/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Al-Qurtubi, QS. Adz-Dzariyat: 22
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 2,
    ayat: "QS. Al-Baqarah: 261",
    arab: "مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ...",
    terjemah: "Perumpamaan orang yang menafkahkan hartanya di jalan Allah adalah seperti sebutir biji yang menumbuhkan tujuh bulir...",
    tafsir: (
      <>
        <p>
          Ayat ini menggambarkan betapa besar balasan dari sedekah. <b>Ibnu Katsir</b> menafsirkan bahwa infak di jalan Allah akan diganjar berkali lipat, seperti tujuh ratus kali lipat.
        </p>
        <p>
          <b>Imam Ath-Thabari</b> menambahkan bahwa infak harus disertai dengan keikhlasan agar pahalanya diterima dan membawa berkah ekonomi bagi umat.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{margin: "8px 0 0 18px", padding: 0}}>
            <li>
              <a
                href="https://tafsirweb.com/259-surat-al-baqarah-ayat-261.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Al-Baqarah: 261
              </a>
            </li>
            <li>
              <a
                href="https://tafsirweb.com/259-surat-al-baqarah-ayat-261.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ath-Thabari, QS. Al-Baqarah: 261
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 3,
    ayat: "QS. Al-Jumu’ah: 10",
    arab: "فَإِذَا قُضِيَتِ الصَّلَاةُ فَانتَشِرُوا فِي الْأَرْضِ وَابْتَغُوا مِن فَضْلِ اللَّهِ...",
    terjemah: "Apabila salat telah dilaksanakan, maka bertebaranlah kamu di muka bumi; dan carilah karunia Allah...",
    tafsir: (
      <>
        <p>
          Ayat ini menyeimbangkan antara ibadah dan usaha ekonomi. <b>Ibnu Katsir</b> menjelaskan bahwa setelah salat, umat Islam diperintahkan bekerja dan mencari nafkah.
        </p>
        <p>
          <b>Imam Al-Qurtubi</b> menekankan pentingnya kerja halal sebagai bentuk ibadah dan bagian dari mencari rezeki yang diberkahi.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{margin: "8px 0 0 18px", padding: 0}}>
            <li>
              <a
                href="https://tafsirweb.com/14378-surat-al-jumuah-ayat-10.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Al-Jumu’ah: 10
              </a>
            </li>
            <li>
              <a
                href="https://alqurtubi.id/surat-al-jumuah-ayat-10/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Al-Qurtubi, QS. Al-Jumu’ah: 10
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  }
];

export default function EkonomiRezeki() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="article-detail" style={{maxWidth: 700, margin: "0 auto", padding: "2rem 1rem"}}>
      <h1 style={{color: "#43cea2", marginBottom: 12}}>Ekonomi dan Rezeki dalam Al-Qur’an</h1>
      <p style={{fontSize: "1.1rem", color: "#e0f7fa"}}>
        Al-Qur’an memberikan panduan komprehensif terkait rezeki dan kegiatan ekonomi. Rezeki adalah anugerah dari Allah, namun usaha dan kerja keras juga diperintahkan sebagai bagian dari ibadah.
      </p>

      <section style={{margin: "2.5rem 0"}}>
        <h2 style={{color: "#56ccf2"}}>Kumpulan Ayat Terkait Ekonomi dan Rezeki</h2>
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
        <h2 style={{color: "#56ccf2"}}>Contoh Mengelola Rezeki dalam Kehidupan Sehari-hari</h2>
        <ul style={{color: "#e0f7fa", fontSize: "1.05rem", lineHeight: 1.8, marginLeft: 24}}>
          <li>Bekerja dengan jujur dan profesional.</li>
          <li>Berinfak dan bersedekah secara rutin.</li>
          <li>Mencari nafkah dari sumber halal.</li>
          <li>Menabung dan mengelola keuangan dengan bijak.</li>
          <li>Menghindari riba dan transaksi yang haram.</li>
        </ul>
      </section>
    </div>
  );
}
