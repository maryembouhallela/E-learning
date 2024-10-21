import React, { useEffect, useState } from 'react'
import formation from '../../../Services/formation'
import { Link } from 'react-router-dom'
const ListFormations = () => {
  const [data,setdata]=useState([])
  const notification=()=>{
    formation.getFormation().then((res)=>{
      setdata(res.data.data)
      console.log(res.data);
    }
  )
  .catch((err)=>{
    console.log(err)
  })
  }
  useEffect(()=>{
    notification()
  },[]);
    const Delete=(id)=>{
      formation.deleteFormation(id).then(()=>{
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
                     <h6 class="fw-semibold mb-0">Title</h6>
                   </th>
                   <th class="border-bottom-0">
                     <h6 class="fw-semibold mb-0">Description</h6>
                   </th>
                   <th class="border-bottom-0">
                   date_debut                   </th>
                   <th class="border-bottom-0">
                     <h6 class="fw-semibold mb-0">date_fin</h6>
                   </th>
                   <th class="border-bottom-0">
                     <h6 class="fw-semibold mb-0">courses</h6>
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
                        <h6 class="fw-semibold mb-1">{item.description}</h6>
                    </td>
                    <td class="border-bottom-0">
                      <div class="d-flex align-items-center gap-2">
                        <span class="badge bg-primary rounded-3 fw-semibold">{item.date_debut}</span>
                      </div>
                    </td>
                    <td className="border-bottom-0">
                      <div class="d-flex align-items-center gap-2">
                        <span class="badge bg-primary rounded-3 fw-semibold">{item.date_fin}</span>
                      </div>
                      </td>
                      <td className="border-bottom-0">
                  <ul>
                {item.cours.map((cours, index) => (
                      <li key={index}>
                        <p>{cours.title}</p>
                      </li>
                    ))}
                    </ul>
                </td>
                  
              
                
                    
                    <td className="border-bottom-0">
                                    <button className="btn btn-danger" onClick={() => Delete(item._id)}>Delete</button>
                                    
                                 </td>
                                 <td className="border-bottom-0">
                                 <Link to={`/updateFormation/${item._id}`} >
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

export default ListFormations
