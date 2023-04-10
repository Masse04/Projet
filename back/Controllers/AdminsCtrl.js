const Admins = require('../Models/Admins')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.adminCreateUser = async(req,res)=> {
    let inscrit = req.body
    console.log(inscrit)
    try {
        await Admins.findOne({username : inscrit.username})
            .then(user => {
                if (user !== null){
                    console.log('Ce username appartient déja a un Admin')
                    res.status(500).json({ message : 'Ce username appartient déja a un Admin' })
                }
                else {
                    bcrypt.hash(inscrit.password,10)
                        .then(hash => {
                            let user = new Admins({...inscrit,password : hash})
                            user.save()
                                .then(() => res.status(201).json({ message : 'Admin créé' }))
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

exports.adminConnexion = async(req,res) => {
    let user = req.body
    console.log(user)
    try {
        await Admins.findOne({username : user.username})
            .then(admin => {
                if (!admin){
                    console.log('Utlisateur non trouvé')
                    res.status(401).json({ message: 'Utlisateur non trouvé'})
                }
                else {
                    bcrypt.compare(user.password,admin.password)
                        .then( valid => {
                            if (!valid){
                                res.status(401).json({ message: 'Paire login/mot de passe incorrecte'})
                                console.log('Paire login/mot de passe incorrecte')
                            }
                            else {
                                const token =  jwt.sign(
                                    { userId : admin._id},
                                    'LA CLE EST CHIFFRE PAR MASSE',
                                    {expiresIn : '24h'}
                                )
                                res.status(201).json({ access_token : token })
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