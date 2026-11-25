"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FjordIcon } from "@/components/icons/FjordIcon";

/**
 * Kontaktskjema uten egen server: validerer i nettleseren og åpner
 * e-postprogrammet med meldingen ferdig utfylt (mailto).
 * Se README for hvordan du kobler det til en e-posttjeneste.
 */
type Props = {
  to: string;
  consentText: string;
  note: string;
  successText: string;
};

type Errors = Partial<Record<"navn" | "epost" | "melding" | "samtykke", string>>;

const field =
  "w-full rounded-[2px] border border-line bg-transparent px-4 py-3 text-[1rem] outline-none transition-colors duration-300 placeholder:text-muted/70 hover:border-ink/50 focus:border-ink focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-fjord aria-[invalid=true]:border-[#8a2a1f]";

export function ContactForm({ to, consentText, note, successText }: Props) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const navn = String(fd.get("navn") ?? "").trim();
    const epost = String(fd.get("epost") ?? "").trim();
    const telefon = String(fd.get("telefon") ?? "").trim();
    const emne = String(fd.get("emne") ?? "").trim();
    const melding = String(fd.get("melding") ?? "").trim();
    const samtykke = fd.get("samtykke") === "on";

    const next: Errors = {};
    if (!navn) next.navn = "Skriv inn navnet ditt.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(epost)) next.epost = "Skriv inn en gyldig e-postadresse.";
    if (melding.length < 5) next.melding = "Skriv en kort melding.";
    if (!samtykke) next.samtykke = "Du må godta at vi kan kontakte deg.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      (e.currentTarget.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    const subject = emne || `Henvendelse fra ${navn}`;
    const body = [melding, "", "—", navn, epost, telefon].filter((l) => l !== undefined).join("\n");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-feil`} className="mt-2 text-[0.875rem] text-[#8a2a1f]">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6" aria-describedby="skjema-note">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="navn" className="mb-2 block text-[0.875rem]">
            Navn <span className="text-muted">(obligatorisk)</span>
          </label>
          <input
            id="navn"
            name="navn"
            autoComplete="name"
            className={field}
            aria-invalid={!!errors.navn}
            aria-describedby={errors.navn ? "navn-feil" : undefined}
          />
          {err("navn")}
        </div>
        <div>
          <label htmlFor="epost" className="mb-2 block text-[0.875rem]">
            E-post <span className="text-muted">(obligatorisk)</span>
          </label>
          <input
            id="epost"
            name="epost"
            type="email"
            autoComplete="email"
            className={field}
            aria-invalid={!!errors.epost}
            aria-describedby={errors.epost ? "epost-feil" : undefined}
          />
          {err("epost")}
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="telefon" className="mb-2 block text-[0.875rem]">
            Telefon
          </label>
          <input id="telefon" name="telefon" type="tel" autoComplete="tel" className={field} />
        </div>
        <div>
          <label htmlFor="emne" className="mb-2 block text-[0.875rem]">
            Emne
          </label>
          <input id="emne" name="emne" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="melding" className="mb-2 block text-[0.875rem]">
          Melding <span className="text-muted">(obligatorisk)</span>
        </label>
        <textarea
          id="melding"
          name="melding"
          rows={6}
          className={`${field} resize-y`}
          aria-invalid={!!errors.melding}
          aria-describedby={errors.melding ? "melding-feil" : undefined}
        />
        {err("melding")}
      </div>
      <div>
        <label className="flex cursor-pointer items-start gap-3 text-[0.9375rem]">
          <input
            type="checkbox"
            name="samtykke"
            className="peer sr-only"
            aria-invalid={!!errors.samtykke}
            aria-describedby={errors.samtykke ? "samtykke-feil" : undefined}
          />
          <span
            aria-hidden="true"
            className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-[2px] border border-ink text-transparent transition-colors duration-300 peer-checked:border-fjord peer-checked:bg-fjord peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-fjord"
          >
            <FjordIcon name="sjekk" size={14} />
          </span>
          <span>{consentText}</span>
        </label>
        {err("samtykke")}
      </div>

      <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p id="skjema-note" className="max-w-[40ch] text-[0.875rem] text-muted">
          {note}
        </p>
        <button type="submit" className="btn btn-solid shrink-0">
          <span>Send melding</span>
          <FjordIcon name="pil" size={18} className="btn-arrow" />
        </button>
      </div>

      <div aria-live="polite">
        <AnimatePresence>
          {sent ? (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-3 border border-fjord p-4 text-[0.9375rem]"
            >
              <FjordIcon name="sjekk" size={20} className="mt-0.5 shrink-0 text-fjord" />
              {successText}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </form>
  );
}
