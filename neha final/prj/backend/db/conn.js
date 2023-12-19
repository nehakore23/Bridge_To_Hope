const mysql = require("mysql2");

const conn = mysql.createConnection({
    user: "root",
    password: "Neha@2311",
    host: "localhost",
    database: "ngo"
})

conn.connect((err) => {
    if (err) throw err;
    console.log("DB Connected")
})

module.exports = { conn }