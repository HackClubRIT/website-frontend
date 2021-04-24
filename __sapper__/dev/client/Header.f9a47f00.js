import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, h as claim_element, j as children, k as claim_text, f as detach_dev, g as claim_space, m as attr_dev, n as add_location, o as insert_dev, p as append_dev, B as set_data_dev, C as noop } from './client.9d7c3be9.js';

/* src/components/Header.svelte generated by Svelte v3.37.0 */

const file = "src/components/Header.svelte";

function create_fragment(ctx) {
	let div1;
	let div0;
	let h1;
	let t0;
	let t1;
	let p;
	let t2;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t0 = text(/*title*/ ctx[0]);
			t1 = space();
			p = element("p");
			t2 = text(/*description*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, /*title*/ ctx[0]);
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, /*description*/ ctx[1]);
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "text-6xl");
			add_location(h1, file, 7, 4, 170);
			attr_dev(p, "class", "text-xl w-2/3 mx-auto");
			add_location(p, file, 8, 4, 208);
			attr_dev(div0, "class", "w-2/3 mx-auto top-0 px-10 text-center");
			add_location(div0, file, 6, 2, 114);
			attr_dev(div1, "class", "w-full py-16 bg-dark text-white");
			add_location(div1, file, 5, 0, 66);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t0);
			append_dev(div0, t1);
			append_dev(div0, p);
			append_dev(p, t2);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*title*/ 1) set_data_dev(t0, /*title*/ ctx[0]);
			if (dirty & /*description*/ 2) set_data_dev(t2, /*description*/ ctx[1]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
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
	validate_slots("Header", slots, []);
	let { title } = $$props;
	let { description } = $$props;
	const writable_props = ["title", "description"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Header> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("description" in $$props) $$invalidate(1, description = $$props.description);
	};

	$$self.$capture_state = () => ({ title, description });

	$$self.$inject_state = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("description" in $$props) $$invalidate(1, description = $$props.description);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [title, description];
}

class Header extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0, description: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Header",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*title*/ ctx[0] === undefined && !("title" in props)) {
			console.warn("<Header> was created without expected prop 'title'");
		}

		if (/*description*/ ctx[1] === undefined && !("description" in props)) {
			console.warn("<Header> was created without expected prop 'description'");
		}
	}

	get title() {
		throw new Error("<Header>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set title(value) {
		throw new Error("<Header>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get description() {
		throw new Error("<Header>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set description(value) {
		throw new Error("<Header>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Header as H };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLmY5YTQ3ZjAwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgdGl0bGU7XG4gIGV4cG9ydCBsZXQgZGVzY3JpcHRpb247XG48L3NjcmlwdD5cblxuPGRpdiBjbGFzcz1cInctZnVsbCBweS0xNiBiZy1kYXJrIHRleHQtd2hpdGVcIj5cbiAgPGRpdiBjbGFzcz1cInctMi8zIG14LWF1dG8gdG9wLTAgcHgtMTAgdGV4dC1jZW50ZXJcIj5cbiAgICA8aDEgY2xhc3M9XCJ0ZXh0LTZ4bFwiPnt0aXRsZX08L2gxPlxuICAgIDxwIGNsYXNzPVwidGV4dC14bCB3LTIvMyBteC1hdXRvXCI+XG4gICAgICB7ZGVzY3JpcHRpb259XG4gICAgPC9wPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQU8wQixHQUFLOzs7NkJBRXhCLEdBQVc7Ozs7Ozs7Ozs7dUNBRlEsR0FBSzs7Ozs7NENBRXhCLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VEQUZRLEdBQUs7bUVBRXhCLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BUkwsS0FBSztPQUNMLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
