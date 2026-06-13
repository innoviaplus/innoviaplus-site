"use client";

import { useState, useEffect, useCallback } from "react";

interface SlideData {
  image: string;
  title: string;
  description: string;
}

const slides: SlideData[] = [
  {
    image: "/images/slide1.webp",
    title: "Metale Hükmet",
    description:
      "Yüksek hassasiyet, kaliteli üretim ve mühendislik gücümüzle sanayinin ihtiyaçlarına güvenilir çözümler sunuyoruz!",
  },
  {
    image: "/images/slide2.webp",
    title: "Teknolojiyle Geleceğe",
    description:
      "Yenilikçi teknolojiler ve akıllı sistemlerle işletmenizi dijital dönüşüme hazırlayın.",
  },
  {
    image: "/images/slide3.webp",
    title: "Sürdürülebilir Başarı",
    description:
      "Çevre dostu üretim modelleri ve enerji verimli çözümlerle sürdürülebilir bir gelecek inşa edin.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="w-full flex justify-center px-0 md:px-4 pt-6">
    <div className="w-full max-w-[1300px] relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden md:rounded-2xl">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent" />
          <div className="relative h-full flex items-center px-6 md:px-16 lg:px-24">
            <div className="max-w-lg">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {slide.title}
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                {slide.description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="/hizmetlerimiz"
                  className="group w-fit inline-flex items-center bg-white text-slate-900 font-semibold text-sm sm:text-base h-12 pl-6 pr-0 rounded-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">Hizmetlerimiz</span>
                  <span className="ml-4 bg-orange-500 h-full w-12 flex items-center justify-center transition-all duration-300 group-hover:bg-orange-600">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </a>
                <a
                  href="/iletisim"
                  className="group w-fit inline-flex items-center bg-white text-slate-900 font-semibold text-sm sm:text-base h-12 pl-6 pr-0 rounded-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">İletişim</span>
                  <span className="ml-4 bg-orange-500 h-full w-12 flex items-center justify-center transition-all duration-300 group-hover:bg-orange-600">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onPointerDown={(e) => { e.preventDefault(); prev(); }}
        className="absolute left-3 md:left-5 top-auto bottom-4 translate-y-0 md:top-1/2 md:bottom-auto md:-translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors shadow-md z-10 cursor-pointer touch-manipulation"
        aria-label="Önceki slayt"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1e293b"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onPointerDown={(e) => { e.preventDefault(); next(); }}
        className="absolute right-3 md:right-5 top-auto bottom-4 translate-y-0 md:top-1/2 md:bottom-auto md:-translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors shadow-md z-10 cursor-pointer touch-manipulation"
        aria-label="Sonraki slayt"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1e293b"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div className="absolute bottom-4 md:bottom-32 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onPointerDown={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Slayt ${i + 1}`}
          />
        ))}
      </div>
    </div>
    </div>
  );
}
