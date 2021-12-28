const Client = require('pg').Pool;
//dbConfig
const client = new Client({
    user: "postgres",
    database: "test-ticket",
    password: "",
    host: "localhost",
    port: 5432
})
module.exports = client;
/*
//testing connecting
client.connect();
client.query('Select * from tickets', (err, res) => {
    if (!err) {
        console.log(res.rows)
    } else {
        console.log(err.message)
    }

    client.end()
})
*/
