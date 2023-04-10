const Parents = require('../Models/Parents')
const bcrypt = require('bcrypt')

exports.parentCreateUser = async(req,res) => {
    let inscrit = req.body
    try {
        await Parents.findOne({username : inscrit.username})
            .then(user => {
                if (user !== null){
                    console.log('Ce username appartient déja a un Parent')
                    res.send('Ce username appartient déja a un Parent')
                }
                else{
                    bcrypt.hash(inscrit.password,10)
                        .then(hash => {
                            let user = new Parents({...inscrit,password : hash})
                            user.save()
                                .then(() => res.status(201).json({ message : 'Parent créé' }))
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

exports.parentConnexion = async(req,res) => {
    let user = req.body
    try {
        await Parents.findOne({username : user.username})
            .then(parent => {
                if (!parent){
                    res.status(401).json({ message: 'Paire login/mot de passe incorrecte'})
                }
                else {
                    bcrypt.compare(user.password,parent.password)
                        .then( valid => {
                            if (!valid){
                                res.status(401).json({ message: 'Paire login/mot de passe incorrecte'})
                            }
                            else {
                                const token =  jwt.sign(
                                    { userId : parent._id},
                                    'LA CLE EST CHIFFRE PAR MASSE',
                                    {expiresIn : '24h'}
                                )
                                res.status(200).json({ access_token : token })
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