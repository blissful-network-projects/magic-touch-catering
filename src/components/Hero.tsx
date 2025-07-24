"use client";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/magic-touch-banquet-food.jpg')", // ensure this is in /public
        }}
      />

      {/* Soft Gradient Overlay Instead of Opaque Color */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-black)]/40 to-[var(--color-brand-black)]/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
        <p className="tracking-[0.35em] text-[var(--color-brand-gold)] text-sm md:text-base uppercase mb-4">
          Experience
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-[var(--color-brand-champagne)]">
          Magic Touch Catering
        </h1>
        <p className="max-w-2xl text-sm md:text-lg text-[var(--color-brand-champagne)]/90 mb-8">
          Discover a gastronomic experience that transforms any occasion into unforgettable memories.
        </p>
        <button className="px-8 py-3 rounded-full border border-[var(--color-brand-gold)] text-[var(--color-brand-black)] bg-[var(--color-brand-gold)] hover:bg-transparent hover:text-[var(--color-brand-champagne)] transition-all duration-300">
          Learn More
        </button>
      </div>

      {/* Navigation Arrows */}
      {/* ✅ Left Arrow */}
<div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
  <button
    className="h-16 w-16 flex items-center justify-center border border-[#F6F0E4]/70 rounded-full 
    text-[#F6F0E4] text-2xl 
    transition-all duration-300 ease-out 
    hover:scale-110 hover:border-[#C1A35F] hover:text-[#C1A35F]"
  >
    &#8592;
  </button>
</div>

{/* ✅ Right Arrow */}
<div className="absolute right-6 top-1/2 -translate-y-1/2 z-10">
  <button
    className="h-16 w-16 flex items-center justify-center border border-[#F6F0E4]/70 rounded-full 
    text-[#F6F0E4] text-2xl 
    transition-all duration-300 ease-out 
    hover:scale-110 hover:border-[#C1A35F] hover:text-[#C1A35F]"
  >
    &#8594;
  </button>
</div>

    </section>
  );
}

