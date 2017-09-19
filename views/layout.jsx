import { createElement } from "complate-stream";

export default function DefaultLayout(params, ...children) {
	return <html>
		<head>
			<meta charset="utf-8" />
			<title>{params.title}</title>
			<StyleSheets items={params.stylesheets} />
		</head>

		<body class={params["body-class"]}>
			{children}
		</body>
	</html>;
}

function StyleSheets({ items }) {
	if(!items || !items.length) {
		return;
	}

	return items.map(({ uri, hash }) => {
		return <link rel="stylesheet" href={uri} // eslint-disable-next-line indent
				integrity={hash} crossorigin="anonymous" />;
	});
}
