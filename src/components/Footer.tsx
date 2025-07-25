
"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: ["Corporate Events", "Wedding Catering", "Private Parties", "Special Occasions"]
    },
    {
      title: "Menu",
      links: ["Appetizers", "Main Courses", "Desserts", "Beverages"]
    },
    {
      title: "Company",
      links: ["About Us", "Our Team", "Testimonials", "Gallery"]
    },
    {
      title: "Contact",
      links: ["Get Quote", "Book Consultation", "Emergency Catering", "FAQ"]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#1B1B1B] to-[#0F0F0F] border-t border-[#C7A965]/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#9B8FC7] to-[#7D6DB8] p-0.5">
                <div className="flex items-center justify-center w-full h-full rounded-full bg-white">
                  <img
                    src="/magic-touch-catering-logo.svg"
                    alt="Magic Touch Catering"
                    className="max-h-10 w-auto filter brightness-0"
                  />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-light text-[#F5F3F0] tracking-wider">Magic Touch</h3>
                <p className="text-xs text-[#A8C4A0] tracking-[0.2em] uppercase">Catering</p>
              </div>
            </div>
            
            <p className="text-[#F5F3F0]/70 leading-relaxed mb-6 max-w-md">
              Creating extraordinary culinary experiences that transform your most important occasions into unforgettable memories. Excellence is not just our standard—it's our signature.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/AZMagicTouchCatering"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#C7A965]/30 text-[#C7A965] hover:bg-[#C7A965] hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/magic.touch.catering/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#C7A965]/30 text-[#C7A965] hover:bg-[#C7A965] hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348zm3.718-8.348H4.114c-.61 0-1.102-.492-1.102-1.102V5.434c0-.61.492-1.102 1.102-1.102h15.771c.61 0 1.102.492 1.102 1.102v2.104c0 .61-.492 1.102-1.102 1.102z"/>
                  <path d="M12 8.531c-1.934 0-3.5 1.566-3.5 3.5s1.566 3.5 3.5 3.5 3.5-1.566 3.5-3.5-1.566-3.5-3.5-3.5zm0 5.65c-1.187 0-2.15-.963-2.15-2.15s.963-2.15 2.15-2.15 2.15.963 2.15 2.15-.963 2.15-2.15 2.15z"/>
                  <circle cx="15.65" cy="8.35" r=".85"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-[#F1E6D1] font-medium mb-6 tracking-wide">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#F1E6D1]/60 hover:text-[#C7A965] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C7A965]/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[#F1E6D1]/50 text-sm">
              © {currentYear} Magic Touch Catering. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-[#F1E6D1]/50 hover:text-[#C7A965] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#F1E6D1]/50 hover:text-[#C7A965] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-[#F1E6D1]/50 hover:text-[#C7A965] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#9B8FC7] to-transparent"></div>
    </footer>
  );
}
