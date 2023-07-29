const {Router} = require('express')
const Auth = require('../middleware/Auth')
const { createAnnonces, getAnnonces } = require('../Controllers/AnnoncesCtrl')
const ann = Router()

// Création des annonces
ann.post('/upload', Auth ,createAnnonces)

// Affichage des annonces
ann.get('/affichage',getAnnonces)

module.exports = ann