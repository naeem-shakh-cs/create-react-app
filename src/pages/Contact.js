import React from 'react';
import './Pages.css';

function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Have questions or need assistance? Reach out to us using the form below.</p>
      
      <div className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="5" placeholder="Type your message here"></textarea>
        </div>
        
        <button className="submit-btn">Send Message</button>
      </div>
      
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: info@example.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 React Street, JavaScript City, 10001</p>
      </div>
    </div>
  );
}

export default Contact;