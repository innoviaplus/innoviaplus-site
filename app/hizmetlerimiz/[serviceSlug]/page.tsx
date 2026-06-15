import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, type ServiceItem } from "@/lib/services";
import { ArrowRight } from "lucide-react";

type Props = { params: Promise<{ serviceSlug: string }> };

const staticServiceSlugs = new Set([
  "innoviaplus-cnc-fason-imalati-ve-hizmetleri",
  "pres-kalibi-imalati",
  "ozel-makine-imalati",
  "cnc-torna-isleme",
  "tape-casting-makine-imalati",
  "dr-blade-sistemleri",
  "konveyor-sistemleri-kurulumu",
  "hidrolik-ve-manuel-pres-imalati",
  "ozel-laboratuvar-ekipman-uretimi",
]);

export function generateStaticParams() {
  return services
    .filter((s) => !staticServiceSlugs.has(s.href.replace("/hizmetlerimiz/", "")))
    .map((s) => ({ serviceSlug: s.href.replace("/hizmetlerimiz/", "") }));
}

function buildServiceSchema(service: ServiceItem) {
  const slug = service.href.replace("/hizmetlerimiz/", "");
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    image: `https://innoviaplus.com${service.image}`,
    url: `https://innoviaplus.com${service.href}`,
    provider: {
      "@type": "Organization",
      name: "İnnovia Plus Teknoloji ve Sanayi",
      url: "https://innoviaplus.com",
    },
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceSlug } = await params;
  if (staticServiceSlugs.has(serviceSlug)) notFound();
  const service = services.find((s) => s.href.endsWith(serviceSlug));
  if (!service) return { title: "Sayfa Bulunamadı" };
  return {
    title: `${service.title} | Innovia Plus`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Innovia Plus`,
      description: service.description,
      images: [{ url: service.image, alt: service.title }],
    },
    alternates: { canonical: service.href },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { serviceSlug } = await params;
  if (staticServiceSlugs.has(serviceSlug)) notFound();
  const service = services.find((s) => s.href.endsWith(serviceSlug));
  if (!service) notFound();

  const schema = buildServiceSchema(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="w-full bg-slate-900 bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 flex flex-col items-center justify-center text-center py-16 md:py-24 lg:py-32 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {service.title}
        </h1>
        <p className="mt-5 max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed">
          {service.description}
        </p>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div
                className="h-72 md:h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {service.description}
              </p>
              <div className="mt-8">
                <a
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg transition-colors"
                >
                  Hemen Teklif Alın
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}