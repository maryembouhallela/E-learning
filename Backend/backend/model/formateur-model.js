const mongoose=require ('mongoose');
const userModel=require('./user-model')
const formateurSchema= new mongoose.Schema({
specialite:{type:String},
diplome:{type:String},
description:{type:String},
formation:[{type:mongoose.Types.ObjectId,ref:'formation'}]
});
userModel.discriminator('formateur',formateurSchema)//bch ysir l heritage m user model 
module.exports=mongoose.model('formateur');//nkhaliw ken ref

// jwt authentification