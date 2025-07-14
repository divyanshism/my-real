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
              <br /><br />
              With dedicated dashboards for admins and students, features like team creation, live leaderboards, feedback systems, and automated evaluation, AquaHack transforms traditional hackathons into a smart, digital-first experience.
              <br /><br />
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
     <footer className="reskill-footer">
  <div className="footer-container">
    {/* Left: Contact Info */}
    <div className="footer-section contact-info">
      <img src="/logo1.png" alt="Logo" className="footer-logo" />
      <p>For any queries or requests, feel free to reach out using the email below or via the connect button.</p>
      <div className="footer-location">
        <h4>India</h4>
        <p><strong>Address:</strong> Lal Phatak Near ITBP Campp</p>
        <p><strong>Email:</strong> pal028696@gmail.com</p>
        <p><strong>Phone No:</strong> +91 6395074508</p>
      </div>
      
    </div>

    {/* Center: Links */}
    <div className="footer-section quick-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#">Events/Hackathons</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Initiatives</a></li>
      </ul>
    </div>

    <div className="footer-section hackathons">
      <h4>Hackathons</h4>
      <ul>
        <li><a href="#">MSHACK</a></li>
        <li><a href="#">Vistara Hackathon</a></li>
        <li><a href="#">Ideathon</a></li>
        <li><a href="#">Microsoft Code for future</a></li>
        <li><a href="#">Assocham Launchpad</a></li>
        <li><a href="#">Green Charcoal Hackathon</a></li>
        <li><a href="#">India Innovation Series</a></li>
      </ul>
    </div>

    {/* Right: Social Media */}
    <div className="footer-section social">
      <h4>Follow Us:</h4>
      <div className="social-icons">
        <a href="#"><img src="/twitter.png" alt="Twitter" /></a>
        <a href="#"><img src="/linkedinlogo.webp" alt="LinkedIn" /></a>
        <a href="#"><img src="/facebook.webp" alt="Facebook" /></a>
        <a href="#"><img src="/youtube.webp" alt="YouTube" /></a>
      </div>
      <button className="discord-button">Join Our Discord</button>
    </div>
  </div>
  <div className="footer-bottom">© 2025 Copyright: AquaHack</div>
</footer>

    </div>
  );
};

export default HomePage;
