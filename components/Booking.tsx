"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { calUsername, services } from "@/lib/site";
import { useBooking } from "./BookingProvider";

const NAMESPACE = "booking";

export default function Booking() {
  const { slug, setSlug } = useBooking();
  const service = services.find((s) => s.slug === slug) ?? services[0];

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": "#c9a84c" },
          dark: { "cal-brand": "#c9a84c" },
        },
      });
    })();
  }, []);

  return (
    <section className="booking" id="booking" aria-labelledby="booking-title">
      <div className="booking__inner">
        <p className="section-label js-fade-in">Reservas</p>
        <h2 className="section-title js-fade-in js-fade-in--delay-1" id="booking-title">
          Reserva tu <em>cita</em>
        </h2>
        <div className="u-gold-divider js-fade-in js-fade-in--delay-2" />

        <div role="group" aria-label="Elige un servicio" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {services.map((s) => (
            <button
              key={s.slug}
              type="button"
              aria-pressed={s.slug === service.slug}
              onClick={() => setSlug(s.slug)}
              className={`btn ${s.slug === service.slug ? "btn--primary" : "btn--secondary"}`}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="booking__embed">
          {/* key forces a fresh embed when the service changes */}
          <Cal
            key={service.calSlug}
            namespace={NAMESPACE}
            calLink={`${calUsername}/${service.calSlug}`}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view", theme: "dark" }}
          />
        </div>
      </div>
    </section>
  );
}
