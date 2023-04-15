
const create = ({ name, surname, birthdate, dni, phone, email, username, password, role }) => {

    return db.query(
        'insert into users (name, surname, birthdate, dni, phone, email, username, password, role) values (?,?,?,?,?,?,?,?,?)', [name, surname, birthdate, dni, phone, email, username, password, role]
    )

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


const deleteById = (id) => {
    return db.query('delete from taller_mecanico_proyecto where users.id = ?', [id])
}


module.exports = { create, getByDNI, getById, getByEmail, deleteById }


// TODO:
//get byDNI or email 