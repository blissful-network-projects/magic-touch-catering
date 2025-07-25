"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [loading, setLoading] = useState(true);
  const [textVisible, setTextVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    '/magic-touch-banquet-food.jpg',
    '/elegant-wedding-catering-setup.jpg',
    '/luxury-catering-experience.jpg',
    '/professional-catering-presentation.jpg',
    '/gourmet-catering-display.jpg'
  ];

  useEffect(() => {
    // Epic loading sequence
    const timer1 = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const timer2 = setTimeout(() => {
      setTextVisible(true);
    }, 2500);

    // Image carousel
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

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
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#1B1B1B] z-[60] flex items-center justify-center">
        <div className="text-center">
          {/* Epic loading animation */}
          <div className="relative">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full border-2 border-[#C7A965]/20 overflow-hidden">
              <img
                src="/magic-touch-catering-logo.svg"
                alt="Magic Touch Catering"
                className="w-full h-full object-contain opacity-0 animate-[fadeIn_1s_ease-in-out_0.5s_forwards]"
              />
            </div>

            {/* Elegant loading rings */}
            <div className="absolute inset-0 w-24 h-24 mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C7A965] animate-spin"></div>
              <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-[#C7A965]/60 animate-spin animate-reverse" style={{ animationDuration: '2s' }}></div>
            </div>
          </div>

          <div className="space-y-2 opacity-0 animate-[fadeIn_0.8s_ease-in-out_1.2s_forwards]">
            <div className="text-[#9B8FC7] text-sm tracking-[0.3em] uppercase font-light">Preparing</div>
            <div className="text-[#F9F7F4] text-lg tracking-wider font-light">Your Culinary Experience</div>
          </div>

          {/* Loading dots */}
          <div className="flex justify-center space-x-1 mt-6 opacity-0 animate-[fadeIn_0.8s_ease-in-out_1.5s_forwards]">
            <div className="w-2 h-2 bg-[#9B8FC7] rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-[#9B8FC7] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-[#9B8FC7] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Smooth Transitions */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      {/* Sophisticated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B]/30 via-[#1B1B1B]/50 to-[#1B1B1B]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B1B1B]/20 via-transparent to-[#1B1B1B]/20" />

      {/* Content */}
      <div className={`relative z-10 flex flex-col justify-center items-center h-full px-4 text-center transition-all duration-1000 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto">
          <p className="tracking-[0.4em] text-[#9B8FC7] text-xs md:text-sm uppercase mb-6 font-light opacity-0 animate-[slideUp_0.8s_ease-out_0.5s_forwards]">
            Exquisite Culinary Artistry
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin leading-tight mb-8 text-[#F9F7F4] opacity-0 animate-[slideUp_0.8s_ease-out_0.8s_forwards]">
            Magic Touch
            <span className="block text-4xl md:text-5xl lg:text-6xl text-[#A8C4A0] font-light tracking-wider mt-2">
              Catering
            </span>
          </h1>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#9B8FC7] to-transparent mx-auto mb-8 opacity-0 animate-[slideUp_0.8s_ease-out_1.1s_forwards]"></div>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-[#F9F7F4]/90 mb-12 font-light leading-relaxed opacity-0 animate-[slideUp_0.8s_ease-out_1.4s_forwards]">
            Where culinary excellence meets impeccable service. We transform your most important occasions into extraordinary gastronomic experiences that linger in memory long after the last bite.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[slideUp_0.8s_ease-out_1.7s_forwards]">
            <button className="px-8 py-4 rounded-full border border-[#9B8FC7] text-white bg-[#9B8FC7] hover:bg-transparent hover:text-[#F9F7F4] transition-all duration-500 font-medium tracking-wider text-sm uppercase">
              Explore Our Artistry
            </button>
            <button className="px-8 py-4 rounded-full border border-[#F9F7F4]/30 text-[#F9F7F4] hover:border-[#A8C4A0] hover:text-[#A8C4A0] transition-all duration-500 font-light tracking-wider text-sm uppercase">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeIn_1s_ease-out_2.5s_forwards]">
          <div className="flex flex-col items-center">
            <div className="text-[#F9F7F4]/60 text-xs tracking-wider uppercase mb-2">Scroll</div>
            <div className="w-px h-8 bg-gradient-to-b from-[#9B8FC7] to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Keeping your beautiful design */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={prevImage}
          className="h-16 w-16 flex items-center justify-center border border-[#F9F7F4]/30 rounded-full 
          text-[#F9F7F4] text-2xl backdrop-blur-sm bg-black/10
          transition-all duration-300 ease-out 
          hover:scale-110 hover:border-[#9B8FC7] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/10"
        >
          &#8592;
        </button>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={nextImage}
          className="h-16 w-16 flex items-center justify-center border border-[#F9F7F4]/30 rounded-full 
          text-[#F9F7F4] text-2xl backdrop-blur-sm bg-black/10
          transition-all duration-300 ease-out 
          hover:scale-110 hover:border-[#9B8FC7] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/10"
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
                  ? 'bg-[#9B8FC7] w-8' 
                  : 'bg-[#F9F7F4]/30 hover:bg-[#F9F7F4]/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}