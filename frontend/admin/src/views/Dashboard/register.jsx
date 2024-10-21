import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import admin from '../../Services/admin';

const Register = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const OnSubmitHandler = (e) => {
    e.preventDefault();
    admin.createAdmin(data).then((res) => {
      console.log(res.data);
      navigate('/login');
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center w-100">
            <div className="row justify-content-center w-100">
              <div className="col-md-8 col-lg-6 col-xxl-3">
                <div className="card mb-0">
                  <div className="card-body">
                    <p className="text-center">Register</p>
                    <form onSubmit={OnSubmitHandler}>
                    <div className="mb-3">
                    <label htmlFor="exampleInputTitle1" className="form-label">Name</label>
                    <input onChange={changeHandler} name='name' type="text" className="form-control" id="exampleInputName" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={changeHandler} name='email' className="form-control" id="exampleInputEmail1"  />
                    <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={changeHandler} name='password' className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputTitle1" className="form-label">Phone</label>
                    <input  onChange={changeHandler} name='phone' type="number" className="form-control" id="exampleInputPhone" />
                  </div>
                      <button type="submit">Register</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
