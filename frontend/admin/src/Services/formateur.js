import axios from './serviseContexte'
const createFormateur=(data)=>{
    return axios.post('/formateur/add',data)
}
const getFormateur=()=>{
    return axios.get('/formateur/get')
}
const deleteFormateur=(id)=>{
    return axios.delete(`formateur/delete/${id}`)
}
const updateFormateur=(id,data)=>{
    return axios.put(`/formateur/update/${id}`,data)

}
export default{
    createFormateur
    ,getFormateur,
    deleteFormateur
    ,updateFormateur
}