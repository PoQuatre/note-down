("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireec1d.register("5jCgf",(function(e,t){var n,r,a,u,i;function l(e,t){return i=t,e}function o(e,t){var n,r,a,u=e.next();if("<"!=u||!e.eat("!")){if("<"==u&&e.eat("?"))return t.tokenize=(r="meta",a="?>",function(e,t){for(;!e.eol();){if(e.match(a)){t.tokenize=o;break}e.next()}return r}),l("meta",u);if("#"==u&&e.eatWhile(/[\w]/))return l("atom","tag");if("|"==u)return l("keyword","separator");if(u.match(/[\(\)\[\]\-\.,\+\?>]/))return l(null,u);if(u.match(/[\[\]]/))return l("rule",u);if('"'==u||"'"==u)return t.tokenize=(n=u,function(e,t){for(var r,a=!1;null!=(r=e.next());){if(r==n&&!a){t.tokenize=o;break}a=!a&&"\\"==r}return l("string","tag")}),t.tokenize(e,t);if(e.eatWhile(/[a-zA-Z\?\+\d]/)){var i=e.current();return null!==i.substr(i.length-1,i.length).match(/\?|\+/)&&e.backUp(1),l("tag","tag")}return"%"==u||"*"==u?l("number","number"):(e.eatWhile(/[\w\\\-_%.{,]/),l(null,null))}return e.eatWhile(/[\-]/)?(t.tokenize=c,c(e,t)):e.eatWhile(/[\w]/)?l("keyword","doindent"):void 0}function c(e,t){for(var n,r=0;null!=(n=e.next());){if(r>=2&&">"==n){t.tokenize=o;break}r="-"==n?r+1:0}return l("comment","comment")}n=e.exports,r="dtd",a=function(){return s},Object.defineProperty(n,r,{get:a,set:u,enumerable:!0,configurable:!0});var s={startState:function(){return{tokenize:o,baseIndent:0,stack:[]}},token:function(e,t){if(e.eatSpace())return null;var n=t.tokenize(e,t),r=t.stack[t.stack.length-1];return"["==e.current()||"doindent"===i||"["==i?t.stack.push("rule"):"endtag"===i?t.stack[t.stack.length-1]="endtag":"]"==e.current()||"]"==i||">"==i&&"rule"==r?t.stack.pop():"["==i&&t.stack.push("["),n},indent:function(e,t,n){var r=e.stack.length;return"]"===t.charAt(0)?r--:">"===t.substr(t.length-1,t.length)&&("<"===t.substr(0,1)||"doindent"==i&&t.length>1||("doindent"==i?r--:">"==i&&t.length>1||"tag"==i&&">"!==t||("tag"==i&&"rule"==e.stack[e.stack.length-1]?r--:"tag"==i?r++:">"===t&&"rule"==e.stack[e.stack.length-1]&&">"===i?r--:">"===t&&"rule"==e.stack[e.stack.length-1]||("<"!==t.substr(0,1)&&">"===t.substr(0,1)?r-=1:">"===t||(r-=1)))),null!=i&&"]"!=i||r--),e.baseIndent+r*n.unit},languageData:{indentOnInput:/^\s*[\]>]$/}}}));
//# sourceMappingURL=dtd.e5f6f6b5.js.map