const viewResultCoversion = (data)=>{
    return {res : data}
}

const viewComputeBundle = (data)=>{
    return {res : Object.entries(data)}
}


module.exports = {
    viewResultCoversion,
    viewComputeBundle
}