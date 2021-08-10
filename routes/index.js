var router = require('express').Router();

router.use('/', require('./publicRoutes'));
router.use('/users', require('./userRoutes'));

module.exports = router;