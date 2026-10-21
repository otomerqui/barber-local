export function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

// Default service icons from the WordPress theme (cycled by card index).
export const serviceIcons: React.ReactNode[] = [
  <g key="0"><path d="M6 3 C6 3, 9 7, 12 12 C15 7, 18 3, 18 3" /><path d="M12 12 L12 20" /><circle cx="12" cy="22" r="1.5" /></g>,
  <g key="1"><path d="M12 2 L12 22M2 12 L22 12" /><circle cx="12" cy="12" r="4" /></g>,
  <g key="2"><path d="M5 3 C5 3 3 12 5 17 C7 22 12 22 12 22 C12 22 17 22 19 17 C21 12 19 3 19 3" /><path d="M8 8 L16 8" /></g>,
  <g key="3"><path d="M7 3 L17 21M7 3 C7 3 12 6 17 21" /></g>,
  <g key="4"><circle cx="12" cy="8" r="4" /><path d="M4 20 C4 16 8 14 12 14 C16 14 20 16 20 20" /></g>,
  <g key="5"><path d="M12 2 C12 2 6 7 6 13 A6 6 0 0 0 18 13 C18 7 12 2 12 2Z" /></g>,
];
