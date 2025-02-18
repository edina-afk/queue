import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5550/api/login',  
        formData
      );

      const { token, client } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('clientId', client._id);
      alert('Login successful!');
      navigate('/appointment');  
    } catch (err) {
      console.error(err);
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-header">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Login</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>

    
      <style>{`
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Arial', sans-serif;
          background-color: #f5f5f5;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          min-height: 100vh;
          color: #333;
        }

       
        .navbar {
          width: 100%;
          background-color: #444;
          padding: 10px 0;
          text-align: center;
          color: white;
        }

         
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          width: 100%;
          padding: 20px;
        }

        .login-form {
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
          padding: 40px;
          width: 100%;
          max-width: 450px;
          text-align: center;
        }

        
        .login-header {
          font-size: 2rem;
          font-weight: 700;
          color: #4f4f4f;
          margin-bottom: 30px;
        }

         
        .form-group {
          margin-bottom: 20px;
        }

        input {
          width: 100%;
          padding: 14px;
          font-size: 1rem;
          border-radius: 6px;
          border: 1px solid #ddd;
          background-color: #f9f9f9;
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        input:focus {
          border-color: #0066cc;
          box-shadow: 0 0 5px rgba(0, 102, 204, 0.2);
        }

           
        .submit-btn {
          width: 100%;
          padding: 14px;
          background-color: #444;   
          color: #fff;
          border: none;
          border-radius: 6px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #333;  
        }

        
        .error-message {
          color: #ff4d4d;
          font-size: 1rem;
          margin-top: 20px;
        }

        
        @media (max-width: 600px) {
          .login-container {
            padding: 10px;
          }

          .login-form {
            padding: 30px;
          }
        }
      `}</style>
    </div>
  );
}

export default Login;
