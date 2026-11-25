import Link from "next/link";
import type { Service } from "@/content/services";
import { FjordIcon } from "@/components/icons/FjordIcon";

/** Kort: løfter seg 2px, kanten går fra linjefarge til blekk, pilen dukker opp. */
export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      href={`/tjenester#${service.slug}`}
      className="card group flex h-full flex-col justify-between gap-10 p-6 md:p-7"
    >
      <div className="flex items-start justify-between">
        <FjordIcon name={service.icon} size={32} />
        <span className="text-[0.8125rem] tabular-nums text-muted">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div>
        <h3 className="font-display text-[1.3125rem] leading-snug">{service.title}</h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{service.summary}</p>
        <span className="mt-5 flex items-center gap-2 text-[0.875rem] text-fjord">
          <span>Les mer</span>
          <FjordIcon name="pil" size={18} className="card-arrow" />
        </span>
      </div>
    </Link>
  );
}
