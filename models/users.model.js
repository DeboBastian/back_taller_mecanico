
const create = ({ name, surname, birthdate, dni, phone, email, username, password, role }) => {

    return db.query(
        'insert into users (name, surname, birthdate, dni, phone, email, username, password, role) values (?,?,?,?,?,?,?,?,?)', [name, surname, birthdate, dni, phone, email, username, password, role]
    )

}

module.exports = { create }