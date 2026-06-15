export interface ServiceItem {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  href: string;
  features?: string[];
}

export const services: ServiceItem[] = [
  {
    title: "Cnc Fason İmalat",
    description:
      "Prototip veya yüksek hacimli seri üretimlerinizde zamanı ve maliyetleri minimize eden, yüksek hassasiyetli profesyonel CNC fason imalat çözümleri.",
    image: "/images/service-1.webp",
    href: "/hizmetlerimiz/innoviaplus-cnc-fason-imalati-ve-hizmetleri",
  },
  {
    title: "Pres Kalıbı İmalatı",
    description:
      "Üretim firelerini sıfıra indiren; milimetrik hassasiyete sahip, yüksek tonajlı preslerde bile sorunsuz çalışan uzun ömürlü kalıp tasarımı ve üretimi.",
    image: "/images/service-2.webp",
    href: "/hizmetlerimiz/pres-kalibi-imalati",
  },
  {
    title: "Özel Makine İmalatı",
    description:
      "Standartların yetersiz kaldığı noktalarda, üretim bandınıza kusursuz entegre olarak kapasitenizi maksimuma çıkaran, size özel yenilikçi makine otomasyon sistemleri.",
    image: "/images/service-3.webp",
    href: "/hizmetlerimiz/ozel-makine-imalati",
  },
  {
    title: "Cnc Torna İşleme",
    description:
      "Mikron hassasiyetinde çok eksenli CNC teknolojisiyle; otomotivden savunmaya kadar tüm sektörler için sıfır fireli, zamanında teslim garantili profesyonel talaşlı imalat çözümleri.",
    image: "/images/service-4.webp",
    href: "/hizmetlerimiz/cnc-torna-isleme",
  },
  {
    title: "Tape Casting Makineleri",
    description:
      "İnce film ve seramik üretiminde kusursuz kalınlık kontrolü sağlayan, laboratuvar ölçeğinden 20 metrelik endüstriyel hatlara kadar firmanıza özel yüksek teknolojili şerit döküm sistemleri.",
    image: "/images/service-5.webp",
    href: "/hizmetlerimiz/tape-casting-makine-imalati",
  },
  {
    title: "Özel Ölçü Dr.Blade",
    description:
      "Şerit döküm proseslerinizde kusursuz homojenlik sunan; mikrometre hassasiyetinde ayarlanabilen, makinenize tam uyumlu ve aşınmaya dirençli profesyonel döküm bıçağı mekanizmaları.",
    image: "/images/service-6.webp",
    href: "/hizmetlerimiz/dr-blade-sistemleri",
  },
  {
    title: "Konveyor Sistemleri Kurulumu",
    description:
      "Tesis içi lojistiğinizi ve malzeme akışınızı optimize eden; üretim bandınıza özel tasarlanmış, akıllı otomasyonlu endüstriyel konveyör hatlarının tasarımı ve kurulumu.",
    image: "/images/service-8.webp",
    href: "/hizmetlerimiz/konveyor-sistemleri-kurulumu",
  },
  {
    title: "Hidrolik ve Manuel Pres Üretimi",
    description:
      "Ar-Ge laboratuvarlarından yüksek tonajlı seri üretime kadar her ihtiyaca uygun; kusursuz basınç kontrollü, iş güvenliğine tam uyumlu hidrolik ve manuel pres sistemleri.",
    image: "/images/service-9.webp",
    href: "/hizmetlerimiz/hidrolik-ve-manuel-pres-imalati",
  },
  {
    title: "Özel Labaratuvar Ekipman Üretimi",
    description:
      "İleri malzeme bilimi ve Ar-Ge projelerinizin spesifik test senaryolarına birebir uyan; yüksek hassasiyetli ölçüm ve karakterizasyon sağlayan özel laboratuvar cihazı tasarımı.",
    image: "/images/service-10.webp",
    href: "/hizmetlerimiz/ozel-laboratuvar-ekipman-uretimi",
  },
];
