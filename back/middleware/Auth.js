const jwt = require('jsonwebtoken')

module.exports = ( req, res, next ) => {
    const auth = req.headers.authorization
    try {
        const token = auth.split(' ')[1]
        console.log(token)
        const decodedToken = jwt.verify(token,'LA CLE EST CHIFFRE PAR MASSE')
        console.log(decodedToken)
        const userId = decodedToken.userId
        req.auth = {
            userId : userId
        }
        next()
    } catch (error) {
        res.status(401).json({ error })
    }
}