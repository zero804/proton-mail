(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"0QQ0":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a("loZk")),n=i(a("sCib"));function i(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,r.default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(f\.Kr\.|e\.Kr\.)/i,abbreviated:/^(f\.Kr\.|e\.Kr\.)/i,wide:/^(fyrir Krist|eftir Krist)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(f\.Kr\.|e\.Kr\.)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234] fjórðungur/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jfmásónd]/i,abbreviated:/^(jan\.|feb\.|mars\.|apríl\.|maí|júní|júlí|águst|sep\.|oct\.|nov\.|dec\.)/i,wide:/^(januar|februar|mars|apríl|maí|júní|júlí|águst|september|október|nóvember|desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^á/i,/^s/i,/^ó/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maí/i,/^jún/i,/^júl/i,/^áu/i,/^s/i,/^ó/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|má|þr|mi|fi|fö|la)/i,abbreviated:/^(sun|mán|þri|mið|fim|fös|lau)\.?/i,wide:/^(sunnudagur|mánudagur|þriðjudagur|miðvikudagur|fimmtudagur|föstudagur|laugardagur)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^þ/i,/^m/i,/^f/i,/^f/i,/^l/i],any:[/^su/i,/^má/i,/^þr/i,/^mi/i,/^fi/i,/^fö/i,/^la/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(f|e|síðdegis|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i,any:/^(fyrir hádegi|eftir hádegi|[ef]\.?h\.?|síðdegis|morgunn|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^f/i,pm:/^e/i,midnight:/^mi/i,noon:/^há/i,morning:/morgunn/i,afternoon:/síðdegi/i,evening:/kvöld/i,night:/nótt/i}},defaultParseWidth:"any"})};t.default=u,e.exports=t.default},CXdO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){return r[e]};var r={lastWeek:"'síðasta' dddd 'kl.' p",yesterday:"'í gær kl.' p",today:"'í dag kl.' p",tomorrow:"'á morgun kl.' p",nextWeek:"dddd 'kl.' p",other:"L"};e.exports=t.default},HyFC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=t||{},r=a.width?String(a.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}},e.exports=t.default},N4bE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("h7Q4")),n=o(a("yIK7")),i=o(a("CXdO")),u=o(a("YCN6")),d=o(a("0QQ0"));function o(e){return e&&e.__esModule?e:{default:e}}var l={code:"is",formatDistance:r.default,formatLong:n.default,formatRelative:i.default,localize:u.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default},YCN6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a("rwOc"))&&r.__esModule?r:{default:r};var i={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,n.default)({values:{narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["fyrir Krist","eftir Krist"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["1F","2F","3F","4F"],wide:["1. fjórðungur","2. fjórðungur","3. fjórðungur","4. fjórðungur"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:{narrow:["J","F","M","A","M","J","J","Á","S","Ó","N","D"],abbreviated:["jan.","feb.","mars","apríl","maí","júní","júlí","ágúst","sept.","okt.","nóv.","des."],wide:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["S","M","Þ","M","F","F","L"],short:["Su","Má","Þr","Mi","Fi","Fö","La"],abbreviated:["sun.","mán.","þri.","mið.","fim.","fös.","lau"],wide:["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"f",pm:"e",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"},wide:{am:"fyrir hádegi",pm:"eftir hádegi",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"}},defaultWidth:"wide",formattingValues:{narrow:{am:"f",pm:"e",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"},wide:{am:"fyrir hádegi",pm:"eftir hádegi",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},h7Q4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var n;a=a||{},n="string"==typeof r[e]?r[e]:1===t?r[e].one:r[e].other.replace("{{count}}",t);if(a.addSuffix)return a.comparison>0?"í "+n:n+" síðan";return n};var r={lessThanXSeconds:{one:"minna en 1 sekúnda",other:"minna en {{count}} sekúndur"},xSeconds:{one:"1 sekúnda",other:"{{count}} sekúndur"},halfAMinute:"hálf mínúta",lessThanXMinutes:{one:"minna en 1 mínúta",other:"minna en {{count}} mínútur"},xMinutes:{one:"1 mínúta",other:"{{count}} mínútur"},aboutXHours:{one:"u.þ.b. 1 klukkustund",other:"u.þ.b. {{count}} klukkustundir"},xHours:{one:"1 klukkustund",other:"{{count}} klukkustundir"},xDays:{one:"1 dagur",other:"{{count}} dagar"},aboutXMonths:{one:"u.þ.b. 1 mánuður",other:"u.þ.b. {{count}} mánuðir"},xMonths:{one:"1 mánuður",other:"{{count}} mánuðir"},aboutXYears:{one:"u.þ.b. 1 ár",other:"u.þ.b. {{count}} ár"},xYears:{one:"1 ár",other:"{{count}} ár"},overXYears:{one:"meira en 1 ár",other:"meira en {{count}} ár"},almostXYears:{one:"næstum 1 ár",other:"næstum {{count}} ár"}};e.exports=t.default},loZk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r=String(t),n=a||{},i=r.match(e.matchPattern);if(!i)return null;var u=i[0],d=r.match(e.parsePattern);if(!d)return null;var o=e.valueCallback?e.valueCallback(d[0]):d[0];return{value:o=n.valueCallback?n.valueCallback(o):o,rest:r.slice(u.length)}}},e.exports=t.default},rwOc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r,n=a||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,u=n.width?String(n.width):i;r=e.formattingValues[u]||e.formattingValues[i]}else{var d=e.defaultWidth,o=n.width?String(n.width):e.defaultWidth;r=e.values[o]||e.values[d]}return r[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},sCib:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r=String(t),n=a||{},i=n.width,u=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],d=r.match(u);if(!d)return null;var o,l=d[0],s=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return o="[object Array]"===Object.prototype.toString.call(s)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(s,(function(e){return e.test(r)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(s,(function(e){return e.test(r)})),o=e.valueCallback?e.valueCallback(o):o,{value:o=n.valueCallback?n.valueCallback(o):o,rest:r.slice(l.length)}}},e.exports=t.default},yIK7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a("HyFC"))&&r.__esModule?r:{default:r};var i={date:(0,n.default)({formats:{full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"d.MM.y"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default}}]);
//# sourceMappingURL=40.d5bdc5e5.chunk.js.map