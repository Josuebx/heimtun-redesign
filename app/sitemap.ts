import type { MetadataRoute } from "next";
import { company } from "@/content/site";

const routes = ["", "/tjenester", "/poweroffice-go", "/om-oss", "/ledige-stillinger", "/kontakt-oss", "/personvern"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${company.url}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
