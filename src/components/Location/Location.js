import React, { useState } from 'react';
import './Location.css';

const Location = () => {
  const [activeView, setActiveView] = useState('overview');

  const locationData = {
    primary: {
      name: "Dharmasthala",
      state: "Karnataka",
      country: "India",
      pincode: "574216",
      coordinates: "12.9435° N, 75.3758° E",
      timezone: "IST (UTC +5:30)",
      elevation: "108 meters above sea level"
    },
    workingAreas: [
      {
        name: "Dharmasthala",
        type: "Primary Location",
        distance: "0 km",
        description: "My home base where I handle most of my work",
        services: ["In-person meetings", "Local project delivery", "On-site consultation"]
      },
      {
        name: "Mangalore",
        type: "Regular Service Area",
        distance: "50 km",
        description: "Frequent visits for client meetings and collaborations",
        services: ["Client meetings", "Project presentations", "Team collaborations"]
      },
      {
        name: "Udupi",
        type: "Service Area",
        distance: "45 km",
        description: "Available for project work and client consultations",
        services: ["Project delivery", "Client consultations", "Training sessions"]
      },
      {
        name: "Bangalore",
        type: "Extended Service Area",
        distance: "280 km",
        description: "Available for special projects and collaborations",
        services: ["Major project work", "Corporate consultations", "Extended engagements"]
      }
    ],
    nearbyPlaces: [
      { name: "SDM Polytechnic, Ujire", distance: "15 km", type: "Educational Institution" },
      { name: "Mangalore International Airport", distance: "55 km", type: "Airport" },
      { name: "Mangalore Central Railway Station", distance: "50 km", type: "Railway" },
      { name: "Kukke Subramanya Temple", distance: "25 km", type: "Tourist Attraction" },
      { name: "Belur", distance: "35 km", type: "Historic Town" },
      { name: "Hassan", distance: "45 km", type: "District Headquarters" }
    ]
  };

  const remoteCapabilities = [
    {
      icon: "fas fa-video",
      title: "Video Conferencing",
      description: "Available for meetings via Zoom, Google Meet, or Teams",
      availability: "24/7 with prior scheduling"
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Collaboration",
      description: "Real-time collaboration using Google Workspace and cloud tools",
      availability: "Immediate response during work hours"
    },
    {
      icon: "fas fa-share-alt",
      title: "File Sharing",
      description: "Secure file sharing via Google Drive, OneDrive, and other platforms",
      availability: "Instant sharing and updates"
    },
    {
      icon: "fas fa-comments",
      title: "Communication",
      description: "Multiple communication channels including email, chat, and calls",
      availability: "Response within 2-4 hours"
    }
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM IST", availability: "High" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM IST", availability: "Medium" },
    { day: "Sunday", hours: "Available for urgent work", availability: "Limited" }
  ];

  const ViewContent = () => {
    switch(activeView) {
      case 'overview':
        return (
          <div className="view-content">
            <div className="location-overview">
              <div className="location-card">
                <div className="location-header">
                  <h3>📍 Primary Location</h3>
                  <div className="location-details">
                    <h2>{locationData.primary.name}</h2>
                    <p>{locationData.primary.state}, {locationData.primary.country}</p>
                    <div className="location-meta">
                      <span>📮 {locationData.primary.pincode}</span>
                      <span>🌍 {locationData.primary.coordinates}</span>
                      <span>🕒 {locationData.primary.timezone}</span>
                    </div>
                  </div>
                </div>
                
                <div className="location-description">
                  <p>
                    Based in the peaceful town of Dharmasthala, Karnataka, I work from a well-equipped 
                    home office that allows me to focus on delivering high-quality work. This location 
                    provides the perfect balance of tranquility and connectivity to major cities.
                  </p>
                </div>

                <div className="location-stats">
                  <div className="stat-item">
                    <h4>280km</h4>
                    <p>From Bangalore</p>
                  </div>
                  <div className="stat-item">
                    <h4>50km</h4>
                    <p>From Mangalore</p>
                  </div>
                  <div className="stat-item">
                    <h4>108m</h4>
                    <p>Above Sea Level</p>
                  </div>
                </div>
              </div>

              <div className="working-hours-card">
                <h3>⏰ Working Hours</h3>
                <div className="hours-list">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="hours-item">
                      <div className="hours-day">{schedule.day}</div>
                      <div className="hours-time">{schedule.hours}</div>
                      <div className={`availability ${schedule.availability.toLowerCase()}`}>
                        {schedule.availability}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="hours-note">
                  <i className="fas fa-info-circle"></i>
                  <p>All times are in Indian Standard Time (IST). Available for emergency projects outside regular hours.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'service-areas':
        return (
          <div className="view-content">
            <div className="service-areas">
              <h3>🗺️ Service Coverage Areas</h3>
              <p>I provide services across multiple locations with varying levels of availability:</p>
              
              <div className="areas-grid">
                {locationData.workingAreas.map((area, index) => (
                  <div key={index} className="area-card">
                    <div className="area-header">
                      <h4>{area.name}</h4>
                      <div className="area-meta">
                        <span className="area-type">{area.type}</span>
                        <span className="area-distance">{area.distance}</span>
                      </div>
                    </div>
                    <p className="area-description">{area.description}</p>
                    <div className="area-services">
                      <h5>Available Services:</h5>
                      <ul>
                        {area.services.map((service, serviceIndex) => (
                          <li key={serviceIndex}>{service}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'remote-work':
        return (
          <div className="view-content">
            <div className="remote-work">
              <h3>💻 Remote Work Capabilities</h3>
              <p>I'm fully equipped to work with clients globally through various digital platforms:</p>
              
              <div className="remote-grid">
                {remoteCapabilities.map((capability, index) => (
                  <div key={index} className="remote-card">
                    <div className="remote-icon">
                      <i className={capability.icon}></i>
                    </div>
                    <div className="remote-content">
                      <h4>{capability.title}</h4>
                      <p>{capability.description}</p>
                      <div className="remote-availability">
                        <span>Availability: {capability.availability}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="remote-benefits">
                <h4>🌟 Benefits of Remote Collaboration</h4>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <i className="fas fa-globe"></i>
                    <h5>Global Reach</h5>
                    <p>Work with clients from anywhere in the world</p>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-clock"></i>
                    <h5>Flexible Hours</h5>
                    <p>Accommodate different time zones and schedules</p>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-dollar-sign"></i>
                    <h5>Cost Effective</h5>
                    <p>No travel costs, competitive pricing</p>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-tachometer-alt"></i>
                    <h5>Quick Turnaround</h5>
                    <p>Faster project delivery without geographic constraints</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'nearby':
        return (
          <div className="view-content">
            <div className="nearby-places">
              <h3>📍 Nearby Important Places</h3>
              <p>Key locations and landmarks around my working area:</p>
              
              <div className="places-grid">
                {locationData.nearbyPlaces.map((place, index) => (
                  <div key={index} className="place-card">
                    <div className="place-info">
                      <h4>{place.name}</h4>
                      <div className="place-meta">
                        <span className="place-distance">{place.distance}</span>
                        <span className="place-type">{place.type}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="transportation">
                <h4>🚗 Transportation & Accessibility</h4>
                <div className="transport-grid">
                  <div className="transport-item">
                    <i className="fas fa-car"></i>
                    <h5>By Road</h5>
                    <p>Well connected by state highways. Easy access from Mangalore, Bangalore, and other major cities.</p>
                  </div>
                  <div className="transport-item">
                    <i className="fas fa-train"></i>
                    <h5>By Train</h5>
                    <p>Nearest railway station: Mangalore Central (50 km). Regular trains from major Indian cities.</p>
                  </div>
                  <div className="transport-item">
                    <i className="fas fa-plane"></i>
                    <h5>By Air</h5>
                    <p>Mangalore International Airport (55 km) with domestic and international connections.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="location-container">
      {/* Header Section */}
      <section className="location-header">
        <div className="header-content">
          <h1>My Location & Availability</h1>
          <p>Based in Karnataka, India - Available globally through remote collaboration</p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="location-navigation">
        <div className="nav-tabs">
          {[
            { key: 'overview', label: 'Overview', icon: 'fas fa-home' },
            { key: 'service-areas', label: 'Service Areas', icon: 'fas fa-map' },
            { key: 'remote-work', label: 'Remote Work', icon: 'fas fa-laptop' },
            { key: 'nearby', label: 'Nearby Places', icon: 'fas fa-map-marker-alt' }
          ].map((tab) => (
            <button
              key={tab.key}
              className={`nav-tab ${activeView === tab.key ? 'active' : ''}`}
              onClick={() => setActiveView(tab.key)}
            >
              <i className={tab.icon}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="location-content">
        <div className="content-wrapper">
          <ViewContent />
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="section-header">
          <h2>📍 Find Me on the Map</h2>
          <p>Dharmasthala is located in the Western Ghats of Karnataka</p>
        </div>
        
        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-content">
              <div className="map-pin">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Dharmasthala, Karnataka</h3>
              <p>12.9435° N, 75.3758° E</p>
              <div className="map-actions">
                <a 
                  href="https://maps.google.com/?q=Dharmasthala,Karnataka,India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="fas fa-external-link-alt"></i>
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="location-cta">
        <div className="cta-content">
          <h2>Ready to Work Together?</h2>
          <p>Whether you're local or global, I'm here to help bring your projects to life.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              <i className="fas fa-envelope"></i>
              Get In Touch
            </a>
            <a href="tel:+916366636405" className="btn btn-outline">
              <i className="fas fa-phone"></i>
              Call Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;