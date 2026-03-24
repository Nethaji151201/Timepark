import {
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Brands", href: "#brands" },
  { label: "Products", href: "#products" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const categories = [
  "Wrist Watches",
  "Wall Clocks",
  "Table Clocks",
  "Alarm Clocks",
  "Fastrack Watches",
  "Casio Watches",
];

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f] pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/timepark_logo.png" alt="" />
              </div>
              <div>
                <p className="font-display font-bold text-base text-white tracking-wide">
                  TIME PARK
                </p>
                <p className="text-[#d4af37] text-[9px] tracking-[3px] uppercase">
                  Premium Watches
                </p>
              </div>
            </div>
            <p className="text-[#808080] text-sm leading-relaxed mb-4">
              Vellore's most trusted premium watch showroom, offering 100%
              genuine timepieces from top brands.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[#1f1f1f] flex items-center justify-center text-[#808080] hover:text-[#d4af37] hover:border-[#d4af37]/50 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-[#d4af37]" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-[#808080] text-sm hover:text-[#d4af37] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1f1f1f] group-hover:bg-[#d4af37] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-[#d4af37]" />
              Categories
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#products"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("#products");
                    }}
                    className="text-[#808080] text-sm hover:text-[#d4af37] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1f1f1f] group-hover:bg-[#d4af37] transition-colors" />
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-[#d4af37]" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="text-[#d4af37] flex-shrink-0 mt-0.5"
                />
                <p className="text-[#808080] text-sm leading-relaxed">
                  Opp. Bombay Anand Bhavan, Katpadi, Vellore – 632006
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#d4af37] flex-shrink-0" />
                <a
                  href="tel:9443018945"
                  className="text-[#808080] text-sm hover:text-[#d4af37] transition-colors"
                >
                  94430 18945
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} className="text-[#d4af37] flex-shrink-0" />
                <p className="text-[#808080] text-sm">9:30 AM – 9:00 PM</p>
              </li>
              <li>
                <a
                  href="https://wa.me/919443018945?text=Hello%20Time%20Park!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600/20 border border-green-600/30 text-green-400 text-sm font-semibold px-4 py-2 rounded-full hover:bg-green-600/30 transition-all duration-300"
                >
                  <MessageCircle size={14} />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[#808080] text-xs">
          <p>
            © {new Date().getFullYear()} Time Park. All Rights Reserved.
            Vellore's Best Watch Showroom.
          </p>
          <p>
            Designed with <span className="text-[#d4af37]">♥</span> for{" "}
            <span className="text-[#d4af37] font-semibold">Nethaji</span> &amp;
            Time Park
          </p>
        </div>
      </div>
    </footer>
  );
}
