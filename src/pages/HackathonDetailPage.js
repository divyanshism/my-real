import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const hackathonData = {
  ssoc: {
    title: 'Social Summer of Code (SSoC) 2025',
    description: 'This is a 30-day intensive open source program with mentorship, workshops, and prizes. It aims to get students into open source contributions with real-world projects and expert guidance.',
    startDate: 'Aug 1 2025',
    endDate: 'Aug 30 2025',
    image: '/images/ssoc.jpg'
  },
  web3: {
    title: 'Web3 pe Charcha!',
    description: 'Dive into Web3 technologies. Learn blockchain fundamentals, build decentralized apps, and participate in innovative challenges.',
    startDate: 'Jul 1 2025',
    endDate: 'Jul 26 2025',
    image: '/images/web3.jpg'
  },
  ai: {
    title: 'AI Innovate',
    description: 'A hackathon dedicated to AI and Machine Learning projects. Build intelligent models and solutions to real-world problems.',
    startDate: 'Sep 1 2025',
    endDate: 'Sep 15 2025',
    image: '/images/ai.jpg'
  },
  games: {
    title: 'Games Jam',
    description: 'Create exciting games in a collaborative environment. Compete for fun and prizes while learning about game development.',
    startDate: 'Sep 20 2025',
    endDate: 'Oct 10 2025',
    image: '/images/games.jpg'
  },
};

export default function HackathonDetailPage() {
  const { hackId } = useParams();
  const navigate = useNavigate();
  const hackathon = hackathonData[hackId];

  const handleRegister = () => {
    navigate(`/register/${hackId}`, { state: { hackathon } });
  };

  if (!hackathon) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Hackathon Not Found</h2>
      </div>
    );
  }

  return (
    <div className="detail-page" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '1rem' }}>← Back</button>
      <h1>{hackathon.title}</h1>
      <img
        src={hackathon.image}
        alt={hackathon.title}
        style={{
          width: '100%',
          maxWidth: '600px',
          borderRadius: '10px',
          margin: '1rem 0'
        }}
      />
      <p><strong>Start:</strong> {hackathon.startDate}</p>
      <p><strong>End:</strong> {hackathon.endDate}</p>
      <p style={{ marginTop: '1rem' }}>{hackathon.description}</p>

      <button
        onClick={handleRegister}
        style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#6C63FF',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Register Now
      </button>
    </div>
  );
}
