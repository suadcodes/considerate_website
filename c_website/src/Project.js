import React from 'react';

const Projects = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Projects</h1>
      <p style={styles.text}>Projects page coming soon. Check back later!</p>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    color: '#333',
    padding: '2rem',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.25rem',
    color: '#666',
  },
};

export default Projects;
