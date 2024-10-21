const coursModel=require('../model/cours-model')                          //accee llmodele
module.exports={
    createCours:async(req,res) =>{
        try{
            req.body['gallerie']=req.files.length<=0
            ?[]  //if tab vide
            :req.files.map((file)=>{ //:else
                return {image:file.filename}
            })
        const cours=await coursModel(req.body) //f west fct async mynjm yt3ada ken my9ra ligne hedha 
            await cours.save();
            res.status(200).json({//200 yruni mrgl, 400 le
                success:true,
                message: "created with success",
                data: cours,


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
    getCours:async(req,res) =>{
        try{
            // const cours=await coursModel.find().populate('formation','title') // lena yaffichi ken title 
            const cours=await coursModel.find().populate('formation')
            res.status(200).json({
                success:true,
                message: "fetched with success",
                data: cours,


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

    
        deleteCours:async(req,res) =>{
            try{
                const {id} =req.params;
                const cours=await coursModel.findByIdAndDelete(id)
                res.status(200).json({
                    success:true,
                    message:'course has been deleted',
                    data:cours,
                })
            }
            catch{
                res.status(400).json({
                    sucess:false,
                    message:'not deleted',
                    data:null,
                })
                }},
            UpdateCours: async (req, res) => {
                const { id } = req.params;
                try {
                    const cours = await coursModel.findByIdAndUpdate(id, req.body, { new: true });
                    res.status(200).json({
                        success: true,
                        message: 'course updated successfully',
                        data: cours,
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