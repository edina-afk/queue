import React, { useState } from 'react';
import axios from 'axios';

function Appointment() {
  const [appointmentData, setAppointmentData] = useState({
    date: '',
    appointment_type: '',
    tinNumber: '',
  });
  const [barcode, setBarcode] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const clientId = localStorage.getItem('clientId');
      
      const response = await axios.post(
        'http://localhost:5550/api/appointments',
        { ...appointmentData, client_id: clientId }, // Include client ID in the request body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const { barcode } = response.data;
      setBarcode(barcode);
      alert('Appointment booked successfully!');
    } catch (err) {
      console.error(err);
      setError('Failed to book appointment.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={appointmentData.date}
          onChange={handleChange}
          required
        />
        <select
          name="appointment_type"
          value={appointmentData.appointment_type}
          onChange={handleChange}
          required
        >
          <option value="">Select Appointment Type</option>
          <option value="Level A">Level A</option>
          <option value="Level B">Level B</option>
          <option value="Level C">Level C</option>
        </select>
        <input
          name="tinNumber"
          type="text"
          placeholder="TIN Number"
          value={appointmentData.tinNumber}
          onChange={handleChange}
        />
        <button type="submit">Book Appointment</button>
      </form>

      {barcode && (
        <div>
          <h3>Your Barcode:</h3>
          <p>{barcode}</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Appointment;
