import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beylikdüzü Kiralık Daire | Şans Yapı Gayrimenkul",
  description:
    "Beylikdüzü kiralık daire seçenekleri, mahalle bazında kiralık ev arayışı ve gayrimenkul danışmanlığı için Şans Yapı Gayrimenkul.",
  keywords: [
    "Beylikdüzü kiralık daire",
    "Beylikdüzü kiralık ev",
    "Beylikdüzü kiralık daireler",
    "Beylikdüzü kiralık 1+1",
    "Beylikdüzü kiralık 2+1",
    "Beylikdüzü kiralık 3+1",
    "Beylikdüzü emlakçı",
  ],
};

const neighborhoods = [
  {
    name: "Adnan Kahveci Mahallesi",
    href: "/blog/beylikduzu-adnan-kahveci-mahallesi-satilik-daire",
  },
  {
    name: "Barış Mahallesi",
    href: "/blog/beylikduzu-baris-mahallesi-satilik-daire",
  },
  {
    name: "Cumhuriyet Mahallesi",
    href: "/blog/beylikduzu-cumhuriyet-mahallesi-satilik-daire",
  },
  {
    name: "Büyükşehir Mahallesi",
    href: "/blog/beylikduzu-buyuksehir-mahallesi-satilik-daire",
  },
  {
    name: "Kavaklı Mahallesi",
    href: "/blog/beylikduzu-kavakli-mahallesi-satilik-daire",
  },
  {
    name: "Gürpınar Mahallesi",
    href: "/blog/beylikduzu-gurpinar-mahallesi-satilik-daire",
  },
];

export default function BeylikduzuKiralikDairePage() {
  return (
    <main className="page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f7f7f7;
          color: #222;
        }

        .page {
          min-height: 100vh;
        }

        .hero {
          background: #111;
          color: white;
          padding: 72px 20px;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .hero h1 {
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.08;
          margin: 0 0 20px;
        }

        .hero p {
          max-width: 800px;
          font-size: 19px;
          line-height: 1.7;
          color: #ddd;
          margin: 0;
        }

        .buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 30px;
        }

        .button {
          display: inline-block;
          padding: 15px 22px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
        }

        .primary {
          background: white;
          color: #111;
        }

        .secondary {
          border: 1px solid #777;
          color: white;
        }

        section {
          padding: 55px 20px;
        }

        h2 {
          font-size: 32px;
          margin: 0 0 18px;
        }

        h3 {
          font-size: 21px;
          margin-top: 0;
        }

        p, li {
          font-size: 17px;
          line-height: 1.75;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 30px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 4px 18px rgba(0,0,0,.06);
        }

        .neighborhoods {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 25px;
        }

        .neighborhood {
          display: block;
          background: white;
          padding: 17px 20px;
          border-radius: 8px;
          color: #222;
          text-decoration: none;
          font-weight: 700;
          box-shadow: 0 2px 10px rgba(0,0,0,.05);
        }

        .cta {
          background: #111;
          color: white;
          text-align: center;
        }

        .cta p {
          color: #ddd;
          max-width: 700px;
          margin: 0 auto;
        }

        @media (max-width: 750px) {
          .grid,
          .neighborhoods {
            grid-template-columns: 1fr;
          }

          section {
            padding: 42px 18px;
          }

          .hero {
            padding: 55px 18px;
          }
        }
      `}</style>

      <header className="hero">
        <div className="container">
          <h1>Beylikdüzü Kiralık Daire</h1>
          <p>
            Beylikdüzü kiralık daire arayanlar için mahalle, konum ve ihtiyaçlara
            göre gayrimenkul danışmanlığı. 1+1, 2+1, 3+1 ve farklı özelliklerde
            kiralık daire seçeneklerini değerlendirirken doğru bölge ve doğru
            fiyat konusunda Şans Yapı Gayrimenkul yanınızda.
          </p>

          <div className="buttons">
            <a className="button primary" href="tel:+905324364573">
              0532 436 45 73
            </a>
            <a className="button secondary" href="/beylikduzu-emlakci">
              Beylikdüzü Emlakçı
            </a>
          </div>
        </div>
      </header>

      <section>
        <div className="container">
          <h2>Beylikdüzü'nde Kiralık Daire Ararken</h2>
          <p>
            Beylikdüzü kiralık daire piyasasında karar verirken yalnızca dairenin
            fiyatına bakmak yeterli değildir. Mahalle, ulaşım imkanları, binanın
            yaşı, katı, site özellikleri, aidat, otopark ve çevredeki günlük
            ihtiyaçlara erişim gibi birçok unsur birlikte değerlendirilmelidir.
          </p>
          <p>
            Şans Yapı Gayrimenkul, Beylikdüzü'nde kiralık ev arayan kişilere
            bölge hakkında bilgi vererek ihtiyaçlarına uygun seçenekleri
            değerlendirmelerine yardımcı olur.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Kiralık Daire Tipleri</h2>

          <div className="grid">
            <article className="card">
              <h3>Beylikdüzü Kiralık 1+1</h3>
              <p>
                Tek kişi veya çiftler için daha kompakt yaşam alanları arayanlara
                uygun 1+1 kiralık daire seçenekleri değerlendirilebilir.
              </p>
            </article>

            <article className="card">
              <h3>Beylikdüzü Kiralık 2+1</h3>
              <p>
                Aileler ve daha geniş yaşam alanı isteyenler için 2+1 kiralık
                daireler Beylikdüzü'nde sık tercih edilen seçenekler arasındadır.
              </p>
            </article>

            <article className="card">
              <h3>Beylikdüzü Kiralık 3+1</h3>
              <p>
                Daha geniş metrekare ve oda ihtiyacı olan aileler için 3+1
                kiralık daire alternatifleri değerlendirilebilir.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Beylikdüzü Kiralık Daire İçin Popüler Mahalleler</h2>
          <p>
            Kiralık daire ararken Beylikdüzü'nün mahallelerini ayrı ayrı
            değerlendirmek doğru seçeneğe ulaşmayı kolaylaştırabilir.
          </p>

          <div className="neighborhoods">
            {neighborhoods.map((item) => (
              <a key={item.href} className="neighborhood" href={item.href}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Kiralık Ev Seçerken Nelere Dikkat Edilmeli?</h2>

          <ul>
            <li>Dairenin bulunduğu mahalle ve ulaşım imkanları</li>
            <li>Bina yaşı, katı ve genel yapı durumu</li>
            <li>Aidat ve diğer düzenli giderler</li>
            <li>Otopark, güvenlik ve site olanakları</li>
            <li>Isınma sistemi ve enerji giderleri</li>
            <li>Okul, market, sağlık ve günlük ihtiyaçlara yakınlık</li>
            <li>Kira bedelinin bölgedeki benzer dairelerle karşılaştırılması</li>
          </ul>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Beylikdüzü Kiralık Daire Arıyorsanız</h2>
          <p>
            İhtiyacınızı ve bütçenizi paylaşarak Beylikdüzü'nde kiralık daire
            arayışınız hakkında Şans Yapı Gayrimenkul ile görüşebilirsiniz.
          </p>

          <div className="buttons" style={{ justifyContent: "center" }}>
            <a className="button primary" href="tel:+905324364573">
              0532 436 45 73
            </a>
            <a className="button secondary" href="/beylikduzu-emlakci">
              Şans Yapı Gayrimenkul
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
