import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import user from '../../Services/user';
import axios from 'axios';

const Reset = () => {
    const { token } = useParams(); // Get the token from the URL
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (password !== confirmPassword) {
        console.log("Passwords do not match");
        return;
      }
  
     axios.post(`http://localhost:3000/user/reset/${token}`,{password}).then((res)=>{
        console.log(res.data)
        navigate('/login')
     }).catch((err)=>{
        console.log(err)
     })
    };
  
    return (
      <div className="reset-password-container">
        <h2>Reset Password</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Reset Password</button>
        </form>
      </div>
    );
  }
  

export default Reset;
