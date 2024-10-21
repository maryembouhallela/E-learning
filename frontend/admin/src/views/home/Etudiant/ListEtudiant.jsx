import React, { useEffect, useState } from 'react'
import etudiant from '../../../Services/etudiant'
import { Link } from 'react-router-dom'


const ListEtudiant = () => {
    const [data,setdata]=useState([])
    const notification=()=>{
        etudiant.getEtudiant().then((res)=>{
            setdata(res.data.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)

        })
    }
    useEffect(()=>{
        notification()
    },[])

    const Delete=(id)=>{
        etudiant.deleteEtudiant(id).then((res)=>{
            notification()
           
        })
        .catch((err)=>{
            console.log(err)

        })
    }
   
  return (
    <div>
        <div>
        <h5 class="card-title fw-semibold mb-4">Liste Etudiant</h5>
         <div class="table-responsive">
                  <table class="table text-nowrap mb-0 align-middle">
                    
                    <thead class="text-dark fs-4">
                      <tr>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">num</h6>
                        </th>
                    
                      <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">name</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">email</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">password</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">phone</h6>
                        </th>
                        
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">CV</h6>
                        </th>
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">niveau</h6>
                        </th>
                      
                        <th class="border-bottom-0">
                          <h6 class="fw-semibold mb-0">formation</h6>
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
                                    <h6 class="fw-semibold mb-1">{item.name}</h6>
                                </td>
                                <td class="border-bottom-0">
                                  <p class="mb-0 fw-normal">{item.email}</p>
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
                                <td className="border-bottom-0">
                    <Link to={"http://localhost:3000/"+item.cv} target="_blank" rel="noopener noreferrer">
                    Download CV
                    </Link>
                                </td>
                                <td class="border-bottom-0">
                                  <div class="d-flex align-items-center gap-2">
                                    <span class="badge bg-primary rounded-3 fw-semibold">{item.niveau}</span>
                                  </div>
                                </td>
                                <td className="border-bottom-0">
                  <ul >
                    {item.formation.map((formation, index) => (
                      <li key={index}>
                        <p>{formation.title}</p>
                      </li>
                    ))}
                  </ul>
                </td>

                     <td className='border-bottom-0' >
                            <button className='btn btn-danger' onClick={()=>Delete(item._id)}>Delete</button>
                                    </td>
                                    <td> <Link to={`/updateEtudiant/${item._id}`} >
                                    <button className='btn btn-danger' >Update</button></Link></td>
                                   
                              
                               
                              </tr> 
                            )
                        })}
                     
                                         
                    </tbody>
                  </table>
                </div>
      
    </div>
        
      
    </div>
  )
}

export default ListEtudiant
