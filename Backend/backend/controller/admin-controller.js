const adminModel=require('../model/admin-model');
module.exports={
    createAdmin:async(req,res) =>{
        try{
            const admin=await adminModel(req.body)
            await admin.save();
            res.status(200).json({
                success:true,
                message: "admin created with success",
                data: admin,


            })

        }
        catch(erreur){
            res.status(400).json ({
            success:false,
            message: "not created"+erreur,
            data: null,
            })
            

        }

    },
    getAdmin:async(req,res) =>{
        try{

        }
        catch{

        }

    },
}