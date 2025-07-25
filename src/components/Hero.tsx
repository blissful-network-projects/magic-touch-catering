
"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [loading, setLoading] = useState(true);
  const [textVisible, setTextVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const heroImages = [
    '/magic-touch-banquet-food.jpg',
    '/elegant-wedding-catering-setup.jpg',
    '/luxury-catering-experience.jpg',
    '/professional-catering-presentation.jpg',
    '/gourmet-catering-display.jpg'
  ];

  useEffect(() => {
    // Epic loading sequence with smoother transitions
    const timer1 = setTimeout(() => {
      setLoading(false);
    }, 2200);

    const timer2 = setTimeout(() => {
      setTextVisible(true);
    }, 2800);

    // Faster image carousel for more dynamic feel
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    // Mouse tracking for parallax
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };

    // Scroll tracking for parallax
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearInterval(imageInterval);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
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
      <div className="fixed inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1B1B1B] to-[#2A1B2A] z-[60] flex items-center justify-center overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#9B8FC7] rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="text-center relative z-10">
          {/* Enhanced loading animation */}
          <div className="relative mb-12">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full border border-[#9B8FC7]/30 overflow-hidden relative">
              {/* Pulsing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9B8FC7]/10 to-[#A8C4A0]/10 animate-pulse"></div>
              
              <img
                src="/magic-touch-catering-logo.svg"
                alt="Magic Touch Catering"
                className="w-full h-full object-contain opacity-0 animate-[logoReveal_2s_ease-in-out_0.3s_forwards] relative z-10 p-4"
              />
              
              {/* Rotating rings with different speeds */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#9B8FC7] animate-spin"></div>
              <div className="absolute inset-3 rounded-full border-2 border-transparent border-r-[#A8C4A0] animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}></div>
              <div className="absolute inset-6 rounded-full border border-transparent border-b-[#9B8FC7]/60 animate-spin" style={{ animationDuration: '4s' }}></div>
            </div>
          </div>

          {/* Enhanced text with gradient */}
          <div className="space-y-4 opacity-0 animate-[textReveal_1.2s_ease-out_0.8s_forwards]">
            <div className="text-[#A8C4A0] text-sm tracking-[0.4em] uppercase font-light">
              Crafting Excellence
            </div>
            <div className="text-[#F9F7F4] text-2xl tracking-wider font-extralight bg-gradient-to-r from-[#F9F7F4] via-[#9B8FC7] to-[#F9F7F4] bg-clip-text text-transparent">
              Your Culinary Journey Begins
            </div>
          </div>

          {/* Enhanced loading dots */}
          <div className="flex justify-center space-x-2 mt-8 opacity-0 animate-[textReveal_1s_ease-out_1.5s_forwards]">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* Elegant loading progress */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-px bg-[#9B8FC7]/20 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-transparent via-[#9B8FC7] to-transparent animate-[loadingProgress_2s_ease-out_forwards]"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Enhanced Background Images with Parallax */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ${
            index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ 
            backgroundImage: `url('${image}')`,
            transform: `scale(${index === currentImageIndex ? 1.05 : 1}) translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px) translateY(${scrollY * 0.5}px)`
          }}
        />
      ))}

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/60 via-[#1B1B1B]/40 to-[#2A1B2A]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/80 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#9B8FC7]/5 via-transparent to-[#A8C4A0]/5" />

      {/* Floating particles for luxury feel */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatUp ${8 + Math.random() * 6}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced Content with Micro-animations */}
      <div 
        className={`relative z-10 flex flex-col justify-center items-center h-full px-4 text-center transition-all duration-1500 ${
          textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{
          transform: `translateY(${scrollY * 0.3}px) translateX(${mousePosition.x * 3}px)`
        }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Enhanced subtitle with stagger */}
          <p className="tracking-[0.5em] text-[#A8C4A0] text-xs md:text-sm uppercase mb-8 font-light opacity-0 animate-[staggerReveal_1s_ease-out_0.3s_forwards]">
            Exquisite Culinary Artistry
          </p>

          {/* Main title with dramatic reveal */}
          <div className="relative mb-10">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin leading-tight text-[#F9F7F4] opacity-0 animate-[titleReveal_1.5s_ease-out_0.6s_forwards]">
              Magic Touch
            </h1>
            <div className="relative mt-2">
              <span className="block text-4xl md:text-6xl lg:text-7xl text-transparent bg-gradient-to-r from-[#A8C4A0] via-[#9B8FC7] to-[#A8C4A0] bg-clip-text font-light tracking-wider opacity-0 animate-[subtitleReveal_1.2s_ease-out_1s_forwards]">
                Catering
              </span>
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-[#9B8FC7] to-transparent opacity-0 animate-[underlineReveal_1s_ease-out_1.5s_forwards]"></div>
            </div>
          </div>

          {/* Enhanced description */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#F9F7F4]/90 mb-12 font-light leading-relaxed opacity-0 animate-[descriptionReveal_1s_ease-out_1.8s_forwards]">
            Where culinary excellence meets impeccable service. We transform your most important occasions into 
            <span className="text-[#A8C4A0] font-normal"> extraordinary gastronomic experiences</span> that linger in memory long after the last bite.
          </p>

          {/* Enhanced buttons with hover effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-[buttonsReveal_1s_ease-out_2.2s_forwards]">
            <button className="group px-10 py-5 rounded-full bg-gradient-to-r from-[#9B8FC7] via-[#A8C4A0] to-[#9B8FC7] text-white font-medium tracking-wider text-sm uppercase relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#9B8FC7]/30">
              <span className="relative z-10">Explore Our Artistry</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#A8C4A0] to-[#9B8FC7] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button className="group px-10 py-5 rounded-full border-2 border-[#F9F7F4]/30 text-[#F9F7F4] font-light tracking-wider text-sm uppercase relative overflow-hidden transition-all duration-500 hover:border-[#A8C4A0] hover:text-[#A8C4A0] hover:scale-105">
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-[#A8C4A0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-[scrollIndicatorReveal_1s_ease-out_3s_forwards]">
          <div className="flex flex-col items-center">
            <div className="text-[#F9F7F4]/60 text-xs tracking-wider uppercase mb-3 animate-pulse">Discover More</div>
            <div className="relative">
              <div className="w-px h-12 bg-gradient-to-b from-[#9B8FC7] via-[#A8C4A0] to-transparent"></div>
              <div className="absolute top-0 left-0 w-px h-4 bg-white animate-[scrollPulse_2s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={prevImage}
          className="group h-20 w-20 flex items-center justify-center border-2 border-[#F9F7F4]/20 rounded-full 
          text-[#F9F7F4] text-2xl backdrop-blur-md bg-black/20
          transition-all duration-500 ease-out 
          hover:scale-110 hover:border-[#9B8FC7] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/10 hover:rotate-[-5deg]"
        >
          <span className="group-hover:scale-110 transition-transform duration-300">&#8592;</span>
        </button>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={nextImage}
          className="group h-20 w-20 flex items-center justify-center border-2 border-[#F9F7F4]/20 rounded-full 
          text-[#F9F7F4] text-2xl backdrop-blur-md bg-black/20
          transition-all duration-500 ease-out 
          hover:scale-110 hover:border-[#9B8FC7] hover:text-[#9B8FC7] hover:bg-[#9B8FC7]/10 hover:rotate-[5deg]"
        >
          <span className="group-hover:scale-110 transition-transform duration-300">&#8594;</span>
        </button>
      </div>

      {/* Enhanced Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative h-3 rounded-full transition-all duration-500 overflow-hidden ${
                index === currentImageIndex 
                  ? 'bg-gradient-to-r from-[#9B8FC7] to-[#A8C4A0] w-12 shadow-lg shadow-[#9B8FC7]/30' 
                  : 'bg-[#F9F7F4]/30 hover:bg-[#F9F7F4]/60 w-3'
              }`}
            >
              {index === currentImageIndex && (
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
