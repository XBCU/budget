import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>TempleBudget</h1>
      <button 
        onClick={() => alert('Button clicked!')}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Connect Your Bank Account
      </button>
    </div>
  );
}

export default App;