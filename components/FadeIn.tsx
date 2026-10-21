"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Reveals every `.js-fade-in` element once it scrolls into view. Port of initFadeIn() from main.js. */
export default function FadeIn() {
  const pathname = usePathname();

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".js-fade-in:not(.js-fade-in--visible)");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("js-fade-in--visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("js-fade-in--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
