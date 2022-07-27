//imports
const {MicNames, MicRelations} = require("../models")
const cleanUpName = require("../util/nameCleaner")
//this function  grabs a single person's parents, grandparents, and great grandparents and organizes them so i can properly put it  into a tree
module.exports ={
    async getMicTree(req, res){
        //this is a function that i repeat many times that gets a person's name, and lifespan
        async function getSinglePerson(Id){
            singlePerson = await MicNames.findOne({Id: Id})
            const deathDate = singlePerson.death.date || ""
            const birthDate = singlePerson.Birth.birthdate || ""
            const data={
                name: cleanUpName(singlePerson),
                birth: birthDate,
                death: deathDate
            }
            return data
        }
        //this function move up to the next generation
        async function getSingleRelation(Id){
            const relation = await MicRelations.find({children: Id})
            const motherData = await getSinglePerson(relation[0].wife)
            const fatherData = await getSinglePerson(relation[0].husband)
            const relationIds ={
                father: fatherData,
                fatherId: relation[0].husband,
                mother: motherData,
                motherId: relation[0].wife
            }
            return relationIds
        }

        //all the raw data needed from the function
        const mainPerson = await getSinglePerson(req.params.Id)
        const parents = await getSingleRelation(req.params.Id)
        const motherSideGrandParents = await getSingleRelation(parents.motherId)
        const fatherSideGrandParents = await getSingleRelation(parents.fatherId)
   
        //organize all the raw data here

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