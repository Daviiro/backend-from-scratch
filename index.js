//aula 1 - Instalando express, executando a api e recebendo query
const express = require("express");

const app = express();

app.get("/", (req, res) => {
	let obj = req.query;
	return res.send({
		message: `Você enviou o nome ${obj.nome} com idade de ${obj.idade}`,
	});
});

app.post("/", (req, res) => {
	return res.send({ message: "Método POST funcionando" });
});

app.listen(3001);

module.exports = app;
