//needs to grab a single based off their name
//then needs to find their family relation based off their id
//the person should be both in their parent's family relation and their own with their spouse
//first find the one with their spouse and grab their spouse's singular data.
//then grab their children's singular data as well.
//finally look to the one their in with their parents and grab the husband and wife data from that one too

//import 
const {VbNames, VbRelations} = require("../models")

module.exports = {
    async getVbNuclear(req, res){
        const mainPerson = await VbNames.findOne({Id: req.params.Id})
        // const parentRelation = await MicRelations.find({husband: req.params.Id}) || MicRelations.find({wife: req.params.Id})
        // const info = mainPerson + parentRelation
        res.status(200).json(mainPerson)
    }
}