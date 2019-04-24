const router = require('express').Router();
const Chef = require('../models/chefs');

router.route('/chefs')

    .get(function (req, res) {

        Chef.find().then(chefs => {
            res.json(chefs);
        }).catch(err => {
            console.log('Error getting chefs:', err);
            res.status(500).send({ message: 'Server error' });
        });

    })
    .post(function (req, res) {
        let chef = new Chef();

        chef.nombre = req.body.nombre;
        chef.mail = req.body.mail;
        chef.password = req.body.password;
        chef.avatar = req.body.avatar;
        chef.especialidad = req.body.especialidad;
        chef.estrellas = req.body.estrellas;
        chef.biografia = req.body.biografia;
        chef.galeria = req.body.galeria;
        chef.localizacion = req.body.localizacion;
        chef.ciudad = req.body.ciudad;
        chef.comentarios = req.body.comentarios;

        Chef.findOne({ mail: chef.mail }).then(aChef => {
            if (aChef) {
                res.status(409).send({ message: 'This mail already exists' });
                aChef = null;
            } else { aChef = chef; }

            return aChef;
        }).then(aChef => {
            if (aChef) aChef.save();

            return aChef;
        }).then(savedChef => {
            console.log('savedChef:', savedChef);

            if (savedChef) {
                res.json(savedChef);
            }
        }).catch(err => {
            console.log('Error saving new Chef:', err);
            res.status(500).send({ message: 'Server error' });
        });


    });

    router.route('/chef/:cid')
        .get(function(req, res){
            //res.json({data: 'hola:' + req.params.pid});
            Chefs.findById(req.params.pid).then(aChef=>{
                res.json(aChef);
            }).catch(err => {
                console.log('error:', err);
                res.status(500).send({ message: 'Server error'});
            });
        });

module.exports = router;