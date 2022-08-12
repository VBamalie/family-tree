const { MicRelations } = require("../models");

const getMicRelation = async function(id){
    try {
    let data = await MicRelations.findOne({ husband: id })
    return data
} catch (error) {
    console.log(`findOne error ${error}`);
    return "unknown";
}
}
module.exports = getMicRelation;