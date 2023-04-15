
const create = ({ name, surname, birthdate, dni, phone, email, username, password, role }) => {

    return db.query(
        'insert into users (name, surname, birthdate, dni, phone, email, username, password, role) values (?,?,?,?,?,?,?,?,?)', [name, surname, birthdate, dni, phone, email, username, password, role]
    )

}


const getById = (userId) => {
    return db.query('select * from users where id = ?', [userId])
}


const getByDni = (userDNI) => {
    return db.query('select * from users where dni = ?', [userDNI])
}


const getByEmail = (email) => {
    return db.query('select * from users where email = ?', [email])
}

//he creado esta query porque pensamos en hacer el login a traves del DNI, pero al poner en los validadores un DNI verdadero y en la base de datos, DNI unico, creo que es mas conveniente poder meter tambien el email para que sea más facil hacer las puebas
const getBydniORemail = (dni, email) => {
    return db.query('SELECT * FROM taller_mecanico_proyecto.users WHERE users.dni = ? or email = ?', [dni, email])
}


const deleteById = (id) => {
    return db.query('delete from users where users.id = ?', [id])
}


module.exports = { create, getByDni, getById, getByEmail, deleteById, getBydniORemail }


// TODO:
//get byDNI or email 