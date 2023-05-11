import React from 'react';


function Portfolio() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '20px', backgroundColor: '#f2f2f2' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>ini adalah daftar portofolio saya</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#666' }}>Ini adalah halaman portfolio dengan daftar project yang telah selesai.</p>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ marginBottom: '10px' }}><a href="#">Project 1</a></li>
        <li style={{ marginBottom: '10px' }}><a href="#">Project 2</a></li>
        <li style={{ marginBottom: '10px' }}><a href="#">Project 3</a></li>
      </ul>
    </div>
  );
}

export default Portfolio;