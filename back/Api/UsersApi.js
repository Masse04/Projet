const {Router} = require('express')
const Controllers = require('../Controllers/UsersCtrl')
const user = Router()

//Creation d'un compte user
user.post('/signIn',Controllers.CreateUser)
//Connexion d'un user
user.post('/logIn',Controllers.UserConnexion)

module.exports = user