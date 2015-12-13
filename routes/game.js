var express = require('express');
var router = express.Router();
var field = require('../helpers/field');

router.get('/', function(req, res, next) {
    res.render("game/index", {
        title: "Game Lobby"
    });
});

router.get('/field', function(req, res, next) {
    var f =field.initGarden();
    console.log(f);
    res.render("game/field", {
        title : "Game Field",
        field : f
    });
});


module.exports = router;