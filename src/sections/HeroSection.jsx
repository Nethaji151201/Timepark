import heroImg from "../assets/images/showroom/hero.png";
import { PhoneCall, MapPin, ShoppingBag, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Time Park hero section"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Luxury watch showroom Time Park Vellore"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Multi-layer overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      {/* Gold particle dots decoration */}
      <div
        className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-[#d4af37] opacity-60 animate-ping"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-[#d4af37] opacity-40 animate-ping"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/5 w-1 h-1 rounded-full bg-[#d4af37] opacity-30 animate-ping"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#d4af37]/40 bg-[#d4af37]/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] pulse-gold" />
            <span className="text-[#d4af37] text-xs font-medium tracking-[2px] uppercase">
              Vellore's Best Watch Showroom
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-4 fade-up">
            Premium&nbsp;Watch{" "}
            <span className="text-gold-gradient">Showroom</span>{" "}
            <br className="hidden sm:block" />
            in&nbsp;Vellore
          </h1>

          {/* Sub brands */}
          <p
            className="text-[#bfbfbf] text-lg sm:text-xl mb-3 fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Fastrack &bull; Titan &bull; Sonata &bull; Wings &bull; Casio &bull;
            G-Shock &bull; Rado
          </p>

          {/* Urgency */}
          <p
            className="inline-block bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-sm font-semibold px-4 py-1.5 rounded-full mb-8 pulse-gold fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            🔥 Limited Stock Available – Visit Today!
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <button
              onClick={() => scrollTo("products")}
              className="flex items-center gap-2 bg-[#d4af37] text-black font-bold text-base px-7 py-3.5 rounded-full hover:bg-[#e8c84a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] btn-shine ripple-effect"
            >
              <ShoppingBag size={18} />
              Shop Now
            </button>
            <a
              href="tel:9443018945"
              className="flex items-center gap-2 border-2 border-[#d4af37] text-[#d4af37] font-bold text-base px-7 py-3.5 rounded-full hover:bg-[#d4af37] hover:text-black transition-all duration-300 ripple-effect"
            >
              <PhoneCall size={18} />
              Call Now
            </a>
            <a
              href="https://maps.google.com/?q=Opposite+Bombay+Anand+Bhavan+Suthanthira+Ponvizha+Nagar+Bharathi+Nagar+Katpadi+Vellore+Tamil+Nadu+632006"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-semibold text-base px-7 py-3.5 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <MapPin size={18} />
              Get Directions
            </a>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-4 mt-12 max-w-lg fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Watch Brands" },
              { value: "10K+", label: "Happy Customers" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-bold text-2xl sm:text-3xl text-gold-gradient">
                  {stat.value}
                </p>
                <p className="text-[#808080] text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={() => scrollTo("about")}
      >
        <span className="text-[#d4af37] text-xs tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown size={20} className="text-[#d4af37] animate-bounce" />
      </div>
    </section>
  );
}
