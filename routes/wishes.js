const router = require("express").Router();
const Wish = require("../models/Wish");

router.post("/", async (req, res) => {
	try {
		const newWish = new Wish({
			name: req.body.name,
			desc: req.body.desc,
		});

		const wish = await newWish.save();
		res.status(200).json(wish);
	} catch (e) {
		res.status(500).json(e);
	}
});

router.get("/", async (req, res) => {
	try {
		const wishes = await Wish.find();
		res.status(200).json(wishes);
	} catch (e) {
		res.status(500).json(e);
	}
});

module.exports = router;
