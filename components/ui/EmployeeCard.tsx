import Image from "next/image";
import type { Employee } from "@/content/team";
import { FjordIcon } from "@/components/icons/FjordIcon";

function initials(name: string) {
  const parts = name.replace(/\./g, "").split(/\s+/).filter(Boolean);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

function telHref(phone: string) {
  return `tel:+47${phone.replace(/\s/g, "")}`;
}

export function EmployeeCard({ person }: { person: Employee }) {
  return (
    <article className="card group flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden border-b border-line">
        {person.photo ? (
          <Image src={person.photo} alt={person.name} fill sizes="(min-width: 1024px) 280px, 50vw" className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5" aria-hidden="true">
            <FjordIcon name="team" size={24} className="text-muted" />
            <div>
              <span className="block font-display text-[clamp(3rem,6vw,4.5rem)] leading-none tracking-[-0.04em] text-ink/85">
                {initials(person.name)}
              </span>
              {/* horisontlinjen */}
              <span className="mt-5 block h-px w-full bg-line transition-colors duration-500 group-hover:bg-fjord" />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <h3 className="font-display text-[1.125rem] leading-snug">{person.name}</h3>
        {person.title ? <p className="-mt-2 text-[0.875rem] text-muted">{person.title}</p> : null}
        <ul className="mt-auto space-y-1 text-[0.8125rem] sm:text-[0.875rem]">
          <li>
            <a href={telHref(person.phone)} className="ulink" aria-label={`Ring ${person.name}, ${person.phone}`}>
              {person.phone}
            </a>
          </li>
          <li className="[overflow-wrap:anywhere]">
            <a href={`mailto:${person.email}`} className="ulink" aria-label={`Send e-post til ${person.name}, ${person.email}`}>
              {person.email}
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
