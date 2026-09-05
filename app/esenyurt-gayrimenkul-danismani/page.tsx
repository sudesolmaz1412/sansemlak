import Link from "next/link";

export const metadata = {
  title: "Esenyurt Gayrimenkul Danışmanı | Şans Yapı Gayrimenkul",
  description:
    "Esenyurt gayrimenkul danışmanı arayanlar için satılık ve kiralık daire, ev, villa ve yatırım seçenekleri. Şans Yapı Gayrimenkul ile Esenyurt'ta profesyonel gayrimenkul danışmanlığı.",
};

export default function EsenyurtGayrimenkulDanismani() {
  return (
    <main className="page">
      <section className="hero">
        <div className="container">
          <span className="badge">ŞANS YAPI GAYRİMENKUL</span>

          <h1>
            Esenyurt Gayrimenkul Danışmanı
            <br />
            Satılık ve Kiralık Gayrimenkuller
          </h1>

          <p className="lead">
            Esenyurt'ta satılık veya kiralık gayrimenkul arıyorsanız,
            bölgeyi tanıyan profesyonel bir gayrimenkul danışmanından
            destek alın. Şans Yapı Gayrimenkul; daire, ev, villa,
            arsa ve yatırım amaçlı gayrimenkullerde doğru seçenekleri
            değerlendirmenize yardımcı olur.
          </p>

          <div className="buttons">
            <a href="tel:+905324364573" className="primary">
              📞 0532 436 45 73
            </a>

            <Link href="/esenyurt-emlakci" className="secondary">
              Esenyurt Emlakçı
            </Link>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <h2>Esenyurt Gayrimenkul Danışmanlığı</h2>

          <p>
            Gayrimenkul satın almak veya kiralamak yalnızca uygun bir
            ilan bulmaktan ibaret değildir. Konum, ulaşım, bina özellikleri,
            çevredeki imkanlar, mülkün kullanım amacı ve bütçe birlikte
            değerlendirilmelidir.
          </p>

          <p>
            Esenyurt gayrimenkul danışmanı olarak ihtiyaçlarınızı
            anlayarak size uygun satılık ve kiralık gayrimenkul
            alternatiflerini değerlendirmenize yardımcı oluyoruz.
            Sürecin başından sonuna kadar doğru karar vermeniz için
            profesyonel destek sunuyoruz.
          </p>

          <div className="cards">
            <div className="card">
              <h3>🏠 Satılık Daire</h3>
              <p>
                Esenyurt'ta farklı bütçe ve ihtiyaçlara uygun satılık
                daire seçeneklerini değerlendirin.
              </p>
              <Link href="/blog/esenyurt-satilik-daire">
                Esenyurt Satılık Daire →
              </Link>
            </div>

            <div className="card">
              <h3>🔑 Kiralık Daire</h3>
              <p>
                Kiralık daire arayanlar için Esenyurt'un farklı
                bölgelerindeki seçenekleri değerlendirin.
              </p>
              <Link href="/esenyurt-kiralik-daire">
                Esenyurt Kiralık Daire →
              </Link>
            </div>

            <div className="card">
              <h3>📈 Gayrimenkul Yatırımı</h3>
              <p>
                Yatırım amacıyla gayrimenkul satın almak isteyenler
                için bölge ve mülk değerlendirmesi yapıyoruz.
              </p>
              <Link href="/esenyurt-emlakci">
                Emlak Danışmanlığı →
              </Link>
            </div>

            <div className="card">
              <h3>🏡 Ev ve Villa</h3>
              <p>
                Yaşam amacıyla ev veya villa arayanlar için ihtiyaçlara
                uygun gayrimenkul alternatiflerini değerlendiriyoruz.
              </p>
              <Link href="/esenyurt-emlak-ofisi">
                Emlak Ofisi →
              </Link>
            </div>
          </div>

          <h2>Esenyurt'ta Gayrimenkul Alırken</h2>

          <p>
            Esenyurt'ta gayrimenkul seçerken yalnızca satış veya kira
            fiyatına bakmak yerine mülkün bulunduğu konumun ulaşım
            imkanları, çevredeki sosyal alanlar, bina özellikleri ve
            gelecekteki kullanım veya yatırım amacı birlikte
            değerlendirilmelidir.
          </p>

          <p>
            Profesyonel gayrimenkul danışmanlığı, piyasadaki seçenekleri
            karşılaştırırken zaman kaybetmenizi önleyebilir ve bütçenize
            uygun mülkleri daha kolay değerlendirmenizi sağlayabilir.
          </p>

          <div className="areas">
            <h2>Esenyurt Gayrimenkul Hizmet Bölgelerimiz</h2>

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

              <Link href="/esenyurt-emlakci">
                Esenyurt Emlakçı
              </Link>

              <Link href="/esenyurt-emlak-ofisi">
                Esenyurt Emlak Ofisi
              </Link>
            </div>
          </div>

          <section className="cta">
            <h2>Esenyurt'ta Gayrimenkul Arıyor musunuz?</h2>

            <p>
              Satılık veya kiralık daire, ev, villa ya da yatırım
              amaçlı gayrimenkul arıyorsanız bizimle iletişime geçin.
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
          margin-top: 65px;
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
    </main>
  );
}
