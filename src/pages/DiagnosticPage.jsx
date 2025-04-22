import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';

const DiagnosticPage = ({ onLogout }) => {
  const location = useLocation();
  
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 ml-64" style={{ marginLeft: '16rem' }}>
        <div className="p-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Diagnostic Page</h1>
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Current Path:</h2>
                <p className="text-blue-600 dark:text-blue-400 font-mono">{location.pathname}</p>
              </div>
              
              <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Page Component:</h2>
                <p className="text-green-600 dark:text-green-400">
                  This diagnostic page component is rendering correctly!
                </p>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h2 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Troubleshooting:</h2>
                <ul className="list-disc pl-5 text-yellow-700 dark:text-yellow-200 space-y-2">
                  <li>Check if your page component is named correctly</li>
                  <li>Verify that the import path in App.jsx is correct</li>
                  <li>Look for any JavaScript errors in the browser console</li>
                  <li>Make sure all required components (like Sidebar) are implemented</li>
                  <li>Check that any context providers are properly set up</li>
                </ul>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Component Structure Check:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Required Components:</h3>
                    <ul className="space-y-1">
                      <li className="text-green-600 dark:text-green-400 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Sidebar
                      </li>
                      <li className="text-green-600 dark:text-green-400 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        useLocation
                      </li>
                    </ul>
                  </div>
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">Route Check:</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      If you see this page, the route is defined correctly in App.jsx
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticPage;