const knex = require('../utils/database')

function getLogin(login, password) {
    return knex("user")
        .select("*")
        .where('login', login)
        .where('password', password).limit(1);
}

module.exports = { getLogin }