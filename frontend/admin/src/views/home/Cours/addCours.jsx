import React, { useState } from 'react'
import cours from '../../../Services/cours'

const AddCours = () => {
  const [data,setdata]=useState({})  //kol m3ana notification f donnes mte3na nst3lou state
  const [gal,setgal]=useState([])  

  const changeHandler=(e)=>{  //te5ou set data 
    setdata({
      ...data, //data tekhoha akther mn marra 
      [e.target.name]:e.target.value //yahbet lchaque input ythabet m propriete name mte3ha (e.tar.name) + yekhou lvaleur mt3 input heka (e.target.value)


    })
  }
  const changeImage=(e)=>{
    setgal(
      e.target.files)

  }
  const OnSubmitHandler=(e)=>{
    e.preventDefault()  //ken mn7otouch donnes yet7atou f link lfou9 
    const formdata=new FormData()
    formdata.append("title",data.title)
    formdata.append("description",data.description)
    formdata.append("nombre",data.nombre)
   
    for(let i=0;i<=gal.length;i++){
      formdata.append("image",gal[i])
    }
    
    cours.createCours(formdata).then((res)=>{   
      console.log(res.data)
    }
  ).catch((err)=>{
    console.log(err)
  })

  }
  return (
    <div>
  <div>
    <div className="container-fluid">
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title fw-semibold mb-4">Forms</h5>
            <div className="card">
              <div className="card-body">
                <form onSubmit={OnSubmitHandler}>
                  {/* <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div> */}
                  <div className="mb-3">
                    <label htmlFor="exampleInputTitle1" className="form-label">Title</label>
                    <input  onChange={changeHandler} name='title' type="String" className="form-control" id="exampleInputTitle1" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputDescription1" className="form-label">Description</label>
                    <input  onChange={changeHandler} name='description' type="String" className="form-control" id="exampleInputDescription1" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputImage1" className="form-label">Image</label>
                    <input type="file" name='gallerie' onChange={changeImage} className="form-control" id="exampleInputImage1" multiple/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputNombre1" className="form-label">Nombre</label>
                    <input onChange={changeHandler} name='nombre' type="Number" className="form-control" id="exampleInputNombre1" />
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
  )
}

export default AddCours
