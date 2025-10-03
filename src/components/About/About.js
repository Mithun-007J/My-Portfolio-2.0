import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const personalDetails = [
    { icon: 'fas fa-birthday-cake', label: 'Birthday', value: '28 Dec 2007' },
    { icon: 'fas fa-phone', label: 'Phone', value: '+91 6366636405' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Dharmasthala, India' },
    { icon: 'fas fa-envelope', label: 'Email', value: 'mithunjain755@gmail.com' },
    { icon: 'fas fa-user', label: 'Age', value: '18' },
    { icon: 'fas fa-graduation-cap', label: 'Degree', value: 'Diploma, CS' },
    { icon: 'fas fa-briefcase', label: 'Experience', value: '1+ Years' },
    { icon: 'fas fa-check-circle', label: 'Freelance', value: 'Available' }
  ];

  const skills = [
    { name: 'Python', percentage: 75, category: 'Programming' },
    { name: 'Java', percentage: 65, category: 'Programming' },
    { name: 'React.js', percentage: 80, category: 'Web Development' },
    { name: 'HTML/CSS', percentage: 90, category: 'Web Development' },
    { name: 'JavaScript', percentage: 75, category: 'Programming' },
    { name: 'MySQL', percentage: 80, category: 'Database' },
    { name: 'Excel', percentage: 90, category: 'Analytics' },
    { name: 'Data Analysis', percentage: 85, category: 'Analytics' },
    { name: 'Graphic Design', percentage: 90, category: 'Design' },
    { name: 'Adobe Photoshop', percentage: 75, category: 'Design' },
    { name: 'Video Editing', percentage: 90, category: 'Media' },
    { name: 'Canva', percentage: 90, category: 'Design' },
    { name: 'Git', percentage: 70, category: 'Tools' }
  ];

  const languages = [
    { name: 'English', level: 'Fluent', percentage: 90 },
    { name: 'Hindi', level: 'Native', percentage: 100 },
    { name: 'Kannada', level: 'Native', percentage: 100 },
    { name: 'Tulu', level: 'Native', percentage: 95 }
  ];

  const interests = [
    { icon: 'fas fa-chart-line', name: 'Stock Market Analysis', color: '#2ecc71' },
    { icon: 'fas fa-globe', name: 'Geopolitics', color: '#3498db' },
    { icon: 'fas fa-bullhorn', name: 'Digital Marketing', color: '#e74c3c' },
    { icon: 'fas fa-video', name: 'Video Editing', color: '#9b59b6' },
    { icon: 'fas fa-coins', name: 'Investment Planning', color: '#f39c12' },
    { icon: 'fas fa-palette', name: 'Graphic Design', color: '#e67e22' },
    { icon: 'fas fa-code', name: 'Web Development', color: '#1abc9c' },
    { icon: 'fas fa-camera', name: 'Photography', color: '#34495e' }
  ];

  const funFacts = [
    "I can analyze stock market trends while designing graphics!",
    "I speak 4 languages fluently including Tulu - a coastal language of Karnataka",
    "I can create stunning visuals and websites in under 2 hours",
    "I'm passionate about combining data science with creative design",
    "I have hands-on experience in Data Center operations at SKDRDP",
    "I love exploring the intersection of technology and finance"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [funFacts.length]);

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Mithun Jain</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer & Creative Designer</h2>
            <p className="hero-description">
              Hi, I'm Mithun Jain — a passionate and creative technology enthusiast currently pursuing my Diploma in Computer Science at SDM Polytechnic, Ujire. I specialize in web development, data analysis, and graphic design, combining technical skills with creative vision.
              <br /><br />
              I have hands-on professional experience at SKDRDP (Shri Kshetra Dharmasthala Rural Development Project) working in their Data Center, handling Aadhaar entries, account management, and BC transactions. This experience has sharpened my attention to detail, time management, and professional work ethics.
              <br /><br />
              As a freelance graphic designer, I create compelling visual content for brands and individuals. I'm also passionate about finance, stock market analysis, and investment planning. My goal is to bridge the gap between technology, creativity, and business innovation.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <i className="fas fa-envelope"></i>
                Get In Touch
              </a>
              <a href="Mithun_Jain_CV2-2 clg.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <i className="fas fa-download"></i>
                Download CV
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <div className="profile-image">
                <div className="image-placeholder">
                  <img 
                    src="/Myself 4k2.jpg" 
                    alt="Mithun Jain Profile" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="fallback-avatar">MJ</div>';
                    }}
                  />
                </div>
                <div className="floating-elements">
                  <div className="floating-icon" style={{'--delay': '0s'}}>📊</div>
                  <div className="floating-icon" style={{'--delay': '1s'}}>🎨</div>
                  <div className="floating-icon" style={{'--delay': '2s'}}>💻</div>
                  <div className="floating-icon" style={{'--delay': '3s'}}>📈</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Details Section */}
      <section className="details-section">
        <div className="section-header">
          <h2>Personal Details</h2>
          <p>Get to know me better through these personal details</p>
        </div>
        <div className="details-grid">
          {personalDetails.map((detail, index) => (
            <div key={index} className="detail-card">
              <div className="detail-icon">
                <i className={detail.icon}></i>
              </div>
              <div className="detail-content">
                <h4>{detail.label}</h4>
                <p>{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="section-header">
          <h2>Technical Skills</h2>
          <p>My technical expertise across different domains</p>
        </div>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <h4>{skill.name}</h4>
                <span className="skill-category">{skill.category}</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section className="languages-section">
        <div className="section-header">
          <h2>Languages</h2>
          <p>Languages I can communicate in</p>
        </div>
        <div className="languages-grid">
          {languages.map((lang, index) => (
            <div key={index} className="language-card">
              <h4>{lang.name}</h4>
              <p className="language-level">{lang.level}</p>
              <div className="language-progress">
                <div 
                  className="progress-fill" 
                  style={{ width: `${lang.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section className="interests-section">
        <div className="section-header">
          <h2>Interests & Hobbies</h2>
          <p>Things I'm passionate about outside of work</p>
        </div>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div key={index} className="interest-card">
              <div 
                className="interest-icon" 
                style={{ backgroundColor: interest.color }}
              >
                <i className={interest.icon}></i>
              </div>
              <h4>{interest.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="fun-facts-section">
        <div className="section-header">
          <h2>Fun Facts About Me</h2>
        </div>
        <div className="fun-fact-container">
          <div className="fun-fact-card">
            <div className="fact-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <p className="fun-fact-text">
              {funFacts[currentFactIndex]}
            </p>
            <div className="fact-dots">
              {funFacts.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentFactIndex ? 'active' : ''}`}
                  onClick={() => setCurrentFactIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="section-header">
          <h2>My Achievements</h2>
          <p>Some numbers that define my journey</p>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3>8.1</h3>
            <p>Current CGPA</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3>5+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>3+</h3>
            <p>Projects Developing</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>50+</h3>
            <p>Hours of Coding</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Work Together?</h2>
          <p>Let's discuss how I can help bring your ideas to life through technology and creative design.</p>
          <div className="cta-buttons">
            <a href="#portfolio" className="btn btn-primary">
              <i className="fas fa-briefcase"></i>
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="fas fa-comments"></i>
              Let's Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
