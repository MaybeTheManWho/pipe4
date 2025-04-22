import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Deployment',
      description: 'Our compact robots are inserted into the pipe system before installation in factories or during maintenance periods.',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Inspection',
      description: 'The robot navigates through the pipes, capturing high-resolution images and data with its advanced camera system.',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'AI Analysis',
      description: 'Machine learning algorithms analyze the collected data to detect cracks, corrosion, or other defects with high precision.',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Reporting',
      description: 'Staff receive detailed reports with exact locations of issues, enabling timely and targeted maintenance interventions.',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];
  
  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium mb-6">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            How PipeBot Works
          </h2>
          <p className="text-xl text-gray-600">
            Our innovative solution combines cutting-edge robotics with powerful AI to ensure pipeline integrity and safety.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-full w-full h-0.5 bg-blue-200 z-0 -translate-y-1/2" />
              )}
              
              <div className="relative z-10 card p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-6">
                  <div className="bg-blue-600 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center">
                    {step.number}
                  </div>
                  <div className="ml-4">
                    <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to enhance your pipe safety?</h3>
              <p className="text-gray-600 mb-6">
                Our PipeBot solution is designed to prevent hazardous situations in industrial settings by detecting issues before they become critical.
              </p>
              <button className="btn btn-primary">
                Schedule a Demo
              </button>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Improved Safety Standards</h4>
                  <p className="text-gray-600 text-sm">Reduce the risk of accidents and failures</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Cost Efficiency</h4>
                  <p className="text-gray-600 text-sm">Save on maintenance and prevent costly failures</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rapid Deployment</h4>
                  <p className="text-gray-600 text-sm">Quick setup and integration with existing systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;