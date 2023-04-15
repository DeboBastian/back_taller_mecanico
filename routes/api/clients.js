
const router = require('express').Router();

const { create } = require('../../models/clients.model')


router.post('/clients/register', async (req, res) => {

    try {
        const [newClient] = await create(req.body);
        const [client] = await getById(newClient.insertId)
        res.json(client[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
})
