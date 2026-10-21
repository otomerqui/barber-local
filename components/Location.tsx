import Link from "next/link";
import { mapEmbedUrl, site } from "@/lib/site";

export default function Location() {
  const phoneClean = site.phone.replace(/[^0-9+]/g, "");

  return (
    <section className="location" id="location" aria-labelledby="location-title">
      <div className="location__inner">
        <div className="location__text js-fade-in">
          <p className="section-label">Encuéntranos</p>

          <h2 className="section-title" id="location-title">
            En el corazón
            <br />
            de la <em>ciudad</em>
          </h2>

          <div className="u-gold-divider" />

          <ul className="location__items" role="list">
            <li className="location__item">
              <div className="location__item-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true" focusable="false">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <span className="location__item-label">Dirección</span>
                <address className="location__item-value" style={{ fontStyle: "normal" }}>
                  {site.address}
                  <br />
                  {site.cityState}
                </address>
              </div>
            </li>

            <li className="location__item">
              <div className="location__item-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true" focusable="false">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <span className="location__item-label">Horario de atención</span>
                <div className="location__item-value">
                  <dl className="location__hours">
                    {site.hours.map((row) => (
                      <div key={row.day} className="location__hours-row">
                        <dt>{row.day}</dt>
                        <dd>{row.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </li>

            <li className="location__item">
              <div className="location__item-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true" focusable="false">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.9a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <span className="location__item-label">Reserva por teléfono</span>
                <span className="location__item-value">
                  <a href={`tel:${phoneClean}`} style={{ color: "inherit", textDecoration: "none" }}>
                    {site.phone}
                  </a>
                </span>
              </div>
            </li>
          </ul>

          <div className="location__cta">
            <Link href="/#booking" className="btn btn--primary">
              Reserva en línea
            </Link>
          </div>
        </div>

        <div className="location__map js-fade-in js-fade-in--delay-2">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, display: "block", width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa de ${site.name}`}
          />
        </div>
      </div>
    </section>
  );
}
