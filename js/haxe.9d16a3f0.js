!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireec1d.register("9lAsL",(function(t,n){function r(e){return{type:e,style:"keyword"}}e(t.exports,"haxe",(function(){return ae})),e(t.exports,"hxml",(function(){return ie}));var a,i=r("keyword a"),o=r("keyword b"),l=r("keyword c"),u=r("operator"),c={type:"atom",style:"atom"},f={type:"attribute",style:"attribute"},s=r("typedef"),d={if:i,while:i,else:o,do:o,try:o,return:l,break:l,continue:l,new:l,throw:l,var:r("var"),inline:f,static:f,using:r("import"),public:f,private:f,cast:r("cast"),import:r("import"),macro:r("macro"),function:r("function"),catch:r("catch"),untyped:r("untyped"),callback:r("cb"),for:r("for"),switch:r("switch"),case:r("case"),default:r("default"),in:u,never:r("property_access"),trace:r("trace"),class:s,abstract:s,enum:s,interface:s,typedef:s,extends:s,implements:s,dynamic:s,true:c,false:c,null:c},p=/[+\-*&%=<>!?|]/;function m(e,t,n){return t.tokenize=n,n(e,t)}function v(e,t){for(var n,r=!1;null!=(n=e.next());){if(n==t&&!r)return!0;r=!r&&"\\"==n}}function y(e,t,n){return s=e,a=n,t}function b(e,t){var n=e.next();if('"'==n||"'"==n)return m(e,t,(r=n,function(e,t){return v(e,r)&&(t.tokenize=b),y("string","string")}));if(/[\[\]{}\(\),;\:\.]/.test(n))return y(n);if("0"==n&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),y("number","number");if(/\d/.test(n)||"-"==n&&e.eat(/\d/))return e.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/),y("number","number");if(t.reAllowed&&"~"==n&&e.eat(/\//))return v(e,"/"),e.eatWhile(/[gimsu]/),y("regexp","string.special");if("/"==n)return e.eat("*")?m(e,t,h):e.eat("/")?(e.skipToEnd(),y("comment","comment")):(e.eatWhile(p),y("operator",null,e.current()));if("#"==n)return e.skipToEnd(),y("conditional","meta");if("@"==n)return e.eat(/:/),e.eatWhile(/[\w_]/),y("metadata","meta");if(p.test(n))return e.eatWhile(p),y("operator",null,e.current());if(/[A-Z]/.test(n))return e.eatWhile(/[\w_<>]/),y("type","type",a=e.current());e.eatWhile(/[\w_]/);var r,a=e.current(),i=d.propertyIsEnumerable(a)&&d[a];return i&&t.kwAllowed?y(i.type,i.style,a):y("variable","variable",a)}function h(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=b;break}r="*"==n}return y("comment","comment")}var x={atom:!0,number:!0,variable:!0,string:!0,regexp:!0};function k(e,t,n,r,a,i){this.indented=e,this.column=t,this.type=n,this.prev=a,this.info=i,null!=r&&(this.align=r)}function g(e,t){for(var n=e.localVars;n;n=n.next)if(n.name==t)return!0}function w(e,t){if(/[a-z]/.test(t.charAt(0)))return!1;for(var n=e.importedtypes.length,r=0;r<n;r++)if(e.importedtypes[r]==t)return!0}function A(e){for(var t=V.state,n=t.importedtypes;n;n=n.next)if(n.name==e)return;t.importedtypes={name:e,next:t.importedtypes}}var V={state:null,column:null,marked:null,cc:null};function S(){for(var e=arguments.length-1;e>=0;e--)V.cc.push(arguments[e])}function T(){return S.apply(null,arguments),!0}function W(e,t){for(var n=t;n;n=n.next)if(n.name==e)return!0;return!1}function z(e){var t=V.state;if(t.context){if(V.marked="def",W(e,t.localVars))return;t.localVars={name:e,next:t.localVars}}else if(t.globalVars){if(W(e,t.globalVars))return;t.globalVars={name:e,next:t.globalVars}}}var E={name:"this",next:null};function O(){V.state.context||(V.state.localVars=E),V.state.context={prev:V.state.context,vars:V.state.localVars}}function D(){V.state.localVars=V.state.context.vars,V.state.context=V.state.context.prev}function P(e,t){var n=function(){var n=V.state;n.lexical=new k(n.indented,V.stream.column(),e,null,n.lexical,t)};return n.lex=!0,n}function Z(){var e=V.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function _(e){return function t(n){return n==e?T():";"==e?S():T(t)}}function I(e){return"@"==e?T(B):"var"==e?T(P("vardef"),M,_(";"),Z):"keyword a"==e?T(P("form"),N,I,Z):"keyword b"==e?T(P("form"),I,Z):"{"==e?T(P("}"),O,K,Z,D):";"==e?T():"attribute"==e?T(q):"function"==e?T(Y):"for"==e?T(P("form"),_("("),P(")"),U,_(")"),Z,I,Z):"variable"==e?T(P("stat"),C):"switch"==e?T(P("form"),N,P("}","switch"),_("{"),K,Z,Z):"case"==e?T(N,_(":")):"default"==e?T(_(":")):"catch"==e?T(P("form"),O,_("("),re,_(")"),I,Z,D):"import"==e?T(L,_(";")):"typedef"==e?T(R):S(P("stat"),N,_(";"),Z)}function N(e){return x.hasOwnProperty(e)||"type"==e?T(j):"function"==e?T(Y):"keyword c"==e?T($):"("==e?T(P(")"),$,_(")"),Z,j):"operator"==e?T(N):"["==e?T(P("]"),J($,"]"),Z,j):"{"==e?T(P("}"),J(H,"}"),Z,j):T()}function $(e){return e.match(/[;\}\)\],]/)?S():S(N)}function j(e,t){return"operator"==e&&/\+\+|--/.test(t)?T(j):"operator"==e||":"==e?T(N):";"!=e?"("==e?T(P(")"),J(N,")"),Z,j):"."==e?T(G,j):"["==e?T(P("]"),N,_("]"),Z,j):void 0:void 0}function q(e){return"attribute"==e?T(q):"function"==e?T(Y):"var"==e?T(M):void 0}function B(e){return":"==e||"variable"==e?T(B):"("==e?T(P(")"),J(F,")"),Z,I):void 0}function F(e){if("variable"==e)return T()}function L(e,t){return"variable"==e&&/[A-Z]/.test(t.charAt(0))?(A(t),T()):"variable"==e||"property"==e||"."==e||"*"==t?T(L):void 0}function R(e,t){return"variable"==e&&/[A-Z]/.test(t.charAt(0))?(A(t),T()):"type"==e&&/[A-Z]/.test(t.charAt(0))?T():void 0}function C(e){return":"==e?T(Z,I):S(j,_(";"),Z)}function G(e){if("variable"==e)return V.marked="property",T()}function H(e){if("variable"==e&&(V.marked="property"),x.hasOwnProperty(e))return T(_(":"),N)}function J(e,t){function n(r){return","==r?T(e,n):r==t?T():T(_(t))}return function(r){return r==t?T():S(e,n)}}function K(e){return"}"==e?T():S(I,K)}function M(e,t){return"variable"==e?(z(t),T(ee,Q)):T()}function Q(e,t){return"="==t?T(N,Q):","==e?T(M):void 0}function U(e,t){return"variable"==e?(z(t),T(X,N)):S()}function X(e,t){if("in"==t)return T()}function Y(e,t){return"variable"==e||"type"==e?(z(t),T(Y)):"new"==t?T(Y):"("==e?T(P(")"),O,J(re,")"),Z,ee,I,D):void 0}function ee(e){if(":"==e)return T(te)}function te(e){return"type"==e||"variable"==e?T():"{"==e?T(P("}"),J(ne,"}"),Z):void 0}function ne(e){if("variable"==e)return T(ee)}function re(e,t){if("variable"==e)return z(t),T(ee)}D.lex=!0,Z.lex=!0;var ae={startState:function(e){return{tokenize:b,reAllowed:!0,kwAllowed:!0,cc:[],lexical:new k(-e,0,"block",!1),importedtypes:["Int","Float","String","Void","Std","Bool","Dynamic","Array"],context:null,indented:0}},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation()),e.eatSpace())return null;var n=t.tokenize(e,t);return"comment"==s?n:(t.reAllowed=!("operator"!=s&&"keyword c"!=s&&!s.match(/^[\[{}\(,;:]$/)),t.kwAllowed="."!=s,function(e,t,n,r,a){var i=e.cc;for(V.state=e,V.stream=a,V.marked=null,V.cc=i,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((i.length?i.pop():I)(n,r)){for(;i.length&&i[i.length-1].lex;)i.pop()();return V.marked?V.marked:"variable"==n&&g(e,r)?"variableName.local":"variable"==n&&w(e,r)?"variableName.special":t}}(t,n,s,a,e))},indent:function(e,t,n){if(e.tokenize!=b)return 0;var r=t&&t.charAt(0),a=e.lexical;"stat"==a.type&&"}"==r&&(a=a.prev);var i=a.type,o=r==i;return"vardef"==i?a.indented+4:"form"==i&&"{"==r?a.indented:"stat"==i||"form"==i?a.indented+n.unit:"switch"!=a.info||o?a.align?a.column+(o?0:1):a.indented+(o?0:n.unit):a.indented+(/^(?:case|default)\b/.test(t)?n.unit:2*n.unit)},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}},ie={startState:function(){return{define:!1,inString:!1}},token:function(e,t){var n=e.peek(),r=e.sol();if("#"==n)return e.skipToEnd(),"comment";if(r&&"-"==n){var a="variable-2";return e.eat(/-/),"-"==e.peek()&&(e.eat(/-/),a="keyword a"),"D"==e.peek()&&(e.eat(/[D]/),a="keyword c",t.define=!0),e.eatWhile(/[A-Z]/i),a}n=e.peek();return 0==t.inString&&"'"==n&&(t.inString=!0,e.next()),1==t.inString?(e.skipTo("'")||e.skipToEnd(),"'"==e.peek()&&(e.next(),t.inString=!1),"string"):(e.next(),null)},languageData:{commentTokens:{line:"#"}}}}))}();
//# sourceMappingURL=haxe.9d16a3f0.js.map
