"use client";

import Link from "next/link";

const blogs = [
  {
    slug: "esenyurtta-ev-alirken-nelere-dikkat-edilmeli",
    category: "GAYRİMENKUL REHBERİ",
    title: "Esenyurt'ta Ev Alırken Nelere Dikkat Edilmeli?",
    description:
      "Esenyurt'ta ev satın almadan önce dikkat edilmesi gereken önemli noktaları sizin için derledik.",
    date: "01 Eylül 2026",
  },
  {
    slug: "esenyurt-satilik-daire-fiyatlari",
    category: "EMLAK PİYASASI",
    title: "Esenyurt Satılık Daire Fiyatları Nasıl Değerlendirilir?",
    description:
      "Satılık daire fiyatlarını değerlendirirken hangi kriterlere dikkat etmeniz gerektiğini öğrenin.",
    date: "01 Eylül 2026",
  },
  {
    slug: "ev-satarken-dogru-fiyat-belirleme",
    category: "SATIŞ REHBERİ",
    title: "Ev Satarken Doğru Fiyat Nasıl Belirlenir?",
    description:
      "Gayrimenkulünüzü doğru fiyatlandırarak satış sürecini daha verimli hale getirebilirsiniz.",
    date: "01 Eylül 2026",
  },
];

export default function BlogPage() {
  return (
    <main>
      <section className="blogHero">
        <span>ŞANS YAPI GAYRİMENKUL & EMLAK</span>
        <h1>
          Gayrimenkul
          <br />
          <em>Rehberi.</em>
        </h1>
        <p>
          Gayrimenkul, yatırım ve emlak dünyası hakkında faydalı bilgiler.
        </p>
      </section>

      <section className="blogSection">
        <div className="blogGrid">
          {blogs.map((blog) => (
            <article className="blogCard" key={blog.slug}>
              <div className="blogImage">
                <span>{blog.category}</span>
              </div>

              <div className="blogContent">
                <small>{blog.date}</small>

                <h2>{blog.title}</h2>

                <p>{blog.description}</p>

                <Link href={`/blog/${blog.slug}`}>
                  DEVAMINI OKU →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style jsx global>{`
        .blogHero {
          padding: 180px 8% 110px;
          background: #171717;
          color: #fff;
        }

        .blogHero > span {
          font-size: 11px;
          letter-spacing: 0.2em;
          color: #c7a35a;
          font-weight: 700;
        }

        .blogHero h1 {
          font-size: clamp(60px, 9vw, 140px);
          line-height: 0.85;
          letter-spacing: -0.06em;
          margin: 30px 0;
        }

        .blogHero h1 em {
          font-family: Georgia, serif;
          font-weight: 400;
          color: #c7a35a;
        }

        .blogHero p {
          max-width: 520px;
          font-size: 18px;
          line-height: 1.7;
          color: rgba(255,255,255,.65);
        }

        .blogSection {
          padding: 110px 8%;
          background: #f6f4ef;
        }

        .blogGrid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
        }

        .blogCard {
          background: #fff;
          border: 1px solid rgba(0,0,0,.08);
          transition: .3s ease;
        }

        .blogCard:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,.08);
        }

        .blogImage {
          height: 220px;
          background:
            linear-gradient(135deg, rgba(0,0,0,.15), rgba(0,0,0,.55)),
            #8b7141;
          position: relative;
        }

        .blogImage span {
          position: absolute;
          left: 22px;
          bottom: 20px;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .15em;
        }

        .blogContent {
          padding: 30px;
        }

        .blogContent small {
          font-size: 11px;
          color: #888;
        }

        .blogContent h2 {
          margin: 18px 0;
          font-size: 28px;
          line-height: 1.15;
        }

        .blogContent p {
          color: #666;
          line-height: 1.7;
          margin-bottom: 25px;
        }

        .blogContent a {
          color: #151515;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .12em;
          border-bottom: 1px solid #151515;
          padding-bottom: 6px;
        }

        @media (max-width: 900px) {
          .blogGrid {
            grid-template-columns: 1fr;
          }

          .blogHero {
            padding: 140px 25px 80px;
          }

          .blogSection {
            padding: 70px 25px;
          }
        }
      `}</style>
    </main>
  );
}
