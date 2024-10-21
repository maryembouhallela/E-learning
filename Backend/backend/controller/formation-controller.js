const formationModel=require('../model/formation-model')//accee llmodele mt3 formation
const cours=require('../model/cours-model')
module.exports={
    createFormation:async(req,res) =>{
        try{
            const formation=await formationModel(req.body) //f west fct async mynjm yt3ada ken my9ra ligne hedha 
            await formation.save();
            //lena pushina cours fl formation
            const coursIds=req.body.cours
            if(coursIds && coursIds.length>0){
                for (const coursId of coursIds){ //ken id lcours mawjouda fl cours ids wale
                    await cours.findByIdAndUpdate({_id:coursId},
                        {
                            $push:{formation:formation} //pushi lformation fl cours
                        })
                }
            }
            res.status(200).json({//200 yruni mrgl, 400 le
                success:true,
                message: "formation created with success",
                data: formation,


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
    getFormation:async(req,res) =>{
        try{
            const formation=await formationModel.find().populate('etudiant').populate('formateur');
            res.status(200).json({
                success:true,
                message: "fetched with success",
                data: formation,


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

    
        deleteFormation:async(req,res) =>{
            try{
                const {id} =req.params;
                const formation=await formationModel.findByIdAndDelete(id)
                res.status(200).json({
                    success:true,
                    message:'formation has been deleted',
                    data:formation,
                })
            }
            catch{
                res.status(400).json({
                    sucess:false,
                    message:'not deleted',
                    data:null,
                })
                }},
            UpdateFormation: async (req, res) => {
                const { id } = req.params;
                try {
                    const formation = await formationModel.findByIdAndUpdate(id, req.body, { new: true });
                    res.status(200).json({
                        success: true,
                        message: 'formation updated successfully',
                        data: formation,
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