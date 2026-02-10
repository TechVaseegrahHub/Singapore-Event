import React from 'react';
import { motion } from 'framer-motion';

export const Cube3D = ({ className, color = "#1E40AF" }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    initial={{ rotate: 0, y: 0 }}
    animate={{ rotate: 360, y: [0, -10, 0] }}
    transition={{ 
      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }}
  >
    <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" />
    <path d="M50 5 L50 50 L90 75" stroke={color} strokeWidth="2" fill="none" />
    <path d="M50 50 L10 75" stroke={color} strokeWidth="2" fill="none" />
    <path d="M10 25 L50 50 L90 25" stroke={color} strokeWidth="2" fill="none" />
  </motion.svg>
);

export const Sphere3D = ({ className, color = "#DC2626" }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  >
    <defs>
      <radialGradient id={`grad-${color}`} cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
        <stop offset="100%" stopColor={color} stopOpacity="0.6" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="40" fill={`url(#grad-${color})`} />
    <circle cx="50" cy="50" r="40" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
    <ellipse cx="50" cy="50" rx="40" ry="10" stroke={color} strokeWidth="1" fill="none" opacity="0.3" transform="rotate(45 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="10" stroke={color} strokeWidth="1" fill="none" opacity="0.3" transform="rotate(-45 50 50)" />
  </motion.svg>
);

export const Pyramid3D = ({ className, color = "#FF8C00" }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    animate={{ rotateY: [0, 180, 360] }}
    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
  >
    <path d="M50 10 L90 80 L10 80 Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2" />
    <path d="M50 10 L50 80" stroke={color} strokeWidth="1" strokeDasharray="4 4" />
  </motion.svg>
);

export const BusinessChart3D = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className}>
    <defs>
      <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FF8C00" />
        <stop offset="100%" stopColor="#DC2626" />
      </linearGradient>
    </defs>
    {/* Base */}
    <path d="M20 150 L180 150 L160 170 L40 170 Z" fill="#1E40AF" opacity="0.5" />
    {/* Bars */}
    <motion.path 
      d="M40 150 L40 100 L70 100 L70 150 Z" 
      fill="url(#barGrad)" 
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      style={{ transformOrigin: "bottom" }}
      transition={{ duration: 1 }}
    />
    <motion.path 
      d="M40 100 L60 80 L90 80 L70 100 Z" 
      fill="#FF8C00" 
      opacity="0.8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 0.8, y: 0 }}
      transition={{ duration: 1 }}
    />
    <motion.path 
      d="M90 150 L90 70 L120 70 L120 150 Z" 
      fill="url(#barGrad)" 
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      style={{ transformOrigin: "bottom" }}
      transition={{ duration: 1, delay: 0.2 }}
    />
    <motion.path 
      d="M90 70 L110 50 L140 50 L120 70 Z" 
      fill="#FF8C00" 
      opacity="0.8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 0.8, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    />
    <motion.path 
      d="M140 150 L140 40 L170 40 L170 150 Z" 
      fill="url(#barGrad)" 
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      style={{ transformOrigin: "bottom" }}
      transition={{ duration: 1, delay: 0.4 }}
    />
    <motion.path 
      d="M140 40 L160 20 L190 20 L170 40 Z" 
      fill="#FF8C00" 
      opacity="0.8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 0.8, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
    />
  </svg>
);

export const TechIcon3D = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "center" }}
    >
      <circle cx="50" cy="50" r="30" stroke="#1E40AF" strokeWidth="8" strokeDasharray="20 10" fill="none" />
      <circle cx="50" cy="50" r="20" stroke="#FF8C00" strokeWidth="4" fill="none" />
      <circle cx="50" cy="50" r="10" fill="#DC2626" />
    </motion.g>
  </svg>
);

export const BrandingIcon3D = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <motion.rect
      x="30" y="30" width="40" height="40"
      fill="none" stroke="#DC2626" strokeWidth="4"
      animate={{ rotate: [0, 45, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
      style={{ transformOrigin: "center" }}
    />
    <motion.rect
      x="20" y="20" width="60" height="60"
      fill="none" stroke="#1E40AF" strokeWidth="2"
      animate={{ rotate: [0, -45, 0] }}
      transition={{ duration: 7, repeat: Infinity }}
      style={{ transformOrigin: "center" }}
    />
    <circle cx="50" cy="50" r="5" fill="#FF8C00" />
  </svg>
);

export const InfluencerIcon3D = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <motion.g>
      <circle cx="50" cy="50" r="10" fill="#FF8C00" />
      <motion.circle cx="50" cy="20" r="5" fill="#1E40AF" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.circle cx="80" cy="80" r="5" fill="#1E40AF" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
      <motion.circle cx="20" cy="80" r="5" fill="#1E40AF" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
      <line x1="50" y1="50" x2="50" y2="20" stroke="#DC2626" strokeWidth="2" />
      <line x1="50" y1="50" x2="80" y2="80" stroke="#DC2626" strokeWidth="2" />
      <line x1="50" y1="50" x2="20" y2="80" stroke="#DC2626" strokeWidth="2" />
    </motion.g>
  </svg>
);