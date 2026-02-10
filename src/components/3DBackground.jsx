import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cube3D, Sphere3D, Pyramid3D } from './SVG3DIllustrations';

function Background3D() {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 opacity-90" />
      
      {/* Floating Shapes Layer 1 (Slow) */}
      <motion.div style={{ y: y3 }} className="absolute inset-0">
        <Cube3D className="absolute top-[10%] left-[5%] w-24 h-24 opacity-20" color="#1E40AF" />
        <Sphere3D className="absolute top-[40%] right-[5%] w-32 h-32 opacity-10" color="#DC2626" />
        <Pyramid3D className="absolute bottom-[10%] left-[15%] w-20 h-20 opacity-15" color="#FF8C00" />
      </motion.div>

      {/* Floating Shapes Layer 2 (Medium) */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        <Sphere3D className="absolute top-[20%] left-[80%] w-16 h-16 opacity-20" color="#1E40AF" />
        <Cube3D className="absolute top-[60%] left-[10%] w-28 h-28 opacity-10" color="#FF8C00" />
      </motion.div>

      {/* Floating Shapes Layer 3 (Fast) */}
      <motion.div style={{ y: y2, rotate }} className="absolute inset-0">
        <Pyramid3D className="absolute top-[15%] right-[20%] w-12 h-12 opacity-20" color="#DC2626" />
        <Cube3D className="absolute bottom-[20%] right-[10%] w-20 h-20 opacity-15" color="#1E40AF" />
      </motion.div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </div>
  );
}

export default Background3D;