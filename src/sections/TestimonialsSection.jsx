import { useScrollAnimation } from "../hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Vellore",
    rating: 5,
    text: "Bought a Casio G-Shock from Time Park and couldn't be happier! The staff was very helpful and the price was unbeatable. Highly recommended for anyone in Vellore!",
    initials: "RK",
    color: "#d4af37",
  },
  {
    name: "Priya Lakshmi",
    location: "Katpadi",
    rating: 5,
    text: "Amazing collection! I was looking for a Fastrack Ladies watch and they had at least 20 options. Very genuine products with warranty. Will definitely shop again.",
    initials: "PL",
    color: "#9b59b6",
  },
  {
    name: "Senthil Nathan",
    location: "Vellore",
    rating: 5,
    text: "Got a beautiful wall clock for my home. The quality is top-notch and price is fair. Aslam bhai was very friendly and patient. Best watch shop in Vellore!",
    initials: "SN",
    color: "#2ecc71",
  },
  {
    name: "Divya Menon",
    location: "Arcot",
    rating: 5,
    text: "Purchased a Rado watch as a gift for my husband. The presentation, packaging, and service was 5-star quality. Time Park is a hidden gem in Vellore!",
    initials: "DM",
    color: "#e74c3c",
  },
  {
    name: "Arjun Selvam",
    location: "Vellore",
    rating: 5,
    text: "Great experience buying a Sonata watch. No pressure selling, honest advice and great discount. The shop interior is also very neat and professional.",
    initials: "AS",
    color: "#4a90d9",
  },
  {
    name: "Kavitha Raman",
    location: "Katpadi",
    rating: 4,
    text: "Visited for an alarm clock and ended up buying a beautiful table clock too! The variety is impressive. Big fan of this showroom. Will spread the word.",
    initials: "KR",
    color: "#f39c12",
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? "star text-lg" : "text-[#333] text-lg"}>★</span>
    ))}
  </div>
);

// Each card direction alternates: left, up, right, left, up, right
const cardDir = ["anim-slide-left", "anim-slide-up", "anim-slide-right"];

export default function TestimonialsSection() {
  const heading = useScrollAnimation();
  const grid = useScrollAnimation(0.05);
  const rating = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-14 anim-hidden ${heading.isVisible ? "anim-slide-up" : ""}`}
        >
          <p className="text-[#d4af37] text-sm font-semibold tracking-[3px] uppercase mb-3">Happy Customers</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            What Our <span className="text-gold-gradient">Customers Say</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mb-4" />
          <p className="text-[#bfbfbf]">Over 10,000+ satisfied customers from Vellore and beyond.</p>
        </div>

        {/* Grid */}
        <div ref={grid.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6 hover:border-[#d4af37]/40 transition-all duration-300 card-hover relative overflow-hidden anim-hidden ${
                grid.isVisible ? cardDir[i % 3] : ""
              }`}
              style={grid.isVisible ? { animationDelay: `${i * 0.1}s` } : {}}
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-5 text-6xl text-[#1a1a1a] font-serif select-none group-hover:text-[#d4af37]/10 transition-colors">"</span>
              <Stars count={t.rating} />
              <p className="text-[#bfbfbf] text-sm leading-relaxed mt-3 mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3 border-t border-[#1f1f1f] pt-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}aa)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-[#808080] text-xs">{t.location}</p>
                </div>
                <span className="ml-auto text-[10px] text-[#d4af37] font-semibold border border-[#d4af37]/30 px-2 py-0.5 rounded-full">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div
          ref={rating.ref}
          className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 bg-[#121212] border border-[#d4af37]/20 rounded-2xl p-6 max-w-lg mx-auto anim-hidden ${rating.isVisible ? "anim-scale-in" : ""}`}
        >
          <div className="text-center">
            <p className="font-display font-bold text-5xl text-gold-gradient">4.9</p>
            <Stars count={5} />
            <p className="text-[#808080] text-xs mt-1">Average Rating</p>
          </div>
          <div className="w-px h-16 bg-[#1f1f1f] hidden sm:block" />
          <div className="text-center">
            <p className="font-display font-bold text-4xl text-white">10K+</p>
            <p className="text-[#d4af37] font-semibold text-sm">Happy Customers</p>
            <p className="text-[#808080] text-xs">In Vellore & Beyond</p>
          </div>
        </div>
      </div>
    </section>
  );
}
