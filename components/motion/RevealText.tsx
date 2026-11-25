"use client";

import { useInView } from "framer-motion";
import { useLayoutEffect, useRef, useState, type ElementType } from "react";

/**
 * Overskrift som avdukes linje for linje bak en maske.
 * Hvert ord ligger i sin egen maske; ord på samme visuelle linje får samme
 * forsinkelse (linje × 80 ms), så linjene glir opp samlet: translateY 100% → 0,
 * 700 ms, ease [0.22, 1, 0.36, 1].
 *
 * `immediate` (brukes i toppseksjoner): et lite inline-skript måler linjene
 * allerede mens HTML-en leses inn, og animasjonen starter med CSS ved første
 * opptegning – uten å vente på JavaScript-bunten. Gir rask LCP.
 * Ellers starter animasjonen når overskriften kommer inn i bildet.
 */
type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  /** Ekstra forsinkelse før første linje (ms) */
  delay?: number;
  id?: string;
  immediate?: boolean;
};

const MEASURE = `(function(s){var h=s.parentNode,w=h.querySelectorAll('.rw'),t=[];for(var i=0;i<w.length;i++){var y=w[i].offsetTop,k=-1;for(var j=0;j<t.length;j++){if(Math.abs(t[j]-y)<4){k=j;break}}if(k<0){t.push(y);k=t.length-1}w[i].firstChild.style.setProperty('--line',k)}h.setAttribute('data-rw-now','')})(document.currentScript)`;

export function RevealText({ text, as = "h2", className = "", delay = 0, id, immediate = false }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const [lines, setLines] = useState<number[]>([]);

  useLayoutEffect(() => {
    if (immediate) return;
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const words = Array.from(el.querySelectorAll<HTMLElement>(".rw"));
      const tops: number[] = [];
      const idx = words.map((w) => {
        const t = Math.round(w.offsetTop);
        let i = tops.findIndex((x) => Math.abs(x - t) < 4);
        if (i === -1) {
          tops.push(t);
          i = tops.length - 1;
        }
        return i;
      });
      setLines(idx);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [text, immediate]);

  const words = text.split(/\s+/).filter(Boolean);
  const Tag = as;

  return (
    <Tag
      ref={ref}
      id={id}
      className={`${className} ${!immediate && inView ? "is-in" : ""}`}
      aria-label={text}
      suppressHydrationWarning
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden="true">
          <span className="rw">
            <span
              className="rw-i"
              suppressHydrationWarning
              style={
                immediate
                  ? { ["--base" as string]: `${delay}ms` }
                  : { ["--line" as string]: lines[i] ?? 0, ["--base" as string]: `${delay}ms` }
              }
            >
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
      {immediate ? <script dangerouslySetInnerHTML={{ __html: MEASURE }} /> : null}
    </Tag>
  );
}
