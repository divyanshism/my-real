import React, { useState } from 'react';
import axios from 'axios';
import '../auth/styles/createHackathons.css';
const CreateHackathon = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    rules: '',
    mode: 'quiz', // default value
    startDate: '',
    endDate: '',
    teamSize: '',
    quizQuestions: [''],
    codingInstructions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuizQuestionChange = (index, value) => {
    const updatedQuestions = [...formData.quizQuestions];
    updatedQuestions[index] = value;
    setFormData(prev => ({ ...prev, quizQuestions: updatedQuestions }));
  };

  const addQuestion = () => {
    setFormData(prev => ({
      ...prev,
      quizQuestions: [...prev.quizQuestions, '']
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:5000/api/admin/create-hackathon', formData);
    console.log("✅ Hackathon created:", response.data);
    alert("Hackathon created successfully!");
    setFormData({
      name: '',
      description: '',
      rules: '',
      mode: 'quiz',
      startDate: '',
      endDate: '',
      teamSize: '',
      quizQuestions: [''],
      codingInstructions: ''
    });
  } catch (error) {
    console.error("❌ Error:", error.response?.data || error.message);
    alert("Something went wrong while creating hackathon.");
  }
};


  return (
    <div className="container">
      <h2>Create Hackathon</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Hackathon Name" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} />
        <textarea name="rules" placeholder="Rules" onChange={handleChange} />
        
        <select name="mode" value={formData.mode} onChange={handleChange}>
          <option value="quiz">Quiz</option>
          <option value="coding">Coding</option>
        </select>

        <input type="datetime-local" name="startDate" onChange={handleChange} required />
        <input type="datetime-local" name="endDate" onChange={handleChange} required />

        <input name="teamSize" type="number" placeholder="Team Size" onChange={handleChange} />

        {formData.mode === 'quiz' && (
          <div>
            <h4>Quiz Questions</h4>
            {formData.quizQuestions.map((q, i) => (
              <input
                key={i}
                value={q}
                onChange={(e) => handleQuizQuestionChange(i, e.target.value)}
                placeholder={`Question ${i + 1}`}
              />
            ))}
            <button type="button" onClick={addQuestion}>+ Add Question</button>
          </div>
        )}

        {formData.mode === 'coding' && (
          <textarea
            name="codingInstructions"
            placeholder="Coding Instructions"
            onChange={handleChange}
          />
        )}

        <button type="submit">Create Hackathon</button>
      </form>
    </div>
  );
};

export default CreateHackathon;
