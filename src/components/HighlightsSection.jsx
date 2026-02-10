import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { BusinessChart3D, TechIcon3D, BrandingIcon3D, InfluencerIcon3D, Cube3D } from './SVG3DIllustrations';

function HighlightsSection() {
  const highlights = [
    {
      title: 'Inspiring Stories',
      icon: Cube3D,
      description: 'Learn from real-world success stories and experiences',
      color: '#FF8C00'
    },
    {
      title: 'Business Opportunities',
      icon: BusinessChart3D,
      description: 'Discover new avenues for business growth and expansion',
      color: '#DC2626'
    },
    {
      title: 'Branding Technologies',
      icon: TechIcon3D,
      description: 'Master the latest digital branding tools and techniques',
      color: '#1E40AF'
    },
    {
      title: 'Personal Branding Techniques',
      icon: BrandingIcon3D,
      description: 'Build your personal brand and online presence',
      color: '#FF8C00'
    },
    {
      title: 'Influencer Reach in Business',
      icon: InfluencerIcon3D,
      description: 'Leverage influencer marketing for business success',
      color: '#DC2626'
    }
  ];

  return (
    <section id="highlights" className="py-20 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-[#1E40AF] mb-4 tracking-tight text-shadow-3d">
            Event Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What you'll gain from this transformative event
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}
                className="group relative transform-style-3d"
              >
                <div className="relative h-full bg-gradient-to-br from-[#1E40AF] to-[#0F172A] rounded-2xl p-8 shadow-xl transition-all duration-300 overflow-hidden border border-white/10">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF8C00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 transform-style-3d">
                    {/* Icon and Checkmark */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10 shadow-inner transform-style-3d group-hover:translate-z-10">
                        <Icon className="w-12 h-12" />
                      </div>
                      <CheckCircle2 className="text-[#FF8C00] drop-shadow-lg" size={32} strokeWidth={3} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FF8C00] transition-colors transform-style-3d group-hover:translate-z-5">
                      {highlight.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 leading-relaxed transform-style-3d group-hover:translate-z-5">
                      {highlight.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#DC2626] rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-2xl"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HighlightsSection;