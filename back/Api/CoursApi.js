const {Router} = require('express')
const { createCours, getCours } = require('../Controllers/CoursCtrl')
const multer = require('../middleware/multer')
const Auth = require('../middleware/Auth')
const doc = Router()



doc.post('/upload', Auth, multer , createCours)
doc.get('/afficherDocs', Auth, getCours)

module.exports = doc