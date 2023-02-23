const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	return res.send({ message: "tudo ok com o medo GET do index" });
});

router.post("/", (req, res) => {
	return res.send({ message: "tudo ok com o medo POST do index" });
});

module.exports = router;
