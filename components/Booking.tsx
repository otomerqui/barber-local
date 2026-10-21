"use client";

//import Cal, { getCalApi } from "@calcom/embed-react";
//import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { calUsername, services } from "@/lib/site";
import { useBooking } from "./BookingProvider";

const NAMESPACE = "booking";
const CalEmbed = dynamic(() => import("./CalEmbed"), { ssr: false });

export default function Booking() {
  const { slug, setSlug } = useBooking();
  const service = services.find((s) => s.slug === slug) ?? services[0];

    const embedRef = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = embedRef.current;
    if (!el || load) return;
    if (!("IntersectionObserver" in window)) return setLoad(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [load]);

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

        <div className="booking__embed" ref={embedRef}>
          {load && <CalEmbed key={service.calSlug} calLink={`${calUsername}/${service.calSlug}`} />}
        </div>
      </div>
    </section>
  );
}
