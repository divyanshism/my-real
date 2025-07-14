 // @ts-nocheck
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../auth/styles/allHackathon.css';

const AllHackathons = () => {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/all-hackathons')
      .then(res => {
        setHackathons(res.data);
      })
      .catch(err => {
        console.error('❌ Failed to fetch hackathons:', err);
        alert('Failed to load hackathons.');
      });
  }, []);

  return (
    <div className="all-hackathons-container">
      <h2>📋 All Created Hackathons</h2>
      <div className="hackathon-list">
        {hackathons.length === 0 ? (
          <p>No hackathons created yet.</p>
        ) : (
          hackathons.map((hackathon, index) => (
            <div className="hackathon-card" key={index}>
              <h3>{hackathon.name}</h3>
              <p><strong>Mode:</strong> {hackathon.mode}</p>
              <p><strong>Start:</strong> {new Date(hackathon.startDate).toLocaleString()}</p>
              <p><strong>End:</strong> {new Date(hackathon.endDate).toLocaleString()}</p>
              <p><strong>Team Size:</strong> {hackathon.teamSize}</p>
              <p><strong>Description:</strong> {hackathon.description}</p>
              <p><strong>Rules:</strong> {hackathon.rules}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllHackathons;
