import Image from "next/image";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <span className="testimonials__bg-text" aria-hidden="true">AMOR</span>

      <header className="testimonials__header">
        <p className="section-label js-fade-in">Reseñas de clientes</p>
        <h2 className="section-title js-fade-in js-fade-in--delay-1" id="testimonials-title">
          Lo que nuestros <em>clientes</em>
          <br />
          están diciendo
        </h2>
      </header>

      <div className="testimonials__grid">
        {testimonials.map((t, i) => (
          <article key={t.author} className={`testimonial-card js-fade-in js-fade-in--delay-${Math.min(i + 1, 4)}`}>
            <span className="testimonial-card__stars" aria-label={`${t.stars} de 5 estrellas`}>
              {"★".repeat(t.stars)}
            </span>
            <span className="testimonial-card__quote" aria-hidden="true">&quot;</span>
            <blockquote className="testimonial-card__text">{t.text}</blockquote>
            <footer className="testimonial-card__author">
              <Image className="testimonial-card__avatar" src={t.avatar} alt={t.author} width={48} height={48} />
              <div>
                <span className="testimonial-card__name">{t.author}</span>
                <span className="testimonial-card__meta">{t.meta}</span>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
