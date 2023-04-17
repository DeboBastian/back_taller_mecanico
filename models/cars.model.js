const create = ({ chasis, registration, brand, model, color, km, year, doors, type, fuel, damages }) => {

    return db.query(
        'insert into cars (chasis, registration, brand, model, color, km, year, doors, type, fuel, damages) values (?,?,?,?,?,?,?,?,?,?,?)', [chasis, registration, brand, model, color, km, year, doors, type, fuel, damages]
    )

}

const getById = (carId) => {
    return db.query('select * from cars where id = ?', [carId])
}


module.exports = { create, getById }