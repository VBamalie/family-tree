const { VbRelations } = require("../models");

const getVbRelation = async function(id){
    try {
    let data = await VbRelations.findOne({ husband: id })
    return data
} catch (error) {
    console.log(`findOne error ${error}`);
    return "unknown";
}
}
module.exports = getVbRelation;