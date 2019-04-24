const router = require('express').Router();
const User = require('../models/user');

router.route('/users')

    .get(function (req, res) {

        User.find().then(users => {
            res.json(users);
        }).catch(err => {
            console.log('Error getting users:', err);
            res.status(500).send({ message: 'Server error' });
        });

    })
    .post(function (req, res) {
        let user = new User();

        user.nombre = req.body.nombre;
        user.mail = req.body.mail;
        user.password = req.body.password;
        user.avatar = req.body.avatar;
        user.biografia = req.body.biografia;
        user.localizacion = req.body.localizacion;
        user.ciudad = req.body.ciudad;
        user.comentarios = req.body.comentarios;

        User.findOne({ mail: user.mail }).then(aUser => {
            if (aUser) {
                res.status(409).send({ message: 'This email already exists' });
                aUser = null;
            } else { aUser = user; }

            return aUser;
        }).then(aUser => {
            if (aUser) aUser.save();

            return aUser;
        }).then(savedUser => {
            console.log('savedUser:', savedUser);

            if (savedUser) {
                res.json(savedUser);
            }
        }).catch(err => {
            console.log('Error saving new user:', err);
            res.status(500).send({ message: 'Server error' });
        });


    });



module.exports = router;