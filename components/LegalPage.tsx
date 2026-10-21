export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main id="main-content" tabIndex={-1} style={{ minHeight: "80vh", padding: "160px var(--container-pad) 100px" }}>
      <div style={{ maxWidth: 760, marginInline: "auto" }}>
        <h1 className="section-title">{title}</h1>
        <div className="u-gold-divider" />
        <div style={{ fontFamily: "var(--font-elegant)", fontSize: "1.25rem", color: "var(--color-gray-light)", lineHeight: 1.8 }}>
          {children}
        </div>
      </div>
    </main>
  );
}
