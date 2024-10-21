const formateurModel=require('../model/formateur-model');
const formation=require('../model/formation-model')
module.exports={
    createFormateur:async(req,res) =>{
        try{
            const formateur=await formateurModel(req.body) //f west fct async mynjm yt3ada ken my9ra ligne hedha 
            await formateur.save();
            const formationIds=req.body.formation
            if(formationIds && formationIds.length>0){
                for (const formationId of formationIds){ //ken id lcours mawjouda fl cours ids wale
                    await formation.findByIdAndUpdate({_id:formationId},
                        {
                            $push:{formateur:formateur} 
                        })
                }
            }
            res.status(200).json({//200 yruni mrgl, 400 le
                success:true,
                message: "created with success",
                data: formateur,


            })

        }
        catch(erreur){
            res.status(400).json ({
            success:false,
            message: "not created"+erreur,
            data: null,
            })//mongodb yekhdm format json
            

        }

    },
    getFormateur:async(req,res) =>{
        try{
            const formateur=await formateurModel.find().populate('formation')
            res.status(200).json({
                success:true,
                message: "fetched with success",
                data: formateur,


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

    
        deleteFormateur:async(req,res) =>{
            try{
                const {id} =req.params;
                const formateur=await formateurModel.findByIdAndDelete(id)
                res.status(200).json({
                    success:true,
                    message:' been deleted',
                    data:formateur,
                })
            }
            catch{
                res.status(400).json({
                    sucess:false,
                    message:'not deleted',
                    data:null,
                })
                }},
            UpdateFormateur: async (req, res) => {
                const { id } = req.params;
                try {
                    const formateur = await formateurModel.findByIdAndUpdate(id, req.body, { new: true });
                    res.status(200).json({
                        success: true,
                        message: ' updated successfully',
                        data: formateur,
                    });
                } catch (error) {
                    res.status(400).json({
                        success: false,
                        message: 'update failed',
                        data: null,
                    });
                }
            }
            }