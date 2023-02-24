const express = require("express");
const router = express.Router();
const auth = require("../Middlewares/auth");

router.get("/", auth, (req, res) => {
	console.log(res.locals.auth_data);
	return res.send({ message: "tudo ok com o medo GET do index" });
});

router.post("/", (req, res) => {
	return res.send({ message: "tudo ok com o medo POST do index" });
});

module.exports = router;
