import React from 'react';
import { useNavigate } from 'react-router-dom';
import './auth/styles/homePage.css'; // Ensure this path is correct
import { FaBalanceScale, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="tech-homepage">
      {/* Glowing Navbar */}
      <nav className="tech-nav">
        <div className="tech-nav-container">
          <div className="tech-logo">
            <span className="glow">AQUA</span>HACK 2025
          </div>
          {/* Login/Register buttons in the nav */}
          <div className="tech-nav-buttons">
            <button onClick={() => navigate('/login')} className="home-button login-btn">Login</button>
            <button onClick={() => navigate('/register')} className="home-button register-btn">Register</button>
          </div>
        </div>
      </nav>

      {/* Animated Hero Section */}
      <header className="tech-hero">
        <div className="tech-hero-content">
          <h1 className="tech-hero-title">
            <span className="tech-gradient">BUILD</span> THE FUTURE
          </h1>
          <p className="tech-hero-subtitle">Hours of innovation with the brightest minds</p>
        </div>
        <div className="tech-hero-animation">
          {/* These elements would be animated via CSS */}
          <div className="tech-circle"></div>
          <div className="tech-grid"></div>
        </div>
      </header>

      {/* Stats Section */}
   <section className="tech-stats">
  <div className="tech-stat">
    <div className="tech-stat-number">500+</div>
    <div className="tech-stat-label">Registered Hackers</div>
  </div>
  <div className="tech-stat">
    <div className="tech-stat-number">20+</div>
    <div className="tech-stat-label">Hackathons Hosted</div>
  </div>
  <div className="tech-stat">
    <div className="tech-stat-number">10+</div>
    <div className="tech-stat-label">Teams formed</div>
  </div>
  <div className="tech-stat">
    <div className="tech-stat-number">48</div>
    <div className="tech-stat-label">Project Submitted</div>
  </div>
</section>

      {/* About Section */}
      <section className="tech-about" id="about">
        <div className="tech-about-container">
          <div className="tech-about-content">
            <h2>What is <span className="tech-gradient">AquaHack</span>?</h2>
            <p>
             AquaHack is a student-centric hackathon management platform designed to simplify the organization and participation of hackathons within educational institutions. Whether you're a student eager to showcase your skills or an admin planning the next big coding challenge, AquaHack provides a seamless and interactive experience.

With dedicated dashboards for admins and students, features like team creation, live leaderboards, feedback systems, and automated evaluation, AquaHack transforms traditional hackathons into a smart, digital-first experience.

Our mission is to empower student innovators, foster collaboration, and bring technology-driven competitions to life on campus with ease and style.


            </p>
          </div>
          <div className="tech-about-image">
            {/* Placeholder for an image or illustration related to the hackathon */}
            {/* Example: <img src="/path-to-your-about-image.png" alt="About AquaHack" /> */}
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="tech-tracks" id="tracks">
        <h2>Hack <span className="tech-gradient">Tracks</span></h2>
        <div className="tech-track-cards">
          <div className="tech-track-card" style={{ borderTop: '4px solid #6C63FF' }}>
            <h3>AI & Machine Learning</h3>
            <p>Build intelligent systems that learn and adapt.</p>
          </div>
          <div className="tech-track-card" style={{ borderTop: '4px solid #FF6584' }}>
            <h3>Web3 & Blockchain</h3>
            <p>Create decentralized applications of the future.</p>
          </div>
          <div className="tech-track-card" style={{ borderTop: '4px solid #48BB78' }}>
            <h3>Sustainability Tech</h3>
            <p>Develop solutions for a greener planet.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="tech-footer">
        <div className="tech-footer-content">
          <div className="tech-footer-logo">AQUAHACK 2025</div>
          <div className="tech-footer-links">
            <a href="/code-of-conduct" aria-label="Code of Conduct">
              <FaBalanceScale /> Code of Conduct
            </a>
            <a href="/faq" aria-label="Frequently Asked Questions">
              <FaQuestionCircle /> FAQ
            </a>
            <a href="/contact" aria-label="Contact Us">
              <FaEnvelope /> Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;