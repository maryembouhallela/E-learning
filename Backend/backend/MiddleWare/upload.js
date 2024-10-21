const multer=require ('multer');
const storage=multer.diskStorage({
    destination:function(req,file,cb){//call back 
        cb(null,"./Uploads")
    },
    filename:function(req,file,cb){
        const unique=Date.now()+'-'+file.originalname
        cb(null,unique)
    }
}
)
const upload=multer({
    storage:storage,
    fileFilter:(req,file,cb)=>{
        if(file.mimetype==="image/png" || file.mimetype==="image/jpg"||file.mimetype==="image/jpeg"||file.mimetype==="application/pdf"){
            cb(null,true)
    
        }
        else{
            cb(new Error("Fichier incompatible"))
        }


    }
})
module.exports=upload
