import React, { useState } from 'react';
import axios from 'axios';

function StaffForm() {
  const [newStaff, setNewStaff] = useState({ name: '', officeNumber: '', isAvailable: true });
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewStaff((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission to add a new staff member
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5550/api/staff', newStaff);
      setSuccessMessage('Staff added successfully!');
      setNewStaff({ name: '', officeNumber: '', isAvailable: true });
      setError('');
    } catch (err) {
      console.error('Error adding staff:', err);
      setError('Error adding staff');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h2>Add New Staff</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newStaff.name}
            onChange={handleChange}
            placeholder="Enter staff name"
            required
          />
        </div>
        <div>
          <label htmlFor="officeNumber">Office Number:</label>
          <input
            type="text"
            id="officeNumber"
            name="officeNumber"
            value={newStaff.officeNumber}
            onChange={handleChange}
            placeholder="Enter office number"
            required
          />
        </div>
        <div>
          <label htmlFor="isAvailable">Is Available:</label>
          <input
            type="checkbox"
            id="isAvailable"
            name="isAvailable"
            checked={newStaff.isAvailable}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Staff</button>
      </form>

      {/* Success and Error Messages */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default StaffForm;
