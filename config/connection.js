const mysql = require("mysql");
var connection;

if (process.env.JAWSSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "2hearts",
        database: "burgers_db"
    })
}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log(`Connected to database.\n`)

});


module.exports = connection;