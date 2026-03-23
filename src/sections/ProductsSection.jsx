import { useState } from "react";
import { ShoppingBag, Phone } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import wristImg from "../assets/images/watches/wristwatch.png";
import wallImg from "../assets/images/clocks/wallclock.png";
import tableImg from "../assets/images/clocks/tableclock.png";
import alarmImg from "../assets/images/clocks/alarmclock.png";

const categories = [
  "All",
  "Wrist Watches",
  "Wall Clocks",
  "Table Clocks",
  "Alarm Clocks",
];

const products = [
  {
    id: 1,
    name: "Casio G-Shock Classic",
    brand: "Casio",
    category: "Wrist Watches",
    price: "₹3,499",
    badge: "Best Seller",
    img: wristImg,
    alt: "Casio G-Shock watch Vellore showroom",
  },
  {
    id: 2,
    name: "Fastrack Sports Edition",
    brand: "Fastrack",
    category: "Wrist Watches",
    price: "₹1,899",
    badge: "New Arrival",
    img: wristImg,
    alt: "Fastrack sports watch Vellore Time Park",
  },
  {
    id: 3,
    name: "Rado Premium Timepiece",
    brand: "Rado",
    category: "Wrist Watches",
    price: "₹18,999",
    badge: "Luxury",
    img: wristImg,
    alt: "Rado luxury watch Vellore showroom",
  },
  {
    id: 4,
    name: "Sonata Classic Gents",
    brand: "Sonata",
    category: "Wrist Watches",
    price: "₹1,299",
    badge: null,
    img: wristImg,
    alt: "Sonata gents watch Vellore",
  },
  {
    id: 5,
    name: "Designer Wall Clock",
    brand: "Time Park",
    category: "Wall Clocks",
    price: "₹2,499",
    badge: "Top Pick",
    img: wallImg,
    alt: "Designer wall clock Vellore showroom",
  },
  {
    id: 6,
    name: "Golden Accent Wall Clock",
    brand: "Time Park",
    category: "Wall Clocks",
    price: "₹1,899",
    badge: null,
    img: wallImg,
    alt: "Golden wall clock Vellore Time Park",
  },
  {
    id: 7,
    name: "Luxury Table Clock",
    brand: "Time Park",
    category: "Table Clocks",
    price: "₹3,299",
    badge: "Premium",
    img: tableImg,
    alt: "Luxury table clock Vellore showroom",
  },
  {
    id: 8,
    name: "Vintage Alarm Clock",
    brand: "Time Park",
    category: "Alarm Clocks",
    price: "₹999",
    badge: null,
    img: alarmImg,
    alt: "Vintage alarm clock Vellore Time Park",
  },
];

const badgeColors = {
  "Best Seller": "bg-[#d4af37] text-black",
  "New Arrival": "bg-blue-500 text-white",
  Luxury: "bg-purple-600 text-white",
  "Top Pick": "bg-green-600 text-white",
  Premium: "bg-rose-600 text-white",
};

export default function ProductsSection() {
  const [active, setActive] = useState("All");
  const heading = useScrollAnimation();
  const grid = useScrollAnimation(0.05);

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section
      id="products"
      className="py-20 lg:py-28 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-10 anim-hidden ${heading.isVisible ? "anim-slide-up" : ""}`}
        >
          <p className="text-[#d4af37] text-sm font-semibold tracking-[3px] uppercase mb-3">
            Our Collection
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Handpicked <span className="text-gold-gradient">Products</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mb-4" />
          <p className="text-[#bfbfbf] max-w-lg mx-auto">
            Every piece curated for quality, style, and value. Visit Time Park
            in Vellore for the full catalogue.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? "bg-[#d4af37] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                  : "bg-[#121212] text-[#bfbfbf] border border-[#1f1f1f] hover:border-[#d4af37]/40 hover:text-[#d4af37]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div ref={grid.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className={`group bg-[#121212] border border-[#1f1f1f] rounded-2xl overflow-hidden card-hover hover:border-[#d4af37]/40 anim-hidden ${
                grid.isVisible ? (i % 2 === 0 ? "anim-slide-left" : "anim-slide-right") : ""
              }`}
              style={grid.isVisible ? { animationDelay: `${i * 0.08}s` } : {}}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52 bg-[#0d0d0d]">
                <img
                  src={product.img}
                  alt={product.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {product.badge && (
                  <span
                    className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${badgeColors[product.badge]}`}
                  >
                    {product.badge}
                  </span>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-[#d4af37] text-[10px] font-semibold tracking-widest uppercase mb-1">
                  {product.brand}
                </p>
                <h3 className="text-white font-semibold text-base mb-1 group-hover:text-[#d4af37] transition-colors">
                  {product.name}
                </h3>
                {/* <p className="text-[#d4af37] font-bold text-lg mb-4">
                  {product.price}
                </p> */}
                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/919443018945?text=Hello%20Time%20Park!%20I%20am%20interested%20in%20the%20*${encodeURIComponent(product.name)}*%20(${encodeURIComponent(product.brand)}).%20Please%20share%20more%20details%20and%20availability.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-[#d4af37] text-black font-bold text-sm py-2.5 rounded-xl hover:bg-[#e8c84a] transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] btn-shine"
                  >
                    <ShoppingBag size={14} />
                    Buy Now
                  </a>
                  <a
                    href="tel:9443018945"
                    className="flex items-center justify-center gap-1 border border-[#1f1f1f] text-[#bfbfbf] hover:border-[#d4af37]/50 hover:text-[#d4af37] px-3 py-2.5 rounded-xl transition-all duration-300"
                    title="Call for enquiry"
                  >
                    <Phone size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[#bfbfbf] mb-4">
            Can't find what you're looking for?
          </p>
          <a
            href="tel:9443018945"
            className="inline-flex items-center gap-2 border-2 border-[#d4af37] text-[#d4af37] font-bold px-8 py-3 rounded-full hover:bg-[#d4af37] hover:text-black transition-all duration-300"
          >
            <Phone size={16} />
            Call Us – 94430 18945
          </a>
        </div>
      </div>
    </section>
  );
}
