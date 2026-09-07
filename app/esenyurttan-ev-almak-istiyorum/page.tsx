import Link from "next/link";

export const metadata = {
  title: "Esenyurt'tan Ev Almak İstiyorum | Şans Yapı Gayrimenkul",
  description:
    "Esenyurt'tan ev almak isteyenler için satılık daire ve ev seçenekleri. Esenyurt'ta bütçenize ve ihtiyaçlarınıza uygun gayrimenkul seçeneklerini Şans Yapı Gayrimenkul ile değerlendirin.",
};

export default function EsenyurttanEvAlmakIstiyorum() {
  return (
    <main className="page">
      <section className="hero">
        <div className="container">
          <span className="badge">ŞANS YAPI GAYRİMENKUL</span>

          <h1>Esenyurt'tan Ev Almak İstiyorum</h1>

          <p className="lead">
            Esenyurt'tan ev almak istiyorsanız, bütçenize ve yaşam
            ihtiyaçlarınıza uygun gayrimenkul seçeneklerini birlikte
            değerlendirelim. Satılık daire, ev ve yatırım amaçlı
            gayrimenkullerde bölgeye hakim danışmanlık hizmeti sunuyoruz.
          </p>

          <div className="buttons">
            <a href="tel:+905324364573" className="primary">
              📞 0532 436 45 73
            </a>

            <Link href="/blog/esenyurt-satilik-daire" className="secondary">
              Esenyurt Satılık Daire
            </Link>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <h2>Esenyurt'tan Ev Almak İsteyenler İçin</h2>

          <p>
            Esenyurt'tan ev almak isteyenlerin öncelikle bütçesini,
            evden beklentisini ve satın alma amacını belirlemesi önemlidir.
            Oturum için alınacak bir ev ile yatırım amacıyla alınacak
            gayrimenkulün değerlendirme kriterleri aynı olmayabilir.
          </p>

          <p>
            Daire seçerken konum, ulaşım imkanları, bina yaşı, kat
            durumu, dairenin kullanım alanı ve çevredeki sosyal
            imkanların birlikte değerlendirilmesi gerekir. Şans Yapı
            Gayrimenkul olarak Esenyurt'taki seçenekleri bu kriterlerle
            değerlendirmenize yardımcı oluyoruz.
          </p>

          <div className="cards">
            <div className="card">
              <h3>🏠 Satılık Daire Arıyorum</h3>
              <p>
                Esenyurt'ta farklı büyüklük ve özelliklerde satılık
                daire seçeneklerini değerlendirin.
              </p>
              <Link href="/blog/esenyurt-satilik-daire">
                Satılık Daireleri İncele →
              </Link>
            </div>

            <div className="card">
              <h3>📍 Mahalle Seçimi</h3>
              <p>
                Esenyurt'un farklı mahallelerini konum ve yaşam
                ihtiyaçlarınıza göre karşılaştırın.
              </p>
              <Link href="/blog/esenyurt-talatpasa-satilik-daire">
                Mahalleleri İncele →
              </Link>
            </div>

            <div className="card">
              <h3>💰 Yatırım İçin Ev</h3>
              <p>
                Ev satın alırken yalnızca bugünkü fiyatı değil,
                gayrimenkulün kullanım ve yatırım potansiyelini de
                değerlendirin.
              </p>
              <Link href="/esenyurt-gayrimenkul-danismani">
                Gayrimenkul Danışmanlığı →
              </Link>
            </div>

            <div className="card">
              <h3>🤝 Profesyonel Destek</h3>
              <p>
                Satın alma sürecinde size uygun gayrimenkulleri
                değerlendirmek ve seçenekleri karşılaştırmak için
                danışmanlık alın.
              </p>
              <a href="tel:+905324364573">
                Danışmanla Görüş →
              </a>
            </div>
          </div>

          <h2>Esenyurt'tan Ev Alırken Nelere Bakılmalı?</h2>

          <p>
            Ev satın alırken yalnızca ilan fiyatına odaklanmak yerine
            gayrimenkulün bulunduğu konum, ulaşım imkanları, bina
            özellikleri, dairenin katı, kullanım alanı ve genel durumu
            birlikte değerlendirilmelidir.
          </p>

          <p>
            Ayrıca satın alma öncesinde tapu ve mülkiyet bilgilerinin,
            binanın ve dairenin mevcut durumunun ve satış sürecindeki
            gerekli belgelerin kontrol edilmesi önemlidir.
          </p>

          <h2>Esenyurt'ta Hangi Bölgelerde Ev Aranabilir?</h2>

          <p>
            Esenyurt geniş bir yerleşim alanına sahip olduğu için ev
            ararken yalnızca ilçe adına göre karar vermek yerine mahalle
            bazında araştırma yapmak daha sağlıklı olabilir.
          </p>

          <div className="areas">
            <div className="areaGrid">
              <Link href="/blog/esenyurt-talatpasa-satilik-daire">
                Talatpaşa
              </Link>

              <Link href="/blog/esenyurt-zafer-mahallesi-satilik-daire">
                Zafer Mahallesi
              </Link>

              <Link href="/blog/esenyurt-saadetdere-mahallesi-satilik-daire">
                Saadetdere Mahallesi
              </Link>

              <Link href="/blog/esenyurt-mehtercesme-mahallesi-satilik-daire">
                Mehterçeşme Mahallesi
              </Link>

              <Link href="/blog/esenyurt-namik-kemal-mahallesi-satilik-daire">
                Namık Kemal Mahallesi
              </Link>

              <Link href="/blog/esenyurt-inonu-mahallesi-satilik-daire">
                İnönü Mahallesi
              </Link>
            </div>
          </div>

          <section className="cta">
            <h2>Esenyurt'tan Ev Almak mı İstiyorsunuz?</h2>

            <p>
              Bütçenizi ve beklentinizi paylaşın, Esenyurt'taki uygun
              gayrimenkul seçeneklerini birlikte değerlendirelim.
            </p>

            <a href="tel:+905324364573">
              📞 0532 436 45 73
            </a>
          </section>
        </div>
      </section>

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #f7f7f7;
          color: #171717;
          font-family: Arial, Helvetica, sans-serif;
        }

        .page {
          min-height: 100vh;
        }

        .container {
          width: min(1100px, calc(100% - 32px));
          margin: 0 auto;
        }

        .hero {
          background: #111;
          color: white;
          padding: 90px 0 80px;
        }

        .badge {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 22px;
          opacity: .75;
        }

        h1 {
          font-size: clamp(38px, 6vw, 68px);
          line-height: 1.05;
          margin: 0 0 25px;
          max-width: 900px;
        }

        .lead {
          max-width: 820px;
          font-size: 19px;
          line-height: 1.7;
          color: #d7d7d7;
          margin: 0;
        }

        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .buttons a {
          text-decoration: none;
          padding: 15px 22px;
          border-radius: 8px;
          font-weight: 700;
        }

        .primary {
          background: white;
          color: #111;
        }

        .secondary {
          border: 1px solid #666;
          color: white;
        }

        .content {
          padding: 70px 0;
        }

        h2 {
          font-size: 32px;
          line-height: 1.2;
          margin: 0 0 20px;
        }

        .content p {
          font-size: 17px;
          line-height: 1.75;
          color: #444;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 45px 0 70px;
        }

        .card {
          background: white;
          border: 1px solid #e5e5e5;
          border-radius: 14px;
          padding: 28px;
        }

        .card h3 {
          margin: 0 0 12px;
          font-size: 21px;
        }

        .card a,
        .areaGrid a {
          color: #111;
          font-weight: 700;
          text-decoration: none;
        }

        .areas {
          margin-top: 35px;
        }

        .areaGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 25px;
        }

        .areaGrid a {
          background: white;
          border: 1px solid #e5e5e5;
          padding: 18px;
          border-radius: 9px;
        }

        .cta {
          margin-top: 70px;
          padding: 45px;
          background: #111;
          color: white;
          border-radius: 16px;
          text-align: center;
        }

        .cta h2 {
          margin-bottom: 12px;
        }

        .cta p {
          color: #ccc;
          margin-bottom: 25px;
        }

        .cta a {
          display: inline-block;
          background: white;
          color: #111;
          text-decoration: none;
          padding: 15px 25px;
          border-radius: 8px;
          font-weight: 700;
        }

        @media (max-width: 700px) {
          .hero {
            padding: 60px 0;
          }

          .cards,
          .areaGrid {
            grid-template-columns: 1fr;
          }

          .content {
            padding: 50px 0;
          }

          .cta {
            padding: 30px 20px;
          }
        }
      `}</style>
    
      <p style={{ marginTop: "30px", lineHeight: 1.8 }}>
        Esenyurt'ta kiralık daire arıyorsanız,
        <Link href="/esenyurt-kiralik-daire">Esenyurt kiralık daire</Link>
        sayfamızı inceleyerek kiralık konut seçenekleri hakkında bilgi
        alabilirsiniz.
      </p>

</main>
  );
}
