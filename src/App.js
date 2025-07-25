import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AdminDashboard from './pages/Admin/Dashboard';
import StudentDashboard from './pages/Student/studentDash';
import AdminProfile from './pages/Admin/AdminProfile';
import StudentProfile from './pages/Student/studentProfile';
import UserManagement from './pages/Admin/UserManagement';
import CreateHackathon from './pages/Admin/CreateHackathon';
import AdminHackathons from './pages/Admin/Hackathons';
import AdminLeaderboard from './pages/Admin/Leaderboard';
import TeamCreation from './pages/Student/teamCreation';
import Participation from './pages/Student/Participation';
import Feedback from './pages/Student/Feedback';
import ForgotPassword from './pages/auth/forgotPassword';
import ResetPassword from './pages/auth/resetPassword';
import HackathonDetailPage from './pages/HackathonDetailPage';

// ✅ 'Page' line removed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/student/studentdash" element={<StudentDashboard />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/admin/user-management" element={<UserManagement />} />
        <Route path="/admin/create-hackathon" element={<CreateHackathon />} />
        <Route path="/admin/hackathons" element={<AdminHackathons />} />
        <Route path="/admin/leaderboard" element={<AdminLeaderboard />} />
        <Route path="/student/team-creation" element={<TeamCreation />} />
        <Route path="/Student/participation" element={<Participation />} />
        <Route path="/Student/feedback" element={<Feedback />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/hackathons/:hackId" element={<HackathonDetailPage />} />
        <Route path="/register/:hackId" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

