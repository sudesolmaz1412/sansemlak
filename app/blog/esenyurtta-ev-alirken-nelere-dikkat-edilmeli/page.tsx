import Link from "next/link";

export const metadata = {
  title: "Esenyurt'ta Ev Alırken Nelere Dikkat Edilmeli? | Şans Yapı Gayrimenkul & Emlak",
  description:
    "Esenyurt'ta ev satın almadan önce konum, fiyat, tapu, bina durumu ve yatırım potansiyeli gibi dikkat edilmesi gereken önemli noktaları öğrenin.",
};

export default function BlogDetailPage() {
  return (
    <main>
      <article>
        <header className="articleHero">
          <div className="articleContainer">
            <Link href="/blog" className="backButton">
              ← TÜM YAZILAR
            </Link>

            <div className="articleCategory">GAYRİMENKUL REHBERİ</div>

            <h1>Esenyurt&apos;ta Ev Alırken Nelere Dikkat Edilmeli?</h1>

            <p className="articleIntro">
              Esenyurt&apos;ta ev satın almayı düşünüyorsanız, doğru bir karar
              vermek için dikkat etmeniz gereken birçok önemli kriter bulunuyor.
            </p>

            <div className="articleDate">01 EYLÜL 2026</div>
          </div>
        </header>

        <section className="articleBody">
          <div className="articleContainer articleContent">

            <p>
              Ev satın almak hem yaşam hem de yatırım açısından önemli bir
              karardır. Özellikle Esenyurt gibi sürekli gelişen ve farklı
              bütçelere yönelik çok sayıda konut seçeneği bulunan bölgelerde
              karar verirken yalnızca fiyatı değerlendirmek yeterli değildir.
            </p>

            <h2>1. Konumu Detaylı Şekilde İnceleyin</h2>

            <p>
              Bir gayrimenkulün değerini belirleyen en önemli unsurlardan biri
              konumudur. Ulaşım imkanları, ana yollar, toplu taşıma, okul,
              hastane ve günlük ihtiyaç noktalarına yakınlık mutlaka
              değerlendirilmelidir.
            </p>

            <p>
              Aynı bölgede bulunan iki daire arasında bile konum nedeniyle
              önemli fiyat ve değer farkları oluşabilir.
            </p>

            <h2>2. Bölgedeki Fiyatları Karşılaştırın</h2>

            <p>
              Bir dairenin fiyatını değerlendirirken yalnızca ilan fiyatına
              bakmak doğru değildir. Aynı bölgede bulunan benzer özellikteki
              gayrimenkullerin fiyatlarını karşılaştırmak gerekir.
            </p>

            <ul>
              <li>Metrekare</li>
              <li>Bina yaşı</li>
              <li>Kat ve cephe</li>
              <li>Site özellikleri</li>
              <li>Ulaşım imkanları</li>
              <li>Bölgenin gelişim potansiyeli</li>
            </ul>

            <p>
              Bu kriterler, bir gayrimenkulün gerçek piyasa değerini daha doğru
              şekilde anlamanıza yardımcı olur.
            </p>

            <h2>3. Tapu ve Resmi Belgeleri Kontrol Edin</h2>

            <p>
              Satın alma sürecinde tapu ve gayrimenkule ait resmi belgelerin
              dikkatli şekilde incelenmesi gerekir. Gayrimenkul üzerinde ipotek,
              haciz veya farklı bir hukuki durum olup olmadığı araştırılmalıdır.
            </p>

            <p>
              Ayrıca bağımsız bölüm bilgileri ve tapudaki kayıtların satın
              alınacak gayrimenkulle uyumlu olması önemlidir.
            </p>

            <h2>4. Binanın Durumunu İnceleyin</h2>

            <p>
              Dairenin iç özellikleri kadar binanın genel durumu da önemlidir.
              Bina yaşı, bakım durumu, ortak alanlar ve yapının genel kalitesi
              değerlendirilmelidir.
            </p>

            <p>
              Özellikle yatırım amacıyla alınacak gayrimenkullerde binanın uzun
              vadeli değerini koruma potansiyeli dikkate alınmalıdır.
            </p>

            <h2>5. Yatırım Potansiyelini Değerlendirin</h2>

            <p>
              Esenyurt&apos;ta ev satın alırken bölgenin gelecekteki gelişim
              potansiyeli de önemlidir. Yeni ulaşım projeleri, ticari alanlar,
              sosyal yaşam ve bölgesel gelişmeler gayrimenkul değerini
              etkileyebilir.
            </p>

            <h2>Profesyonel Destekle Daha Güvenli Karar Verin</h2>

            <p>
              Gayrimenkul satın alma sürecinde doğru fiyat analizi, bölge
              bilgisi ve güvenilir danışmanlık büyük önem taşır. Şans Yapı
              Gayrimenkul & Emlak olarak Esenyurt ve çevresindeki gayrimenkul
              seçeneklerini ihtiyaçlarınıza göre değerlendirmenize yardımcı
              oluyoruz.
            </p>

            <div className="articleCTA">
              <span>GAYRİMENKUL DANIŞMANLIĞI</span>
              <h3>Size uygun gayrimenkulü birlikte bulalım.</h3>

              <Link href="/#iletisim">
                BİZE ULAŞIN →
              </Link>
            </div>

          </div>
        </section>
      </article>

      <style>{`
        .articleHero {
          background: #171717;
          color: #fff;
          padding: 170px 25px 100px;
        }

        .articleContainer {
          max-width: 950px;
          margin: 0 auto;
        }

        .backButton {
          display: inline-block;
          color: #c7a35a;
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .16em;
          margin-bottom: 55px;
        }

        .articleCategory {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .2em;
          color: #c7a35a;
          margin-bottom: 25px;
        }

        .articleHero h1 {
          font-size: clamp(48px, 7vw, 92px);
          line-height: .98;
          letter-spacing: -.055em;
          margin: 0;
        }

        .articleIntro {
          max-width: 700px;
          font-size: 20px;
          line-height: 1.7;
          color: rgba(255,255,255,.65);
          margin: 35px 0;
        }

        .articleDate {
          font-size: 10px;
          letter-spacing: .15em;
          color: rgba(255,255,255,.4);
        }

        .articleBody {
          background: #f6f4ef;
          padding: 100px 25px 130px;
        }

        .articleContent {
          max-width: 780px;
          font-size: 18px;
          line-height: 1.85;
          color: #444;
        }

        .articleContent h2 {
          color: #151515;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.1;
          margin: 70px 0 25px;
          letter-spacing: -.035em;
        }

        .articleContent p {
          margin: 0 0 25px;
        }

        .articleContent ul {
          margin: 20px 0 30px;
          padding-left: 25px;
        }

        .articleContent li {
          margin-bottom: 10px;
        }

        .articleCTA {
          background: #171717;
          color: #fff;
          padding: 50px;
          margin-top: 80px;
        }

        .articleCTA span {
          font-size: 10px;
          color: #c7a35a;
          font-weight: 700;
          letter-spacing: .18em;
        }

        .articleCTA h3 {
          font-size: 34px;
          line-height: 1.1;
          margin: 20px 0 30px;
        }

        .articleCTA a {
          display: inline-block;
          background: #c7a35a;
          color: #171717;
          padding: 16px 25px;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .12em;
        }

        @media (max-width: 700px) {
          .articleHero {
            padding: 130px 22px 70px;
          }

          .articleBody {
            padding: 70px 22px;
          }

          .articleIntro {
            font-size: 17px;
          }

          .articleContent {
            font-size: 16px;
          }

          .articleCTA {
            padding: 30px;
          }
        }
      `}</style>
    </main>
  );
}
