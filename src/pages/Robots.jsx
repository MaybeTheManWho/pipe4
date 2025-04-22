import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import RobotCard from '../components/dashboard/RobotCard';
import { robots } from '../utils/mockData';
import { useLanguage } from '../context/LanguageContext';

const Robots = ({ onLogout }) => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Filter robots based on search and status
  const filteredRobots = robots.filter(robot => {
    const matchesSearch = robot.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          robot.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || robot.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });
  
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar onLogout={onLogout} />
      
      <div className="flex-1 ml-64" style={{ marginLeft: '16rem' }}>
        <div className="p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 animate-fade-in">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t('common.myRobots')}</h1>
              <p className="text-gray-600 dark:text-gray-400">Monitor and manage your pipe inspection robots</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <button className="btn btn-primary flex items-center transform hover:scale-105 transition-all duration-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Add New Robot
              </button>
            </div>
          </div>
          
          {/* Search and Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-700 dark:text-white"
                  placeholder="Search robots by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="w-full md:w-48">
                <select
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-700 dark:text-white"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="idle">Idle</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="error">Error</option>
                </select>
              </div>
              
              <div className="w-full md:w-48">
                <select
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors dark:bg-gray-700 dark:text-white"
                >
                  <option value="name">Sort by Name</option>
                  <option value="status">Sort by Status</option>
                  <option value="battery">Sort by Battery</option>
                  <option value="lastActive">Sort by Last Active</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Robots Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {filteredRobots.length > 0 ? (
              filteredRobots.map((robot, index) => (
                <div key={robot.id} className="animate-fade-in" style={{animationDelay: `${0.2 + (index * 0.1)}s`}}>
                  <RobotCard robot={robot} />
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-12 card animate-fade-in" style={{animationDelay: '0.2s'}}>
                <svg className="w-16 h-16 text-gray-400 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No robots found</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">No robots match your current filters. Try adjusting your search or filters.</p>
                <button 
                  onClick={() => { setSearchTerm(''); setStatusFilter('all'); }} 
                  className="btn btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robots;