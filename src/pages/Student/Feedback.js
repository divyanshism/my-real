import React, { useState } from 'react';
import '../auth/styles/feedback.css';

function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.feedback) {
      alert('Please fill all the fields');
      return;
    }
    console.log('Feedback submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', feedback: '' });
  };

  return (
    <div className="feedback-container">
      <h2>Feedback</h2>
      {submitted && <div className="thank-you">🎉 Thank you for your feedback!</div>}
      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          rows={5}
          value={formData.feedback}
          onChange={handleChange}
        />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
