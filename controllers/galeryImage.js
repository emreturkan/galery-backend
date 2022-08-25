
const cloudinary = require('cloudinary').v2



const updateImage = async(req,res)=>{
    
        const result = await cloudinary.uploader.upload(req.files.image.tempFilePath,{
            use_filename:true,
            folder:'file-upload'
        })
        return res.status(200).json({image:{src:result.secure_url}})
 
}

module.exports = {updateImage}