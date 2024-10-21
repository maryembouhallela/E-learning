const mongoose=require ('mongoose');
const userModel =require('./user-model')
const etudiantSchema= new mongoose.Schema({
    cv:{type:String},
niveau:{type:String},
formation:[{type:mongoose.Types.ObjectId,ref:'formation'}]});

userModel.discriminator('etudiant',etudiantSchema)//bch ysir l heritage m user model 
module.exports=mongoose.model('etudiant');//nkhaliw ken ref
