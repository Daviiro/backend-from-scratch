const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	return res.send({ message: "tudo ok com o medo GET da rota de usuários" });
});

router.post("/", (req, res) => {
	return res.send({ message: "tudo ok com o medo POST da rota de usuários" });
});

router.post("/create", (req, res) => {
	return res.send({ message: "Seu usuário foi criado!" });
});

module.exports = router;
