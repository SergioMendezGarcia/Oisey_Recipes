const router = require('express').Router();
// const user = require('./users');
const chef = require('./chefs');
const comments = require('./comentarios');
const recipes = require('./recipes');


// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();	//Sigue corriendo en las siguientes rutas
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

router.use(chef);
// router.use(user);
router.use(comments);
router.use(recipes);

// FUNCTIONS FOR TRAINEDS

module.exports = router;