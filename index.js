//aula 6 - refatorar o codigo com async e await
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const bodyParser = require("body-parser");

const url = "mongodb://localhost:27017/learning";

mongoose.connect(url);

mongoose.connection.on("error", (err) => {
	console.log("Erro na conexão com o banco de dados");
});

mongoose.connection.on("disconnected", (err) => {
	console.log("Aplicação desconectada do banco de dados");
});

mongoose.connection.on("connected", () => {
	console.log("Aplicação conectada ao banco de dados");
});

// configurar o body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const indexRoute = require("./Routes/index");
const usersRoute = require("./Routes/users");

app.use("/", indexRoute);
app.use("/users", usersRoute);

app.listen(3001);

module.exports = app;
