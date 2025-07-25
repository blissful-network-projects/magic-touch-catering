
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1B1B1B] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-light text-[#9B8FC7] mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl heading-secondary text-[#F5F3F0] mb-4">
            Page Not Found
          </h2>
          <p className="text-[#F5F3F0]/70 body-luxury mb-8">
            The page you're looking for seems to have been moved or doesn't exist. 
            Let us help you find what you're looking for.
          </p>
        </div>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] text-white rounded-full hover:shadow-2xl hover:shadow-[#9B8FC7]/30 transition-all duration-300 font-medium tracking-wide transform hover:scale-105"
          >
            Return Home
          </Link>
          <Link
            href="/services"
            className="inline-block px-8 py-4 border border-[#9B8FC7] text-[#9B8FC7] rounded-full hover:bg-[#9B8FC7] hover:text-white transition-all duration-300 font-medium tracking-wide"
          >
            View Services
          </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <Link href="/services" className="text-[#F5F3F0]/60 hover:text-[#A8C4A0] transition-colors">
            Services
          </Link>
          <Link href="/gallery" className="text-[#F5F3F0]/60 hover:text-[#A8C4A0] transition-colors">
            Gallery
          </Link>
          <Link href="/faq" className="text-[#F5F3F0]/60 hover:text-[#A8C4A0] transition-colors">
            FAQ
          </Link>
          <Link href="/#contact" className="text-[#F5F3F0]/60 hover:text-[#A8C4A0] transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
