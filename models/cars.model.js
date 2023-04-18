const create = ({ chasis, registration, brand, model, color, km, year, doors, type, fuel, damages, clients_id }) => {

    return db.query(
        'insert into cars (chasis, registration, brand, model, color, km, year, doors, type, fuel, damages, clients_id) values (?,?,?,?,?,?,?,?,?,?,?,?)', [chasis, registration, brand, model, color, km, year, doors, type, fuel, damages, clients_id]
    )

}

const getById = (carId) => {
    return db.query('select * from cars where id = ?', [carId])
}


const getAll = () => {
    return db.query('select * from cars')
}


module.exports = { create, getById, getAll }