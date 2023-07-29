const mongoose = require('mongoose')

let AnnoncesSchema = mongoose.Schema({
    titre : {type : String, required : true},
    description : {type : String, required : true},
    userId : {type : String, required : true}
})

module.exports = mongoose.model('Annonces', AnnoncesSchema)