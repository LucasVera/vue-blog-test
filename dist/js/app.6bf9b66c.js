(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)o=i[d],r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},r={app:0},n=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"69afc29f"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(t){var e=[],s=r[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise(function(e,a){s=r[t]=[e,a]});e.push(s[2]=a);var n,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t),n=function(e){l.onerror=l.onload=null,clearTimeout(d);var s=r[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+n+")");o.type=a,o.request=n,s[1](o)}r[t]=void 0}};var d=setTimeout(function(){n({type:"timeout",target:l})},12e4);l.onerror=l.onload=n,c.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("c21b"),r=s.n(a);r.a},2065:function(t,e,s){"use strict";var a=s("4858"),r=s.n(a);r.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return s(e)}function n(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id="4678"},"46b8":function(t,e,s){},4858:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-expand navbar-light bg-light"},[s("div",{staticClass:"nav navbar-nav"},[s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/"}},[t._v("Home")]),s("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/blog"}},[t._v("Posts")])],1),s("div",{staticClass:"navbar-nav flex-row ml-auto"},[t.user?s("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{id:"userDropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(t._s(t.user.name))]):s("button",{staticClass:"btn btn-primary",on:{click:t.loginButtonClicked}},[t._v("Login")]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"userDropdown"}},[s("button",{staticClass:"dropdown-item",on:{click:t.logout}},[t._v("Logout")])])])]),t.loginModalOpened?s("login-modal",{on:{success:t.loginSuccess}}):t._e(),t.errorModalOpen?s("error-modal"):t._e(),t.isFetching?s("loader"):t._e(),s("router-view")],1)},n=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[t.isFetching?t._e():s("div",{staticClass:"modal-container"},[s("div",{staticClass:"modal-header py-1 px-0"},[t._t("header",[s("span",{staticClass:"h4 font-weight-bold"},[t._v("Login")]),s("button",{staticClass:"close text-right",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){t.closeLoginModal()}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])],2),s("div",{staticClass:"modal-body p-0 pt-2"},[t._t("body",[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control mb-2",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.doLogin()},input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control mt-2",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.doLogin()},input:function(e){e.target.composing||(t.password=e.target.value)}}})])])],2),s("div",{staticClass:"modal-footer p-0"},[t._t("footer",[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t.showError?s("div",{staticClass:"alert alert-danger col-12",attrs:{role:"alert"}},[s("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){t.hideLoginError()}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),s("p",[s("i",{staticClass:"fas fa-exclamation-triangle fa-lg pr-1"}),t._v(t._s(t.error))])]):t._e()]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"submit",disabled:t.disableSubmit},on:{click:function(e){t.doLogin()}}},[t._v("Submit")]),s("button",{staticClass:"btn btn-secondary btn-lg btn-block",attrs:{type:"button"},on:{click:function(e){t.closeLoginModal()}}},[t._v("Cancel")])])])])])],2)])])])])},i=[],c=(s("96cf"),s("3040")),l={SHOW_LOADER:"showLoader",HIDE_LOADER:"hideLoader",INCREMENT:"increment",SHOW_LOGIN_MODAL:"showLoginModal",HIDE_LOGIN_MODAL:"hideLoginModal",SAVE_LOGIN_DATA:"saveLoginData",CLEAR_LOGIN_DATA:"clearLoginData",LOGIN_ERROR:"loginError",HIDE_LOGIN_ERROR:"hideLoginError",SAVE_LATEST_BLOG_POST:"saveLatestBlogPost",SHOW_ERROR_MODAL:"showErrorModal",HIDE_ERROR_MODAL:"hideErrorModal"},d={LOGIN:"login",GET_LATEST_BLOG_POST:"getLatestBlogPost"},u=s("2f62"),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"take-all-space"},[s("div",{staticClass:"sk-circle"},[s("div",{staticClass:"sk-circle1 sk-child"}),s("div",{staticClass:"sk-circle2 sk-child"}),s("div",{staticClass:"sk-circle3 sk-child"}),s("div",{staticClass:"sk-circle4 sk-child"}),s("div",{staticClass:"sk-circle5 sk-child"}),s("div",{staticClass:"sk-circle6 sk-child"}),s("div",{staticClass:"sk-circle7 sk-child"}),s("div",{staticClass:"sk-circle8 sk-child"}),s("div",{staticClass:"sk-circle9 sk-child"}),s("div",{staticClass:"sk-circle10 sk-child"}),s("div",{staticClass:"sk-circle11 sk-child"}),s("div",{staticClass:"sk-circle12 sk-child"})])])}],p={name:"Loader"},m=p,h=(s("74ae"),s("2877")),v=Object(h["a"])(m,f,b,!1,null,null,null);v.options.__file="Loader.vue";var _=v.exports,g={name:"LoginModal",data:function(){return{email:"",password:""}},methods:{doLogin:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,s,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$store.commit(l.SHOW_LOADER),e=this.email,s=this.password,t.next=4,this.$store.dispatch(d.LOGIN,{email:e,password:s});case 4:a=t.sent,a&&this.$emit("success"),this.$store.commit(l.HIDE_LOADER);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),closeLoginModal:function(){this.$store.commit(l.HIDE_LOGIN_MODAL)},hideLoginError:function(){this.$store.commit(l.HIDE_LOGIN_ERROR)}},components:{Loader:_},computed:Object(u["b"])({disableSubmit:function(){return!this.email||!this.password},showError:"showLoginError",isFetching:"isFetching",error:"loginError"}),mounted:function(){this.password=""}},j=g,O=(s("d2d6"),Object(h["a"])(j,o,i,!1,null,null,null));O.options.__file="LoginModal.vue";var L=O.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container"},[s("div",{staticClass:"modal-header px-0"},[t._t("header",[s("span",{staticClass:"h4 font-weight-bold"},[s("i",{staticClass:"fas fa-exclamation-triangle fa-lg pr-4 text-danger"}),t._v(t._s(t.title))])])],2),s("div",{staticClass:"modal-body px-0"},[t._t("body",[s("p",[t._v("\n              "+t._s(t.body)+"\n            ")])])],2),s("div",{staticClass:"modal-footer px-0"},[t._t("footer",[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("button",{staticClass:"btn btn-danger btn-lg btn-block",attrs:{type:"button"},on:{click:function(e){t.closeErrorModal()}}},[t._v("Dismiss")])])])])])],2)])])])])},k=[],C={name:"ErrorModal",computed:Object(u["b"])({title:"errorModalTitle",body:"errorModalBody"}),methods:{closeErrorModal:function(){this.$store.commit(l.HIDE_ERROR_MODAL)}}},y=C,w=(s("2065"),Object(h["a"])(y,E,k,!1,null,null,null));w.options.__file="ErrorModal.vue";var R=w.exports,A={name:"App",components:{LoginModal:L,ErrorModal:R,Loader:_},methods:{loginButtonClicked:function(){this.$store.commit(l.SHOW_LOGIN_MODAL)},loginSuccess:function(){this.$store.commit(l.HIDE_LOGIN_MODAL),this.$router.push("/about")},logout:function(){this.$store.commit(l.CLEAR_LOGIN_DATA)}},computed:Object(u["b"])(["loginModalOpened","user","errorModalOpen","isFetching"])},M=A,D=(s("034f"),Object(h["a"])(M,r,n,!1,null,null,null));D.options.__file="App.vue";var T=D.exports,S=s("8c4f"),x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"jumbotron"},[s("h1",{staticClass:"display-3"},[t._v("Blog")]),t._m(0),s("hr",{staticClass:"my-2"}),s("p",[t._v("A simple blog application made with Vue.")]),s("p",{staticClass:"lead"},[s("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{role:"button",to:"/blog"}},[t._v("View Posts")])],1)]),t.showLatestBlogPost?s("div",{staticClass:"m-4"},[s("div",{staticClass:"card",staticStyle:{"max-width":"300px"}},[s("img",{staticClass:"card-img-top img-fluid p-4",staticStyle:{"max-height":"150px"},attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",alt:""}}),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title text-primary"},[s("router-link",{staticClass:"btn btn-link btn-lg p-0 m-0",attrs:{to:t.linkToDetails}},[t._v(t._s(t.latestBlogPost.title))])],1),s("h5",{staticClass:"card-title"},[t._v(t._s(t.latestBlogPost.subtitle))]),s("p",{staticClass:"card-text"},[t._v(t._s(t.latestBlogPost.text))])])])]):t._e(),s("div",{staticClass:"m-2"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){t.getLatestPost()}}},[t._v("Get Latest blog post")])]),s("div",{staticClass:"m-2"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.testErrorModal()}}},[t._v("Test error")])]),s("div",{staticClass:"m-2"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.testLoader()}}},[t._v("Test loader")])])])},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"lead"},[t._v("Created by "),s("a",{attrs:{href:"http://www.lucasdev.info",target:"_blank"}},[t._v("Lucas Vera T.")])])}],N=s("c93e"),P=s("c1df"),B=s.n(P),G={ROOT_BACKEND_URL:"https://lucasdev.info/api",VUE_BLOG_BACKEND_URL:"https://lucasdev.info/api/vueblog",SECONDS_UNTIL_NEW_AUTOMATIC_FETCH:2},H=function(t){if(!t||!B.a.isMoment(t)||!t.isValid())return!0;var e=(B()().valueOf()-t.valueOf())/1e3;return console.log("seconds passed: ".concat(e)),e>G.SECONDS_UNTIL_NEW_AUTOMATIC_FETCH},$={name:"home",data:function(){return{latestBlogPostQueryMoment:B()()}},methods:{testLoader:function(){var t=this;this.$store.commit(l.SHOW_LOADER),setTimeout(function(){t.$store.commit(l.HIDE_LOADER)},1e3)},testErrorModal:function(){this.$store.commit(l.SHOW_ERROR_MODAL,{body:"test test 123123123test test 123123123test test 123123123",title:"Test Error with long title"})},getLatestPost:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(H(this.latestBlogPostQueryMoment)){t.next=2;break}return t.abrupt("return");case 2:return this.$store.commit(l.SHOW_LOADER),t.next=5,this.$store.dispatch(d.GET_LATEST_BLOG_POST);case 5:e=t.sent,e&&(this.latestBlogPostQueryMoment=B()()),this.$store.commit(l.HIDE_LOADER);case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},computed:Object(N["a"])({showLatestBlogPost:function(){return!0},linkToDetails:function(){return"/blog/".concat(this.latestBlogPost.id)}},Object(u["b"])(["count","latestBlogPost"])),mounted:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},z=$,V=Object(h["a"])(z,x,I,!1,null,null,null);V.options.__file="Home.vue";var W=V.exports;a["a"].use(S["a"]);var U=new S["a"]({routes:[{path:"/",name:"home",component:W},{path:"/blog",name:"blog",component:function(){return s.e("about").then(s.bind(null,"fd3f"))}}]}),F=s("a322"),K=s("bc3a"),q=s.n(K);function Q(){var t,e;return new u["a"].Store({state:{count:0,isFetching:!1,loginModalOpened:!1,user:null,authToken:"",loginError:"",showLoginError:!1,latestBlogPost:{},errorModalOpen:!1,errorModalBody:"",errorModalTitle:""},mutations:(t={increment:function(t){t.count++}},Object(F["a"])(t,l.SHOW_LOADER,function(t){t.isFetching=!0}),Object(F["a"])(t,l.HIDE_LOADER,function(t){t.isFetching=!1}),Object(F["a"])(t,l.SHOW_LOGIN_MODAL,function(t){t.loginError="",t.showLoginError=!1,t.loginModalOpened=!0}),Object(F["a"])(t,l.HIDE_LOGIN_MODAL,function(t){t.loginModalOpened=!1}),Object(F["a"])(t,l.SAVE_LOGIN_DATA,function(t,e){var s=e.user,a=e.token;t.user=s,t.authToken=a}),Object(F["a"])(t,l.CLEAR_LOGIN_DATA,function(t){t.user=null,t.authToken=""}),Object(F["a"])(t,l.LOGIN_ERROR,function(t,e){var s=e.error;t.loginError=s,t.showLoginError=!0}),Object(F["a"])(t,l.HIDE_LOGIN_ERROR,function(t){t.loginError="",t.showLoginError=!1}),Object(F["a"])(t,l.SAVE_LATEST_BLOG_POST,function(t,e){t.latestBlogPost=e.blogPost}),Object(F["a"])(t,l.SHOW_ERROR_MODAL,function(t,e){t.errorModalOpen=!0,t.errorModalBody=e.body,t.errorModalTitle=e.title}),Object(F["a"])(t,l.HIDE_ERROR_MODAL,function(t){t.errorModalOpen=!1,t.errorModalBody="",t.errorModalTitle=""}),t),actions:(e={},Object(F["a"])(e,d.LOGIN,function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e,s){var a,r,n,o,i,c,d,u,f,b,p;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,r=s.email,n=s.password,t.next=5,q.a.post("".concat(G.ROOT_BACKEND_URL,"/login"),{email:r,password:n});case 5:return o=t.sent,i=o.data.data,c=i.user,d=i.token,a(l.SAVE_LOGIN_DATA,{user:c,token:d}),t.abrupt("return","ok");case 13:t.prev=13,t.t0=t["catch"](1),u=t.t0.response,f=u.status,b=u.data.error,p="".concat(f," - ").concat(b),a(l.LOGIN_ERROR,{error:p});case 18:case"end":return t.stop()}},t,this,[[1,13]])}));return function(e,s){return t.apply(this,arguments)}}()),Object(F["a"])(e,d.GET_LATEST_BLOG_POST,function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e){var s,a,r,n,o,i,c,d,u,f;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(s=e.commit,a=e.state,t.prev=1,r=a.authToken,n=a.latestBlogPost,!n||!n.id){t.next=5;break}return t.abrupt("return","ok");case 5:return t.next=7,q.a.get("".concat(G.VUE_BLOG_BACKEND_URL,"/latestblogpost"),{headers:{Authorization:r}});case 7:return o=t.sent,i=o.data.data.blogPost,s(l.SAVE_LATEST_BLOG_POST,{blogPost:i}),t.abrupt("return","ok");case 13:t.prev=13,t.t0=t["catch"](1),c=t.t0.response,d=c.status,u=c.data,f="string"===typeof u?"".concat(d," - ").concat(u):"".concat(d," - ").concat(u.error),s(l.SHOW_ERROR_MODAL,{title:"Error getting latest blog post",body:f});case 18:case"end":return t.stop()}},t,this,[[1,13]])}));return function(e){return t.apply(this,arguments)}}()),e)})}a["a"].config.productionTip=!1,a["a"].use(u["a"]),new a["a"]({router:U,store:Q(),render:function(t){return t(T)}}).$mount("#app")},"74ae":function(t,e,s){"use strict";var a=s("46b8"),r=s.n(a);r.a},"92fc":function(t,e,s){},c21b:function(t,e,s){},d2d6:function(t,e,s){"use strict";var a=s("92fc"),r=s.n(a);r.a}});
//# sourceMappingURL=app.6bf9b66c.js.map