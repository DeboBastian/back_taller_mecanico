const router = require('express').Router();
const { create, getById, getAll, deleteById, mechanicForReparation, filterByUser } = require('../../models/reparations.model')

router.post('/', async (req, res) => {

    try {
        const [newReparation] = await create(req.body);
        const [reparation] = await getById(newReparation.insertId)
        res.json(reparation[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
})



router.get('/', async (req, res) => {
    try {
        const [reparations] = await getAll();
        res.json(reparations);
    } catch (error) {
        res.json({ fatal: error.message })
    }
});



router.get('/:reparationId', async (req, res) => {
    const { reparationId } = req.params;
    try {
        const [reparation] = await getById(reparationId)
        res.json(reparation[0])
    } catch (error) {
        res.json({ fatal: error.message });
    }
})


// GET api/reparations/mechanic/:userid
router.get('/mechanic/reparations/:userid', async (req, res) => {
    const { userid } = req.params;
    try {
        const [reparations] = await filterByUser(userid)
        res.json(reparations)
    } catch (error) {
        res.json({ fatal: error.message })
    }
});


//GET api / reparations / mechanic /: userid
router.get('/mechanic/:userid', async (req, res) => {
    const { userid } = req.params;
    try {
        const [reparations] = await mechanicForReparation(userid)
        res.json(reparations)
    } catch (error) {
        res.json({ fatal: error.message })
    }
});



// router.get('/mechanic/:mechanicId', async (req, res) => {
//     const { mechanicId } = req.params;
//     try {
//         const [mechanic] = await reparationByMechanic(mechanicId)
//         res.json(mechanic)
//     } catch (error) {
//         res.json({ fatal: error.message })
//     }
// });


router.delete('/:reparationId', async (req, res) => {
    const { reparationId } = req.params

    try {
        const [reparation] = await getById(reparationId)
        const [result] = await deleteById(reparationId)
        console.log(result)
        res.json(reparation[0])
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;