(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"+OZh":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=r(t("loZk")),n=r(t("sCib"));function r(e){return e&&e.__esModule?e:{default:e}}var u={ordinalNumber:(0,i.default)({matchPattern:/^(\d+)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(Î|D)/i,abbreviated:/^(Î\.?\s?d\.?\s?C\.?|Î\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,wide:/^(Înainte de Cristos|Înaintea erei noastre|După Cristos|Era noastră)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ÎC/i,/^DC/i],wide:[/^(Înainte de Cristos|Înaintea erei noastre)/i,/^(După Cristos|Era noastră)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^trimestrul [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[ifmaasond]/i,abbreviated:/^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,wide:/^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^i/i,/^f/i,/^m/i,/^a/i,/^m/i,/^i/i,/^i/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ia/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^iun/i,/^iul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[dlmjvs]/i,short:/^(d|l|ma|mi|j|v|s)/i,abbreviated:/^(dum|lun|mar|mie|jo|vi|sâ)/i,wide:/^(duminica|luni|marţi|miercuri|joi|vineri|sâmbătă)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^mi/i,/^j/i,/^v/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(a|p|mn|a|(dimineaţa|după-amiaza|seara|noaptea))/i,any:/^([ap]\.?\s?m\.?|miezul nopții|amiaza|(dimineaţa|după-amiaza|seara|noaptea))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/amiaza/i,morning:/dimineaţa/i,afternoon:/după-amiaza/i,evening:/seara/i,night:/noaptea/i}},defaultParseWidth:"any"})};a.default=u,e.exports=a.default},"6XhT":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i,n=(i=t("HyFC"))&&i.__esModule?i:{default:i};var r={date:(0,n.default)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} 'la' {{time}}",long:"{{date}} 'la' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=r,e.exports=a.default},HyFC:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=a||{},i=t.width?String(t.width):e.defaultWidth;return e.formats[i]||e.formats[e.defaultWidth]}},e.exports=a.default},LyXU:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,t){var n;t=t||{},n="string"==typeof i[e]?i[e]:1===a?i[e].one:i[e].other.replace("{{count}}",a);if(t.addSuffix)return t.comparison>0?"în "+n:n+" în urmă";return n};var i={lessThanXSeconds:{one:"mai puțin de o secundă",other:"mai puțin de {{count}} secunde"},xSeconds:{one:"1 secundă",other:"{{count}} secunde"},halfAMinute:"jumătate de minut",lessThanXMinutes:{one:"mai puțin de un minut",other:"mai puțin de {{count}} minute"},xMinutes:{one:"1 minut",other:"{{count}} minute"},aboutXHours:{one:"circa 1 oră",other:"circa {{count}} ore"},xHours:{one:"1 oră",other:"{{count}} ore"},xDays:{one:"1 zi",other:"{{count}} zile"},aboutXMonths:{one:"circa 1 lună",other:"circa {{count}} luni"},xMonths:{one:"1 lună",other:"{{count}} luni"},aboutXYears:{one:"circa 1 an",other:"circa {{count}} ani"},xYears:{one:"1 an",other:"{{count}} ani"},overXYears:{one:"peste 1 an",other:"peste {{count}} ani"},almostXYears:{one:"aproape 1 an",other:"aproape {{count}} ani"}};e.exports=a.default},TvXE:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i,n=(i=t("rwOc"))&&i.__esModule?i:{default:i};var r={ordinalNumber:function(e){var a=Number(e);return String(a)},era:(0,n.default)({values:{narrow:["Î","D"],abbreviated:["Î.d.C.","D.C."],wide:["Înainte de Cristos","După Cristos"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["primul trimestru","al doilea trimestru","al treilea trimestru","al patrulea trimestru"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:{narrow:["I","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"],wide:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["d","l","m","m","j","v","s"],short:["du","lu","ma","mi","jo","vi","sâ"],abbreviated:["dum","lun","mar","mie","joi","vin","sâm"],wide:["duminică","luni","marți","miercuri","joi","vineri","sâmbătă"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"ami",morning:"dim",afternoon:"da",evening:"s",night:"n"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"}},defaultFormattingWidth:"wide"})};a.default=r,e.exports=a.default},aItZ:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,t,n){return i[e]};var i={lastWeek:"eeee 'trecută la' p",yesterday:"'ieri la' p",today:"'astăzi la' p",tomorrow:"'mâine la' p",nextWeek:"eeee 'viitoare la' p",other:"P"};e.exports=a.default},loZk:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var i=String(a),n=t||{},r=i.match(e.matchPattern);if(!r)return null;var u=r[0],o=i.match(e.parsePattern);if(!o)return null;var d=e.valueCallback?e.valueCallback(o[0]):o[0];return{value:d=n.valueCallback?n.valueCallback(d):d,rest:i.slice(u.length)}}},e.exports=a.default},r2yp:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=d(t("LyXU")),n=d(t("6XhT")),r=d(t("aItZ")),u=d(t("TvXE")),o=d(t("+OZh"));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"ro",formatDistance:i.default,formatLong:n.default,formatRelative:r.default,localize:u.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};a.default=l,e.exports=a.default},rwOc:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var i,n=t||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,u=n.width?String(n.width):r;i=e.formattingValues[u]||e.formattingValues[r]}else{var o=e.defaultWidth,d=n.width?String(n.width):e.defaultWidth;i=e.values[d]||e.values[o]}return i[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default},sCib:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var i=String(a),n=t||{},r=n.width,u=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=i.match(u);if(!o)return null;var d,l=o[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(s)?function(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}(s,(function(e){return e.test(i)})):function(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}(s,(function(e){return e.test(i)})),d=e.valueCallback?e.valueCallback(d):d,{value:d=n.valueCallback?n.valueCallback(d):d,rest:i.slice(l.length)}}},e.exports=a.default}}]);
//# sourceMappingURL=52.89e4a224.chunk.js.map