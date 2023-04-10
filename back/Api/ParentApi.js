const {Router} = require('express')
const Controllers = require('../Controllers/ParentsCtrl')
const parent = Router()

//Creation d'un compte Parent
parent.post('/signIn',Controllers.parentCreateUser)

//Connexion d'un Parent
parent.post('/logIn',Controllers.parentConnexion)
module.exports = parent