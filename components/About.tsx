import Image from "next/image";
import Link from "next/link";
import { about } from "@/lib/site";

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__inner">
        <div className="about__media js-fade-in" aria-hidden="true">
          <span className="about__year">{about.year}</span>

          <Image className="about__img about__img--main" src={about.imageMain} alt={about.imageMainAlt} width={600} height={480} />
          <Image className="about__img about__img--accent" src={about.imageAccent} alt={about.imageAccentAlt} width={375} height={375} />

          <div className="about__gold-block" />
        </div>

        <div className="about__text">
          <p className="section-label js-fade-in">{about.tag}</p>

          <h2 className="section-title js-fade-in js-fade-in--delay-1" id="about-title">
            {about.title}
          </h2>

          <div className="u-gold-divider js-fade-in js-fade-in--delay-2" />

          <p className="about__description js-fade-in js-fade-in--delay-2">{about.description}</p>

          <ul className="about__features js-fade-in js-fade-in--delay-3" role="list">
            {about.features.map((f) => (
              <li key={f.label} className="about__feature">
                <div className="about__feature-bar" aria-hidden="true" />
                <div className="about__feature-body">
                  <span className="about__feature-label">{f.label}</span>
                  <span className="about__feature-text">{f.text}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="about__cta js-fade-in js-fade-in--delay-4">
            <Link href="/#services" className="btn btn--primary">
              Ver servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
