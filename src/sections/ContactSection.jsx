import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";

const timings = [
  { day: "Everyday", time: "9:30 AM – 9:00 PM", open: true },
  // { day: 'Sunday', time: '9:30 AM – 9:00 PM', open: true },
];

export default function ContactSection() {
  const whatsappUrl =
    "https://wa.me/919443018945?text=Hello%20Time%20Park%2C%20I%20am%20interested%20in%20your%20watch%20collection.%20Please%20share%20more%20details.";
  const mapsUrl =
    "https://maps.google.com/?q=Opposite+Bombay+Anand+Bhavan+Suthanthira+Ponvizha+Nagar+Bharathi+Nagar+Katpadi+Vellore+Tamil+Nadu+632006";

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-black relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#d4af37] text-sm font-semibold tracking-[3px] uppercase mb-3">
            Find Us
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Visit Our <span className="text-gold-gradient">Showroom</span>
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Info column */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6 hover:border-[#d4af37]/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">
                    Our Address
                  </h3>
                  <p className="text-[#bfbfbf] text-sm leading-relaxed">
                    Opposite Bombay Anand Bhavan,
                    <br />
                    Suthanthira Ponvizha Nagar,
                    <br />
                    Bharathi Nagar, Katpadi,
                    <br />
                    <span className="text-[#d4af37] font-semibold">
                      Vellore, Tamil Nadu – 632006
                    </span>
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#d4af37] text-sm font-semibold mt-3 hover:underline"
                  >
                    <Navigation size={14} />
                    Get Directions on Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6 hover:border-[#d4af37]/40 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">
                    Call Us
                  </h3>
                  <a
                    href="tel:9443018945"
                    className="text-[#d4af37] font-bold text-xl hover:text-[#e8c84a] transition-colors"
                  >
                    94430 18945
                  </a>
                  <p className="text-[#808080] text-xs mt-0.5">
                    Tap to call directly
                  </p>
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6 hover:border-[#d4af37]/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-[#d4af37]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base mb-3">
                    Shop Timings
                  </h3>
                  {timings.map((t) => (
                    <div
                      key={t.day}
                      className="flex items-center justify-between py-2 border-b border-[#1f1f1f] last:border-0"
                    >
                      <span className="text-[#bfbfbf] text-sm">{t.day}</span>
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${t.open ? "bg-green-500" : "bg-red-500"}`}
                        />
                        <span className="text-[#d4af37] font-semibold text-sm">
                          {t.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:9443018945"
                className="flex-1 flex items-center justify-center gap-2 bg-[#d4af37] text-black font-bold py-3.5 rounded-xl hover:bg-[#e8c84a] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] btn-shine"
              >
                <Phone size={17} />
                Call Now
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-3.5 rounded-xl hover:bg-green-500 transition-all duration-300"
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div
            className="rounded-2xl overflow-hidden border border-[#1f1f1f] shadow-2xl"
            style={{ height: "480px" }}
          >
            <iframe
              title="Time Park Vellore Location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1916704862456!2d79.1372335!3d12.959583799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad4768d0eb8259%3A0xb4020a59334329e7!2sTime%20Park!5e0!3m2!1sen!2sin!4v1774275282237!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter:
                  "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
