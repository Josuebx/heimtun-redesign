import Link from "next/link";
import type { ReactNode } from "react";
import { FjordIcon } from "@/components/icons/FjordIcon";

type Variant = "outline" | "solid" | "light";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  external?: boolean;
};

const variantClass: Record<Variant, string> = {
  outline: "",
  solid: "btn-solid",
  light: "btn-light",
};

/** Rektangulær knapp: fjordgrønn fyll stiger opp ved hover, pilen flytter seg 4px. */
export function Button({ href, children, variant = "outline", arrow = true, className = "", external }: Props) {
  const cls = `btn ${variantClass[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow ? <FjordIcon name="pil" size={18} className="btn-arrow" /> : null}
    </>
  );
  const isRaw = external || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http");
  if (isRaw) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
