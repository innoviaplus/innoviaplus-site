import type { Metadata } from "next";
import { DollarSign, ArrowRight, Mail, Cpu, RotateCw, Zap, Layers, BarChart3, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "CNC Fason İmalatı Nedir? Hizmetleri ve Avantajları",
  description:
    "CNC fason imalatı ile üretim maliyetlerini düşürün! Innoviaplus kalitesiyle CNC freze, torna ve yüzey işleme süreçlerinde aynı gün hızlı teklif alın.",
};

export default function CncFasonImalatiPage() {
  return (
    <div>
      <section className="w-full bg-slate-900 bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 flex flex-col items-center justify-center text-center h-[380px] px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          CNC Fason İmalatı Nedir?
        </h1>
        <p className="mt-5 max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed">
          CNC fason imalatı ile üretim maliyetlerini düşürün! Innoviaplus
          kalitesiyle CNC freze, torna ve yüzey işleme süreçlerinde aynı gün
          hızlı teklif alın.
        </p>
        <a
          href="#teklif-al"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 mt-8 text-sm md:text-base shadow-lg hover:shadow-orange-500/25"
        >
          Cnc Fason İş Yaptırmak İstiyorum
          <ArrowRight size={18} />
        </a>
      </section>

      <section className="bg-[#f0f1f9] pt-16 md:pt-24 pb-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-md">
                <img
                  src="/images/innoviaplus-cnc-fason-imalati-ve-hizmetleri.webp"
                  alt="Innoviaplus CNC Fason İmalatı ve Hizmetleri - Neden CNC Fason?"
                  className="w-full h-auto lg:h-[410px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:order-1">
              <span className="text-orange-500 font-bold text-sm tracking-wider">
                ÜRETİMDE ESNEKLİK
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mt-3">
                Neden CNC Fason İş?
              </h2>
              <hr className="w-16 h-0.5 bg-orange-500 border-0 mt-4 mb-[25px]" />
              <p className="mt-5 text-sm md:text-base text-gray-500 leading-relaxed">
                Yatırım maliyetinden, bakım ve operatör eğitiminden kaçınmak;
                kısa sürede yüksek hassasiyetle üretim yapmak istiyorsanız CNC
                fason en doğru seçimdir. Tek parça prototip veya yüksek hacimli
                seri üretim fark etmez - doğru fason ortağı maliyetleri ve
                zamanı minimize eder.
              </p>
              <div className="mt-8 bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                    <DollarSign size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Sıfır Yatırım Maliyeti
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed">
                      CNC fason imalat modelini seçtiğinizde, milyonlarca
                      liralık CNC makine yatırımı, yazılım lisansları
                      ve amortisman giderleri yerine sadece ihtiyacınız olan
                      parça başına ödeme yaparsınız.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="teklif-al" className="bg-[#f0f1f9] pt-[70px] pb-0">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                Hemen Teklif Al — Süreç Çok Basit
              </h2>
              <hr className="w-16 h-0.5 bg-orange-500 border-0 mt-4 mb-[25px]" />
              <p className="mt-5 text-slate-600 leading-relaxed mb-8 text-sm md:text-base">
                Teknik resminizi veya CAD dosyanızı gönderin; Innoviaplus
                tedarik mühendisleri çizimi inceler, üretim sürecini ve
                maliyeti çıkarır. Aynı gün fiyat teklifi alma imkanı!
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
                    1
                  </span>
                  <p className="font-bold text-slate-900 text-sm md:text-base">
                    Çizimi Gönderin (DWG, STEP, PDF)
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
                    2
                  </span>
                  <p className="font-bold text-slate-900 text-sm md:text-base">
                    Malzeme ve toleransları belirleyin
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
                    3
                  </span>
                  <p className="font-bold text-slate-900 text-sm md:text-base">
                    Aynı gün fiyat & termin bilgisi alın!
                  </p>
                </div>
              </div>
              <div className="bg-amber-50/60 border-l-4 border-orange-500 p-4 rounded-r-xl mt-6">
                <p className="text-sm text-slate-700 leading-relaxed">
                  💡 İpucu: Çiziminizde toleransı ve yüzey finisajını
                  belirtirseniz teklif daha hızlı ve daha doğru olur.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <a
                href="mailto:info@innoviaplus.com"
                className="block bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg font-bold text-slate-900">
                      E-mail İle Dosya Gönder
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Projenizi e-posta ile bize ulaştırın
                    </p>
                    <span className="inline-flex items-center gap-2 mt-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-all text-sm">
                      Mail Gönder
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://wa.me/905409906344"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                    <img
                      src="/images/innoviaplus-cnc-fason-imalati-ve-hizmetleri-whatsapp-icon.webp"
                      alt=""
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg font-bold text-slate-900">
                      WhatsApp İle Dosya Gönder
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Projenizi Whatsapp ile bize Ulaştırın
                    </p>
                    <span className="inline-flex items-center gap-2 mt-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-all text-sm">
                      WhatsApp'tan Gönder
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f1f9] pt-[70px] pb-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              İnnoviaPlus Tarafından Sunulan Cnc Fason Hizmetlerimiz
            </h2>
            <hr className="w-16 h-0.5 bg-orange-500 border-0 mx-auto mt-4 mb-[25px]" />
            <p className="text-slate-600 max-w-3xl mx-auto mt-4 text-base md:text-lg mb-12">
              Doğru bir fason imalat ortağı, tedarik zincirinizin en güçlü
              halkası olmalıdır. İnnoviaplus iş modelinin temel odak noktası
              sürdürülebilir kalitededir.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            <div className="bg-white border border-slate-100 rounded-xl p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-orange-500/30">
              <div className="bg-orange-500/10 text-orange-500 rounded-lg p-2 w-10 h-10 flex items-center justify-center">
                <Cpu size={20} />
              </div>
              <h3 className="text-sm md:text-base font-bold text-slate-900 mt-4">
                CNC Freze
              </h3>
              <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                3/4/5 eksen çözümler, karmaşık geometri işleme.
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-xl p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-orange-500/30">
              <div className="bg-orange-500/10 text-orange-500 rounded-lg p-2 w-10 h-10 flex items-center justify-center">
                <RotateCw size={20} />
              </div>
              <h3 className="text-sm md:text-base font-bold text-slate-900 mt-4">
                Cnc Torna
              </h3>
              <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                Hassas silindirik parçalar, yüksek tekrarlanabilirlik
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-xl p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-orange-500/30">
              <div className="bg-orange-500/10 text-orange-500 rounded-lg p-2 w-10 h-10 flex items-center justify-center">
                <Zap size={20} />
              </div>
              <h3 className="text-sm md:text-base font-bold text-slate-900 mt-4">
                Kesme & Delik İşlemleri
              </h3>
              <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                Lazer, plazma ve Hassas delik işleri
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-xl p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-orange-500/30">
              <div className="bg-orange-500/10 text-orange-500 rounded-lg p-2 w-10 h-10 flex items-center justify-center">
                <Layers size={20} />
              </div>
              <h3 className="text-sm md:text-base font-bold text-slate-900 mt-4">
                Yüzey İşlemleri
              </h3>
              <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                Taşlama, parlatma, ısıl işlem koordinasyonu
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-xl p-4 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-orange-500/30 col-span-2 md:col-span-1">
              <div className="bg-orange-500/10 text-orange-500 rounded-lg p-2 w-10 h-10 flex items-center justify-center">
                <BarChart3 size={20} />
              </div>
              <h3 className="text-sm md:text-base font-bold text-slate-900 mt-4">
                Kokpit Veri Entegrasyonu
              </h3>
              <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                Üretim verisi & işlem koordinasyonu & kalite raporu
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f1f9] pt-[70px] pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Sıkça Sorulan Sorular
            </h2>
            <hr className="w-16 h-0.5 bg-orange-500 border-0 mx-auto mt-4 mb-[25px]" />
            <p className="text-slate-600 max-w-3xl mx-auto mt-4 text-base md:text-lg mb-12">
              Üretim sorumlularının ve satın alma uzmanlarının en çok merak
              ettiği temel sorular ve net yanıtları şu şekildedir:
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-sm md:text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
                Teklif almak için hangi dosyaları göndermeliyim?
                <ChevronDown size={20} className="text-orange-500 shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5 text-sm md:text-base text-gray-500 leading-relaxed border-t border-slate-100 pt-4">
                STEP, IGES, DWG, DXF veya PDF teknik resim; malzeme, tolerans
                ve adet bilgisini ekleyin.
              </div>
            </details>
            <details className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-sm md:text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
                Acil işler için hızlandırılmış üretim yapıyor musunuz?
                <ChevronDown size={20} className="text-orange-500 shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5 text-sm md:text-base text-gray-500 leading-relaxed border-t border-slate-100 pt-4">
                Evet — acil etiketli işler için öncelikli program ve ek vardiya
                ile hızlı termin sağlıyoruz.
              </div>
            </details>
            <details className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-sm md:text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
                Minimum sipariş adedi nedir?
                <ChevronDown size={20} className="text-orange-500 shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5 text-sm md:text-base text-gray-500 leading-relaxed border-t border-slate-100 pt-4">
                Prototip için 1 adet kabulü; seri üretim için adet ve
                fiyatlandırma ayrı değerlendirilir.
              </div>
            </details>
            <details className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-sm md:text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
                Kalite kontrol nasıl yapılır?
                <ChevronDown size={20} className="text-orange-500 shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5 text-sm md:text-base text-gray-500 leading-relaxed border-t border-slate-100 pt-4">
                Tolerans raporu, ölçüm sertifikası ve isteğe bağlı 3D tarama
                ile teslimat sağlanır.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
