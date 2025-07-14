import React, { useState } from 'react';
import '../auth/styles/team.css';

function TeamCreation() {
  const [teamName, setTeamName] = useState('');
  const [members, setMembers] = useState(['']);

  const handleAddMember = () => {
    setMembers([...members, '']);
  };

  const handleChangeMember = (index, value) => {
    const updated = [...members];
    updated[index] = value;
    setMembers(updated);
  };

  const handleRemoveMember = (index) => {
    const updated = [...members];
    updated.splice(index, 1);
    setMembers(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!teamName.trim()) {
      alert('⚠️ Please enter a team name.');
      return;
    }

    const allFilled = members.every((m) => m.trim());
    if (!allFilled) {
      alert('⚠️ Please fill in all member emails.');
      return;
    }

    // For demo, just show alert
    alert(`✅ Team "${teamName}" created with ${members.length} member(s)!`);

    // Reset
    setTeamName('');
    setMembers(['']);
  };

  return (
    <div className="team-creation-container">
      <h2>Create Your Team</h2>

      <form className="team-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="team-input"
          required
        />

        {members.map((member, index) => (
          <div key={index} className="member-input-group">
            <input
              type="email"
              placeholder={`Member ${index + 1} Email`}
              value={member}
              onChange={(e) => handleChangeMember(index, e.target.value)}
              className="team-input"
              required
            />
            {members.length > 1 && (
              <button
                type="button"
                className="remove-btn"
                onClick={() => handleRemoveMember(index)}
              >
                ❌
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={handleAddMember} className="add-btn">
          + Add Member
        </button>

        <button type="submit" className="submit-btn">
          Create Team
        </button>
      </form>
    </div>
  );
}

export default TeamCreation;
