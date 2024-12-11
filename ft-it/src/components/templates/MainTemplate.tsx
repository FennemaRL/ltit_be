import React from 'react';

const MainTemplate  = ({ children }) => {
  return (
    <div className="main-template">
      <main style={{margin:'1rem', marginRight:'2.5rem',marginLeft:'2.5rem'}}>{children}</main>
      
    </div>
  );
};

export default MainTemplate;