const { create, getById, getAll } = require('../../models/cars.model');

const router = require('express').Router();



router.post('/', async (req, res) => {

    try {
        const [newCar] = await create(req.body);
        const [car] = await getById(newCar.insertId)
        res.json(car[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
})


router.get('/', async (req, res) => {
    try {
        const [cars] = await getAll();
        res.json(cars);
    } catch (error) {
        res.json({ fatal: error.message })
    }
});


module.exports = router;