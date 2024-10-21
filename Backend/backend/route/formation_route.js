const controllerFormation=require ('../controller/formation-controller');
const route=require('express').Router()//jebna router eli f express 
route.post('/add',controllerFormation.createFormation)
route.get('/get',controllerFormation.getFormation)
route.delete('/delete',controllerFormation.deleteFormation)
route.put('/update',controllerFormation.UpdateFormation)//post put get delete ; pointina 3la fonction eli hachetna beha
module.exports =route //controller w mb3d appelle mt3 fcnt b post w twa appelle f server 