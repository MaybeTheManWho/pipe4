import React from 'react';

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  iconBg = 'bg-blue-100',
  iconColor = 'text-blue-600',
  className = '' 
}) => {
  return (
    <div className={`p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <div className={`w-12 h-12 rounded-lg ${iconBg} flex items-center justify-center mb-4`}>
        <div className={iconColor}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;