const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "Jhs19411360",
    host: "localhost",
    database: "todo",
    port: 5432
})

module.exports = pool;