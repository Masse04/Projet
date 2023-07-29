const Annonces = require('../Models/Objets/Annonces')


// Création des Annonces

exports.createAnnonces = async (req , res) => {
    console.log(req.body)
    try {
        const annonce = await new Annonces ({...req.body,userId : req.auth.userId})
        annonce.save()
            .then(() => res.status(201).json( {message : 'objet créé'} ) )
            .catch((error) => res.status(400).json( {error} ))
        console.log(annonce)
    } catch (error) {
        res.status(500).json( {error} )
    }
}

// Affichage des Annonces

exports.getAnnonces = async (req , res) => {
    try {
        await Annonces.find()
        .then((annonce) =>{ res.status(200).json( {annonce} )
            console.log(annonce)})
        .catch((error)=> res.status(400).json( {error} ))
    } catch (error) {
        res.status(500).json( {error} )
    }
}
