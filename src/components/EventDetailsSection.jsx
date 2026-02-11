import React from "react";

const STEPS = [
  {
    id: 1,
    step: "Step 1",
    title: "Start Chat",
    src: "/assets/image/Image1.png",
  },
  {
    id: 2,
    step: "Step 2",
    title: "Registration",
    src: "/assets/image/Image2.png",
  },
  {
    id: 3,
    step: "Step 3",
    title: "Payment",
    src: "/assets/image/Image3.png",
  },
  {
    id: 4,
    step: "Step 4",
    title: "Receive Ticket",
    src: "/assets/image/Image4.png",
  },
];

const HowToBookSection = () => {
  return (
    <section id="how-to-book" className="bg-white py-6 px-4 md:py-20 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Mobile View - Exact Match to Image */}
        <div className="block md:hidden">
          {/* Main Chat Screenshot */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-4">
            <img
              src="/assets/image/Image1.png"
              alt="WhatsApp Chat"
              className="w-full h-auto object-contain block"
              loading="lazy"
            />
          </div>

          {/* Contact Info Card */}
          <div className="bg-[#F8F9FC] rounded-2xl p-5 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-semibold text-base">
                    +65 835739621
                  </span>
                  <span className="px-2.5 py-1 bg-[#E8F5E9] text-green-700 text-xs font-medium rounded-full">
                    Testy
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-0.5">Typically replies instantly</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-xl p-4 border border-gray-50">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinecap="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinecap="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-medium text-sm">
                    Current location is: <span className="font-bold">1.5km from here</span>
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Please enter your Taps for more
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Booking Button */}
          <a
            href="https://wa.me/6580579621?text=book%20ticket"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full bg-[#00A884] hover:bg-[#008069] text-white px-6 py-4 rounded-2xl transition-all duration-300 active:scale-[0.98] mb-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.473-.149-.673.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.672-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.124 1.523 5.877L.043 23.35c-.104.436.276.816.712.712l5.473-1.48C7.876 22.446 9.877 23 12 23c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium opacity-90">Chat with us on</p>
                <p className="text-base font-bold">Book on WhatsApp</p>
              </div>
            </div>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          {/* Step Indicators */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-6 h-2 bg-[#00A884] rounded-full"></div>
              <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
            </div>
            <span className="text-xs text-gray-400">1/4 steps</span>
          </div>
        </div>

        {/* Desktop View - 4 Column Grid */}
        <div className="hidden md:block">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              How to Book
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Follow these 4 simple steps to complete your registration and receive your ticket instantly.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {STEPS.map((item) => (
              <div key={item.id} className="group">
                <div className="mb-6 text-left">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wider">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                </div>
                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 transition-all duration-300 group-hover:shadow-blue-100 group-hover:-translate-y-2">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full aspect-[9/18] object-cover object-top block"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop WhatsApp Button */}
          <div className="flex justify-center mt-16">
            <a
              href="https://wa.me/6580579621?text=book%20ticket"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.473-.149-.673.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.672-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.124 1.523 5.877L.043 23.35c-.104.436.276.816.712.712l5.473-1.48C7.876 22.446 9.877 23 12 23c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
              </svg>
              <span>Book on WhatsApp</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowToBookSection;
