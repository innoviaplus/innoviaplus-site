import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/kv";

export const dynamic = "force-dynamic";

const reservedSlugs = new Set(["admin", "api", "_next", "favicon"]);

type Props = { params: Promise<{ slug: string }> };

function sanitizeHtml(html: string): string {
  return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);
  if (!page) return { title: "Sayfa Bulunamadı" };
  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription || page.shortContent,
    openGraph: {
      title: page.metaTitle || page.title,
      description: page.metaDescription || page.shortContent,
      images: page.imageUrl ? [{ url: page.imageUrl, alt: page.imageAlt }] : [],
    },
    alternates: { canonical: `/${page.slug}` },
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  if (reservedSlugs.has(slug)) notFound();
  const page = await getPageBySlug(slug);
  if (!page) notFound();

  const faqSchema = page.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  } : null;

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="max-w-5xl mx-auto px-4 py-12">
        {page.imageUrl && (
          <img
            src={page.imageUrl}
            alt={page.imageAlt || page.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
          />
        )}

        <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">{page.title}</h1>

        {page.publishDate && (
          <p className="text-sm text-zinc-400 mb-6">
            Yayın Tarihi: {new Date(page.publishDate).toLocaleDateString("tr-TR")}
          </p>
        )}

        {page.shortContent && (
          <p className="text-lg text-zinc-600 leading-relaxed mb-8">{page.shortContent}</p>
        )}

        {page.longContent && (
          <div
            className="prose prose-zinc max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(page.longContent) }}
          />
        )}

        {page.geoTags.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-zinc-800 mb-3">Hizmet Bölgelerimiz</h2>
            <div className="flex flex-wrap gap-2">
              {page.geoTags.map((tag, i) => (
                <span key={i} className="bg-orange-50 text-orange-700 text-sm px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {page.faqs.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-zinc-800 mb-4">Sıkça Sorulan Sorular</h2>
            <div className="space-y-3">
              {page.faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
                  <summary className="px-4 py-3 text-sm font-medium text-zinc-800 cursor-pointer hover:bg-zinc-50">
                    {faq.question}
                  </summary>
                  <p className="px-4 py-3 text-sm text-zinc-600 border-t border-zinc-100">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        {page.mapIframe && (
          <div className="mb-8 rounded-2xl overflow-hidden border border-zinc-200" dangerouslySetInnerHTML={{ __html: sanitizeHtml(page.mapIframe) }} />
        )}
      </article>
    </>
  );
}
