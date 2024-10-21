import React, { useEffect, useState } from 'react'
import formateur from "../../../Services/formateur"
import formation from '../../../Services/formation'

const AddFormateur = () => {
  const [formationList,setformationList]=useState([])
    const [data,setdata]=useState({
      nom:'',
  prenom:'',
  email:'',
  password:'',
  phone:'',
  specialite:'',
  diplome:'',
  description:'',
  formation:[],
    })
    useEffect(() => {
      formation.getFormation().then((res) => {
        setformationList(res.data.data);
      }).catch((err) => {
        console.log(err);
      });
    }, []);
    
    const ChangeHandler=(e)=>{
      const { name, value } = e.target;
      if (name === 'formation') {
        setdata({ ...data, [name]: [value] }); // Ensure cours is an array
      } else {
        setdata({ ...data, [name]: value });
      }
      console.log(data);
    }
    
      const onSubmitHandler = (e) => {
      e.preventDefault();
      formateur.createFormateur(data).then((res)=>{
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
      
      }

return (
<div>
 <div>
  <div>
    <div className="container-fluid">
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title fw-semibold mb-4">Add Formateur</h5>
            <div className="card">
              <div className="card-body">
                <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleInputTitle1" className="form-label">Name</label>
                    <input onChange={ChangeHandler} name='name' type="text" className="form-control" id="exampleInputName" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={ChangeHandler} name='email' className="form-control" id="exampleInputEmail1"  />
                    <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={ChangeHandler} name='password' className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputTitle1" className="form-label">Phone</label>
                    <input  onChange={ChangeHandler} name='phone' type="number" className="form-control" id="exampleInputPhone" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputTitle1" className="form-label">Specialité</label>
                    <input  onChange={ChangeHandler} name='specialite' type="String" className="form-control" id="exampleInputspecialite" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputDescription1" className="form-label">diplome</label>
                    <input  onChange={ChangeHandler} name='diplome' type="text" className="form-control" id="exampleInputNiveau1" />
                  </div>
                  {/* <div className="mb-3">
                    <label htmlFor="exampleInputImage1" className="form-label">Image</label>
                    <input type="file" name='gallerie' onChange={changeImage} className="form-control" id="exampleInputImage1" multiple/>
                  </div> */}
                  <div className="mb-3">
                    <label htmlFor="exampleInputNombre1" className="form-label">Description</label>
                    <input onChange={ChangeHandler} name='description' type="text" className="form-control" id="exampleInputNombre1" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formation" className="form-label">Formation</label>
                    <select
                      className="form-control"
                      id="formation"
                      name='formation'
                      onChange={ChangeHandler}
                    >
                      <option selected disabled>List des Formations!</option>
                      {formationList.map((formation,index) => {
                        return(
                          <option key={index} value={formation._id}>{formation.title}</option>
                        )
                      }
                      )}
                    </select>
                  </div>
                  {/* <div className="mb-3">
                    <label htmlFor="exampleInputNombre1" className="form-label">Gallerie</label>
                    <input type="String" className="form-control" id="exampleInputNombre1" />
                  </div> */}
                  {/* <div className="mb-3">
                    <label htmlFor="exampleInputNombre1" className="form-label">Formation</label>
                    <input type="text" className="form-control" id="exampleInputNombre1" />
                  </div> */}
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
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

export default AddFormateur
