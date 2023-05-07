var express = require('express')
var fileUpload = require('express-fileupload')
var path = require('path')
var cors = require('cors')
var bodyParser = require('body-parser')
var assignmentsRoutes = require('./routes/Assignments')
var Users = require('./routes/Users')
const users = require('./routes/Users')

var app = express()
var mongoose = require('mongoose')

var PORT = process.env.PORT || 9000

app.use(bodyParser.json())
app.use(cors())

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

app.use('/assignment', assignmentsRoutes)
app.use('/users', users)

//file upload initializer

app.use(fileUpload())

app.post('/upload', (req,res) => {
    if(req.files === null){
        return res.status(400).json({msg:"No file Uploaded"})
    }

    const file = req.files.file
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if(err){
            console.log(err)
            res.status(500).send(err)
        }
        res.json({fileName: file.name, filePath:`/uploads/${file.name}`})
    })
})

var corsOption = {
    origin: '*',
    optionSuccessStatus:200
}

app.use(cors(corsOption))

const mongoURI = 'mongodb+srv://isurub:amasha99@studentportal.bywz8jd.mongodb.net/?retryWrites=true&w=majority'

mongoose
.connect(mongoURI)
.then(() => console.log('mongoDB connected'))
.catch((err) => console.log(err))



app.listen(PORT, () => {
    console.log("server is running on port :" + PORT)
})

