import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/login.css'; // reuse styles

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/reset-password', {
        token,
        newPassword,
      });

      setMessage(res.data.message);
      setTimeout(() => navigate('/login'), 3000); // Redirect to login
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Reset Password</h2>
        {message && <div className="auth-success">{message}</div>}
        {error && <div className="auth-error">{error}</div>}
        <form onSubmit={handleResetPassword}>
          <input
            className="auth-input"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            className="auth-input"
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button className="auth-button" type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
