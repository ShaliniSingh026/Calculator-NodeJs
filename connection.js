
// for database connention
const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Shalini@1999",
    database: "Calculator"
})

client.on("connect", () => {
    console.log("Database connection");
})
client.on("end", () => {
    console.log("Connection end");
})

module.exports = client;