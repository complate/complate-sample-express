import { registerMacro, createElement } from "complate-stream";

registerMacro("default-layout", (params, ...children) => <html>
	<head>
		<meta charset="utf-8" />
		<title>{params.title}</title>
		{(params.stylesheets || []).map(({ uri, hash }) => {
			return <link rel="stylesheet" href={uri}
					integrity={hash} crossorigin="anonymous" />;
		})}
	</head>

	<body class={params["body-class"]}>
		{children}
	</body>
</html>);
