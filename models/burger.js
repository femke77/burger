const orm = require("../config/orm.js");


//inside `burger.js`, create the code that will call the ORM functions 
//using burger specific input for the ORM.

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cb) {
        orm.insertOne("burgers", col, val, function(res){
            cb(res);
        });
    },
    updateOne: function(cb) {
        orm.updateOne("burgers", col1, val1, col2, val2, function(res){
            cb(res);
        })
    }

};



module.exports = burger;