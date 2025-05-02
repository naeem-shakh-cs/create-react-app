import React from 'react';
import './Pages.css';

function Home() {
  return (
    <div className="page">
      <h1>Home</h1>
      <p>Welcome to our React application!</p>
      <p>This is the main landing page of our website. Feel free to explore the other pages through the navigation menu.</p>
      <div className="feature-section">
        <h2>Features</h2>
        <ul>
          <li>Responsive design</li>
          <li>React Router navigation</li>
          <li>Multiple page layout</li>
          <li>Clean component structure</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;