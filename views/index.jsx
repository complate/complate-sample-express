import ContentPanel from "./panel";
import ListGroup from "./list";
import DefaultLayout from "./layout";
import renderer, { createElement } from "complate-stream";

const STYLESHEETS = [{
	uri: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
	hash: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
}];

let { renderView, registerView } = renderer("<!DOCTYPE html>");

registerView(function SiteIndex({ title }) {
	return <DefaultLayout title={title} // eslint-disable-next-line indent
			stylesheets={STYLESHEETS} body-class="container-fluid">
		<h1>{title}</h1>

		<ContentPanel title="Welcome">
			<p>lorem ipsum</p>

			<ListGroup>
				foo
				<em>bar</em>
				baz
			</ListGroup>

			<p>dolor sit amet</p>
		</ContentPanel>
	</DefaultLayout>;
});

export default renderView;
