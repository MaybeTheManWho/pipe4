import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold text-white">PipeBot</span>
            </div>
            <p className="text-gray-400 mb-4">
              Revolutionizing pipe inspection with AI and robotics for safer industrial operations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 5.92a8.5 8.5 0 01-2.36.64 4.12 4.12 0 001.81-2.27 8.26 8.26 0 01-2.61 1 4.11 4.11 0 00-7 3.75 11.68 11.68 0 01-8.45-4.28 4.11 4.11 0 001.27 5.49 4.1 4.1 0 01-1.86-.51v.05a4.11 4.11 0 003.29 4.03 4.13 4.13 0 01-1.85.07 4.12 4.12 0 003.83 2.85A8.25 8.25 0 012 19.41a11.64 11.64 0 006.29 1.84c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.52A8.32 8.32 0 0022 5.92z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.667 2A3.336 3.336 0 0122 5.333v13.334A3.337 3.337 0 0118.667 22H5.333A3.337 3.337 0 012 18.667V5.333A3.336 3.336 0 015.333 2h13.334zm.666 16.667V14.67a3.446 3.446 0 00-3.445-3.445c-.9 0-1.94.67-2.445 1.669v-1.4h-2.89v7.174h2.89v-4.23c0-.78.601-1.457 1.39-1.457.789 0 1.389.678 1.389 1.458v4.23h3.11zM6.556 8.89A1.667 1.667 0 004.89 7.222a1.667 1.667 0 001.667-1.667A1.667 1.667 0 008.222 7.22a1.667 1.667 0 00-1.666 1.667zM8 18.667v-7.174H5.111v7.174H8z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.271.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-white transition-colors">Login</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Pipe Inspection</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">AI Analysis</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Maintenance</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Consulting</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">
                  123 Innovation Drive, Tech City, TC 12345
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">
                  info@pipebot.com
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">
                  +1 (555) 123-4567
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} PipeBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;