import React from 'react';
import './Pages.css';

function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>We are a passionate team dedicated to creating amazing web applications using React.</p>
      <div className="about-content">
        <h2>Our Mission</h2>
        <p>To build intuitive, responsive, and user-friendly applications that solve real-world problems.</p>
        
        <h2>Our Team</h2>
        <p>Our team consists of experienced developers who love what they do.</p>
        
        <h2>Our History</h2>
        <p>Founded in 2023, we've been working on innovative projects that push the boundaries of web development.</p>
      </div>
    </div>
  );
}

export default About;