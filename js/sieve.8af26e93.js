("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireec1d.register("839O9",(function(e,n){var t,r,i,u;function o(e){for(var n={},t=e.split(" "),r=0;r<t.length;++r)n[t[r]]=!0;return n}t=e.exports,r="sieve",i=function(){return d},Object.defineProperty(t,r,{get:i,set:u,enumerable:!0,configurable:!0});var l=o("if elsif else stop require"),a=o("true false not");function f(e,n){var t,r=e.next();if("/"==r&&e.eat("*"))return n.tokenize=p,p(e,n);if("#"===r)return e.skipToEnd(),"comment";if('"'==r)return n.tokenize=(t=r,function(e,n){for(var r,i=!1;null!=(r=e.next())&&(r!=t||i);)i=!i&&"\\"==r;return i||(n.tokenize=f),"string"}),n.tokenize(e,n);if("("==r)return n._indent.push("("),n._indent.push("{"),null;if("{"===r)return n._indent.push("{"),null;if(")"==r&&(n._indent.pop(),n._indent.pop()),"}"===r)return n._indent.pop(),null;if(","==r)return null;if(";"==r)return null;if(/[{}\(\),;]/.test(r))return null;if(/\d/.test(r))return e.eatWhile(/[\d]/),e.eat(/[KkMmGg]/),"number";if(":"==r)return e.eatWhile(/[a-zA-Z_]/),e.eatWhile(/[a-zA-Z0-9_]/),"operator";e.eatWhile(/\w/);var i=e.current();return"text"==i&&e.eat(":")?(n.tokenize=s,"string"):l.propertyIsEnumerable(i)?"keyword":a.propertyIsEnumerable(i)?"atom":null}function s(e,n){return n._multiLineString=!0,e.sol()?("."==e.next()&&e.eol()&&(n._multiLineString=!1,n.tokenize=f),"string"):(e.eatSpace(),"#"==e.peek()?(e.skipToEnd(),"comment"):(e.skipToEnd(),"string"))}function p(e,n){for(var t,r=!1;null!=(t=e.next());){if(r&&"/"==t){n.tokenize=f;break}r="*"==t}return"comment"}const d={startState:function(e){return{tokenize:f,baseIndent:e||0,_indent:[]}},token:function(e,n){return e.eatSpace()?null:(n.tokenize||f)(e,n)},indent:function(e,n,t){var r=e._indent.length;return n&&"}"==n[0]&&r--,r<0&&(r=0),r*t.unit},languageData:{indentOnInput:/^\s*\}$/}}}));
//# sourceMappingURL=sieve.8af26e93.js.map
