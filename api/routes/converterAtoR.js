const express = require('express')
const convertAtoRroutes = express.Router()
const {getConversion} = require('../controler/convertAtoR')

convertAtoRroutes.get('/',async(req,res,next)=>{
     getConversion(req,res)
})


module.exports = {
    convertAtoRroutes
}