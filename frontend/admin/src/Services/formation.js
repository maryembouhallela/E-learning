import axios from './serviseContexte'
const createFormation=(data)=>{
    return axios.post('/formation/add',data)
}
const getFormation=()=>{
   return axios.get('/formation/get')
}
const deleteFormation=(id)=>{
    return axios.delete(`/formation/delete/${id}`)
}
const updateFormation=(id,data)=>{
    return axios.put(`/formation/update/${id}`,data)

}
export default{
    createFormation
    ,getFormation,
    deleteFormation
    ,updateFormation
}