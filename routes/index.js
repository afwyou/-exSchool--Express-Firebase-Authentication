var express = require('express');
var router = express.Router();
var firebaseDb = require('../connection/firebase_admin_connect')
router.get('/', function (req, res, next) {
    firebaseDb.ref().once('value', function (snapshop) {
        console.log(snapshop.val())
    })
    res.render('index', {
        title: '六角學院留言板'
    });
});
/* GET home page. */
module.exports = router;