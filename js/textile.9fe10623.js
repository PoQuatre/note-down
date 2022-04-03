("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireec1d.register("OvNnI",(function(t,e){var n,i,a,r;n=t.exports,i="textile",a=function(){return b},Object.defineProperty(n,i,{get:a,set:r,enumerable:!0,configurable:!0});var l={addition:"inserted",attributes:"propertyName",bold:"strong",cite:"keyword",code:"monospace",definitionList:"list",deletion:"deleted",div:"punctuation",em:"emphasis",footnote:"variable",footCite:"qualifier",header:"heading",html:"comment",image:"atom",italic:"emphasis",link:"link",linkDefinition:"link",list1:"list",list2:"list.special",list3:"list",notextile:"string.special",pre:"operator",p:"content",quote:"bracket",span:"quote",specialChar:"character",strong:"strong",sub:"content.special",sup:"content.special",table:"variableName.special",tableHeading:"operator"};function o(t,e,n){if("_"===n)return t.eat("_")?u(t,e,"italic",/__/,2):u(t,e,"em",/_/,1);if("*"===n)return t.eat("*")?u(t,e,"bold",/\*\*/,2):u(t,e,"strong",/\*/,1);if("["===n)return t.match(/\d+\]/)&&(e.footCite=!0),s(e);if("("===n&&t.match(/^(r|tm|c)\)/))return l.specialChar;if("<"===n&&t.match(/(\w+)[^>]+>[^<]+<\/\1>/))return l.html;if("?"===n&&t.eat("?"))return u(t,e,"cite",/\?\?/,2);if("="===n&&t.eat("="))return u(t,e,"notextile",/==/,2);if("-"===n&&!t.eat("-"))return u(t,e,"deletion",/-/,1);if("+"===n)return u(t,e,"addition",/\+/,1);if("~"===n)return u(t,e,"sub",/~/,1);if("^"===n)return u(t,e,"sup",/\^/,1);if("%"===n)return u(t,e,"span",/%/,1);if("@"===n)return u(t,e,"code",/@/,1);if("!"===n){var i=u(t,e,"image",/(?:\([^\)]+\))?!/,1);return t.match(/^:\S+/),i}return s(e)}function u(t,e,n,i,a){var r=t.pos>a?t.string.charAt(t.pos-a-1):null,l=t.peek();if(e[n]){if((!l||/\W/.test(l))&&r&&/\S/.test(r)){var o=s(e);return e[n]=!1,o}}else(!r||/\W/.test(r))&&l&&/\S/.test(l)&&t.match(new RegExp("^.*\\S"+i.source+"(?:\\W|$)"),!1)&&(e[n]=!0,e.mode=p.attributes);return s(e)}function s(t){var e=c(t);if(e)return e;var n=[];return t.layoutType&&n.push(l[t.layoutType]),n=n.concat(function(t){for(var e=[],n=1;n<arguments.length;++n)t[arguments[n]]&&e.push(l[arguments[n]]);return e}(t,"addition","bold","cite","code","deletion","em","footCite","image","italic","link","span","strong","sub","sup","table","tableHeading")),"header"===t.layoutType&&n.push(l.header+"-"+t.header),n.length?n.join(" "):null}function c(t){var e=t.layoutType;switch(e){case"notextile":case"code":case"pre":return l[e];default:return t.notextile?l.notextile+(e?" "+l[e]:""):null}}var d={cache:{},single:{bc:"bc",bq:"bq",definitionList:/- .*?:=+/,definitionListEnd:/.*=:\s*$/,div:"div",drawTable:/\|.*\|/,foot:/fn\d+/,header:/h[1-6]/,html:/\s*<(?:\/)?(\w+)(?:[^>]+)?>(?:[^<]+<\/\1>)?/,link:/[^"]+":\S/,linkDefinition:/\[[^\s\]]+\]\S+/,list:/(?:#+|\*+)/,notextile:"notextile",para:"p",pre:"pre",table:"table",tableCellAttributes:/[\/\\]\d+/,tableHeading:/\|_\./,tableText:/[^"_\*\[\(\?\+~\^%@|-]+/,text:/[^!"_=\*\[\(<\?\+~\^%@-]+/},attributes:{align:/(?:<>|<|>|=)/,selector:/\([^\(][^\)]+\)/,lang:/\[[^\[\]]+\]/,pad:/(?:\(+|\)+){1,2}/,css:/\{[^\}]+\}/},createRe:function(t){switch(t){case"drawTable":return d.makeRe("^",d.single.drawTable,"$");case"html":return d.makeRe("^",d.single.html,"(?:",d.single.html,")*","$");case"linkDefinition":return d.makeRe("^",d.single.linkDefinition,"$");case"listLayout":return d.makeRe("^",d.single.list,f("allAttributes"),"*\\s+");case"tableCellAttributes":return d.makeRe("^",d.choiceRe(d.single.tableCellAttributes,f("allAttributes")),"+\\.");case"type":return d.makeRe("^",f("allTypes"));case"typeLayout":return d.makeRe("^",f("allTypes"),f("allAttributes"),"*\\.\\.?","(\\s+|$)");case"attributes":return d.makeRe("^",f("allAttributes"),"+");case"allTypes":return d.choiceRe(d.single.div,d.single.foot,d.single.header,d.single.bc,d.single.bq,d.single.notextile,d.single.pre,d.single.table,d.single.para);case"allAttributes":return d.choiceRe(d.attributes.selector,d.attributes.css,d.attributes.lang,d.attributes.align,d.attributes.pad);default:return d.makeRe("^",d.single[t])}},makeRe:function(){for(var t="",e=0;e<arguments.length;++e){var n=arguments[e];t+="string"==typeof n?n:n.source}return new RegExp(t)},choiceRe:function(){for(var t=[arguments[0]],e=1;e<arguments.length;++e)t[2*e-1]="|",t[2*e]=arguments[e];return t.unshift("(?:"),t.push(")"),d.makeRe.apply(null,t)}};function f(t){return d.cache[t]||(d.cache[t]=d.createRe(t))}var p={newLayout:function(t,e){return t.match(f("typeLayout"),!1)?(e.spanningLayout=!1,(e.mode=p.blockType)(t,e)):(c(e)||(t.match(f("listLayout"),!1)?n=p.list:t.match(f("drawTable"),!1)?n=p.table:t.match(f("linkDefinition"),!1)?n=p.linkDefinition:t.match(f("definitionList"))?n=p.definitionList:t.match(f("html"),!1)&&(n=p.html)),(e.mode=n||p.text)(t,e));var n},blockType:function(t,e){var n,i;return e.layoutType=null,(n=t.match(f("type")))?((n=(i=n[0]).match(f("header")))?(e.layoutType="header",e.header=parseInt(n[0][1])):i.match(f("bq"))?e.layoutType="quote":i.match(f("bc"))?e.layoutType="code":i.match(f("foot"))?e.layoutType="footnote":i.match(f("notextile"))?e.layoutType="notextile":i.match(f("pre"))?e.layoutType="pre":i.match(f("div"))?e.layoutType="div":i.match(f("table"))&&(e.layoutType="table"),e.mode=p.attributes,s(e)):(e.mode=p.text)(t,e)},text:function(t,e){if(t.match(f("text")))return s(e);var n=t.next();return'"'===n?(e.mode=p.link)(t,e):o(t,e,n)},attributes:function(t,e){return e.mode=p.layoutLength,t.match(f("attributes"))?l.attributes:s(e)},layoutLength:function(t,e){return t.eat(".")&&t.eat(".")&&(e.spanningLayout=!0),e.mode=p.text,s(e)},list:function(t,e){var n=t.match(f("list"));e.listDepth=n[0].length;var i=(e.listDepth-1)%3;return e.layoutType=i?1===i?"list2":"list3":"list1",e.mode=p.attributes,s(e)},link:function(t,e){return e.mode=p.text,t.match(f("link"))?(t.match(/\S+/),l.link):s(e)},linkDefinition:function(t){return t.skipToEnd(),l.linkDefinition},definitionList:function(t,e){return t.match(f("definitionList")),e.layoutType="definitionList",t.match(/\s*$/)?e.spanningLayout=!0:e.mode=p.attributes,s(e)},html:function(t){return t.skipToEnd(),l.html},table:function(t,e){return e.layoutType="table",(e.mode=p.tableCell)(t,e)},tableCell:function(t,e){return t.match(f("tableHeading"))?e.tableHeading=!0:t.eat("|"),e.mode=p.tableCellAttributes,s(e)},tableCellAttributes:function(t,e){return e.mode=p.tableText,t.match(f("tableCellAttributes"))?l.attributes:s(e)},tableText:function(t,e){return t.match(f("tableText"))?s(e):"|"===t.peek()?(e.mode=p.tableCell,s(e)):o(t,e,t.next())}};const b={startState:function(){return{mode:p.newLayout}},token:function(t,e){return t.sol()&&function(t,e){e.mode=p.newLayout,e.tableHeading=!1,"definitionList"===e.layoutType&&e.spanningLayout&&t.match(f("definitionListEnd"),!1)&&(e.spanningLayout=!1)}(t,e),e.mode(t,e)},blankLine:function(t){var e=t.spanningLayout,n=t.layoutType;for(var i in t)t.hasOwnProperty(i)&&delete t[i];t.mode=p.newLayout,e&&(t.layoutType=n,t.spanningLayout=!0)}}}));
//# sourceMappingURL=textile.9fe10623.js.map
