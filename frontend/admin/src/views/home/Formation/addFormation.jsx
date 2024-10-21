import React, { useEffect, useState } from 'react';
import formation from "../../../Services/formation"
import cours from '../../../Services/cours';

const AddFormation = () => {
  
  const [data, setData] = useState({
    num:'',
    title:'',
      description:'',
      date_debut:'',
      date_fin:'',
      cours:[],
  });
  const[coursOptions,setCours]=useState([]);
  useEffect(() => {
    cours.getCours().then((res) => {
      setCours(res.data.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const ChangeHandler=(e)=>{
    const { name, value } = e.target;
    if (name === 'cours') {
      setData({ ...data, [name]: [value] }); // Ensure cours is an array
    } else {
      setData({ ...data, [name]: value });
    }
    console.log(data);
  }

  const onSubmitHandler = (e) => {
  e.preventDefault();

  formation.createFormation(data)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title fw-semibold mb-4">Add Formation</h5>
          <div className="card">
            <div className="card-body">
              <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input
                    onChange={ChangeHandler}
                    name="title"
                    type="text"
                    className="form-control"
                    id="title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input
                    onChange={ChangeHandler}
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
                    onChange={ChangeHandler}
                    className="form-control"
                    id="date_debut"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date_fin" className="form-label">Date Fin</label>
                  <input
                    onChange={ChangeHandler}
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
                <div className="mb-3">
                    <label htmlFor="cours" className="form-label">Cours</label>
                    <select
                      className="form-control"
                      id="cours"
                      name='cours'
                      onChange={ChangeHandler}
                    >
                      <option selected disabled>here are the courses!</option>
                      {coursOptions.map((cours,index) => {
                        return(
                          <option key={index} value={cours._id}>{cours.title}</option>
                        )
                      }
                      )}
                    </select>
                  </div>
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
  );
};

export default AddFormation;
