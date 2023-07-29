const Cours = require('../Models/Objets/Cours')




exports.createCours = async ( req , res ) => {
    try {
        const cours = await new Cours ({...req.body,userId : req.auth.userId,
            documentUrl : `${req.protocol}://${req.get('host')}/${req.file.destination}/${req.file.filename}`,
            genre : req.file.mimetype.split('/')[0]})
        cours.save()
            .then(() => res.status(201).json( {message : 'objet créé'} ) )
            .catch((error) => res.status(400).json( {error} ))
    } catch (error) {
        res.status(500).json( {error} )
    }
    
}

exports.getCours = async ( req , res ) => {
    try {
        await Cours.find({ userId : req.auth.userId})
            .then((documents) => res.status(200).json( {documents} ))
            .catch((error) => res.status(400).json( {error} ))
    } catch (error) {
        res.status(500).json( {error} )
    }
}

exports.modifyCours = async ( req , res ) => {
    
}

exports.deleteCours = async ( req , res ) => {

}