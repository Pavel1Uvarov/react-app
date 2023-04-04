import React from 'react';
const MyComponent = ({children, ...props}) => {
  return (
    <button {...props} className="btn">{children}</button>
  );
};

export default MyComponent;
