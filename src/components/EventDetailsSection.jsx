import React from "react";

const STEPS = [
  {
    id: 1,
    step: "Step 1",
    title: "Start Chat",
    src: "/assets/image/Image1.png",
  },
  {
    id: 2,
    step: "Step 2",
    title: "Registration",
    src: "/assets/image/Image2.png",
  },
  {
    id: 3,
    step: "Step 3",
    title: "Payment",
    src: "/assets/image/Image3.png",
  },
  {
    id: 4,
    step: "Step 4",
    title: "Receive Ticket",
    src: "/assets/image/Image4.png",
  },
];

const HowToBookSection = () => {
  return (
    <section id="how-to-book" className="bg-white py-12 px-4 md:py-20 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Content Area - Optimized for mobile */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            How to Book
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto px-2">
            Follow these 4 simple steps to complete your registration and receive your ticket instantly.
          </p>
        </div>

        {/* 
          Container Logic:
          - Mobile: Horizontal scrolling carousel (snap-x) with optimized sizing
          - Desktop: 4-column Grid
        */}
        <div className="flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:pb-0 md:gap-6 scrollbar-hide">
          {STEPS.map((item) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 w-[75%] sm:w-[45%] md:w-full snap-center group"
            >
              {/* Step Label and Title - Centered on mobile */}
              <div className="mb-4 md:mb-6 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold text-xs md:text-sm mb-1 md:mb-2 uppercase tracking-wider">
                  {item.step}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-gray-800">{item.title}</h3>
              </div>

              {/* Image Card - Optimized aspect ratio for mobile */}
              <div className="bg-white rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-xl md:shadow-2xl border border-gray-100 transition-all duration-300 group-hover:shadow-blue-100 group-hover:md:-translate-y-2">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full aspect-[3/4] md:aspect-[9/18] object-cover object-top block"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicator Dots - Enhanced visibility */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {STEPS.map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full ${
                i === 0 ? 'bg-blue-600 w-4' : 'bg-blue-200'
              } transition-all duration-300`}
            ></div>
          ))}
        </div>

        {/* Call to Action Button - WhatsApp Link - Optimized for mobile */}
        <div className="flex justify-center mt-10 md:mt-16 px-4 md:px-0">
          <a
            href="https://wa.me/6580579621?text=book%20ticket"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 hover:scale-105 md:hover:scale-105"
          >
            {/* WhatsApp Icon */}
            <svg 
              className="w-5 h-5 mr-2 md:mr-2 group-hover:scale-110 transition-transform duration-300" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.473-.149-.673.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.672-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.124 1.523 5.877L.043 23.35c-.104.436.276.816.712.712l5.473-1.48C7.876 22.446 9.877 23 12 23c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.873 0-3.66-.515-5.213-1.414l-.374-.218-3.883 1.05 1.05-3.883-.218-.374A9.961 9.961 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
            </svg>
            
            <span className="relative z-10">Book on WhatsApp</span>
            <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            
            {/* Arrow icon for desktop, hidden on mobile */}
            <svg 
              className="hidden md:block relative z-10 w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Mobile Sticky WhatsApp Button Alternative - Optional */}

      </div>

      {/* CSS to hide scrollbar on mobile carousel */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default HowToBookSection;