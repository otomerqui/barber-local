import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "120px 60px" }}
    >
      <div>
        <p
          aria-hidden="true"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(6rem, 18vw, 14rem)", color: "rgba(201,168,76,0.1)", lineHeight: 1, userSelect: "none" }}
        >
          404
        </p>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-white)", marginTop: -40, marginBottom: 24 }}>
          Página no encontrada
        </h1>
        <p style={{ fontFamily: "var(--font-elegant)", fontSize: "1.25rem", color: "var(--color-gray)", maxWidth: 440, margin: "0 auto 48px" }}>
          La página que buscas se fue a cortar el pelo y no ha vuelto.
        </p>
        <Link href="/" className="btn btn--primary">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
