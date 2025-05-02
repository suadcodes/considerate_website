import React from 'react';
import profilePic from './suad2025.jpg';
import './About.css';

function About() {
  return (
    <section className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <p className="description">AI Innovator & Problem Solver based in London, UK</p>
      </div>

      <div className="about-content">
        <div className="about-photo">
          <img src={profilePic} alt="Suad Ali Hersi" className="profile-photo" />
        </div>

        <div className="about-details">
          <p>
          Hi, I'm Suad Ali Hersi. I’m currently completing my Master’s in Artificial Intelligence at Queen Mary University of London, finishing in September. 
          My academic background has given me a solid foundation in AI theory, and I’m now actively seeking junior roles where I can apply and grow these skills in real-world settings.
          </p>

          <h2>Background & Journey</h2>
          <p>
            I grew up in Kenya and have lived in several countries, which has made me adaptable, versatile, and comfortable working with diverse teams. 
            My journey into AI started from a deep curiosity about how intelligent systems work and how they can be applied to solve real-world problems. 
            Although I haven't yet built full AI solutions, I’ve gained theoretical experience through university projects in areas like machine learning and natural language processing.
          </p>

          <h2>What Drives Me</h2>
          <p>
           I’m especially interested in startups, where I believe there’s room to learn quickly, make an impact, and contribute to meaningful innovation. 
           I’m open to work opportunities and flexible with location. I’m eager to work in environments where I can collaborate, grow, and help bring AI ideas to life.
           </p>

          <h2>Hobbies & Interests</h2>
          <p>
          Outside of tech, I enjoy go-karting, traveling, and discovering new technologies. I'm always up for a challenge and enjoy stepping into new spaces that help me learn and evolve.
          </p>

          <h2>Get in Touch</h2>
          <p>
          If you're looking for a motivated and adaptable early-career AI graduate, I’d love to hear from you. I’m open to internships, junior roles, and collaborative projects — especially within innovative or startup environments.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
