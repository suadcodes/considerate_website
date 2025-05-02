import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-note">Feel free to drop a message or connect with me on <a href="https://www.linkedin.com/in/suad-hersi9/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a> for quicker replies.</p>
      <form className="contact-form">
        <label className="contact-label">
          Name:
          <input type="text" name="name" className="contact-input" />
        </label>
        <label className="contact-label">
          Email:
          <input type="email" name="email" className="contact-input" />
        </label>
        <label className="contact-label">
          Message:
          <textarea name="message" rows="5" className="contact-textarea" />
        </label>
        <button type="submit" className="contact-button">Send</button>
      </form>
    </div>
  );
};

export default Contact;
