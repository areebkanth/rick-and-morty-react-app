import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <p>This section showcases some of my work. Feel free to browse through and explore my projects.</p>
      <div className="portfolio-projects">
        <div className="project-card">
          <h3>Assignment 1 - HTML & CSS</h3>
          
          <a href="https://github.com/areebkanth/Assignment1-HTML_CSS" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Task Management Application</h3>
          
          <a href="https://github.com/areebkanth/TaskManagement" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;


