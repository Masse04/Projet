const Users = require('../Models/Users/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.CreateUser = async(req,res)=> {
    let inscrit = req.body
    try {
        await Users.findOne({username : inscrit.username})
            .then(user => {
                if (user !== null){
                    console.log('Ce username appartient déja a un User')
                    res.status(500).json({ message : 'Ce username appartient déja a un User' })
                }
                else {
                    bcrypt.hash(inscrit.password,10)
                        .then(hash => {
                            let user = new Users({...inscrit,password : hash})
                            user.save()
                                .then(() => res.status(201).json({ message : 'User créé' }))
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

exports.UserConnexion = async(req,res) => {
    let inscrit = req.body
    console.log(inscrit)
    try {
        await Users.findOne({username : inscrit.username})
            .then(user => {
                if (!user){
                    console.log('Utlisateur non trouvé')
                    res.status(401).json({ message: 'Utlisateur non trouvé'})
                }
                else {
                    bcrypt.compare(inscrit.password,user.password)
                        .then( valid => {
                            if (!valid){
                                res.status(401).json({ message: 'Paire login/mot de passe incorrecte'})
                                console.log('Paire login/mot de passe incorrecte')
                            }
                            else {
                                const role = user.role
                                const token =  jwt.sign(
                                    { userId : user._id,
                                    role : user.role},
                                    'LA CLE EST CHIFFRE PAR MASSE',
                                    {expiresIn : '24h'}
                                )
                                res.status(200).json({ role,access_token : token })
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