"use client";

import { Check, ArrowRight } from "lucide-react";

const features = [
  "Seri Üretimde Düşük Parça Maliyeti",
  "Yüksek Tekrar Edilebilirlik ve Stabil Tolerans",
  "Modüler Değişim ve Kolay Bakım İmkanı",
  "Şeffaf Süreç ve Detaylı Kalite Raporlaması",
];

export default function PressMoldsSection() {
  return (
    <section className="pt-[60px] pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
          Pres Kalıpları
        </h2>
        <hr className="w-16 h-0.5 bg-orange-500 border-0 mx-auto mt-4 mb-14" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-x-hidden">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <div
              className="absolute inset-0 rounded-3xl bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url(/images/press-mold-placeholder.webp)" }}
            />
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-2 text-orange-500 font-semibold text-sm tracking-widest uppercase">
              <span className="w-6 h-0.5 bg-orange-500" />
              ÖZEL ÖLÇÜ VE MÜŞTERİ ODAKLI ÇÖZÜMLER
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mt-4">
              Yüksek Hassasiyetli Pres Kalıbı Setleri
            </h2>

            <p className="mt-5 text-gray-500 leading-relaxed">
              Sac şekillendirme, kesme ve delme işlemlerinizde mühendislik odaklı tasarım ve kontrollü üretim süreçlerimizle uzun ömürlü ve ekonomik kalıp setleri sunuyoruz. Otomotivden beyaz eşyaya, üretim verimliliğinizi artıracak projelere imza atıyoruz.
            </p>

            <ul className="mt-6 space-y-3">
              {features.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-900 font-medium">
                  <span className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a href="/hizmetlerimiz/pres-kalibi-imalati" className="mt-6 flex justify-end group">
              <div className="flex items-stretch">
                <span className="bg-slate-900 text-white text-sm font-semibold px-4 flex items-center group-hover:bg-slate-700 transition-colors">
                  Devamını Oku
                </span>
                <span className="bg-orange-500 w-11 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <ArrowRight size={14} className="text-slate-900" />
                  </span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
