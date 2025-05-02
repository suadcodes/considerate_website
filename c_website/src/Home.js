import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home-container">
      <div className="intro">
        <h1>Hi, I’m Suad Ali Hersi.</h1>
        <h2>Exploring the future of AI — one project at a time.</h2>

        <p>
        I'm an AI Master's student passionate about turning complex ideas into practical tools. 
          Whether it's learning how machines understand language or exploring the ethical side of intelligent systems, 
          I’m driven by curiosity and a desire to make technology more human-centered.
        </p>
        <p>

        I’m currently open to junior opportunities where I can grow as an AI developer, contribute to innovative teams, 
        and help build the future — especially in fast-moving environments like startups.
        </p>

        <p>
          I'm currently open to opportunities in AI/ML engineering, research, or product-oriented roles where I can contribute to cutting-edge solutions 
          and help organizations grow with smart, scalable technology.
        </p>
        
        <p>
        Let’s build something meaningful together.
        </p>
        <a href="/cv" className="learn-more">View My CV →</a>
      </div>
    </section>
  );
}

export default Home;
