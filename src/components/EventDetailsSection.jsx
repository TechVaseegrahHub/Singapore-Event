import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone, DollarSign, ArrowRight } from 'lucide-react';

function EventDetailsSection() {
  const details = [
    {
      icon: Calendar,
      label: 'Date',
      value: 'February 22, 2026',
      color: 'text-[#DC2626]',
      glow: 'neon-glow-red'
    },
    {
      icon: Clock,
      label: 'Time',
      value: '3:30 PM to 6:30 PM',
      color: 'text-[#1E40AF]',
      glow: 'neon-glow-blue'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'De Villa, Centrium Square, 320 Serangoon Road, 02-14, Singapore',
      color: 'text-[#FF8C00]',
      glow: 'neon-glow-orange'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+65 85120360',
      color: 'text-[#DC2626]',
      link: 'https://wa.me/6585120360',
      glow: 'neon-glow-red'
    },
    {
      icon: DollarSign,
      label: 'Entry Fee',
      value: '$15',
      color: 'text-[#1E40AF]',
      glow: 'neon-glow-blue'
    }
  ];

  const handleBooking = () => {
    window.open('https://wa.me/6585120360?text=I%20would%20like%20to%20book%20a%20seat%20for%20MAKEIO%202026', '_blank');
  };

  return (
    <section id="details" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
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
            Event Details
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about the event
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 perspective-1000">
            {details.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, rotateY: index % 2 === 0 ? -10 : 10 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    rotateX: 2,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                  }}
                  className="group transform-style-3d"
                >
                  <div className={`
                    bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg 
                    border-2 border-gray-100 transition-all duration-300
                    group-hover:border-transparent group-hover:${detail.glow}
                  `}>
                    <div className="flex items-start space-x-4 transform-style-3d">
                      <div className={`
                        w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 
                        flex items-center justify-center transition-all duration-300
                        group-hover:scale-110 group-hover:shadow-md ${detail.color}
                      `}>
                        <Icon size={24} />
                      </div>
                      <div className="flex-1 transform-style-3d group-hover:translate-x-2 transition-transform">
                        <p className="text-sm font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                          {detail.label}
                        </p>
                        {detail.link ? (
                          <a
                            href={detail.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-bold text-gray-900 hover:text-[#FF8C00] transition-colors"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-lg font-bold text-gray-900">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center"
          >
            <button
              onClick={handleBooking}
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-[#FF8C00] to-[#DC2626] text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 neon-glow-orange shadow-2xl"
            >
              <span>Book your Seat</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </button>
            <p className="mt-6 text-gray-600 font-medium">
              Limited seats available • Secure your spot now!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default EventDetailsSection;