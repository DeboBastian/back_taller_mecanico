
const create = ({ name, surname, email, phone, dni, address }) => {

    return db.query(
        'insert into clients (name, surname, email, phone, dni, address) values (?,?,?,?,?,?)', [name, surname, email, phone, dni, address]
    )

}


const getAll = () => {
    return db.query('select * from clients')
}


const getById = (clientId) => {
    return db.query('select * from clients where id = ?', [clientId])
}

const deleteById = (id) => {
    return db.query('delete from clients where clients.id = ?', [id])
}

module.exports = { create, getAll, getById, deleteById }
