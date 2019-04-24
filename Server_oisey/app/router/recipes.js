const router = require('express').Router();
const Recipe = require('../models/recetas');

router.route('/recipes')    

    .get(function (req, res) {

        Recipe.find().then(recipes => {
            res.json(recipes);
        }).catch(err => {
            console.log('Error getting recipes:', err);
            res.status(500).send({ message: 'Server error' });
        });

    })
    .post(function (req, res) {
        let recipe = new Recipe();

        recipe.nombre = req.body.nombre;
        recipe.ingr = req.body.ingr;
        recipe.tiempo = req.body.tiempo;
        recipe.fotos = req.body.fotos;
        recipe.rating = req.body.rating;
        recipe.chefId = req.body.chefId;

        Recipe.findOne({ recipe: recipe.nombre, chef: recipe.chefId }).then(aRecipe => {
            if (aRecipe) {
                res.status(409).send({ message: 'This recipe already exists' });
                aRecipe = null;
            } else { aRecipe = recipe; }

            return aRecipe;
        }).then(aRecipe => {
            if (aRecipe) aRecipe.save();

            return aRecipe;
        }).then(savedRecipe => {
            console.log('savedRecipe:', savedRecipe);

            if (savedRecipe) {
                res.json(savedRecipe);
            }
        }).catch(err => {
            console.log('Error saving new recipe:', err);
            res.status(500).send({ message: 'Server error' });
        });


    });



module.exports = router;