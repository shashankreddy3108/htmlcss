import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
    const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Inspire Awareness of Indian Culture & Heritage</h1>
        <p>
          Discover the beauty of India's cultural heritage, dive into its deep-rooted traditions, historical legacies, and magnificent monuments.
          Explore the vast richness of our history and monuments with interactive features.
        </p>

        {/* Large, Separated Sign In and Sign Up Buttons */}
        <div className="auth-buttons">
          <button className="large-button signin-btn" onClick={handleSignInClick}>Sign In</button>
          <button className="large-button signup-btn" onClick={handleSignUpClick}>Sign Up</button>
        </div>
      </section>

      {/* Image Content Section */}
      <section className="image-section">
        <h2>Explore India's Rich Cultural Heritage</h2>
        <div className="image-container">
        <div className="image-card" style={{ backgroundColor: '#FFB22C', color: '#000' }}>

<img src="https://i.pinimg.com/564x/8b/91/fb/8b91fb267b3a6085e6040314dfa5c4d3.jpg" alt="Taj Mahal" />
            <h3>Taj Mahal</h3>
            <p>An epitome of love and a UNESCO World Heritage site, the Taj Mahal is one of the seven wonders of the world.</p>
          </div>

          <div className="image-card" style={{ backgroundColor: '#FFB22C', color: '#000' }}>
            <img src="https://i.pinimg.com/474x/c5/a7/46/c5a7468f1b3ada13043234967ef18e4f.jpg" alt="Varanasi" />
            <h3>Varanasi</h3>
            <p>One of the world's oldest continuously inhabited cities, Varanasi is known for its spiritual significance.</p>
          </div>

          <div className="image-card" style={{ backgroundColor: '#FFB22C', color: '#000' }}>
            <img src="https://i.pinimg.com/474x/53/e7/dc/53e7dcb947d821aa8d95697785d3ca45.jpg" alt="Hampi" />
            <h3>Hampi</h3>
            <p>A UNESCO site filled with stunning architecture and ancient ruins, Hampi is a glimpse into India's royal past.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Inspire Awareness | Indian Culture & Heritage</p>
      </footer>
    </div>
  );
};

export default Homepage;
