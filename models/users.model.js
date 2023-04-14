
const create = ({ name, surname, birthdate, dni, phone, email, username, password, role }) => {

    return db.query(
        'insert into users (name, surname, birthdate, dni, phone, email, username, password, role) values (?,?,?,?,?,?,?,?,?)', [name, surname, birthdate, dni, phone, email, username, password, role]
    )

}


const getAll = () => {
    return db.query('select * from users')
}


const getById = (userId) => {
    return db.query('select * from users where id = ?', [userId])
}


const getByDNI = (userDNI) => {
    return db.query('select * from users where dni = ?', [userDNI])
}


const getByEmail = (email) => {
    return db.query('select * from users where email = ?', [email])
}



module.exports = { create, getAll, getByDNI, getById, getByEmail }