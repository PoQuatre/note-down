("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireec1d.register("5deQN",(function(e,t){var T,n,E,C;function N(e){for(var t={},T=e.split(" "),n=0;n<T.length;++n)t[T[n]]=!0;return t}T=e.exports,n="ttcnCfg",E=function(){return S},Object.defineProperty(T,n,{get:E,set:C,enumerable:!0,configurable:!0});const i={name:"ttcn-cfg",keywords:N("Yes No LogFile FileMask ConsoleMask AppendFile TimeStampFormat LogEventTypes SourceInfoFormat LogEntityName LogSourceInfo DiskFullAction LogFileNumber LogFileSize MatchingHints Detailed Compact SubCategories Stack Single None Seconds DateTime Time Stop Error Retry Delete TCPPort KillTimer NumHCs UnixSocketsEnabled LocalAddress"),fileNCtrlMaskOptions:N("TTCN_EXECUTOR TTCN_ERROR TTCN_WARNING TTCN_PORTEVENT TTCN_TIMEROP TTCN_VERDICTOP TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION TTCN_USER TTCN_FUNCTION TTCN_STATISTICS TTCN_PARALLEL TTCN_MATCHING TTCN_DEBUG EXECUTOR ERROR WARNING PORTEVENT TIMEROP VERDICTOP DEFAULTOP TESTCASE ACTION USER FUNCTION STATISTICS PARALLEL MATCHING DEBUG LOG_ALL LOG_NOTHING ACTION_UNQUALIFIED DEBUG_ENCDEC DEBUG_TESTPORT DEBUG_UNQUALIFIED DEFAULTOP_ACTIVATE DEFAULTOP_DEACTIVATE DEFAULTOP_EXIT DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED EXECUTOR_COMPONENT EXECUTOR_CONFIGDATA EXECUTOR_EXTCOMMAND EXECUTOR_LOGOPTIONS EXECUTOR_RUNTIME EXECUTOR_UNQUALIFIED FUNCTION_RND FUNCTION_UNQUALIFIED MATCHING_DONE MATCHING_MCSUCCESS MATCHING_MCUNSUCC MATCHING_MMSUCCESS MATCHING_MMUNSUCC MATCHING_PCSUCCESS MATCHING_PCUNSUCC MATCHING_PMSUCCESS MATCHING_PMUNSUCC MATCHING_PROBLEM MATCHING_TIMEOUT MATCHING_UNQUALIFIED PARALLEL_PORTCONN PARALLEL_PORTMAP PARALLEL_PTC PARALLEL_UNQUALIFIED PORTEVENT_DUALRECV PORTEVENT_DUALSEND PORTEVENT_MCRECV PORTEVENT_MCSEND PORTEVENT_MMRECV PORTEVENT_MMSEND PORTEVENT_MQUEUE PORTEVENT_PCIN PORTEVENT_PCOUT PORTEVENT_PMIN PORTEVENT_PMOUT PORTEVENT_PQUEUE PORTEVENT_STATE PORTEVENT_UNQUALIFIED STATISTICS_UNQUALIFIED STATISTICS_VERDICT TESTCASE_FINISH TESTCASE_START TESTCASE_UNQUALIFIED TIMEROP_GUARD TIMEROP_READ TIMEROP_START TIMEROP_STOP TIMEROP_TIMEOUT TIMEROP_UNQUALIFIED USER_UNQUALIFIED VERDICTOP_FINAL VERDICTOP_GETVERDICT VERDICTOP_SETVERDICT VERDICTOP_UNQUALIFIED WARNING_UNQUALIFIED"),externalCommands:N("BeginControlPart EndControlPart BeginTestCase EndTestCase"),multiLineStrings:!0};var r,o=i.keywords,I=i.fileNCtrlMaskOptions,l=i.externalCommands,_=i.multiLineStrings,a=!1!==i.indentStatements,A=/[\|]/;function O(e,t){var T,n=e.next();if('"'==n||"'"==n)return t.tokenize=(T=n,function(e,t){for(var n,E=!1,C=!1;null!=(n=e.next());){if(n==T&&!E){var N=e.peek();N&&("b"!=(N=N.toLowerCase())&&"h"!=N&&"o"!=N||e.next()),C=!0;break}E=!E&&"\\"==n}return(C||!E&&!_)&&(t.tokenize=null),"string"}),t.tokenize(e,t);if(/[:=]/.test(n))return r=n,"punctuation";if("#"==n)return e.skipToEnd(),"comment";if(/\d/.test(n))return e.eatWhile(/[\w\.]/),"number";if(A.test(n))return e.eatWhile(A),"operator";if("["==n)return e.eatWhile(/[\w_\]]/),"number";e.eatWhile(/[\w\$_]/);var E=e.current();return o.propertyIsEnumerable(E)?"keyword":I.propertyIsEnumerable(E)?"atom":l.propertyIsEnumerable(E)?"deleted":"variable"}function U(e,t,T,n,E){this.indented=e,this.column=t,this.type=T,this.align=n,this.prev=E}function R(e,t,T){var n=e.indented;return e.context&&"statement"==e.context.type&&(n=e.context.indented),e.context=new U(n,t,T,null,e.context)}function s(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}const S={startState:function(){return{tokenize:null,context:new U(0,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var T=t.context;if(e.sol()&&(null==T.align&&(T.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;r=null;var n=(t.tokenize||O)(e,t);if("comment"==n)return n;if(null==T.align&&(T.align=!0),";"!=r&&":"!=r&&","!=r||"statement"!=T.type)if("{"==r)R(t,e.column(),"}");else if("["==r)R(t,e.column(),"]");else if("("==r)R(t,e.column(),")");else if("}"==r){for(;"statement"==T.type;)T=s(t);for("}"==T.type&&(T=s(t));"statement"==T.type;)T=s(t)}else r==T.type?s(t):a&&(("}"==T.type||"top"==T.type)&&";"!=r||"statement"==T.type&&"newstatement"==r)&&R(t,e.column(),"statement");else s(t);return t.startOfLine=!1,n},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"#"}}}}));
//# sourceMappingURL=ttcn-cfg.0bd9e8d6.js.map
