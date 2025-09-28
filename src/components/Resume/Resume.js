import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const education = [
    {
      degree: 'Diploma in Computer Science & Engineering',
      period: '2023 - 2026',
      institution: 'SDM Polytechnic, Ujire',
      cgpa: '8.88/10',
      status: 'Currently in 3rd Year',
      description: 'Specialized in Data Structures, Database Management and Software Engineering principles.'
    },
    {
      degree: 'SSLC (Secondary School Leaving Certificate)',
      period: '2022',
      institution: 'SDM English Medium School, Dharmasthala',
      cgpa: 'First Class',
      status: 'Completed',
      description: 'Strong foundation in Software tools & AI tools and computer applications.'
    }
  ];

  const experience = [
    {
      position: 'Freelance Data Analyst & Graphic Designer',
      period: '2025 - Present',
      company: 'Various Clients',
      location: 'Remote & Dharmasthala',
      responsibilities: [
        'Carried out Aadhaar entry, account entry, and BC transaction entry in SKDRDP Data Center, ensuring accuracy and timely completion of daily records',
        'Built and hosted a Coffee Brue website using modern AI-powered tools for frontend development',
        'Designed and developed my own personal portfolio website, showcasing skills in web development and design',
        'Worked as a freelance graphic designer, creating posters, banners, and promotional materials for branding and marketing campaigns',
        'Applied creativity and technical skills to deliver professional and impactful digital solutions'
      ],
      achievements: [
        'Successfully completed real-world data entry and transaction tasks at SKDRDP Data Center with 100% accuracy and consistency handelled data upto 1,500 per-day',
        'Built and hosted a Coffee Brue website using AI-powered tools, showcasing innovation in web development',
        'Designed and launched a personal portfolio website to present projects, skills, and professional journey',
      ]
    },
    {
      position: 'Student',
      period: 'Summer 2025',
      company: 'Null',
      location: 'Mangalore',
      responsibilities: [
        'Did Data Entry and Hanglede data upto 1,500 data per-day',
        'Assisted in research and competitor analysis',
        'Learned advanced Excel functions'
      ],
      achievements: [
        'Handled and verified up to 1,500 data entries per day during Aadhaar, account, and BC transaction entry',        
      ]
    }
  ];

  const skills = [
    {
      category: 'Programming & Analytics',
      items: [
        { name: 'Python', level: 75, description: 'Data analysis, basic web development' },
        { name: 'Java', level: 65, description: 'Object-oriented programming, basic applications' },
        { name: 'Excel', level: 90, description: 'Advanced formulas, pivot tables, data visualization' },
        { name: 'MySQL', level: 80, description: 'Database design, queries, data management' },
        { name: 'Full Stack Developmenmt', level: 85, description: 'Front-End,Bank-End' }
      ]
    },
    {
      category: 'Design & Media',
      items: [
        { name: 'Adobe Photoshop', level: 75, description: 'Photo editing, graphic design, digital art' },
        { name: 'Canva', level: 90, description: 'Quick designs, social media graphics, presentations' },
        { name: 'Video Editing', level: 70, description: 'Capcut video editing, transitions, effects' },
        { name: 'Graphic Design', level: 88, description: 'Logo design, branding, marketing materials' },
        { name: 'Design', level: 65, description: 'User interface design, wireframing, prototyping' }
      ]
    },
    {
      category: 'Tools & Technologies',
      items: [
        { name: 'Git/GitHub', level: 70, description: 'Version control, collaboration, project management' },
        { name: 'VS Code', level: 80, description: 'Code editing, debugging, extensions' },
        { name: 'Canva', level: 80, description: 'Designing of Logo and tampletes' },
        { name: 'Excel', level: 70, description: 'Data Handaling' },
        { name: 'Capcut', level: 95, description: 'Video Editing, Shorts Making' }
      ]
    }
  ];

  const achievements = [
  {
    title: 'Data Center Efficiency',
    description: 'Handled and verified up to 1,500 Aadhaar, account, and BC transaction entries per day at SKDRDP Data Center with accuracy and consistency',
    year: '2023-2024',
    icon: 'fas fa-database'
  },
  {
    title: 'Web Development Project',
    description: 'Built and hosted Coffee Brue website using AI-powered tools for frontend development',
    year: '2024',
    icon: 'fas fa-code'
  },
  {
    title: 'Portfolio Development',
    description: 'Designed and developed a personal portfolio website to showcase skills and projects',
    year: '2024',
    icon: 'fas fa-laptop-code'
  },
  {
    title: 'Freelance Graphic Design',
    description: 'Created promotional posters, banners, and marketing designs for clients and branding',
    year: '2023-2024',
    icon: 'fas fa-paint-brush'
  }
];


  const languages = [
    { name: 'English', level: 'Fluent', percentage: 90 },
    { name: 'Hindi', level: 'Native', percentage: 100 },
    { name: 'Kannada', level: 'Native', percentage: 100 },
    { name: 'Tulu', level: 'Native', percentage: 95 }
  ];

  const interests = [
    'Stock Market Analysis & Investment Strategies',
    'Geopolitics and Global Affairs',
    'Digital Marketing & Social Media Trends',
    'Data Science & Machine Learning',
    'Creative Design & Visual Arts',
    'Technology Innovation & Startups',
    'Photography & Visual Storytelling',
    'Financial Planning & Wealth Management'
  ];

  const downloadResume = () => {
    // Create a temporary link to download the PDF
    const link = document.createElement('a');
    link.href = '/Mithun-Jain-CV-2.pdf'; // Reference to the uploaded PDF
    link.download = 'Mithun-Jain-CV-2.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const TabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <div className="overview-section">
              <div className="profile-summary">
                <h3>Professional Summary</h3>
                <p>
                  I’m Mithun Jain, a highly motivated and passionate learner blending creativity with technology. Currently pursuing my Diploma in Computer Science, I’ve gained hands-on experience in both technical projects and real-world professional work. From handling and verifying up to 1,500+ data entries per day at SKDRDP Data Center, to building and hosting the Coffee Brue website using AI tools, and designing my personal portfolio website, I strive to deliver work with precision, creativity, and impact.

                  Alongside academics, I’ve worked as a freelance graphic designer, creating professional marketing and branding materials that drive engagement. With a growing interest in finance, trading, and entrepreneurship, I aim to keep challenging myself, learning continuously, and building solutions that merge technology, business, and creativity for real-world impact.
                </p>
              </div>
              
              <div className="key-strengths">
                <h3>Key Strengths</h3>
                <div className="strengths-grid">
                  <div className="strength-item">
                    <i className="fas fa-chart-line"></i>
                    <h4>Data Management</h4>
                    <p>Experience in handling and verifying up to 1,500+ Aadhaar, account, and BC transaction entries per day with accuracy</p>
                  </div>
                  <div className="strength-item">
                    <i className="fas fa-palette"></i>
                    <h4>Web Development</h4>
                    <p>Built and hosted projects like the Coffee Brue website and a personal portfolio using modern AI-powered tools</p>
                  </div>
                  <div className="strength-item">
                    <i className="fas fa-bullhorn"></i>
                    <h4>Creative Design</h4>
                    <p>Skilled in designing posters, banners, and marketing materials for branding and promotions</p>
                  </div>
                  <div className="strength-item">
                    <i className="fas fa-users"></i>
                    <h4>Financial & Investing</h4>
                    <p>Practical understanding of stock markets, swing trading, and investments with focus on long-term wealth growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'experience':
        return (
          <div className="tab-content">
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="period-badge">{exp.period}</div>
                    <h4>{exp.position}</h4>
                    <p className="company">{exp.company} • {exp.location}</p>
                    
                    <div className="responsibilities">
                      <h5>Key Responsibilities:</h5>
                      <ul>
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {exp.achievements && (
                      <div className="achievements-list">
                        <h5>Key Achievements:</h5>
                        <ul>
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'education':
        return (
          <div className="tab-content">
            <div className="education-timeline">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className="education-content">
                    <div className="period-badge">{edu.period}</div>
                    <h4>{edu.degree}</h4>
                    <p className="institution">{edu.institution}</p>
                    <p className="cgpa">CGPA/Grade: {edu.cgpa} • {edu.status}</p>
                    <p className="description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'skills':
        return (
          <div className="tab-content">
            <div className="skills-section">
              {skills.map((skillGroup, groupIndex) => (
                <div key={groupIndex} className="skill-group">
                  <h3>{skillGroup.category}</h3>
                  <div className="skills-list">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="skill-header">
                          <h4>{skill.name}</h4>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <p className="skill-description">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="resume-container">
      {/* Header Section */}
      <section className="resume-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Resume</h1>
            <p>Detailed overview of my education, experience, and skills</p>
            <div className="header-actions">
              <button className="btn btn-primary" onClick={downloadResume}>
                <i className="fas fa-download"></i>
                Download Resume
              </button>
              <button className="btn btn-outline">
                <i className="fas fa-print"></i>
                Print Resume
              </button>
            </div>
          </div>
          <div className="header-stats">
            <div className="stat-item">
              <h3>1+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>3+</h3>
              <p>Fron-End Websites</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="resume-navigation">
        <div className="nav-tabs">
          {[
            { key: 'overview', label: 'Overview', icon: 'fas fa-user' },
            { key: 'experience', label: 'Experience', icon: 'fas fa-briefcase' },
            { key: 'education', label: 'Education', icon: 'fas fa-graduation-cap' },
            { key: 'skills', label: 'Skills', icon: 'fas fa-cogs' }
          ].map((tab) => (
            <button
              key={tab.key}
              className={`nav-tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <i className={tab.icon}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Tab Content */}
      <section className="resume-content">
        <div className="content-wrapper">
          <TabContent />
        </div>
      </section>

      {/* Additional Sections */}
      <section className="additional-sections">
        <div className="additional-grid">
          {/* Languages */}
          <div className="additional-section">
            <h3>Languages</h3>
            <div className="languages-list">
              {languages.map((lang, index) => (
                <div key={index} className="language-item">
                  <div className="language-header">
                    <h4>{lang.name}</h4>
                    <span className="language-level">{lang.level}</span>
                  </div>
                  <div className="language-progress">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="additional-section">
            <h3>Achievements</h3>
            <div className="achievements-list">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <div className="achievement-icon">
                    <i className={achievement.icon}></i>
                  </div>
                  <div className="achievement-content">
                    <h4>{achievement.title}</h4>
                    <p>{achievement.description}</p>
                    <span className="achievement-year">{achievement.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="additional-section">
            <h3>Interests & Hobbies</h3>
            <div className="interests-list">
              {interests.map((interest, index) => (
                <div key={index} className="interest-tag">
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Interested in Working Together?</h2>
          <p>I'm always open to discussing new opportunities and interesting projects.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-envelope"></i>
              Contact Me
            </a>
            <a href="#portfolio" className="btn btn-outline">
              <i className="fas fa-briefcase"></i>
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;