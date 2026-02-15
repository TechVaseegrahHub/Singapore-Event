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
    <section id="how-to-book" className="bg-[#2a4c9a] py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Content Area */}
        <div className="text-center mb-10 md:mb-16 px-4 md:px-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-white">How to </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff930f] to-[#ff2828]">
              Book
            </span>
          </h2>
          <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto">
            Follow these 4 simple steps to complete your registration and receive your ticket instantly.
          </p>
        </div>

        {/* 
          Carousel Container:
          - Mobile: True carousel with edge-to-edge scrolling
          - Desktop: 4-column Grid
        */}
        <div className="relative">
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto pb-8 gap-4 snap-x snap-mandatory scrollbar-hide px-4">
              {STEPS.map((item) => (
                <div 
                  key={item.id} 
                  className="flex-shrink-0 w-[280px] snap-center flex flex-col"
                >
                  {/* Step Label and Title */}
                  <div className="mb-4 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold text-xs mb-2 uppercase tracking-wider">
                      {item.step}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {item.title}
                    </h3>
                  </div>

                  {/* Image Card - Full bleed, no padding */}
                  <div className="bg-black rounded-3xl overflow-hidden shadow-2xl flex-1">
                    <div className="relative w-full h-full min-h-[480px]">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover scale-[1.08]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Swipe Indicator Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {STEPS.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === 0 ? 'bg-orange-500 w-4' : 'bg-white/40'
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 md:gap-8 md:px-10">
            {STEPS.map((item) => (
              <div 
                key={item.id} 
                className="group flex flex-col"
              >
                {/* Step Label and Title */}
                <div className="mb-6 text-left pl-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold text-sm mb-2 uppercase tracking-wider">
                    {item.step}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-wide">
                    {item.title}
                  </h3>
                </div>

                {/* Image Card - Full bleed, no padding */}
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-300 group-hover:-translate-y-2 border border-white/10">
                  <div className="relative w-full aspect-[9/16]">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover scale-[1.08]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Book Your Seat Button */}
        <div className="flex justify-center mt-12 md:mt-20 px-4 md:px-0">
          <a
            href="https://wa.me/6580579621?text=book%20ticket"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#ff930f] to-[#ff2828] rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 active:scale-95 hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              Book your Seat
              <svg 
                className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
            {/* Hover Shine Effect */}
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes shine {
          100% {
            left: 100%;
          }
        }
        .group-hover\:animate-shine:hover {
          animation: shine 0.75s;
        }
      `}</style>
    </section>
  );
};

export default HowToBookSection;
