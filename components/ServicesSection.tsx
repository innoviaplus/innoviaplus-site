"use client";

import Image from "next/image";
import { ArrowRight, Wrench } from "lucide-react";
import { services } from "@/lib/services";

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
                <div className="relative w-full h-full">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
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
