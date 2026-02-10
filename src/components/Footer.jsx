import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-[#1E40AF] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl font-black text-white">MAKE</span>
              <span className="text-3xl font-black text-[#FF8C00]">IO</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Empowering businesses through digital transformation and innovation.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-lg font-bold mb-4 text-[#FF8C00]">Contact Us</p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#FF8C00] mt-1 flex-shrink-0" />
                <p className="text-white/80 text-sm">
                  De Villa, Centrium Square, 320 Serangoon Road, 02-14, Singapore
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-[#FF8C00] flex-shrink-0" />
                <a href="https://wa.me/6585120360" className="text-white/80 hover:text-[#FF8C00] transition-colors text-sm">
                  +65 85120360
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-[#FF8C00] flex-shrink-0" />
                <a href="mailto:info@makeio.com" className="text-white/80 hover:text-[#FF8C00] transition-colors text-sm">
                  info@makeio.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <p className="text-lg font-bold mb-4 text-[#FF8C00]">Follow Us</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 hover:bg-[#FF8C00] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2026 MAKEIO. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-[#FF8C00] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-[#FF8C00] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;