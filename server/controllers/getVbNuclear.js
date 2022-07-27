//needs to grab a single based off their name
//then needs to find their family relation based off their id
//the person should be both in their parent's family relation and their own with their spouse
//first find the one with their spouse and grab their spouse's singular data.
//then grab their children's singular data as well.
//finally look to the one their in with their parents and grab the husband and wife data from that one too

//import 
const {VbNames, VbRelations} = require("../models")
const cleanUpName = require("../util/nameCleaner")

module.exports = {
    async getVbNuclear(req, res){
        const mainPerson = await VbNames.findOne({Id: req.params.Id})
        const mainName = cleanUpName(mainPerson)

        const mainPersonRelation = await VbRelations.find({husband: req.params.Id})

        const wifeInfo = await VbNames.findOne({Id: mainPersonRelation[0].wife})
        const wifeName = cleanUpName(wifeInfo)
        
        const childrenNames = []
        for (let i = 0; i < mainPersonRelation[0].children.length; i++) {
            let child = await VbNames.findOne({Id: mainPersonRelation[0].children[i]})
            child = cleanUpName(child)
            childrenNames.push(child)
          }
        const compiledData ={
            husband: mainPerson,
            husbandName: mainName,
            wife: wifeInfo,
            wifeName: wifeName,
            children: childrenNames
        }

        res.status(200).json(compiledData)
    }
}