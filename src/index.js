"use strict";

let WritableStream = require("./writable_stream");
let render = require("../dist/bundle");
let express = require("express");

let app = express();

app.get("/", (req, res) => {
	res.status(200);

	render(new WritableStream(res), "site-index", { title: "Hello World" });
	res.end();
});

let server = app.listen(3000, () => {
	let addr = server.address();
	// eslint-disable-next-line no-console
	console.log(`→ http://${addr.address}:${addr.port}`);
});
