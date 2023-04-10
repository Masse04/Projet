const Profs = require('../Models/Profs')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.profCreateUser = async (req,res) => {
    let inscrit = req.body
    console.log(inscrit)
    try {
        await Profs.findOne({username : inscrit.username})
            .then(user => {
                if (user !== null){
                    res.status(500).json({ message : 'Ce username appartient déja a un prof' })
                    console.log('Ce username appartient déja a un prof')
                }
                else{
                    bcrypt.hash(inscrit.password,10)
                        .then(hash => {
                            let user = new Profs({...inscrit,password : hash})
                            user.save()
                                .then(() => res.status(201).json({ message : 'Prof créé' }))
                                .catch(error => res.status(400).json({ error }))
                        })
                        .catch(error => res.status(500).json({ error }))
                }
            })
            .catch(error => res.status(500).json({ error }))
    } catch (error) {
        console.error(error)
    }
}

exports.profConnexion = async(req,res) => {
    let user = req.body
    try {
        await Profs.findOne({username : user.username})
            .then(prof => {
                if (!prof){
                    res.status(401).json({ message: 'Paire login/mot de passe incorrecte'})
                }
                else {
                    bcrypt.compare(user.password,prof.password)
                        .then( valid => {
                            if (!valid){
                                res.status(401).json({ message: 'Paire login/mot de passe incorrecte'})
                            }
                            else {
                                const token =  jwt.sign(
                                        { userId : prof._id},
                                        'LA CLE EST CHIFFRE PAR MASSE',
                                        {expiresIn : '24h'}
                                    )
                                    res.status(200).json({access_token : token })
                            }
                        })
                        .catch(error => res.status(500).json({ error }))
                }
            })
            .catch(error => res.status(500).json({ error }))
    } catch (error) {
        console.error(error)
    }
}