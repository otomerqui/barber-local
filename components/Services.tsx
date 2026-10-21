"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { formatCOP, services, type Service } from "@/lib/site";
import { useBooking } from "./BookingProvider";
import { CalendarIcon, serviceIcons } from "./icons";

function ServiceCard({
  service,
  index,
  featured = false,
  onOpen,
}: {
  service: Service;
  index: number;
  featured?: boolean;
  onOpen: (s: Service) => void;
}) {
  return (
    <article
      className={`service-card${featured ? " service-card--featured" : ""}`}
      data-blade-modal-trigger
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-label={`Ver detalles de ${service.name}`}
      onClick={() => onOpen(service)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(service);
        }
      }}
    >
      <div className="service-card__inner">
        {featured && <span className="service-card__badge">Más popular</span>}

        <div
          className="service-card__bg"
          style={{ backgroundImage: `url('${service.image}')` }}
          role="img"
          aria-label={service.name}
        />

        <span className="service-card__number" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="service-card__content">
          <div className="service-card__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true" focusable="false">
              {serviceIcons[index % serviceIcons.length]}
            </svg>
          </div>

          <h3 className="service-card__name">{service.name}</h3>
          <p className="service-card__excerpt">{service.shortDesc}</p>

          <div className="service-card__footer">
            <div className="service-card__price">
              {formatCOP(service.price)}
              <span className="service-card__price-meta">Tiempo · {service.duration}</span>
            </div>
            <div className="service-card__arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" focusable="false">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  const { setSlug } = useBooking();
  const [active, setActive] = useState<Service | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Same split as the WordPress template: featured first, then 2 cards, then the rest.
  const featured = services.find((s) => s.featured) ?? null;
  const standard = services.filter((s) => s !== featured);
  const col2 = standard.slice(0, 2);
  const col3 = standard.slice(2);

  // Modal behaviour: lock scroll, focus close button, close on Escape
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    if (!active) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const bookActive = (e: React.MouseEvent) => {
    e.preventDefault();
    if (active) setSlug(active.slug);
    setActive(null);
    requestAnimationFrame(() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" }));
  };

  return (
    <>
      <section className="services" id="services" aria-labelledby="services-title">
        <span className="services__bg-text" aria-hidden="true">CORTE</span>

        <header className="services__header">
          <div>
            <p className="section-label js-fade-in">Lo que ofrecemos</p>
            <h2 className="section-title js-fade-in js-fade-in--delay-1" id="services-title">
              Nuestros <em>Servicios</em>
              <br />
              Exclusivos
            </h2>
          </div>
          <p className="services__description js-fade-in js-fade-in--delay-2">
            Cada servicio es un ritual cuidadosamente planificado. Elija lo que más le atraiga, nosotros nos encargaremos del resto con maestría.
          </p>
        </header>

        <div className="services__grid">
          {featured && (
            <div className="services__col services__col--featured">
              <ServiceCard service={featured} index={0} featured onOpen={setActive} />
            </div>
          )}
          <div className="services__col">
            {col2.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={featured ? i + 1 : i} onOpen={setActive} />
            ))}
          </div>
          {col3.length > 0 && (
            <div className="services__col">
              {col3.map((s, i) => (
                <ServiceCard key={s.slug} service={s} index={featured ? i + 3 : i + 2} onOpen={setActive} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Service modal */}
      <div
        className={`modal${active ? " modal--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-hidden={!active}
        onClick={(e) => e.target === e.currentTarget && setActive(null)}
      >
        <div className="modal__panel">
          <button ref={closeRef} className="modal__close" aria-label="Cerrar" onClick={() => setActive(null)}>
            &#x2715;
          </button>

          {active && <Image className="modal__image" src={active.image} alt={active.name} width={800} height={220} />}

          <div className="modal__body">
            <span className="modal__tag">{active?.tag}</span>
            <h2 className="modal__title" id="modal-title">{active?.name}</h2>
            <p className="modal__description">{active?.longDesc}</p>

            <div className="modal__details">
              <div className="modal__detail">
                <span className="modal__detail-label">Desde</span>
                <span className="modal__detail-value">{active ? `${formatCOP(active.price)} COP` : ""}</span>
              </div>
              <div className="modal__detail">
                <span className="modal__detail-label">Duración</span>
                <span className="modal__detail-value">{active?.duration}</span>
              </div>
            </div>

            <div className="modal__actions">
              <a href="#booking" className="btn btn--primary btn--full" onClick={bookActive}>
                <CalendarIcon />
                Reservar este servicio
              </a>
              <button className="btn btn--secondary" onClick={() => setActive(null)}>
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
