import React from 'react';

const AlertCard = ({ alert }) => {
  const { id, title, message, type, timestamp, read } = alert;
  
  const alertStyles = {
    error: {
      icon: (
        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      bg: 'bg-red-50',
      border: 'border-red-200',
      title: 'text-red-800',
      text: 'text-red-600'
    },
    warning: {
      icon: (
        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      title: 'text-yellow-800',
      text: 'text-yellow-600'
    },
    info: {
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      title: 'text-blue-800',
      text: 'text-blue-600'
    },
    success: {
      icon: (
        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bg: 'bg-green-50',
      border: 'border-green-200',
      title: 'text-green-800',
      text: 'text-green-600'
    }
  };
  
  const style = alertStyles[type] || alertStyles.info;
  
  return (
    <div className={`rounded-lg border p-4 ${style.bg} ${style.border} relative ${read ? 'opacity-70' : ''}`}>
      {!read && (
        <div className="absolute top-3 right-3 h-3 w-3 rounded-full bg-blue-500"></div>
      )}
      
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          {style.icon}
        </div>
        <div className="flex-1">
          <h4 className={`font-medium ${style.title}`}>{title}</h4>
          <p className={`mt-1 text-sm ${style.text}`}>{message}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-gray-500">{timestamp}</span>
            <div className="flex space-x-2">
              <button className="text-sm text-gray-600 hover:text-gray-900">Mark as read</button>
              <button className="text-sm text-gray-600 hover:text-gray-900">Dismiss</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;