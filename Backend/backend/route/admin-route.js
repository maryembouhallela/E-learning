const controllerAdmin =require ('../controller/admin-controller')
const route=require('express').Router()//jebna router eli f express 
route.post('/add',controllerAdmin.createAdmin)//post put get delete ; pointina 3la fonction eli hachetna beha
module.exports =route 