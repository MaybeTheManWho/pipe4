import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      
      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium mb-6">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Hear what our clients have to say about our pipe inspection technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="card p-8">
              <div className="flex items-center space-x-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "PipeBot has transformed our maintenance operations. We've reduced inspection time by 70% and caught critical defects before they caused failures. The technology is truly revolutionary."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"></div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Operations Director, PetroTech Inc.</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="card p-8">
              <div className="flex items-center space-x-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The AI-powered analysis is incredibly accurate. We've integrated PipeBot into our safety protocols, and it's become an essential part of our compliance process. Highly recommended."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"></div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-600">Chief Safety Officer, GasWorks Global</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="card p-8">
              <div className="flex items-center space-x-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The return on investment has been remarkable. We've avoided costly shutdowns and repairs by catching issues early. The dashboard interface makes it easy for our team to monitor all systems."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0"></div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Elena Rodriguez</h4>
                  <p className="text-sm text-gray-600">Infrastructure Manager, EcoFuels Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to revolutionize your pipe inspection process?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join leading companies in adopting our AI-powered inspection technology for safer, more efficient operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-blue-50">
                Contact Us
              </Link>
              <Link to="/services" className="btn bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;