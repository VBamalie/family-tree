//figure out how to handle if there is not nuclear family later

//imports
const {MicNames, MicRelations} = require("../models")
const cleanUpName = require("../util/nameCleaner")

module.exports = {
    async getMicNuclear(req, res){
        //grabs the husband's data based off of the URL
        const mainPerson = await MicNames.findOne({Id: req.params.Id})
        const mainName = cleanUpName(mainPerson)

        //then grabs his wife and children's ids
        const mainPersonRelation = await MicRelations.find({husband: req.params.Id})

        //grabs the wife's information
        const wifeInfo = await MicNames.findOne({Id: mainPersonRelation[0].wife})
        const wifeName = cleanUpName(wifeInfo)
        
        //grabs any children's names
        const childrenNames = []
        for (let i = 0; i < mainPersonRelation[0].children.length; i++) {
            let child = await MicNames.findOne({Id: mainPersonRelation[0].children[i]})
            child = cleanUpName(child)
            childrenNames.push(child)
        }

        //this find the husband's parent's nuclear family relation by looking for any relation with the husband as the child
        const mainPersonParents = await MicRelations.find({children: req.params.Id})

        //then we take and clean up his parent's names
        let fatherName = await MicNames.findOne({Id: mainPersonParents[0].husband})
        fatherName = cleanUpName(fatherName)
        let motherName =await MicNames.findOne({Id: mainPersonParents[0].wife})
        motherName = cleanUpName(motherName)

        //next we do the same for the wife's parents using her id retrieved from the mainPersonRelation variable
        const wifeParents = await MicRelations.find({children: mainPersonRelation[0].wife})

        //clean up the parent's name
        let wifeFatherName = await MicNames.findOne({Id: wifeParents[0].husband})
        wifeFatherName = cleanUpName(wifeFatherName)
        let wifeMotherName =await MicNames.findOne({Id: wifeParents[0].wife})
        wifeMotherName = cleanUpName(wifeMotherName)

        //compile all the data into one json so we can send it out

        const compiledData ={
            husband: mainPerson,
            husbandName: mainName,
            wife: wifeInfo,
            wifeName: wifeName,
            marriageDate: mainPersonRelation[0].marriage.date,
            children: childrenNames,
            husbandParents:{
                fatherName: fatherName,
                motherName: motherName
            },
            wifeParents:{
                fatherName: wifeFatherName,
                motherName: wifeMotherName
            }
        }

        res.status(200).json(compiledData)
    }
}