const router = require('express').Router();
// const matchupRoutes = require('./matchup-routes');
// const techRoutes = require('./tech-routes.js');
const micNuclearRoutes = require("./mic-routes.js")
const vbNuclearRoutes = require("./vb-routes.js")

router.use("/mic", micNuclearRoutes);
router.use("/vb", vbNuclearRoutes)

module.exports = router;
