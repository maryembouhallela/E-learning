const mongoose=require ('mongoose');
const gallerieSchema=new mongoose.Schema({
    image:{ type:String}
})
const coursSchema= new mongoose.Schema({

    title:{type:String
    },
    description:{type:String
    },
    nombre :{
        type:Number
    },
    gallerie:[gallerieSchema] ,//+eurs file
    formation:{type:mongoose.Types.ObjectId,ref:'formation'}



    
});

module.exports=mongoose.model('cours',coursSchema);
