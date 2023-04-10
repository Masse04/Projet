const mongoose = require('mongoose')
const validator = require('validator')
let Parents = mongoose.Schema({
    nom : {
        type : String,
        require : true
    },
    prenom : {
        type : String,
        require : true
    },
    username : {
        type : String,
        require : true,
        unique : true
    },
    password : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
        lowercase : true
        /* validate : (value) => {
            return validator.isEmail(value)
        } */
    },
    telephone : String,
    adresse : String,
    sexe : String,
    cin : String,
    birthday : Date,
    profession : String
})
module.exports = mongoose.model('Parents',Parents)