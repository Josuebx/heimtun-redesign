import Link from "next/link";

/**
 * Heimtun-logoen: det røde &-merket (vektorisert fra originalen) + ordmerke i Manrope.
 * Rødfargen brukes kun her, som aksent.
 */
export function Logo({ className = "", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Heimtun Regnskap & Rådgivning – til forsiden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/heimtun-mark.svg" alt="" width={36} height={36} className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.0625rem] font-medium tracking-[-0.02em]">Heimtun</span>
        <span className="mt-1 text-[0.75rem] tracking-[0.04em] text-muted">Regnskap &amp; Rådgivning</span>
      </span>
    </Link>
  );
}
