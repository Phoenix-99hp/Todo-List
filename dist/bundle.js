!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var i=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},r=(i(o,a),o.locals?o.locals:{});e.exports=r},function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function d(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},i=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],s=n[l]||0,c="".concat(l," ").concat(s);n[l]=s+1;var u=d(c),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(r[u].references++,r[u].updater(p)):r.push({identifier:c,updater:v(p,t),references:1}),i.push(c)}return i}function s(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function p(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function m(e,t,n){var i=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var g=null,f=0;function v(e,t){var n,i,o;if(t.singleton){var a=f++;n=g||(g=s(t)),i=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=s(t),i=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=d(n[i]);r[o].references--}for(var a=l(e,t),s=0;s<n.length;s++){var c=d(n[s]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}n=a}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,'html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol,\nul {\n\tlist-style: none;\n}\nblockquote,\nq {\n\tquotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n\tcontent: "";\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\nhtml,\nbody {\n\twidth: 100%;\n}\n\n:focus {\n\toutline: none;\n}\n::-moz-focus-inner {\n\tborder: 0;\n}\n\n#newForm,\n#editModal {\n\twidth: 80%;\n\tmargin: 0 auto;\n}\n\n.idHolder,\n.inactive {\n\tdisplay: none;\n}\n\n.hide {\n\tvisibility: hidden;\n\tmargin: 0 auto;\n\tmargin-bottom: 20px;\n}\n\n.show {\n\tvisibility: visible;\n\tfont-size: 14px;\n}\n\n.blur {\n\t-webkit-filter: blur(5px);\n\tfilter: blur(5px);\n}\n\n#content,\n#newForm,\n#editModal,\n#todoContainer,\n.todo,\n.description {\n\tbox-sizing: border-box;\n}\n\n#errorEdit,\n#errorNew {\n\tz-index: 99;\n\tposition: absolute;\n\ttext-align: center;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tleft: 0;\n\tright: 0;\n\ttext-align: center;\n\tborder-radius: 5px;\n\tborder: 2px solid rgb(224, 15, 15);\n\tbackground-color: rgb(245, 245, 245);\n\ttop: 30%;\n\theight: 20%;\n\twidth: 50%;\n}\n\n#errorNewMsg,\n#errorEditMsg {\n\tmargin-left: 10px;\n\tmargin-right: 10px;\n\tposition: relative;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\tfont-family: "Oxanium", cursive;\n\tfont-size: 18px;\n}\n\n#errorEditOk,\n#errorNewOk {\n\tposition: absolute;\n\twidth: 56px;\n\theight: 29px;\n\tbackground-color: aquamarine;\n\tborder-radius: 5px;\n\tmargin-left: -28px;\n\ttop: 75%;\n}\n\n#content {\n\toverflow: auto;\n\toverflow-y: scroll;\n\tpadding-bottom: 20px;\n}\n\nheader {\n\tfont-size: 65px;\n\tmargin-top: 10px;\n\tfont-family: "Oxanium", cursive;\n\tcolor: aquamarine;\n\ttext-shadow: 2px 3px 4px aqua;\n\tfont-style: italic;\n\ttext-align: center;\n}\n\n.todoContainer {\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\talign-items: baseline;\n\tmargin: 0 auto;\n\tmargin-top: 35px;\n}\n\n#clear {\n\tmargin-top: 50px;\n\ttext-align: center;\n}\n\n.todo {\n\tmargin: 0;\n\toverflow-wrap: break-word;\n\twidth: 80%;\n\tborder: solid aquamarine 2px;\n\tborder-radius: 5px;\n\tfont-size: 20px;\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\tjustify-content: space-between;\n\tbackground-color: aliceblue;\n}\n\n.deleteBtn {\n\tcolor: black;\n\tpadding: 5px;\n\tpadding-left: 0px;\n\talign-self: center;\n}\n\n.title,\n.dueDate,\n.priority,\n.description,\n.editBtn {\n\tpadding: 5px;\n\tmargin: 5px;\n}\n\n.title {\n\tword-break: break-all;\n\twidth: fit-content;\n\tfont-family: "Rokkitt", serif;\n\talign-self: center;\n\tfont-size: 20px;\n}\n\n.dueDate {\n\twidth: fit-content;\n\theight: 100%;\n\tbackground-color: aquamarine;\n\tborder-radius: 10px;\n\topacity: 0.75;\n\tfont-family: "Oxanium", cursive;\n\tfont-size: 15px;\n\talign-self: center;\n}\n\n.priority {\n\tdisplay: none;\n}\n\n.showDescription {\n\tpadding: 5px;\n\talign-self: center;\n\tcolor: aquamarine;\n}\n\n#newTodo {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 5px;\n\tborder-radius: 10px;\n\tborder: 2px solid aqua;\n\tmargin: 5px;\n\tpadding: 5px;\n\tbackground-color: aquamarine;\n\tfont-size: 15px;\n}\n\n.setOpacity {\n\topacity: 0.75;\n}\n\n#newForm,\n#editModal {\n\ttext-align: left;\n\tmargin-top: 30px;\n\tpadding: 20px;\n\tborder: 1px solid rgb(207, 202, 202);\n\tborder-radius: 5px;\n}\n\ninput,\ntextarea,\nselect {\n\twidth: 100%;\n\tmargin: 20px;\n\tmargin-left: 0px;\n\tmargin-right: 0px;\n\tpadding: 0px;\n\tborder: 1px solid rgb(207, 202, 202);\n\tfont-family: "Rokkitt", serif;\n\tfont-size: 20px;\n\tborder-radius: 3px;\n}\n\ninput,\ntextarea {\n\tpadding: 10px;\n\tbox-sizing: border-box;\n}\n\ninput,\nselect {\n\theight: 35px !important;\n}\n\ntextarea {\n\theight: 65px;\n\tresize: none;\n}\n\ninput,\nselect {\n\tbackground-color: white;\n}\n\n#saveNew,\n#saveEdit {\n\tmargin-right: 10px;\n\tbackground-color: aqua;\n\tborder-radius: 2px;\n}\n\n.btnContainer {\n\ttext-align: right;\n}\n\n#cancelNew,\n#cancelEdit {\n\tbackground-color: rgb(240, 231, 231);\n}\n\n.buttonContainer {\n\ttext-align: center;\n\tmargin-top: 30px;\n}\n\n#saveNew,\n#cancelNew,\n#saveEdit,\n#cancelEdit {\n\tborder-radius: 10px;\n\tpadding: 10px;\n\tpadding: 5px;\n\tpadding-left: 9px;\n\tpadding-right: 9px;\n}\n\n#saveNew,\n#cancelNew,\n#newTodo,\n#saveEdit,\n#cancelEdit {\n\tfont-family: "Oxanium", cursive;\n\tfont-size: 15px;\n}\n\n.btnHover:hover {\n\topacity: 0.6;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n\tborder: 2px solid aqua;\n\tbox-shadow: 0 0 9px aqua;\n}\n\nlabel {\n\tfont-family: "Rokkitt", serif;\n\tfont-size: 20px;\n\tfont-weight: bold;\n}\n\n.red {\n\tbackground-color: rgb(224, 15, 15);\n\tcolor: white;\n}\n\n.yellow {\n\tbackground-color: rgb(236, 236, 12);\n}\n\n.green {\n\tbackground-color: aquamarine;\n}\n\n.description {\n\tfont-family: "Rokkitt", serif;\n\tfont-size: 19px;\n\twidth: 100%;\n\tmargin: 0 auto;\n\tpadding: 10px;\n\tborder-top: 1px solid rgb(207, 202, 202);\n\tword-wrap: break-word;\n\tflex-flow: row wrap;\n\tflex-wrap: wrap;\n\twhite-space: pre-wrap;\n}\n\n.editBtn {\n\tmargin: 0px;\n\talign-self: center;\n}\n\n.firstLine {\n\twidth: 100%;\n\ttext-align: center;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\talign-items: baseline;\n\tmargin: 0 auto;\n}\n\nselect {\n\tpadding-left: 6.5px;\n}\n\n.fa-minus {\n\tcolor: red;\n\tcursor: pointer;\n}\n\n.fa-plus,\n.fa-edit,\n.fa-trash {\n\tcursor: pointer;\n}\n\n@media screen and (max-width: 478px) {\n\t#content {\n\t\ttext-align: center;\n\t}\n\t.description {\n\t\ttext-align: left;\n\t}\n\t#newTodo {\n\t\tposition: relative;\n\t\tmargin-top: 15px;\n\t}\n}\n\nbutton {\n\tcursor: pointer;\n}\n\n@media screen and (max-width: 800px) {\n\t.todo {\n\t\twidth: 70%;\n\t}\n}\n@media screen and (max-width: 1000px) {\n\t.dueDate {\n\t\tmargin: 0 auto;\n\t\ttext-align: center;\n\t\tmargin-bottom: 10px;\n\t}\n\t.title {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(r=i,d=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(l," */")),a=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var r,d,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(o[r]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);var i=class{constructor(e,t,n,i,o){this.title=e,this.description=t,this.dueDate=n,this.priority=i,this.id=o}};var o=()=>{document.getElementById("content").innerHTML='\n    <header>Todo List</header>\n    <div id="clear">Your todo list is clear</div>\n    <button id="newTodo" class="btnHover">New Todo</button>'};var a=()=>{document.getElementById("content").innerHTML='\n    <header>New Todo</header>\n    <div id="errorNew" class="inactive"><p id="errorNewMsg">One or more field entries is invalid</p><button id="errorNewOk" class="btnHover">OK</button></div>\n    <div id="newForm">\n    <label>Title </label><br><input type="text" id="newTitle">\n        <p id="validateTitle" class="hide">Titles are limited to 50 characters and may not consist of: "<" or ">"</p>\n        <label>Description (optional) </label><br><textarea id="newDescription"></textarea>\n            <p id="validateDescription" class="hide">Descriptions may not consist of "<" or ">"</p>\n            <label>Due Date </label><br><input type="date" id="newDueDate">\n                <p id="validateDate" class="hide">Dates may only consist of: [0-9][/][-]</p>\n                    <label>Priority </label><br><select id="newPriority" style="height:30px;">\n                        <option value="" selected disabled>Select an option...</option>\n                        <option value="High" id="newOptionHigh">High</option>\n                        <option value="Medium" id="newOptionMedium">Medium</option>\n                        <option value="Low" id="newOptionLow">Low</option>\n                    </select>\n                    <p id="validatePriority" class="hide">You must select a priority level</p>\n                    <div class="buttonContainer"><button id="saveNew" class="btnHover">Save</button><button id="cancelNew" class="btnHover">Cancel</button></div>\n        </div>'};var r=()=>{document.getElementById("content").innerHTML=' <header>Edit Todo</header>\n        <div id="errorEdit" class="inactive"><p id="errorEditMsg">One or more field entries is invalid</p><button id="errorEditOk" class="btnHover">OK</button></div>\n        <div id="editModal">\n        <label>Title </label><input type="text" id="editTitle">\n            <p id="validateTitleEdit" class="hide">Titles are limited to 50 characters and may not consist of: "<" or ">"</p>\n            <label>Description (optional) </label><textarea id="editDescription"></textarea>\n            <p id="validateDescriptionEdit" class="hide">Descriptions may not consist of "<" or ">"</p>\n            <label>Due Date </label><input type="date" id="editDueDate">\n            <p id="validateDateEdit" class="hide">Dates may only consist of: [0-9][/][-]</p>\n            <label>Priority: </label><select id="editPriority" style="height:30px;">\n                <option value="" selected disabled>Select an option...</option>\n                <option value="High" id="editOptionHigh">High</option>\n                <option value="Medium" id="editOptionMedium">Medium</option>\n                <option value="Low" id="editOptionLow">Low</option>\n            </select>\n            <p id="validatePriorityEdit" class="hide">You must select a priority level</p>\n            <div class="buttonContainer"><button id="saveEdit" class="btnHover">Save</button><button id="cancelEdit" class="btnHover">Cancel</button></div>\n        </div>'};n(0),n.p;const d=document.getElementById("content");let l,s=[];function c(){localStorage.setItem("todos",JSON.stringify(s))}function u(){for(let e=0;e<s.length;e++)s[e].id=e}function p(e){let t=e.match(/\d+/)[0],n=e.match(/-\d\d-/)[0].match(/\d\d/)[0],i=e.slice(-2);return 0==n.charAt(0)&&(n=n.charAt("1")),0==i.charAt(0)&&(i=i.charAt("1")),n+"-"+i+"-"+t}function m(e){let t=e.slice(-4),n=e.match(/\d+/)[0],i=e.match(/-\d+-/)[0].match(/\d+/)[0];if(""===n.charAt("1")){let e=n.charAt("0").toString();n="0"+e}if(""===i.charAt("1")){let e=i.charAt("0").toString();i="0"+e}return t+"-"+n+"-"+i}function g(e){let t;return"High"===e?t="red":"Medium"===e?t="yellow":"Low"===e&&(t="green"),t}function f(e,t,n,i){return!0===/^[^<>]+$/.test(e)&&e.length<=50&&!0===/^[^<>]*$/.test(t)&&!0===/^[\d-\/]+$/.test(n)&&!0===/^\w+$/.test(i)}function v(){if(0===s.length)o(),h();else{d.innerHTML='<header>Todo List</header>\n        <button id="newTodo" class="setOpacity btnHover">New Todo</button>';for(let e=0;e<s.length;e++){let t=g(s[e].priority),n=p(s[e].dueDate);d.innerHTML+=`<div class="todoContainer">\n                    <i class="fas fa-plus showDescription"></i>\n                    <div class="todo">\n                        <h4 class="title">${s[e].title}</h4>\n                        <p class="dueDate ${t}">${n}</p>\n                        <p class="idHolder">${s[e].id}</p>\n                        <p class="description inactive">${s[e].description}</p>\n                    </div>\n                    <i class="far fa-edit editBtn"></i>\n                    <i class="fas fa-trash deleteBtn"></i>\n                </div>`}document.getElementById("newTodo").addEventListener("click",e=>{a(),b(s)}),document.querySelectorAll(".editBtn").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),l=e.previousElementSibling.lastElementChild.previousElementSibling.innerText,r(),function(){const e=document.getElementById("editTitle"),t=document.getElementById("editDescription"),n=document.getElementById("editDueDate"),i=document.getElementById("editPriority"),o=document.getElementById("errorEdit"),a=document.getElementById("editModal");document.getElementById("cancelEdit").addEventListener("click",()=>{v()}),document.getElementById("saveEdit").addEventListener("click",r=>{r.preventDefault();for(let r=0;r<s.length;r++){if(l==s[r].id&&!0===f(e.value,t.value,n.value,i.value)){s[r].title=e.value.trim(),s[r].description=t.value,s[r].dueDate=n.value,1==i.selectedIndex?s[r].priority="High":2==i.selectedIndex?s[r].priority="Medium":3==i.selectedIndex&&(s[r].priority="Low"),v(),c();break}o.classList.toggle("inactive"),a.classList.toggle("blur"),document.getElementById("saveEdit").disabled=!0,document.getElementById("cancelEdit").disabled=!0,document.getElementById("saveEdit").classList.remove("btnHover"),document.getElementById("cancelEdit").classList.remove("btnHover");break}}),document.getElementById("errorEditOk").addEventListener("click",e=>{o.classList.toggle("inactive"),a.classList.toggle("blur"),document.getElementById("saveEdit").disabled=!1,document.getElementById("cancelEdit").disabled=!1,document.getElementById("saveEdit").classList.add("btnHover"),document.getElementById("cancelEdit").classList.add("btnHover")}),function(e,t,n,i){const o=document.getElementById("validateTitleEdit"),a=document.getElementById("validateDescriptionEdit"),r=document.getElementById("validateDateEdit"),d=document.getElementById("validatePriorityEdit");e.addEventListener("keyup",t=>{!0===/^[^<>]+$/.test(e.value)&&e.value.length<=50?o.classList.remove("show"):(!1===/^[^<>]+$/.test(e.value)||e.value.length>50)&&o.classList.add("show")}),t.addEventListener("keyup",e=>{!0===/^[^<>]*$/.test(t.value)?a.classList.remove("show"):!1===/^[^<>]*$/.test(t.value)&&a.classList.add("show")}),n.addEventListener("keyup",e=>{!0===/^[\d-\/]+$/.test(n.value)?r.classList.remove("show"):!1===/^[\d-\/]+$/.test(n.value)&&r.classList.add("show")}),i.addEventListener("keyup",e=>{!0===/^[\w\d\s-\']+$/.test(i.value)?d.classList.remove("show"):!1===/^\w+$/.test(i.value)&&d.classList.add("show")})}(e,t,n,i)}();const n=document.getElementById("editTitle"),i=document.getElementById("editDescription"),o=document.getElementById("editDueDate"),a=document.getElementById("editPriority");for(let e=0;e<s.length;e++)if(l==s[e].id){if(n.value=s[e].title,i.value=s[e].description,o.value=s[e].dueDate,"High"==s[e].priority){a.selectedIndex=1;break}if("Medium"==s[e].priority){a.selectedIndex=2;break}if("Low"==s[e].priority){a.selectedIndex=3;break}}})}),document.querySelectorAll(".deleteBtn").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),s.splice(e.previousElementSibling.previousElementSibling.children[3].innerText,1),u(),v(),c()})}),document.querySelectorAll(".showDescription").forEach(e=>{e.addEventListener("click",t=>{""!==e.nextElementSibling.lastElementChild.innerText?(e.nextElementSibling.lastElementChild.classList.toggle("inactive"),e.classList.toggle("fa-plus"),e.classList.toggle("fa-minus"),"+"==e.innerText?e.innerText="-":"-"==e.innerText&&(e.innerText="+")):""===e.nextElementSibling.lastElementChild.innerText&&(e.classList.toggle("fa-plus"),e.classList.toggle("fa-minus"),"+"==e.innerText?e.innerText="-":"-"==e.innerText&&(e.innerText="+"))})}),function(){let e,t,n,i,o;e=!0;for(;e;)for(e=!1,t=2;t<d.children.length-1;t++)if(o=!1,n=m(d.children[t].children[1].children[1].innerHTML),i=m(d.children[t+1].children[1].children[1].innerHTML),(n.match(/\d+/)[0]>i.match(/\d+/)[0]||n.match(/\d+/)[0]==i.match(/\d+/)[0]&&n.match(/-\d\d-/)[0].match(/\d\d/)[0]>i.match(/-\d\d-/)[0].match(/\d\d/)[0]||n.match(/\d+/)[0]==i.match(/\d+/)[0]&&n.match(/-\d\d-/)[0].match(/\d\d/)[0]==i.match(/-\d\d-/)[0].match(/\d\d/)[0]&&n.slice(-2)>i.slice(-2))&&(o=!0),o){d.children[t].parentNode.insertBefore(d.children[t+1],d.children[t]),e=!0;let n=t-2,i=s[n],o=s[n+1];s[n]=o,s[n+1]=i,u()}}()}}function h(){document.getElementById("newTodo").addEventListener("click",e=>{a(),b(s)})}function b(e){const t=document.getElementById("newTitle"),n=document.getElementById("errorNew"),o=document.getElementById("newForm");document.getElementById("saveNew").addEventListener("click",a=>{a.preventDefault();const r=document.getElementById("newDescription"),d=document.getElementById("newDueDate"),l=document.getElementById("newPriority");if(0===e.length&&!0===f(t.value,r.value,d.value,l.value)){const n=new i(t.value.trim(),r.value,d.value,l.value,0);e.push(n),v(),c()}else if(!0===f(t.value,r.value,d.value,l.value)){const n=new i(t.value.trim(),r.value,d.value,l.value,e.length);e.push(n),v(),c()}else n.classList.toggle("inactive"),o.classList.toggle("blur"),document.getElementById("saveNew").disabled=!0,document.getElementById("cancelNew").disabled=!0,document.getElementById("saveNew").classList.remove("btnHover"),document.getElementById("cancelNew").classList.remove("btnHover")}),document.getElementById("errorNewOk").addEventListener("click",e=>{n.classList.toggle("inactive"),o.classList.toggle("blur"),document.getElementById("saveNew").disabled=!1,document.getElementById("cancelNew").disabled=!1,document.getElementById("saveNew").classList.add("btnHover"),document.getElementById("cancelNew").classList.add("btnHover")}),document.getElementById("cancelNew").addEventListener("click",()=>{v()}),function(e,t,n,i){const o=document.getElementById("validateTitle"),a=document.getElementById("validateDescription"),r=document.getElementById("validateDate"),d=document.getElementById("validatePriority");e.addEventListener("keyup",t=>{!0===/^[^<>]+$/.test(e.value)&&e.value.length<=50?o.classList.remove("show"):(!1===/^[^<>]+$/.test(e.value)||e.value.length>50)&&o.classList.add("show")}),t.addEventListener("keyup",e=>{!0===/^[^<>]*$/.test(t.value)?a.classList.remove("show"):!1===/^[^<>]*$/.test(t.value)&&a.classList.add("show")}),n.addEventListener("keyup",e=>{!0===/^[\d-\/]+$/.test(n.value)?r.classList.remove("show"):!1===/^[\d-\/]+$/.test(n.value)&&r.classList.add("show")}),i.addEventListener("keyup",e=>{!0===/^[\w\d\s-\']+$/.test(i.value)?d.classList.remove("show"):!1===/^\w+$/.test(i.value)&&d.classList.add("show")})}(t,newDescription,newDueDate,newPriority)}!function(){if(h(),function(){let e=JSON.parse(localStorage.getItem("todos"));null!==e&&(s=e)}(),0===s.length)return;v()}()}]);