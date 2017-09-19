var express = require('express');
var router = express.Router();

router.use("/api/code-bootcamps", require("./code_bootcamps"));
router.use("/favourites", require("./favourites"));

module.exports = router;