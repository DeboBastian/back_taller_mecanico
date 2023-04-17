const router = require('express').Router();
const { create, getById } = require('../../models/reparations.model')

router.post('/', async (req, res) => {

    try {
        const [newReparation] = await create(req.body);
        const [reparation] = await getById(newReparation.insertId)
        res.json(reparation[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
})
module.exports = router;