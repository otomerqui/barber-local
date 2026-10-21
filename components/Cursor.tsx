"use client";

import { useEffect, useRef } from "react";

const HOVER_SELECTOR = "a, button, [data-blade-modal-trigger], .service-card, .gallery__item, .barber-card";

/** Custom gold cursor (dot + trailing ring). Skipped on touch devices. Port of initCursor() from main.js. */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dotEl = dot.current;
    const ringEl = ring.current;
    if (!dotEl || !ringEl) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const tick = () => {
      dotEl.style.left = `${mx}px`;
      dotEl.style.top = `${my}px`;
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ringEl.style.left = `${rx}px`;
      ringEl.style.top = `${ry}px`;
      raf = requestAnimationFrame(tick);
    };
    const setHover = (on: boolean) => {
      dotEl.classList.toggle("cursor--hover", on);
      ringEl.classList.toggle("cursor__ring--hover", on);
    };
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest?.(HOVER_SELECTOR)) setHover(true);
    };
    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as Element | null;
      if (!related?.closest?.(HOVER_SELECTOR)) setHover(false);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor" aria-hidden="true" />
      <div ref={ring} className="cursor__ring" aria-hidden="true" />
    </>
  );
}
