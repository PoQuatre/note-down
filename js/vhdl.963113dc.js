("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireec1d.register("4VVVZ",(function(e,t){var n,r,i,o;function a(e){for(var t={},n=e.split(","),r=0;r<n.length;++r){var i=n[r].toUpperCase(),o=n[r].charAt(0).toUpperCase()+n[r].slice(1);t[n[r]]=!0,t[i]=!0,t[o]=!0}return t}function l(e){return e.eatWhile(/[\w\$_]/),"meta"}n=e.exports,r="vhdl",i=function(){return h},Object.defineProperty(n,r,{get:i,set:o,enumerable:!0,configurable:!0});var u,s=a("null"),c={"`":l,$:l},f=a("abs,access,after,alias,all,and,architecture,array,assert,attribute,begin,block,body,buffer,bus,case,component,configuration,constant,disconnect,downto,else,elsif,end,end block,end case,end component,end for,end generate,end if,end loop,end process,end record,end units,entity,exit,file,for,function,generate,generic,generic map,group,guarded,if,impure,in,inertial,inout,is,label,library,linkage,literal,loop,map,mod,nand,new,next,nor,null,of,on,open,or,others,out,package,package body,port,port map,postponed,procedure,process,pure,range,record,register,reject,rem,report,return,rol,ror,select,severity,signal,sla,sll,sra,srl,subtype,then,to,transport,type,unaffected,units,until,use,variable,wait,when,while,with,xnor,xor"),p=a("architecture,entity,begin,case,port,else,elsif,end,for,function,if"),d=/[&|~><!\)\(*#%@+\/=?\:;}{,\.\^\-\[\]]/;function m(e,t){var n,r=e.next();if(c[r]){var i=c[r](e,t);if(!1!==i)return i}if('"'==r)return t.tokenize=(n=r,function(e,t){for(var r,i=!1,o=!1;null!=(r=e.next());){if(r==n&&!i){o=!0;break}i=!i&&"--"==r}return!o&&i||(t.tokenize=m),"string.special"}),t.tokenize(e,t);if("'"==r)return t.tokenize=function(e){return function(t,n){for(var r,i=!1,o=!1;null!=(r=t.next());){if(r==e&&!i){o=!0;break}i=!i&&"--"==r}return!o&&i||(n.tokenize=m),"string"}}(r),t.tokenize(e,t);if(/[\[\]{}\(\),;\:\.]/.test(r))return u=r,null;if(/[\d']/.test(r))return e.eatWhile(/[\w\.']/),"number";if("-"==r&&e.eat("-"))return e.skipToEnd(),"comment";if(d.test(r))return e.eatWhile(d),"operator";e.eatWhile(/[\w\$_]/);var o=e.current();return f.propertyIsEnumerable(o.toLowerCase())?(p.propertyIsEnumerable(o)&&(u="newstatement"),"keyword"):s.propertyIsEnumerable(o)?"atom":"variable"}function g(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function y(e,t,n){return e.context=new g(e.indented,t,n,null,e.context)}function b(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}const h={startState:function(e){return{tokenize:null,context:new g(-e,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;u=null;var r=(t.tokenize||m)(e,t);if("comment"==r||"meta"==r)return r;if(null==n.align&&(n.align=!0),";"!=u&&":"!=u||"statement"!=n.type)if("{"==u)y(t,e.column(),"}");else if("["==u)y(t,e.column(),"]");else if("("==u)y(t,e.column(),")");else if("}"==u){for(;"statement"==n.type;)n=b(t);for("}"==n.type&&(n=b(t));"statement"==n.type;)n=b(t)}else u==n.type?b(t):("}"==n.type||"top"==n.type||"statement"==n.type&&"newstatement"==u)&&y(t,e.column(),"statement");else b(t);return t.startOfLine=!1,r},indent:function(e,t,n){if(e.tokenize!=m&&null!=e.tokenize)return 0;var r=t&&t.charAt(0),i=e.context,o=r==i.type;return"statement"==i.type?i.indented+("{"==r?0:n.unit):i.align?i.column+(o?0:1):i.indented+(o?0:n.unit)},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"--"}}}}));
//# sourceMappingURL=vhdl.963113dc.js.map
