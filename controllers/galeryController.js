const galerySchema = require('../models/galerySchema.js')
const cloudinary = require('cloudinary').v2

const createGalery = async(req,res)=>{
    const galery = await galerySchema.create(req.body)
    res.status(201).json({galery})
}

const getAllGalery = async(req,res)=>{
    const galery = await galerySchema.find({})
    res.status(200).json({galery})
}


module.exports = {createGalery,getAllGalery}