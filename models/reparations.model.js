const create = ({ status, type, reparation, price, billnumber }) => {

    return db.query(
        'insert into reparations (status, type, reparation, price, billnumber) values (?,?,?,?,?)', [status, type, reparation, price, billnumber]
    )

}

const getById = (reparationId) => {
    return db.query('select * from reparations where id = ?', [reparationId])
}

module.exports = { create, getById }