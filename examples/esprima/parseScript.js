'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	, colors = require('colors')
	, noda = require('noda')
	, esprima = require('esprima')
	
	/* in-package */
	;

let code = noda.inRead('sources/jquery.js', 'utf8');
let tree = esprima.parseScript(code);

function walk(node) {
	if (Array.isArray(node)) {
		node.forEach(walk);
		return;
	}

	// console.log(colors.blue(node.type));

	if (walk[node.type]) {
		walk[node.type](node);
	}

	// Find child nodes.

	let names = [];
	for (let key in node) {
		if (!node.hasOwnProperty(key)) {
			continue;
		}

		if (node[key] && typeof node[key] == 'object') {
			names.push(key);
		}
	}

	names.forEach(name => {
		walk(node[name]);
	});
}

Object.assign(walk, {
	Identifier: node => {
		console.log(node);
	},
});

walk(tree);
