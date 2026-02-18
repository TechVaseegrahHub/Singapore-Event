import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1E40AF]/90 via-[#1E40AF]/80 to-[#0F172A]/90 text-white relative overflow-hidden">
      {/* Red Overlay */}
      <div className="absolute inset-0 bg-[#DC2626] opacity-5 mix-blend-overlay pointer-events-none"></div>
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(220,38,38,0.03),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(30,64,175,0.03),transparent_70%)]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl font-black text-white">Digital</span>
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-[#DC2626]">
                Sakthi
              </span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Empowering businesses through digital transformation and innovation.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#FF8C00] to-[#DC2626] rounded-full mt-4"></div>
          </div>
          {/* Contact */}
          <div>
            <p className="text-lg font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-[#DC2626] inline-block">
              Contact Us
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#FF8C00] mt-1 flex-shrink-0" />
                <p className="text-white/80 text-sm">
                  De Villa, Centrium Square, 320 Serangoon Road, 02-14, Singapore
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-[#FF8C00] flex-shrink-0" />
                <a
                  href="tel:+6580576921"
                  className="text-white/80 hover:text-[#FF8C00] transition-colors text-sm"
                >
                  +65 8512 0360
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-[#FF8C00] flex-shrink-0" />
                <a
                  href="mailto:info@makeio.com"
                  className="text-white/80 hover:text-[#FF8C00] transition-colors text-sm"
                >
                  info@makeio.com
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Center Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <p className="text-white/60 text-sm">
              © 2026 Digital Sakthi. All rights reserved.
            </p>
            <p className="text-white/60 text-sm">
              Powered by{' '}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-[#DC2626]">
                TechVaseegrah
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
