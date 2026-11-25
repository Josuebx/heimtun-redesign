import { cacheLife } from "next/cache";

/** Årstallet i footeren – bufres og fornyes jevnlig. */
export async function Year() {
  "use cache";
  cacheLife("weeks");
  return <span>{new Date().getFullYear()}</span>;
}
