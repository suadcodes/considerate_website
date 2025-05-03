import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home-container">
      <div className="intro">
        <h1>Welcome!</h1>
        <h2>Exploring the future of AI — one project at a time.</h2>

        <p>
        I'm a Master's student in AI with a passion for turning complex ideas into practical, human-centered solutions. I’m particularly interested in roles across AI/ML engineering, research, or product development—where I can contribute to real-world innovation and growth.
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
