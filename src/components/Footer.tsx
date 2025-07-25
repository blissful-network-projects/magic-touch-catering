"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Corporate Events", href: "/corporate-events" },
        { name: "Wedding Catering", href: "/wedding-catering" },
        { name: "Private Parties", href: "/private-parties" },
        { name: "Special Occasions", href: "/special-occasions" }
      ]
    },
    {
      title: "Menu",
      links: [
        { name: "Appetizers", href: "/appetizers" },
        { name: "Main Courses", href: "/main-courses" },
        { name: "Desserts", href: "/desserts" },
        { name: "Beverages", href: "/beverages" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about-us" },
        { name: "Our Team", href: "/our-team" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Gallery", href: "/gallery" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "Get Quote", href: "/get-quote" },
        { name: "Book Consultation", href: "/book-consultation" },
        { name: "Emergency Catering", href: "/emergency-catering" },
        { name: "FAQ", href: "/faq" }
      ]
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#F1E6D1]/60 hover:text-[#C7A965] transition-colors text-sm"
                    >
                      {link.name}
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