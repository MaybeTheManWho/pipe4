import React from 'react';
import LoginForm from '../components/auth/LoginForm';

const Login = ({ onLogin }) => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hidden lg:block">
            <div className="max-w-md">
              <div className="bg-gradient-primary text-white rounded-2xl p-8 mb-8">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">P</span>
                  </div>
                  <span className="text-xl font-bold">PipeBot</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-4">Welcome to your Pipeline Management Portal</h2>
                <p className="text-blue-100 mb-6">
                  Access comprehensive insights about your pipe inspection data, robot status, and maintenance alerts.
                </p>
                
                <div className="bg-blue-600 bg-opacity-50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">With PipeBot Dashboard, you can:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-300 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Monitor real-time robot location and status</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-300 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Review pipe inspection results and identified issues</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-300 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Schedule maintenance and track repairs</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Secure Access</h3>
                    <p className="text-gray-600 text-sm">
                      Your dashboard is protected with enterprise-grade security
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Data Analytics</h3>
                    <p className="text-gray-600 text-sm">
                      Gain valuable insights into your pipe infrastructure health
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <LoginForm onLogin={onLogin} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;