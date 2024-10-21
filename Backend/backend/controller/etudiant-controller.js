const etudiantModel=require('../model/etudiant-model');
const formation=require('../model/formation-model')
module.exports={
    createEtudiant: async (req, res) => {
        try {
            req.body.cv=req.file.filename
            const etudiant = await etudiantModel(req.body); // 'new' keyword is needed to create a new instance
            await etudiant.save();
            const formationIds=req.body.formation
            if(formationIds && formationIds.length>0){
                for (const formationId of formationIds){ //ken id lcours mawjouda fl cours ids wale
                    await formation.findByIdAndUpdate({_id:formationId},
                        {
                            $push:{etudiant:etudiant} //pushi lformation fl cours
                        })
                }
            }
    
            res.status(200).json({
                success: true,
                message: "Student created successfully",
                data: etudiant,
            });
    }
    catch(erreur){
        res.status(400).json ({
        success:false,
        message: "not created"+erreur,
        data: null,
        })//mongodb yekhdm format json
        

    }

},
getEtudiant:async(req,res) =>{
    try{
        const etudiant=await etudiantModel.find()
        res.status(200).json({
            success:true,
            message: "fetched with success",
            data: etudiant,


        })

        }

    
    catch{
        res.status(400).json ({
            success:false,
        message: "not fetched",
        data: null,
        })
        }
        

    },


    deleteEtudiant:async(req,res) =>{
        try{
            const {id} =req.params;
            const etudiant =await etudiantModel.findByIdAndDelete(id)
            res.status(200).json({
                success:true,
                message:'student has been deleted',
                data:etudiant,
            })
        }
        catch{
            res.status(400).json({
                sucess:false,
                message:'not deleted',
                data:null,
            })
            }},
        UpdateEtudiant: async (req, res) => {
            const { id } = req.params;
            try {
                const etudiant = await etudiantModel.findByIdAndUpdate(id, req.body, { new: true });
                res.status(200).json({
                    success: true,
                    message: 'course updated successfully',
                    data: etudiant,
                });
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: 'update failed',
                    data: null,
                });
            }
        }}