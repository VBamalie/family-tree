const router =require("express").Router();
const {getMicNuclear} = require('../../controllers/getMicNuclear')

router.route("/:Id").get(getMicNuclear)

module.exports = router