import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { PageData, PageListItem } from "./types";

function getKv(): KVNamespace | null {
  try {
    const ctx = getCloudflareContext();
    return ctx.env.INNOVIAPLUS_DATA as KVNamespace;
  } catch {
    return null;
  }
}

export async function listPages(): Promise<PageListItem[]> {
  const kv = getKv();
  if (!kv) return [];
  const idsJson = await kv.get("pages:all");
  if (!idsJson) return [];
  const ids: string[] = JSON.parse(idsJson);
  const pages: PageListItem[] = [];
  for (const id of ids) {
    const raw = await kv.get(`page:${id}`);
    if (raw) {
      const p = JSON.parse(raw) as PageData;
      pages.push({ id: p.id, title: p.title, slug: p.slug, published: p.published, updatedAt: p.updatedAt });
    }
  }
  return pages.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}

export async function getPage(id: string): Promise<PageData | null> {
  const kv = getKv();
  if (!kv) return null;
  const raw = await kv.get(`page:${id}`);
  if (!raw) return null;
  return JSON.parse(raw) as PageData;
}

export async function getPageBySlug(slug: string): Promise<PageData | null> {
  const kv = getKv();
  if (!kv) return null;
  const idsJson = await kv.get("pages:all");
  if (!idsJson) return null;
  const ids: string[] = JSON.parse(idsJson);
  for (const id of ids) {
    const raw = await kv.get(`page:${id}`);
    if (raw) {
      const p = JSON.parse(raw) as PageData;
      if (p.slug === slug && p.published) return p;
    }
  }
  return null;
}

export async function createPage(data: Omit<PageData, "id" | "createdAt" | "updatedAt">): Promise<PageData> {
  const kv = getKv();
  if (!kv) throw new Error("KV not available");
  const id = crypto.randomUUID();
  const now = new Date().toISOString();
  const page: PageData = { ...data, id, createdAt: now, updatedAt: now };
  await kv.put(`page:${id}`, JSON.stringify(page));

  const idsJson = await kv.get("pages:all");
  const ids: string[] = idsJson ? JSON.parse(idsJson) : [];
  ids.push(id);
  await kv.put("pages:all", JSON.stringify(ids));

  return page;
}

export async function updatePage(id: string, data: Partial<Omit<PageData, "id" | "createdAt">>): Promise<PageData | null> {
  const kv = getKv();
  if (!kv) return null;
  const raw = await kv.get(`page:${id}`);
  if (!raw) return null;
  const page = JSON.parse(raw) as PageData;
  const updated: PageData = { ...page, ...data, id: page.id, createdAt: page.createdAt, updatedAt: new Date().toISOString() };
  await kv.put(`page:${id}`, JSON.stringify(updated));
  return updated;
}

export async function deletePage(id: string): Promise<boolean> {
  const kv = getKv();
  if (!kv) return false;
  const raw = await kv.get(`page:${id}`);
  if (!raw) return false;
  await kv.delete(`page:${id}`);

  const idsJson = await kv.get("pages:all");
  if (idsJson) {
    const ids: string[] = JSON.parse(idsJson);
    const filtered = ids.filter((x) => x !== id);
    await kv.put("pages:all", JSON.stringify(filtered));
  }
  return true;
}

export function verifyAdmin(password: string): boolean {
  return password === process.env.ADMIN_PASSWORD;
}
