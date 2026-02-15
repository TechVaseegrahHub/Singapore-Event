import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

function SpeakersSection() {
  // Updated speakers with consistent colors matching the image
  const speakers = [
    {
      name: 'VIJAYA',
      surname: 'MAHADEVAN',
      title: 'FOUNDER',
      company: 'VASEEGARA VEDHA',
      image: './assets/image/vijaya.png',
      color: 'from-[#DC2626] to-[#EF4444]',
      textColor: '#DC2626',
    },
    {
      name: 'SREEKARTHIKEYAN',
      surname: 'MAHADEVAN',
      title: 'CEO & FOUNDER',
      company: 'TECH VASEEGRAH',
      image: './assets/image/ceo3.jpg',
      color: 'from-[#DC2626] to-[#EF4444]',
      textColor: '#DC2626',
    },
    {
      name: 'SUDHAN',
      surname: '',
      title: 'DIRECTOR',
      company: 'UNIVERCEL MOBILES',
      image: './assets/image/Sudhan.jpeg',
      color: 'from-[#DC2626] to-[#EF4444]',
      textColor: '#DC2626',
    },
    {
      name: 'SRIKANTH',
      surname: '',
      title: 'DIRECTOR',
      company: 'SUPER DELUXE KITCHEN',
      image: './assets/image/Srikanth.jpeg',
      color: 'from-[#DC2626] to-[#EF4444]',
      textColor: '#DC2626',
    },
    {
      name: 'HABIB',
      surname: '',
      title: 'DIRECTOR',
      company: 'LINKMEU',
      image: './assets/image/Habib.jpeg',
      color: 'from-[#DC2626] to-[#EF4444]',
      textColor: '#DC2626',
    },
    {
      name: 'NARESH',
      surname: '',
      title: 'INFLUENCER',
      company: 'DIGITAL CREATOR',
      image: './assets/image/Naresh.jpeg',
      color: 'from-[#DC2626] to-[#EF4444]',
      textColor: '#DC2626',
    },
    {
      name: 'RITHIK',
      surname: 'PANDIAN',
      title: 'INFLUENCER',
      company: 'CONTENT CREATOR',
      image: './assets/image/RithikPandian.jpeg',
      color: 'from-[#DC2626] to-[#EF4444]',
      textColor: '#DC2626',
    },
  ];

  // Create duplicated array for seamless infinite scroll
  const duplicatedSpeakers = [...speakers, ...speakers];
  
  const scrollContainerRef = useRef(null);
  const scrollAnimationRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollSpeed = useRef(80);

  // Smooth infinite scroll animation
  const startAutoScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;
    const scrollWidth = scrollContainer.scrollWidth;
    
    let scrollPos = scrollContainer.scrollLeft;
    const maxScroll = scrollWidth / 2;
    
    const animateScroll = () => {
      scrollPos += scrollSpeed.current / 60;
      
      if (scrollPos >= maxScroll) {
        scrollPos = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft = scrollPos;
      }
      
      const itemWidth = scrollWidth / duplicatedSpeakers.length;
      const newIndex = Math.floor(scrollPos / itemWidth) % speakers.length;
      setCurrentIndex(newIndex);
      
      scrollAnimationRef.current = requestAnimationFrame(animateScroll);
    };
    
    scrollAnimationRef.current = requestAnimationFrame(animateScroll);
  }, [duplicatedSpeakers.length, speakers.length]);

  // Initialize auto-scroll
  useEffect(() => {
    startAutoScroll();
    
    return () => {
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
    };
  }, [startAutoScroll]);

  const [loadedimage, setLoadedimage] = useState({});

  const handleImageLoad = (index) => {
    setLoadedimage(prev => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index) => {
    setLoadedimage(prev => ({ ...prev, [index]: false }));
  };

  // Preload image with high priority
  useEffect(() => {
    speakers.forEach((speaker, index) => {
      if (speaker.image && speaker.image.startsWith('http')) {
        const img = new Image();
        img.src = speaker.image;
        img.crossOrigin = "anonymous";
        img.fetchPriority = "high";
        img.onload = () => handleImageLoad(index);
        img.onerror = () => handleImageError(index);
      }
    });
  }, []);

  return (
    <section id="speakers" className="py-12 relative overflow-hidden">
      {/* Gradient Background - Fixed with proper syntax */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/90 via-[#1E40AF]/80 to-[#0F172A]/90 z-0"></div>

      {/* Red Overlay - Matching HeroSection */}
      <div className="absolute inset-0 bg-[#DC2626] opacity-10 mix-blend-overlay z-0"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(220,38,38,0.05),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(30,64,175,0.05),transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
            MEET OUR
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] via-[#FFD700] to-[#DC2626] uppercase tracking-tight mb-3">
            SPEAKERS
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto px-4 font-light">
            Industry leaders and experts sharing their insights
          </p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          
          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto py-6 px-2 hide-scrollbar"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {duplicatedSpeakers.map((speaker, index) => (
              <div
                key={`${speaker.name}-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] mx-2 sm:mx-3 perspective-container"
              >
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative group"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'perspective(1500px) rotateY(0deg) rotateX(0deg)',
                  }}
                  whileHover={{
                    transform: 'perspective(1500px) rotateY(-3deg) rotateX(3deg) translateZ(10px)',
                    transition: { duration: 0.4 }
                  }}
                >
                  {/* 3D Image Container */}
                  <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-md">
                    
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      {speaker.image && (speaker.image.startsWith('http') ? loadedimage[index % speakers.length] !== false : true) ? (
                        <>
                          <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-full h-full object-cover object-center scale-100 transition-transform duration-700 group-hover:scale-105"
                            style={{
                              imageRendering: 'crisp-edges',
                              WebkitImageRendering: 'crisp-edges',
                            }}
                            onLoad={() => speaker.image.startsWith('http') && handleImageLoad(index % speakers.length)}
                            onError={() => speaker.image.startsWith('http') && handleImageError(index % speakers.length)}
                            loading="eager"
                          />
                          
                          {/* Subtle gradient for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                        </>
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${speaker.color} flex items-center justify-center`}>
                          <span className="text-white text-4xl sm:text-5xl font-black">
                            {speaker.name[0]}{speaker.surname?.[0]}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Light Effect - Minimal */}
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 z-20"
                      style={{
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, transparent 80%, rgba(0,0,0,0.05) 100%)',
                      }}>
                    </div>

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 md:p-8 z-30">
                      
                      {/* Speaker name */}
                      <div className="mb-1">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight"
                              style={{ 
                                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                                WebkitFontSmoothing: 'antialiased',
                              }}>
                          {speaker.name}
                        </span>
                      </div>
                      
                      {/* Surname with gradient */}
                      <div className="mb-2">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] via-[#FFD700] to-[#DC2626] uppercase tracking-tight leading-tight"
                              style={{ 
                                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                              }}>
                          {speaker.surname || speaker.title.split(' ')[0]}
                        </span>
                      </div>
                      
                      {/* Role */}
                      <div className="mb-2">
                        <span className="text-sm sm:text-base md:text-lg font-bold text-white uppercase tracking-wide"
                              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                          {speaker.title}
                        </span>
                      </div>
                      
                      {/* Company */}
                      <div className="mb-1">
                        <p className="text-xs sm:text-sm md:text-base text-white/90 uppercase tracking-wide font-light"
                           style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
                          {speaker.company}
                        </p>
                      </div>
                      
                      {/* Decorative 3D element */}
                      <div className="absolute bottom-4 right-4 w-10 h-10 opacity-20">
                        <div className="absolute inset-0 border border-white/30 rounded transform rotate-12"></div>
                        <div className="absolute inset-1 border border-white/20 rounded transform -rotate-6"></div>
                      </div>
                    </div>

                    {/* Edge highlight */}
                    <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none z-40"></div>
                  </div>

                  {/* 3D Shadow */}
                  <div className="absolute -bottom-3 left-10 right-10 h-8 bg-black/10 blur-md rounded-full transform scale-90 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile swipe indicator */}
        <div className="text-center mt-8 md:hidden">
          <div className="inline-flex items-center space-x-3">
            <span className="text-white/60 text-2xl animate-pulse">←</span>
            <span className="text-xs uppercase tracking-widest text-white/70 font-light">Swipe to explore</span>
            <span className="text-white/60 text-2xl animate-pulse">→</span>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex space-x-1.5">
            {speakers.slice(0, 5).map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentIndex % speakers.length === index 
                    ? 'w-6 bg-gradient-to-r from-[#FF8C00] to-[#DC2626]' 
                    : 'w-1.5 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Windows Activation Message - Bottom Right */}
      <div className="absolute bottom-4 right-4 z-20 text-white/30 text-xs">
        Activate Windows
      </div>

      {/* Global styles */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .perspective-container {
          perspective: 2000px;
          perspective-origin: center;
        }
        
        @media (max-width: 640px) {
          .perspective-container {
            perspective: 1500px;
          }
        }
      `}</style>
    </section>
  );
}

export default SpeakersSection;
