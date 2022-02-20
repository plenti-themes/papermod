/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	space
} from '../web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let div;
	let input;
	let t;
	let ul;

	return {
		c() {
			div = element("div");
			input = element("input");
			t = space();
			ul = element("ul");
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { id: true });
			var div_nodes = children(div);

			input = claim_element(div_nodes, "INPUT", {
				class: true,
				placeholder: true,
				"aria-label": true,
				type: true
			});

			t = claim_space(div_nodes);
			ul = claim_element(div_nodes, "UL", { id: true, "aria-label": true });
			children(ul).forEach(detach);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(input, "class", "searchInput svelte-tjn9x7");
			input.autofocus = "";
			attr(input, "placeholder", "search ↵");
			attr(input, "aria-label", "search");
			attr(input, "type", "search");
			attr(ul, "id", "searchResults");
			attr(ul, "aria-label", "search results");
			attr(div, "id", "searchbox");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, input);
			append(div, t);
			append(div, ul);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Component;