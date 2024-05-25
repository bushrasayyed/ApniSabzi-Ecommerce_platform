

import React from 'react';

const Alert = ({ message }) => {
  return (
    <div style={{padding: '10px 20px',backgroundColor: '#f44336',color: 'white', borderRadius:'5px', marginBottom: '10p'}}>
      {message}
    </div>
  );
};

export default Alert;
