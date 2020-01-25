const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

//get all the burgers in the database and send to template as object
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        //console.log(hbsObject);
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
    //"UPDATE ?? SET ?? = ? WHERE ?? = ?";
    burger.updateOne("devoured", 1, "id", id, function (result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });


});

module.exports = router;



  //post a new burger to the database
