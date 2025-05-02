import React from 'react';
import './CV.css';

const CV = () => {
  return (
    <div className="cv-wrapper">
      <div className="cv-header">
        <h1>Suad Ali Hersi</h1>
        <p className="cv-title">AI Problem Solver | MSc Artificial Intelligence</p>
        <div className="cv-contact">
          <a href="mailto:suadah473@gmail.com">suadah473@gmail.com</a> | 
          <a href="tel:+447404973807">+44 7404 973807</a> | 
          <a href="https://www.linkedin.com/in/suad-hersi9" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="cv-section">
        <h2>Profile</h2>
        <p>
          Adaptive and solution-oriented AI enthusiast with experience in software development,
          machine learning, and collaborative tech projects. Driven by impact, I bring critical thinking,
          hands-on problem-solving, and a growth mindset to teams and challenges.
        </p>
      </div>

      <div className="cv-section">
        <h2>Technical Skills</h2>
        <ul className="skill-grid">
          <li><strong>Languages:</strong> Python, JavaScript, Java, SQL</li>
          <li><strong>Web:</strong> React, HTML/CSS</li>
          <li><strong>AI/ML:</strong> TensorFlow, PyTorch, Scikit-learn</li>
          <li><strong>Tools:</strong> Git, Hugging Face, Jupyter</li>
          <li><strong>NLP:</strong> Text classification, sentiment analysis, chatbots</li>
          <li><strong>Data:</strong> Cleaning, EDA, model evaluation</li>
        </ul>
      </div>

      <div className="cv-section">
        <h2>Education</h2>
        <div className="edu-block">
          <h3>Queen Mary University of London</h3>
          <p>MSc in Artificial Intelligence (2024 – 2025)</p>
        </div>
        <div className="edu-block">
          <h3>Kingston University</h3>
          <p>BSc (Hons) Computer Science (2020 – 2023)</p>
        </div>
        <div className="edu-block">
          <h3>Stanmore College</h3>
          <p>Access to HE Diploma (2019 – 2020)</p>
        </div>
      </div>

      <div className="cv-section">
        <h2>Projects</h2>
        <ul>
          <li><strong>MyVolt:</strong> Energy efficiency app aligned with UN SDG 11 (Bright Ideas Finalist)</li>
          <li><strong>Recycling Network:</strong> Waste management platform with sustainability focus</li>
          <li><strong>Athlete Go:</strong> Fitness and sustainability UX app with user research and testing</li>
        </ul>
      </div>

      <div className="cv-section">
        <h2>Experience</h2>
        <div className="job-block">
          <h3>Solution Engineer Intern – Salesforce</h3>
          <p><em>June 2022 – August 2022</em></p>
          <ul>
            <li>Worked on a diversity analytics project with a live demo delivery</li>
            <li>Shadowed customer engagement teams and participated in workshops</li>
            <li>Completed Salesforce Trailhead certifications and training</li>
          </ul>
        </div>
      </div>

      <div className="cv-section">
        <h2>Extras</h2>
        <p><strong>Languages:</strong> English, Somali, Swahili, Arabic</p>
        <p><strong>Certificates:</strong> Git & GitHub (LinkedIn), Google Analytics</p>
        <p><strong>Hobbies:</strong> Tech news, books, networking</p>
        <p><em>References available upon request</em></p>
      </div>
    </div>
  );
};

export default CV;
