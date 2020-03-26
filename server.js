require("dotenv").config();

const express = require("express");
const path = require("path");
const anime = require('animejs');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {console.log("Listening on port %s.", PORT);});

module.exports = app;