"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [loading, setLoading] = useState(true);
  const [textVisible, setTextVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/magic-touch-banquet-food.jpg",
    "/elegant-wedding-catering-setup.jpg",
    "/luxury-catering-experience.jpg",
    "/professional-catering-presentation.jpg",
    "/gourmet-catering-display.jpg",
  ];

  useEffect(() => {
    // Refined luxury loading sequence - faster for premium feel
    const timer1 = setTimeout(() => {
      setLoading(false);
    }, 1500);

    const timer2 = setTimeout(() => {
      setTextVisible(true);
    }, 1800);

    // Image carousel with elegant timing
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(imageInterval);
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length,
    );
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1B1B1B] to-[#000000] z-[60] flex items-center justify-center">
        <div className="text-center relative">
          {/* Premium loading animation with enhanced luxury backdrop */}
          <div className="relative">
            {/* Enhanced luxury backdrop glow */}
            <div className="absolute inset-0 w-40 h-40 mx-auto -mt-6 rounded-full bg-gradient-to-r from-[#9B8FC7]/30 via-[#A8C4A0]/25 to-[#9B8FC7]/30 blur-3xl animate-pulse"></div>

            <div className="relative w-28 h-28 mx-auto mb-8 rounded-full border border-[#9B8FC7]/30 overflow-hidden bg-gradient-to-br from-[#9B8FC7]/5 to-[#A8C4A0]/5 backdrop-blur-sm">
              <img
                src="/magic-touch-catering-logo.svg"
                alt="Magic Touch Catering"
                className="w-full h-full object-contain opacity-0 animate-[fadeIn_0.8s_ease-in-out_0.3s_forwards] p-4"
              />
            </div>

            {/* Simplified loading ring */}
            <div className="absolute inset-0 w-28 h-28 mx-auto -mt-2">
              <div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#9B8FC7] animate-spin"
                style={{ animationDuration: "2s" }}
              ></div>
            </div>
          </div>

          <div className="space-y-3 opacity-0 animate-[fadeIn_0.8s_ease-in-out_0.8s_forwards]">
            <div className="text-[#A8C4A0] text-xs tracking-[0.4em] uppercase font-medium drop-shadow-lg">
              Curating Excellence
            </div>
            <div className="text-white text-xl tracking-wide font-light drop-shadow-lg">
              Your Extraordinary Experience Awaits
            </div>
          </div>

          {/* Elegant loading indicator */}
          <div className="flex justify-center items-center space-x-2 mt-8 opacity-0 animate-[fadeIn_0.8s_ease-in-out_1.2s_forwards]">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#9B8FC7] to-transparent animate-pulse"></div>
            <div
              className="w-1.5 h-1.5 bg-[#A8C4A0] rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-1.5 h-1.5 bg-[#9B8FC7] rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-1.5 h-1.5 bg-[#A8C4A0] rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#9B8FC7] to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background Images with Smooth Transitions */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      {/* Enhanced Multi-layer Gradient Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#1B1B1B]/50 to-[#1B1B1B]/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B1B1B]/40 via-transparent to-[#1B1B1B]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#9B8FC7]/8 via-transparent to-transparent" />

      {/* Additional text readability overlay */}
      <div className="absolute inset-0 bg-[#000000]/15" />

      {/* Floating luxury elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#9B8FC7]/30 rounded-full animate-pulse"></div>
      <div
        className="absolute top-40 right-16 w-1 h-1 bg-[#A8C4A0]/40 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-[#9B8FC7]/20 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Content */}
      <div
        className={`relative z-20 flex flex-col justify-center items-center h-full px-4 text-center transition-all duration-1000 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-5xl mx-auto">
          {/* Premium Brand Line with Enhanced Visibility */}
          <div className="flex items-center justify-center mb-8 opacity-0 animate-[slideUp_0.8s_ease-out_0.3s_forwards]">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#A8C4A0]/80"></div>
            <p className="mx-6 tracking-[0.5em] text-[#A8C4A0] text-xs uppercase font-medium drop-shadow-lg">
              Exquisite Culinary Artistry
            </p>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#A8C4A0]/80"></div>
          </div>

          {/* Dramatic Typography with Enhanced Visibility */}
          <h1 className="relative opacity-0 animate-[slideUp_0.8s_ease-out_0.6s_forwards]">
            <span className="block text-6xl md:text-8xl lg:text-9xl font-extralight leading-none mb-4 text-white tracking-tight drop-shadow-2xl">
              Magic Touch
            </span>
            <span className="block text-3xl md:text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-[#A8C4A0] via-[#9B8FC7] to-[#A8C4A0] bg-clip-text font-light tracking-[0.2em] drop-shadow-lg">
              CATERING
            </span>
            {/* Enhanced luxury underline */}
            <div className="w-32 h-px bg-gradient-to-r from-[#9B8FC7] via-[#A8C4A0] to-[#9B8FC7] mx-auto mt-6 drop-shadow-md"></div>
          </h1>

          {/* Elevated Description with Better Contrast */}
          <div className="max-w-3xl mx-auto mt-12 mb-16 opacity-0 animate-[slideUp_0.8s_ease-out_0.9s_forwards]">
            <p className="text-lg md:text-xl text-white/95 font-light leading-relaxed tracking-wide drop-shadow-lg">
              Where culinary mastery transcends expectation. We orchestrate
              <span className="text-[#A8C4A0] font-medium drop-shadow-md">
                {" "}
                extraordinary gastronomic symphonies{" "}
              </span>
              that transform your most treasured moments into timeless memories.
            </p>
          </div>

          {/* Premium Call-to-Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-[slideUp_0.8s_ease-out_1.2s_forwards]">
            <button className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] text-white font-medium tracking-[0.1em] text-sm uppercase overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#9B8FC7]/25 hover:scale-105">
              <span className="relative z-10">Begin Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#A8C4A0] to-[#9B8FC7] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button className="group px-10 py-4 rounded-full border border-[#F9F7F4]/40 text-[#F9F7F4] hover:border-[#9B8FC7] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/10 transition-all duration-500 font-light tracking-[0.1em] text-sm uppercase backdrop-blur-sm">
              <span className="group-hover:tracking-[0.15em] transition-all duration-300">
                Discover Excellence
              </span>
            </button>
          </div>

          {/* Elegant Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 mt-16 opacity-0 animate-[slideUp_0.8s_ease-out_1.5s_forwards]">
            <div className="text-center">
              <div className="text-2xl font-light text-[#9B8FC7] mb-1">
                500+
              </div>
              <div className="text-xs text-[#F9F7F4]/60 tracking-wider uppercase">
                Premium Events
              </div>
            </div>
            <div className="w-px"></div>
            <div className="text-center">
              <div className="text-2xl font-light text-[#A8C4A0] mb-1">20+</div>
              <div className="text-xs text-[#F9F7F4]/60 tracking-wider uppercase">
                Years Excellence
              </div>
            </div>
          </div>
        </div>

        {/* Premium Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards]">
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="text-[#F9F7F4]/50 text-xs tracking-[0.3em] uppercase mb-3 group-hover:text-[#9B8FC7] transition-colors duration-300">
              Explore
            </div>
            <div className="relative">
              <div className="w-px h-10 bg-gradient-to-b from-[#9B8FC7] via-[#A8C4A0] to-transparent group-hover:from-[#A8C4A0] group-hover:via-[#9B8FC7] transition-all duration-500"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#9B8FC7] rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows with Enhanced Visibility */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={prevImage}
          className="h-16 w-16 flex items-center justify-center border-2 border-white/40 rounded-full 
          text-white text-2xl backdrop-blur-md bg-black/25 shadow-2xl
          transition-all duration-300 ease-out 
          hover:scale-110 hover:border-[#A8C4A0] hover:text-[#A8C4A0] hover:bg-[#A8C4A0]/15"
        >
          &#8592;
        </button>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={nextImage}
          className="h-16 w-16 flex items-center justify-center border-2 border-white/40 rounded-full 
          text-white text-2xl backdrop-blur-md bg-black/25 shadow-2xl
          transition-all duration-300 ease-out 
          hover:scale-110 hover:border-[#A8C4A0] hover:text-[#A8C4A0] hover:bg-[#A8C4A0]/15"
        >
          &#8594;
        </button>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-[#9B8FC7] w-8"
                  : "bg-[#F9F7F4]/30 hover:bg-[#F9F7F4]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
