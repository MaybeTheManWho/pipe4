import React from 'react';
import { Link } from 'react-router-dom';

const statusColors = {
  active: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    dot: 'bg-green-500'
  },
  idle: {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    dot: 'bg-blue-500'
  },
  maintenance: {
    bg: 'bg-orange-100',
    text: 'text-orange-800',
    dot: 'bg-orange-500'
  },
  error: {
    bg: 'bg-red-100',
    text: 'text-red-800',
    dot: 'bg-red-500'
  }
};

const RobotCard = ({ robot }) => {
  // If robot is undefined or null, show a placeholder card
  if (!robot) {
    return (
      <div className="card p-6 animate-pulse">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
          <div className="flex-1 space-y-3">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>
        <div className="space-y-2 mt-4">
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
        <div className="mt-4 flex justify-between">
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
        </div>
      </div>
    );
  }

  // Data from robot object with fallbacks to prevent errors
  const { id, name, status, location, lastActive, batteryLevel, issuesDetected } = {
    id: robot.id || 'unknown',
    name: robot.name || 'Unknown Robot',
    status: (robot.status || 'idle').toLowerCase(),
    location: robot.location || 'Unknown Location',
    lastActive: robot.lastActive || 'Never',
    batteryLevel: robot.batteryLevel || 0,
    issuesDetected: robot.issuesDetected || 0
  };
  
  const statusStyle = statusColors[status] || statusColors.idle;
  
  return (
    <div className="card hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{name}</h3>
              <div className="flex items-center space-x-2">
                <span className={`inline-flex h-2 w-2 rounded-full ${statusStyle.dot}`}></span>
                <span className={`text-sm ${statusStyle.text}`}>{status}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className={batteryLevel < 20 ? 'text-red-500 dark:text-red-400 font-medium' : ''}>
                {batteryLevel}%
              </span>
            </div>
          </div>
        </div>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-start space-x-3 text-sm">
            <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-600 dark:text-gray-400">{location}</span>
          </div>
          <div className="flex items-start space-x-3 text-sm">
            <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-600 dark:text-gray-400">Last active: {lastActive}</span>
          </div>
          {issuesDetected > 0 && (
            <div className="flex items-start space-x-3 text-sm">
              <svg className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="text-red-600 dark:text-red-400 font-medium">{issuesDetected} issues detected</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between mt-6">
          <Link
            to={`/robots/${id}`}
            className="btn btn-primary px-4 py-2 text-sm"
          >
            View Details
          </Link>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <button className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotCard;