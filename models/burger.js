const orm = require("../config/orm.js");

//burger model
var burger = {
    //get all the rows of the burgers table and send in cb
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    //insert a new row into the burgers table and send in cb
    insertOne: function (col, val, cb) {
        orm.insertOne("burgers", col, val, function (res) {
            cb(res);
        });
    },
    //update a column where a condition is stated and send back in cb
    updateOne: function (col1, val1, col2, val2, cb) {
        orm.updateOne("burgers", col1, val1, col2, val2, function (res) {
            cb(res);
        })
    }
};

module.exports = burger;