const {VbNames} = require("../models")
const getVbPerson = async function(id){
    try {
    let data = await VbNames.findOne({ Id: id })
    return data
} catch (error) {
    console.log(`findOne error ${error}`);
    return "unknown";
}
}

module.exports = getVbPerson