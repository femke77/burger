const connection = require("./connection.js");


var orm = {

    //select all rows from requested table, cb with result
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            //console.log(result);
            cb(result);
        });
    },

    //insert into selected table, value at selected column, cb result
    insertOne: function (tableInput, col, value, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, col, value], function (err, result) {
            if (err) throw err;
            //console.log(result);
            cb(result);

        });
    },

    //update a row's column value in selected table using where query, cb result
    updateOne: function (tableInput, col1, value1, col2, value2, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, col1, value1, col2, value2], function (err, result) {
            if (err) throw err;
            //console.log(result);
            cb(result);
        });
    }

   
}


module.exports = orm;