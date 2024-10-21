const mongoose=require ('mongoose');
const formationSchema= new mongoose.Schema({
    
title:{type:String},
description:{type:String},
date_debut:{type:Date},
date_fin:{type:Date},
cours:[{type:mongoose.Types.ObjectId,ref:'cours'}],
etudiant:[{type:mongoose.Types.ObjectId,ref:'etudiant'}],
formateur:{type:mongoose.Types.ObjectId,ref:'formateur'}});

module.exports=mongoose.model('formation',formationSchema);