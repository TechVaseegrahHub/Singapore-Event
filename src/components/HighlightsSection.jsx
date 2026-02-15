import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { BusinessChart3D, TechIcon3D, BrandingIcon3D, InfluencerIcon3D, Cube3D } from './SVG3DIllustrations';

function HighlightsSection() {
  const highlights = [
    { title: 'Digital Transformation', icon: Cube3D, description: 'Driving innovation with modern technology' },
    { title: 'Business Opportunities', icon: BusinessChart3D, description: 'Discover new avenues for growth' },
    { title: 'Branding Technologies', icon: TechIcon3D, description: 'Master digital branding tools' },
    { title: 'Personal Branding', icon: BrandingIcon3D, description: 'Build your online presence' },
    { title: 'Influencer Reach', icon: InfluencerIcon3D, description: 'Leverage marketing for success' }
  ];

  // Split data for the 3 + 2 layout
  const topRow = highlights.slice(0, 3);
  const bottomRow = highlights.slice(3, 5);

  const renderBubble = (highlight, index, isTopRow) => {
    const Icon = highlight.icon;
    const isEven = index % 2 === 0;

    return (
      <motion.div
        key={highlight.title}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 260, damping: 25, delay: index * 0.1 }}
        className={`flex justify-center ${
          // Stagger effect: Top row shifts slightly differently than bottom row
          isTopRow 
            ? (index === 0 ? 'md:-translate-x-6' : index === 2 ? 'md:translate-x-6' : '') 
            : (index === 0 ? 'md:-translate-x-4' : 'md:translate-x-4')
        }`}
      >
        <motion.div
          animate={{ 
            y: isEven ? [0, -10, 0] : [0, 10, 0],
            rotate: isEven ? [-1, 1, -1] : [1, -1, 1] 
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="group relative"
        >
          {/* BUBBLE - Size: 170px Mobile | 210px Desktop */}
          <div className="w-[165px] h-[165px] sm:w-[190px] sm:h-[190px] md:w-[210px] md:h-[210px] rounded-full bg-slate-900/30 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col items-center justify-center p-4 text-center transition-all duration-500 hover:bg-slate-900/60 hover:scale-105 hover:border-[#F97316]/60">
            
            <div className="mb-2 p-2 sm:p-2.5 bg-white/10 rounded-full border border-white/10 group-hover:bg-[#F97316]/20 transition-all">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-[#F97316]" />
            </div>

            <h3 className="text-[13px] sm:text-sm md:text-base font-bold text-white mb-1 leading-tight px-1">
              {highlight.title}
            </h3>

            <p className="text-[9px] sm:text-[10px] md:text-[11px] text-gray-200 font-medium leading-tight opacity-70 px-2 line-clamp-2 md:line-clamp-none">
              {highlight.description}
            </p>

            <CheckCircle2 className="absolute top-4 right-4 text-[#F97316] opacity-0 group-hover:opacity-100 transition-all" size={16} />
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col items-center justify-center py-12 md:py-20">
      
      {/* 1. VIDEO LAYER (Enhanced Brightness & Visibility) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          className="w-full h-full object-cover brightness-125 contrast-110 saturate-110" 
          src="/video/video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
        />
        {/* Much lighter overlay for better video visibility */}
        <div className="absolute inset-0 bg-black/10"></div> 
        {/* Lighter gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      </div>

      {/* 2. HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-8 md:mb-12"
      >

        <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg">
         Our<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#DC2626]"> Event </span>
        </h2>
      </motion.div>

      {/* 3. BUBBLE GRID (3 over 2 Layout) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col gap-y-4 md:gap-y-8">
        
        {/* TOP ROW: 3 Bubbles */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {topRow.map((h, i) => renderBubble(h, i, true))}
        </div>

        {/* BOTTOM ROW: 2 Bubbles */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 md:-mt-4">
          {bottomRow.map((h, i) => renderBubble(h, i, false))}
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-1 pointer-events-none"></div>
    </section>
  );
}

export default HighlightsSection;
