var express = require('express');
var router = express.Router();
var Field = require('../helpers/field');
var UserBean = require('../helpers/userBean');

router.get('/', function(req, res, next) {
	bean = new UserBean();
    res.render("game/index", {
        title: "Game Lobby",
        userBean: bean
    });
});

/*TODO: al momento sto non considerando lo userBean*/
router.post('/field',
			function(req, res, next){
				console.log(req.body);
				console.log("Hello interceptor");
				next();
			},
			function(req, res, next) {
				console.log(req.body);
				//If some coords are arrived hit some square
				if(typeof req.body.x !== 'undefined' && typeof req.body.y !== 'undefined' && typeof req.body.field !== 'undefined'){
					var f = req.body.field;
					console.log(f)
					console.log(typeof f)
					var f = Object.create(Field, JSON.parse(req.body.field));
					var x = req.body.x;
					var y = req.body.y;
					f.hitSquare(x, y);
					var f = req.body.field;

				//Else the game is begining now
				}else{
					console.log("After interceptor")
			    	var f = new Field();
			    	console.log(typeof f + "\n" + f + "");
			    	console.log(f.garden[0][0].isHit())
			   	}

			   	//Render the field
			    res.render("game/water", {
			        title : "Game Field",
			        field : f,
		    });
});


module.exports = router;