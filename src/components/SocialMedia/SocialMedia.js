import React, { useState } from 'react';
import './SocialMedia.css';

const SocialMedia = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const socialPlatforms = [
    {
      name: 'LinkedIn',
      handle: '@mithunjain755',
      url: 'https://linkedin.com/in/mithunjain755',
      icon: 'fab fa-linkedin',
      color: '#0077B5',
      followers: '500+',
      description: 'Professional networking, career updates, and industry insights',
      content: 'Professional posts about data analysis, career journey, and industry trends',
      postFrequency: 'Weekly',
      engagement: 'High',
      purpose: 'Professional networking and thought leadership'
    },
    {
      name: 'GitHub',
      handle: '@mithunjain755',
      url: 'https://github.com/Mithun-007J',
      icon: 'fab fa-github',
      color: '#333333',
      followers: '50+',
      description: 'Code repositories, open-source contributions, and project showcases',
      content: 'Data analysis projects, Python scripts, and portfolio websites',
      postFrequency: 'Regular commits',
      engagement: 'Medium',
      purpose: 'Showcase technical skills and collaborate on projects'
    },
    {
      name: 'Instagram',
      handle: '@mithunjain755',
      url: 'https://www.instagram.com/_.mithun._.jain._/?__pwa=1',
      icon: 'fab fa-instagram',
      color: '#E4405F',
      followers: '1K+',
      description: 'Visual portfolio, behind-the-scenes content, and creative work',
      content: 'Design work, workspace setup, travel, and lifestyle content',
      postFrequency: '2-3 times/week',
      engagement: 'High',
      purpose: 'Visual storytelling and personal branding'
    },
    {
      name: 'Twitter',
      handle: '@mithunjain755',
      url: 'https://twitter.com/mithunjain755',
      icon: 'fab fa-twitter',
      color: '#1DA1F2',
      followers: '300+',
      description: 'Quick updates, tech discussions, and industry news sharing',
      content: 'Tech insights, stock market observations, and quick thoughts',
      postFrequency: 'Daily',
      engagement: 'Medium',
      purpose: 'Real-time engagement and thought sharing'
    },
    {
      name: 'Facebook',
      handle: 'mithunjain755',
      url: 'https://facebook.com/mithunjain755',
      icon: 'fab fa-facebook',
      color: '#1877F2',
      followers: '2K+',
      description: 'Community engagement, local networking, and event updates',
      content: 'Project updates, community involvement, and educational content',
      postFrequency: 'Weekly',
      engagement: 'Medium',
      purpose: 'Community building and local networking'
    },
    {
      name: 'YouTube',
      handle: '@MithunJainTech',
      url: 'https://www.youtube.com/@mithunjain1023',
      icon: 'fab fa-youtube',
      color: '#FF0000',
      followers: '200+',
      description: 'Educational content about data analysis and design tutorials',
      content: 'Excel tutorials, data visualization guides, and design tips',
      postFrequency: 'Bi-weekly',
      engagement: 'Growing',
      purpose: 'Educational content creation and knowledge sharing'
    }
  ];

  const contentStrategy = {
    'Professional Content': [
      'Data analysis tutorials and tips',
      'Industry insights and trends',
      'Career development advice',
      'Project case studies and results',
      'Tool reviews and recommendations'
    ],
    'Creative Content': [
      'Design process behind-the-scenes',
      'Before and after project showcases',
      'Color theory and design principles',
      'Creative challenges and solutions',
      'Inspiration and mood boards'
    ],
    'Educational Content': [
      'Excel tips and tricks',
      'Python basics for beginners',
      'Data visualization best practices',
      'Business intelligence insights',
      'Freelancing advice and tips'
    ],
    'Personal Content': [
      'Workspace and setup tours',
      'Daily routine and productivity tips',
      'Local culture and travel',
      'Books and learning resources',
      'Goals and achievements'
    ]
  };

  const achievements = [
    {
      platform: 'LinkedIn',
      achievement: 'Top Voice in Data Analysis',
      description: 'Recognized for consistent quality content about data analysis',
      date: '2024'
    },
    {
      platform: 'Instagram',
      description: 'Design posts regularly reach over 10,000 accounts',
      date: '2025'
    },
    {
      platform: 'GitHub',
      achievement: '5+ Starred Projects',
      description: 'Multiple repositories with community appreciation',
      date: '2025'
    },
    {
      platform: 'YouTube',
      description: 'Educational content helping students and professionals',
      date: '2024'
    }
  ];

  const collaborations = [
    {
      type: 'Content Creation',
      partners: ['Tech bloggers', 'Educational channels', 'Design communities'],
      description: 'Collaborative content creation and cross-promotion'
    },
    {
      type: 'Knowledge Sharing',
      partners: ['Student communities', 'Professional groups', 'Local organizations'],
      description: 'Workshops, webinars, and educational sessions'
    },
    {
      type: 'Project Collaborations',
      partners: ['Fellow designers', 'Data analysts', 'Marketing professionals'],
      description: 'Joint projects and skill sharing initiatives'
    }
  ];

  const TabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <div className="social-overview">
              <div className="platforms-grid">
                {socialPlatforms.map((platform, index) => (
                  <div key={index} className="platform-card">
                    <div className="platform-header">
                      <div 
                        className="platform-icon" 
                        style={{ backgroundColor: platform.color }}
                      >
                        <i className={platform.icon}></i>
                      </div>
                      <div className="platform-info">
                        <h3>{platform.name}</h3>
                        <p className="platform-handle">{platform.handle}</p>
                        <p className="platform-followers">{platform.followers} followers</p>
                      </div>
                    </div>
                    <p className="platform-description">{platform.description}</p>
                    <div className="platform-stats">
                      <div className="stat">
                        <span className="stat-label">Content:</span>
                        <span className="stat-value">{platform.content}</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Frequency:</span>
                        <span className="stat-value">{platform.postFrequency}</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Engagement:</span>
                        <span className={`stat-value engagement-${platform.engagement.toLowerCase()}`}>
                          {platform.engagement}
                        </span>
                      </div>
                    </div>
                    <a 
                      href={platform.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="platform-link"
                      style={{ backgroundColor: platform.color }}
                    >
                      <span>Follow me on {platform.name}</span>
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'content':
        return (
          <div className="tab-content">
            <div className="content-strategy">
              <h3>📝 Content Strategy</h3>
              <p>I create diverse content across different platforms to engage with various audiences:</p>
              
              <div className="strategy-grid">
                {Object.entries(contentStrategy).map(([category, items]) => (
                  <div key={category} className="strategy-card">
                    <h4>{category}</h4>
                    <ul>
                      {items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="content-calendar">
                <h4>📅 Weekly Content Calendar</h4>
                <div className="calendar-grid">
                  <div className="day-card">
                    <h5>Monday</h5>
                    <p>Motivation Monday - Career tips and industry insights</p>
                  </div>
                  <div className="day-card">
                    <h5>Wednesday</h5>
                    <p>Tech Wednesday - Tutorial and educational content</p>
                  </div>
                  <div className="day-card">
                    <h5>Friday</h5>
                    <p>Feature Friday - Project showcases and case studies</p>
                  </div>
                  <div className="day-card">
                    <h5>Weekend</h5>
                    <p>Behind-the-scenes and personal content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="tab-content">
            <div className="social-achievements">
              <h3>🏆 Social Media Achievements</h3>
              <p>Recognition and milestones achieved across different platforms:</p>
              
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-icon">
                      <i className="fas fa-trophy"></i>
                    </div>
                    <div className="achievement-content">
                      <h4>{achievement.achievement}</h4>
                      <p className="achievement-platform">{achievement.platform}</p>
                      <p className="achievement-description">{achievement.description}</p>
                      <span className="achievement-date">{achievement.date}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="growth-stats">
                <h4>📈 Growth Statistics</h4>
                <div className="stats-grid">
                  <div className="stat-card">
                    <h3>600+</h3>
                    <p>Total Followers</p>
                  </div>
                  <div className="stat-card">
                    <h3>1k+</h3>
                    <p>Monthly Impressions</p>
                  </div>
                  <div className="stat-card">
                    <h3>15%</h3>
                    <p>Engagement Rate</p>
                  </div>
                  <div className="stat-card">
                    <h3>5+</h3>
                    <p>Posts per Month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'collaborations':
        return (
          <div className="tab-content">
            <div className="collaborations">
              <h3>🤝 Collaborations & Partnerships</h3>
              <p>I actively collaborate with others to create valuable content and share knowledge:</p>
              
              <div className="collaborations-grid">
                {collaborations.map((collab, index) => (
                  <div key={index} className="collaboration-card">
                    <h4>{collab.type}</h4>
                    <div className="partners-list">
                      <strong>Partners:</strong>
                      <ul>
                        {collab.partners.map((partner, partnerIndex) => (
                          <li key={partnerIndex}>{partner}</li>
                        ))}
                      </ul>
                    </div>
                    <p>{collab.description}</p>
                  </div>
                ))}
              </div>

              <div className="collaboration-benefits">
                <h4>🌟 Benefits of Collaboration</h4>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <i className="fas fa-users"></i>
                    <h5>Community Building</h5>
                    <p>Building stronger professional networks</p>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-lightbulb"></i>
                    <h5>Knowledge Exchange</h5>
                    <p>Sharing and learning new skills</p>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-rocket"></i>
                    <h5>Reach Expansion</h5>
                    <p>Reaching wider audiences together</p>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-handshake"></i>
                    <h5>Mutual Growth</h5>
                    <p>Supporting each other's success</p>
                  </div>
                </div>
              </div>

              <div className="collaboration-cta">
                <h4>Want to Collaborate?</h4>
                <p>I'm always open to meaningful collaborations that add value to both our audiences.</p>
                <a href="#contact" className="btn btn-primary">
                  <i className="fas fa-envelope"></i>
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="social-media-container">
      {/* Header Section */}
      <section className="social-header">
        <div className="header-content">
          <h1>Social Media Presence</h1>
          <p>Connect with me across various platforms and stay updated with my work</p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links">
        <div className="links-container">
          {socialPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-link"
              style={{ '--platform-color': platform.color }}
            >
              <i className={platform.icon}></i>
              <span>{platform.name}</span>
              <small>{platform.followers}</small>
            </a>
          ))}
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="social-navigation">
        <div className="nav-tabs">
          {[
            { key: 'overview', label: 'Platform Overview', icon: 'fas fa-th' },
            { key: 'content', label: 'Content Strategy', icon: 'fas fa-calendar-alt' },
            { key: 'achievements', label: 'Achievements', icon: 'fas fa-trophy' },
            { key: 'collaborations', label: 'Collaborations', icon: 'fas fa-handshake' }
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
      <section className="social-content">
        <div className="content-wrapper">
          <TabContent />
        </div>
      </section>

      {/* Call to Action */}
      <section className="social-cta">
        <div className="cta-content">
          <h2>Let's Connect!</h2>
          <p>Follow me on your favorite platform and let's build something amazing together.</p>
          <div className="cta-social-links">
            {socialPlatforms.slice(0, 4).map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-social-link"
                style={{ backgroundColor: platform.color }}
              >
                <i className={platform.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;