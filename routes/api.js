const { checkToken } = require('../helpers/middlewares');


const router = require('express').Router();


router.use('/users', require('./api/users'));
router.use('/clients', require('./api/clients'));
router.use('/reparations', require('./api/reparations'));
router.use('/cars', require('./api/cars'));
router.use('/mechanics', require('./api/mechanics'));

module.exports = router;


