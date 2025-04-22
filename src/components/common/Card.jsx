import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  padding = true, 
  shadow = true, 
  rounded = true, 
  border = false,
  hoverEffect = false,
  ...props 
}) => {
  const classes = [
    'bg-white',
    rounded ? 'rounded-xl' : '',
    padding ? 'p-6' : '',
    shadow ? 'shadow-md' : '',
    border ? 'border border-gray-200' : '',
    hoverEffect ? 'transition-all duration-300 hover:shadow-lg' : '',
    className
  ].filter(Boolean).join(' ');
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;