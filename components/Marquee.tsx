import { marquee } from "@/lib/site";

export default function Marquee() {
  // The track scrolls -50%, so one half must equal the other. Four copies guarantee a gap-free loop on wide screens.
  const items = [...marquee, ...marquee, ...marquee, ...marquee];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__inner">
        {items.map((item, i) => (
          <span key={i} className="marquee__item">
            {item}
            <span className="marquee__dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
