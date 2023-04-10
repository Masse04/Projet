const {Router} = require('express')
const Controllers = require('../Controllers/EtudiantsCtrl')
const etudiant = Router()

//Creation d'un compte Etudiant
etudiant.post('/signIn',Controllers.etudiantCreateUser)
//Connexion d'un Etudiant
etudiant.post('/logIn',Controllers.etudiantConnexion)
module.exports = etudiant