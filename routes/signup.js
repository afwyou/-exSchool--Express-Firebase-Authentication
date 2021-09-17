var express = require('express');
var router = express.Router();
var firebase = require('../connection/firebase_connect')
var fireAuth = firebase.auth()
router.get('/', function (req, res) {
    res.render('signup', { title: '註冊' });
})

router.post('/', function (req, res) {
    var email = req.body.email
    var password = req.body.passwd
    fireAuth.createUserWithEmailAndPassword(email, password)
        .then(function (user) {
            res.redirect('/signup/success')
        })
        .catch(function (error) {

        })
})
router.get('/success', function (req, res) {
    res.render('success', {
        title: '註冊成功'
    });
})
module.exports = router;