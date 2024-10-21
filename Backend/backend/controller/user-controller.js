const userModel = require('../model/user-model')
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken')
const accessKey =process.env.Rtoken   //hedhom keys
const refreshKey=process.env.Ftoken
const generateaccessToken=(user)=>{
    return jwt.sign({ //token yts3n lena
        id:user.id

    },accessKey,{
        expiresIn:"30m"
    }
)} 
const generateRefreshToken=(user)=>{
    return jwt.sign({ //token yts3n lena
        id:user.id

    },refreshKey,{
        expiresIn:"50m"
    }
)}
let refreshtokens=[] //yaaml refresh kol periode mou3ayna
module.exports={
    LogIn:async (req,res)=>{
        try{
            const user = await userModel.findOne({email:req.body.email})//pointer 3al email ili mawjoud fel user model
            if(!user){
                res.status(400).json({
                    message:'user not found'
                })
            }
            else {
                const pass = await bcrypt.compare(req.body.password,user.password)//pour comparer l pass ili da5altou w il pass ili mawjoud deja fel bd
                if(!pass){
                    res.status(400).json({
                        message:'password incorrecte'
                    })
                }
                else{
                    const accessToken= generatAccessToken(user)
                    const refrechToken=generatRefrechToken(user)
                    refrechtokens.push(refrechToken)
                    res.status(200).json({
                        sucuss:true,
                        message:"identity true",
                        data:user,accessToken:accessToken,refrechToken:refrechToken
                    })
                }
            }
            
            }
            catch{
                res.status(400).json({
                    sucess:false,
                    message:'not',
                    data:null,
                })
            }
    }}