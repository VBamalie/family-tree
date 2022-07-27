//gets a single person's name and lifespan then goes five lines down the family tree
//start with one id then finds their name and their partner's name
//then uses their id to find which relation they were listed as a child in
//then grabs the id of their name and their partner's
//repeat for five times

//imports
const {VbNames, VbRelations} = require("../models")
const cleanUpName = require("../util/nameCleaner")

module.exports ={
    async getVbTree(req, res){
        async function getSinglePerson(Id){
            singlePerson = await VbNames.findOne({Id: Id})
            const deathDate = singlePerson.death.date || ""
            const birthDate = singlePerson.Birth.birthdate || ""
            const data={
                name: cleanUpName(singlePerson),
                birth: birthDate,
                death: deathDate
            }
            return data
        }
        async function getSingleRelation(Id){
            const relation = await VbRelations.find({children: Id})
            const motherData = await getSinglePerson(relation[0].wife)
            const fatherData = await getSinglePerson(relation[0].husband)
            const relationIds ={
                father: fatherData,
                fatherId: relation[0].husband,
                mother: motherData,
                motherId: relation[0].wife
            }
            console.log(`${Id}'s PARENTS`)
            console.log(relationIds)
            return relationIds
        }

        const mainPerson = await getSinglePerson(req.params.Id)
        const parents = await getSingleRelation(req.params.Id)
        const motherSideGrandParents = await getSingleRelation(parents.motherId)
        const fatherSideGrandParents = await getSingleRelation(parents.fatherId)
   
        
        const compiledData = {
            first: mainPerson,
            second: parents,
            third: {
                motherSide: motherSideGrandParents,
                fatherSide: fatherSideGrandParents
            },
            forth:{
                motherMotherSide: await getSingleRelation(motherSideGrandParents.motherId),
                motherFatherSide: await getSingleRelation(motherSideGrandParents.fatherId),
                fatherMotherSide: await  getSingleRelation(fatherSideGrandParents.motherId),
                fatherFatherSide: await  getSingleRelation(fatherSideGrandParents.fatherId)

            }
        }
        res.status(200).json(compiledData)
    }
}