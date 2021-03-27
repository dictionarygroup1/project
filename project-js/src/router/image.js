const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, 'file-' + Date.now() + '.' +
        file.originalname.split('.')[file.originalname.split('.').length-1])}
})

const upload = multer({ storage: storage })

app.get('/', (req, res) => {
    res.render('upload')
})

app.post('/upload',upload.single('fileupload'),(req,res) => {
    res.render('show',req.file)
})

app.listen(3000, () => {
    console.log('Server Started on localhost:3000...')
})