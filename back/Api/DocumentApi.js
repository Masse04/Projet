const {Router} = require('express')
const { CreateDocument } = require('../Controllers/DocumentCtrl')
const multer = require('../middleware/multer')
const multeressai = require('../middleware/multeressai')
const doc = Router()



doc.post('/upload', multer , CreateDocument)

module.exports = doc