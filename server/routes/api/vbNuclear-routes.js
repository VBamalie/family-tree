const router =require("express").Router();
const {getVbNuclear} = require('../../controllers/getVbNuclear')

router.route("/:Id").get(getVbNuclear)

module.exports = router