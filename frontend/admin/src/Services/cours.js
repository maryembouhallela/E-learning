import axios from './serviseContexte'
const createCours=(data)=>{
    return axios.post('/cours/add', data)
}
const getCours=()=>{
    return axios.get('/cours/get')
}
const deleteCours=(id)=>{
    return axios.delete(`cours/delete/${id}`)
}
const updateCours=(id,data)=>{
    return axios.put(`/cours/update/${id}`,data)

}
export default{
    createCours
    ,getCours,
    updateCours
    ,deleteCours
}