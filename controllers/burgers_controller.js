const express = require("express");

var router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    cat.all(function(data) {
      var hbsObject = {
        cats: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });



  module.exports = router;


  //get the burgers in the database
  //post a new burger to the database
  