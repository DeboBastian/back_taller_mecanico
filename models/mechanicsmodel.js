
const getAll = () => {
    return db.query('SELECT * FROM users WHERE role = "mechanic"')
}


const getById = (mechanicId) => {
    return db.query('select * from users WHERE role = "mechanic" and id = ?', [mechanicId])
}

module.exports = { getAll, getById }