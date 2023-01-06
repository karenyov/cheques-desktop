const knex = require('../utils/database')

function getAll() {
    return knex("bank").select("*");
}

module.exports = { getAll }