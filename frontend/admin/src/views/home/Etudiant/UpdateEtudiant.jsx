import React, { useState } from 'react'
import etudiant from '../../../Services/etudiant';
import { useParams } from 'react-router-dom';

const UpdateEtudiant = () => {
    const [data,setdata]=useState({});
 const [gal,setgal]=useState([])  
 const {id}=useParams()
 const changeHandler=(e)=>{  //te5ou set data 
  setdata({
    ...data, //data tekhoha akther mn marra 
    [e.target.name]:e.target.value //yahbet lchaque input ythabet m propriete name mte3ha (e.tar.name) + yekhou lvaleur mt3 input heka (e.target.value)
  });
};
const changeImage = (e) => {
  setgal([
    ...gal,
    e.target.files[0]]);
};

  const OnSubmitHandler=(e)=>{
    e.preventDefault();
    const formdata=new FormData()
    formdata.append("name",data.name)
    formdata.append("email",data.email)
    formdata.append("password",data.password)
    formdata.append("phone",data.phone)
    formdata.append('cv',gal[0])
   
    formdata.append("niveau",data.niveau)
    formdata.append("nombre",data.nombre)
    etudiant.updateEtudiant(id, formdata).then((res) => {
        console.log(res.data)
         
        }).catch((err) => {
          console.log(err);
         
        });
      };
    

  return (
    <div>
         <div>
         <div>
  <div>
    <div className="container-fluid">
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title fw-semibold mb-4">Add Etudiant</h5>
            <div className="card">
              <div className="card-body">
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
                  <div className="mb-3">
                    <label htmlFor="exampleInputTitle1" className="form-label">CV</label>
                    <input  onChange={changeImage} name='cv' type="file" className="form-control" id="exampleInputCv" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputDescription1" className="form-label">niveau</label>
                    <input  onChange={changeHandler} name='niveau' type="text" className="form-control" id="exampleInputNiveau1" />
                  </div>
                  {/* <div className="mb-3">
                    <label htmlFor="exampleInputImage1" className="form-label">Image</label>
                    <input type="file" name='gallerie' onChange={changeImage} className="form-control" id="exampleInputImage1" multiple/>
                  </div> */}
                  <div className="mb-3">
                    <label htmlFor="exampleInputNombre1" className="form-label">Nombre</label>
                    <input onChange={changeHandler} name='nombre' type="number" className="form-control" id="exampleInputNombre1" />
                  </div>
                  {/* <div className="mb-3">
                    <label htmlFor="exampleInputNombre1" className="form-label">Gallerie</label>
                    <input type="String" className="form-control" id="exampleInputNombre1" />
                  </div> */}
                  {/* <div className="mb-3">
                    <label htmlFor="exampleInputNombre1" className="form-label">Formation</label>
                    <input type="text" className="form-control" id="exampleInputNombre1" />
                  </div> */}
                  
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
      
    </div>
  )
}

export default UpdateEtudiant
