(function(e){function t(t){for(var r,a,o=t[0],i=t[1],u=t[2],f=0,l=[];f<o.length;f++)a=o[f],s[a]&&l.push(s[a][0]),s[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s={app:0},c=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"86aab8eb"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"0e433876"}[e]+".css",s=i.p+r,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var u=c[o],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===r||f===s))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],f=u.getAttribute("data-href");if(f===r||f===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(d)}).then(function(){a[e]=0}));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=s[e]=[t,n]});t.push(r[2]=c);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=o(e),u=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}s[e]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1802:function(e,t,n){"use strict";var r=n("5857"),a=n.n(r);a.a},"27c1":function(e,t,n){"use strict";var r=n("5415"),a=n.n(r);a.a},"2af9":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-expansion-panel",e._l(e.answered_questions,function(t,r){return n("v-expansion-panel-content",{key:r},[n("div",{attrs:{slot:"header"},domProps:{innerHTML:e._s(t.question)},slot:"header"}),n("v-card",{attrs:{color:t.correct_answer===t.answer?"success":"warning"}},[n("v-card-text",[e._v("You answered: "+e._s(t.answer))]),n("v-card-text",[e._v("Correct answer: "+e._s(t.correct_answer))])],1)],1)}),1),n("v-btn",{attrs:{color:"primary"},on:{click:e.clearHistory}},[e._v("clear history")])],1)},a=[],s=n("be94"),c=n("2f62"),o=n("4360"),i={computed:Object(s["a"])({},Object(c["b"])(["answered_questions"])),methods:{clearHistory:function(){this.$store.commit(o["b"].CLEAR_HISTORY)}}},u=i,f=(n("9556"),n("2877")),l=n("6544"),d=n.n(l),b=n("8336"),p=n("b0af"),j=n("99d9"),h=n("cd55"),v=n("49e2"),m=Object(f["a"])(u,r,a,!1,null,"187135b3",null);m.options.__file="History.vue";var g=m.exports;d()(m,{VBtn:b["a"],VCard:p["a"],VCardText:j["a"],VExpansionPanel:h["a"],VExpansionPanelContent:v["a"]});var _=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{dark:"",color:"secondary"}},[n("v-card-text",{staticClass:"px-0 font-weight-bold headline",domProps:{innerHTML:e._s(e.selected_question.question)}}),n("v-card-text",{staticClass:"px-0 pb-0 pt-4"},[n("span",[e._v(e._s(e.questions_length)+" questions remaining after this")])]),n("v-card-text",{staticClass:"px-0 py-0"},[n("v-btn",{attrs:{flat:"",color:"orange"},on:{click:e.fetchMoreQuestions}},[e._v("get more")])],1)],1)},y=[],w=(n("cadf"),n("551c"),n("097d"),{computed:Object(s["a"])({},Object(c["b"])(["selected_question","questions_length"])),methods:{fetchMoreQuestions:function(){this.$store.dispatch(o["b"].FETCH_QUESTIONS)}}}),O=w,k=(n("7874"),Object(f["a"])(O,_,y,!1,null,"52718dfe",null));k.options.__file="Question.vue";var x=k.exports;d()(k,{VBtn:b["a"],VCard:p["a"],VCardText:j["a"]});var q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{wrap:"","align-center":""}},[n("v-flex",{attrs:{xs12:"",sm6:"","d-flex":""}},[n("v-select",{attrs:{items:e.categories,"item-text":"name","item-value":"id",label:"Category",outline:""},model:{value:e.selected_category,callback:function(t){e.selected_category=t},expression:"selected_category"}})],1),n("v-flex",{attrs:{xs12:"",sm6:"","d-flex":""}},[n("v-select",{attrs:{items:e.difficulties,"item-text":"name","item-value":"name",label:"Difficulty",outline:""},model:{value:e.selected_difficulty,callback:function(t){e.selected_difficulty=t},expression:"selected_difficulty"}})],1)],1)},T=[],E=n("5935"),C={data:function(){return{}},computed:Object(s["a"])({},Object(c["b"])(["difficulties","categories"]),Object(E["b"])(["selected_category","selected_difficulty"]))},S=C,z=(n("27c1"),n("0e8f")),V=n("a722"),R=n("b56d"),A=Object(f["a"])(S,q,T,!1,null,"1a75759f",null);A.options.__file="Setting.vue";var N=A.exports;d()(A,{VFlex:z["a"],VLayout:V["a"],VSelect:R["a"]});var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","grid-list-xl":""}},[n("v-layout",{attrs:{wrap:"","align-center":""}},e._l(e.selected_q_answers,function(t){return n("v-flex",{key:t,attrs:{xs6:"","d-flex":""}},[n("v-card",{attrs:{dark:"",color:"primary"},on:{click:function(n){e.answerQuestion(t)}}},[n("v-card-text",{staticClass:"px-0",domProps:{innerHTML:e._s(t)}})],1)],1)}),1)],1)},H=[],Q={computed:Object(s["a"])({},Object(c["b"])(["selected_q_answers"])),methods:{answerQuestion:function(e){this.$store.commit(o["b"].ANSWER_QUESTION,e)}}},L=Q,U=(n("1802"),n("a523")),$=Object(f["a"])(L,P,H,!1,null,"7aca72e6",null);$.options.__file="Answers.vue";var F=$.exports;d()($,{VCard:p["a"],VCardText:j["a"],VContainer:U["a"],VFlex:z["a"],VLayout:V["a"]}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return x}),n.d(t,"d",function(){return N}),n.d(t,"a",function(){return F})},4360:function(e,t,n){"use strict";var r,a,s=n("be94"),c=(n("cadf"),n("551c"),n("097d"),n("2b0e")),o=n("2f62"),i=n("5935"),u=n("2909"),f=n("e0d5"),l=n.n(f),d={difficulties:function(e){var t=e.difficulties;return t},categories:function(e){var t=e.categories;return t},selected_question:function(e){var t=e.selected_question;return t},selected_q_answers:function(e){var t=e.selected_question;return t.correct_answer&&t.incorrect_answers?l()([t.correct_answer].concat(Object(u["a"])(t.incorrect_answers))):[]},questions_length:function(e){var t=e.questions;return t.length},answered_questions:function(e){var t=e.answered_questions;return t}},b=n("ade3"),p=n("3835"),j=(n("7514"),n("6e87")),h=(r={},Object(b["a"])(r,j["f"],function(e,t){e.categories=Object(u["a"])(t)}),Object(b["a"])(r,j["h"],function(e,t){e.token=t}),Object(b["a"])(r,j["g"],function(e,t){var n=t.filter(function(t){var n=e.questions.find(function(e){return e.id===t.id}),r=e.answered_questions.find(function(e){return e.id===t.id}),a=n||r;return!a});0===e.questions.length&&(e.selected_question=n.pop()),e.questions=[].concat(Object(u["a"])(e.questions),Object(u["a"])(n))}),Object(b["a"])(r,j["a"],function(e,t){var n=e.selected_question;e.answered_questions=[].concat(Object(u["a"])(e.answered_questions),[Object(s["a"])({},n,{answer:t})]);var r=e.questions.splice(0,1),a=Object(p["a"])(r,1),c=a[0];e.selected_question=Object(s["a"])({},c)}),Object(b["a"])(r,j["b"],function(e){e.answered_questions=[]}),r),v=(n("96cf"),n("1da1")),m=n("d4ec"),g=n("bee2"),_=n("99de"),y=n("7e84"),w=n("262e"),O=n("27ae"),k=n("bc3a"),x=n.n(k),q=function(){function e(t){Object(m["a"])(this,e),this.baseUrl="https://opentdb.com",this.token=t||void 0}return Object(g["a"])(e,[{key:"query",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(){var t,n,r,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e.next=3,x()(Object(s["a"])({baseURL:this.baseUrl},t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]),e}(),T=function(e){function t(){return Object(m["a"])(this,t),Object(_["a"])(this,Object(y["a"])(t).apply(this,arguments))}return Object(w["a"])(t,e),Object(g["a"])(t,[{key:"getTenQuestions",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(){var t,n,r,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e.next=3,this.query({url:"/api.php",method:"GET",params:Object(s["a"])({amount:10,token:this.token},t),responseType:"json"});case 3:return n=e.sent,r=n.results,e.abrupt("return",r.map(function(e){return Object(s["a"])({},e,{id:O["Base64"].encode(JSON.stringify(e),!1)})})||[]);case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getCategories",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.query({url:"/api_category.php",method:"GET",responseType:"json"});case 2:return t=e.sent,n=t.trivia_categories,e.abrupt("return",n||[]);case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(q),E=T,C=n("c1df"),S=n.n(C),z="triviaDB",V=function(e){function t(){return Object(m["a"])(this,t),Object(_["a"])(this,Object(y["a"])(t).apply(this,arguments))}return Object(w["a"])(t,e),Object(g["a"])(t,[{key:"retrieveToken",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(){var t,n,r,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=JSON.parse(localStorage.getItem(z))||{updatedAt:S()().subtract(12,"hours")},n=S()(t.updatedAt).isBefore(S()().subtract(6,"hours")),!n){e.next=12;break}return e.next=5,this.query({url:"/api_token.php",method:"GET",params:{command:"request"},responseType:"json"});case 5:if(r=e.sent,a=r.response_code,s=r.token,0!==a){e.next=11;break}return localStorage.setItem(z,JSON.stringify({token:s,updatedAt:S.a.now()})),e.abrupt("return",s);case 11:return e.abrupt("return",null);case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]),t}(q),R=V,A=(a={},Object(b["a"])(a,j["c"],function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.state,a=new E(r.token),e.next=4,a.getCategories();case 4:s=e.sent,n(j["f"],s);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),Object(b["a"])(a,j["e"],function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.state,a=new R(r.token),e.next=4,a.retrieveToken();case 4:s=e.sent,c=s.token,n(j["h"],c);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),Object(b["a"])(a,j["d"],function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,s,c,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.state,a=r.selected_difficulty.toLowerCase(),s={category:r.selected_category>-1?r.selected_category:void 0,difficulty:"any"!==a?a:void 0},c=new E(r.token),e.next=6,c.getTenQuestions(JSON.parse(JSON.stringify(s)));case 6:o=e.sent,n(j["g"],o);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),a);n.d(t,"b",function(){return j["i"]}),c["default"].use(o["a"]);t["a"]=new o["a"].Store({state:{categories:[],selected_category:-1,questions:[],selected_question:{},answered_questions:[],difficulties:[{id:-1,name:"Any"},{id:0,name:"Easy"},{id:1,name:"Medium"},{id:2,name:"Hard"}],selected_difficulty:"Any",token:""},getters:Object(s["a"])({},d,{getField:i["a"]}),actions:A,mutations:Object(s["a"])({},h,{updateField:i["c"]})})},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return n(t)}function s(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="4678"},5415:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:""}},[n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("v-footer",{attrs:{app:""}})],1)},s=[],c=n("6e87"),o={mounted:function(){this.$store.dispatch(c["c"]),this.$store.dispatch(c["e"])}},i=o,u=(n("5c0b"),n("2877")),f=n("6544"),l=n.n(f),d=n("7496"),b=n("a523"),p=n("549c"),j=n("553a"),h=Object(u["a"])(i,a,s,!1,null,null,null);h.options.__file="App.vue";var v=h.exports;l()(h,{VApp:d["a"],VContainer:b["a"],VContent:p["a"],VFooter:j["a"]});var m=n("8c4f"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"","grid-list-xl":""}},[r("img",{attrs:{alt:"Vue logo",src:n("afe0")}}),r("setting"),r("v-layout",{attrs:{wrap:"","align-center":""}},[r("v-flex",{attrs:{xs12:"","d-flex":""}},[r("v-btn",{attrs:{color:"primary"},on:{click:e.goToQuiz}},[e._v(e._s(e.questions_length>0?e.q_left_text:"GO"))])],1)],1),r("v-layout",{attrs:{wrap:"","align-center":""}},[r("v-flex",{attrs:{xs12:"","d-flex":""}},[r("history")],1)],1)],1)},_=[],y=n("be94"),w=n("2f62"),O=n("2af9"),k={name:"Home",components:{Setting:O["d"],History:O["b"]},data:function(){return{q_left_text:"There are questions in your queue, click to append new ones"}},computed:Object(y["a"])({},Object(w["b"])(["questions_length"])),methods:{goToQuiz:function(){this.$router.push({name:"quiz"})}}},x=k,q=n("8336"),T=n("0e8f"),E=n("a722"),C=Object(u["a"])(x,g,_,!1,null,null,null);C.options.__file="Home.vue";var S=C.exports;l()(C,{VBtn:q["a"],VContainer:b["a"],VFlex:T["a"],VLayout:E["a"]});var z=[{path:"/",name:"home",component:S},{path:"/quiz",name:"quiz",component:function(){return n.e("about").then(n.bind(null,"2e44"))}}];r["default"].use(m["a"]);var V=new m["a"]({routes:z}),R=n("4360"),A=(n("ac6a"),n("ce5b")),N=n.n(A),P=(n("bf40"),n("c0a4")),H=n.n(P),Q={plugin:N.a,options:{theme:{primary:H.a.lightBlue.lighten1,secondary:H.a.grey.darken1,accent:H.a.shades.black,error:H.a.red.accent3,info:H.a.lightBlue.lighten2,success:"#4CAF50",warning:H.a.orange.darken2}}},L=[Q],U={install:function(e){L.forEach(function(t){return e.use(t.plugin,t.options)})}};U.install(r["default"]),r["default"].config.productionTip=!1,new r["default"]({router:V,store:R["a"],render:function(e){return e(v)}}).$mount("#app")},"56e8":function(e,t,n){},5857:function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("6879"),a=n.n(r);a.a},6879:function(e,t,n){},"6e87":function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"f",function(){return a}),n.d(t,"e",function(){return s}),n.d(t,"h",function(){return c}),n.d(t,"d",function(){return o}),n.d(t,"g",function(){return i}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return f});n("cadf"),n("551c"),n("097d");var r="fetch_categories",a="update_categories",s="fetch_token",c="update_token",o="fetch_questions",i="update_questions",u="answer_question",f="clear_history";t["i"]={FETCH_CATEGORIES:r,UPDATE_CATEGORIES:a,FETCH_TOKEN:s,UPDATE_TOKEN:c,FETCH_QUESTIONS:o,UPDATE_QUESTIONS:i,ANSWER_QUESTION:u,CLEAR_HISTORY:f}},7874:function(e,t,n){"use strict";var r=n("e79d"),a=n.n(r);a.a},9556:function(e,t,n){"use strict";var r=n("56e8"),a=n.n(r);a.a},afe0:function(e,t,n){e.exports=n.p+"img/trivialogo.7156d093.png"},e79d:function(e,t,n){}});
//# sourceMappingURL=app.9f4d5161.js.map