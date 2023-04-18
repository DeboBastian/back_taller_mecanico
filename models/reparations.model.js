const tokengen = require("tokengn")

const create = ({ status, type, reparation, price, users_id, cars_id }) => {

    return db.query(
        'insert into reparations (status, type, reparation, price, bill_number,users_id, cars_id) values (?,?,?,?,?,?,?)', [status, type, reparation, price, tokengen(), users_id, cars_id]
    )

}


const getById = (reparationId) => {
    return db.query('select * from reparations where id = ?', [reparationId])
}


const filterByCar = (carId) => {
    return db.query('SELECT * from reparations WHERE cars_id = ?', [carId])
}


const getAll = () => {
    return db.query('select * from reparations')
}

module.exports = { create, getById, filterByCar, getAll }