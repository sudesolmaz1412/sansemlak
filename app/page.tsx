"use client";

import { useState } from "react";

const listings = [
  {
    type: "SATILIK",
    title: "Başakşehir'de Modern 3+1 Daire",
    location: "Başakşehir, İstanbul",
    price: "8.750.000 ₺",
    details: "3+1 • 145 m²",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    type: "SATILIK",
    title: "Bahçeşehir'de Lüks Villa",
    location: "Bahçeşehir, İstanbul",
    price: "18.500.000 ₺",
    details: "5+1 • 320 m²",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    type: "KİRALIK",
    title: "Esenyurt Merkezi 2+1 Daire",
    location: "Esenyurt, İstanbul",
    price: "28.000 ₺ / Ay",
    details: "2+1 • 95 m²",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Satılık");

  return (
    <main>
      <nav className="navbar">
        <div className="logo">
          ŞANS <span>GAYRİMENKUL</span>
        </div>

        <div className="navLinks">
          <a href="#anasayfa">Ana Sayfa</a>
          <a href="#ilanlar">İlanlar</a>
          <a href="#hakkimizda">Hakkımızda</a>
          <a href="#hizmetler">Hizmetlerimiz</a>
          <a href="#iletisim">İletişim</a>
        </div>

        <a href="#iletisim" className="navButton">
          BİZE ULAŞIN →
        </a>
      </nav>

      <section className="hero" id="anasayfa">
        <div className="heroOverlay" />

        <div className="heroContent">
          <div className="eyebrow">İSTANBUL • GÜVENİLİR GAYRİMENKUL DANIŞMANLIĞI</div>

          <h1>
            Hayalinizdeki
            <br />
            <em>yaşam alanına</em>
            <br />
            birlikte ulaşalım.
          </h1>

          <p>
            Satılık ve kiralık gayrimenkul seçeneklerinde profesyonel
            danışmanlık ve güvenilir hizmet.
          </p>

          <div className="searchBox">
            <div className="searchTabs">
              {["Satılık", "Kiralık"].map((tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="searchFields">
              <div>
                <label>GAYRİMENKUL TÜRÜ</label>
                <strong>Konut</strong>
              </div>

              <div>
                <label>LOKASYON</label>
                <strong>İstanbul</strong>
              </div>

              <button>İLANLARI GÖR →</button>
            </div>
          </div>
        </div>

        <div className="heroBottom">
          <span>ŞANS GAYRİMENKUL</span>
          <span>GÜVEN • DENEYİM • PROFESYONELLİK</span>
        </div>
      </section>

      <section className="listingsSection" id="ilanlar">
        <div className="sectionHeader">
          <div>
            <span className="sectionTag">01 / PORTFÖY</span>
            <h2>
              Öne çıkan
              <br />
              <em>gayrimenkuller.</em>
            </h2>
          </div>

          <a href="#iletisim">TÜM İLANLARI İNCELE →</a>
        </div>

        <div className="listingGrid">
          {listings.map((listing) => (
            <article className="listingCard" key={listing.title}>
              <div className="listingImage">
                <img src={listing.image} alt={listing.title} />
                <span>{listing.type}</span>
              </div>

              <div className="listingInfo">
                <p>{listing.location}</p>
                <h3>{listing.title}</h3>
                <div className="listingMeta">
                  <span>{listing.details}</span>
                  <strong>{listing.price}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="aboutSection" id="hakkimizda">
        <div className="aboutNumber">02</div>

        <div className="aboutContent">
          <span className="sectionTag">HAKKIMIZDA</span>

          <h2>
            Gayrimenkulde
            <br />
            <em>güvenin adresi.</em>
          </h2>

          <p>
            Şans Gayrimenkul olarak müşterilerimizin ihtiyaçlarını doğru
            analiz ediyor, satın alma, satış ve kiralama süreçlerinde
            profesyonel danışmanlık sunuyoruz.
          </p>

          <p>
            Bölge bilgimiz, güçlü portföyümüz ve şeffaf hizmet anlayışımızla
            gayrimenkul yolculuğunuzu kolaylaştırıyoruz.
          </p>

          <a href="#iletisim">BİZİ TANIYIN →</a>
        </div>

        <div className="stats">
          <div>
            <strong>100+</strong>
            <span>MUTLU MÜŞTERİ</span>
          </div>
          <div>
            <strong>50+</strong>
            <span>AKTİF PORTFÖY</span>
          </div>
          <div>
            <strong>10+</strong>
            <span>YILLIK DENEYİM</span>
          </div>
        </div>
      </section>

      <section className="servicesSection" id="hizmetler">
        <span className="sectionTag">03 / HİZMETLERİMİZ</span>

        <h2>
          Sadece bir ev değil,
          <br />
          <em>doğru yatırımı buluyoruz.</em>
        </h2>

        <div className="servicesGrid">
          <div className="service">
            <span>01</span>
            <h3>Gayrimenkul Satışı</h3>
            <p>Gayrimenkulünüzün doğru değerle ve doğru alıcıyla buluşmasını sağlıyoruz.</p>
          </div>

          <div className="service">
            <span>02</span>
            <h3>Kiralama Danışmanlığı</h3>
            <p>Kiracı ve mülk sahibi için güvenli ve profesyonel süreç yönetimi sunuyoruz.</p>
          </div>

          <div className="service">
            <span>03</span>
            <h3>Yatırım Danışmanlığı</h3>
            <p>Gayrimenkul yatırımlarınız için bölgesel analiz ve profesyonel danışmanlık.</p>
          </div>
        </div>
      </section>

      <section className="contactSection" id="iletisim">
        <span className="sectionTag">04 / İLETİŞİM</span>

        <h2>
          Yeni yaşam alanınız
          <br />
          <em>bir mesaj uzağınızda.</em>
        </h2>

        <p>
          Gayrimenkul ihtiyaçlarınız için bizimle iletişime geçin.
          Size en uygun seçenekleri birlikte değerlendirelim.
        </p>

        <div className="contactButtons">
          <a href="tel:+905324364573">HEMEN ARAYIN</a>
          <a href="https://wa.me/905324364573">WHATSAPP →</a>
        </div>
      </section>

      <footer>
        <div className="logo">
          ŞANS <span>GAYRİMENKUL</span>
        </div>

        <span>© 2026 ŞANS GAYRİMENKUL</span>

        <span>GÜVEN • DENEYİM • PROFESYONELLİK</span>
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #f5f3ee;
          color: #161616;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .navbar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 10;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6%;
          color: white;
          border-bottom: 1px solid rgba(255,255,255,.18);
        }

        .logo {
          font-size: 21px;
          font-weight: 800;
          letter-spacing: .06em;
        }

        .logo span {
          display: block;
          font-size: 9px;
          letter-spacing: .28em;
          margin-top: 4px;
          color: #c7a35a;
        }

        .navLinks {
          display: flex;
          gap: 28px;
          font-size: 13px;
        }

        .navLinks a {
          opacity: .85;
          transition: .2s;
        }

        .navLinks a:hover {
          opacity: 1;
          color: #d1af65;
        }

        .navButton {
          border: 1px solid #c7a35a;
          padding: 13px 20px;
          font-size: 11px;
          letter-spacing: .08em;
        }

        .hero {
          min-height: 100vh;
          position: relative;
          color: white;
          display: flex;
          align-items: center;
          padding: 130px 6% 80px;
          background:
            url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90")
            center/cover;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(7,12,16,.9), rgba(7,12,16,.48), rgba(7,12,16,.25));
        }

        .heroContent {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }

        .eyebrow,
        .sectionTag {
          color: #c7a35a;
          font-size: 11px;
          letter-spacing: .16em;
          font-weight: bold;
        }

        .hero h1 {
          font-size: clamp(54px, 7vw, 104px);
          line-height: .94;
          letter-spacing: -.055em;
          margin: 25px 0;
          font-weight: 700;
        }

        h1 em,
        h2 em {
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .heroContent > p {
          max-width: 560px;
          font-size: 18px;
          line-height: 1.7;
          color: rgba(255,255,255,.78);
        }

        .searchBox {
          background: white;
          color: #151515;
          margin-top: 40px;
          max-width: 720px;
        }

        .searchTabs {
          display: flex;
          border-bottom: 1px solid #ddd;
        }

        .searchTabs button {
          border: 0;
          background: transparent;
          padding: 18px 30px;
          font-size: 14px;
          cursor: pointer;
        }

        .searchTabs button.active {
          background: #151515;
          color: white;
        }

        .searchFields {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          padding: 22px;
          gap: 25px;
          align-items: center;
        }

        .searchFields label {
          display: block;
          font-size: 9px;
          letter-spacing: .12em;
          color: #777;
          margin-bottom: 8px;
        }

        .searchFields button {
          border: 0;
          background: #c7a35a;
          padding: 17px 22px;
          font-weight: bold;
          cursor: pointer;
        }

        .heroBottom {
          position: absolute;
          bottom: 30px;
          left: 6%;
          right: 6%;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          font-size: 9px;
          letter-spacing: .18em;
          color: rgba(255,255,255,.6);
        }

        .listingsSection,
        .servicesSection {
          padding: 130px 6%;
        }

        .sectionHeader {
          display: flex;
          justify-content: space-between;
          align-items: end;
          margin-bottom: 60px;
        }

        h2 {
          font-size: clamp(46px, 5vw, 78px);
          line-height: .95;
          letter-spacing: -.05em;
          margin: 22px 0 0;
        }

        .sectionHeader > a {
          font-size: 11px;
          border-bottom: 1px solid #222;
          padding-bottom: 8px;
        }

        .listingGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .listingCard {
          background: white;
          transition: .3s;
        }

        .listingCard:hover {
          transform: translateY(-8px);
        }

        .listingImage {
          height: 310px;
          position: relative;
          overflow: hidden;
        }

        .listingImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: .5s;
        }

        .listingCard:hover img {
          transform: scale(1.06);
        }

        .listingImage span {
          position: absolute;
          top: 16px;
          left: 16px;
          background: #151515;
          color: white;
          padding: 8px 11px;
          font-size: 9px;
          letter-spacing: .12em;
        }

        .listingInfo {
          padding: 25px;
        }

        .listingInfo p {
          font-size: 12px;
          color: #777;
          margin: 0 0 10px;
        }

        .listingInfo h3 {
          font-size: 22px;
          margin: 0 0 22px;
          line-height: 1.25;
        }

        .listingMeta {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #eee;
          padding-top: 18px;
          font-size: 12px;
        }

        .listingMeta strong {
          color: #9a7838;
        }

        .aboutSection {
          background: #111;
          color: #f5f3ee;
          padding: 140px 10%;
          display: grid;
          grid-template-columns: .5fr 1.3fr 1fr;
          gap: 70px;
        }

        .aboutNumber {
          font-size: 18px;
          color: #c7a35a;
        }

        .aboutContent p {
          line-height: 1.8;
          color: rgba(255,255,255,.65);
          max-width: 550px;
        }

        .aboutContent a {
          display: inline-block;
          margin-top: 20px;
          border-bottom: 1px solid #c7a35a;
          padding-bottom: 7px;
          font-size: 11px;
          letter-spacing: .12em;
          color: #c7a35a;
        }

        .stats {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 35px;
        }

        .stats div {
          border-bottom: 1px solid rgba(255,255,255,.15);
          padding-bottom: 25px;
        }

        .stats strong {
          display: block;
          font-size: 44px;
          color: #c7a35a;
        }

        .stats span {
          font-size: 9px;
          letter-spacing: .16em;
          color: rgba(255,255,255,.55);
        }

        .servicesSection {
          background: #ece9e1;
        }

        .servicesGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 70px;
          border-top: 1px solid #bbb;
        }

        .service {
          padding: 35px;
          border-right: 1px solid #bbb;
          min-height: 280px;
        }

        .service:last-child {
          border-right: 0;
        }

        .service span {
          color: #a48445;
          font-size: 12px;
        }

        .service h3 {
          font-size: 28px;
          margin: 55px 0 15px;
        }

        .service p {
          color: #666;
          line-height: 1.7;
          font-size: 14px;
        }

        .contactSection {
          background: #c7a35a;
          padding: 140px 10%;
        }

        .contactSection .sectionTag {
          color: #151515;
        }

        .contactSection p {
          max-width: 600px;
          font-size: 18px;
          line-height: 1.7;
          margin: 30px 0;
        }

        .contactButtons {
          display: flex;
          gap: 15px;
        }

        .contactButtons a {
          background: #151515;
          color: white;
          padding: 17px 25px;
          font-size: 11px;
          letter-spacing: .1em;
        }

        footer {
          background: #111;
          color: white;
          padding: 45px 6%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 9px;
          letter-spacing: .12em;
        }

        @media (max-width: 900px) {
          .navLinks {
            display: none;
          }

          .listingGrid,
          .servicesGrid {
            grid-template-columns: 1fr;
          }

          .aboutSection {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .service {
            border-right: 0;
            border-bottom: 1px solid #bbb;
          }
        }

        @media (max-width: 650px) {
          .navbar {
            padding: 0 20px;
          }

          .navButton {
            padding: 10px;
            font-size: 9px;
          }

          .hero {
            padding: 120px 20px 80px;
          }

          .searchFields {
            grid-template-columns: 1fr;
          }

          .heroBottom {
            display: none;
          }

          .listingsSection,
          .servicesSection {
            padding: 90px 20px;
          }

          .sectionHeader {
            display: block;
          }

          .sectionHeader > a {
            display: inline-block;
            margin-top: 30px;
          }

          .aboutSection,
          .contactSection {
            padding: 90px 25px;
          }

          footer {
            flex-direction: column;
            gap: 25px;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}
