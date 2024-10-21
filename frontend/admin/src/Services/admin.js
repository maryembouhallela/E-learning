import axios from './serviseContexte'
const createAdmin=(data)=>{
    return axios.post('/admin/add',data)
}
export default{
    createAdmin
}