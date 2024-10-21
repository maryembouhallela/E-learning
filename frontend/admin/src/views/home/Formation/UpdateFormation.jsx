import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import formation from '../../../Services/formation';

const UpdateFormation = () => {
    const [data, setData] = useState({});
    const {id}=useParams()

    const changeHandler = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    };
  
    const onSubmitHandler = (e) => {
    e.preventDefault();
  
    formation.updateFormation(id,data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-fluid">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title fw-semibold mb-4">Update Formation</h5>
        <div className="card">
          <div className="card-body">
            <form onSubmit={onSubmitHandler}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  onChange={changeHandler}
                  name="title"
                  type="text"
                  className="form-control"
                  id="title"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input
                  onChange={changeHandler}
                  name="description"
                  type="text"
                  className="form-control"
                  id="description"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date_debut" className="form-label">Date Debut</label>
                <input
                  type="date"
                  name="date_debut"
                  onChange={changeHandler}
                  className="form-control"
                  id="date_debut"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date_fin" className="form-label">Date Fin</label>
                <input
                  onChange={changeHandler}
                  name="date_fin"
                  type="date"
                  className="form-control"
                  id="date_fin"
                />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="cours" className="form-label">Cours</label>
                <input
                  type="text"
                  name="cours"
                  onChange={changeHandler}
                  className="form-control"
                  id="cours"
                />
              </div> */}
              {/* <div className="mb-3">
                <label htmlFor="etudiant" className="form-label">Etudiant</label>
                <input
                  type="text"
                  name="etudiant"
                  onChange={changeHandler}
                  className="form-control"
                  id="etudiant"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formateur" className="form-label">Formateur</label>
                <input
                  type="text"
                  name="formateur"
                  onChange={changeHandler}
                  className="form-control"
                  id="formateur"
                />
              </div> */}
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
         ²     </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UpdateFormation
