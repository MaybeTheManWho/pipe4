import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Pipe Inspection',
      description: 'Our cutting-edge robots navigate through pipes of various diameters, capturing high-resolution imagery to identify potential issues before they become critical.',
      features: [
        'Inspects pipes ranging from 10cm to 100cm in diameter',
        'Captures 4K resolution imagery for detailed analysis',
        'LED lighting system for dark environments',
        'Waterproof and pressure-resistant design',
        'Battery life of up to 8 hours',
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'AI Analysis',
      description: 'Our proprietary machine learning algorithms analyze the captured imagery to detect cracks, corrosion, and other defects with over 98% accuracy.',
      features: [
        'Deep learning models trained on millions of pipe images',
        'Detects hairline cracks as small as 0.1mm',
        'Identifies multiple types of defects including cracks, corrosion, and joint issues',
        'Severity classification to prioritize maintenance',
        'Continuous learning from new inspections',
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Real-time Monitoring',
      description: 'Our dashboard provides real-time updates on inspection progress and alerts for any detected issues, allowing for immediate response to potential problems.',
      features: [
        'Web-based dashboard accessible from any device',
        'Real-time location tracking of inspection robots',
        'Instant alerts for critical defects',
        'Historical inspection data comparison',
        'Customizable reporting and notification settings',
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Maintenance Planning',
      description: 'Our detailed reports help you plan and prioritize maintenance activities, reducing downtime and extending the life of your infrastructure.',
      features: [
        'Detailed defect reports with exact locations',
        'Severity assessment and repair recommendations',
        'Maintenance scheduling and tracking',
        'Cost estimation for repairs',
        'Integration with common maintenance management systems',
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl mb-8 text-blue-100">
              Comprehensive pipe inspection and maintenance solutions powered by robotics and artificial intelligence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              End-to-End Pipe Inspection Solutions
            </h2>
            <p className="text-xl text-gray-600">
              From deployment to maintenance planning, our comprehensive services keep your infrastructure safe and operational.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="card p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                  Learn more
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Our Inspection Process
            </h2>
            <p className="text-xl text-gray-600">
              A simple, efficient process from consultation to implementation
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative">
                <div className="md:flex items-center justify-between">
                  <div className="md:w-5/12 mb-6 md:mb-0">
                    <div className="card p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">1. Initial Consultation</h3>
                      <p className="text-gray-600">
                        We assess your specific needs, infrastructure details, and inspection requirements to create a tailored plan.
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center relative z-10">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                  </div>
                  
                  <div className="md:w-5/12">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">What to expect:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Detailed infrastructure assessment</li>
                        <li>• Customized inspection plan</li>
                        <li>• Cost and timeline estimates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <div className="md:flex items-center justify-between">
                  <div className="md:w-5/12 md:order-2 mb-6 md:mb-0">
                    <div className="card p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">2. Robot Deployment</h3>
                      <p className="text-gray-600">
                        Our expert technicians deploy the inspection robots at strategic points in your pipe system.
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center relative z-10">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                  </div>
                  
                  <div className="md:w-5/12 md:order-1">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">What to expect:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Minimal disruption to operations</li>
                        <li>• Real-time monitoring setup</li>
                        <li>• Initial system calibration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative">
                <div className="md:flex items-center justify-between">
                  <div className="md:w-5/12 mb-6 md:mb-0">
                    <div className="card p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">3. Inspection & Analysis</h3>
                      <p className="text-gray-600">
                        Our robots navigate through your pipes while our AI system analyzes the captured data in real-time.
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center relative z-10">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
                  </div>
                  
                  <div className="md:w-5/12">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">What to expect:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Comprehensive pipe scanning</li>
                        <li>• AI-powered defect detection</li>
                        <li>• Real-time alerts for critical issues</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative">
                <div className="md:flex items-center justify-between">
                  <div className="md:w-5/12 md:order-2 mb-6 md:mb-0">
                    <div className="card p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">4. Reporting & Recommendations</h3>
                      <p className="text-gray-600">
                        We provide detailed reports with actionable recommendations for maintenance and repairs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center relative z-10">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">4</div>
                  </div>
                  
                  <div className="md:w-5/12 md:order-1">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">What to expect:</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Comprehensive inspection reports</li>
                        <li>• Prioritized maintenance recommendations</li>
                        <li>• Cost-effective repair strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-blue-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to transform your pipe maintenance?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our team today to schedule a consultation and learn how our solutions can benefit your operation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-blue-50">
                Schedule a Consultation
              </Link>
              <Link to="/contact" className="btn bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10">
                Download Brochure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;