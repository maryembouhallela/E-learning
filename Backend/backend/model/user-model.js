const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
const options={discriminatorkey: 'itemtype', collection: 'items'}//classe parent 3ndou lcollection
const userSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String },
    phone:{type:Number}
},options);


//bcrypt method
userSchema.pre('save', async function (next) { if (!this.isModified('password')) return next(); const salt = await bcrypt.genSalt(10); this.password = await bcrypt.hash(this.password, salt); next(); });

const user=mongoose.model('user',userSchema);
module.exports=user;
