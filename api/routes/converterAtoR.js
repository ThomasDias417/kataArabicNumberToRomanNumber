const express = require('express')
const convertAtoRroutes = express.Router()
const {getConversionAtoR,getTestBundle} = require('../controler/convertAtoR')
const {getConversionRtoA} = require('../controler/convertRtoA')

convertAtoRroutes.get('/',async(req,res,next)=>{
    getConversionAtoR(req,res)
})

convertAtoRroutes.get('/reverse',async(req,res,next)=>{
    getConversionRtoA(req,res)
})


convertAtoRroutes.get('/testBundle',async(req,res,next)=>{
    getTestBundle(req,res)
})


module.exports = {
    convertAtoRroutes
}