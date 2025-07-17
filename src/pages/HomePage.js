import React from 'react';
import { useNavigate } from 'react-router-dom';
import './auth/styles/homePage.css';
import { FaBalanceScale, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';

const HomePage = () => {
  const navigate = useNavigate();

  const hackathons = [
  {
    title: 'Social Summer of Code (SSoC) 2025',
    date: 'Aug 30 2025',
    startDate: 'Aug 1 2025',
    endDate: 'Aug 30 2025',
    desc: 'Register Now',
    image: '/images/ssoc.jpg',
    path: '/hackathons/ssoc'
  },
  {
    title: 'Web3 pe Charcha!',
    date: 'Jul 26 2025',
    startDate: 'Jul 1 2025',
    endDate: 'Jul 26 2025',
    desc: 'Register Now',
    image: '/images/web3.jpg',
    path: '/hackathons/web3'
  },
  {
    title: 'AI Innovate',
    date: 'Sep 15 2025',
    startDate: 'Sep 1 2025',
    endDate: 'Sep 15 2025',
    desc: 'Register Now',
    image: '/images/ai.jpg',
    path: '/hackathons/ai'
  },
  {
    title: 'Games Jam',
     date: 'Oct 10 2025',
    startDate: 'Sep 20 2025',
    endDate: 'Oct 10 2025',
    desc: 'Register Now',
    image: '/images/games.jpg',
    path: '/hackathons/games'
  },
];

  const tracks = [
    { title: 'AI & Machine Learning', desc: 'Build intelligent systems that learn and adapt.', color: '#6C63FF' },
    { title: 'Web3 & Blockchain', desc: 'Create decentralized applications of the future.', color: '#FF6584' },
    { title: 'Sustainability Tech', desc: 'Develop solutions for a greener planet.', color: '#48BB78' },
  ];

  return (
    <div className="tech-homepage">
      {/* Navbar */}
      <nav className="tech-nav" aria-label="Main navigation">
        <div className="tech-nav-container">
          <div className="tech-logo">
            <span className="glow">AQUA</span>HACK 2025
          </div>
          <div className="tech-nav-buttons">
            <button onClick={() => navigate('/login')} className="home-button login-btn" aria-label="Login">Login</button>
            <button onClick={() => navigate('/register')} className="home-button register-btn" aria-label="Register">Register</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="tech-hero">
        <div className="tech-hero-content">
          <h1 className="tech-hero-title"><span className="tech-gradient">BUILD</span> THE FUTURE</h1>
          <p className="tech-hero-subtitle">Hours of innovation with the brightest minds</p>
        </div>
        <div className="tech-hero-animation" aria-hidden="true">
          <div className="tech-circle"></div>
          <div className="tech-grid"></div>
        </div>
      </header>

      <main>
        {/* Stats */}
        <section className="tech-stats" aria-label="Hackathon stats">
          {[
            { number: '500+', label: 'Registered Hackers' },
            { number: '20+', label: 'Hackathons Hosted' },
            { number: '10+', label: 'Teams formed' },
            { number: '48', label: 'Projects Submitted' },
          ].map((stat, idx) => (
            <div key={idx} className="tech-stat">
              <div className="tech-stat-number">{stat.number}</div>
              <div className="tech-stat-label">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Hackathons */}
        <section className="tech-hackathons" id="hackathons" aria-label="Upcoming hackathons">
          <div className="tech-hackathons-container">
            {hackathons.map((hack, idx) => (
         <figure
         key={idx}
        className="hack-card"
        role="button"
           tabIndex={0}
        onClick={() => navigate(hack.path)}
        onKeyDown={(e) => e.key === 'Enter' && navigate(hack.path)}
        aria-label={`View details for ${hack.title}`}
         >
       <div
         className="hack-card-image"
        style={{ backgroundImage: `url(${hack.image})` }}
         aria-hidden="true"
        ></div>
       <figcaption className="hack-card-caption">
        <h3>{hack.title}</h3>
      <div className="hack-card-dates">
        <span>Start: {hack.startDate}</span> <br/>
        <span>End: {hack.endDate}</span>
      </div>
      <p
       className="register-text"
        onClick={(e) => {
        e.stopPropagation(); // prevent parent card click
         navigate(hack.path);
  }}
>
  {hack.desc} →
</p>

    </figcaption>
    <div className="hack-card-date">
      {hack.date}
      <div className="hack-card-dot"></div>
    </div>
  </figure>
))}

          </div>
        </section>

        {/* Tracks */}
        <section className="tech-tracks" id="tracks" aria-label="Hack tracks">
          <h2>Hack <span className="tech-gradient">Tracks</span></h2>
          <div className="tech-track-cards">
            {tracks.map((track, idx) => (
              <div key={idx} className="tech-track-card" style={{ borderTopColor: track.color }}>
                <h3>{track.title}</h3>
                <p>{track.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
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
