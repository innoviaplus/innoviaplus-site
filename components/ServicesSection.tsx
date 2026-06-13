"use client";

import { ArrowRight, Wrench } from "lucide-react";

const services = [
  {
    title: "Cnc Fason İmalat",
    description:
      "Prototip veya yüksek hacimli seri üretimlerinizde zamanı ve maliyetleri minimize eden, yüksek hassasiyetli profesyonel CNC fason imalat çözümleri.",
    image: "/images/service-1.webp",
    href: "/hizmetlerimiz/innoviaplus-cnc-fason-imalati-ve-hizmetleri",
  },
  {
    title: "Pres Kalıbı İmalatı",
    description:
      "Üretim firelerini sıfıra indiren; milimetrik hassasiyete sahip, yüksek tonajlı preslerde bile sorunsuz çalışan uzun ömürlü kalıp tasarımı ve üretimi.",
    image: "/images/service-2.webp",
    href: "/hizmetlerimiz/pres-kalibi-imalati",
  },
  {
    title: "Özel Makine İmalatı",
    description:
      "Standartların yetersiz kaldığı noktalarda, üretim bandınıza kusursuz entegre olarak kapasitenizi maksimuma çıkaran, size özel yenilikçi makine otomasyon sistemleri.",
    image: "/images/service-3.webp",
    href: "/hizmetlerimiz/ozel-makine-imalati",
  },
  {
    title: "Cnc Torna İşleme",
    description:
      "Mikron hassasiyetinde çok eksenli CNC teknolojisiyle; otomotivden savunmaya kadar tüm sektörler için sıfır fireli, zamanında teslim garantili profesyonel talaşlı imalat çözümleri.",
    image: "/images/service-4.webp",
    href: "/hizmetlerimiz/cnc-torna-isleme",
  },
  {
    title: "Tape Casting Makineleri",
    description:
      "İnce film ve seramik üretiminde kusursuz kalınlık kontrolü sağlayan, laboratuvar ölçeğinden 20 metrelik endüstriyel hatlara kadar firmanıza özel yüksek teknolojili şerit döküm sistemleri.",
    image: "/images/service-5.webp",
    href: "/hizmetlerimiz/tape-casting-makine-imalati",
  },
  {
    title: "Özel Ölçü Dr.Blade",
    description:
      "Şerit döküm proseslerinizde kusursuz homojenlik sunan; mikrometre hassasiyetinde ayarlanabilen, makinenize tam uyumlu ve aşınmaya dirençli profesyonel döküm bıçağı mekanizmaları.",
    image: "/images/service-6.webp",
    href: "/hizmetlerimiz/dr-blade-sistemleri",
  },
  {
    title: "Konveyor Sistemleri Kurulumu",
    description:
      "Tesis içi lojistiğinizi ve malzeme akışınızı optimize eden; üretim bandınıza özel tasarlanmış, akıllı otomasyonlu endüstriyel konveyör hatlarının tasarımı ve kurulumu.",
    image: "/images/service-8.webp",
    href: "/hizmetlerimiz/konveyor-sistemleri-kurulumu",
  },
  {
    title: "Hidrolik ve Manuel Pres Üretimi",
    description:
      "Ar-Ge laboratuvarlarından yüksek tonajlı seri üretime kadar her ihtiyaca uygun; kusursuz basınç kontrollü, iş güvenliğine tam uyumlu hidrolik ve manuel pres sistemleri.",
    image: "/images/service-9.webp",
    href: "/hizmetlerimiz/hidrolik-ve-manuel-pres-imalati",
  },
  {
    title: "Özel Labaratuvar Ekipman Üretimi",
    description:
      "İleri malzeme bilimi ve Ar-Ge projelerinizin spesifik test senaryolarına birebir uyan; yüksek hassasiyetli ölçüm ve karakterizasyon sağlayan özel laboratuvar cihazı tasarımı.",
    image: "/images/service-10.webp",
    href: "/hizmetlerimiz/ozel-laboratuvar-ekipman-uretimi",
  },
];

interface ServicesSectionProps {
  limit?: number;
}

export default function ServicesSection({ limit }: ServicesSectionProps) {
  return (
    <section className="pt-[60px] pb-0">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center flex items-center justify-center gap-3">
          <Wrench size={32} className="text-orange-500" />
          Hizmetlerimiz
        </h2>
        <hr className="w-16 h-0.5 bg-orange-500 border-0 mx-auto mt-4 mb-[25px]" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-10 lg:gap-y-[25px]">
          {services.slice(0, limit ?? services.length).map((service) => (
            <a key={service.title} href={service.href || "/"} className="group block pb-8 transition-all duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl ring-2 ring-transparent group-hover:ring-orange-500 transition-all duration-300">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
              </div>

              <div className="relative z-10 w-[90%] mx-auto -mt-20 bg-white shadow-xl border-l-[12px] border-slate-900 rounded-2xl p-6 group-hover:shadow-2xl transition-all duration-300">
                <h3 className="text-lg font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-5 flex justify-end">
                  <div className="flex items-stretch">
                    <span className="bg-slate-900 text-white text-sm font-semibold px-4 flex items-center">
                      Devamını Oku
                    </span>
                    <span className="bg-orange-500 w-11 flex items-center justify-center">
                      <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        <ArrowRight size={14} className="text-slate-900" />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {limit && (
          <div className="mt-[25px] text-center">
            <a
              href="/hizmetlerimiz"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg transition-colors"
            >
              Tüm Hizmetlerimizi Görün
              <ArrowRight size={18} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
