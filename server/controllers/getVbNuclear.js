//imports

const cleanUpName = require("../util/nameCleaner")
const getVbPerson = require("../util/getVbPerson")
const getVbRelation = require("../util/getVbRelation")
const getVbParents = require("../util/getVbParents")

module.exports = {
    async getVbNuclear(req, res){
        //grabs the husband's data based off of the URL
        const mainPerson = await getVbPerson(req.params.Id)
        const mainName = cleanUpName(mainPerson)

        //then grabs his wife and children's ids
        const mainPersonRelation = await getVbRelation(req.params.Id)

        //grabs the wife's information
        const wifeInfo = await getVbPerson(mainPersonRelation.wife)
        const wifeName = cleanUpName(wifeInfo)
        
        //grabs any children's names
        const childrenNames = []
        for (let i = 0; i < mainPersonRelation.children.length; i++) {
            let child = await getVbPerson(mainPersonRelation.children[i]) || "Unknown"
            if(child != "Unknown"){
            child = await cleanUpName(child)
            childrenNames.push(child)
            }
        }

        //this find the husband's parent's nuclear family relation by looking for any relation with the husband as the child
        const mainPersonParents = await getVbParents(req.params.Id) || "Unknown"
        let fatherName = "Unknown"
        let motherName = "Unknown"


        if(mainPersonParents != "Unknown"){
        //then we take and clean up his parent's names
        fatherName = await getVbPerson( mainPersonParents.husband) || "Unknown"
            if(fatherName != "Unknown"){
            fatherName = cleanUpName(fatherName)
            }   
        motherName =await getVbPerson(mainPersonParents.wife) || "Unknown"
        if(motherName != "Unknown"){
        motherName = cleanUpName(motherName)
        }
    }
        //next we do the same for the wife's parents using her id retrieved from the mainPersonRelation variable
        const wifeParents = await getVbParents(mainPersonRelation.wife) || "Unknown"
 
        let wifeFatherName = "Unknown"
        let wifeMotherName ="Unknown"

        //clean up the parent's name
        if(wifeParents != "Unknown"){
          wifeFatherName = await getVbPerson(wifeParents.husband) || "Unknown"
          if(wifeFatherName != "Unknown"){
        wifeFatherName = cleanUpName(wifeFatherName)
          }
        
       
         wifeMotherName =await getVbPerson(wifeParents.wife) || "Unknown"
         if(wifeMotherName != "Unknown"){
        wifeMotherName = cleanUpName(wifeMotherName)
         }
        }

        //compile all the data into one json so we can send it out

        const compiledData ={
            husband: mainPerson,
            husbandName: mainName,
            wife: wifeInfo,
            wifeName: wifeName,
            marriageDate: mainPersonRelation.marriage.date || "Unknown",
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