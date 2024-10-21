const controllerFormateur=require ('../controller/formateur-controller')
const route=require('express').Router()//jebna router eli f express 
route.post('/add',controllerFormateur.createFormateur)//post put get delete ; pointina 3la fonction eli hachetna beha
route.get('/get',controllerFormateur.getFormateur)
route.delete('/delete/:id',controllerFormateur.deleteFormateur)
route.put('/update/:id',controllerFormateur.UpdateFormateur)
module.exports =route //controller w mb3d appelle mt3 fcnt b post w twa appelle f server 