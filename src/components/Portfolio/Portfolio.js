import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projects = [
    {
      id: 1,
      title: "Caffe Website",
      category: "web-development",
      image: "/affe-website-Home page-app.png", // Use Home page for main display
      description: "Modern coffee shop website with responsive design, interactive menu, and elegant user interface built with React.js.",
      technologies: ["React.js", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
      githubUrl: "https://github.com/mithunjain755/caffe-website",
      liveUrl: "https://caffe-website-phi.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "Enhanced Portfolio Website",
      category: "web-development", 
      image: "/affe-website-About page-app.png",
      description: "Professional portfolio website showcasing skills, projects, and experience with modern design and smooth animations.",
      technologies: ["React.js", "CSS3", "JavaScript", "Portfolio Design", "Responsive"],
      githubUrl: "https://github.com/mithunjain755/portfolio",
      liveUrl: "https://my-portfolio-one-chi-82.vercel.app/",
      featured: true
    },
    {
      id: 3,
      title: "React Workshop Flyer Design",
      category: "design",
      image: "/Flyer Workshop.jpg",
      description: "Professional workshop flyer design for React.js training program at SDM Polytechnic, featuring modern graphics and clear information hierarchy.",
      technologies: ["Graphic Design", "Adobe Photoshop", "Typography", "Event Marketing"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "ARTIC Brand Design",
      category: "design",
      image: "/Aes THE TIC.png", 
      description: "Complete brand identity design for ARTIC featuring Nike shoe collection with modern typography and professional layout.",
      technologies: ["Brand Design", "Adobe Photoshop", "Typography", "Marketing Design"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      id: 5,
      title: "College Flyer for Workshop",
      category: "technical",
      image: "/Workshop Docker-2.jpg",
      description: "Docker is a platform designed to help developers build, share, and run container applications. We handle the tedious setup, so you can focus on the code..",
      technologies: ["Kubernets", "Docker", "Security", "Technical Implementation"],
      githubUrl: "https://github.com/mithunjain755/aes-encryption",
      liveUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "Website Gallery Page",
      category: "web-development",
      image: "/affe-website-Gallerypage-app.png",
      description: "Interactive gallery page design with filtering capabilities and responsive image grid layout.",
      technologies: ["React.js", "CSS Grid", "JavaScript", "Image Gallery", "Responsive"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      id: 7,
      title: "Scratch Game Crafting", 
      category: "Scratch Game Development",
      image: "/Scratch Game Crafting-2.png",
      description: "Scratch Gmae competion.",
      technologies: ["Game Development", "3D Games", "2D Games", "Game Modeling", "Visualization"],
      githubUrl: "https://github.com/mithunjain755/stock-dashboard",
      liveUrl: "#",
      featured: false
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', icon: 'fas fa-th' },
    { key: 'web-development', label: 'Web Development', icon: 'fas fa-laptop-code' },
    { key: 'design', label: 'Design', icon: 'fas fa-paint-brush' },
    { key: 'technical', label: 'Technical', icon: 'fas fa-cogs' },
    { key: 'data-analysis', label: 'Data Analysis', icon: 'fas fa-chart-bar' }
  ];

  const stats = [
    { icon: 'fas fa-project-diagram', value: '5+', label: 'Completed Projects' },
    { icon: 'fas fa-users', value: '2+', label: 'Projects Developing' },
    { icon: 'fas fa-award', value: '8.1', label: 'Current CGPA' }
  ];

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  // Handle image loading errors
  const handleImageError = (e) => {
    const projectTitle = e.target.alt;
    let fallbackEmoji = '💻';
    
    if (projectTitle.includes('Design') || projectTitle.includes('Flyer') || projectTitle.includes('ARTIC')) {
      fallbackEmoji = '🎨';
    } else if (projectTitle.includes('Data') || projectTitle.includes('Analysis')) {
      fallbackEmoji = '📊';
    } else if (projectTitle.includes('Website') || projectTitle.includes('Portfolio')) {
      fallbackEmoji = '💻';
    } else if (projectTitle.includes('AES') || projectTitle.includes('Technical')) {
      fallbackEmoji = '🔐';
    }
    
    e.target.style.display = 'none';
    e.target.parentElement.innerHTML = `<span class="project-emoji">${fallbackEmoji}</span>`;
  };

  const ProjectCard = ({ project }) => (
    <div className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div className="project-image">
        <div className="image-placeholder">
          {project.image.startsWith('/') ? (
            // Real image file
            <img 
              src={project.image} 
              alt={project.title}
              onError={handleImageError}
              loading="lazy"
            />
          ) : (
            // Emoji fallback
            <span className="project-emoji">{project.image}</span>
          )}
        </div>
        <div className="project-overlay">
          <div className="project-links">
            {project.githubUrl !== '#' && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fab fa-github"></i>
              </a>
            )}
            {project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="fas fa-external-link-alt"></i>
              </a>
            )}
          </div>
        </div>
        {project.featured && <div className="featured-badge">Featured</div>}
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="portfolio-container">
      {/* Header Section */}
      <section className="portfolio-header">
        <div className="header-content">
          <h1>My Portfolio</h1>
          <p>Showcasing my best work in web development, design, and data analysis</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="stat-content">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="filter-container">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.key)}
            >
              <i className={category.icon}></i>
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="tools-section">
        <div className="section-header">
          <h2>Tools & Technologies I Use</h2>
          <p>My arsenal of tools for creating amazing projects</p>
        </div>
        <div className="tools-grid">
          <div className="tool-category">
            <h3>Web Development</h3>
            <div className="tool-list">
              <span className="tool-item">React.js</span>
              <span className="tool-item">HTML5</span>
              <span className="tool-item">CSS3</span>
              <span className="tool-item">JavaScript</span>
              <span className="tool-item">Git</span>
            </div>
          </div>
          <div className="tool-category">
            <h3>Data Analysis</h3>
            <div className="tool-list">
              <span className="tool-item">Python</span>
              <span className="tool-item">Excel</span>
              <span className="tool-item">MySQL</span>
              <span className="tool-item">Power BI</span>
              <span className="tool-item">Tableau</span>
            </div>
          </div>
          <div className="tool-category">
            <h3>Design</h3>
            <div className="tool-list">
              <span className="tool-item">Adobe Photoshop</span>
              <span className="tool-item">Canva</span>
              <span className="tool-item">Figma</span>
              <span className="tool-item">GIMP</span>
            </div>
          </div>
          <div className="tool-category">
            <h3>Programming</h3>
            <div className="tool-list">
              <span className="tool-item">Java</span>
              <span className="tool-item">Python</span>
              <span className="tool-item">C++</span>
              <span className="tool-item">SQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Next Project?</h2>
          <p>Let's collaborate and bring your ideas to life with modern web development and creative design.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-envelope"></i>
              Get In Touch
            </a>
            <a href="/Mithun Jain CV-2.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <i className="fas fa-download"></i>
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
