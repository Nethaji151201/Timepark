import fastrackImg from "../assets/images/brands/fastrack2.png";
import sonataImg from "../assets/images/brands/sonata.png";
import casioImg from "../assets/images/brands/casio.png";
import gshockImg from "../assets/images/brands/gshock.png";
import radoImg from "../assets/images/brands/rado.png";
import wingsImg from "../assets/images/brands/wings.png";
import titanImg from "../assets/images/brands/titan2.png";
import ajanta from "../assets/images/brands/ajanta.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const brands = [
  { name: "Fastrack", tagline: "Trendy & Bold", img: fastrackImg },
  { name: "Sonata", tagline: "Classic Elegance", img: sonataImg },
  { name: "Titan", tagline: "Elegance in Time", img: titanImg },
  { name: "Casio", tagline: "Technology & Style", img: casioImg },
  { name: "G-Shock", tagline: "Tough & Reliable", img: gshockImg },
  { name: "Rado", tagline: "Swiss Luxury", img: radoImg },
  { name: "Wings", tagline: "Affordable Premium", img: wingsImg },
  { name: "Ajanta", tagline: "Classic Wall Clocks", img: ajanta },
];

export default function BrandsSection() {
  const heading = useScrollAnimation();
  const grid = useScrollAnimation(0.05);

  return (
    <section
      id="brands"
      className="py-20 lg:py-28 bg-black relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading — slides up */}
        <div
          ref={heading.ref}
          className={`text-center mb-14 anim-hidden ${heading.isVisible ? "anim-slide-up" : ""}`}
        >
          <p className="text-[#d4af37] text-sm font-semibold tracking-[3px] uppercase mb-3">
            Official Stockist
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Brands We <span className="text-gold-gradient">Carry</span>
          </h2>
          <div className="gold-divider w-24 mx-auto" />
          <p className="text-[#bfbfbf] mt-4 max-w-xl mx-auto">
            Shop authentic watches from the world's most trusted brands — all
            under one roof at Time Park, Vellore.
          </p>
        </div>

        {/* Brand cards — staggered slide-up */}
        <div ref={grid.ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              className={`group relative bg-[#121212] border border-[#1f1f1f] rounded-2xl overflow-hidden cursor-pointer transition-all duration-400 hover:border-[#d4af37]/60 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,175,55,0.2)] anim-hidden ${
                grid.isVisible ? (i % 2 === 0 ? "anim-slide-left" : "anim-slide-right") : ""
              }`}
              style={grid.isVisible ? { animationDelay: `${i * 0.07}s` } : {}}
            >
              {/* Brand logo image */}
              <div className="relative h-32 sm:h-36 flex items-center justify-center bg-[#0d0d0d] overflow-hidden">
                <img
                  src={brand.img}
                  alt={`${brand.name} watch brand Vellore showroom`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/10 transition-all duration-400" />
              </div>

              {/* Brand info */}
              <div className="p-3 text-center border-t border-[#1f1f1f]">
                <p className="text-white font-bold text-sm group-hover:text-[#d4af37] transition-colors duration-300">
                  {brand.name}
                </p>
                <p className="text-[#808080] text-[10px] mt-0.5">
                  {brand.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[#808080] text-sm mt-10">
          Visit our showroom at{" "}
          <span className="text-[#d4af37] font-semibold">Katpadi, Vellore</span>{" "}
          to see the full collection in person.
        </p>
      </div>
    </section>
  );
}
