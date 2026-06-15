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
            logo: "https://innoviaplus.com/images/innoviaplus-logo.webp",
            image: "https://innoviaplus.com/images/innoviaplus-Open-Graph.jpg",
            email: "info@innoviaplus.com",
            telephone: "+905409906344",
            sameAs: [
              "https://www.facebook.com/profile.php?id=61552624015441",
              "https://www.instagram.com/innoviaplussanayi",
              "https://www.linkedin.com/company/i%CC%87nnovi%CC%87a-plus-teknoloji%CC%87-ve-dani%C5%9Fmanlik-sanayi%CC%87-ti%CC%87caret-li%CC%87mi%CC%87ted-%C5%9Fi%CC%87rketi%CC%87/",
            ],
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
