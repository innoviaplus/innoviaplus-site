import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { listPages } from "@/lib/kv";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    { url: "https://innoviaplus.com", changeFrequency: "monthly" as const, priority: 1 },
    { url: "https://innoviaplus.com/hakkimizda", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "https://innoviaplus.com/iletisim", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "https://innoviaplus.com/hizmetlerimiz", changeFrequency: "monthly" as const, priority: 0.9 },
  ];

  const servicePages = services.map((s) => ({
    url: `https://innoviaplus.com${s.href}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  let dynamicPages: MetadataRoute.Sitemap = [];
  try {
    const pages = await listPages();
    dynamicPages = pages
      .filter((p) => p.published)
      .map((p) => ({
        url: `https://innoviaplus.com/${p.slug}`,
        changeFrequency: "weekly" as const,
        priority: 0.6,
        lastModified: p.updatedAt,
      }));
  } catch {}

  return [...staticPages, ...servicePages, ...dynamicPages];
}
