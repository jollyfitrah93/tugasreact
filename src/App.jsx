import React from 'react';

import Home from './components/Home';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  function handleNavigation(page) {
    setCurrentPage(page);
  }

  let content;

  if (currentPage === 'home') {
    content = <Home />;
  } else if (currentPage === 'portfolio') {
    content = <Portfolio />;
  } else if (currentPage === 'contact') {
    content = <Contact />;
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2f2f2'  }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '5px', color: '#333', marginBottom: '20px'}}>Portofolio Page</h1>
      <nav style={{marginTop: '10px'}}>
        <button style={{marginRight: '25px', backgroundColor: '#3498db', border: 'none', color: 'white', padding: '10px 20px', textAlign: 'center', textDecoration:'none', display: 'inline-block', fontSize: '16px',borderRadius: '5px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0, 0.1)', transition: 'all 0.3s ease-in-out'}} onClick={() => handleNavigation('home')}>Home</button>
        <button style={{marginRight: '25px', backgroundColor: '#3498db', border: 'none', color: 'white', padding: '10px 20px', textAlign: 'center', textDecoration:'none', display: 'inline-block', fontSize: '16px',borderRadius: '5px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0, 0.1)', transition: 'all 0.3s ease-in-out'}} onClick={() => handleNavigation('portfolio')}>Portfolio</button>
        <button style={{backgroundColor: '#3498db', border: 'none', color: 'white', padding: '10px 20px', textAlign: 'center', textDecoration:'none', display: 'inline-block', fontSize: '16px',borderRadius: '5px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0, 0.1)', transition: 'all 0.3s ease-in-out'}} onClick={() => handleNavigation('contact')}>Contact</button>
      </nav>
      {content}
    </div>
  );
}

export default App;
