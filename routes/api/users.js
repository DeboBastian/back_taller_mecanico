
const router = require('express').Router();
const { create } = require('../../models/users.model')

router.post('/login/register', async (req, res) => {

    try {
        const [newUser] = await create(req.body);
        res.json(newUser)
    } catch (error) {
        res.json({ fatal: error.message })
    }
})



module.exports = router;