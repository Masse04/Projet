const Etudiant = require('../Models/Etudiants')
const bcrypt = require('bcrypt')

exports.etudiantCreateUser = async(req,res) => {
    let inscrit = req.body
    try {
        await Etudiant.findOne({ username : inscrit.username })
            .then(user => {
                if (user !== null){
                    console.log('Ce username appartient déja a un étudiant')
                    res.status(500).json({ message : 'Ce username appartient déja a un étudiant' })
                }
                else{
                    bcrypt.hash(inscrit.password,10)
                .then(hash => {
                    let user = new Etudiant({...inscrit,password : hash})
                    user.save()
                        .then(() => res.status(201).json({ message : 'Etudiant créé' }))
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

exports.etudiantConnexion = async(req,res) => {
    let user = req.body
    console.log(user)
    try {
        await Etudiant.findOne({username : user.username})
            .then(etudiant => {
                console.log(etudiant)
                if (!etudiant){
                    res.status(401).json({ message: 'Paire login/mot de passe incorrecte'})
                }
                else {
                    bcrypt.compare(user.password,etudiant.password)
                        .then( valid => {
                            if (!valid){
                                res.status(401).json({ message: 'Paire login/mot de passe incorrecte'})
                            }
                            else {
                                const token =  jwt.sign(
                                    { userId : etudiant._id},
                                    'LA CLE EST CHIFFRE PAR MASSE',
                                    {expiresIn : '24h'}
                                )
                                res.status(200).json({access_token : token })
                            }
                        })
                        .catch(error => res.status(502).json({ error }))
                }
            })
            .catch(error => res.status(500).json({ error }))
    } catch (error) {
        console.error(error)
    }
}