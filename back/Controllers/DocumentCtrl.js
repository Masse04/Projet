const Document = require('../Models/Objets/Document')




exports.createDocument = async ( req , res ) => {
    try {
        const document = await new Document ({...req.body,userId : req.auth.userId,
            documentUrl : `${req.protocol}://${req.get('host')}/${req.file.destination}/${req.file.filename}`,
            genre : req.file.mimetype.split('/')[0]})
        document.save()
            .then(() => res.status(201).json( {message : 'objet créé'} ) )
            .catch((error) => res.status(400).json( {error} ))
    } catch (error) {
        res.status(500).json( {error} )
    }
    
}

exports.getDocument = async ( req , res ) => {
    try {
        await Document.find({ userId : req.auth.userId})
            .then((documents) => res.status(200).json( {documents} ))
            .catch((error) => res.status(400).json( {error} ))
    } catch (error) {
        res.status(500).json( {error} )
    }
}

exports.modifyDocument = async ( req , res ) => {
    
}

exports.deleteDocument = async ( req , res ) => {

}