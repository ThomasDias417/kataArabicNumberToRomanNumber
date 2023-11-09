const express = require('express')
const convertAtoRroutes = express.Router()
const {getConvertionAtoR,getTestBundle} = require('../controler/convertAtoR')
const {getConvertionRtoA} = require('../controler/convertRtoA')

convertAtoRroutes.get('/',async(req,res,next)=>{
    getConvertionAtoR(req,res)
})

convertAtoRroutes.get('/reverse',async(req,res,next)=>{
    getConvertionRtoA(req,res)
})


convertAtoRroutes.get('/testBundle',async(req,res,next)=>{
    getTestBundle(req,res)
})


module.exports = {
    convertAtoRroutes
}