import { registerMacro, createElement } from "complate-stream";

registerMacro("content-panel", ({ title }, ...content) => {
	return <div class="panel panel-default">
		<div class="panel-heading">
			<h3 class="panel-title">{title}</h3>
		</div>

		<div class="panel-body">{content}</div>
	</div>;
});
