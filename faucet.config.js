let config = {
	manifest: false,
	bundles: [{
		entryPoint: "./views/index.jsx",
		target: "./dist/bundle.js",
		format: "cjs",
		name: "render",
		transpiler: {
			features: ["es2015", "jsx"],
			jsx: { pragma: "createElement" }
		}
	}]
};

module.exports = {
	js: config
};
