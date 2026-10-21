import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: "Condiciones de servicio" };

export default function Page() {
  return (
    <LegalPage title="Condiciones de servicio">
      <p>Reemplaza este texto con las condiciones de servicio del negocio antes de publicar el sitio.</p>
    </LegalPage>
  );
}
