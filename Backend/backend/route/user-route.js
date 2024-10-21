const controllerUser=require('../controller/user-controller')
const route=require('express').Router()
route.post('/login',controllerUser.LogIn)
module.exports =route