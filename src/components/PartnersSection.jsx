import React from 'react';
import { motion } from 'framer-motion';

function PartnersSection() {
  const partners = [
    { name: 'UniverseCall', color: 'from-amber-600 to-yellow-700' },
    { name: 'SuperDeluxe', color: 'from-amber-700 to-orange-800' },
    { name: 'Darre', color: 'from-yellow-600 to-amber-700' },
    { name: 'Artisan', color: 'from-amber-800 to-yellow-900' },
    { name: 'Wango', color: 'from-yellow-700 to-amber-800' },
    { name: 'LinkAd', color: 'from-amber-600 to-orange-700' }
  ];

  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-[#1E40AF] mb-4 tracking-tight text-shadow-3d">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proud to collaborate with industry leaders
          </p>
        </motion.div>

        <div className="glass-card rounded-3xl p-8 md:p-12 bg-white/50">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 perspective-1000">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  rotateX: 10,
                  zIndex: 10
                }}
                className="group transform-style-3d"
              >
                <div className={`
                  relative aspect-square rounded-2xl bg-gradient-to-br ${partner.color} 
                  p-1 shadow-lg hover:shadow-2xl transition-all duration-300
                  group-hover:neon-glow-orange
                `}>
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center p-4 transform-style-3d">
                    <div className="text-center transform-style-3d group-hover:translate-z-10 transition-transform">
                      <div className={`
                        w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br ${partner.color} 
                        flex items-center justify-center shadow-inner
                      `}>
                        <span className="text-white font-black text-2xl">
                          {partner.name.charAt(0)}
                        </span>
                      </div>
                      <p className="font-bold text-gray-900 text-sm group-hover:text-[#FF8C00] transition-colors">
                        {partner.name}
                      </p>
                    </div>
                  </div>
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;