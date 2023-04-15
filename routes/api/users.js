
const router = require('express').Router();
const encript = require('bcryptjs')

const { create, getAll, getById, getByEmail, getByDNI } = require('../../models/users.model')
const { createToken } = require('../../helpers/utils');
const { checkToken } = require('../../helpers/middlewares');


router.post('/register', async (req, res) => {

    req.body.password = encript.hashSync(req.body.password, 10);

    try {
        const [newUser] = await create(req.body);
        const [user] = await getById(newUser.insertId)
        res.json(user[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
})


router.post('/login', async (req, res) => {

    try {
        const [result] = await getByDNI(req.body.dni);
        if (result.length === 0) {
            return res.json({ fatal: 'DNI or password wrong' })
        }
        const user = result[0];


        const samePassword = encript.compareSync(req.body.password, user.password);
        if (!samePassword) {
            return res.json({ fatal: 'DNI or password wrong' })
        }
        res.json({
            succes: 'Successful Login',
            token: createToken(user)
        })

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


router.get('/:userId', checkToken, async (req, res) => {
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



TODO: DELETE

module.exports = router;