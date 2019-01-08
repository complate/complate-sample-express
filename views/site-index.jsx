import DefaultLayout from "./components/layout";
import { createElement } from "complate-stream";

export function SiteIndex({ title, _layout }) {
	let content = <p>
		lorem ipsum dolor sit amet
	</p>;

	return _layout === false ? content : <DefaultLayout title={title}>
		<h1>{title}</h1>

		{content}

		<h2>Also available:</h2>
		<ul>
			<li><a href="/?fragment=yes">fragment-only</a></li>
			<li><a href="/bootstrap">bootstrap-demo</a></li>
		</ul>
	</DefaultLayout>;
}
