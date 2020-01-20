const orm = require("./config/orm.js");

orm.updateOne("burgers", "devoured", "1", "burger_name", "Bleu Ribbon Burger")