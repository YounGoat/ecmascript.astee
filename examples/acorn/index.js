'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	, acorn = require('acorn')
	, noda = require('noda')
	, esprima = require('esprima')
	
	/* in-package */
	;

let code = noda.inRead('sources/jquery.js', 'utf8');

let options = {
	/**
	 * Indicates the ECMAScript version to parse. Must be either 3, 5, 6 (2015), 7 (2016), 8 (2017), 
	 * 9 (2018) or 10 (2019, partial support). This influences support for strict mode, the set of 
	 * reserved words, and support for new syntax features. Default is 10.
	 */
	ecmaVersion: 10, // ECMA2019

	/**
	 * Can be either "script" or "module".
	 */
	sourceType: 'script', 

	// ...
};
let tree = acorn.parse(code, options);
console.log(tree);