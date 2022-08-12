const {MicNames} = require("../models")
const getMicPerson = async function(id){
    try {
    let data = await MicNames.findOne({ Id: id })
    return data
} catch (error) {
    console.log(`findOne error ${error}`);
    return "unknown";
}
}

module.exports = getMicPerson