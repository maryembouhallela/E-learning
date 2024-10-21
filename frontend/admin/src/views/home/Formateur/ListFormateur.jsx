import React, { useEffect, useState } from 'react'
import formateur from '../../../Services/formateur'
import { Link } from 'react-router-dom'

const ListFormateur = () => {
    const [data,setdata]=useState([])

    const notification=()=>{
        formateur.getFormateur().then((res)=>{
            setdata(res.data.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
        }
        useEffect(()=>{
            notification()
        },[]);
        const Delete=(id)=>{
            formateur.deleteFormateur(id).then((res)=>{
                notification()
               
            })
            .catch((err)=>{
                console.log(err)
    
            })}


  return (
    <div>
    <div class="table-responsive">
      
             <table class="table text-nowrap mb-0 align-middle">
               <thead class="text-dark fs-4">
                 <tr>
                 <th class="border-bottom-0">
                     <h6 class="fw-semibold mb-0">num</h6>
                   </th>
                   <th class="border-bottom-0">
                     <h6 class="fw-semibold mb-0">Name</h6>
                   </th>
                   <th class="border-bottom-0">
                   Email                   </th>
                   <th class="border-bottom-0">
                     <h6 class="fw-semibold mb-0">password</h6>
                   </th>
                   <th class="border-bottom-0">
                     <h6 class="fw-semibold mb-0">Phone</h6>
                   </th>
                   <th class="border-bottom-0">
                     <h6 class="fw-semibold mb-0">Specialite</h6>
                   </th>
                   <th class="border-bottom-0">
                     <h6 class="fw-semibold mb-0">diplome</h6>
                   </th>
                   <th class="border-bottom-0">
                     <h6 class="fw-semibold mb-0">Description</h6>
                   </th>
                   <th class="border-bottom-0">
                     <h6 class="fw-semibold mb-0">Formation</h6>
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
                      <div class="d-flex align-items-center gap-2">
                        <span class="badge bg-primary rounded-3 fw-semibold">{item.name}</span>
                      </div>
                    </td>
                    
                    <td class="border-bottom-0">
                      <div class="d-flex align-items-center gap-2">
                        <span class="badge bg-primary rounded-3 fw-semibold">{item.email}</span>
                      </div>
                    </td>
                    <td class="border-bottom-0">
                      <div class="d-flex align-items-center gap-2">
                        <span class="badge bg-primary rounded-3 fw-semibold">{item.password}</span>
                      </div>
                    </td>
                   
                    <td class="border-bottom-0">
                      <div class="d-flex align-items-center gap-2">
                        <span class="badge bg-primary rounded-3 fw-semibold">{item.phone}</span>
                      </div>

                    </td>
                    <td class="border-bottom-0">
                      <div class="d-flex align-items-center gap-2">
                        <span class="badge bg-primary rounded-3 fw-semibold">{item.specialite}</span>
                      </div>
                    </td>
                    <td class="border-bottom-0">
                      <div class="d-flex align-items-center gap-2">
                        <span class="badge bg-primary rounded-3 fw-semibold">{item.diplome}</span>
                      </div>
                    </td>
                    <td class="border-bottom-0">
                      <div class="d-flex align-items-center gap-2">
                        <span class="badge bg-primary rounded-3 fw-semibold">{item.description}</span>
                      </div>
                    </td>
                    <td className="border-bottom-0">
                  <ul className="mb-0 fw-normal">
                    {item.formation.map((formation, index) => (
                      <li key={index}>
                        <p>{formation.title}</p>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="border-bottom-0">
                                    <button className="btn btn-danger" onClick={() => Delete(item._id)}>Delete</button>
                                    
                                 </td>
                                 <td className="border-bottom-0">
                                 <Link to={`/updateFormateur/${item._id}`} >
                                 <button className='btn btn-danger' >Update</button></Link>
                                 </td>
                               
                  </tr>  )
                })}              
               </tbody>
             </table>
           </div>
 
</div>
  )
}

export default ListFormateur
