import { useState, useEffect } from "react";
import { Menu, X, Clock } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Brands", href: "#brands" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-[#1f1f1f] shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLink("#home");
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-12 h-12 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300">
              <img src="/timepark_logo.png" alt="" />
            </div>
            <div className="leading-none">
              <p className="font-display font-bold text-lg text-white tracking-wide">
                TIME PARK
              </p>
              <p className="text-[#d4af37] text-[9px] tracking-[3px] uppercase">
                Premium Watches
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLink(link.href);
                }}
                className="text-[#bfbfbf] hover:text-[#d4af37] text-sm font-medium tracking-wider uppercase transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4af37] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:9443018945"
              className="hidden sm:flex items-center gap-2 bg-[#d4af37] text-black text-sm font-bold px-5 py-2 rounded-full hover:bg-[#e8c84a] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] btn-shine"
            >
              Call Now
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-[#bfbfbf] hover:text-[#d4af37] transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/98 border-t border-[#1f1f1f] px-4 pt-4 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLink(link.href);
              }}
              className="flex items-center gap-2 text-[#bfbfbf] hover:text-[#d4af37] py-3 text-sm font-medium tracking-wider uppercase border-b border-[#1f1f1f] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              {link.label}
            </a>
          ))}
          <a
            href="tel:9443018945"
            className="flex items-center justify-center gap-2 mt-4 bg-[#d4af37] text-black font-bold py-3 rounded-full text-sm"
          >
            📞 Call Now – 94430 18945
          </a>
        </div>
      </div>
    </nav>
  );
}
