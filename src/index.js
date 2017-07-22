"use strict";

let express = require("express");
let Renderer = require("complate-express");
let path = require("path");

let app = express();
let renderer = new Renderer(path.resolve(__dirname, "../dist/bundle.js"));

app.get("/", (req, res) => {
	res.status(200);
	renderer.render(res, "site-index", { title: "Hello World" });
});

let server = app.listen(3000, () => {
	let addr = server.address();
	// eslint-disable-next-line no-console
	console.log(`→ http://${addr.address}:${addr.port}`);
});
