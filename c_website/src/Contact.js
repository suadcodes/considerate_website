import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Contact</h1>
        <p className="contact-message">
          Reach out via email or <a href="https://www.linkedin.com/in/suad-hersi9/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>. 
          I read every message, I promise!
        </p>
        <div className="contact-info">
          <p className="email-info">
            📧 Email: <a href="mailto:suadah473@gmail.com" className="email-link">suadah473@gmail.com</a>
          </p>
          <p className="social-info">
            🔗 LinkedIn: <a href="https://www.linkedin.com/in/suad-hersi9/" target="_blank" rel="noopener noreferrer" className="linkedin-link">Connect with me on LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
