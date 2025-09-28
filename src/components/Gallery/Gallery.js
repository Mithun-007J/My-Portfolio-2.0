import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const galleryItems = [
    // Personal Photos
    {
      id: 1,
      title: "Professional Portrait",
      category: "personal",
      image: "/My self 3.png",
      description: "Professional headshot for portfolio and social media",
      tags: ["Portrait", "Professional", "Personal Branding"]
    },
    {
      id: 2,
      title: "Casual Portrait",
      category: "personal", 
      image: "/MySelf 4k .jpg",
      description: "Casual portrait showcasing personality",
      tags: ["Portrait", "Casual", "Personal"]
    },
    {
      id: 3,
      title: "High Resolution Portrait 1",
      category: "personal",
      image: "/My self 1080p (1).jpg",
      description: "High quality professional portrait",
      tags: ["Portrait", "High-Res", "Professional"]
    },
    {
      id: 4,
      title: "High Resolution Portrait 2", 
      category: "personal",
      image: "/My Self 1080p (3).jpg",
      description: "Another high quality professional portrait",
      tags: ["Portrait", "High-Res", "Professional"]
    },
    {
      id: 5,
      title: "Travel Photo - Udupi",
      category: "personal",
      image: "/Udupi-Mithun-1.jpg",
      description: "Travel photo from Udupi visit",
      tags: ["Travel", "Personal", "Udupi", "Outdoor"]
    },

       {
      id: 5,
      title: "Travel Photo - Udupi",
      category: "personal",
      image: "/Myself 4k2.jpg",
      description: "Travel photo from Udupi visit",
      tags: ["Travel", "Personal", "Udupi", "Outdoor"]
    },

    // Project Work
    {
      id: 6,
      title: "AES THE TIC Project",
      category: "web-projects",
      image: "/Aes THE TIC.png",
      description: "Technical project showcasing AES encryption implementation",
      tags: ["Cryptography", "AES", "Security", "Technical"]
    },
    {
      id: 7,
      title: "Affe Website - About Page",
      category: "web-projects",
      image: "/affe-website-About page-app.png",
      description: "About page design for Affe website project",
      tags: ["Web Design", "About Page", "UI/UX", "Website"]
    },
    {
      id: 8,
      title: "Affe Website - Gallery Page",
      category: "web-projects", 
      image: "/affe-website-Gallerypage-app.png",
      description: "Gallery page layout for Affe website project",
      tags: ["Web Design", "Gallery", "UI/UX", "Website"]
    },
    {
      id: 9,
      title: "Affe Website - Home Page",
      category: "web-projects",
      image: "/affe-website-Home page-app.png", 
      description: "Home page design for Affe website project",
      tags: ["Web Design", "Home Page", "UI/UX", "Website"]
    },

    // Design Work
    {
      id: 10,
      title: "Workshop Flyer Design",
      category: "design",
      image: "/Flyer Workshop.jpg",
      description: "Professional flyer design for technical workshop event",
      tags: ["Flyer Design", "Workshop", "Event", "Graphics"]
    },

    // Documents
    {
      id: 11,
      title: "Professional Resume",
      category: "documents",
      image: "/Mithun Jain CV-2.pdf",
      description: "Professional resume showcasing skills and experience",
      tags: ["Resume", "CV", "Professional", "PDF"],
      isDocument: true
    }
  ];

  const categories = [
    { key: 'all', label: 'All Work', icon: 'fas fa-th' },
    { key: 'personal', label: 'Personal Photos', icon: 'fas fa-user' },
    { key: 'web-projects', label: 'Web Projects', icon: 'fas fa-laptop-code' },
    { key: 'design', label: 'Design Work', icon: 'fas fa-paint-brush' },
    { key: 'documents', label: 'Documents', icon: 'fas fa-file-alt' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (item) => {
    setSelectedImage(item);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex + 1 >= filteredItems.length ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex - 1 < 0 ? filteredItems.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredItems[newIndex]);
  };

  // Handle image loading errors
  const handleImageError = (e) => {
    const category = e.target.dataset.category;
    const fallbackEmoji = category === 'personal' ? '👤' : 
                         category === 'web-projects' ? '💻' : 
                         category === 'design' ? '🎨' : 
                         category === 'documents' ? '📄' : '🖼️';
    
    e.target.style.display = 'none';
    e.target.parentElement.innerHTML = `<span class="gallery-emoji">${fallbackEmoji}</span>`;
  };

  const handleDocumentClick = (item) => {
    if (item.isDocument) {
      // Open PDF in new tab
      window.open(item.image, '_blank');
    } else {
      openLightbox(item);
    }
  };

  return (
    <div className="gallery-container">
      {/* Header Section */}
      <section className="gallery-header">
        <div className="header-content">
          <h1>My Gallery</h1>
          <p>A visual showcase of my personal photos, creative projects, and professional work</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="gallery-stats">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-images"></i>
            </div>
            <h3>11+</h3>
            <p>Gallery Items</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>4+</h3>
            <p>Web Projects</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-user"></i>
            </div>
            <h3>5+</h3>
            <p>Personal Photos</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <h3>8.1</h3>
            <p>CGPA</p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="filter-container">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-btn ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
            >
              <i className={category.icon}></i>
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`gallery-item ${item.isDocument ? 'document-item' : ''}`}
              onClick={() => handleDocumentClick(item)}
              style={{ '--animation-delay': `${index * 0.1}s` }}
            >
              <div className="gallery-image">
                <div className="image-placeholder">
                  {item.isDocument ? (
                    <div className="document-preview">
                      <i className="fas fa-file-pdf"></i>
                      <span>PDF Document</span>
                    </div>
                  ) : (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      data-category={item.category}
                      onError={handleImageError}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="gallery-tags">
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="gallery-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="overlay-actions">
                    <button className="action-btn" title={item.isDocument ? "Open Document" : "View Details"}>
                      <i className={item.isDocument ? "fas fa-external-link-alt" : "fas fa-search-plus"}></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && selectedImage && !selectedImage.isDocument && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="lightbox-content">
              <div className="lightbox-image">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  onError={(e) => {
                    const fallbackEmoji = selectedImage.category === 'personal' ? '👤' : 
                                        selectedImage.category === 'web-projects' ? '💻' : 
                                        selectedImage.category === 'design' ? '🎨' : '📊';
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="large-gallery-emoji">${fallbackEmoji}</span>`;
                  }}
                />
              </div>
              
              <div className="lightbox-info">
                <h2>{selectedImage.title}</h2>
                <p className="lightbox-category">{selectedImage.category.replace('-', ' ')}</p>
                <p className="lightbox-description">{selectedImage.description}</p>
                
                <div className="lightbox-tags">
                  {selectedImage.tags.map((tag, index) => (
                    <span key={index} className="lightbox-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="lightbox-actions">
                  <button className="btn btn-primary">
                    <i className="fas fa-external-link-alt"></i>
                    View Full Size
                  </button>
                  <button className="btn btn-outline">
                    <i className="fas fa-download"></i>
                    Download
                  </button>
                </div>
              </div>
            </div>
            
            <button className="lightbox-nav prev" onClick={() => navigateImage('prev')}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="lightbox-nav next" onClick={() => navigateImage('next')}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      )}

      {/* Skills Showcase */}
      <section className="skills-showcase">
        <div className="section-header">
          <h2>My Creative & Technical Journey</h2>
          <p>From personal moments to professional projects - here's what I create</p>
        </div>
        
        <div className="skills-grid">
          <div className="skill-category">
            <div className="skill-icon">
              <i className="fas fa-user"></i>
            </div>
            <h3>Personal Branding</h3>
            <ul>
              <li>Professional Photography</li>
              <li>Personal Portfolio</li>
              <li>Social Media Presence</li>
              <li>Brand Identity</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <div className="skill-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Web Development</h3>
            <ul>
              <li>React.js Applications</li>
              <li>Responsive Design</li>
              <li>UI/UX Implementation</li>
              <li>Portfolio Websites</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <div className="skill-icon">
              <i className="fas fa-palette"></i>
            </div>
            <h3>Design & Graphics</h3>
            <ul>
              <li>Flyer Design</li>
              <li>Event Graphics</li>
              <li>Workshop Materials</li>
              <li>Digital Art</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <div className="skill-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <h3>Technical Projects</h3>
            <ul>
              <li>Cryptography (AES)</li>
              <li>Data Analysis</li>
              <li>Security Projects</li>
              <li>Technical Documentation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Let's Create Something Amazing Together!</h2>
          <p>Interested in collaborating on a project? I'm passionate about combining creativity with technical expertise to bring ideas to life.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-envelope"></i>
              Start a Project
            </a>
            <a href="#resume" className="btn btn-outline">
              <i className="fas fa-download"></i>
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
