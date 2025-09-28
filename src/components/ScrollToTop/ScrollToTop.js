import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    const scrollTop = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / documentHeight) * 100;
    
    setScrollProgress(progress);
    
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          className="scroll-to-top"
          onClick={scrollToTop}
          title="Scroll to top"
        >
          <div className="scroll-progress">
            <svg className="progress-ring" width="50" height="50">
              <circle
                className="progress-ring-background"
                cx="25"
                cy="25"
                r="20"
                fill="transparent"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="2"
              />
              <circle
                className="progress-ring-progress"
                cx="25"
                cy="25"
                r="20"
                fill="transparent"
                stroke="white"
                strokeWidth="2"
                style={{
                  strokeDasharray: `${2 * Math.PI * 20}`,
                  strokeDashoffset: `${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`,
                }}
              />
            </svg>
            <i className="fas fa-arrow-up"></i>
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;