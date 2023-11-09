const {computeConversion,computeBundleConvertion} = require('../models/converterAtoR')
const {viewResultCovertion,viewComputeBundle} = require('../view/converterAtoR')

const getConversionAtoR = (req,res)=>{
    try {
        res.status(201).send(viewResultCovertion(computeConversion(req.body.number)))
    }catch(e){
        res.status(404).send(viewGetAllProductJson(e.message))
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
    getConversionAtoR,
    getTestBundle,
}