import { Cpu, Leaf, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Cpu,
    title: "Modern Makine Parkuru",
    description:
      "Üretim süreçlerimizde en yeni teknolojileri ve ileri segment makineleri kullanıyoruz.",
  },
  {
    icon: Leaf,
    title: "Çevre Dostu Üretim",
    description:
      "Sürdürülebilirlik ilkesine bağlı kalıyor ve çevre dostu üretim yöntemlerini benimsiyoruz.",
  },
  {
    icon: Users,
    title: "Uzman Kadro",
    description:
      "Her projeyi titizlikle takip eden deneyimli ekibimizle kalite standartlarını zirvede tutuyoruz.",
  },
  {
    icon: TrendingUp,
    title: "Süreç Optimizasyonu",
    description:
      "Bizimle çalışarak güvenilir ürünlere ulaşırken, üretim maliyetlerinizi ve süreçlerinizi optimize edersiniz.",
  },
];

const stats = [
  { value: "2015", label: "Kuruluş Yılı" },
  { value: "100%", label: "Müşteri Memnuniyeti" },
  { value: "Yüksek Kapasite", label: "Hassas Üretim Çözümleri" },
];

export default function HakkimizdaPage() {
  return (
    <div>
      <section className="w-full bg-slate-900 bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 flex flex-col items-center justify-center text-center py-16 md:py-24 lg:py-32 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Hakkımızda</h1>
        <p className="mt-5 max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed">
          CNC işleme ve makine imalatında yenilikçi çözümler sunan lider firma.
        </p>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/images/about-factory.webp"
                  alt="innoviaPlus fabrika ve üretim tesisi"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase">
                YENİLİKÇİ ENDÜSTRİYEL ÇÖZÜMLER
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mt-4">
                Geleceğin Mühendislik Standartlarını Bugün Üretiyoruz
              </h2>
              <p className="mt-5 text-gray-500 leading-relaxed">
                innoviaPlus, CNC işleme ve makine imalatı alanında sektördeki
                yenilikçi çözümleriyle tanınan bir liderdir. 2015 yılında kurulan
                şirketimiz, müşteri odaklı yaklaşımı ve yüksek kaliteli üretim
                anlayışıyla kısa sürede sektörde kendine güçlü bir yer edinmiştir.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Müşterilerimizin ihtiyaçlarını anlamak ve onlara özel çözümler
                sunmak, bizim için her zaman öncelikli olmuştur. Modern makineler
                ve ileri teknoloji kullanarak, çeşitli endüstrilere yönelik hassas
                parçalar ve ekipmanlar üretiyoruz. Deneyimli ekibimiz, her projeyi
                titizlikle takip ederek, kalite standartlarını sürekli olarak
                yükseltmektedir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="bg-slate-900 py-10 md:py-12 rounded-2xl px-6 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
              {stats.map((item) => (
                <div key={item.value} className="flex flex-col items-center text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white">
                    {item.value}
                  </div>
                  <p className="mt-2 text-sm text-gray-400 uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
            Referanslarımız
          </h2>
          <hr className="w-16 h-0.5 bg-orange-500 border-0 mx-auto mt-4 mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 items-center">
            {Array.from({ length: 11 }, (_, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-orange-500"
              >
                <img
                  src={`/images/referanslogo/logo-${i + 1}.webp`}
                  alt={`Referans logosu ${i + 1}`}
                  className="h-14 w-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f0f1f9] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">
            Kurumsal Değerlerimiz
          </h2>
          <hr className="w-16 h-0.5 bg-orange-500 border-0 mx-auto mt-4 mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center mx-auto">
                  <item.icon size={26} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-5">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
