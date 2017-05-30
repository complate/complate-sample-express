import renderer, { registerMacro, createElement } from "complate-stream";

registerMacro("site-index", (params, ...children) => {
	let { title } = params;
	return <html>
		<head>
			<meta charset="utf-8" />
			<title>{title}</title>
		</head>

		<body>
			<h1>{title}</h1>
		</body>
	</html>;
});

export default renderer("<!DOCTYPE html>");
