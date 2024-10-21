import React, { useState } from 'react'
import formateur from '../../../Services/formateur';
import { useParams } from 'react-router-dom';

const UpdateFormateur = () => {
    const [data,setdata]=useState({})
    const {id}=useParams()
    const changeHandler = (e) => {
        setdata({
          ...data,
          [e.target.name]: e.target.value,
        });
      };
    
      const onSubmitHandler = (e) => {
      e.preventDefault();
      formateur.updateFormateur(id,data).then((res)=>{
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
               <h5 className="card-title fw-semibold mb-4">Update Formateur</h5>
               <div className="card">
                 <div className="card-body">
                   <form onSubmit={onSubmitHandler}>
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
                       <label htmlFor="exampleInputTitle1" className="form-label">Specialité</label>
                       <input  onChange={changeHandler} name='specialite' type="text" className="form-control" id="exampleInputspecialite" />
                     </div>
                     <div className="mb-3">
                       <label htmlFor="exampleInputDescription1" className="form-label">diplome</label>
                       <input  onChange={changeHandler} name='diplome' type="text" className="form-control" id="exampleInputNiveau1" />
                     </div>
                     {/* <div className="mb-3">
                       <label htmlFor="exampleInputImage1" className="form-label">Image</label>
                       <input type="file" name='gallerie' onChange={changeImage} className="form-control" id="exampleInputImage1" multiple/>
                     </div> */}
                     <div className="mb-3">
                       <label htmlFor="exampleInputNombre1" className="form-label">Description</label>
                       <input onChange={changeHandler} name='description' type="text" className="form-control" id="exampleInputNombre1" />
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

export default UpdateFormateur
