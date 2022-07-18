const db = require('../../config/connection');
const { VbNames, VbRelations, MicNames, MicRelations } = require('../../models');

const michelleNames = require('../gedcomParser/micheleFamilyNames');
const michelleRelations = require('../gedcomParser/micheleRelations');
const vbNames = require('../gedcomParser/vbFamilyNames');
const vbRelations = require("../gedcomParser/vbRelations")

db.once('open', async () => {
  await VbNames.deleteMany({});
  await VbRelations.deleteMany({})
  await MicNames.deleteMany({})
  await MicRelations.deleteMany({})

  const vbfnSeed = await VbNames.insertMany(vbNames);
  const vbrSeed = await VbRelations.insertMany(vbRelations);
  const mfnSeed = await MicNames.insertMany(michelleNames);
  const mrSeed = await MicRelations.insertMany(michelleRelations);


  console.log('Families seeded!');
  process.exit(0);
});
