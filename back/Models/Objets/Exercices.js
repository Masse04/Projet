const mongoose = require('mongoose')

let ExercicesSchema = mongoose.Schema({
    titre : {type : String, required : true},
    description : {type : String, required : true},
    classe : {type : String, required : true},
    userId : {type : String, required : true},
    documentUrl : {type : String, required : true},
    genre : {type : String, required : true}
})

module.exports = mongoose.model('Exercices',ExercicesSchema)