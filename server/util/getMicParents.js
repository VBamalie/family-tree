const { MicRelations } = require("../models");

const getMicParents = async function(id){
    try {
    let data = await MicRelations.findOne({ children: id })
    return data
} catch (error) {
    console.log(`findOne error ${error}`);
    return "unknown";
}
}
module.exports = getMicParents;