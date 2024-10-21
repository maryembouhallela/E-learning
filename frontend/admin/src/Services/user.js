import axios from './serviseContexte'
const LogIn=(data)=>{
    return axios.post('/user/login',data)
}
const ForgetPassword=(data)=>{
    return axios.post('/user/forget',data)
}
const ResetPassword=(data,token)=>{
    return axios.post(`user/reset/${token}`,data)
}
export default{
    LogIn
    ,ForgetPassword,
    ResetPassword
}