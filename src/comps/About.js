import React from 'react';

const About = () => {
  return (
    <div className="about-container" style={{
      padding: '2rem',
    }}>
      <h1 style={{
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>About PR Review Assistant</h1>
      <div className="about-content" style={{
        lineHeight: '1.6'
      }}>
        <p style={{
          fontSize: '1.1rem',
          color: '#34495e'
        }}>
          Welcome to PR Review Assistant, a self-improving tool designed to enhance
          the pull request review process.
        </p>
      </div>
    </div>
  );
};

export default About;
