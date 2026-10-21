"use client";

import { createContext, useContext, useState } from "react";
import { services } from "@/lib/site";

type Ctx = { slug: string; setSlug: (slug: string) => void };

const BookingContext = createContext<Ctx>({ slug: services[0].slug, setSlug: () => {} });

/** Shares the selected service between the service modal and the booking section. */
export default function BookingProvider({ children }: { children: React.ReactNode }) {
  const [slug, setSlug] = useState(services[0].slug);
  return <BookingContext.Provider value={{ slug, setSlug }}>{children}</BookingContext.Provider>;
}

export const useBooking = () => useContext(BookingContext);
