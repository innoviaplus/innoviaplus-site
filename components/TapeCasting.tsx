"use client";

import { Check, ArrowRight } from "lucide-react";

const features = [
  "Dokunmatik Kontrol Paneli ile Kolay Kullanım",
  "Mikrometre Ayarlı Hassas Lineer Kızak",
  "Yüksek Torklu Step Motor (5 - 100 mm/sn Hız)",
  "İhtiyaca Özel Esnek Üretim Seçenekleri",
];

export default function TapeCasting() {
  return (
    <section className="pt-[60px] pb-0">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
          Tam Otomatik Film Aplikatörü
        </h2>
        <hr className="w-16 h-0.5 bg-orange-500 border-0 mx-auto mt-4 mb-14" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-x-hidden">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <div
              className="absolute top-0 right-0 w-[75%] h-full rounded-3xl bg-cover bg-center shadow-lg border-4 border-white"
              style={{ backgroundImage: "url(/images/tape-casting-main.webp)" }}
            />
            <div
              className="absolute bottom-6 left-0 w-44 h-44 md:w-52 md:h-52 rounded-3xl bg-cover bg-center shadow-lg border-4 border-white"
              style={{ backgroundImage: "url(/images/tape-casting-small.webp)" }}
            />
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-2 text-orange-500 font-semibold text-sm tracking-widest uppercase">
              <span className="w-6 h-0.5 bg-orange-500" />
              INNOVIA PLUS | TAM OTOMATİK FİLM APLİKATÖRÜ
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mt-4">
              Tape Casting & Doctor Blade ile Hassas ve Kusursuz Kaplama
            </h2>

            <p className="mt-5 text-gray-500 leading-relaxed">
              Ölçüye, uzunluğa ve genişliğe özel üretim seçenekleriyle ihtiyaçlarınıza tam uyum sağlayan tam otomatik film aplikatörümüz; cam, seramik, metal ve polimer yüzeylerde mükemmel sonuçlar verir. Dokunmatik kontrol paneli, mikrometre ayarlı lineer kızak ve yüksek torklu tahrik sistemi ile laboratuvar ve üretim süreçlerinize ileri düzey hassasiyet katın.
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

            <div className="mt-6 flex justify-end">
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
        </div>
      </div>
    </section>
  );
}
