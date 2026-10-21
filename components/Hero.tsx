import Link from "next/link";
import { hero } from "@/lib/site";
import { CalendarIcon } from "./icons";

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Inicio">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url('${hero.image}')` }}
        role="img"
        aria-label="Interior de la barbería"
      />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__overlay-bottom" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__tag">{hero.tag}</p>

        <h1 className="hero__title">
          {hero.line1}
          <br />
          {hero.line2}
          <br />
          <em>{hero.line3}</em>
        </h1>

        <p className="hero__subtitle">{hero.subtitle}</p>

        <div className="hero__actions">
          <Link href="/#booking" className="btn btn--primary">
            <CalendarIcon />
            {hero.cta}
          </Link>
          <Link href="/#services" className="btn btn--secondary">
            Ver servicios
          </Link>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span>Scroll</span>
      </div>

      <div className="hero__stats" aria-hidden="true">
        {hero.stats.map((s) => (
          <div key={s.label} className="hero__stat">
            <span className="hero__stat-number">{s.num}</span>
            <span className="hero__stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
