
const router = require('express').Router();

const { create, getById, getAll, deleteById, findByIdAndUpdate } = require('../../models/clients.model')
const { carOfClient } = require('../../models/cars.model')

router.post('/', async (req, res) => {

    try {
        const [newClient] = await create(req.body);
        const [client] = await getById(newClient.insertId)
        res.json(client[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
})


router.get('/', async (req, res) => {
    try {
        const [clients] = await getAll();
        res.json(clients);
    } catch (error) {
        res.json({ fatal: error.message })
    }
});



router.get('/:clientId', async (req, res) => {
    const { clientId } = req.params;
    try {
        const [client] = await getById(clientId)
        res.json(client[0])
    } catch (error) {
        res.json({ fatal: error.message });
    }
})


// GET api/clients/car/:clientId
router.get('/car/:clientId', async (req, res) => {
    const { clientId } = req.params;
    try {
        const [car] = await carOfClient(clientId)
        res.json(car)
    } catch (error) {
        res.json({ fatal: error.message })
    }
});

router.delete('/:clientId', async (req, res) => {
    const { clientId } = req.params

    try {
        const [client] = await getById(clientId)
        const [result] = await deleteById(clientId)
        console.log(result)
        res.json(client[0])
    } catch (error) {
        res.json({ fatal: error.message });
    }
});



router.put('/:clientId', async (req, res) => {
    console.log(req.params)
    const { clientId } = req.params
    const { name, surname, email, phone, dni, address, card_number } = req.body

    try {
        const [result] = await findByIdAndUpdate({ name, surname, email, phone, dni, address, card_number }, clientId)
        res.json(result)
    } catch (error) {
        res.json({ fatal: error.message })
    }
})


module.exports = router;