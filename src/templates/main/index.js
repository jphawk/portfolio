import React from 'react';
import About from '../../components/about'
import Navbar from '../../components/navbar';

function MainPage() {
  return (
    <div className="page page-main">
        <Navbar />
        <About />
    </div>
  );
}

export default MainPage;
