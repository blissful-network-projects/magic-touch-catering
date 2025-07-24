
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
    <footer className="relative bg-gradient-to-b from-[var(--color-brand-background)] to-[var(--color-brand-contrast)] border-t border-[var(--color-brand-primary)]/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] p-0.5">
                <div className="flex items-center justify-center w-full h-full rounded-full bg-white">
                  <img
                    src="/magic-touch-catering-logo.svg"
                    alt="Magic Touch Catering"
                    className="max-h-10 w-auto filter brightness-0"
                  />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-light text-white tracking-wider">Magic Touch</h3>
                <p className="text-xs text-[var(--color-brand-accent)] tracking-[0.2em] uppercase">Catering</p>
              </div>
            </div>
            
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              Creating extraordinary culinary experiences that transform your most important occasions into unforgettable memories. Excellence is not just our standard—it's our signature.
            </p>
            
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 rounded-full border border-[var(--color-brand-accent)]/30 text-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent)] hover:text-black transition-all duration-300 flex items-center justify-center text-sm"
                >
                  {social[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-medium mb-6 tracking-wide">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-[var(--color-brand-accent)] transition-colors text-sm"
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
      <div className="border-t border-[var(--color-brand-accent)]/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/50 text-sm">
              © {currentYear} Magic Touch Catering. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/50 hover:text-[var(--color-brand-accent)] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-[var(--color-brand-accent)] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/50 hover:text-[var(--color-brand-accent)] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[var(--color-brand-primary)] to-transparent"></div>
    </footer>
  );
}
