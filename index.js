//aula 2 - trabalhando com rotas
const express = require("express");
const app = express();

const indexRoute = require("./Routes/index");
const usersRoute = require("./Routes/users");

app.use("/", indexRoute);
app.use("/users", usersRoute);

app.listen(3001);

module.exports = app;
