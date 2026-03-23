import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/919443018945?text=Hello%20Time%20Park%2C%20I%20am%20interested%20in%20your%20watch%20collection!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="floating-btn"
        style={{
          bottom: '96px',
          right: '20px',
          background: 'linear-gradient(135deg, #25d366, #128c7e)',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.5)',
        }}
      >
        <MessageCircle size={24} className="text-white" />
      </a>

      {/* Call Now */}
      <a
        href="tel:9443018945"
        aria-label="Call Time Park"
        className="floating-btn"
        style={{
          bottom: '28px',
          right: '20px',
          background: 'linear-gradient(135deg, #d4af37, #b8940f)',
          boxShadow: '0 4px 20px rgba(212, 175, 55, 0.5)',
          animation: 'pulse-call 2s infinite',
        }}
      >
        <Phone size={22} className="text-black" />
      </a>

      <style>{`
        @keyframes pulse-call {
          0%, 100% { box-shadow: 0 4px 20px rgba(212,175,55,0.5); }
          50%       { box-shadow: 0 4px 35px rgba(212,175,55,0.9), 0 0 0 8px rgba(212,175,55,0.15); }
        }
      `}</style>
    </>
  );
}
