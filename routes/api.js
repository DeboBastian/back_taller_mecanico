const { checkToken } = require('../helpers/middlewares');


const router = require('express').Router();


router.use('/users', require('./api/users'));
router.use('/clients', require('./api/clients'));


module.exports = router;