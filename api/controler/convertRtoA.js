const {computeConversion} = require('../models/converterRtoA')
const {viewResultCovertion} = require('../view/converterRtoA')

const getConversionRtoA = (req,res)=>{
    try {
        res.status(201).send(viewResultCovertion(computeConversion(req.body.number)))
    }catch(e){
        res.status(404).send({res : e.message})
    }
}


module.exports = {
    getConversionRtoA,
}