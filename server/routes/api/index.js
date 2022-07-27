const router = require('express').Router();
// const matchupRoutes = require('./matchup-routes');
// const techRoutes = require('./tech-routes.js');
const micNuclearRoutes = require("./micNuclear-routes.js")
const vbNuclearRoutes = require("./vb-routes.js")

router.use("/mic", micNuclearRoutes);
router.use("/vb", vbNuclearRoutes)
// router.use('/matchup', matchupRoutes);
// router.use('/tech', techRoutes);

module.exports = router;
