"use client";

import { useEffect, useRef, useState } from "react";

const listings = [
  {
    type: "SATILIK",
    title: "Şans Gayrimenkul'den Şahane Satılık 2+1 Masrafsız Arakat Daire",
    location: "İstanbul",
    price: "2.620.000 TL",
    details: "2+1",
    image: "/ilanlar/ilan-9.png",
    link: "https://www.sahibinden.com/ilan/emlak-konut-satilik-sans-gayrimenkul-den-sahane-satilik-2-plus1-masrafsiz-arakat-daire-1337233466/detay",  },
  {
    type: "SATILIK",
    title: "Mehterçeşme'de 2+1 Yüksek Giriş Fuzulev & Eminevim'e Uygun",
    location: "Mehterçeşme, İstanbul",
    price: "2.450.000 TL",
    details: "2+1",
    image: "/ilanlar/ilan-8.png",
    link: "https://www.sahibinden.com/ilan/emlak-konut-satilik-mehtercesme-de-2-plus1-yuksek-giris-fuzulev-eminevime-uygun-1334315392/detay",  },
  {
    type: "SATILIK",
    title: "Merkezi Konumda Kelepir! Eminevim & Fuzulev'e Uygun 2+1 Yüksek Giriş",
    location: "İstanbul",
    price: "6.500.000 TL",
    details: "2+1",
    image: "/ilanlar/ilan-5.png",
    link: "https://www.sahibinden.com/ilan/emlak-konut-satilik-merkezi-konumda-kelepir-eminevim-fuzuleve-uygun-2-plus1-yuksek-giris-1334303008/detay",
  },
  {
    type: "SATILIK",
    title: "Talatpaşa'da Sıfır Binada Eminevim vb. Kuruluşlarına Uygun 2+1",
    location: "Talatpaşa, İstanbul",
    price: "3.890.000 TL",
    details: "2+1",
    image: "/ilanlar/ilan-6.png",
    link: "https://www.sahibinden.com/ilan/emlak-konut-satilik-talatpasa-da-sifir-binada-eminevim-vb-kuruluslarina-uygun-2-plus1-1333152474/detay",
  },
];

export default function Home() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [statsStarted, setStatsStarted] = useState(false);
  const [stats, setStats] = useState([0, 0, 0]);

  useEffect(() => {
    const element = statsRef.current;
    if (!element || statsStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setStatsStarted(true);

        const targets = [100, 50, 10];
        const duration = 1800;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1
          );

          const easeOut = 1 - Math.pow(1 - progress, 3);

          setStats(
            targets.map((target) =>
              Math.floor(target * easeOut)
            )
          );

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [statsStarted]);


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

          <div className="heroActions">
            <a href="#ilanlar" className="heroPrimary">
              GÜNCEL İLANLARI İNCELE →
            </a>

            <a
              href="https://wa.me/905324364573"
              target="_blank"
              rel="noopener noreferrer"
              className="heroSecondary"
            >
              BİZE ULAŞIN
            </a>
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
              <a
                href={listing.link}
                target="_blank"
                rel="noopener noreferrer"
                className="listingLink"
              >
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

                  <span className="listingButton">
                    SAHİBİNDEN'DE GÖR →
                  </span>
                </div>
              </a>
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

        <div className="stats" ref={statsRef}>
          <div>
            <strong>{stats[0]}+</strong>
            <span>MUTLU MÜŞTERİ</span>
          </div>
          <div>
            <strong>{stats[1]}+</strong>
            <span>AKTİF PORTFÖY</span>
          </div>
          <div>
            <strong>{stats[2]}+</strong>
            <span>YILLIK DENEYİM</span>
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


      <section className="whyUs">
        <div className="container whyGrid">
          <div className="whyContent">
            <div className="sectionLabel">NEDEN ŞANS GAYRİMENKUL?</div>

            <h2>
              Güvenle başlayın,<br />
              <em>doğru sonuca ulaşın.</em>
            </h2>

            <p>
              Gayrimenkul sürecinin her aşamasında doğru bilgi, profesyonel
              yaklaşım ve güvenilir danışmanlık anlayışıyla yanınızdayız.
            </p>

            <a
              href="https://wa.me/905324364573"
              target="_blank"
              rel="noopener noreferrer"
              className="whyButton"
            >
              BİZE ULAŞIN →
            </a>
          </div>

          <div className="whyList">
            <div className="whyItem">
              <span>01</span>
              <div>
                <h3>Bölge Uzmanlığı</h3>
                <p>Gayrimenkul piyasasını ve bölgesel fırsatları yakından takip ediyoruz.</p>
              </div>
            </div>

            <div className="whyItem">
              <span>02</span>
              <div>
                <h3>Doğru Fiyat Analizi</h3>
                <p>Gerçek piyasa verilerine göre doğru değerlendirme yapıyoruz.</p>
              </div>
            </div>

            <div className="whyItem">
              <span>03</span>
              <div>
                <h3>Güvenilir Danışmanlık</h3>
                <p>Şeffaf ve çözüm odaklı bir hizmet anlayışı sunuyoruz.</p>
              </div>
            </div>

            <div className="whyItem">
              <span>04</span>
              <div>
                <h3>Profesyonel Süreç Yönetimi</h3>
                <p>İlk görüşmeden sonuca kadar tüm süreci sizin için yönetiyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/905324364573"
        target="_blank"
        rel="noopener noreferrer"
        className="floatingWhatsapp"
        aria-label="WhatsApp ile iletişime geç"
      >
        <svg
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.52 1.74 6.48L3 29l6.68-1.71A12.9 12.9 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm0 23.62c-2.06 0-4.07-.55-5.83-1.59l-.42-.25-3.96 1.01 1.06-3.86-.28-.45A10.55 10.55 0 1 1 16 26.62Zm5.79-7.89c-.32-.16-1.9-.94-2.19-1.05-.29-.11-.5-.16-.71.16-.21.32-.82 1.05-1 1.26-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.07-1.1 2.61 0 1.54 1.12 3.03 1.27 3.24.16.21 2.2 3.36 5.32 4.71.74.32 1.32.51 1.77.65.74.24 1.42.21 1.95.13.6-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </a>

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


        /* ===== HERO YENİ BUTONLAR ===== */
        .heroActions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 38px;
        }

        .heroActions a {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 58px;
          padding: 0 30px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1.5px;
          transition: all 0.3s ease;
        }

        .heroPrimary {
          background: #c8a968;
          color: #111;
        }

        .heroPrimary:hover {
          transform: translateY(-3px);
          filter: brightness(1.08);
        }

        .heroSecondary {
          border: 1px solid rgba(255,255,255,0.55);
          color: #fff;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
        }

        .heroSecondary:hover {
          background: #fff;
          color: #111;
          transform: translateY(-3px);
        }

        @media (max-width: 700px) {
          .heroActions {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
          }

          .heroActions a {
            width: 100%;
          }
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
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
          width: 100%;
        }

        @media (max-width: 1100px) {
          .listingGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .listingGrid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .listingImage {
            height: 260px;
          }

          .listingInfo {
            padding: 22px !important;
          }
        }

        .listingLink {
          display: block;
          height: 100%;
          color: inherit;
          text-decoration: none;
        }

        .listingButton {
          display: inline-block;
          margin-top: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          padding-bottom: 5px;
          border-bottom: 1px solid currentColor;
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
          background: #171717;
          color: #f5f3ee;
          padding: 140px 10%;
        }

        .contactSection .sectionTag {
          color: #c7a35a;
        }

        .contactSection h2 {
          color: #f5f3ee;
        }

        .contactSection h2 em {
          color: #c7a35a;
        }

        .contactSection p {
          max-width: 650px;
          font-size: 20px;
          line-height: 1.7;
          margin: 35px 0 45px;
          color: rgba(255,255,255,.65);
        }

        .contactButtons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .contactButtons a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 62px;
          background: #c7a35a;
          color: #151515;
          padding: 0 32px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .14em;
          text-decoration: none;
          transition: all .3s ease;
        }

        .contactButtons a:hover {
          transform: translateY(-4px);
          background: #f5f3ee;
        }

        .contactButtons a + a {
          background: transparent;
          color: #f5f3ee;
          border: 1px solid rgba(255,255,255,.35);
        }

        .contactButtons a + a:hover {
          background: #f5f3ee;
          color: #151515;
          border-color: #f5f3ee;
        }

        @media (max-width: 650px) {
          .contactSection {
            padding: 90px 25px;
          }

          .contactSection p {
            font-size: 17px;
          }

          .contactButtons {
            flex-direction: column;
          }

          .contactButtons a {
            width: 100%;
          }
        }


        .services {
          padding: 120px 0;
          background: #f6f4ef;
          color: #151515;
        }

        .sectionLabel {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .2em;
          margin-bottom: 22px;
          opacity: .65;
        }

        .services h2,
        .whyUs h2 {
          margin: 0;
          font-size: clamp(42px, 6vw, 88px);
          line-height: .95;
          letter-spacing: -.05em;
        }

        .services h2 em,
        .whyUs h2 em {
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .servicesGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 65px;
        }

        .serviceCard {
          position: relative;
          min-height: 350px;
          padding: 38px;
          background: #fff;
          border: 1px solid rgba(0,0,0,.08);
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .serviceCard:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,.1);
        }

        .serviceNumber {
          font-size: 11px;
          letter-spacing: .16em;
          opacity: .45;
        }

        .serviceIcon {
          font-size: 48px;
          margin: 50px 0 35px;
          line-height: 1;
        }

        .serviceCard h3 {
          margin: 0 0 15px;
          font-size: 26px;
        }

        .serviceCard p {
          margin: 0;
          color: #666;
          line-height: 1.7;
        }

        .whyUs {
          padding: 130px 0;
          background: #171717;
          color: #fff;
        }

        .whyGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: start;
        }

        .whyContent > p {
          max-width: 580px;
          margin: 35px 0;
          color: rgba(255,255,255,.65);
          line-height: 1.8;
          font-size: 18px;
        }

        .whyButton {
          display: inline-block;
          padding: 17px 27px;
          background: #fff;
          color: #111;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .12em;
          text-decoration: none;
          transition: .25s ease;
        }

        .whyButton:hover {
          transform: translateY(-3px);
        }

        .whyList {
          border-top: 1px solid rgba(255,255,255,.18);
        }

        .whyItem {
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 20px;
          padding: 28px 0;
          border-bottom: 1px solid rgba(255,255,255,.18);
        }

        .whyItem > span {
          font-size: 12px;
          color: rgba(255,255,255,.45);
        }

        .whyItem h3 {
          margin: 0 0 8px;
          font-size: 23px;
        }

        .whyItem p {
          margin: 0;
          color: rgba(255,255,255,.55);
          line-height: 1.6;
        }

        @media (max-width: 850px) {
          .services,
          .whyUs {
            padding: 80px 0;
          }

          .servicesGrid,
          .whyGrid {
            grid-template-columns: 1fr;
          }

          .whyGrid {
            gap: 60px;
          }

          .serviceCard {
            min-height: auto;
          }
        }

        .floatingWhatsapp {
          position: fixed;
          right: 28px;
          bottom: 28px;
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: #25D366;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: bold;
          z-index: 999;
          box-shadow: 0 10px 30px rgba(0,0,0,.25);
          transition: transform .25s ease;
        }

        .floatingWhatsapp:hover {
          transform: scale(1.1);
        }



        /* YATAY TAŞMA DÜZELTME */
        html,
        body {
          max-width: 100%;
          overflow-x: hidden;
        }

        .container {
          width: 100%;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 25px;
          padding-right: 25px;
          box-sizing: border-box;
        }

        .whyGrid {
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          width: 100%;
        }

        .whyContent,
        .whyList {
          min-width: 0;
        }

        @media (max-width: 850px) {
          .whyGrid {
            grid-template-columns: 1fr;
          }
        }

        /* PREMIUM İLAN KARTLARI */
        .listingCard {
          background: #fff;
          border: 1px solid rgba(20, 20, 20, 0.08);
          border-radius: 18px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
        }

        .listingCard:hover {
          transform: translateY(-8px);
          box-shadow: 0 22px 45px rgba(0, 0, 0, 0.12);
        }

        .listingImage {
          overflow: hidden;
        }

        .listingImage img {
          transition: transform 0.6s ease;
        }

        .listingCard:hover .listingImage img {
          transform: scale(1.06);
        }

        .listingInfo {
          padding: 28px !important;
        }

        .listingMeta {
          display: flex !important;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-top: 22px;
          padding-top: 18px;
          border-top: 1px solid rgba(20, 20, 20, 0.1);
        }

        .listingMeta span {
          background: #f3f1ec;
          padding: 9px 14px;
          border-radius: 8px;
          font-weight: 600;
        }

        .listingMeta strong {
          color: #8b7141;
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: 0.3px;
        }

        .listingButton,
        .listingLink {
          display: inline-flex;
          align-items: center;
          margin-top: 24px;
          padding-bottom: 7px;
          color: #222;
          text-decoration: none;
          font-weight: 800;
          letter-spacing: 2px;
          font-size: 0.78rem;
          border-bottom: 2px solid #222;
          transition: all 0.25s ease;
        }

        .listingButton:hover,
        .listingLink:hover {
          color: #8b7141;
          border-color: #8b7141;
          letter-spacing: 2.5px;
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

  
        /* ===== HERO YENİ BUTONLAR ===== */
        .heroActions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 38px;
        }

        .heroActions a {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 58px;
          padding: 0 30px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1.5px;
          transition: all 0.3s ease;
        }

        .heroPrimary {
          background: #c8a968;
          color: #111;
        }

        .heroPrimary:hover {
          transform: translateY(-3px);
          filter: brightness(1.08);
        }

        .heroSecondary {
          border: 1px solid rgba(255,255,255,0.55);
          color: #fff;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
        }

        .heroSecondary:hover {
          background: #fff;
          color: #111;
          transform: translateY(-3px);
        }

        @media (max-width: 700px) {
          .heroActions {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
          }

          .heroActions a {
            width: 100%;
          }
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

  
        .services {
          padding: 120px 0;
          background: #f6f4ef;
          color: #151515;
        }

        .sectionLabel {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .2em;
          margin-bottom: 22px;
          opacity: .65;
        }

        .services h2,
        .whyUs h2 {
          margin: 0;
          font-size: clamp(42px, 6vw, 88px);
          line-height: .95;
          letter-spacing: -.05em;
        }

        .services h2 em,
        .whyUs h2 em {
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .servicesGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 65px;
        }

        .serviceCard {
          position: relative;
          min-height: 350px;
          padding: 38px;
          background: #fff;
          border: 1px solid rgba(0,0,0,.08);
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .serviceCard:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,.1);
        }

        .serviceNumber {
          font-size: 11px;
          letter-spacing: .16em;
          opacity: .45;
        }

        .serviceIcon {
          font-size: 48px;
          margin: 50px 0 35px;
          line-height: 1;
        }

        .serviceCard h3 {
          margin: 0 0 15px;
          font-size: 26px;
        }

        .serviceCard p {
          margin: 0;
          color: #666;
          line-height: 1.7;
        }

        .whyUs {
          padding: 130px 0;
          background: #171717;
          color: #fff;
        }

        .whyGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: start;
        }

        .whyContent > p {
          max-width: 580px;
          margin: 35px 0;
          color: rgba(255,255,255,.65);
          line-height: 1.8;
          font-size: 18px;
        }

        .whyButton {
          display: inline-block;
          padding: 17px 27px;
          background: #fff;
          color: #111;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .12em;
          text-decoration: none;
          transition: .25s ease;
        }

        .whyButton:hover {
          transform: translateY(-3px);
        }

        .whyList {
          border-top: 1px solid rgba(255,255,255,.18);
        }

        .whyItem {
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 20px;
          padding: 28px 0;
          border-bottom: 1px solid rgba(255,255,255,.18);
        }

        .whyItem > span {
          font-size: 12px;
          color: rgba(255,255,255,.45);
        }

        .whyItem h3 {
          margin: 0 0 8px;
          font-size: 23px;
        }

        .whyItem p {
          margin: 0;
          color: rgba(255,255,255,.55);
          line-height: 1.6;
        }

        @media (max-width: 850px) {
          .services,
          .whyUs {
            padding: 80px 0;
          }

          .servicesGrid,
          .whyGrid {
            grid-template-columns: 1fr;
          }

          .whyGrid {
            gap: 60px;
          }

          .serviceCard {
            min-height: auto;
          }
        }

        .floatingWhatsapp {
          position: fixed;
          right: 28px;
          bottom: 28px;
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: #25D366;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: bold;
          z-index: 999;
          box-shadow: 0 10px 30px rgba(0,0,0,.25);
          transition: transform .25s ease;
        }

        .floatingWhatsapp:hover {
          transform: scale(1.1);
        }


        /* PREMIUM İLAN KARTLARI */
        .listingCard {
          background: #fff;
          border: 1px solid rgba(20, 20, 20, 0.08);
          border-radius: 18px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
        }

        .listingCard:hover {
          transform: translateY(-8px);
          box-shadow: 0 22px 45px rgba(0, 0, 0, 0.12);
        }

        .listingImage {
          overflow: hidden;
        }

        .listingImage img {
          transition: transform 0.6s ease;
        }

        .listingCard:hover .listingImage img {
          transform: scale(1.06);
        }

        .listingInfo {
          padding: 28px !important;
        }

        .listingMeta {
          display: flex !important;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-top: 22px;
          padding-top: 18px;
          border-top: 1px solid rgba(20, 20, 20, 0.1);
        }

        .listingMeta span {
          background: #f3f1ec;
          padding: 9px 14px;
          border-radius: 8px;
          font-weight: 600;
        }

        .listingMeta strong {
          color: #8b7141;
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: 0.3px;
        }

        .listingButton,
        .listingLink {
          display: inline-flex;
          align-items: center;
          margin-top: 24px;
          padding-bottom: 7px;
          color: #222;
          text-decoration: none;
          font-weight: 800;
          letter-spacing: 2px;
          font-size: 0.78rem;
          border-bottom: 2px solid #222;
          transition: all 0.25s ease;
        }

        .listingButton:hover,
        .listingLink:hover {
          color: #8b7141;
          border-color: #8b7141;
          letter-spacing: 2.5px;
        }

        footer {
            flex-direction: column;
            gap: 25px;
            text-align: center;
          }
        }

        /* ===== WHY US PREMIUM ===== */

        .whyUs {
          position: relative;
          overflow: hidden;
          padding: 140px 0 !important;
          background:
            radial-gradient(circle at 85% 20%, rgba(199,163,90,.12), transparent 28%),
            #171717 !important;
        }

        .whyGrid {
          display: grid !important;
          grid-template-columns: 0.9fr 1.1fr !important;
          gap: 90px !important;
          align-items: center !important;
        }

        .whyContent .sectionLabel {
          color: #c7a35a !important;
          opacity: 1 !important;
        }

        .whyContent h2 {
          max-width: 700px;
        }

        .whyContent h2 em {
          color: #c7a35a !important;
        }

        .whyContent > p {
          max-width: 620px !important;
          font-size: 18px !important;
          line-height: 1.8 !important;
          color: rgba(255,255,255,.65) !important;
        }

        .whyButton {
          display: inline-flex !important;
          align-items: center;
          justify-content: center;
          padding: 19px 32px !important;
          background: #c7a35a !important;
          color: #171717 !important;
          border: 1px solid #c7a35a;
          transition: all .3s ease !important;
        }

        .whyButton:hover {
          transform: translateY(-5px) !important;
          background: #fff !important;
          border-color: #fff !important;
        }

        .whyList {
          display: flex !important;
          flex-direction: column;
          gap: 16px !important;
        }

        .whyItem {
          display: grid !important;
          grid-template-columns: 55px 1fr !important;
          gap: 25px !important;
          align-items: start !important;
          padding: 32px 35px !important;
          border: 1px solid rgba(255,255,255,.10) !important;
          background: rgba(255,255,255,.035) !important;
          transition: all .3s ease !important;
        }

        .whyItem:hover {
          transform: translateX(-8px) !important;
          background: rgba(199,163,90,.08) !important;
          border-color: rgba(199,163,90,.55) !important;
          box-shadow: 0 20px 50px rgba(0,0,0,.22) !important;
        }

        .whyItem > span {
          color: #c7a35a !important;
          font-size: 12px !important;
          font-weight: 700 !important;
          letter-spacing: .16em !important;
        }

        .whyItem h3 {
          margin: 0 0 10px !important;
          color: #fff !important;
          font-size: 26px !important;
        }

        .whyItem p {
          margin: 0 !important;
          color: rgba(255,255,255,.58) !important;
          line-height: 1.7 !important;
        }

        @media (max-width: 850px) {
          .whyUs {
            padding: 90px 20px !important;
          }

          .whyGrid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }

        @media (max-width: 650px) {
          .whyItem {
            grid-template-columns: 1fr !important;
            padding: 25px !important;
          }

          .whyItem h3 {
            font-size: 23px !important;
          }
        }


        /* ===== WHY US DESKTOP FIX ===== */

        .whyUs {
          padding: 110px 0 !important;
        }

        .whyGrid {
          grid-template-columns: minmax(420px, 0.85fr) minmax(520px, 1.15fr) !important;
          gap: 70px !important;
          align-items: center !important;
        }

        .whyContent h2 {
          font-size: clamp(52px, 5vw, 78px) !important;
          line-height: 1.02 !important;
          letter-spacing: -.04em !important;
          max-width: 620px !important;
        }

        .whyContent > p {
          font-size: 17px !important;
          max-width: 520px !important;
        }

        .whyList {
          gap: 14px !important;
        }

        .whyItem {
          grid-template-columns: 70px 1fr !important;
          padding: 28px 32px !important;
          min-height: 160px !important;
        }

        .whyItem h3 {
          font-size: 25px !important;
        }

        @media (min-width: 1400px) {
          .whyGrid {
            grid-template-columns: 1fr 1.35fr !important;
            gap: 80px !important;
          }

          .whyContent h2 {
            font-size: 76px !important;
          }
        }

        @media (max-width: 1100px) {
          .whyGrid {
            grid-template-columns: 1fr !important;
            gap: 55px !important;
          }

          .whyContent h2 {
            font-size: 62px !important;
          }
        }

      `}


</style>
    </main>
  );
}
