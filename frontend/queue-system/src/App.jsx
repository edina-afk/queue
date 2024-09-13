import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';
import Appointment from './Appointment';
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component
import KioskCheckIn from './components/KioskCheckIn';
import StaffForm from './components/StaffForm'; 
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignUp />} />
      {/* Use ProtectedRoute for the Appointment page */}
      <Route path="/appointment" element={<ProtectedRoute element={Appointment} />} />
      <Route path="/kiosk-check-in" element={<KioskCheckIn />} />
      <Route path="/staff-form" element={<StaffForm />} />
    </Routes>
  </Router>
);

export default App;
