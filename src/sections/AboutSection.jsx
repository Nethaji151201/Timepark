import aboutImg from "../assets/images/showroom/about.png";
import { ShieldCheck, Award, Users, Star } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const highlights = [
  { icon: ShieldCheck, title: "100% Original", desc: "Every watch is certified genuine" },
  { icon: Award, title: "Premium Brands", desc: "Fastrack, Rado, Casio & more" },
  { icon: Users, title: "Trusted Since Years", desc: "Thousands of happy customers" },
  { icon: Star, title: "Warranty Assured", desc: "All products come with warranty" },
];

export default function AboutSection() {
  const imgAnim = useScrollAnimation();
  const textAnim = useScrollAnimation();

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image side — slides in from LEFT */}
          <div
            ref={imgAnim.ref}
            className={`relative order-2 lg:order-1 anim-hidden ${imgAnim.isVisible ? "anim-slide-left" : ""}`}
          >
            <div
              className="relative rounded-2xl overflow-hidden border border-[#1f1f1f]"
              style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.15)" }}
            >
              <img
                src={aboutImg}
                alt="Time Park watch showroom interior Vellore"
                className="w-full h-80 lg:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            {/* Floating hours card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-[#121212] border border-[#d4af37]/30 rounded-xl p-4 shadow-2xl">
              <p className="text-[#d4af37] font-bold text-2xl font-display">9:30 AM</p>
              <p className="text-[#bfbfbf] text-xs">Opens Every Day</p>
              <div className="gold-divider mt-2" />
              <p className="text-[#d4af37] font-bold text-2xl font-display mt-2">9:00 PM</p>
              <p className="text-[#bfbfbf] text-xs">Closes Every Day</p>
            </div>
          </div>

          {/* Text side — slides in from RIGHT */}
          <div
            ref={textAnim.ref}
            className={`order-1 lg:order-2 anim-hidden ${textAnim.isVisible ? "anim-slide-right" : ""}`}
          >
            <p className="text-[#d4af37] text-sm font-semibold tracking-[3px] uppercase mb-3">About Us</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
              Welcome to <span className="text-gold-gradient">Time Park</span>
            </h2>
            <div className="gold-divider w-20 mb-6" />
            <p className="text-[#bfbfbf] text-base leading-relaxed mb-4">
              Founded by <span className="text-white font-semibold">Aslam</span>, Time Park is
              Vellore's most trusted premium watch showroom, located in the heart of Katpadi. We
              bring you the finest selection of watches from the world's top brands — all 100%
              original and warranty-backed.
            </p>
            <p className="text-[#bfbfbf] text-base leading-relaxed mb-8">
              Whether you're looking for a sporty Casio G-Shock, an elegant Rado, a trendy
              Fastrack, or a classic Sonata — Time Park has the perfect timepiece for every wrist
              and every occasion, plus a stunning collection of wall, table, and alarm clocks.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="flex items-start gap-3 bg-[#121212] border border-[#1f1f1f] rounded-xl p-4 hover:border-[#d4af37]/40 transition-all duration-300 card-hover"
                  style={textAnim.isVisible ? { animationDelay: `${0.1 + i * 0.1}s` } : {}}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{title}</p>
                    <p className="text-[#808080] text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
