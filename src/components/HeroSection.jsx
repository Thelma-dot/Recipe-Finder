import React from 'react';
import heroImage from '../assets/images/background.jpg'; // adjust the path

const HeroSection = () => {
  const heroStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center'
  };

  return (
    <div style={heroStyle}>
      <h1>Cooking Made Easy</h1>
      <button style={{ padding: '10px 20px', backgroundColor: '#ff0000', color: 'white', border: 'none', borderRadius: '5px' }}>
        Learn More
      </button>
    </div>
  );
};

export default HeroSection;
