import React from 'react';
import { motion } from 'framer-motion';

function PartnersSection() {
  // Exact partner names from the image with public folder paths
  const partners = [
    { 
      name: 'LinkMeU', 
      logo: '/assets/image/LinkMeU.png',
      alt: 'LinkMeU Logo'
    },

    { 
      name: 'Univercell', 
      logo: '/assets/image/Univercell.png',
      alt: 'LinkMeU Logo'
    },
    { 
      name: 'VEE', 
      logo: '/assets/image/VEE.png',
      alt: 'VEE Logo'
    },
    { 
      name: 'azzle', 
      logo: '/assets/image/azzle.png',
      alt: 'azzle Logo'
    },
    { 
      name: 'Wango', 
      logo: '/assets/image/Wango.png',
      alt: 'Wango Logo'
    },
    { 
      name: 'Aswad', 
      logo: '/assets/image/Aswad.png',
      alt: 'Aswad Logo'
    },
    { 
      name: 'SuperDeluxe', 
      logo: '/assets/image/SuperDeluxe.png',
      alt: 'SuperDeluxe Logo'
    }
  ];

  // Remove duplicate entry - keep only unique partners
  const uniquePartners = [...new Map(partners.map(item => [item.name, item])).values()];

  // Duplicate for seamless infinite scroll
  const scrollingPartners = [...uniquePartners, ...uniquePartners, ...uniquePartners, ...uniquePartners, ...uniquePartners];

  return (
    <div className="relative w-full py-8 overflow-hidden flex flex-col items-center justify-center">
      {/* Single row - scrolling left to right */}
      <div className="relative w-full">
        {/* Gradient fade edges - subtle */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1E40AF] via-[#1E40AF] to-transparent z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1E40AF] via-[#1E40AF] to-transparent z-20"></div>
        
        {/* Scrolling container */}
        <div className="overflow-hidden flex justify-center">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: [0, -2000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              }
            }}
          >
            {scrollingPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
                {/* Pure logo - no container, no background, no border, no circle */}
                <img 
                  src={partner.logo} 
                  alt={partner.alt}
                  className="w-auto h-12 md:h-16 object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/120x40?text=${partner.name}`;
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default PartnersSection;