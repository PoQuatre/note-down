("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequiree9b0.register("dpfve",(function(e,t){var n,r,o,i;n=e.exports,r="cypher",o=function(){return x},Object.defineProperty(n,r,{get:o,set:i,enumerable:!0,configurable:!0});var a,s=function(e){return new RegExp("^(?:"+e.join("|")+")$","i")},l=function(e){a=null;var t=e.next();if('"'===t)return e.match(/^.*?"/),"string";if("'"===t)return e.match(/^.*?'/),"string";if(/[{}\(\),\.;\[\]]/.test(t))return a=t,"punctuation";if("/"===t&&e.eat("/"))return e.skipToEnd(),"comment";if(m.test(t))return e.eatWhile(m),null;if(e.eatWhile(/[_\w\d]/),e.eat(":"))return e.eatWhile(/[\w\d_\-]/),"atom";var n=e.current();return u.test(n)?"builtin":p.test(n)?"def":f.test(n)||g.test(n)?"keyword":"variable"},c=function(e,t,n){return e.context={prev:e.context,indent:e.indent,col:n,type:t}},d=function(e){return e.indent=e.context.indent,e.context=e.context.prev},u=s(["abs","acos","allShortestPaths","asin","atan","atan2","avg","ceil","coalesce","collect","cos","cot","count","degrees","e","endnode","exp","extract","filter","floor","haversin","head","id","keys","labels","last","left","length","log","log10","lower","ltrim","max","min","node","nodes","percentileCont","percentileDisc","pi","radians","rand","range","reduce","rel","relationship","relationships","replace","reverse","right","round","rtrim","shortestPath","sign","sin","size","split","sqrt","startnode","stdev","stdevp","str","substring","sum","tail","tan","timestamp","toFloat","toInt","toString","trim","type","upper"]),p=s(["all","and","any","contains","exists","has","in","none","not","or","single","xor"]),f=s(["as","asc","ascending","assert","by","case","commit","constraint","create","csv","cypher","delete","desc","descending","detach","distinct","drop","else","end","ends","explain","false","fieldterminator","foreach","from","headers","in","index","is","join","limit","load","match","merge","null","on","optional","order","periodic","profile","remove","return","scan","set","skip","start","starts","then","true","union","unique","unwind","using","when","where","with","call","yield"]),g=s(["access","active","assign","all","alter","as","catalog","change","copy","create","constraint","constraints","current","database","databases","dbms","default","deny","drop","element","elements","exists","from","grant","graph","graphs","if","index","indexes","label","labels","management","match","name","names","new","node","nodes","not","of","on","or","password","populated","privileges","property","read","relationship","relationships","remove","replace","required","revoke","role","roles","set","show","start","status","stop","suspended","to","traverse","type","types","user","users","with","write"]),m=/[*+\-<>=&|~%^]/,x={startState:function(){return{tokenize:l,context:null,indent:0,col:0}},token:function(e,t){if(e.sol()&&(t.context&&null==t.context.align&&(t.context.align=!1),t.indent=e.indentation()),e.eatSpace())return null;var n=t.tokenize(e,t);if("comment"!==n&&t.context&&null==t.context.align&&"pattern"!==t.context.type&&(t.context.align=!0),"("===a)c(t,")",e.column());else if("["===a)c(t,"]",e.column());else if("{"===a)c(t,"}",e.column());else if(/[\]\}\)]/.test(a)){for(;t.context&&"pattern"===t.context.type;)d(t);t.context&&a===t.context.type&&d(t)}else"."===a&&t.context&&"pattern"===t.context.type?d(t):/atom|string|variable/.test(n)&&t.context&&(/[\}\]]/.test(t.context.type)?c(t,"pattern",e.column()):"pattern"!==t.context.type||t.context.align||(t.context.align=!0,t.context.col=e.column()));return n},indent:function(e,t,n){var r=t&&t.charAt(0),o=e.context;if(/[\]\}]/.test(r))for(;o&&"pattern"===o.type;)o=o.prev;var i=o&&r===o.type;return o?"keywords"===o.type?null:o.align?o.col+(i?0:1):o.indent+(i?0:n.unit):0}}}));
//# sourceMappingURL=cypher.b45b9879.js.map