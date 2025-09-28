import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: '',
    budget: '',
    timeline: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false
  });

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      info: 'mithunjain755@gmail.com',
      description: 'Send me an email anytime!',
      action: 'mailto:mithunjain755@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      info: '+91 6366636405',
      description: 'Call me for urgent queries',
      action: 'tel:+916366636405'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      info: 'Dharmasthala, Karnataka',
      description: 'India - 574216',
      action: '#location'
    },
    {
      icon: 'fas fa-clock',
      title: 'Response Time',
      info: 'Within 24 Hours',
      description: 'I reply to all messages',
      action: null
    }
  ];

  const services = [
    {
      icon: 'fas fa-chart-bar',
      title: 'Front-End Developer',
      description: 'Transform your idea into actionable website',
      features: ['Portfolio', 'Blogs', 'Data Visualization', 'Business websites']
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Graphic Design',
      description: 'Create stunning visuals for your brand',
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Social Media Graphics']
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Digital Marketing',
      description: 'Boost your online presence',
      features: ['Content Strategy', 'Social Media', 'Campaign Design', 'Market Research']
    },
    {
      icon: 'fas fa-video',
      title: 'Video Editing',
      description: 'Professional video content creation',
      features: ['Product Videos', 'Promotional Content', 'Educational Videos', 'Motion Graphics']
    }
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Available for urgent projects' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false });

    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the data to your backend
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        projectType: '',
        budget: '',
        timeline: ''
      });

      setFormStatus({ loading: false, success: true, error: false });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: false });
      }, 5000);
    }, 2000);
  };

  return (
    <div className="contact-container">
      {/* Header Section */}
      <section className="contact-header">
        <div className="header-content">
          <h1>Get In Touch</h1>
          <p>Ready to start your next project? Let's discuss how I can help bring your ideas to life.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="contact-info-grid">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-info-card">
              <div className="info-icon">
                <i className={info.icon}></i>
              </div>
              <div className="info-content">
                <h3>{info.title}</h3>
                <p className="info-main">{info.info}</p>
                <p className="info-description">{info.description}</p>
                {info.action && (
                  <a 
                    href={info.action} 
                    className="info-action"
                    target={info.action.startsWith('http') ? '_blank' : '_self'}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {info.action.startsWith('mailto:') ? 'Send Email' : 
                     info.action.startsWith('tel:') ? 'Call Now' :
                     info.action.startsWith('#') ? 'View Location' : 'Contact'}
                    <i className="fas fa-arrow-right"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-main">
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send Me a Message</h2>
            <p>Fill out the form below and I'll get back to you within 24 hours.</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="projectType">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a service</option>
                    <option value="data-analysis">Data Analysis</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="video-editing">Video Editing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5000">Under ₹5,000</option>
                    <option value="5000-15000">₹5,000 - ₹15,000</option>
                    <option value="15000-30000">₹15,000 - ₹30,000</option>
                    <option value="30000-50000">₹30,000 - ₹50,000</option>
                    <option value="above-50000">Above ₹50,000</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="timeline">Project Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Rush Job)</option>
                    <option value="1-week">Within 1 week</option>
                    <option value="2-4-weeks">2-4 weeks</option>
                    <option value="1-2-months">1-2 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Brief subject of your message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                  rows="6"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={formStatus.loading}
              >
                {formStatus.loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>

              {formStatus.success && (
                <div className="form-message success">
                  <i className="fas fa-check-circle"></i>
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </div>
              )}

              {formStatus.error && (
                <div className="form-message error">
                  <i className="fas fa-exclamation-circle"></i>
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Services & Info */}
          <div className="contact-sidebar">
            {/* Services */}
            <div className="sidebar-section">
              <h3>What I Can Help You With</h3>
              <div className="services-list">
                {services.map((service, index) => (
                  <div key={index} className="service-item">
                    <div className="service-icon">
                      <i className={service.icon}></i>
                    </div>
                    <div className="service-content">
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                      <ul>
                        {service.features.map((feature, featIndex) => (
                          <li key={featIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="sidebar-section">
              <h3>Working Hours</h3>
              <div className="working-hours">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="hours-item">
                    <span className="day">{schedule.day}</span>
                    <span className="hours">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="availability-note">
                <i className="fas fa-info-circle"></i>
                <p>Available for emergency projects on weekends. Response time may vary during holidays.</p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="sidebar-section">
              <h3>Need Quick Help?</h3>
              <div className="quick-contact">
                <a href="https://wa.me/916366636405" target="_blank" rel="noopener noreferrer" className="quick-btn whatsapp">
                  <i className="fab fa-whatsapp"></i>
                  WhatsApp Me
                </a>
                <a href="tel:+916366636405" className="quick-btn call">
                  <i className="fas fa-phone"></i>
                  Call Now
                </a>
                <a href="mailto:mithunjain755@gmail.com" className="quick-btn email">
                  <i className="fas fa-envelope"></i>
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to common questions about working with me</p>
        </div>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>What's your typical response time?</h4>
            <p>I respond to all messages within 24 hours, usually much sooner during business hours.</p>
          </div>
          <div className="faq-item">
            <h4>Do you offer revisions?</h4>
            <p>Yes! I include 2-3 rounds of revisions with every project to ensure you're completely satisfied.</p>
          </div>
          <div className="faq-item">
            <h4>What's your payment structure?</h4>
            <p>I typically request 50% upfront and 50% upon completion. For larger projects, we can discuss milestone-based payments.</p>
          </div>
          <div className="faq-item">
            <h4>Can you work with tight deadlines?</h4>
            <p>Absolutely! I'm experienced with rush projects. Rush jobs may have additional fees depending on the timeline.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;