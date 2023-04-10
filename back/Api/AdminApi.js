const {Router} = require('express')
const Controllers = require('../Controllers/AdminsCtrl')
const admin = Router()

//Creation d'un compte Admin
admin.post('/signIn',Controllers.adminCreateUser)
//Connexion d'un Admin
admin.post('/LogIn',Controllers.adminConnexion)

module.exports = admin