import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = ({ variant = "wave", position = "bottom", className = "" }) => {
  const isTop = position === "top";
  
  const variants = {
    wave: (
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          d="M0 30L48 35C96 40 192 50 288 55C384 60 480 60 576 50C672 40 768 20 864 20C960 20 1056 40 1152 50C1248 60 1344 60 1392 60H1440V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V30Z" 
          fill="currentColor"
        />
      </svg>
    ),
    geometric: (
      <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
        <path d="M0 100V0L48 16.7C96 33.3 192 66.7 288 75C384 83.3 480 66.7 576 50C672 33.3 768 16.7 864 25C960 33.3 1056 66.7 1152 75C1248 83.3 1344 66.7 1392 58.3L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0Z" fill="currentColor"/>
      </svg>
    ),
    slant: (
      <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
        <path d="M0 100L1440 0V100H0Z" fill="currentColor"/>
      </svg>
    )
  };

  return (
    <div className={`w-full overflow-hidden leading-none ${isTop ? 'rotate-180' : ''} ${className}`}>
      {variants[variant]}
    </div>
  );
};

export default SectionDivider;