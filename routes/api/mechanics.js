const { getAll, getById } = require('../../models/mechanicsmodel');


const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const [mechanics] = await getAll();
        res.json(mechanics);
    } catch (error) {
        res.json({ fatal: error.message })
    }
});



router.get('/:mechanicId', async (req, res) => {
    const { mechanicId } = req.params;
    try {
        const [client] = await getById(mechanicId)
        res.json(client[0])
    } catch (error) {
        res.json({ fatal: error.message });
    }
})


module.exports = router;