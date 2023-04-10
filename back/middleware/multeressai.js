const multeressai = require('multer')


const upload = multeressai.diskStorage({
    destination : (req,file,cb) => {
        const ext = file.mimetype.split('/')[0]
        if (ext === 'image') {
            cb(null,'Images')
        }
        else if (ext === 'video') {
            cb(null,'Videos')
        }
        else {
            cb(null,'Docs')
        }
    },
    filename : (req,file,cb) => {
        const name = file.originalname.split(' ').join('_')
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed).toUTCString();
        const prefixe = today.split(',')[1].split(' ',5).join('_').split(':').join('_')
        //const prefixe = today.split('/').join('_')
        cb(null,`${prefixe}.${name}`)
    }
})
module.exports = multeressai({storage : upload}).single('document')