const {Router} = require('express')
const { createDocument, getDocument } = require('../Controllers/DocumentCtrl')
const multer = require('../middleware/multer')
const auth = require('../middleware/Auth')
const doc = Router()



doc.post('/upload', auth, multer , createDocument)
doc.get('/afficherDocs', auth, getDocument)

module.exports = doc