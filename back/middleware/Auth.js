const jwt = require('jsonwebtoken')

module.exports = ( req, res, next ) => {
    const auth = req.headers.authorization
    try {
        const token = auth.split(' ')[1]
        const decodedToken = jwt.verify(token,'LA CLE EST CHIFFRE PAR MASSE')
        const userId = decodedToken.userId
        req.auth = {
            userId : userId
        }
        next()
    } catch (error) {
        res.status(401).json({ error })
    }
}