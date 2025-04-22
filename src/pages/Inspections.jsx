import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import { useLanguage } from '../context/LanguageContext';
import { robots, inspectionData } from '../utils/mockData';

const Inspections = ({ onLogout }) => {
  const { t } = useLanguage();
  const [dateRange, setDateRange] = useState('week');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Generate mock inspection records
  const generateInspectionRecords = () => {
    const records = [];
    const statuses = ['Completed', 'In Progress', 'Scheduled', 'Cancelled'];
    const startDate = new Date();
    
    for (let i = 0; i < 20; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() - i);
      
      const randomRobot = robots[Math.floor(Math.random() * robots.length)];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      
      records.push({
        id: `inspection-${i + 1}`,
        date: date.toLocaleDateString(),
        robotId: randomRobot.id,
        robotName: randomRobot.name,
        location: randomRobot.location,
        distance: Math.floor(Math.random() * 100) + 50,
        issues: Math.floor(Math.random() * 5),
        status: randomStatus,
        operator: ['John Doe', 'Jane Smith', 'Alex Johnson', 'Sam Wilson'][Math.floor(Math.random() * 4)]
      });
    }
    
    return records;
  };
  
  const inspectionRecords = generateInspectionRecords();
  const recordsPerPage = 10;
  const totalPages = Math.ceil(inspectionRecords.length / recordsPerPage);
  const currentRecords = inspectionRecords.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );
  
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Scheduled':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
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
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t('common.inspections')}</h1>
              <p className="text-gray-600 dark:text-gray-400">View and manage your pipe inspection records</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-2">
              <div className="relative">
                <select
                  className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg py-2 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                >
                  <option value="day">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
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
                Export Report
              </button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="card p-4 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center">
                <div className="rounded-full p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Total Inspections</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">428</p>
                </div>
              </div>
            </div>
            
            <div className="card p-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center">
                <div className="rounded-full p-3 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Pipe Distance</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">17.4 km</p>
                </div>
              </div>
            </div>
            
            <div className="card p-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center">
                <div className="rounded-full p-3 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Issues Found</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">68</p>
                </div>
              </div>
            </div>
            
            <div className="card p-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center">
                <div className="rounded-full p-3 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Success Rate</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">98.7%</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Table */}
          <div className="card p-4 mb-6 overflow-hidden animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Robot</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Distance</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Issues</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Operator</th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {currentRecords.map((record, index) => (
                    <tr key={record.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{record.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{record.robotName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{record.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{record.distance} m</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        <span className={`px-2 py-1 text-xs rounded-full ${record.issues > 0 ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'}`}>
                          {record.issues}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadgeClass(record.status)}`}>
                          {record.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{record.operator}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 mr-3">View</button>
                        <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">Export</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 sm:px-6">
              <div className="flex-1 flex justify-between sm:hidden">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md ${
                    currentPage === 1 
                      ? 'text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 cursor-not-allowed' 
                      : 'text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md ${
                    currentPage === totalPages 
                      ? 'text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 cursor-not-allowed' 
                      : 'text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  Next
                </button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Showing <span className="font-medium">{(currentPage - 1) * recordsPerPage + 1}</span> to <span className="font-medium">{Math.min(currentPage * recordsPerPage, inspectionRecords.length)}</span> of{' '}
                    <span className="font-medium">{inspectionRecords.length}</span> results
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium ${
                        currentPage === 1 
                          ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed' 
                          : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span className="sr-only">Previous</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    {/* Page numbers */}
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`relative inline-flex items-center px-4 py-2 border ${
                          currentPage === i + 1
                            ? 'z-10 bg-blue-50 dark:bg-blue-900 border-blue-500 dark:border-blue-600 text-blue-600 dark:text-blue-300'
                            : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                        } text-sm font-medium`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium ${
                        currentPage === totalPages 
                          ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed' 
                          : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span className="sr-only">Next</span>
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspections;