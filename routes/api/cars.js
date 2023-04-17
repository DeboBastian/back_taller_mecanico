const { create, getById } = require('../../models/cars.model');

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

module.exports = router;