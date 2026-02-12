import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Background3D from './3DBackground';
import { Cube3D, Sphere3D } from './SVG3DIllustrations';
import PartnersSection from './PartnersSection';

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToHowToBook = () => {
    const element = document.getElementById('how-to-book');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden perspective-1000">
      {/* 3D Background */}
      <Background3D />

      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/90 via-[#1E40AF]/80 to-[#0F172A]/90 z-0">
        <div className="absolute inset-0 bg-[#DC2626] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}>
          <Cube3D className="absolute top-20 left-10 w-32 h-32 opacity-30 animate-float" color="#FF8C00" />
          <Sphere3D className="absolute bottom-40 right-10 w-40 h-40 opacity-30 animate-float-delayed" color="#DC2626" />
        </motion.div>
      </div>

      {/* Main Content - Perfectly Centered */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center">
        {/* Hero Card - Centered */}
        <motion.div 
          style={{ y, opacity }}
          className="w-full max-w-5xl mx-auto glass-card-dark rounded-3xl p-8 md:p-12 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 flex flex-col items-center"
          >
            {/* Event Badge - REMOVED */}

            {/* Main Title - Centered */}
            <motion.h1
              initial={{ opacity: 0, rotateX: 20 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight text-shadow-3d text-center"
            >
              தொழில் வளர்சிக்கான<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] via-[#FFD700] to-[#DC2626] animate-gradient-x">
                டிஜிட்டல் சக்தி
              </span>
            </motion.h1>

            {/* Subtitle - Centered */}
            <motion.p
              initial={{ opacity: 0, z: -100 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl text-white/90 font-medium max-w-4xl mx-auto leading-relaxed drop-shadow-lg text-center"
            >
              தொழில் முறை / நிபுணம் / டிஜிட்டல் தொடர்பான சிறப்பு உயர்வாளர்கள்
            </motion.p>

            {/* CTA Button - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="pt-8 flex justify-center"
            >
              <button
                onClick={scrollToHowToBook}
                className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-[#FF8C00] to-[#DC2626] text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 neon-glow-orange"
              >
                <span>Book your Seat </span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </button>
            </motion.div>

            {/* Event Info - Centered */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="pt-6 flex flex-wrap justify-center gap-4 md:gap-6 text-white/90 font-medium"
            >
              <div className="flex items-center justify-center space-x-2 bg-black/20 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/5">
                <div className="w-2 h-2 bg-[#FF8C00] rounded-full shadow-[0_0_10px_#FF8C00]"></div>
                <span>February 22, 2026</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-black/20 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/5">
                <div className="w-2 h-2 bg-[#DC2626] rounded-full shadow-[0_0_10px_#DC2626]"></div>
                <span>3:30 PM - 6:30 PM</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-black/20 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/5">
                <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                <span>Singapore</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* PARTNERS SCROLLING SECTION - Perfectly Centered */}
        <div className="w-full mt-16 flex justify-center">
          <div className="w-full max-w-6xl">
            <PartnersSection />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;