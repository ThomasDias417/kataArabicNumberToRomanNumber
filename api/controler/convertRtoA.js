const {computeConvertion} = require('../models/converterRtoA')
const {viewResultConvertion} = require('../view/converterRtoA')

const getConvertionRtoA = (req,res)=>{
    try {
        res.status(201).send(viewResultConvertion(computeConvertion(req.body.nombre)))
    }catch(e){
        res.status(404).send({res : e.message})
    }
}


module.exports = {
    getConvertionRtoA,
}