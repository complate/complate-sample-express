import { registerMacro, createElement } from "complate-stream";

registerMacro("default-layout", (params, ...children) => <html>
	<head>
		<meta charset="utf-8" />
		<title>{params.title}</title>
		<style-sheets items={params.stylesheets} />
	</head>

	<body class={params["body-class"]}>
		{children}
	</body>
</html>);

registerMacro("style-sheets", ({ items }) => {
	if(!items || !items.length) {
		return;
	}

	return items.map(({ uri, hash }) => {
		return <link rel="stylesheet" href={uri} // eslint-disable-next-line indent
				integrity={hash} crossorigin="anonymous" />;
	});
});
