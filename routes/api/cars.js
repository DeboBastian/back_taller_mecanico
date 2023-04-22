const { create, getById, getAll, filterByClient, deleteById } = require('../../models/cars.model');

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



router.get('/:carId', async (req, res) => {
    const { carId } = req.params;
    try {
        const [car] = await getById(carId)
        res.json(car[0])
    } catch (error) {
        res.json({ fatal: error.message });
    }
})



// GET api/cars/client/:clientid
router.get('/client/:clientid', async (req, res) => {
    const { clientid } = req.params;
    try {
        const [cars] = await filterByClient(clientid)
        res.json(cars)
    } catch (error) {
        res.json({ fatal: error.message })
    }
});


router.delete('/:carId', async (req, res) => {
    const { carId } = req.params

    try {
        const [car] = await getById(carId)
        const [result] = await deleteById(carId)
        console.log(result)
        res.json(car[0])
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.put('/:carId', async (req, res) => {
    const { carId } = req.params

    try {
        const [car] = await updateById(carId)
        const [result] = await updateById(carId)
        console.log(result)
        res.json(car[0])
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;