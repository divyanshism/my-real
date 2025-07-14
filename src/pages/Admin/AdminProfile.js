import React, { useState } from 'react';
import '../auth/styles/adminProfile.css'; // Reusing the same CSS

function AdminProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [admin, setAdmin] = useState({
    name: 'Admin User',
    email: 'admin@aquahack.com', // Non-editable
    designation: 'Lead Organizer',
    phone: '9876543210',
    department: 'Tech & Management',
  });

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Optional: Replace this with an API call
    console.log('Updated admin profile:', admin);
    setIsEditing(false);
    alert("✅ Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Admin Profile</h2>

        <p><strong>Name:</strong>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={admin.name}
              onChange={handleChange}
            />
          ) : (
            admin.name
          )}
        </p>

        <p><strong>Email:</strong> {admin.email}</p>

        <p><strong>Designation:</strong>
          {isEditing ? (
            <input
              type="text"
              name="designation"
              value={admin.designation}
              onChange={handleChange}
            />
          ) : (
            admin.designation
          )}
        </p>

        <p><strong>Phone:</strong>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={admin.phone}
              onChange={handleChange}
            />
          ) : (
            admin.phone
          )}
        </p>

        <p><strong>Department:</strong>
          {isEditing ? (
            <input
              type="text"
              name="department"
              value={admin.department}
              onChange={handleChange}
            />
          ) : (
            admin.department
          )}
        </p>

        <div className="edit-buttons">
          {isEditing ? (
            <>
              <button onClick={handleSave} className="save-btn">Save</button>
              <button onClick={handleEditToggle} className="cancel-btn">Cancel</button>
            </>
          ) : (
            <button onClick={handleEditToggle} className="edit-btn">Edit Profile</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
