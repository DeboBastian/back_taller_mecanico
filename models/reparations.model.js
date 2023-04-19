const tokengen = require("tokengn")

const create = ({ status, type, reparation, price, users_id, cars_id }) => {

    return db.query(
        'insert into reparations (status, type, reparation, price, bill_number,users_id, cars_id) values (?,?,?,?,?,?,?)', [status, type, reparation, price, tokengen(), users_id, cars_id]
    )

}

const getAll = () => {
    return db.query('select * from reparations')
}


const getById = (reparationId) => {
    return db.query('select * from reparations where id = ?', [reparationId])
}


const filterByUser = (userId) => {
    return db.query(`SELECT * FROM reparations r 
                    JOIN cars c on r.cars_id = c.id
                    where users_id = ?`, [userId])
}



module.exports = { create, getById, filterByUser, getAll }