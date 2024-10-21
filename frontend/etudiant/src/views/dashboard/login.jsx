import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import user from '../../Servises/user';

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setError('');

    console.log('Sending data:', data); // Log the data to be sent

    user.LogIn(data)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data));
        console.log('Login successful:', res.data);
        navigate('/');
      })
      .catch((err) => {
        console.error('Login failed:', err.response || err.message);
        setError(
          err.response?.data?.message || 'An error occurred. Please try again.'
        );
      });
  };

  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
      <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center w-100">
          <div className="row justify-content-center w-100">
            <div className="col-md-8 col-lg-6 col-xxl-3">
              <div className="card mb-0">
                <div className="card-body">
                  <p className="text-center">Login</p>
                  <form onSubmit={onSubmitHandler}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <input 
                        type="email" 
                        onChange={changeHandler} 
                        name="email" 
                        className="form-control" 
                        id="email" 
                        value={data.email}
                        required 
                      />
                      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input 
                        type="password" 
                        onChange={changeHandler} 
                        name="password" 
                        className="form-control" 
                        id="password" 
                        value={data.password}
                        required 
                      />
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
