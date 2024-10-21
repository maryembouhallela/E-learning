import React, { useState } from 'react'
import user from '../../Services/user';


const Forget = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = async (e) => {
      e.preventDefault();
  
        await user.ForgetPassword({ email }).then((res)=>{
          console.log(res.data)
        })
  
        .catch((err)=>{
          console.log(err);
        })}
   
    return (
      <div>
         <div className="forgot-password-container">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label  htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name='email'
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Send Reset Link</button>
        </form>
      </div>
  
      </div>
    )
  }

export default Forget 
