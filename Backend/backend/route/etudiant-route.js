const controllerEtudiant=require ('../controller/etudiant-controller')
const upload = require('../MiddleWare/upload')
const route=require('express').Router()//jebna router eli f express 
route.post('/add',upload.single('cv'),controllerEtudiant.createEtudiant)//post put get delete ; pointina 3la fonction eli hachetna beha
route.get('/get',controllerEtudiant.getEtudiant)
route.delete('/delete/:id',controllerEtudiant.deleteEtudiant)
route.put('/update/:id',controllerEtudiant.UpdateEtudiant)
module.exports =route //controller w mb3d appelle mt3 fcnt b post w twa appelle f server 