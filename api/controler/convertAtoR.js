const {computeConvertion,computeBundleConvertion} = require('../models/converterAtoR')
const {viewResultConvertion,viewComputeBundle} = require('../view/converterAtoR')

const getConvertionAtoR = (req,res)=>{
    try {
        res.status(201).send(viewResultConvertion(computeConvertion(req.body.nombre)))
    }catch(e){
        res.status(404).send({res : e.message})
    }
}

const getTestBundle = (req,res)=>{
    try {
        res.status(201).send(viewComputeBundle(computeBundleConvertion()))
    }catch(e){
        res.status(404).send({res : e.message})
    }
}


module.exports = {
    getConvertionAtoR,
    getTestBundle,
}