
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
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-[#1B1B1B] via-[#2A2A2A] to-[#1B1B1B] z-[60] flex items-center justify-center">
        <div className="text-center">
          {/* Enhanced loading animation with brand colors */}
          <div className="relative">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full border-2 border-[#9B8FC7]/30 overflow-hidden bg-[#F5F3F0]/5 backdrop-blur-sm">
              <img
                src="/magic-touch-catering-logo.svg"
                alt="Magic Touch Catering"
                className="w-full h-full object-contain p-4 opacity-0 animate-[fadeIn_1s_ease-in-out_0.5s_forwards]"
              />
            </div>

            {/* Elegant loading rings with brand colors */}
            <div className="absolute inset-0 w-32 h-32 mx-auto">
              <div className="absolute inset-0 rounded-full border-3 border-transparent border-t-[#9B8FC7] animate-spin"></div>
              <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-[#A8C4A0] animate-spin animate-reverse" style={{ animationDuration: '2s' }}></div>
              <div className="absolute inset-4 rounded-full border-2 border-transparent border-t-[#F5F3F0]/40 animate-spin" style={{ animationDuration: '3s' }}></div>
            </div>
          </div>

          <div className="space-y-3 opacity-0 animate-[fadeIn_0.8s_ease-in-out_1.2s_forwards]">
            <div className="text-[#9B8FC7] text-sm tracking-[0.4em] uppercase font-light">Crafting</div>
            <div className="text-[#F5F3F0] text-xl tracking-wider font-light">Your Culinary Masterpiece</div>
          </div>

          {/* Enhanced loading dots */}
          <div className="flex justify-center space-x-2 mt-8 opacity-0 animate-[fadeIn_0.8s_ease-in-out_1.5s_forwards]">
            <div className="w-2 h-2 bg-[#9B8FC7] rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-[#A8C4A0] rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-2 h-2 bg-[#9B8FC7] rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Enhanced Transitions */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ${
            index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ 
            backgroundImage: `url('${image}')`,
            filter: 'brightness(1.1) contrast(1.05) saturate(1.1)'
          }}
        />
      ))}

      {/* Refined Gradient Overlay for Better Food Visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B]/20 via-[#1B1B1B]/30 to-[#1B1B1B]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B1B1B]/10 via-transparent to-[#1B1B1B]/10" />
      
      {/* Premium Brand Glow */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#9B8FC7]/5 to-transparent" />

      {/* Content */}
      <div className={`relative z-10 flex flex-col justify-center items-center h-full px-4 text-center transition-all duration-1500 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Brand Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#F5F3F0]/10 backdrop-blur-md border border-[#9B8FC7]/30 rounded-full mb-8 opacity-0 animate-[slideUp_0.8s_ease-out_0.3s_forwards]">
            <div className="w-8 h-8 rounded-full bg-[#9B8FC7]/20 flex items-center justify-center">
              <div className="w-3 h-3 bg-[#9B8FC7] rounded-full animate-pulse"></div>
            </div>
            <span className="tracking-[0.3em] text-[#F5F3F0] text-xs uppercase font-light">Est. 2000 • Premium Catering</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin leading-tight mb-6 text-[#F5F3F0] opacity-0 animate-[slideUp_0.8s_ease-out_0.6s_forwards]">
            <span className="block bg-gradient-to-r from-[#F5F3F0] via-[#F5F3F0] to-[#F5F3F0]/90 bg-clip-text text-transparent">
              Magic Touch
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-[#9B8FC7] via-[#A8C4A0] to-[#9B8FC7] bg-clip-text text-transparent font-light tracking-wider mt-2">
              Catering
            </span>
          </h1>

          {/* Enhanced Separator */}
          <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-[slideUp_0.8s_ease-out_0.9s_forwards]">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#9B8FC7]"></div>
            <div className="w-2 h-2 bg-[#A8C4A0] rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#9B8FC7]"></div>
          </div>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#F5F3F0]/95 mb-12 font-light leading-relaxed opacity-0 animate-[slideUp_0.8s_ease-out_1.2s_forwards]">
            Where culinary artistry meets flawless execution. We don't just cater events — we craft unforgettable experiences that transform your vision into extraordinary moments.
          </p>

          {/* Enhanced Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-[slideUp_0.8s_ease-out_1.5s_forwards]">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] text-white rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#9B8FC7]/40 font-medium tracking-wider text-sm uppercase">
              <span className="relative z-10">Discover Our Artistry</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#A8C4A0] to-[#9B8FC7] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button className="group px-10 py-5 border-2 border-[#F5F3F0]/40 text-[#F5F3F0] bg-[#F5F3F0]/5 backdrop-blur-sm rounded-full hover:border-[#A8C4A0] hover:text-[#A8C4A0] hover:bg-[#A8C4A0]/10 transition-all duration-500 font-light tracking-wider text-sm uppercase">
              View Our Portfolio
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>

          {/* Elevated Achievement Badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 opacity-0 animate-[slideUp_0.8s_ease-out_1.8s_forwards]">
            <div className="text-center">
              <div className="text-2xl font-light text-[#9B8FC7] mb-1">500+</div>
              <div className="text-xs text-[#F5F3F0]/60 tracking-wider uppercase">Events</div>
            </div>
            <div className="w-px h-12 bg-[#F5F3F0]/20"></div>
            <div className="text-center">
              <div className="text-2xl font-light text-[#A8C4A0] mb-1">20+</div>
              <div className="text-xs text-[#F5F3F0]/60 tracking-wider uppercase">Years</div>
            </div>
            <div className="w-px h-12 bg-[#F5F3F0]/20"></div>
            <div className="text-center">
              <div className="text-2xl font-light text-[#9B8FC7] mb-1">5★</div>
              <div className="text-xs text-[#F5F3F0]/60 tracking-wider uppercase">Rating</div>
            </div>
          </div>
        </div>

        {/* Refined Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeIn_1s_ease-out_2.5s_forwards]">
          <div className="flex flex-col items-center">
            <div className="text-[#F5F3F0]/70 text-xs tracking-wider uppercase mb-3 animate-pulse">Explore</div>
            <div className="w-6 h-10 border border-[#9B8FC7]/40 rounded-full flex justify-center">
              <div className="w-px h-3 bg-[#9B8FC7] rounded-full animate-bounce mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={prevImage}
          className="h-16 w-16 flex items-center justify-center border border-[#F5F3F0]/30 rounded-full 
          text-[#F5F3F0] text-2xl backdrop-blur-md bg-[#1B1B1B]/20
          transition-all duration-300 ease-out 
          hover:scale-110 hover:border-[#9B8FC7] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/15 hover:shadow-lg hover:shadow-[#9B8FC7]/20"
        >
          &#8592;
        </button>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={nextImage}
          className="h-16 w-16 flex items-center justify-center border border-[#F5F3F0]/30 rounded-full 
          text-[#F5F3F0] text-2xl backdrop-blur-md bg-[#1B1B1B]/20
          transition-all duration-300 ease-out 
          hover:scale-110 hover:border-[#9B8FC7] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/15 hover:shadow-lg hover:shadow-[#9B8FC7]/20"
        >
          &#8594;
        </button>
      </div>

      {/* Premium Image Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3 bg-[#1B1B1B]/30 backdrop-blur-sm px-4 py-2 rounded-full border border-[#F5F3F0]/20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`transition-all duration-500 ${
                index === currentImageIndex 
                  ? 'w-8 h-2 bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] rounded-full' 
                  : 'w-2 h-2 bg-[#F5F3F0]/40 hover:bg-[#F5F3F0]/70 rounded-full'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
