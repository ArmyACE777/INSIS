import React, { useState } from "react";

const ayatList = [
  {
    id: 1,
    ayat: "QS. Al-Qalam: 4",
    arab: "وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ",
    terjemah: "Dan sungguh, engkau (Muhammad) benar-benar berbudi pekerti yang agung.",
    tafsir: (
      <>
        <p>
          Ayat ini merupakan pujian langsung dari Allah SWT kepada Nabi Muhammad ﷺ atas kemuliaan akhlaknya. Para ulama tafsir seperti <b>Ibnu Katsir</b> menjelaskan bahwa “khuluqin ‘azhim” (akhlak yang agung) mencakup seluruh sifat terpuji yang ada pada diri Rasulullah ﷺ, seperti kejujuran, kesabaran, kasih sayang, pemaaf, rendah hati, dan keteguhan memegang prinsip kebenaran. 
        </p>
        <p>
          <b>Imam Al-Qurtubi</b> dalam tafsirnya menyebutkan bahwa akhlak Nabi ﷺ adalah Al-Qur’an itu sendiri, sebagaimana diriwayatkan dari Aisyah radhiyallahu ‘anha ketika ditanya tentang akhlak Rasulullah ﷺ, beliau menjawab: “Akhlak beliau adalah Al-Qur’an.” (HR. Muslim no. 746).
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{margin: "8px 0 0 18px", padding: 0}}>
            <li>
              <a
                href="https://tafsirweb.com/8707-surat-al-qalam-ayat-4.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Al-Qalam: 4
              </a>
            </li>
            <li>
              <a
                href="https://alqurtubi.id/surat-al-qalam-ayat-4/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Al-Qurtubi, QS. Al-Qalam: 4
              </a>
            </li>
            <li>
              <a
                href="https://sunnah.com/muslim:746"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                HR. Muslim no. 746
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  },
  {
    id: 2,
    ayat: "QS. Al-Ahzab: 21",
    arab: "لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ",
    terjemah: "Sungguh, telah ada pada (diri) Rasulullah itu suri teladan yang baik bagimu...",
    tafsir: (
      <>
        <p>
          Ayat ini menegaskan bahwa Rasulullah ﷺ adalah teladan terbaik (uswah hasanah) dalam seluruh aspek kehidupan: ibadah, muamalah, akhlak, dan perjuangan. <b>Ibnu Katsir</b> menjelaskan bahwa siapa pun yang menginginkan keselamatan dunia dan akhirat hendaknya meneladani Rasulullah ﷺ dalam ucapan, perbuatan, dan sikapnya.
        </p>
        <p>
          <b>Imam Ath-Thabari</b> menafsirkan bahwa “uswah hasanah” berarti mengikuti Rasulullah ﷺ dalam kesabaran, keteguhan, dan ketaatan kepada Allah, terutama dalam menghadapi ujian dan tantangan.
        </p>
        <p>
          <b>Referensi:</b>
          <ul style={{margin: "8px 0 0 18px", padding: 0}}>
            <li>
              <a
                href="https://tafsirweb.com/8707-surat-al-qalam-ayat-4.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ibnu Katsir, QS. Al-Ahzab: 21
              </a>
            </li>
            <li>
              <a
                href="https://tafsirweb.com/14247-surat-al-ahzab-ayat-21.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#43cea2", textDecoration: "underline" }}
              >
                Tafsir Ath-Thabari, QS. Al-Ahzab: 21
              </a>
            </li>
          </ul>
        </p>
      </>
    )
  }
];

export default function AkhlakMulia() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="article-detail" style={{maxWidth: 700, margin: "0 auto", padding: "2rem 1rem"}}>
      <h1 style={{color: "#43cea2", marginBottom: 12}}>Akhlak Mulia dalam Al-Qur’an</h1>
      <p style={{fontSize: "1.1rem", color: "#e0f7fa"}}>
        Akhlak mulia adalah mahkota seorang Muslim. Ia bukan sekadar hiasan, melainkan fondasi yang menegakkan kepribadian dan peradaban. Al-Qur’an menempatkan akhlak mulia sebagai inti ajaran, menuntun manusia menjadi pribadi yang dicintai Allah dan sesama.
      </p>

      <section style={{margin: "2.5rem 0"}}>
        <h2 style={{color: "#56ccf2"}}>Kumpulan Ayat Terkait Akhlak Mulia</h2>
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
        <h2 style={{color: "#56ccf2"}}>Contoh Akhlak Mulia dalam Kehidupan Sehari-hari</h2>
        <ul style={{color: "#e0f7fa", fontSize: "1.05rem", lineHeight: 1.8, marginLeft: 24}}>
          <li>Jujur dalam perkataan dan perbuatan, meski dalam hal kecil.</li>
          <li>Sabar menghadapi ujian dan tidak mudah marah.</li>
          <li>Pemaaf, tidak membalas keburukan dengan keburukan.</li>
          <li>Rendah hati, tidak sombong atas kelebihan yang dimiliki.</li>
          <li>Menepati janji dan amanah.</li>
          <li>Berbuat baik kepada tetangga, teman, dan semua makhluk.</li>
        </ul>
      </section>
    </div>
  );
}