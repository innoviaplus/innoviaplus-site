import ServicesSection from "@/components/ServicesSection";

export default function HizmetlerimizPage() {
  return (
    <div>
      <section className="w-full bg-slate-900 bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 flex flex-col items-center justify-center text-center py-16 md:py-24 lg:py-32 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Hizmetlerimiz
        </h1>
        <p className="mt-5 max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed">
          Endüstriyel kalıp imalatı ve hassas mühendislik alanında, projenize
          özel yenilikçi, dayanıklı ve yüksek performanslı çözümler sunuyoruz.
        </p>
      </section>

      <ServicesSection />
    </div>
  );
}
