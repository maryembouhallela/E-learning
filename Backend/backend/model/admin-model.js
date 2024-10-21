const mongoose=require ('mongoose');
const userModel =require('./user-model')
const adminSchema= new mongoose.Schema({

})
userModel.discriminator('admin',adminSchema)//bch ysir l heritage m user model 
module.exports=mongoose.model('admin');//nkhaliw ken ref