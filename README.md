#	astee
__ECMAScript AST toolkit__

>	If links in this document not avaiable, please access [README on GitHub](./README.md) directly.

##  Description

You may learn some popular ECMAScript compilers in this package.

##	ToC

*	[Terms](#terms)
*	[References](#references)

##	Links

*	[CHANGE LOG](./CHANGELOG.md)
*	[Homepage](https://github.com/YounGoat/ecmascript.astee)

##	Terms

*	[AST, Abstract Syntax Tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree)
*	[Syntactic Analysis (Parsing)](https://en.wikipedia.org/wiki/Parsing)
*	[Lexical Analysis (Tokenization)](https://en.wikipedia.org/wiki/Lexical_analysis)

##	References

Popular Compilers:  
( Compilers will create AST from code. Some of them provides methods to generate code from AST.)

*	[Acorn][^acorn], [@npm](https://www.npmjs.com/package/acorn)  
	A parser parsing JavaScript into an [ESTree][^estree] syntax tree. Many other compilers are based on it. It is also used in [webpack][^webpack] as default parser for JavaScript.
	*	[Acorn AST walker](https://github.com/acornjs/acorn/tree/master/acorn-walk), [@npm](https://www.npmjs.com/package/acorn-walk)
	*	[Acorn loose parser](https://github.com/acornjs/acorn/tree/master/acorn-loose), [@npm](https://www.npmjs.com/package/acorn-loose)

*	[@babel/parser][^babelparser], [@npm](https://www.npmjs.com/package/@babel/parser)
	> The Babel parser generates AST according to Babel AST format. It is based on [ESTree][^estree] spec with the following deviations: (There is now an estree plugin which __reverts__ these deviations) ...
	*	[@babel/generator](https://babeljs.io/docs/en/next/babel-generator)

*	[babylon](https://github.com/babel/babylon), [@npm](https://www.npmjs.com/package/babylon)  
	Predecessor of [@babel/parser][^babelparser].

*	[Closure Compiler](https://developers.google.com/closure/compiler/)
	> ... a tool for making JavaScript download and run faster. Instead of compiling from a source language to machine code, it compiles from JavaScript to better JavaScript. It parses your JavaScript, analyzes it, removes dead code and rewrites and minimizes what's left. It also checks syntax, variable references, and types, and warns about common JavaScript pitfalls.

*	[Espree](https://github.com/eslint/espree), [@npm](https://www.npmjs.com/package/expree)
	> ... started out as a fork of [Esprima][^esprima] v1.2.2, ... is now built on top of [Acorn][^acorn], ...   
	> The goal of Espree is to produce output that is similar to Esprima with a similar API so that it can be used in place of Esprima.

*	[Esprima][^esprima], [@npm](https://www.npmjs.com/package/esprima)
	> ... a high performance, standard-compliant ECMAScript parser written in ECMAScript (also popularly known as JavaScript).  
	> Sensible syntax tree format as standardized by [ESTree][^estree] project 

*	[Shift Parser](https://shift-ast.org/parser.html), [@npm](https://www.npmjs.com/package/shift-parser)
	> generates a Shift AST from ECMAScript program text

*	[SpiderMonkey][^spidermonkey]
	> ... Mozilla's JavaScript engine written in C and C++. 
	*	[Parser API](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API)

*	[terser](https://github.com/fabiosantoscode/terser), [@npm](https://www.npmjs.com/package/terser)
	> A JavaScript parser and mangler/compressor toolkit for ES6+.  

	Used by [TerserWebpackPlugin](https://webpack.js.org/plugins/terser-webpack-plugin/) which is used in [webpack][^webpack] by default. 

*	[UglifyJS](http://lisperator.net/uglifyjs/)
	> ... a JavaScript compressor/minifier written in JavaScript.

Code Generators:

*	[Escodegen](https://github.com/estools/escodegen), [@npm](https://www.npmjs.com/package/escodegen)
	> ... an ECMAScript (also popularly known as JavaScript) code generator from Mozilla's Parser API AST. 

Online Tools:

*	[AST Explorer](https://astexplorer.net/)
*	[Speed Comparison](https://esprima.org/test/compare.html)  
	provided by [Esprima][^esprima]

Specs & Articles:
*	[The ESTree Spec][^estree]
*	[The Super Tiny Compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)
*	[Distinguishing a Script and a Module](https://esprima.readthedocs.io/en/4.0/syntactic-analysis.html#distinguishing-a-script-and-a-module)
*	[UglifyJS — why not switching to SpiderMonkey AST](http://lisperator.net/blog/uglifyjs-why-not-switching-to-spidermonkey-ast/)

Others:

*	[V8](https://github.com/v8)
	*	[V8 JavaScript Engine](https://github.com/v8/v8)
	*	[v8.dev](https://v8.dev/)
*	[benchmark](https://benchmarkjs.com/), [@npm](https://www.npmjs.com/package/benchmark)
*	[WebAssembly](https://webassembly.js.org/)

-- THE END --

[^acorn]: https://github.com/acornjs/acorn
[^babelparser]: https://babeljs.io/docs/en/next/babel-parser.html
[^esprima]: https://esprima.org/
[^estree]: https://github.com/estree/estree
[^spidermonkey]: https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey
[^webpack]: https://webpack.js.org/