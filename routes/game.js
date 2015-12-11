var express = require('express');
var router = express.Router();
var field = require('../helpers/field');
router.get('/game-init', function(req, res, next) {
    field.initGarden();
    res.send("Test create field, check node console");
});


module.exports = router;