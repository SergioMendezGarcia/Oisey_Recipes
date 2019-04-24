const router = require('express').Router();
const Comment = require('../models/comentarios');

router.route('/comments')

    .get(function (req, res) {

        Comment.find().then(comments => {
            res.json(comments);
        }).catch(err => {
            console.log('Error getting comments:', err);
            res.status(500).send({ message: 'Server error' });
        });

    })
    .post(function (req, res) {
        let comment = new Comentario();

        comment.titulo = req.body.titulo;
        comment.userName = req.body.userName;
        comment.userMail = req.body.userMail;
        comment.fotoUser = req.body.fotoUser;
        comment.puntuacion = req.body.puntuacion;
        comment.commentText = req.body.commentText;
        comment.fecha = req.body.fecha;
        comment.chefId = req.body.chefId;

        Comment.findOne({ user: comment.userMail, texto: comment.commentText }).then(aCommnet => {
            if (aCommnet) {
                res.status(409).send({ message: 'This comment already exists' });
                aCommnet = null;
            } else { aCommnet = user; }

            return aCommnet;
        }).then(aCommnet => {
            if (aCommnet) aCommnet.save();

            return aCommnet;
        }).then(savedComment => {
            console.log('savedComment:', savedComment);

            if (savedComment) {
                res.json(savedComment);
            }
        }).catch(err => {
            console.log('Error saving new comment:', err);
            res.status(500).send({ message: 'Server error' });
        });


    });



module.exports = router;