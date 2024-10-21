const controllerCours=require ('../controller/cours-controller')
const upload = require('../MiddleWare/upload')
const route=require('express').Router()//jebna router eli f express 
route.post('/add',upload.array('image'),controllerCours.createCours)//post put get delete ; pointina 3la fonction eli hachetna beha
route.get('/get',controllerCours.getCours)
route.delete('/delete/:id',controllerCours.deleteCours)
route.put('/update/:id',controllerCours.UpdateCours)
module.exports =route //controller w mb3d appelle mt3 fcnt b post w twa appelle f server 
