const tokengen = require("tokengn")

const create = ({ status, type, reparation, price }) => {

    return db.query(
        'insert into reparations (status, type, reparation, price, bill_number) values (?,?,?,?,?)', [status, type, reparation, price, tokengen()]
    )

}

const getById = (reparationId) => {
    return db.query('select * from reparations where id = ?', [reparationId])
}

module.exports = { create, getById }