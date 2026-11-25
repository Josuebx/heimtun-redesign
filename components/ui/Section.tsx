import type { ReactNode } from "react";

/** 12-kolonners grid, maks 1200px. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Grid({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`grid grid-cols-4 gap-x-5 sm:gap-x-6 md:grid-cols-12 ${className}`}>{children}</div>;
}

/** Redaksjonell nummerering: «01 — Regnskap» over en 1px linje. */
export function SectionLabel({ index, label, className = "" }: { index?: number | string; label: string; className?: string }) {
  const num = typeof index === "number" ? String(index).padStart(2, "0") : index;
  return (
    <div className={`flex items-baseline gap-3 border-t border-line pt-4 text-[0.8125rem] tracking-[0.06em] text-muted ${className}`}>
      {num ? <span className="tabular-nums text-ink">{num}</span> : null}
      {num ? <span aria-hidden="true">—</span> : null}
      <span className="uppercase">{label}</span>
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}
