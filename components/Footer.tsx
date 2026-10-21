import Link from "next/link";
import { services, site } from "@/lib/site";

const socialLabels: Record<string, string> = { ig: "Instagram", fb: "Facebook", yt: "YouTube", tt: "TikTok" };

export default function Footer() {
  const phoneClean = site.phone.replace(/[^0-9+]/g, "");

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <Link className="footer__logo" href="/" aria-label={site.name}>
            {site.name}
          </Link>
          <p className="footer__tagline">{site.footerTagline}</p>
          <div className="footer__social">
            {Object.entries(site.social).map(([handle, url]) => (
              <a
                key={handle}
                className="footer__social-link"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialLabels[handle] ?? handle}
              >
                {handle}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">Servicios</h3>
          <ul className="footer__links">
            {services.map((s) => (
              <li key={s.slug} className="footer__link-item">
                <Link className="footer__link" href="/#services">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">Barbería</h3>
          <ul className="footer__links">
            <li className="footer__link-item">
              <Link className="footer__link" href="/#about">Nosotros</Link>
            </li>
            <li className="footer__link-item">
              <Link className="footer__link" href="/#barbers">El equipo</Link>
            </li>
            <li className="footer__link-item">
              <Link className="footer__link" href="/#location">Ubicación</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">Reservas</h3>
          <ul className="footer__links">
            <li className="footer__link-item">
              <Link className="footer__link" href="/#booking">Reserva en línea</Link>
            </li>
            <li className="footer__link-item">
              <a className="footer__link" href={`tel:${phoneClean}`}>Llámanos</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} {site.name}. Todos los derechos reservados. Desarrollado por{" "}
          <a href={site.credit.url}>{site.credit.label}</a>
        </p>
        <nav className="footer__policy" aria-label="Enlaces legales">
          <Link className="footer__policy-link" href="/politica-de-privacidad">Política de privacidad</Link>
          <Link className="footer__policy-link" href="/terminos-de-servicio">Condiciones de servicio</Link>
        </nav>
      </div>
    </footer>
  );
}
