const {Router} = require('express')
const prof = Router()
const Controllers = require('../Controllers/ProfsCtrl')

//Creation d'un compte Prof
prof.post('/signIn',Controllers.profCreateUser)

//Connexion d'un Prof
prof.post('/logIn',Controllers.profConnexion)
module.exports = prof