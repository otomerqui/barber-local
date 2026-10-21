import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Política de privacidad" };

export default function Page() {
  return (
    <LegalPage title="Política de privacidad">
      <p>Reemplaza este texto con la política de privacidad del negocio antes de publicar el sitio.</p>
    </LegalPage>
  );
}
