// @ts-nocheck

/** @typedef {{ _id: string, name: string, email: string, role: string }} User */


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../auth/styles/userManagement.css';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  axios.get('http://localhost:5000/api/admin/test')
    .then(res => console.log('✅ Test success:', res.data))
    .catch(err => console.error('❌ Test error:', err));
}, []);
useEffect(() => {
  axios.get('http://localhost:5000/api/admin/users', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    withCredentials: true
  })
  .then((res) => {
    setUsers(res.data);
  })
  .catch((err) => {
    console.error('❌ Error fetching users:', err);
  });
}, []);




  const handleDelete = async (userId) => {
  if (!window.confirm('Are you sure you want to delete this user?')) return;
  try {
    await axios.delete(`http://localhost:5000/api/admin/user/${userId}`, {
      withCredentials: true,
    });
    setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
  } catch (err) {
    console.error('Error deleting user:', err);
    alert('Failed to delete user');
  }
};
const handleRoleChange = async (userId, newRole) => {
  try {
    await axios.patch(`http://localhost:5000/api/admin/user/${userId}/role`, {
      role: newRole,
    }, {
      withCredentials: true,
    });

    // Update the local users list to reflect the new role
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === userId ? { ...user, role: newRole } : user
      )
    );
  } catch (err) {
    console.error('Error updating role:', err);
    alert('Failed to update user role');
  }
};


  return (
    <div className="user-management-container">
      <h2>User Management</h2>
      {loading ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
      {users.map((user, index) => (
  <tr key={user._id || user.id || index}>
  <td>{index + 1}</td>
  <td>{user.name || 'N/A'}</td>
  <td>{user.email || 'N/A'}</td>
  <td>
    <select
      value={user.role || 'student'}
      onChange={(e) => handleRoleChange(user._id || user.id, e.target.value)}
    >
      <option value="student">Student</option>
      <option value="admin">Admin</option>
    </select>
  </td>
  <td>
    <button onClick={() => handleDelete(user._id || user.id)} className="delete-btn">
      Delete
    </button>
  </td>
</tr>

))}


          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserManagement;
