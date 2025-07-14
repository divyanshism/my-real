import React from 'react';
import '../auth/styles/leaderboard.css';

const mockLeaderboard = [
  { name: 'Divyansh Saxena', score: 98, hackathon: 'Code Sprint 2025', rank: 1 },
  { name: 'Anjali Sharma', score: 94, hackathon: 'Quiz Blitz', rank: 2 },
  { name: 'Ravi Kumar', score: 91, hackathon: 'Frontend Fiesta', rank: 3 },
  { name: 'Sneha Verma', score: 89, hackathon: 'Code Sprint 2025', rank: 4 },
  { name: 'Aman Joshi', score: 87, hackathon: 'Quiz Blitz', rank: 5 },
];

function AdminLeaderboard() {
  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Hackathon</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {mockLeaderboard.map((user, index) => (
            <tr key={index}>
              <td>#{user.rank}</td>
              <td>{user.name}</td>
              <td>{user.hackathon}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminLeaderboard;
