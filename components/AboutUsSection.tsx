import { Check, Star, ArrowRight } from "lucide-react";

const features = [
  "Sustainable Manufacturing",
  "Advanced Automation",
  "Precision Engineering",
  "Global Supply Chain",
];

export default function AboutUsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <div
              className="absolute top-0 right-0 w-[75%] h-full rounded-3xl bg-cover bg-center shadow-lg"
              style={{ backgroundImage: "url(/images/about-main.webp)" }}
            />
            <div
              className="absolute bottom-6 left-0 w-44 h-44 md:w-52 md:h-52 rounded-3xl bg-cover bg-center shadow-lg border-4 border-white"
              style={{ backgroundImage: "url(/images/about-small.webp)" }}
            />
          </div>

          <div>
            <div className="flex items-center gap-2 text-orange-500 font-semibold text-sm tracking-widest uppercase">
              <span className="w-6 h-0.5 bg-orange-500" />
              About Us
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mt-4">
              Building quality through industrial innovation
            </h2>

            <p className="mt-5 text-gray-500 leading-relaxed">
              With decades of experience in metal manufacturing and precision
              engineering, we deliver solutions that power industries worldwide.
              Our commitment to quality and innovation drives everything we do.
            </p>

            <ul className="mt-6 space-y-3">
              {features.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-900 font-medium">
                  <span className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-stone-50 rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-bold text-slate-900">4.9</span>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-orange-500 fill-orange-500"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 mt-1 block">
                    15.5K Genuine Rating
                  </span>
                </div>
              </div>

              <a
                href="/"
                className="group inline-flex items-center gap-2 bg-orange-500 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
              >
                Learn More
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
