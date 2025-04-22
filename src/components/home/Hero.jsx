import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-primary text-white py-20 md:py-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Smart Pipe Inspection with AI Technology
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Our advanced robots inspect pipes with precision, detecting cracks and defects before they become hazardous, ensuring safety in oil and gas industries.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/services" className="btn bg-white text-blue-600 hover:bg-blue-50">
                Our Services
              </Link>
              <Link to="/contact" className="btn bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10">
                Contact Us
              </Link>
            </div>
            <div className="mt-12 flex items-center space-x-2 text-blue-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Trusted by leading industrial companies</span>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="bg-white rounded-lg p-3 shadow-xl">
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-900">
                <img 
                  src="/images/robot-hero.png"
                  alt="PipeBot in action" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/800x450?text=PipeBot+Inspection+Robot";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg transform rotate-3">
              <span className="font-bold">98% Detection Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;