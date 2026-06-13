"use client";

import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useRef } from "react";
import type { FormEvent } from "react";

const contactItems = [
  {
    icon: MapPin,
    title: "Adres",
    content:
      "Yenidoğan, Haseki Sultan Sok. No2 A blok iç kapı No 108, 34040 Bayrampaşa/İstanbul, Türkiye",
  },
  {
    icon: Phone,
    title: "Telefon",
    content: "+90 540 990 6344",
  },
  {
    icon: Mail,
    title: "E-posta",
    content: "info@innoviaplus.com",
  },
];

export default function IletisimPage() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const text = `*İletişim Formu*\n\n*Ad Soyad:* ${name}\n*E-posta:* ${email}\n*Konu:* ${subject}\n*Mesaj:* ${message}`;

    const whatsappUrl = `https://wa.me/905409906344?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  }

  return (
    <div>
      <section className="w-full bg-slate-900 bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 flex flex-col items-center justify-center text-center py-16 md:py-24 lg:py-32 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">İletişim</h1>
        <p className="mt-5 max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed">
          Projeleriniz hakkında bilgi almak veya teklif talebinde bulunmak için
          bizimle iletişime geçin.
        </p>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase">
                BİZE ULAŞIN
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mt-4">
                Projeleriniz İçin Bizimle İletişime Geçin
              </h2>

              <div className="mt-10 space-y-6">
                {contactItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shrink-0 mt-1">
                      <item.icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-900 mb-1.5"
                    >
                      Adınız Soyadınız
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-slate-900 bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors"
                      placeholder="Adınız ve soyadınız"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-900 mb-1.5"
                    >
                      E-posta Adresiniz
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-slate-900 bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors"
                      placeholder="E-posta adresiniz"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-slate-900 mb-1.5"
                    >
                      Konu
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-slate-900 bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors"
                      placeholder="Konu başlığı"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-900 mb-1.5"
                    >
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-slate-900 bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors resize-none"
                      placeholder="Mesajınızı yazın"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden h-72 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.1354141142842!2d28.913731377233805!3d41.044167717212304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb49d5a5876d%3A0xc18f786c94a0de30!2s%C4%B0nnoviaPlus%20CNC%20Makine%20M%C3%BChendislik%20Teknoloji%20Sanayi%20%C5%9Eirketi!5e0!3m2!1str!2str!4v1780303877132!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="İnnoviaPlus Konum"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
