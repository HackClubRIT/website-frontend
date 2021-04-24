import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, c as create_component, e as element, q as query_selector_all, f as detach_dev, g as claim_space, l as claim_component, h as claim_element, j as children, m as attr_dev, n as add_location, o as insert_dev, r as mount_component, p as append_dev, w as transition_in, x as transition_out, y as destroy_component } from './client.5825bcd5.js';
import { H as Header } from './Header.a54f77f9.js';

/* src/routes/scrapbook.svelte generated by Svelte v3.37.0 */
const file = "src/routes/scrapbook.svelte";

function create_fragment(ctx) {
	let t0;
	let header;
	let t1;
	let div9;
	let div0;
	let t2;
	let div1;
	let t3;
	let div2;
	let t4;
	let div3;
	let t5;
	let div4;
	let t6;
	let div5;
	let t7;
	let div6;
	let t8;
	let div7;
	let t9;
	let div8;
	let current;

	header = new Header({
			props: {
				title: /*title*/ ctx[0],
				description: /*description*/ ctx[1]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			create_component(header.$$.fragment);
			t1 = space();
			div9 = element("div");
			div0 = element("div");
			t2 = space();
			div1 = element("div");
			t3 = space();
			div2 = element("div");
			t4 = space();
			div3 = element("div");
			t5 = space();
			div4 = element("div");
			t6 = space();
			div5 = element("div");
			t7 = space();
			div6 = element("div");
			t8 = space();
			div7 = element("div");
			t9 = space();
			div8 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-zs2w4p\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(header.$$.fragment, nodes);
			t1 = claim_space(nodes);
			div9 = claim_element(nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div0 = claim_element(div9_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			t2 = claim_space(div9_nodes);
			div1 = claim_element(div9_nodes, "DIV", { class: true });
			children(div1).forEach(detach_dev);
			t3 = claim_space(div9_nodes);
			div2 = claim_element(div9_nodes, "DIV", { class: true });
			children(div2).forEach(detach_dev);
			t4 = claim_space(div9_nodes);
			div3 = claim_element(div9_nodes, "DIV", { class: true });
			children(div3).forEach(detach_dev);
			t5 = claim_space(div9_nodes);
			div4 = claim_element(div9_nodes, "DIV", { class: true });
			children(div4).forEach(detach_dev);
			t6 = claim_space(div9_nodes);
			div5 = claim_element(div9_nodes, "DIV", { class: true });
			children(div5).forEach(detach_dev);
			t7 = claim_space(div9_nodes);
			div6 = claim_element(div9_nodes, "DIV", { class: true });
			children(div6).forEach(detach_dev);
			t8 = claim_space(div9_nodes);
			div7 = claim_element(div9_nodes, "DIV", { class: true });
			children(div7).forEach(detach_dev);
			t9 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			children(div8).forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Scrapbook";
			attr_dev(div0, "class", "card h-96 w-96");
			add_location(div0, file, 15, 2, 354);
			attr_dev(div1, "class", "card h-96 w-96");
			add_location(div1, file, 16, 2, 386);
			attr_dev(div2, "class", "card h-96 w-96");
			add_location(div2, file, 17, 2, 418);
			attr_dev(div3, "class", "card h-96 w-96");
			add_location(div3, file, 18, 2, 450);
			attr_dev(div4, "class", "card h-96 w-96");
			add_location(div4, file, 19, 2, 482);
			attr_dev(div5, "class", "card h-96 w-96");
			add_location(div5, file, 20, 2, 514);
			attr_dev(div6, "class", "card h-96 w-96");
			add_location(div6, file, 21, 2, 546);
			attr_dev(div7, "class", "card h-96 w-96");
			add_location(div7, file, 22, 2, 578);
			attr_dev(div8, "class", "card h-96 w-96");
			add_location(div8, file, 23, 2, 610);
			attr_dev(div9, "class", "container grid grid-cols-3 gap-4");
			add_location(div9, file, 14, 0, 305);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(header, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, div9, anchor);
			append_dev(div9, div0);
			append_dev(div9, t2);
			append_dev(div9, div1);
			append_dev(div9, t3);
			append_dev(div9, div2);
			append_dev(div9, t4);
			append_dev(div9, div3);
			append_dev(div9, t5);
			append_dev(div9, div4);
			append_dev(div9, t6);
			append_dev(div9, div5);
			append_dev(div9, t7);
			append_dev(div9, div6);
			append_dev(div9, t8);
			append_dev(div9, div7);
			append_dev(div9, t9);
			append_dev(div9, div8);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const header_changes = {};
			if (dirty & /*title*/ 1) header_changes.title = /*title*/ ctx[0];
			if (dirty & /*description*/ 2) header_changes.description = /*description*/ ctx[1];
			header.$set(header_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(header.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(header.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(header, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div9);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Scrapbook", slots, []);
	let { title = "Hack Club RIT’s Scrapbook" } = $$props;
	let { description = "A diary of what our Hack Clubbers are learning & making." } = $$props;
	const writable_props = ["title", "description"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Scrapbook> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("description" in $$props) $$invalidate(1, description = $$props.description);
	};

	$$self.$capture_state = () => ({ Header, title, description });

	$$self.$inject_state = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("description" in $$props) $$invalidate(1, description = $$props.description);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [title, description];
}

class Scrapbook extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0, description: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Scrapbook",
			options,
			id: create_fragment.name
		});
	}

	get title() {
		throw new Error("<Scrapbook>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set title(value) {
		throw new Error("<Scrapbook>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get description() {
		throw new Error("<Scrapbook>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set description(value) {
		throw new Error("<Scrapbook>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Scrapbook;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyYXBib29rLjUwYmZmMmY4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3NjcmFwYm9vay5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIuc3ZlbHRlXCI7XG5cbiAgZXhwb3J0IGxldCB0aXRsZSA9IFwiSGFjayBDbHViIFJJVOKAmXMgU2NyYXBib29rXCI7XG4gIGV4cG9ydCBsZXQgZGVzY3JpcHRpb24gPVxuICAgIFwiQSBkaWFyeSBvZiB3aGF0IG91ciBIYWNrIENsdWJiZXJzIGFyZSBsZWFybmluZyAmIG1ha2luZy5cIjtcbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5TY3JhcGJvb2s8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPEhlYWRlciB7dGl0bGV9IHtkZXNjcmlwdGlvbn0gLz5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lciBncmlkIGdyaWQtY29scy0zIGdhcC00XCI+XG4gIDxkaXYgY2xhc3M9XCJjYXJkIGgtOTYgdy05NlwiLz5cbiAgPGRpdiBjbGFzcz1cImNhcmQgaC05NiB3LTk2XCIvPlxuICA8ZGl2IGNsYXNzPVwiY2FyZCBoLTk2IHctOTZcIi8+XG4gIDxkaXYgY2xhc3M9XCJjYXJkIGgtOTYgdy05NlwiLz5cbiAgPGRpdiBjbGFzcz1cImNhcmQgaC05NiB3LTk2XCIvPlxuICA8ZGl2IGNsYXNzPVwiY2FyZCBoLTk2IHctOTZcIi8+XG4gIDxkaXYgY2xhc3M9XCJjYXJkIGgtOTYgdy05NlwiLz5cbiAgPGRpdiBjbGFzcz1cImNhcmQgaC05NiB3LTk2XCIvPlxuICA8ZGl2IGNsYXNzPVwiY2FyZCBoLTk2IHctOTZcIi8+XG48L2Rpdj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQUdhLEtBQUssR0FBRywyQkFBMkI7T0FDbkMsV0FBVyxHQUNwQiwwREFBMEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
