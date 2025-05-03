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
          Hi! I’m Suad, currently diving deep into the world of Artificial Intelligence and eager to apply what I’ve learned to real-world impact. My journey has taken me across countries and cultures, shaping how I collaborate, solve problems, and communicate.
          </p>

          <h2>Background & Journey</h2>
          <p>
          Having lived in Denmark, Kenya, and now England, I’ve learned to adapt quickly, embrace different perspectives, and thrive in diverse teams. Each place has shaped how I communicate, collaborate, and approach challenges.
          </p>

          <h2>What Drives Me</h2>
          <p>
          I want to use what I know to make a real, positive impact—whether through tech or collaboration. I'm open to opportunities wherever I can help create meaningful change.
           </p>

          <h2>Hobbies & Interests</h2>
          <p>
          Outside of tech, I enjoy go-karting, traveling, and hiking—anything that challenges me and helps me grow.
          </p>

        </div>
      </div>
    </section>
  );
}

export default About;
