
const router = require('express').Router();
const { create, getAll, getById, getByEmail } = require('../../models/users.model')

router.post('/register', async (req, res) => {

    try {
        const [newUser] = await create(req.body);

        const [user] = await getById(newUser.insertId)
        res.json(user[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
})


router.get('/', async (req, res) => {
    try {
        const [users] = await getAll();
        res.json(users);
    } catch (error) {
        res.json({ fatal: error.message })
    }
});


router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const [result] = await getById(userId)
        if (result.length === 0) {
            return res.json({ fatal: "User doesn't exist" })
        }


        const [users] = await getById(userId);
        res.json(users)
    } catch (error) {
        res.json({ fatal: error.message })
    }
})


router.get('/email/:userEmail', async (req, res) => {
    const { userEmail } = req.params
    try {
        const [result] = await getByEmail(userEmail)
        console.log(result)
        if (result.length === 0) {
            return res.json({ fatal: "Email doesn't exist" })
        }

        const [users] = await getByEmail(userEmail);
        res.json(users)
    } catch (error) {
        res.json({ fatal: error.message })
    }
})


module.exports = router;