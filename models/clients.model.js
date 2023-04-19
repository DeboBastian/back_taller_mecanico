
const create = ({ name, surname, email, phone, dni, address, card_number }) => {

    return db.query(
        'insert into clients (name, surname, email, phone, dni, address, card_number) values (?,?,?,?,?,?,?)', [name, surname, email, phone, dni, address, card_number]
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
