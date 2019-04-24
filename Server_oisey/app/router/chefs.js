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

    router.route('/chefs/:cid')
        .get(function(req, res){
            //res.json({data: 'hola:' + req.params.pid});

            console.log('cid:',req.params.cid)
            Chef.findById(req.params.cid).then(aChef=>{
                res.json(aChef);
            }).catch(err => {
                console.log('error:', err);
                res.status(500).send({ message: 'Server error'});
            });
        });

    // router.route('/chefs/:cid')
    //     .put(function(req, res) {
    //         if(!req.body) {
    //             return res.status(400).send({
    //                 message: "Product content can not be empty"
    //             });
    //         }
    //         Chef.findByIdAndUpdate(req.params.cid, {
    //             nombre : req.body.nombre,
    //             mail : req.body.mail,
    //             password : req.body.password,
    //             avatar : req.body.avatar,
    //             especialidad : req.body.especialidad,
    //             estrellas : req.body.estrellas,
    //             biografia : req.body.biografia,
    //             galeria : req.body.galeria,
    //             localizacion : req.body.localizacion,
    //             ciudad : req.body.ciudad,
    //             comentarios : req.body.comentarios
    //         }, {new: true}).then(comment => {
    //             if(!comment) {
    //                 return res.status(404).send({
    //                     message: "Chef not found with id " + req.params.cid
    //                 });
    //         }
    //         return res.status(500).send({
    //             message: "Something wrong updating the comments in the chef with id " + req.params.cid
    //         });
    //     });
    // });
            

module.exports = router;