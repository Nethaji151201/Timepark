import {
  ShieldCheck,
  Tag,
  BadgeCheck,
  Star,
  Package,
  Clock,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const reasons = [
  {
    icon: ShieldCheck,
    title: "100% Original Products",
    desc: "Every watch is sourced directly from authorized distributors. No fakes, no replicas — ever.",
  },
  {
    icon: Tag,
    title: "Best Price Guarantee",
    desc: "We match or beat any genuine competitor price. Shop with confidence at Time Park.",
  },
  {
    icon: BadgeCheck,
    title: "Warranty Available",
    desc: "All our watches come with manufacturer warranty and after-sales service support.",
  },
  {
    icon: Star,
    title: "Trusted by Thousands",
    desc: "Over 10,000 happy customers from Vellore and surrounding districts since our founding.",
  },
  {
    icon: Package,
    title: "Wide Collection",
    desc: "From budget-friendly Sonata to luxury Rado, we have a watch for every occasion and style.",
  },
  {
    icon: Clock,
    title: "Open 6 Days a Week",
    desc: "Visit us anytime between 9:30 AM – 9:00 PM. Convenient timings for every customer.",
  },
];

const slideDir = ["anim-slide-left", "anim-slide-up", "anim-slide-right"];

export default function WhyChooseUsSection() {
  const heading = useScrollAnimation();
  const grid = useScrollAnimation(0.05);

  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 bg-black relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #d4af37 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-14 anim-hidden ${heading.isVisible ? "anim-slide-up" : ""}`}
        >
          <p className="text-[#d4af37] text-sm font-semibold tracking-[3px] uppercase mb-3">
            Our Promise
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Why Choose <span className="text-gold-gradient">Time Park?</span>
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        {/* Cards grid — alternating left / up / right per row */}
        <div ref={grid.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group relative bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl p-7 hover:border-[#d4af37]/50 transition-all duration-400 card-hover overflow-hidden anim-hidden ${
                grid.isVisible ? slideDir[i % 3] : ""
              }`}
              style={grid.isVisible ? { animationDelay: `${i * 0.1}s` } : {}}
            >
              {/* Number watermark */}
              <span className="absolute top-4 right-5 font-display font-bold text-6xl text-[#1a1a1a] select-none group-hover:text-[#d4af37]/10 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center mb-5 group-hover:bg-[#d4af37]/20 transition-all duration-300">
                <Icon size={26} className="text-[#d4af37]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#d4af37] transition-colors">
                {title}
              </h3>
              <p className="text-[#808080] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
