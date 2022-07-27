const router =require("express").Router();
const {getVbNuclear} = require('../../controllers/getVbNuclear')
const {getVbTree} = require("../../controllers/getVbTree")

router.route("/nuclear/:Id").get(getVbNuclear);
router.route("/tree/:Id").get(getVbTree);

module.exports = router