// Layout.jsx
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="relative bg-gradient-to-br from-[#1E40AF] via-[#1E40AF] to-[#0F172A]">
      {React.Children.map(children, (child, index) => {
        // Check if current child is HeroSection (first child)
        const isHero = index === 0;
        
        return (
          <div className="relative">
            {child}
            {/* Add subtle dividers between sections */}
            {index < React.Children.count(children) - 1 && !isHero && (
              <div className="relative h-4 bg-gradient-to-b from-transparent to-black/5" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Layout;