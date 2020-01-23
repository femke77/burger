const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

//get all the burgers in the database and send to template as object
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne("burger_name", req.body.burger_name, function (result) {
        res.redirect("/");
    })

});

router.put("/api/burgers/:id", (req, res) => {
    var id = req.params.id;
    //update to devoured with button click. 

});

module.exports = router;



  //post a new burger to the database
