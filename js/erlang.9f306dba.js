("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireec1d.register("kJwaI",(function(e,t){var n,r,i,o;n=e.exports,r="erlang",i=function(){return D},Object.defineProperty(n,r,{get:i,set:o,enumerable:!0,configurable:!0});var a=["-type","-spec","-export_type","-opaque"],c=["after","begin","catch","case","cond","end","fun","if","let","of","query","receive","try","when"],u=/[\->,;]/,s=["->",";",","],l=["and","andalso","band","bnot","bor","bsl","bsr","bxor","div","not","or","orelse","rem","xor"],_=/[\+\-\*\/<>=\|:!]/,f=["=","+","-","*","/",">",">=","<","=<","=:=","==","=/=","/=","||","<-","!"],p=/[<\(\[\{]/,m=["<<","(","[","{"],d=/[>\)\]\}]/,b=["}","]",")",">>"],g=["is_atom","is_binary","is_bitstring","is_boolean","is_float","is_function","is_integer","is_list","is_number","is_pid","is_port","is_record","is_reference","is_tuple","atom","binary","bitstring","boolean","function","integer","list","number","pid","port","record","reference","tuple"],k=["abs","adler32","adler32_combine","alive","apply","atom_to_binary","atom_to_list","binary_to_atom","binary_to_existing_atom","binary_to_list","binary_to_term","bit_size","bitstring_to_list","byte_size","check_process_code","contact_binary","crc32","crc32_combine","date","decode_packet","delete_module","disconnect_node","element","erase","exit","float","float_to_list","garbage_collect","get","get_keys","group_leader","halt","hd","integer_to_list","internal_bif","iolist_size","iolist_to_binary","is_alive","is_atom","is_binary","is_bitstring","is_boolean","is_float","is_function","is_integer","is_list","is_number","is_pid","is_port","is_process_alive","is_record","is_reference","is_tuple","length","link","list_to_atom","list_to_binary","list_to_bitstring","list_to_existing_atom","list_to_float","list_to_integer","list_to_pid","list_to_tuple","load_module","make_ref","module_loaded","monitor_node","node","node_link","node_unlink","nodes","notalive","now","open_port","pid_to_list","port_close","port_command","port_connect","port_control","pre_loaded","process_flag","process_info","processes","purge_module","put","register","registered","round","self","setelement","size","spawn","spawn_link","spawn_monitor","spawn_opt","split_binary","statistics","term_to_binary","time","throw","tl","trunc","tuple_size","tuple_to_list","unlink","unregister","whereis"],h=/[\w@Ø-ÞÀ-Öß-öø-ÿ]/,y=/[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;function v(e,t,n){if(1==e.current().length&&t.test(e.current())){for(e.backUp(1);t.test(e.peek());)if(e.next(),W(e.current(),n))return!0;e.backUp(e.current().length-1)}return!1}function w(e,t,n){if(1==e.current().length&&t.test(e.current())){for(;t.test(e.peek());)e.next();for(;0<e.current().length;){if(W(e.current(),n))return!0;e.backUp(1)}e.next()}return!1}function x(e){return z(e,'"',"\\")}function S(e){return z(e,"'","\\")}function z(e,t,n){for(;!e.eol();){var r=e.next();if(r==t)return!0;r==n&&e.next()}return!1}function W(e,t){return-1<t.indexOf(e)}function U(e,t,n){switch(function(e,t){"comment"!=t.type&&"whitespace"!=t.type&&(e.tokenStack=function(e,t){var n=e.length-1;0<n&&"record"===e[n].type&&"dot"===t.type?e.pop():0<n&&"group"===e[n].type?(e.pop(),e.push(t)):e.push(t);return e}(e.tokenStack,t),e.tokenStack=function(e){if(!e.length)return e;var t=e.length-1;if("dot"===e[t].type)return[];if(t>1&&"fun"===e[t].type&&"fun"===e[t-1].token)return e.slice(0,t-1);switch(e[t].token){case"}":return T(e,{g:["{"]});case"]":return T(e,{i:["["]});case")":return T(e,{i:["("]});case">>":return T(e,{i:["<<"]});case"end":return T(e,{i:["begin","case","fun","if","receive","try"]});case",":return T(e,{e:["begin","try","when","->",",","(","[","{","<<"]});case"->":return T(e,{r:["when"],m:["try","if","case","receive"]});case";":return T(e,{E:["case","fun","if","receive","try","when"]});case"catch":return T(e,{e:["try"]});case"of":return T(e,{e:["case"]});case"after":return T(e,{e:["receive","try"]});default:return e}}(e.tokenStack))}(e,function(e,t){return A(t.current(),t.column(),t.indentation(),e)}(n,t)),n){case"atom":case"boolean":return"atom";case"attribute":return"attribute";case"builtin":return"builtin";case"close_paren":case"colon":case"dot":case"open_paren":case"separator":default:return null;case"comment":return"comment";case"error":return"error";case"fun":return"meta";case"function":return"tag";case"guard":return"property";case"keyword":return"keyword";case"macro":return"macroName";case"number":return"number";case"operator":return"operator";case"record":return"bracket";case"string":return"string";case"type":return"def";case"variable":return"variable"}}function A(e,t,n,r){return{token:e,column:t,indent:n,type:r}}function E(e){return A(e,0,0,e)}function Z(e,t){var n=e.tokenStack.length,r=t||1;return!(n<r)&&e.tokenStack[n-r]}function T(e,t){for(var n in t)for(var r=e.length-1,i=t[n],o=r-1;-1<o;o--)if(W(e[o].token,i)){var a=e.slice(0,o);switch(n){case"m":return a.concat(e[o]).concat(e[r]);case"r":return a.concat(e[r]);case"i":return a;case"g":return a.concat(E("group"));case"E":case"e":return a.concat(e[o])}}return"E"==n?[]:e}function q(e,t){var n=e.tokenStack,r=O(n,"token",t);return!!j(n[r])&&n[r]}function O(e,t,n){for(var r=e.length-1;-1<r;r--)if(W(e[r][t],n))return r;return!1}function j(e){return!1!==e&&null!=e}const D={startState:()=>({tokenStack:[],in_string:!1,in_atom:!1}),token:function(e,t){if(t.in_string)return t.in_string=!x(e),U(t,e,"string");if(t.in_atom)return t.in_atom=!S(e),U(t,e,"atom");if(e.eatSpace())return U(t,e,"whitespace");if(!Z(t)&&e.match(/-\s*[a-zß-öø-ÿ][\wØ-ÞÀ-Öß-öø-ÿ]*/))return W(e.current(),a)?U(t,e,"type"):U(t,e,"attribute");var n=e.next();if("%"==n)return e.skipToEnd(),U(t,e,"comment");if(":"==n)return U(t,e,"colon");if("?"==n)return e.eatSpace(),e.eatWhile(h),U(t,e,"macro");if("#"==n)return e.eatSpace(),e.eatWhile(h),U(t,e,"record");if("$"==n)return"\\"!=e.next()||e.match(y)?U(t,e,"number"):U(t,e,"error");if("."==n)return U(t,e,"dot");if("'"==n){if(!(t.in_atom=!S(e))){if(e.match(/\s*\/\s*[0-9]/,!1))return e.match(/\s*\/\s*[0-9]/,!0),U(t,e,"fun");if(e.match(/\s*\(/,!1)||e.match(/\s*:/,!1))return U(t,e,"function")}return U(t,e,"atom")}if('"'==n)return t.in_string=!x(e),U(t,e,"string");if(/[A-Z_Ø-ÞÀ-Ö]/.test(n))return e.eatWhile(h),U(t,e,"variable");if(/[a-z_ß-öø-ÿ]/.test(n)){if(e.eatWhile(h),e.match(/\s*\/\s*[0-9]/,!1))return e.match(/\s*\/\s*[0-9]/,!0),U(t,e,"fun");var r=e.current();return W(r,c)?U(t,e,"keyword"):W(r,l)?U(t,e,"operator"):e.match(/\s*\(/,!1)?!W(r,k)||":"==Z(t).token&&"erlang"!=Z(t,2).token?W(r,g)?U(t,e,"guard"):U(t,e,"function"):U(t,e,"builtin"):":"==function(e){var t=e.match(/^\s*([^\s%])/,!1);return t?t[1]:""}(e)?U(t,e,"erlang"==r?"builtin":"function"):W(r,["true","false"])?U(t,e,"boolean"):U(t,e,"atom")}var i=/[0-9]/;return i.test(n)?(e.eatWhile(i),e.eat("#")?e.eatWhile(/[0-9a-zA-Z]/)||e.backUp(1):e.eat(".")&&(e.eatWhile(i)?e.eat(/[eE]/)&&(e.eat(/[-+]/)?e.eatWhile(i)||e.backUp(2):e.eatWhile(i)||e.backUp(1)):e.backUp(1)),U(t,e,"number")):v(e,p,m)?U(t,e,"open_paren"):v(e,d,b)?U(t,e,"close_paren"):w(e,u,s)?U(t,e,"separator"):w(e,_,f)?U(t,e,"operator"):U(t,e,null)},indent:function(e,t,n){var r,i,o=j(i=t.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/))&&0===i.index?i[0]:"",a=Z(e,1),c=Z(e,2);return e.in_string||e.in_atom?null:c?"when"==a.token?a.column+n.unit:"when"===o&&"function"===c.type?c.indent+n.unit:"("===o&&"fun"===a.token?a.column+3:"catch"===o&&(r=q(e,["try"]))?r.column:W(o,["end","after","of"])?(r=q(e,["begin","case","fun","if","receive","try"]))?r.column:null:W(o,b)?(r=q(e,m))?r.column:null:W(a.token,[",","|","||"])||W(o,[",","|","||"])?(r=function(e){var t=e.tokenStack.slice(0,-1),n=O(t,"type",["open_paren"]);return!!j(t[n])&&t[n]}(e),r?r.column+r.token.length:n.unit):"->"==a.token?W(c.token,["receive","case","if","try"])?c.column+n.unit+n.unit:c.column+n.unit:W(a.token,m)?a.column+a.token.length:(r=function(e){var t=e.tokenStack,n=O(t,"type",["open_paren","separator","keyword"]),r=O(t,"type",["operator"]);return j(n)&&j(r)&&n<r?t[n+1]:!!j(n)&&t[n]}(e),j(r)?r.column+n.unit:0):0},languageData:{commentTokens:{line:"%"}}}}));
//# sourceMappingURL=erlang.9f306dba.js.map
