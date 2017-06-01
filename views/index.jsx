import "./layout";
import renderer, { registerMacro, createElement } from "complate-stream";

const STYLESHEETS = [{
	uri: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
	hash: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
}];

registerMacro("site-index", ({ title }) => {
	return <default-layout title={title} stylesheets={STYLESHEETS}
			body-class="container-fluid">
		<h1>{title}</h1>
	</default-layout>;
});

export default renderer("<!DOCTYPE html>");
