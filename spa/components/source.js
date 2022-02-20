/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	binding_callbacks,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	run_all,
	safe_not_equal,
	set_data,
	space,
	text,
	toggle_class
} from '../web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let div0;
	let span0;
	let t0;
	let t1;
	let pre0;
	let code0;
	let t2;
	let t3_value = /*content*/ ctx[0].type + "";
	let t3;
	let t4;
	let t5;
	let button0;

	let t6_value = (/*copied*/ ctx[3] === /*templateEl*/ ctx[1]
	? "copied"
	: "copy") + "";

	let t6;
	let t7;
	let div1;
	let span1;
	let t8;
	let t9;
	let pre1;
	let code1;
	let t10;

	let t11_value = (/*content*/ ctx[0].type === "index"
	? ""
	: /*content*/ ctx[0].type + "/") + "";

	let t11;
	let t12_value = /*content*/ ctx[0].filename + "";
	let t12;
	let t13;
	let button1;

	let t14_value = (/*copied*/ ctx[3] === /*contentEl*/ ctx[2]
	? "copied"
	: "copy") + "";

	let t14;
	let mounted;
	let dispose;

	return {
		c() {
			div0 = element("div");
			span0 = element("span");
			t0 = text("Template:");
			t1 = space();
			pre0 = element("pre");
			code0 = element("code");
			t2 = text("layouts/content/");
			t3 = text(t3_value);
			t4 = text(".svelte");
			t5 = text("\n    ");
			button0 = element("button");
			t6 = text(t6_value);
			t7 = space();
			div1 = element("div");
			span1 = element("span");
			t8 = text("Content:");
			t9 = space();
			pre1 = element("pre");
			code1 = element("code");
			t10 = text("content/");
			t11 = text(t11_value);
			t12 = text(t12_value);
			t13 = text("\n    ");
			button1 = element("button");
			t14 = text(t14_value);
			this.h();
		},
		l(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			span0 = claim_element(div0_nodes, "SPAN", {});
			var span0_nodes = children(span0);
			t0 = claim_text(span0_nodes, "Template:");
			span0_nodes.forEach(detach);
			t1 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			code0 = claim_element(pre0_nodes, "CODE", { class: true });
			var code0_nodes = children(code0);
			t2 = claim_text(code0_nodes, "layouts/content/");
			t3 = claim_text(code0_nodes, t3_value);
			t4 = claim_text(code0_nodes, ".svelte");
			code0_nodes.forEach(detach);
			t5 = claim_text(pre0_nodes, "\n    ");
			button0 = claim_element(pre0_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t6 = claim_text(button0_nodes, t6_value);
			button0_nodes.forEach(detach);
			pre0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t7 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			span1 = claim_element(div1_nodes, "SPAN", {});
			var span1_nodes = children(span1);
			t8 = claim_text(span1_nodes, "Content:");
			span1_nodes.forEach(detach);
			t9 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			code1 = claim_element(pre1_nodes, "CODE", { class: true });
			var code1_nodes = children(code1);
			t10 = claim_text(code1_nodes, "content/");
			t11 = claim_text(code1_nodes, t11_value);
			t12 = claim_text(code1_nodes, t12_value);
			code1_nodes.forEach(detach);
			t13 = claim_text(pre1_nodes, "\n    ");
			button1 = claim_element(pre1_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t14 = claim_text(button1_nodes, t14_value);
			button1_nodes.forEach(detach);
			pre1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(code0, "class", "svelte-h385oz");
			toggle_class(code0, "selected", /*copied*/ ctx[3] === /*templateEl*/ ctx[1]);
			attr(button0, "class", "svelte-h385oz");
			attr(pre0, "class", "svelte-h385oz");
			attr(div0, "class", "svelte-h385oz");
			attr(code1, "class", "svelte-h385oz");
			toggle_class(code1, "selected", /*copied*/ ctx[3] === /*contentEl*/ ctx[2]);
			attr(button1, "class", "svelte-h385oz");
			attr(pre1, "class", "svelte-h385oz");
			attr(div1, "class", "svelte-h385oz");
		},
		m(target, anchor) {
			insert(target, div0, anchor);
			append(div0, span0);
			append(span0, t0);
			append(div0, t1);
			append(div0, pre0);
			append(pre0, code0);
			append(code0, t2);
			append(code0, t3);
			append(code0, t4);
			/*code0_binding*/ ctx[5](code0);
			append(pre0, t5);
			append(pre0, button0);
			append(button0, t6);
			insert(target, t7, anchor);
			insert(target, div1, anchor);
			append(div1, span1);
			append(span1, t8);
			append(div1, t9);
			append(div1, pre1);
			append(pre1, code1);
			append(code1, t10);
			append(code1, t11);
			append(code1, t12);
			/*code1_binding*/ ctx[7](code1);
			append(pre1, t13);
			append(pre1, button1);
			append(button1, t14);

			if (!mounted) {
				dispose = [
					listen(button0, "click", /*click_handler*/ ctx[6]),
					listen(button1, "click", /*click_handler_1*/ ctx[8])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*content*/ 1 && t3_value !== (t3_value = /*content*/ ctx[0].type + "")) set_data(t3, t3_value);

			if (dirty & /*copied, templateEl*/ 10) {
				toggle_class(code0, "selected", /*copied*/ ctx[3] === /*templateEl*/ ctx[1]);
			}

			if (dirty & /*copied, templateEl*/ 10 && t6_value !== (t6_value = (/*copied*/ ctx[3] === /*templateEl*/ ctx[1]
			? "copied"
			: "copy") + "")) set_data(t6, t6_value);

			if (dirty & /*content*/ 1 && t11_value !== (t11_value = (/*content*/ ctx[0].type === "index"
			? ""
			: /*content*/ ctx[0].type + "/") + "")) set_data(t11, t11_value);

			if (dirty & /*content*/ 1 && t12_value !== (t12_value = /*content*/ ctx[0].filename + "")) set_data(t12, t12_value);

			if (dirty & /*copied, contentEl*/ 12) {
				toggle_class(code1, "selected", /*copied*/ ctx[3] === /*contentEl*/ ctx[2]);
			}

			if (dirty & /*copied, contentEl*/ 12 && t14_value !== (t14_value = (/*copied*/ ctx[3] === /*contentEl*/ ctx[2]
			? "copied"
			: "copy") + "")) set_data(t14, t14_value);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div0);
			/*code0_binding*/ ctx[5](null);
			if (detaching) detach(t7);
			if (detaching) detach(div1);
			/*code1_binding*/ ctx[7](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { content } = $$props;
	let templateEl;
	let contentEl;
	let copied;

	const copy = async el => {
		if (!navigator.clipboard) {
			return;
		}

		try {
			await navigator.clipboard.writeText(el.innerHTML);
			$$invalidate(3, copied = el);
			setTimeout(() => $$invalidate(3, copied = null), 500);
		} catch(err) {
			console.error("Failed to copy!", err);
		}
	};

	function code0_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			templateEl = $$value;
			$$invalidate(1, templateEl);
		});
	}

	const click_handler = () => copy(templateEl);

	function code1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			contentEl = $$value;
			$$invalidate(2, contentEl);
		});
	}

	const click_handler_1 = () => copy(contentEl);

	$$self.$$set = $$props => {
		if ("content" in $$props) $$invalidate(0, content = $$props.content);
	};

	return [
		content,
		templateEl,
		contentEl,
		copied,
		copy,
		code0_binding,
		click_handler,
		code1_binding,
		click_handler_1
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { content: 0 });
	}
}

export default Component;