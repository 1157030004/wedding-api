const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const wishRoute = require("./routes/wishes");

dotenv.config();
app.use(express.json());

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(console.log("Connected to MongoDB"))
	.catch((e) => console.log(e));

app.use("/api/wishes", wishRoute);

app.listen("5000", () => {
	console.log("Backend is running");
});
