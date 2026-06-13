import HeroSlider from "@/components/HeroSlider";
import FeatureCards from "@/components/FeatureCards";
import ServicesSection from "@/components/ServicesSection";
import TapeCasting from "@/components/TapeCasting";
import PressMoldsSection from "@/components/PressMoldsSection";

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "İnnovia Plus Teknoloji ve Sanayi",
            url: "https://innoviaplus.com",
            email: "info@innoviaplus.com",
            telephone: "+905409906344",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Yenidoğan, Haseki Sultan Sok. No2 A blok iç kapı No 108",
              addressLocality: "Bayrampaşa",
              addressRegion: "İstanbul",
              postalCode: "34040",
              addressCountry: "TR",
            },
          }),
        }}
      />
      <HeroSlider />
      <FeatureCards />
      <ServicesSection limit={6} />
      <TapeCasting />
      <PressMoldsSection />
    </div>
  );
}
