import React, { useEffect, useState } from 'react'
import cours from '../../../Services/cours';
import { Link } from 'react-router-dom';
const GetCours = () => {
    const [data,setdata]=useState([])
    const notification = () => {
        
        cours.getCours().then((res) => {
        setdata(res.data.data)
        console.log(res.data);
      })
          .catch((err) => {
            console.log(err);
          });
      }
      useEffect(() => {
        notification()
      },[]);
      const Delete=(id)=>{
        cours.deleteCours(id).then((res)=>{
            notification()
           
        })
        .catch((err)=>{
            console.log(err)

        })}
  return (
    <div>
        <h5 class="card-title fw-semibold mb-4">Liste Cours</h5>
         <div class="table-responsive">
                  <table class="table text-nowrap mb-0 align-middle">
                    
                    <thead class="text-dark fs-4">
                      <tr>
                      <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Num</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Title</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Description</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Nombre</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">Gallerie</h6>
                        </th>
                        <th class="border-bottom-0">
                     <h6 class="fw-semibold mb-0">delete</h6>
                   </th>
                   <th class="border-bottom-0">
                     <h6 class="fw-semibold mb-0">update</h6>
                   </th>
                       
                        
                      </tr>
                    </thead>
                    <tbody>
                        {data?.map((item,index)=>{
                            return(
                                <tr>
                                <td class="border-bottom-0"><h6 class="fw-semibold mb-0">{index}</h6></td>
                                <td class="border-bottom-0">
                                    <h6 class="fw-semibold mb-1">{item.title}</h6>
                                </td>
                                <td class="border-bottom-0">
                                  <p class="mb-0 fw-normal">{item.description}</p>
                                </td>
                                <td class="border-bottom-0">
                                  <div class="d-flex align-items-center gap-2">
                                    <span class="badge bg-primary rounded-3 fw-semibold">{item.nombre}</span>
                                  </div>
                                </td>
                                <td>
                               
                                {
                                  item.gallerie.map((i)=>{
                                    return(
                                    <td  class="border-bottom-0" >
                                      <img src={'http://localhost:3000/'+i.image} alt='' width={100} height={100}></img>
                                    </td>)
                                  })
                                }
                                </td>
                                <td className="border-bottom-0">
                                    <button className="btn btn-danger" onClick={() => Delete(item._id)}>Delete</button>
                                    
                                 </td>
                                 <td className="border-bottom-0">
                                 <Link to={`/updateCours/${item._id}`} >
                                 <button className='btn btn-danger' >Update</button></Link>
                                 </td>
                               
                    
                              </tr> 
                            )
                        })}
                     
                                         
                    </tbody>
                  </table>
                </div>
      
    </div>
  )
}

export default GetCours
