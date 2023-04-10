const mongoose = require('mongoose')
const validator = require('validator')
let Admins = mongoose.Schema({
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
        /*validate : (value) => {
            return validator.isEmail(value)
        }*/
    },
    telephone : String,
    adresse : String,
    sexe : String,
    cin : String,
    poste : String,
    birthday : Date
})
module.exports = mongoose.model('Admins',Admins)