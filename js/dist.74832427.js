!function(){function O(O,e,t,n){Object.defineProperty(O,e,{get:t,set:n,enumerable:!0,configurable:!0})}var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireec1d;e.register("3ee2g",(function(t,n){O(t.exports,"xml",(function(){return v}));var r=e("8TSCy"),a=e("kixKK"),o=e("5gnvt"),s=e("hneOf");function d(O,e){var t=e&&e.getChild("TagName");return t?O.sliceString(t.from,t.to):""}function i(O,e){var t=e&&e.firstChild;return t&&"OpenTag"==t.name?d(O,t):""}function l(O){for(var e=O&&O.parent;e;e=e.parent)if("Element"==e.name)return e;return null}var c=function O(e,t,n){"use strict";r.classCallCheck(this,O),this.attrs=t,this.attrValues=n,this.children=[],this.name=e.name,this.completion=Object.assign(Object.assign({type:"type"},e.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=e.textContent?e.textContent.map((function(O){return{label:O,type:"text"}})):[]},u=/^[:\-\.\w\u00b7-\uffff]*$/;function f(O){return Object.assign(Object.assign({type:"property"},O.completion||{}),{label:O.name})}function p(O){return"string"==typeof O?{label:'"'.concat(O,'"'),type:"constant"}:/^"/.test(O.label)?O:Object.assign(Object.assign({},O),{label:'"'.concat(O.label,'"')})}function g(O,e){var t=[],n=[],r=Object.create(null),a=!0,s=!1,g=void 0;try{for(var $,v=e[Symbol.iterator]();!(a=($=v.next()).done);a=!0){var k=$.value,m=f(k);t.push(m),k.global&&n.push(m),k.values&&(r[k.name]=k.values.map(p))}}catch(O){s=!0,g=O}finally{try{a||null==v.return||v.return()}finally{if(s)throw g}}var h=[],T=[],P=Object.create(null),b=!0,w=!1,C=void 0;try{for(var W,y=O[Symbol.iterator]();!(b=(W=y.next()).done);b=!0){var Q=W.value,x=n,z=r;Q.attributes&&(x=x.concat(Q.attributes.map((function(O){return"string"==typeof O?t.find((function(e){return e.label==O}))||{label:O,type:"property"}:(O.values&&(z==r&&(z=Object.create(z)),z[O.name]=O.values.map(p)),f(O))}))));var S=new c(Q,x,z);P[S.name]=S,h.push(S),Q.top&&T.push(S)}}catch(O){w=!0,C=O}finally{try{b||null==y.return||y.return()}finally{if(w)throw C}}T.length||(T=h);for(var _=0;_<h.length;_++){var R=O[_],U=h[_];if(R.children){var X=!0,Z=!1,E=void 0;try{for(var G,j=R.children[Symbol.iterator]();!(X=(G=j.next()).done);X=!0){var Y=G.value;P[Y]&&U.children.push(P[Y])}}catch(O){Z=!0,E=O}finally{try{X||null==j.return||j.return()}finally{if(Z)throw E}}}else U.children=h}return function(O){var e,t=O.state.doc,a=function(O,e){for(var t,n=o.syntaxTree(O).resolveInner(e,-1),r=null,a=n;!r&&a.parent;a=a.parent)"OpenTag"!=a.name&&"CloseTag"!=a.name&&"SelfClosingTag"!=a.name&&"MismatchedCloseTag"!=a.name||(r=a);if(r&&(r.to>e||r.lastChild.type.isError)){var s=r.parent;if("TagName"==n.name)return"CloseTag"==r.name||"MismatchedCloseTag"==r.name?{type:"closeTag",from:n.from,context:s}:{type:"openTag",from:n.from,context:l(s)};if("AttributeName"==n.name)return{type:"attrName",from:n.from,context:r};if("AttributeValue"==n.name)return{type:"attrValue",from:n.from,context:r};var d=n==r||"Attribute"==n.name?n.childBefore(e):n;return"StartTag"==(null==d?void 0:d.name)?{type:"openTag",from:e,context:l(s)}:"StartCloseTag"==(null==d?void 0:d.name)&&d.to<=e?{type:"closeTag",from:e,context:s}:"Is"==(null==d?void 0:d.name)?{type:"attrValue",from:e,context:r}:d?{type:"attrName",from:e,context:r}:null}if("StartCloseTag"==n.name)return{type:"closeTag",from:e,context:n.parent};for(;n.parent&&n.to==e&&!(null===(t=n.lastChild)||void 0===t?void 0:t.type.isError);)n=n.parent;return"Element"==n.name||"Text"==n.name||"Document"==n.name?{type:"tag",from:e,context:"Element"==n.name?n:l(n)}:null}(O.state,O.pos);if(!a||"tag"==a.type&&!O.explicit)return null;var s=a.type,c=a.from,f=a.context;if("openTag"==s){var p=T,g=i(t,f);if(g){var $=P[g];p=(null==$?void 0:$.children)||h}return{from:c,options:p.map((function(O){return O.completion})),span:u}}if("closeTag"==s){var v=i(t,f);return v?{from:c,to:O.pos+(">"==t.sliceString(O.pos,O.pos+1)?1:0),options:[(null===(e=P[v])||void 0===e?void 0:e.closeNameCompletion)||{label:v+">",type:"type"}],span:u}:null}if("attrName"==s){var k=P[d(t,f)];return{from:c,options:(null==k?void 0:k.attrs)||n,span:u}}if("attrValue"==s){var m=function(O,e,t){var n=e&&e.getChildren("Attribute").find((function(O){return O.from<=t&&O.to>=t})),r=n&&n.getChild("AttributeName");return r?O.sliceString(r.from,r.to):""}(t,f,c);if(!m)return null;var b=P[d(t,f)],w=((null==b?void 0:b.attrValues)||r)[m];return w&&w.length?{from:c,to:O.pos+('"'==t.sliceString(O.pos,O.pos+1)?1:0),options:w,span:/^"[^"]*"?$/}:null}if("tag"==s){var C=i(t,f),W=P[C],y=[],Q=f&&f.lastChild;!C||Q&&"CloseTag"==Q.name&&d(t,Q)==C||y.push(W?W.closeCompletion:{label:"</"+C+">",type:"type",boost:2});var x=y.concat(((null==W?void 0:W.children)||(f?h:T)).map((function(O){return O.openCompletion})));if(f&&(null==W?void 0:W.text.length)){var z=f.firstChild;z.to>O.pos-20&&!/\S/.test(O.state.sliceDoc(z.to,O.pos))&&(x=x.concat(W.text))}return{from:c,options:x,span:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}return null}}var $=o.LRLanguage.define({parser:a.parser.configure({props:[o.indentNodeProp.add({Element:function(O){var e=/^\s*<\//.test(O.textAfter);return O.lineIndent(O.node.from)+(e?0:O.unit)},"OpenTag CloseTag SelfClosingTag":function(O){return O.column(O.node.from)+O.unit}}),o.foldNodeProp.add({Element:function(O){var e=O.firstChild,t=O.lastChild;return e&&"OpenTag"==e.name?{from:e.to,to:"CloseTag"==t.name?t.from:O.to}:null}}),s.styleTags({Text:s.tags.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":s.tags.angleBracket,TagName:s.tags.tagName,"MismatchedCloseTag/Tagname":[s.tags.tagName,s.tags.invalid],AttributeName:s.tags.attributeName,AttributeValue:s.tags.attributeValue,Is:s.tags.definitionOperator,"EntityReference CharacterReference":s.tags.character,Comment:s.tags.blockComment,ProcessingInst:s.tags.processingInstruction,DoctypeDecl:s.tags.documentMeta,Cdata:s.tags.special(s.tags.string)})]}),languageData:{commentTokens:{block:{open:"\x3c!--",close:"--\x3e"}},indentOnInput:/^\s*<\/$/}});function v(){var O=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new o.LanguageSupport($,$.data.of({autocomplete:g(O.elements||[],O.attributes||[])}))}})),e.register("kixKK",(function(t,n){O(t.exports,"parser",(function(){return k}));var r=e("1bcST"),a=e("33Vcp");function o(O){return 45==O||46==O||58==O||O>=65&&O<=90||95==O||O>=97&&O<=122||O>=161}var s=null,d=null,i=0;function l(O,e){var t,n=O.pos+e;if(d==O&&i==n)return s;for(;9==(t=O.peek(e))||10==t||13==t||32==t;)e++;for(var r="";;){var a=O.peek(e);if(!o(a))break;r+=String.fromCharCode(a),e++}return d=O,i=n,s=r||null}function c(O,e){this.name=O,this.parent=e,this.hash=e?e.hash:0;for(var t=0;t<O.length;t++)this.hash+=(this.hash<<4)+O.charCodeAt(t)+(O.charCodeAt(t)<<8)}var u=new r.ContextTracker({start:null,shift:function(O,e,t,n){return 1==e?new c(l(n,1)||"",O):O},reduce:function(O,e){return 10==e&&O?O.parent:O},reuse:function(O,e,t,n){var r=e.type.id;return 1==r||12==r?new c(l(n,1)||"",O):O},hash:function(O){return O?O.hash:0},strict:!1}),f=new r.ExternalTokenizer((function(O,e){if(60==O.next)if(O.advance(),47==O.next){O.advance();var t=l(O,0);if(!t)return O.acceptToken(5);if(e.context&&t==e.context.name)return O.acceptToken(2);for(var n=e.context;n;n=n.parent)if(n.name==t)return O.acceptToken(3,-2);O.acceptToken(4)}else if(33!=O.next&&63!=O.next)return O.acceptToken(1)}),{contextual:!0});function p(O,e){return new r.ExternalTokenizer((function(t){for(var n=0,r=0;;r++){if(t.next<0){r&&t.acceptToken(O);break}if(t.next==e.charCodeAt(n)){if(++n==e.length){r>e.length&&t.acceptToken(O,1-e.length);break}}else n=0;t.advance()}}))}var g=p(36,"--\x3e"),$=p(37,"?>"),v=p(38,"]]>"),k=r.LRParser.deserialize({version:13,states:"-OOQOaOOOcObO'#CcOkOdO'#CdOOOP'#Cv'#CvOsOaO'#DTO!XOaOOOOOQ'#Cw'#CwO!aObO,58}OOOP,58},58}OOOS'#Cx'#CxO!iOdO,59OOOOP,59O,59OOOOP-E6t-E6tO!qO`O'#ChO#kOqO'#CfOOOP'#Cf'#CfO#rOaO'#CyQ$TOPOOO$YOaOOOOOQ-E6u-E6uOOOP1G.i1G.iOOOS-E6v-E6vOOOP1G.j1G.jOOOO'#Cz'#CzO$hO`O,59SO$pO!bO,59SO%OOhO'#CqO%WO`O'#CrOOOP'#D]'#D]OOOP'#C}'#C}O%`OqO,59QO%gO`O'#CsOOOP,59Q,59QOOOP,59e,59eOOOP-E6w-E6wO$TOPOOOOOO-E6x-E6xO%oO!bO1G.nO%oO!bO1G.nO%}O`O'#CjO&VO!bO'#C{O&eO!bO1G.nOOOP1G.n1G.nOOOP1G.{1G.{OOOW'#DO'#DOO&pOhO,59]OOOP,59],59]O&xO`O,59^O'QO`O,59^OOOP-E6{-E6{OOOP1G.l1G.lO'YO`O,59_O'bO`O,59_O'jO!bO7+$YO'xO!bO7+$YOOOP7+$Y7+$YOOOP7+$g7+$gO(TO`O,59UO(]O`O,59UO(eO!bO,59gOOOO-E6y-E6yOOOW-E6|-E6|OOOP1G.w1G.wO(sO`O1G.xO(sO`O1G.xOOOP1G.x1G.xO({O`O1G.yO({O`O1G.yOOOP1G.y1G.yO)TO!bO<<GtOOOP<<Gt<<GtOOOP<<HR<<HRO(]O`O1G.pO(]O`O1G.pO)`O#tO'#CmOOOO1G.p1G.pO)nO`O7+$dOOOP7+$d7+$dO)vO`O7+$eOOOP7+$e7+$eOOOPAN=`AN=`OOOPAN=mAN=mO(]O`O7+$[OOOO7+$[7+$[OOOO'#C|'#C|O*OO#tO,59XOOOO,59X,59XOOOP<<HO<<HOOOOP<<HP<<HPOOOO<<Gv<<GvOOOO-E6z-E6zOOOO1G.s1G.s",stateData:"*^~OyPOzRO|QOPwPXwP~OtUOxWO~OuXO{ZO~OyPOzRO|QOPwXXwXswX~OP]OXbO~OtUOxdO~OuXO{fO~O]iOzgO~OP]OQoOSkOTlOblOclOdlOyPO|QO!RjO~ORpO~P!yOyPOzRO|QOPwPswP~OP]O~OyPOzRO|QOPwP~O]uOzgO~OZzO_wOh{OzgO~Ov|O!Q!OO~O]!QOzgO~OR!SO~P!yO]!UOzgO~OZ!XO_wOh!YOzgO~O`![OzgO~OzgOZoX_oXhoX~OZ!XO_wOh!YO~Ov|O!Q!`O~O]!aOzgO~OZ!cOzgO~O]!dOzgO~OZ!fOzgO~OZ!hO_wOh!iOzgO~OZ!hO_wOh!iO~O`!jOzgO~OzgO}!lO~OzgOZoa_oahoa~OZ!oOzgO~OZ!qOzgO~OZ!rO_wOh!sO~Ob!vOc!vO}!xO!O!vO~OZ!yOzgO~OZ!zOzgO~Ob!vOc!vO}!}O!O!vO~O",goto:"&S!QPPPPPPP!R!RP!]P!fP!mPP!vPPP!X!X#QP#W#_#g#m#s#z%S%c%i%oPPPP%uPPPPPPP&OWROS`bTl^nU`TasTl^nZ^T^ans_xiuvy!V!W!gQ!m![S!u!j!kR!{!tQp^R!SnZ_T^ansUSO`bR[SQVPRcVQYQReYSaTsRraQh]jthv!P!T!V!Z!]!b!e!k!n!p!tQviQ!PkQ!ToQ!VuQ!ZwQ!]xQ!b!QQ!e!UQ!k![Q!n!aQ!p!dR!t!jQyiS!WuvU!^y!W!gR!g!VQ!w!lR!|!wQn^R!RnQ}jR!_}QTOQq`RsbTm^n",nodeNames:"⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Comment ProcessingInst DoctypeDecl Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue EntityReference CharacterReference Text Cdata MismatchedCloseTag CloseTag SelfCloseEndTag SelfClosingTag",maxTerm:49,context:u,nodeProps:[[a.NodeProp.closedBy,1,"SelfCloseEndTag EndTag",12,"CloseTag MissingCloseTag"],[a.NodeProp.openedBy,11,"StartTag StartCloseTag",23,"OpenTag",24,"StartTag"]],skippedNodes:[0],repeatNodeCount:9,tokenData:"Az~R!WOX$kXY%rYZ%rZ]$k]^%r^p$kpq%rqr$krs&tsv$kvw'Uw}$k}!O(q!O!P$k!P!Q*n!Q![$k![!]+z!]!^$k!^!_/s!_!`=i!`!a>U!a!b>q!b!c$k!c!}+z!}#P$k#P#Q?}#Q#R$k#R#S+z#S#T$k#T#o+z#o%W$k%W%o+z%o%p$k%p&a+z&a&b$k&b1p+z1p4U$k4U4d+z4d4e$k4e$IS+z$IS$I`$k$I`$Ib+z$Ib$Kh$k$Kh%#t+z%#t&/x$k&/x&Et+z&Et&FV$k&FV;'S+z;'S;:j/S;:j?&r$k?&r?Ah+z?Ah?BY$k?BY?Mn+z?Mn~$kY$rUdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$kQ%ZRdQOv%Uw!^%U!_~%UW%iR!OWOr%dsv%dw~%d_%{]dQ!OWzTOX$kXY%rYZ%rZ]$k]^%r^p$kpq%rqr$krs%Usv$kw!^$k!^!_%d!_~$kZ&{R}XdQOv%Uw!^%U!_~%U~'XTOp'hqs'hst(Pt!]'h!^~'h~'kTOp'hqs'ht!]'h!]!^'z!^~'h~(POb~~(SROp(]q!](]!^~(]~(`SOp(]q!](]!]!^(l!^~(]~(qOc~Z(xWdQ!OWOr$krs%Usv$kw}$k}!O)b!O!^$k!^!_%d!_~$kZ)iWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a*R!a~$kZ*[UxPdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k^*uWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a+_!a~$k^+hUhSdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k_,V}_S]PdQ!OWOr$krs%Usv$kw}$k}!O+z!O!P+z!P!Q$k!Q![+z![!]+z!]!^$k!^!_%d!_!c$k!c!}+z!}#R$k#R#S+z#S#T$k#T#o+z#o$}$k$}%O+z%O%W$k%W%o+z%o%p$k%p&a+z&a&b$k&b1p+z1p4U+z4U4d+z4d4e$k4e$IS+z$IS$I`$k$I`$Ib+z$Ib$Je$k$Je$Jg+z$Jg$Kh$k$Kh%#t+z%#t&/x$k&/x&Et+z&Et&FV$k&FV;'S+z;'S;:j/S;:j?&r$k?&r?Ah+z?Ah?BY$k?BY?Mn+z?Mn~$k_/ZWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_;=`$k;=`<%l+z<%l~$kZ/xU!OWOq%dqr0[sv%dw!a%d!a!b=X!b~%dZ0aZ!OWOr%dsv%dw}%d}!O1S!O!f%d!f!g1x!g!}%d!}#O5s#O#W%d#W#X:k#X~%dZ1XT!OWOr%dsv%dw}%d}!O1h!O~%dZ1oRyR!OWOr%dsv%dw~%dX1}T!OWOr%dsv%dw!q%d!q!r2^!r~%dX2cT!OWOr%dsv%dw!e%d!e!f2r!f~%dX2wT!OWOr%dsv%dw!v%d!v!w3W!w~%dX3]T!OWOr%dsv%dw!{%d!{!|3l!|~%dX3qT!OWOr%dsv%dw!r%d!r!s4Q!s~%dX4VT!OWOr%dsv%dw!g%d!g!h4f!h~%dX4kV!OWOr4frs5Qsv4fvw5Qw!`4f!`!a5c!a~4fP5TRO!`5Q!`!a5^!a~5QP5cOXPX5jRXP!OWOr%dsv%dw~%dY5xV!OWOr%dsv%dw!e%d!e!f6_!f#V%d#V#W8w#W~%dY6dT!OWOr%dsv%dw!f%d!f!g6s!g~%dY6xT!OWOr%dsv%dw!c%d!c!d7X!d~%dY7^T!OWOr%dsv%dw!v%d!v!w7m!w~%dY7rT!OWOr%dsv%dw!c%d!c!d8R!d~%dY8WT!OWOr%dsv%dw!}%d!}#O8g#O~%dY8nR!OW!RQOr%dsv%dw~%dY8|T!OWOr%dsv%dw#W%d#W#X9]#X~%dY9bT!OWOr%dsv%dw#T%d#T#U9q#U~%dY9vT!OWOr%dsv%dw#h%d#h#i:V#i~%dY:[T!OWOr%dsv%dw#T%d#T#U8R#U~%dX:pT!OWOr%dsv%dw#c%d#c#d;P#d~%dX;UT!OWOr%dsv%dw#V%d#V#W;e#W~%dX;jT!OWOr%dsv%dw#h%d#h#i;y#i~%dX<OT!OWOr%dsv%dw#m%d#m#n<_#n~%dX<dT!OWOr%dsv%dw#d%d#d#e<s#e~%dX<xT!OWOr%dsv%dw#X%d#X#Y4f#Y~%dZ=`R|R!OWOr%dsv%dw~%dZ=rU`PdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k_>_UZTdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$kZ>xWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a?b!a~$kZ?kU{PdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$kZ@UWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_#P$k#P#Q@n#Q~$kZ@uWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!aA_!a~$kZAhU!QPdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k",tokenizers:[f,g,$,v,0,1,2,3],topRules:{Document:[0,6]},tokenPrec:0})}))}();
//# sourceMappingURL=dist.74832427.js.map
