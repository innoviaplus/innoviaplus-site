"use client";

import { Settings, TrendingUp, Crosshair } from "lucide-react";

const features = [
  {
    title: "Esnek Çözümler",
    description:
      "Kalıp imalatı süreçlerinizde ihtiyaçlarınıza özel, yenilikçi ve uyarlanabilir çözümler üretiyoruz.",
    icon: Settings,
    iconBg: "bg-orange-500",
  },
  {
    title: "Yüksek Performans",
    description:
      "Üretim hattınızda verimliliği en üst düzeye çıkaran, uzun ömürlü ve dayanıklı kalıplar tasarlıyoruz.",
    icon: TrendingUp,
    iconBg: "bg-slate-900",
  },
  {
    title: "Hassas Mühendislik",
    description:
      "Mikron düzeyinde hassasiyetle çalışarak, hatasız ve kusursuz endüstriyel üretim sağlıyoruz.",
    icon: Crosshair,
    iconBg: "bg-orange-500",
  },
];

export default function FeatureCards() {
  return (
    <section className="relative z-10 mt-0 md:-mt-40 pt-[25px] md:pt-20 pb-0 pl-12 md:pl-10 pr-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
          {features.map((item) => (
            <div
              key={item.title}
              className="relative bg-white shadow-md rounded-2xl p-5 pl-20"
            >
              <div
                className={`absolute top-1/2 -translate-y-1/2 -left-8 w-16 h-16 rounded-full ${item.iconBg} flex items-center justify-center`}
              >
                <item.icon size={26} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
