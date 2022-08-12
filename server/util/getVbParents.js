const { VbRelations } = require("../models");

const getVbParents = async function(id){
    try {
    let data = await VbRelations.findOne({ children: id })
    return data
} catch (error) {
    console.log(`findOne error ${error}`);
    return "unknown";
}
}
module.exports = getVbParents;