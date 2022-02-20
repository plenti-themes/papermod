/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	destroy_each,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from '../web_modules/svelte/internal/index.mjs';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (20:6) {#each body as paragraph}
function create_each_block(ctx) {
	let p;
	let raw_value = /*paragraph*/ ctx[7] + "";

	return {
		c() {
			p = element("p");
		},
		l(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			p_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, p, anchor);
			p.innerHTML = raw_value;
		},
		p(ctx, dirty) {
			if (dirty & /*body*/ 64 && raw_value !== (raw_value = /*paragraph*/ ctx[7] + "")) p.innerHTML = raw_value;;
		},
		d(detaching) {
			if (detaching) detach(p);
		}
	};
}

function create_fragment(ctx) {
	let section;
	let img;
	let img_src_value;
	let t0;
	let p;
	let t1;
	let t2;
	let header;
	let h1;
	let t3;
	let t4;
	let div;
	let span0;
	let t5;
	let t6;
	let span1;
	let t7;
	let t8;
	let t9;
	let span2;
	let t10;
	let t11;
	let t12;
	let article;
	let each_value = /*body*/ ctx[6];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			section = element("section");
			img = element("img");
			t0 = space();
			p = element("p");
			t1 = text(/*caption*/ ctx[5]);
			t2 = space();
			header = element("header");
			h1 = element("h1");
			t3 = text(/*title*/ ctx[0]);
			t4 = space();
			div = element("div");
			span0 = element("span");
			t5 = text(/*date*/ ctx[1]);
			t6 = space();
			span1 = element("span");
			t7 = text("/ ");
			t8 = text(/*readTime*/ ctx[2]);
			t9 = space();
			span2 = element("span");
			t10 = text("/ ");
			t11 = text(/*author*/ ctx[3]);
			t12 = space();
			article = element("article");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			img = claim_element(section_nodes, "IMG", { src: true, alt: true, class: true });
			t0 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", { class: true });
			var p_nodes = children(p);
			t1 = claim_text(p_nodes, /*caption*/ ctx[5]);
			p_nodes.forEach(detach);
			t2 = claim_space(section_nodes);
			header = claim_element(section_nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			h1 = claim_element(header_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t3 = claim_text(h1_nodes, /*title*/ ctx[0]);
			h1_nodes.forEach(detach);
			t4 = claim_space(header_nodes);
			div = claim_element(header_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			span0 = claim_element(div_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t5 = claim_text(span0_nodes, /*date*/ ctx[1]);
			span0_nodes.forEach(detach);
			t6 = claim_space(div_nodes);
			span1 = claim_element(div_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t7 = claim_text(span1_nodes, "/ ");
			t8 = claim_text(span1_nodes, /*readTime*/ ctx[2]);
			span1_nodes.forEach(detach);
			t9 = claim_space(div_nodes);
			span2 = claim_element(div_nodes, "SPAN", {});
			var span2_nodes = children(span2);
			t10 = claim_text(span2_nodes, "/ ");
			t11 = claim_text(span2_nodes, /*author*/ ctx[3]);
			span2_nodes.forEach(detach);
			div_nodes.forEach(detach);
			header_nodes.forEach(detach);
			t12 = claim_space(section_nodes);
			article = claim_element(section_nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(article_nodes);
			}

			article_nodes.forEach(detach);
			section_nodes.forEach(detach);
			this.h();
		},
		h() {
			if (img.src !== (img_src_value = "assets/images/" + /*pic*/ ctx[4])) attr(img, "src", img_src_value);
			attr(img, "alt", "title");
			attr(img, "class", "svelte-17dn2c9");
			attr(p, "class", "caption");
			attr(h1, "class", " svelte-17dn2c9");
			attr(span0, "class", "");
			attr(span1, "class", "");
			attr(div, "class", "byLine svelte-17dn2c9");
			attr(header, "class", " svelte-17dn2c9");
			attr(article, "class", "");
			attr(section, "class", "isMarginAutoCentered svelte-17dn2c9");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			append(section, img);
			append(section, t0);
			append(section, p);
			append(p, t1);
			append(section, t2);
			append(section, header);
			append(header, h1);
			append(h1, t3);
			append(header, t4);
			append(header, div);
			append(div, span0);
			append(span0, t5);
			append(div, t6);
			append(div, span1);
			append(span1, t7);
			append(span1, t8);
			append(div, t9);
			append(div, span2);
			append(span2, t10);
			append(span2, t11);
			append(section, t12);
			append(section, article);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(article, null);
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*pic*/ 16 && img.src !== (img_src_value = "assets/images/" + /*pic*/ ctx[4])) {
				attr(img, "src", img_src_value);
			}

			if (dirty & /*caption*/ 32) set_data(t1, /*caption*/ ctx[5]);
			if (dirty & /*title*/ 1) set_data(t3, /*title*/ ctx[0]);
			if (dirty & /*date*/ 2) set_data(t5, /*date*/ ctx[1]);
			if (dirty & /*readTime*/ 4) set_data(t8, /*readTime*/ ctx[2]);
			if (dirty & /*author*/ 8) set_data(t11, /*author*/ ctx[3]);

			if (dirty & /*body*/ 64) {
				each_value = /*body*/ ctx[6];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(article, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(section);
			destroy_each(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title } = $$props,
		{ date } = $$props,
		{ readTime } = $$props,
		{ author } = $$props,
		{ pic } = $$props,
		{ caption } = $$props,
		{ body } = $$props;

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("date" in $$props) $$invalidate(1, date = $$props.date);
		if ("readTime" in $$props) $$invalidate(2, readTime = $$props.readTime);
		if ("author" in $$props) $$invalidate(3, author = $$props.author);
		if ("pic" in $$props) $$invalidate(4, pic = $$props.pic);
		if ("caption" in $$props) $$invalidate(5, caption = $$props.caption);
		if ("body" in $$props) $$invalidate(6, body = $$props.body);
	};

	return [title, date, readTime, author, pic, caption, body];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			title: 0,
			date: 1,
			readTime: 2,
			author: 3,
			pic: 4,
			caption: 5,
			body: 6
		});
	}
}

export default Component;