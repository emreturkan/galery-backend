const mongoose = require('mongoose')

const galerySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Galery',galerySchema)