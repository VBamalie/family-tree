const router =require("express").Router();
const {getMicNuclear} = require('../../controllers/getMicNuclear')
const {getMicTree} = require("../../controllers/getMicTree")


router.route("/nuclear/:Id").get(getMicNuclear)
router.route("/tree/:Id").get(getMicTree)


module.exports = router