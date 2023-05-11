import React from 'react';


function home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '20px', backgroundColor: '#f2f2f2' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>Welcome, My name is Jolly Fitrah Bilitoni</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#666' }}>Saya adalah team leader GraPARI Belitung.</p>
      <img style={{ width: '100%', height: 'auto', maxWidth: '400px', borderRadius: '10px' }} src="./src/assets/Jolly Fitrah Bilitoni.jpeg" alt="foto Jolly" />
    </div>
  );
}

export default home;
