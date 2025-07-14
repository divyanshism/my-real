import React from 'react';
import '../auth/styles/admin.css';
import { FiUsers } from 'react-icons/fi';
import { FaClock, FaTrophy, FaRocket, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
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
        <button onClick={() => navigate('/admin/user-management')}>
  <FiUsers /> User Management
</button>

       <button onClick={() => navigate('/admin/hackathons')}>
  <FaRocket /> Hackathons
</button>

       <button onClick={() => navigate('/admin/create-hackathon')}>
  <FaRocket /> Create Hackathon
</button>

        <button onClick={() => navigate('/admin/leaderboard')}>
  <FaTrophy /> Leaderboard
</button>

        <button onClick={() => navigate('/admin/profile')}><FaUser /> Profile</button>
        <button onClick={handleLogout}><FaSignOutAlt /> Logout</button>
      </div>

      <div className="main-content">
        <h1>Welcome to the Admin Dashboard</h1>
        <div className="cards">
          <div className="card">
            <div className="card-icon"><FiUsers /></div>
            <h2>Users</h2>
            <p>120</p>
          </div>

          <div className="card">
            <div className="card-icon"><FaRocket /></div>
            <h2>Ongoing Hackathons</h2>
            <p>5</p>
          </div>

          <div className="card">
            <div className="card-icon"><FaTrophy /></div>
            <h2>Leaderboard</h2>
            <p>#1 Ranked</p>
          </div>

          <div className="card">
            <div className="card-icon"><FaClock /></div>
            <h2>Recent Hackathons</h2>
            <p>3</p>
          </div>
        </div>

        <div className="dashboard-footer-my-image">
          <img src="/aquaimg.jpeg" alt="AquaHack Banner" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
