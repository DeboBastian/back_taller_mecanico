const tokengen = require("tokengn")

const create = ({ type, reparation, price, users_id, cars_id }) => {

    return db.query(
        'insert into reparations ( type, reparation, price, bill_number,users_id, cars_id) values (?,?,?,?,?,?)', [type, reparation, price, tokengen(), users_id, cars_id]
    )

}

const getAll = () => {
    return db.query('select * from reparations')
}


const getById = (reparationId) => {
    return db.query('select * from reparations where id = ?', [reparationId])
}


const mechanicForReparation = (userId) => {
    return db.query(`SELECT * FROM reparations r 
                    JOIN users u on r.users_id = u.id
                    where r.id = ?`, [userId])
}

// const reparationByMechanic = (userId) => {
//     return db.query(`SELECT * FROM reparations where users_id = ?`, [userId])
// }

const filterByUser = (userId) => {
    return db.query(`SELECT * FROM reparations r 
                    JOIN cars c on r.cars_id = c.id
                    where users_id = ?`, [userId])
}

const deleteById = (carId) => {
    return db.query('delete from reparations where reparations.id = ?', [carId])
}


const updateById = (reparationId, { status, type, reparation, price, users_id }) => {
    return db.query(` update reparations set status = ?, type = ?, reparation = ?, price = ?, users_id = ? where id = ?`,

        [status, type, reparation, price, users_id, reparationId]
    )
}


module.exports = { create, getById, getAll, mechanicForReparation, filterByUser, deleteById, updateById }