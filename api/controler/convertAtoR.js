const {computeConversion} = require('../models/converterAtoR')
const {viewResultCoversion} = require('../view/converterAtoR')

const getConversion = async(req,res)=>{
    try {
        res.status(201).send(viewResultCoversion(computeConversion(req.body.arabicToRoman)))
    }catch(e){
        res.status(404).send(viewGetAllProductJson(e.message))
    }
}



module.exports = {
    getConversion,
}