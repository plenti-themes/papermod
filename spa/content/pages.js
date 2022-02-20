/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_component,
	destroy_component,
	detach,
	element,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

import Uses from '../components/source.js';
import Archive from '../components/archive.js';
import CategoriesList from '../components/categoriesList.js';
import Search from '../components/search.js';
import TagsList from '../components/tagsList.js';

function create_if_block_3(ctx) {
	let archive;
	let current;

	archive = new Archive({
			props: { allContent: /*allContent*/ ctx[1] }
		});

	return {
		c() {
			create_component(archive.$$.fragment);
		},
		l(nodes) {
			claim_component(archive.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(archive, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const archive_changes = {};
			if (dirty & /*allContent*/ 2) archive_changes.allContent = /*allContent*/ ctx[1];
			archive.$set(archive_changes);
		},
		i(local) {
			if (current) return;
			transition_in(archive.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(archive.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(archive, detaching);
		}
	};
}

// (19:2) {#if page === "search" }
function create_if_block_2(ctx) {
	let search;
	let current;
	search = new Search({});

	return {
		c() {
			create_component(search.$$.fragment);
		},
		l(nodes) {
			claim_component(search.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(search, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			transition_in(search.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(search.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(search, detaching);
		}
	};
}

// (23:2) {#if page === "tags" }
function create_if_block_1(ctx) {
	let tagslist;
	let current;

	tagslist = new TagsList({
			props: { allContent: /*allContent*/ ctx[1] }
		});

	return {
		c() {
			create_component(tagslist.$$.fragment);
		},
		l(nodes) {
			claim_component(tagslist.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(tagslist, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const tagslist_changes = {};
			if (dirty & /*allContent*/ 2) tagslist_changes.allContent = /*allContent*/ ctx[1];
			tagslist.$set(tagslist_changes);
		},
		i(local) {
			if (current) return;
			transition_in(tagslist.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(tagslist.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(tagslist, detaching);
		}
	};
}

// (27:2) {#if page === "categories" }
function create_if_block(ctx) {
	let categorieslist;
	let current;
	categorieslist = new CategoriesList({});

	return {
		c() {
			create_component(categorieslist.$$.fragment);
		},
		l(nodes) {
			claim_component(categorieslist.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(categorieslist, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			transition_in(categorieslist.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(categorieslist.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(categorieslist, detaching);
		}
	};
}

function create_fragment(ctx) {
	let section;
	let h1;
	let t0;
	let t1;
	let t2;
	let t3;
	let t4;
	let t5;
	let p;
	let a;
	let t6;
	let current;
	let if_block0 = /*page*/ ctx[0] === "archive" && create_if_block_3(ctx);
	let if_block1 = /*page*/ ctx[0] === "search" && create_if_block_2(ctx);
	let if_block2 = /*page*/ ctx[0] === "tags" && create_if_block_1(ctx);
	let if_block3 = /*page*/ ctx[0] === "categories" && create_if_block(ctx);

	return {
		c() {
			section = element("section");
			h1 = element("h1");
			t0 = text(/*page*/ ctx[0]);
			t1 = space();
			if (if_block0) if_block0.c();
			t2 = space();
			if (if_block1) if_block1.c();
			t3 = space();
			if (if_block2) if_block2.c();
			t4 = space();
			if (if_block3) if_block3.c();
			t5 = space();
			p = element("p");
			a = element("a");
			t6 = text("Back home");
			this.h();
		},
		l(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			h1 = claim_element(section_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, /*page*/ ctx[0]);
			h1_nodes.forEach(detach);
			t1 = claim_space(section_nodes);
			if (if_block0) if_block0.l(section_nodes);
			t2 = claim_space(section_nodes);
			if (if_block1) if_block1.l(section_nodes);
			t3 = claim_space(section_nodes);
			if (if_block2) if_block2.l(section_nodes);
			t4 = claim_space(section_nodes);
			if (if_block3) if_block3.l(section_nodes);
			t5 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			a = claim_element(p_nodes, "A", { href: true });
			var a_nodes = children(a);
			t6 = claim_text(a_nodes, "Back home");
			a_nodes.forEach(detach);
			p_nodes.forEach(detach);
			section_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h1, "class", "svelte-1elib52");
			attr(a, "href", ".");
			attr(section, "class", "isMarginAutoCentered svelte-1elib52");
		},
		m(target, anchor) {
			insert(target, section, anchor);
			append(section, h1);
			append(h1, t0);
			append(section, t1);
			if (if_block0) if_block0.m(section, null);
			append(section, t2);
			if (if_block1) if_block1.m(section, null);
			append(section, t3);
			if (if_block2) if_block2.m(section, null);
			append(section, t4);
			if (if_block3) if_block3.m(section, null);
			append(section, t5);
			append(section, p);
			append(p, a);
			append(a, t6);
			current = true;
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*page*/ 1) set_data(t0, /*page*/ ctx[0]);

			if (/*page*/ ctx[0] === "archive") {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*page*/ 1) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_3(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(section, t2);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*page*/ ctx[0] === "search") {
				if (if_block1) {
					if (dirty & /*page*/ 1) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_2(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(section, t3);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (/*page*/ ctx[0] === "tags") {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty & /*page*/ 1) {
						transition_in(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block_1(ctx);
					if_block2.c();
					transition_in(if_block2, 1);
					if_block2.m(section, t4);
				}
			} else if (if_block2) {
				group_outros();

				transition_out(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				check_outros();
			}

			if (/*page*/ ctx[0] === "categories") {
				if (if_block3) {
					if (dirty & /*page*/ 1) {
						transition_in(if_block3, 1);
					}
				} else {
					if_block3 = create_if_block(ctx);
					if_block3.c();
					transition_in(if_block3, 1);
					if_block3.m(section, t5);
				}
			} else if (if_block3) {
				group_outros();

				transition_out(if_block3, 1, 1, () => {
					if_block3 = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			transition_in(if_block2);
			transition_in(if_block3);
			current = true;
		},
		o(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			transition_out(if_block2);
			transition_out(if_block3);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(section);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			if (if_block3) if_block3.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { page } = $$props,
		{ title } = $$props,
		{ description } = $$props,
		{ content } = $$props,
		{ allContent } = $$props;

	$$self.$$set = $$props => {
		if ("page" in $$props) $$invalidate(0, page = $$props.page);
		if ("title" in $$props) $$invalidate(2, title = $$props.title);
		if ("description" in $$props) $$invalidate(3, description = $$props.description);
		if ("content" in $$props) $$invalidate(4, content = $$props.content);
		if ("allContent" in $$props) $$invalidate(1, allContent = $$props.allContent);
	};

	return [page, allContent, title, description, content];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			page: 0,
			title: 2,
			description: 3,
			content: 4,
			allContent: 1
		});
	}
}

export default Component;