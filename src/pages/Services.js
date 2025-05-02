import React from 'react';
import './Pages.css';

function Services() {
  return (
    <div className="page">
      <h1>Our Services</h1>
      <p>We offer a variety of web development and design services tailored to meet your needs.</p>
      
      <div className="services-list">
        <div className="service-item">
          <h2>Web Development</h2>
          <p>Custom web applications built with the latest technologies including React, Angular, and Vue.js.</p>
        </div>
        
        <div className="service-item">
          <h2>UI/UX Design</h2>
          <p>User-friendly interfaces and experiences that engage your audience and meet your business goals.</p>
        </div>
        
        <div className="service-item">
          <h2>Mobile App Development</h2>
          <p>Cross-platform mobile applications using React Native and other modern frameworks.</p>
        </div>
        
        <div className="service-item">
          <h2>Maintenance & Support</h2>
          <p>Ongoing maintenance and support to ensure your applications stay up-to-date and secure.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;