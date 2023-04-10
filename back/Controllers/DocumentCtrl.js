const Document = require('../Models/Objets/Document')




exports.CreateDocument = async ( req, res ) => {
    console.log(req.file)
    console.log(req.body)
    res.status(201).json({ok})
    
}