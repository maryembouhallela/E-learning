import axios from './serviseContexte'
const createEtudiant=(data)=>{
    return axios.post('/etudiant/add',data)
}
const getEtudiant=()=>{
    return axios.get('/etudiant/get')
}
const deleteEtudiant=(id)=>{
    return axios.delete(`etudiant/delete/${id}`)
}
const updateEtudiant=(id,data)=>{
    return axios.put(`/etudiant/update/${id}`,data)

}
export default{
    createEtudiant
    ,getEtudiant,
    deleteEtudiant
    ,updateEtudiant 
}