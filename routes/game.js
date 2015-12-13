var express = require('express');
var router = express.Router();
var field = require('../helpers/field');

router.get('/', function(req, res, next) {
    res.render("game/index", {
        title: "Game Lobby"
    });
});

router.get('/game-init', function(req, res, next) {
    field.initGarden();
    res.send("Test create field, check node console");
});

router.get('/field', function(req, res, next) {
    res.render("game/field", {
        title : "Game Field",
        field : field.initGarden()
    });
});


module.exports = router;