import Image from "next/image";
import { barbers } from "@/lib/site";

export default function Barbers() {
  return (
    <section className="barbers" id="barbers" aria-labelledby="barbers-title">
      <header className="barbers__header">
        <p className="section-label js-fade-in" style={{ justifyContent: "center" }}>
          El equipo
        </p>
        <h2 className="section-title js-fade-in js-fade-in--delay-1" id="barbers-title" style={{ textAlign: "center" }}>
          Conoce a los <em>Artistas</em>
        </h2>
      </header>

      <div className="barbers__grid">
        {barbers.map((b, i) => (
          <article key={b.name} className={`barber-card js-fade-in js-fade-in--delay-${Math.min(i + 1, 4)}`}>
            <Image className="barber-card__image" src={b.photo} alt={b.name} width={600} height={420} />

            <div className="barber-card__info">
              <span className="barber-card__role">{b.role}</span>
              <span className="barber-card__name">{b.name}</span>
              {b.experience && <span className="barber-card__experience">{b.experience}</span>}

              {(b.instagram || b.facebook) && (
                <div className="barber-card__social">
                  {b.instagram && (
                    <a className="barber-card__social-link" href={b.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${b.name} en Instagram`}>
                      ig
                    </a>
                  )}
                  {b.facebook && (
                    <a className="barber-card__social-link" href={b.facebook} target="_blank" rel="noopener noreferrer" aria-label={`${b.name} en Facebook`}>
                      fb
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
