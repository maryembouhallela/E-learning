import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import etudiant from '../../Servises/etudiant';

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    niveau: '',
    cv: null,  // Initialize cv as null for file handling
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setData({
        ...data,
        [name]: files[0],  // Handle file input
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    // Create a FormData object to handle the file upload along with other data
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('phone', data.phone);
    formData.append('niveau', data.niveau);
    formData.append('cv', data.cv);

    etudiant.createEtudiant(formData).then((res) => {
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
                    <form onSubmit={onSubmitHandler}>
                      <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                        <input onChange={changeHandler} name='name' type="text" className="form-control" id="exampleInputName" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" onChange={changeHandler} name='email' className="form-control" id="exampleInputEmail1" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onChange={changeHandler} name='password' className="form-control" id="exampleInputPassword1" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                        <input onChange={changeHandler} name='phone' type="number" className="form-control" id="exampleInputPhone" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputCV" className="form-label">CV</label>
                        <input onChange={changeHandler} name='cv' type="file" className="form-control" id="exampleInputCV" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputNiveau" className="form-label">Niveau</label>
                        <input onChange={changeHandler} name='niveau' type="text" className="form-control" id="exampleInputNiveau" />
                      </div>
                      <button type="submit" className="btn btn-primary">Register</button>
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
