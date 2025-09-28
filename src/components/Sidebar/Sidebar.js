import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onPageChange, currentPage, collapsed, onToggle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const socialLinks = [
    { 
      icon: 'fab fa-github', 
      url: 'https://github.com/mithunjain755', 
      platform: 'GitHub',
      color: '#333'
    },
    { 
      icon: 'fab fa-linkedin', 
      url: 'https://linkedin.com/in/mithunjain755', 
      platform: 'LinkedIn',
      color: '#0077B5'
    },
    { 
      icon: 'fab fa-instagram', 
      url: 'https://instagram.com/mithunjain755', 
      platform: 'Instagram',
      color: '#E4405F'
    },
    { 
      icon: 'fab fa-facebook', 
      url: 'https://facebook.com/mithunjain755', 
      platform: 'Facebook',
      color: '#1877F2'
    },
    { 
      icon: 'fab fa-twitter', 
      url: 'https://twitter.com/mithunjain755', 
      platform: 'Twitter',
      color: '#1DA1F2'
    }
  ];

  const navigationItems = [
    { icon: 'fas fa-user', label: 'About Me', page: 'about' },
    { icon: 'fas fa-file-alt', label: 'Resume', page: 'resume' },
    { icon: 'fas fa-briefcase', label: 'Portfolio', page: 'portfolio' },
    { icon: 'fas fa-images', label: 'Gallery', page: 'gallery' },
    { icon: 'fas fa-envelope', label: 'Contact', page: 'contact' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', page: 'location' },
    { icon: 'fas fa-share-alt', label: 'Social Media', page: 'social' }
  ];

  const handlePageChange = (page) => {
    onPageChange(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="mobile-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>

      {/* Desktop Toggle Button */}
      <button 
        className="desktop-toggle"
        onClick={onToggle}
      >
        <i className={collapsed ? 'fas fa-chevron-right' : 'fas fa-chevron-left'}></i>
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-content">
          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-picture">
              <div className="profile-placeholder">
<img 
  src="/My self 3.png" 
  alt="Mithun Jain" 
  className="profile-avatar"
  onError={(e) => {
    e.target.style.display = 'none';
    e.target.parentElement.innerHTML = '<span className="placeholder-avatar">MJ</span>';
  }}
/>
              </div>
              <div className="status-indicator"></div>
            </div>
            {!collapsed && (
              <>
                <h2 className="profile-name">Mithun Jain</h2>
                <p className="profile-title">Front-End Developer & Graphic Designer</p>
                <div className="profile-status">
                  <span className="status-dot"></span>
                  Available for opportunities
                </div>
              </>
            )}
          </div>

          {/* Navigation */}
          <nav className="navigation">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className={`nav-item ${currentPage === item.page ? 'active' : ''}`}
                onClick={() => handlePageChange(item.page)}
                title={collapsed ? item.label : ''}
              >
                <i className={`nav-icon ${item.icon}`}></i>
                {!collapsed && <span className="nav-label">{item.label}</span>}
              </button>
            ))}
          </nav>

          {/* Social Media Icons */}
          {!collapsed && (
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title={link.platform}
                  style={{ '--social-color': link.color }}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          )}

          {/* Footer */}
          {!collapsed && (
            <div className="sidebar-footer">
              <p className="footer-text">
                © 2024 <span className="footer-link">Mithun Jain</span>
              </p>
              <p className="footer-subtitle">Built with React</p>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Overlay */}
      {mobileMenuOpen && <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}></div>}
    </>
  );
};

export default Sidebar;