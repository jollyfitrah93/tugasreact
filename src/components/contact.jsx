import React from 'react';

function Contact() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '20px', backgroundColor: '#f2f2f2' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>Ini adalah halaman Contact</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#666' }}>Tuliskan Nama dan Pesan Anda Dibawah.</p>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <label style={{ marginBottom: '10px', fontSize: '1.2rem', color: '#333' }} htmlFor="name">Nama</label>
        <input style={{ marginBottom: '20px', padding: '10px', border: 'none', borderRadius: '5px' }} type="text" id="name" name="name" />
        <label style={{ marginBottom: '10px', fontSize: '1.2rem', color: '#333' }} htmlFor="email">Email</label>
        <input style={{ marginBottom: '20px', padding: '10px', border: 'none', borderRadius: '5px' }} type="email" id="email" name="email" />
        <label style={{ marginBottom: '10px', fontSize: '1.2rem', color: '#333' }} htmlFor="message">Pesan</label>
        <textarea style={{ marginBottom: '20px', padding: '10px', border: 'none', borderRadius: '5px' }} id="message" name="message" rows="5"></textarea>
        <button style={{ padding: '10px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px' }}>Kirim</button>
      </form>
    </div>
  );
}

export default Contact;