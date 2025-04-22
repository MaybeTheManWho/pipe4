import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import { useLanguage } from '../context/LanguageContext';

const Reports = ({ onLogout }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('generated');
  
  // Mock report data
  const generatedReports = [
    { 
      id: 'report-001', 
      title: 'Monthly Inspection Summary - April 2023', 
      type: 'summary',
      date: '2023-04-30',
      pages: 12,
      size: '2.4 MB',
      status: 'completed'
    },
    { 
      id: 'report-002', 
      title: 'Pipe Section A-14 Detailed Analysis', 
      type: 'analysis',
      date: '2023-04-28',
      pages: 24,
      size: '5.7 MB',
      status: 'completed'
    },
    { 
      id: 'report-003', 
      title: 'Maintenance Recommendations Q2 2023', 
      type: 'maintenance',
      date: '2023-04-25',
      pages: 18,
      size: '3.1 MB',
      status: 'completed'
    },
    { 
      id: 'report-004', 
      title: 'Critical Issues Detected - West Plant', 
      type: 'alert',
      date: '2023-04-22',
      pages: 5,
      size: '1.2 MB',
      status: 'completed'
    },
    { 
      id: 'report-005', 
      title: 'Robot Performance Evaluation - March 2023', 
      type: 'performance',
      date: '2023-04-15',
      pages: 20,
      size: '4.5 MB',
      status: 'completed'
    }
  ];
  
  const scheduledReports = [
    { 
      id: 'scheduled-001', 
      title: 'Monthly Inspection Summary - May 2023', 
      type: 'summary',
      scheduledDate: '2023-05-31',
      estimatedPages: 15,
      status: 'scheduled'
    },
    { 
      id: 'scheduled-002', 
      title: 'Quarterly Performance Analysis - Q2 2023', 
      type: 'performance',
      scheduledDate: '2023-06-30',
      estimatedPages: 30,
      status: 'scheduled'
    },
    { 
      id: 'scheduled-003', 
      title: 'Semi-Annual Maintenance Recommendations', 
      type: 'maintenance',
      scheduledDate: '2023-06-15',
      estimatedPages: 25,
      status: 'scheduled'
    }
  ];
  
  const getReportTypeIcon = (type) => {
    switch (type) {
      case 'summary':
        return (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'analysis':
        return (
          <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'maintenance':
        return (
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'alert':
        return (
          <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      case 'performance':
        return (
          <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
    }
  };
  
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 ml-64" style={{ marginLeft: '16rem' }}>
        <div className="p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 animate-fade-in">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t('common.reports')}</h1>
              <p className="text-gray-600 dark:text-gray-400">Generate, view, and manage detailed inspection reports</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <button className="btn btn-primary flex items-center transform hover:scale-105 transition-all duration-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Generate New Report
              </button>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="mb-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="flex border-b border-gray-200 dark:border-gray-700">
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm focus:outline-none ${
                  activeTab === 'generated'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('generated')}
              >
                Generated Reports
              </button>
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm focus:outline-none ${
                  activeTab === 'scheduled'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('scheduled')}
              >
                Scheduled Reports
              </button>
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm focus:outline-none ${
                  activeTab === 'templates'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('templates')}
              >
                Report Templates
              </button>
            </div>
          </div>
          
          {/* Generated Reports */}
          {activeTab === 'generated' && (
            <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recently Generated Reports</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Access and manage your inspection reports</p>
                </div>
                
                <div className="flex space-x-2">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-700 dark:text-white"
                      placeholder="Search reports..."
                    />
                  </div>
                  
                  <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-700 dark:text-white">
                    <option value="all">All Types</option>
                    <option value="summary">Summary</option>
                    <option value="analysis">Analysis</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="alert">Alert</option>
                    <option value="performance">Performance</option>
                  </select>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Report</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date Generated</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Pages</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Size</th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {generatedReports.map((report) => (
                        <tr key={report.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-lg">
                                {getReportTypeIcon(report.type)}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900 dark:text-white">{report.title}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full uppercase" style={{
                              backgroundColor: report.type === 'summary' ? 'rgba(59, 130, 246, 0.1)' :
                                             report.type === 'analysis' ? 'rgba(124, 58, 237, 0.1)' :
                                             report.type === 'maintenance' ? 'rgba(16, 185, 129, 0.1)' :
                                             report.type === 'alert' ? 'rgba(239, 68, 68, 0.1)' :
                                             'rgba(245, 158, 11, 0.1)',
                              color: report.type === 'summary' ? 'rgb(59, 130, 246)' :
                                     report.type === 'analysis' ? 'rgb(124, 58, 237)' :
                                     report.type === 'maintenance' ? 'rgb(16, 185, 129)' :
                                     report.type === 'alert' ? 'rgb(239, 68, 68)' :
                                     'rgb(245, 158, 11)'
                            }}>
                              {report.type}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {report.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {report.pages}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {report.size}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mr-3">View</button>
                            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mr-3">Download</button>
                            <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300">Share</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Showing 5 of 24 reports</div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">Previous</button>
                      <button className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700">1</button>
                      <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">2</button>
                      <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">3</button>
                      <button className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">Next</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Scheduled Reports */}
          {activeTab === 'scheduled' && (
            <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">Scheduled Reports</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">View and manage your upcoming report generation tasks</p>
                </div>
                
                <button className="btn btn-outline flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Schedule New Report
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scheduledReports.map((report) => (
                  <div key={report.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-lg">
                          {getReportTypeIcon(report.type)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{report.title}</div>
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full uppercase mt-1" style={{
                            backgroundColor: report.type === 'summary' ? 'rgba(59, 130, 246, 0.1)' :
                                           report.type === 'analysis' ? 'rgba(124, 58, 237, 0.1)' :
                                           report.type === 'maintenance' ? 'rgba(16, 185, 129, 0.1)' :
                                           report.type === 'alert' ? 'rgba(239, 68, 68, 0.1)' :
                                           'rgba(245, 158, 11, 0.1)',
                            color: report.type === 'summary' ? 'rgb(59, 130, 246)' :
                                   report.type === 'analysis' ? 'rgb(124, 58, 237)' :
                                   report.type === 'maintenance' ? 'rgb(16, 185, 129)' :
                                   report.type === 'alert' ? 'rgb(239, 68, 68)' :
                                   'rgb(245, 158, 11)'
                          }}>
                            {report.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Scheduled Date:</span>
                          <span className="text-gray-900 dark:text-white">{report.scheduledDate}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Estimated Pages:</span>
                          <span className="text-gray-900 dark:text-white">{report.estimatedPages}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Status:</span>
                          <span className="text-green-600 dark:text-green-400 font-medium">Scheduled</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-end space-x-2">
                        <button className="px-3 py-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Edit</button>
                        <button className="px-3 py-1 text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300">Cancel</button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Add New Scheduled Report Card */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 overflow-hidden hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300">
                  <div className="p-6 flex items-center justify-center h-full">
                    <button className="flex flex-col items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                      <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <span className="text-sm font-medium">Schedule New Report</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Report Templates */}
          {activeTab === 'templates' && (
            <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">Report Templates</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Use and customize report templates for different purposes</p>
                </div>
                
                <button className="btn btn-outline flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Create New Template
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Summary Report Template */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-medium text-gray-900 dark:text-white">Summary Report</div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      General overview of inspection results, statistics, and key findings.
                    </p>
                    
                    <div className="flex justify-end space-x-2">
                      <button className="px-3 py-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Customize</button>
                      <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">Use Template</button>
                    </div>
                  </div>
                </div>
                
                {/* Detailed Analysis Template */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-lg">
                        <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-medium text-gray-900 dark:text-white">Detailed Analysis</div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      In-depth analysis of specific pipe sections with comprehensive data visualization.
                    </p>
                    
                    <div className="flex justify-end space-x-2">
                      <button className="px-3 py-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Customize</button>
                      <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">Use Template</button>
                    </div>
                  </div>
                </div>
                
                {/* Maintenance Recommendations Template */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-lg">
                        <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-medium text-gray-900 dark:text-white">Maintenance Recommendations</div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Prioritized maintenance tasks with estimated costs and recommended timelines.
                    </p>
                    
                    <div className="flex justify-end space-x-2">
                      <button className="px-3 py-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Customize</button>
                      <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">Use Template</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;