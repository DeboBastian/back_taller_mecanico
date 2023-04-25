
const router = require('express').Router();

const { create, getById, getAll, deleteById } = require('../../models/clients.model')
const { carOfClient } = require('../../models/cars.model')
const { checkAdmin } = require('../../helpers/middlewares');


router.post('/', checkAdmin, async (req, res) => {

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

        if (client.length === 0) {
            return res.json({ fatal: 'This client does not exist' })
        }
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


router.delete('/:clientId', checkAdmin, async (req, res) => {
    const { clientId } = req.params

    try {
        const [client] = await getById(clientId)
        const [result] = await deleteById(clientId)
        if (client.length === 0) {
            return res.json({ fatal: 'This client does not exist' })
        }
        res.json(client[0])
    } catch (error) {
        res.json({ fatal: error.message });
    }
});


//TODO:
// Falta update (PUT) con checkAdmin

module.exports = router;