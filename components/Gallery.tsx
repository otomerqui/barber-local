import Image from "next/image";
import { gallery } from "@/lib/site";

export default function Gallery() {
  return (
    <section className="gallery" aria-label="Galería">
      {gallery.slice(0, 6).map((item) => (
        <div key={item.label} className="gallery__item">
          <Image className="gallery__image" src={item.image} alt={item.alt} width={600} height={400} />
          <div className="gallery__overlay" aria-hidden="true">
            <span className="gallery__label">{item.label}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
