
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import user from '../../Services/user';

const Loginn = () => {
    const [data, setData] = useState({});
    const navigate=useNavigate()
    const changeHandler = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
      };
      const OnSubmitHandler = (e) => {
        e.preventDefault();  
        user.LogIn(data).then((res)=>{
          localStorage.setItem("user",JSON.stringify(res.data))
            console.log(res.data)
            navigate('/')
         }).catch((err)=>{
            console.log(err)
         })
      }
    
  return (
 <div>
  <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
    <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-6 col-xxl-3">
            <div className="card mb-0">
              <div className="card-body">
               
                <p className="text-center">Login</p>
                <form onSubmit={OnSubmitHandler}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">email</label>
                    <input type="email" onChange={changeHandler} name='email' placeholder='Email' value={data.email}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" placeholder='Mot de passe' onChange={changeHandler} value={data.password} name='password' className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="form-check">
                      <input className="form-check-input primary" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                      <label className="form-check-label text-dark" htmlFor="flexCheckChecked">
                        Remeber this Device
                      </label>
                    </div>
                    <a className="text-primary fw-bold" href="/forget">Forgot Password ?</a>
                  </div>
                  <button type='submit'>Sign In</button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Loginn
