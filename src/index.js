"use strict";

let express = require("express");
let complate = require("complate-express");
let path = require("path");

let app = express();
app.use(complate(path.resolve(__dirname, "../dist/bundle.js")));

app.get("/", (req, res) => {
	res.status(200);
	res.complate("site-index", { title: "Hello World" });
});

let server = app.listen(3000, () => {
	let addr = server.address();
	let { address, port } = addr;
	if(address === "::") {
		address = "localhost";
	}
	console.log(`→ http://${address}:${port}`); // eslint-disable-line no-console
});
