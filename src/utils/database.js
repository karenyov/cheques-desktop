
const knex =  require('knex');

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "./base.db"
    },
    useNullAsDefault: true
});

module.exports = connectedKnex;
