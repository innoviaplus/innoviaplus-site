"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { PageData, PageListItem } from "@/lib/types";

const emptyForm: Omit<PageData, "id" | "createdAt" | "updatedAt"> = {
  title: "", slug: "", metaTitle: "", metaDescription: "",
  shortContent: "", longContent: "", imageUrl: "", imageAlt: "",
  publishDate: "", faqs: [], geoTags: [], mapIframe: "", published: false,
  schemaType: "None",
};

function getPassword(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem("admin_password");
}

export default function AdminDashboard() {
  const router = useRouter();
  const [pages, setPages] = useState<PageListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [formMode, setFormMode] = useState<"none" | "new" | "edit">("none");
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const password = getPassword();

  const loadPages = useCallback(async () => {
    try {
      const res = await fetch("/api/pages");
      if (res.ok) setPages(await res.json());
    } catch {} finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!password) { router.push("/admin/login"); return; }
    loadPages();
  }, [password, router, loadPages]);

  useEffect(() => {
    document.body.classList.add("admin-dashboard");
    return () => document.body.classList.remove("admin-dashboard");
  }, []);

  function handleLogout() {
    sessionStorage.removeItem("admin_password");
    router.push("/admin/login");
  }

  function startNew() {
    setForm(emptyForm);
    setEditingId(null);
    setFormMode("new");
  }

  async function startEdit(id: string) {
    const res = await fetch(`/api/pages/${id}`);
    if (!res.ok) return;
    const data: PageData = await res.json();
    setForm({
      title: data.title, slug: data.slug, metaTitle: data.metaTitle,
      metaDescription: data.metaDescription, shortContent: data.shortContent,
      longContent: data.longContent, imageUrl: data.imageUrl, imageAlt: data.imageAlt,
      publishDate: data.publishDate, faqs: data.faqs || [],
      geoTags: data.geoTags || [], mapIframe: data.mapIframe || "",
      published: data.published, schemaType: data.schemaType || "None",
    });
    setEditingId(id);
    setFormMode("edit");
  }

  async function handleSave() {
    if (!password) return;
    setSaving(true);
    try {
      const url = formMode === "new" ? "/api/pages" : `/api/pages/${editingId}`;
      const method = formMode === "new" ? "POST" : "PUT";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, password }),
      });
      if (res.ok) {
        await fetch("/api/revalidate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password, slug: form.slug }),
        });
        setFormMode("none");
        await loadPages();
      }
    } catch {} finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!password || !confirm("Silmek istediğinize emin misiniz?")) return;
    await fetch(`/api/pages/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    await loadPages();
  }

  function updateForm(field: string, value: unknown) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function addFaq() {
    setForm((prev) => ({ ...prev, faqs: [...prev.faqs, { question: "", answer: "" }] }));
  }

  function updateFaq(index: number, field: "question" | "answer", value: string) {
    const faqs = [...form.faqs];
    faqs[index] = { ...faqs[index], [field]: value };
    updateForm("faqs", faqs);
  }

  function removeFaq(index: number) {
    updateForm("faqs", form.faqs.filter((_, i) => i !== index));
  }

  function addGeoTag() {
    updateForm("geoTags", [...form.geoTags, ""]);
  }

  function updateGeoTag(index: number, value: string) {
    const geoTags = [...form.geoTags];
    geoTags[index] = value;
    updateForm("geoTags", geoTags);
  }

  function removeGeoTag(index: number) {
    updateForm("geoTags", form.geoTags.filter((_, i) => i !== index));
  }

  if (!password) return null;

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-zinc-50 text-sm text-zinc-500">Yükleniyor...</div>;
  }

  return (
    <>
      <style>{`
        body.admin-dashboard > div:has(a[href^="mailto"]),
        body.admin-dashboard > div:has(img[alt="Innovia Plus"]),
        body.admin-dashboard > footer {
          display: none;
        }
      `}</style>
      <div className="min-h-screen bg-zinc-50 w-full max-w-full overflow-x-hidden">
        <div className="bg-white border-b border-zinc-200">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-[#FF6900] to-orange-500 rounded-xl flex items-center justify-center shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h1 className="text-base font-semibold text-zinc-900">Admin Paneli</h1>
                <p className="text-[11px] text-zinc-400 leading-none mt-0.5">Sayfa Yönetimi</p>
              </div>
            </div>
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Çıkış Yap</button>
          </div>
        </div>
        <div className="max-w-5xl mx-auto w-full px-4 py-6">

        {formMode === "none" ? (
          <>
            <button onClick={startNew} className="bg-[#FF6900] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors mb-4">
              + Yeni Sayfa
            </button>
            {pages.length === 0 ? (
              <p className="text-zinc-500 text-sm">Henüz sayfa eklenmemiş.</p>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-100 text-left text-zinc-500">
                      <th className="px-4 py-3 font-medium">Başlık</th>
                      <th className="px-4 py-3 font-medium hidden sm:table-cell">Slug</th>
                      <th className="px-4 py-3 font-medium">Durum</th>
                      <th className="px-4 py-3 font-medium hidden sm:table-cell">Güncelleme</th>
                      <th className="px-4 py-3 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {pages.map((p) => (
                      <tr key={p.id} className="border-b border-zinc-50 hover:bg-zinc-50 cursor-pointer" onClick={() => startEdit(p.id)}>
                        <td className="px-4 py-3 font-medium text-zinc-800 break-words">{p.title}</td>
                        <td className="px-4 py-3 text-zinc-500 hidden sm:table-cell">/{p.slug}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${p.published ? "bg-green-100 text-green-700" : "bg-zinc-100 text-zinc-500"}`}>
                            {p.published ? "Yayında" : "Taslak"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-zinc-500 hidden sm:table-cell">{new Date(p.updatedAt).toLocaleDateString("tr-TR")}</td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-3">
                            <a href={`/${p.slug}`} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#FF6900] transition-colors" onClick={(e) => e.stopPropagation()}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                              </svg>
                            </a>
                            <button onClick={(e) => { e.stopPropagation(); handleDelete(p.id); }} className="text-red-400 hover:text-red-600 text-xs">
                              Sil
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-zinc-800 mb-4">{formMode === "new" ? "Yeni Sayfa" : "Sayfayı Düzenle"}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1">Başlık</label>
                <input value={form.title} onChange={(e) => updateForm("title", e.target.value)} className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FF6900]" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1">Slug (URL)</label>
                <input value={form.slug} onChange={(e) => updateForm("slug", e.target.value)} className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FF6900]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1">Meta Başlık (SEO)</label>
                <input value={form.metaTitle} onChange={(e) => updateForm("metaTitle", e.target.value)} className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FF6900]" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1">Yayın Tarihi</label>
                <input type="date" value={form.publishDate} onChange={(e) => updateForm("publishDate", e.target.value)} className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FF6900]" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-medium text-zinc-500 mb-1">Meta Açıklama (SEO)</label>
              <textarea value={form.metaDescription} onChange={(e) => updateForm("metaDescription", e.target.value)} rows={2} className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FF6900]" />
            </div>

            <div className="mb-4">
              <label className="block text-xs font-medium text-zinc-500 mb-1">Kısa İçerik</label>
              <textarea value={form.shortContent} onChange={(e) => updateForm("shortContent", e.target.value)} rows={3} className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FF6900]" />
            </div>

            <div className="mb-4">
              <label className="block text-xs font-medium text-zinc-500 mb-1">Uzun İçerik (HTML)</label>
              <textarea value={form.longContent} onChange={(e) => updateForm("longContent", e.target.value)} rows={8} className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#FF6900]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1">Görsel URL</label>
                <input value={form.imageUrl} onChange={(e) => updateForm("imageUrl", e.target.value)} className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FF6900]" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-500 mb-1">Görsel Alt Etiketi</label>
                <input value={form.imageAlt} onChange={(e) => updateForm("imageAlt", e.target.value)} className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FF6900]" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-medium text-zinc-500 mb-1">Harita Kodu (iframe)</label>
              <textarea value={form.mapIframe} onChange={(e) => updateForm("mapIframe", e.target.value)} rows={3} className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:border-[#FF6900]" />
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-zinc-500">SSS (Soru-Cevap)</span>
                <button onClick={addFaq} className="text-xs text-[#FF6900] hover:underline">+ Ekle</button>
              </div>
              {form.faqs.map((faq, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <input placeholder="Soru" value={faq.question} onChange={(e) => updateFaq(i, "question", e.target.value)} className="flex-1 border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FF6900]" />
                  <input placeholder="Cevap" value={faq.answer} onChange={(e) => updateFaq(i, "answer", e.target.value)} className="flex-1 border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FF6900]" />
                  <button onClick={() => removeFaq(i)} className="text-red-400 hover:text-red-600 text-xs shrink-0">Sil</button>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-zinc-500">Hizmet Verilen Bölgeler (Geo Tags)</span>
                <button onClick={addGeoTag} className="text-xs text-[#FF6900] hover:underline">+ Ekle</button>
              </div>
              {form.geoTags.map((tag, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <input placeholder="Örn: Kocaeli, İzmit" value={tag} onChange={(e) => updateGeoTag(i, e.target.value)} className="flex-1 border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FF6900]" />
                  <button onClick={() => removeGeoTag(i)} className="text-red-400 hover:text-red-600 text-xs shrink-0">Sil</button>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <label className="block text-xs font-medium text-zinc-500 mb-1">Yapılandırılmış Veri (Schema)</label>
              <select value={form.schemaType} onChange={(e) => updateForm("schemaType", e.target.value)} className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#FF6900] bg-white">
                <option value="None">Yok</option>
                <option value="FAQPage">SSS (FAQPage)</option>
                <option value="LocalBusiness">Yerel İşletme (LocalBusiness)</option>
                <option value="Service">Hizmet (Service)</option>
                <option value="Article">Makale (Article)</option>
              </select>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <input type="checkbox" id="published" checked={form.published} onChange={(e) => updateForm("published", e.target.checked)} className="rounded border-zinc-300" />
              <label htmlFor="published" className="text-sm text-zinc-700">Yayınla</label>
            </div>

            <div className="flex gap-3">
              <button onClick={handleSave} disabled={saving} className="bg-[#FF6900] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors disabled:opacity-50">
                {saving ? "Kaydediliyor..." : "Kaydet"}
              </button>
              <button onClick={() => setFormMode("none")} className="bg-zinc-200 text-zinc-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-zinc-300 transition-colors">
                İptal
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    </>
  );
}
