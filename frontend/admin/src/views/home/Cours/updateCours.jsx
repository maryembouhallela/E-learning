import React, { useState } from 'react';
import cours from '../../../Services/cours';
import { useParams } from 'react-router-dom';

const UpdateCours = () => {
  const [data, setdata] = useState({});
  const [gal, setGal] = useState([]);
const {id}=useParams()
  const changeHandler = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const changeImage = (e) => {
    setGal(e.target.files);
  };

  const OnSubmitHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", data.title);
    formdata.append("description", data.description);
    formdata.append("nombre", data.nombre);
    for (let i=0;i<=gal.length;i++){

      formdata.append("image", gal[i]);
    }

    cours.updateCours(id, formdata).then((res) => {
    
    console.log(res.data)
     
    }).catch((err) => {
      console.log(err);
     
    });
  };

  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title fw-semibold mb-4">Update Course</h5>
          <form onSubmit={OnSubmitHandler}>
            <div className="mb-3">
              <label htmlFor="exampleInputTitle1" className="form-label">Title</label>
              <input onChange={changeHandler} name="title" type="text" className="form-control" id="exampleInputTitle1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputDescription1" className="form-label">Description</label>
              <input onChange={changeHandler} name="description" type="text" className="form-control" id="exampleInputDescription1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputImage1" className="form-label">Image</label>
              <input type="file" name="gallerie" onChange={changeImage} className="form-control" id="exampleInputImage1" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputNombre1" className="form-label">Nombre</label>
              <input onChange={changeHandler} name="nombre" type="number" className="form-control" id="exampleInputNombre1" />
            </div>
            <button type="submit"  className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCours;