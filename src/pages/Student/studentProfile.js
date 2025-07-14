import React, { useState } from 'react';
import '../auth/styles/studentProfile.css'; // Reuse the same CSS

function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [student, setStudent] = useState({
    name: 'John Doe',
    email: 'john@student.com', // keep this readonly
    college: 'ABC University',
    phone: '9876543210',
    course: 'BCA',
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // In real case, make API call here to save updated info
    console.log('Saved student info:', student);
    setIsEditing(false);
    alert("✅ Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Student Profile</h2>

        <p><strong>Name:</strong>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
            />
          ) : (
            student.name
          )}
        </p>

        <p><strong>Email:</strong> {student.email}</p>

        <p><strong>College:</strong>
          {isEditing ? (
            <input
              type="text"
              name="college"
              value={student.college}
              onChange={handleChange}
            />
          ) : (
            student.college
          )}
        </p>

        <p><strong>Phone:</strong>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={student.phone}
              onChange={handleChange}
            />
          ) : (
            student.phone
          )}
        </p>

        <p><strong>Course:</strong>
          {isEditing ? (
            <input
              type="text"
              name="course"
              value={student.course}
              onChange={handleChange}
            />
          ) : (
            student.course
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

export default StudentProfile;
