var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { name: '首页' });
});

router.get('/biunique', function(req, res, next) {
    res.render('biunique', { name: '简快学院' });
});

router.get('/teacher', function(req, res, next) {
    res.render('teacher', { name: '师资教研' });
});

router.get('/student', function(req, res, next) {
    res.render('student', { name: '成功学员' });
});

router.get('/xueshuo', function(req, res, next) {
    res.render('xueshuo', { name: '师资教研' });
});

router.get('/zhuanshuo', function(req, res, next) {
    res.render('zhuanshuo', { name: '师资教研' });
});

router.get('/english', function(req, res, next) {
    res.render('english', { name: '师资教研' });
});

router.get('/politics', function(req, res, next) {
    res.render('politics', { name: '师资教研' });
});

module.exports = router;