("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireec1d.register("1xAnp",(function(e,n){var t,i,o,l;t=e.exports,i="properties",o=function(){return r},Object.defineProperty(t,i,{get:o,set:l,enumerable:!0,configurable:!0});var r={token:function(e,n){var t=e.sol()||n.afterSection,i=e.eol();if(n.afterSection=!1,t&&(n.nextMultiline?(n.inMultiline=!0,n.nextMultiline=!1):n.position="def"),i&&!n.nextMultiline&&(n.inMultiline=!1,n.position="def"),t)for(;e.eatSpace(););var o=e.next();return!t||"#"!==o&&"!"!==o&&";"!==o?t&&"["===o?(n.afterSection=!0,e.skipTo("]"),e.eat("]"),"header"):"="===o||":"===o?(n.position="quote",null):("\\"===o&&"quote"===n.position&&e.eol()&&(n.nextMultiline=!0),n.position):(n.position="comment",e.skipToEnd(),"comment")},startState:function(){return{position:"def",nextMultiline:!1,inMultiline:!1,afterSection:!1}}}}));
//# sourceMappingURL=properties.fa063f47.js.map
