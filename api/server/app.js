const express = require('express')
const app = express()
const {convertAtoRroutes} = require('../routes/converterAtoR')
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(express.json())

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if (req.method === 'OPTIONS'){
        req.headers('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET') // all method allowed for api
        return res.status(200).json({})
    }
    next() // go to other middleware because of return 
})

app.use('/converterArabicToRoman',convertAtoRroutes)

app.use((req,res,next)=>{
    const err = new Error('not-found')
    err.status = 404
    next(err)
})

app.use((err,req,res,next)=>{
    console.log(err)
    res.status(err.status || 500)
    res.send({
        error : {
            message : err.message
        }
    })
})

module.exports = app