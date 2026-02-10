import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

function SpeakersSection() {
  const speakers = [
    {
      name: 'Vijaya Mahadevan',
      title: 'Founder of Vasantya Vedha',
      color: 'from-[#1E40AF] to-[#3B82F6]',
      image: '/images/vijaya-mahadevan.jpg',
      glow: 'neon-glow-blue'
    },
    {
      name: 'SreeKarthikeyan Mahadevan',
      title: 'CEO & Founder of Tech Mavigath',
      color: 'from-[#DC2626] to-[#EF4444]',
      glow: 'neon-glow-red'
    },
    {
      name: 'Sudhan',
      title: 'Director, Universal Mobiles',
      color: 'from-[#FF8C00] to-[#FFA500]',
      glow: 'neon-glow-orange'
    },
    {
      name: 'Srikanth',
      title: 'Director, Super Deluxe Kitchen',
      color: 'from-[#1E40AF] to-[#3B82F6]',
      glow: 'neon-glow-blue'
    },
    {
      name: 'Habib',
      title: 'Director Utsahid',
      color: 'from-[#DC2626] to-[#EF4444]',
      glow: 'neon-glow-red'
    },
    {
      name: 'Naresh',
      title: 'Influencer',
      color: 'from-[#FF8C00] to-[#FFA500]',
      glow: 'neon-glow-orange'
    },
    {
      name: 'Rithik Pandian',
      title: 'Influencer',
      color: 'from-[#1E40AF] to-[#3B82F6]',
      glow: 'neon-glow-blue'
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-[#1E40AF] mb-4 tracking-tight text-shadow-3d">
            Meet Our Speakers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry leaders and experts sharing their insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 perspective-2000">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateX: 30, y: 50 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                rotateX: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
              className="group relative transform-style-3d"
            >
              <div className={`
                relative h-full bg-white/80 backdrop-blur-xl rounded-2xl p-6 
                border border-white/50 shadow-xl transition-all duration-300
                group-hover:${speaker.glow} group-hover:border-transparent
              `}>
                {/* 3D Floating Image */}
                <div className="relative w-40 h-40 mx-auto mb-6 transform-style-3d group-hover:translate-z-10 transition-transform duration-500">
                  <div className={`
                    absolute inset-0 rounded-full bg-gradient-to-br ${speaker.color} 
                    opacity-20 blur-xl group-hover:opacity-40 transition-opacity
                  `}></div>
                  <div className={`
                    relative w-full h-full rounded-full bg-gradient-to-br ${speaker.color} 
                    p-1 shadow-lg group-hover:shadow-2xl transition-all duration-300
                  `}>
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <User size={60} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="text-center transform-style-3d group-hover:translate-z-5 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1E40AF] transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {speaker.title}
                  </p>
                </div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpeakersSection;