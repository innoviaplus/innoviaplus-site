import { MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

const serviceLinks = [
  { label: "Cnc Fason İmalat", href: "/hizmetlerimiz/innoviaplus-cnc-fason-imalati-ve-hizmetleri" },
  { label: "Pres Kalıbı İmalatı", href: "/hizmetlerimiz/pres-kalibi-imalati" },
  { label: "Özel Makine İmalatı", href: "/hizmetlerimiz/ozel-makine-imalati" },
  { label: "Cnc Torna İşleme", href: "/hizmetlerimiz/cnc-torna-isleme" },
  { label: "Tape Casting Makineleri", href: "/hizmetlerimiz/tape-casting-makine-imalati" },
  { label: "Özel Ölçü Dr.Blade", href: "/hizmetlerimiz/dr-blade-sistemleri" },
  { label: "Konveyor Sistemleri Kurulumu", href: "/hizmetlerimiz/konveyor-sistemleri-kurulumu" },
  { label: "Hidrolik ve Manuel Pres Üretimi", href: "/hizmetlerimiz/hidrolik-ve-manuel-pres-imalati" },
  { label: "Özel Labaratuvar Ekipman Üretimi", href: "/hizmetlerimiz/ozel-laboratuvar-ekipman-uretimi" },
];

function FacebookIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const socialLinks = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          <div>
            <img src="/images/innoviaplus-logo-beyaz.webp" alt="Innovia Plus" className="h-14 w-auto mb-4" />
            <p className="text-sm leading-relaxed text-gray-400">
              Endüstriyel kalıp imalatı ve hassas mühendislik çözümlerinde 25
              yılı aşkın tecrübeyle global standartlarda üretim yapıyoruz.
            </p>
            <div className="flex gap-3 mt-5">
              <span className="px-3 py-1 text-xs font-semibold text-white bg-slate-800 rounded">
                ISO 9001
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-white bg-slate-800 rounded">
                ISO 14001
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Hizmetlerimiz
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              İletişim
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-orange-500 shrink-0 mt-0.5" />
                <span>
                  Yenidoğan, Haseki Sultan Sok. No2 A blok iç kapı No 108,
                  34040 Bayrampaşa/İstanbul, Türkiye
                </span>
              </li>
              <li>
                <a
                  href="tel:+905409906344"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  <Phone size={16} className="text-orange-500 shrink-0" />
                  +90 540 990 6344
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@innoviaplus.com"
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  <Mail size={16} className="text-orange-500 shrink-0" />
                  info@innoviaplus.com
                </a>
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-200"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Konumumuz
            </h4>
            <div className="w-full h-48 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.1354141142842!2d28.913731377233805!3d41.044167717212304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb49d5a5876d%3A0xc18f786c94a0de30!2s%C4%B0nnoviaPlus%20CNC%20Makine%20M%C3%BChendislik%20Teknoloji%20Sanayi%20%C5%9Eirketi!5e0!3m2!1str!2str!4v1780303877132!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Innovia Plus Konum"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; 2026 Innovia Plus. Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
