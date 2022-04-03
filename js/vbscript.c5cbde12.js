("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireec1d.register("1ntTV",(function(e,t){var n,r,a,i;function o(e){var t="error";function n(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var r=new RegExp("^[\\+\\-\\*/&\\\\\\^<>=]"),a=new RegExp("^((<>)|(<=)|(>=))"),i=new RegExp("^[\\.,]"),o=new RegExp("^[\\(\\)]"),c=new RegExp("^[A-Za-z][_A-Za-z0-9]*"),l=n(["and","or","not","xor","is","mod","eqv","imp"]),b=["WScript","err","debug","RegExp"],u=["clear","execute","raise","replace","test","write","writeline","close","open","state","eof","update","addnew","end","createobject","quit"].concat(["description","firstindex","global","helpcontext","helpfile","ignorecase","length","number","pattern","source","value","count"]);b=b.concat(["vbBlack","vbRed","vbGreen","vbYellow","vbBlue","vbMagenta","vbCyan","vbWhite","vbBinaryCompare","vbTextCompare","vbSunday","vbMonday","vbTuesday","vbWednesday","vbThursday","vbFriday","vbSaturday","vbUseSystemDayOfWeek","vbFirstJan1","vbFirstFourDays","vbFirstFullWeek","vbGeneralDate","vbLongDate","vbShortDate","vbLongTime","vbShortTime","vbObjectError","vbOKOnly","vbOKCancel","vbAbortRetryIgnore","vbYesNoCancel","vbYesNo","vbRetryCancel","vbCritical","vbQuestion","vbExclamation","vbInformation","vbDefaultButton1","vbDefaultButton2","vbDefaultButton3","vbDefaultButton4","vbApplicationModal","vbSystemModal","vbOK","vbCancel","vbAbort","vbRetry","vbIgnore","vbYes","vbNo","vbCr","VbCrLf","vbFormFeed","vbLf","vbNewLine","vbNullChar","vbNullString","vbTab","vbVerticalTab","vbUseDefault","vbTrue","vbFalse","vbEmpty","vbNull","vbInteger","vbLong","vbSingle","vbDouble","vbCurrency","vbDate","vbString","vbObject","vbError","vbBoolean","vbVariant","vbDataObject","vbDecimal","vbByte","vbArray"]),e.isASP&&(b=b.concat(["server","response","request","session","application"]),u=u.concat(["addheader","appendtolog","binarywrite","end","flush","redirect","binaryread","remove","removeall","lock","unlock","abandon","getlasterror","htmlencode","mappath","transfer","urlencode"],["buffer","cachecontrol","charset","contenttype","expires","expiresabsolute","isclientconnected","pics","status","clientcertificate","cookies","form","querystring","servervariables","totalbytes","contents","staticobjects","codepage","lcid","sessionid","timeout","scripttimeout"]));var s=n(["dim","redim","then","until","randomize","byval","byref","new","property","exit","in","const","private","public","get","set","let","stop","on error resume next","on error goto 0","option explicit","call","me"]),d=n(["true","false","nothing","empty","null"]),v=n(["abs","array","asc","atn","cbool","cbyte","ccur","cdate","cdbl","chr","cint","clng","cos","csng","cstr","date","dateadd","datediff","datepart","dateserial","datevalue","day","escape","eval","execute","exp","filter","formatcurrency","formatdatetime","formatnumber","formatpercent","getlocale","getobject","getref","hex","hour","inputbox","instr","instrrev","int","fix","isarray","isdate","isempty","isnull","isnumeric","isobject","join","lbound","lcase","left","len","loadpicture","log","ltrim","rtrim","trim","maths","mid","minute","month","monthname","msgbox","now","oct","replace","rgb","right","rnd","round","scriptengine","scriptenginebuildversion","scriptenginemajorversion","scriptengineminorversion","second","setlocale","sgn","sin","space","split","sqr","strcomp","string","strreverse","tan","time","timer","timeserial","timevalue","typename","ubound","ucase","unescape","vartype","weekday","weekdayname","year"]),m=n(b),p=n(u),f=n(["class","sub","select","while","if","function","property","with","for"]),h=n(["else","elseif","case"]),y=n(["next","loop","wend"]),g=n(["end"]),w=n(["do"]),x=n(["on error resume next","exit"]),k=n(["rem"]);function I(e,t){t.currentIndent++}function C(e,t){t.currentIndent--}function L(e,n){if(e.eatSpace())return null;var b,u,S;if("'"===e.peek())return e.skipToEnd(),"comment";if(e.match(k))return e.skipToEnd(),"comment";if(e.match(/^((&H)|(&O))?[0-9\.]/i,!1)&&!e.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i,!1)){var T=!1;if((e.match(/^\d*\.\d+/i)||e.match(/^\d+\.\d*/)||e.match(/^\.\d+/))&&(T=!0),T)return e.eat(/J/i),"number";var D=!1;if(e.match(/^&H[0-9a-f]+/i)||e.match(/^&O[0-7]+/i)?D=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),D=!0):e.match(/^0(?![\dx])/i)&&(D=!0),D)return e.eat(/L/i),"number"}return e.match('"')?(n.tokenize=(b=e.current(),u=1==b.length,S="string",function(e,t){for(;!e.eol();){if(e.eatWhile(/[^'"]/),e.match(b))return t.tokenize=L,S;e.eat(/['"]/)}return u&&(t.tokenize=L),S}),n.tokenize(e,n)):e.match(a)||e.match(r)||e.match(l)?"operator":e.match(i)?null:e.match(o)?"bracket":e.match(x)?(n.doInCurrentLine=!0,"keyword"):e.match(w)?(I(0,n),n.doInCurrentLine=!0,"keyword"):e.match(f)?(n.doInCurrentLine?n.doInCurrentLine=!1:I(0,n),"keyword"):e.match(h)?"keyword":e.match(g)?(C(0,n),C(0,n),"keyword"):e.match(y)?(n.doInCurrentLine?n.doInCurrentLine=!1:C(0,n),"keyword"):e.match(s)?"keyword":e.match(d)?"atom":e.match(p)?"variableName.special":e.match(v)||e.match(m)?"builtin":e.match(c)?"variable":(e.next(),t)}return{startState:function(){return{tokenize:L,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1,ignoreKeyword:!1}},token:function(e,n){e.sol()&&(n.currentIndent+=n.nextLineIndent,n.nextLineIndent=0,n.doInCurrentLine=0);var r=function(e,n){var r=n.tokenize(e,n),a=e.current();return"."===a?(r=n.tokenize(e,n),a=e.current(),!r||"variable"!==r.substr(0,8)&&"builtin"!==r&&"keyword"!==r?t:("builtin"!==r&&"keyword"!==r||(r="variable"),u.indexOf(a.substr(1))>-1&&(r="keyword"),r)):r}(e,n);return n.lastToken={style:r,content:e.current()},null===r&&(r=null),r},indent:function(e,t,n){var r=t.replace(/^\s+|\s+$/g,"");return r.match(y)||r.match(g)||r.match(h)?n.unit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*n.unit}}}n=e.exports,r="vbScript",a=function(){return c},Object.defineProperty(n,r,{get:a,set:i,enumerable:!0,configurable:!0});var c=o({});o({isASP:!0})}));
//# sourceMappingURL=vbscript.c5cbde12.js.map
