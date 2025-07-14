import React, { useState } from 'react';
import '../auth/styles/participation.css';

function Participation() {
  const [hackathons] = useState([
    {
      id: '1',
      title: 'Code Sprint',
      description: 'A fast-paced coding competition.',
      type: 'Coding',
      date: '2025-07-20',
    },
    {
      id: '2',
      title: 'Tech Quiz',
      description: 'Test your tech knowledge.',
      type: 'Quiz',
      date: '2025-07-25',
    },
  ]);

  const handleJoin = (id) => {
    alert(`🟢 You have joined the hackathon with ID: ${id}`);
  };

  return (
    <div className="participation-container">
      <h2 className="participation-title">Available Hackathons</h2>

      <div className="hackathon-list">
        {hackathons.map((hackathon) => (
          <div key={hackathon.id} className="hackathon-card">
            <h3>{hackathon.title}</h3>
            <p>{hackathon.description}</p>
            <p><strong>Type:</strong> {hackathon.type}</p>
            <p><strong>Date:</strong> {new Date(hackathon.date).toLocaleDateString()}</p>
            <button onClick={() => handleJoin(hackathon.id)} className="join-button">
              Join Hackathon
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Participation;
