import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="logo-circle">
            <span>MJ</span>
          </div>
        </div>
        <h2>Mithun Jain</h2>
        <p>Data Analyst & Designer</p>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;