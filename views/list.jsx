import { registerMacro, createElement } from "complate-stream";

registerMacro("list-group", (_, ...items) => {
	return <ul class="list-group">
		{items.map(item => {
			return <li class="list-group-item">{item}</li>;
		})}
	</ul>;
});
