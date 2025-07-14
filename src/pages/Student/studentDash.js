import React from 'react';
import '../auth/styles/student.css';

import { FaUsers, FaCode, FaTrophy, FaSignOutAlt, FaUser, FaLightbulb } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function StudentDash() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      localStorage.clear();
      navigate('/login');
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>AquaHack</h2>
        <button onClick={() => navigate('/student/participation')}><FaUsers /> Participation</button>
       <button onClick={() => navigate('/admin/hackathons')}>
        <FaCode /> Hackathons
      </button>
       <button onClick={() => navigate('/student/team-creation')}>
  <FaUsers /> Team Creation
</button>

      <button onClick={() => navigate('/student/feedback')}>
  <FaLightbulb /> Feedback
</button>

        <button onClick={() => navigate('/student/profile')}><FaUser /> Profile</button>
        <button onClick={handleLogout}><FaSignOutAlt /> Logout</button>
      </div>

      <div className="main-content">
        <h1>Welcome to the Student Dashboard</h1>
        <div className="cards">
          <div className="card">
            <div className="card-icon"><FaUsers /></div>
            <h2>Teams</h2>
            <p>4</p>
          </div>

          <div className="card">
            <div className="card-icon"><FaCode /></div>
            <h2>Hackathons</h2>
            <p>3</p>
          </div>

          <div className="card">
            <div className="card-icon"><FaTrophy /></div>
            <h2>Achievements</h2>
            <p>2 Wins</p>
          </div>

          <div className="card">
            <div className="card-icon"><FaLightbulb /></div>
            <h2>Participated</h2>
            <p>6 Hackathons</p>
          </div>
        </div>

        <div className="dashboard-footer-my-image">
          <img src="/aquaimg.jpeg" alt="AquaHack Banner" />
        </div>
      </div>
    </div>
  );
}

export default StudentDash;
