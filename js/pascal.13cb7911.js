("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireec1d.register("35JkW",(function(e,t){var r,n,i,a;r=e.exports,n="pascal",i=function(){return d},Object.defineProperty(r,n,{get:i,set:a,enumerable:!0,configurable:!0});var o=function(e){for(var t={},r=e.split(" "),n=0;n<r.length;++n)t[r[n]]=!0;return t}("absolute and array asm begin case const constructor destructor div do downto else end file for function goto if implementation in inherited inline interface label mod nil not object of operator or packed procedure program record reintroduce repeat self set shl shr string then to type unit until uses var while with xor as class dispinterface except exports finalization finally initialization inline is library on out packed property raise resourcestring threadvar try absolute abstract alias assembler bitpacked break cdecl continue cppdecl cvar default deprecated dynamic enumerator experimental export external far far16 forward generic helper implements index interrupt iocheck local message name near nodefault noreturn nostackframe oldfpccall otherwise overload override pascal platform private protected public published read register reintroduce result safecall saveregisters softfloat specialize static stdcall stored strict unaligned unimplemented varargs virtual write"),l={null:!0},u=/[+\-*&%=<>!?|\/]/;function s(e,t){var r,n=e.next();if("#"==n&&t.startOfLine)return e.skipToEnd(),"meta";if('"'==n||"'"==n)return t.tokenize=(r=n,function(e,t){for(var n,i=!1,a=!1;null!=(n=e.next());){if(n==r&&!i){a=!0;break}i=!i&&"\\"==n}return!a&&i||(t.tokenize=null),"string"}),t.tokenize(e,t);if("("==n&&e.eat("*"))return t.tokenize=c,c(e,t);if("{"==n)return t.tokenize=f,f(e,t);if(/[\[\]\(\),;\:\.]/.test(n))return null;if(/\d/.test(n))return e.eatWhile(/[\w\.]/),"number";if("/"==n&&e.eat("/"))return e.skipToEnd(),"comment";if(u.test(n))return e.eatWhile(u),"operator";e.eatWhile(/[\w\$_]/);var i=e.current();return o.propertyIsEnumerable(i)?"keyword":l.propertyIsEnumerable(i)?"atom":"variable"}function c(e,t){for(var r,n=!1;r=e.next();){if(")"==r&&n){t.tokenize=null;break}n="*"==r}return"comment"}function f(e,t){for(var r;r=e.next();)if("}"==r){t.tokenize=null;break}return"comment"}var d={startState:function(){return{tokenize:null}},token:function(e,t){if(e.eatSpace())return null;var r=(t.tokenize||s)(e,t);return r},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{block:{open:"(*",close:"*)"}}}}}));
//# sourceMappingURL=pascal.13cb7911.js.map
