import Link from "next/link";

export const metadata = {
  title: "Beylikdüzü Emlak Ofisi | Şans Yapı Gayrimenkul",
  description:
    "Beylikdüzü emlak ofisi arayanlar için satılık ve kiralık daire, ev, villa ve işyeri seçenekleri. Şans Yapı Gayrimenkul ile Beylikdüzü'nde profesyonel gayrimenkul danışmanlığı.",
};

export default function BeylikduzuEmlakOfisi() {
  return (
    <main className="page">
      <section className="hero">
        <div className="container">
          <span className="badge">ŞANS YAPI GAYRİMENKUL</span>

          <h1>
            Beylikdüzü Emlak Ofisi
            <br />
            Satılık ve Kiralık Gayrimenkuller
          </h1>

          <p className="lead">
            Beylikdüzü'nde satılık ve kiralık gayrimenkul arıyorsanız,
            bölgeyi bilen profesyonel bir emlak ofisiyle çalışın.
            Şans Yapı Gayrimenkul; daire, ev, villa ve işyeri
            seçeneklerinde doğru gayrimenkulü bulmanıza yardımcı olur.
          </p>

          <div className="buttons">
            <a href="tel:+905324364573" className="primary">
              📞 0532 436 45 73
            </a>

            <Link href="/beylikduzu-emlakci" className="secondary">
              Beylikdüzü Emlakçı
            </Link>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container">
          <h2>Beylikdüzü Emlak Ofisi Olarak Hizmetlerimiz</h2>

          <p>
            Beylikdüzü emlak ofisi olarak bölgedeki satılık ve kiralık
            gayrimenkul seçeneklerini değerlendiriyor, ihtiyaçlarınıza
            uygun alternatifleri belirlemenize yardımcı oluyoruz.
          </p>

          <p>
            Beylikdüzü'nün Adnan Kahveci, Barış, Cumhuriyet, Büyükşehir,
            Kavaklı, Gürpınar, Yakuplu ve Marmara bölgelerinde
            gayrimenkul arayışınız için danışmanlık hizmeti sunuyoruz.
          </p>

          <div className="cards">
            <div className="card">
              <h3>🏠 Satılık Daire</h3>
              <p>
                Beylikdüzü'nde bütçenize ve yaşam beklentinize uygun
                satılık daire seçeneklerini değerlendirin.
              </p>
              <Link href="/blog/beylikduzu-satilik-daire">
                Satılık Daireleri İncele →
              </Link>
            </div>

            <div className="card">
              <h3>🔑 Kiralık Daire</h3>
              <p>
                Beylikdüzü'nde farklı bütçelere ve ihtiyaçlara uygun
                kiralık daire seçeneklerini değerlendirin.
              </p>
              <Link href="/beylikduzu-kiralik-daire">
                Kiralık Daireleri İncele →
              </Link>
            </div>

            <div className="card">
              <h3>🏡 Ev ve Villa</h3>
              <p>
                Geniş yaşam alanı arayanlar için Beylikdüzü'ndeki ev
                ve villa alternatifleri hakkında bilgi alın.
              </p>
              <Link href="/beylikduzu-emlakci">
                Gayrimenkul Danışmanlığı →
              </Link>
            </div>

            <div className="card">
              <h3>🏢 Gayrimenkul Yatırımı</h3>
              <p>
                Beylikdüzü'nde yatırım amacıyla gayrimenkul arayanlar
                için bölge ve mülk değerlendirmesi yapıyoruz.
              </p>
              <Link href="/beylikduzu-emlakci">
                Yatırım İçin Bilgi Al →
              </Link>
            </div>
          </div>

          <h2>Beylikdüzü'nde Emlak Ofisi Seçerken</h2>

          <p>
            Gayrimenkul alım veya kiralama sürecinde yalnızca fiyat
            karşılaştırması yapmak yeterli değildir. Konum, ulaşım,
            bina özellikleri, çevredeki sosyal imkanlar ve gayrimenkulün
            yatırım potansiyeli birlikte değerlendirilmelidir.
          </p>

          <p>
            Beylikdüzü emlak ofisi seçerken bölgeyi tanıyan ve satış
            veya kiralama sürecinin her aşamasında size rehberlik
            edebilecek profesyonellerle çalışmak önemlidir.
          </p>

          <div className="areas">
            <h2>Beylikdüzü Hizmet Bölgelerimiz</h2>

            <div className="areaGrid">
              <Link href="/blog/beylikduzu-adnan-kahveci-mahallesi-satilik-daire">
                Adnan Kahveci Mahallesi
              </Link>

              <Link href="/blog/beylikduzu-baris-mahallesi-satilik-daire">
                Barış Mahallesi
              </Link>

              <Link href="/blog/beylikduzu-cumhuriyet-mahallesi-satilik-daire">
                Cumhuriyet Mahallesi
              </Link>

              <Link href="/blog/beylikduzu-buyuksehir-mahallesi-satilik-daire">
                Büyükşehir Mahallesi
              </Link>

              <Link href="/blog/beylikduzu-kavakli-mahallesi-satilik-daire">
                Kavaklı Mahallesi
              </Link>

              <Link href="/blog/beylikduzu-gurpinar-mahallesi-satilik-daire">
                Gürpınar Mahallesi
              </Link>

              <Link href="/beylikduzu-emlakci">
                Beylikdüzü Emlakçı
              </Link>

              <Link href="/beylikduzu-kiralik-daire">
                Beylikdüzü Kiralık Daire
              </Link>
            </div>
          </div>

          <section className="cta">
            <h2>Beylikdüzü'nde Gayrimenkul Arıyor musunuz?</h2>

            <p>
              Satılık veya kiralık daire, ev, villa ya da yatırım amaçlı
              gayrimenkul arıyorsanız bizimle iletişime geçebilirsiniz.
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
          max-width: 800px;
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

        .cta p {
          color: #ccc;
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
