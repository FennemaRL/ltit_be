import React from 'react';
const styles = {
  main: {
    margin: '1rem', marginRight: '2.5rem', marginLeft: '2.5rem', display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }

};
const MainTemplate = ({ children }) => {
  return (
    <div>
      <main style={styles.main}>{children}</main>
    </div>
  );
};

export default MainTemplate;