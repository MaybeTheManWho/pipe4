import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Chart from '../components/dashboard/Chart';
import { inspectionData, pieData, robotPerformanceData, dailyInspectionData } from '../utils/mockData';
import { useLanguage } from '../context/LanguageContext';

const Analytics = ({ onLogout }) => {
  const { t } = useLanguage();
  const [timeRange, setTimeRange] = useState('month');
  
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 ml-64" style={{ marginLeft: '16rem' }}>
        <div className="p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 animate-fade-in">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t('common.analytics')}</h1>
              <p className="text-gray-600 dark:text-gray-400">Advanced insights and performance metrics for your pipe inspection operations</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-2">
              <div className="relative">
                <select
                  className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg py-2 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                >
                  <option value="week">Past Week</option>
                  <option value="month">Past Month</option>
                  <option value="quarter">Past Quarter</option>
                  <option value="year">Past Year</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              
              <button className="btn btn-primary flex items-center transform hover:scale-105 transition-all duration-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export Analytics
              </button>
            </div>
          </div>
          
          {/* Analytics Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="card p-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Inspections</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">1,284</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-green-600 dark:text-green-400 flex items-center text-sm font-medium">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  12%
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">from last month</span>
              </div>
            </div>
            
            <div className="card p-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Inspection Distance</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">17.4 km</p>
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-green-600 dark:text-green-400 flex items-center text-sm font-medium">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  18%
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">from last month</span>
              </div>
            </div>
            
            <div className="card p-6 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Average Issues/km</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">3.2</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-red-600 dark:text-red-400 flex items-center text-sm font-medium">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  5%
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">from last month</span>
              </div>
            </div>
            
            <div className="card p-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Robot Efficiency</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">94.7%</p>
                </div>
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-green-600 dark:text-green-400 flex items-center text-sm font-medium">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  2.3%
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">from last month</span>
              </div>
            </div>
          </div>
          
          {/* Main Analytics Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="card p-6 animate-fade-in" style={{animationDelay: '0.5s'}}>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Inspection Activity Trend</h2>
              <Chart
                type="line"
                data={inspectionData}
              />
            </div>
            
            <div className="card p-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Issue Distribution</h2>
              <Chart
                type="pie"
                data={pieData}
              />
            </div>
            
            <div className="card p-6 animate-fade-in" style={{animationDelay: '0.7s'}}>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Robot Performance Comparison</h2>
              <Chart
                type="bar"
                data={robotPerformanceData}
              />
            </div>
            
            <div className="card p-6 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Daily Inspection Count</h2>
              <Chart
                type="area"
                data={dailyInspectionData}
              />
            </div>
          </div>
          
          {/* Analytics Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 animate-fade-in" style={{animationDelay: '0.9s'}}>
              <div className="card p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Metrics Breakdown</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Metric</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Current</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Previous</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Change</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">Inspection Speed (m/min)</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">2.4</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">2.1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400">+14.3%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">Battery Efficiency (hrs)</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">6.8</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">6.5</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400">+4.6%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">Detection Accuracy</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">98.7%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">97.2%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400">+1.5%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">False Positives Rate</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">1.3%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">2.1%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400">-38.1%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">Maintenance Frequency (days)</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">45</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">30</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400">+50.0%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '1.0s'}}>
              <div className="card p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Improvement Suggestions</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">Optimize Robot Beta Route</h3>
                        <p className="mt-1 text-sm text-blue-700 dark:text-blue-200">
                          Adjust Robot Beta's inspection path in Section C to reduce overlap with Robot Alpha by 15%.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-green-800 dark:text-green-300">Battery Management</h3>
                        <p className="mt-1 text-sm text-green-700 dark:text-green-200">
                          Implementing the new charge cycle can extend battery life by approximately 12%.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-300">AI Training Opportunity</h3>
                        <p className="mt-1 text-sm text-yellow-700 dark:text-yellow-200">
                          Recent false positives in Section B suggest opportunity for AI model retraining with new examples.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-purple-800 dark:text-purple-300">Performance Insight</h3>
                        <p className="mt-1 text-sm text-purple-700 dark:text-purple-200">
                          Camera resolution increase shows 22% better detection rate for hairline cracks under 0.5mm.
                        </p>
                      </div>
                    </div>
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

export default Analytics;