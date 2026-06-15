"use client";

import { useRef, type FormEvent } from "react";

export default function IletisimForm() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const text = `*İletişim Formu*\n\n*Ad Soyad:* ${name}\n*E-posta:* ${email}\n*Konu:* ${subject}\n*Mesaj:* ${message}`;
    const whatsappUrl = `https://wa.me/905409906344?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-1.5">Adınız Soyadınız</label>
        <input id="name" name="name" type="text" required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-slate-900 bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors"
          placeholder="Adınız ve soyadınız" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-1.5">E-posta Adresiniz</label>
        <input id="email" name="email" type="email" required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-slate-900 bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors"
          placeholder="E-posta adresiniz" />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-1.5">Konu</label>
        <input id="subject" name="subject" type="text" required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-slate-900 bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors"
          placeholder="Konu başlığı" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-1.5">Mesajınız</label>
        <textarea id="message" name="message" rows={4} required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-slate-900 bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors resize-none"
          placeholder="Mesajınızı yazın" />
      </div>
      <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg>
        Gönder
      </button>
    </form>
  );
}
