const mysql = require("mysql");
var connection;

//if jaws db var found in process environment connect to it else connect to localhost 
if (process.env.JAWSDB_URL) {
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

//connect to db
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log(`Connected to database.\n`)

});


module.exports = connection;