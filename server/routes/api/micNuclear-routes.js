const router =require("express").Router();
const {getNuclear} = require('../../controllers/tech-controller')

router.route("/:Id").get(getNuclear)

module.exports = router