import React, { useState } from 'react';
import axios from 'axios';

function KioskCheckIn() {
  const [barcode, setBarcode] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setBarcode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5550/api/kiosk/check-in', { barcode });
      setResult(response.data);
      setError('');
    } catch (err) {
      setResult(null);
      setError(err.response?.data?.error || 'Error checking in');
    }
  };

  return (
    <div>
      <h1>Kiosk Check-In</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={barcode}
          onChange={handleChange}
          placeholder="Enter barcode"
          required
        />
        <button type="submit">Submit</button>
      </form>

      {result && (
        <div>
          <h3>Check-in Successful!</h3>
          <p><strong>Queue Number:</strong> {result.queue_number}</p>
          <p><strong>Staff:</strong> {result.staff.name}</p>
          <p><strong>Office Number:</strong> {result.staff.officeNumber}</p>
          <p><strong>Ticket Number:</strong> {result.ticket_number}</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default KioskCheckIn;
