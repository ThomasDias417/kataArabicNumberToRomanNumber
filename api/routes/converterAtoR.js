const express = require('express')
const convertAtoRroutes = express.Router()
const {getConversion,getTestBundle} = require('../controler/convertAtoR')

convertAtoRroutes.get('/',async(req,res,next)=>{
     getConversion(req,res)
})

convertAtoRroutes.get('/testBundle',async(req,res,next)=>{
    getTestBundle(req,res)
})


module.exports = {
    convertAtoRroutes
}