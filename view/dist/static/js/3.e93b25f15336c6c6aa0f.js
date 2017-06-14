webpackJsonp([3],{223:function(t,e,n){"use strict";function a(t){if("string"!=typeof t)throw new TypeError("This library (validator.js) validates strings only")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a,t.exports=e.default},235:function(t,e,n){"use strict";function a(t,e){(0,r.default)(t);var n=void 0,a=void 0;"object"===(void 0===e?"undefined":i(e))?(n=e.min||0,a=e.max):(n=arguments[1],a=arguments[2]);var o=encodeURI(t).split(/%..|./).length-1;return o>=n&&(void 0===a||o<=a)}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=a;var o=n(223),r=function(t){return t&&t.__esModule?t:{default:t}}(o);t.exports=e.default},469:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var a,i=e.alpha={"en-US":/^[A-Z]+$/i,"cs-CZ":/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,"da-DK":/^[A-ZÆØÅ]+$/i,"de-DE":/^[A-ZÄÖÜß]+$/i,"es-ES":/^[A-ZÁÉÍÑÓÚÜ]+$/i,"fr-FR":/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,"nl-NL":/^[A-ZÉËÏÓÖÜ]+$/i,"hu-HU":/^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,"pl-PL":/^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,"pt-PT":/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,"ru-RU":/^[А-ЯЁ]+$/i,"sr-RS@latin":/^[A-ZČĆŽŠĐ]+$/i,"sr-RS":/^[А-ЯЂЈЉЊЋЏ]+$/i,"tr-TR":/^[A-ZÇĞİıÖŞÜ]+$/i,"uk-UA":/^[А-ЯЄIЇҐ]+$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/},o=e.alphanumeric={"en-US":/^[0-9A-Z]+$/i,"cs-CZ":/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,"da-DK":/^[0-9A-ZÆØÅ]$/i,"de-DE":/^[0-9A-ZÄÖÜß]+$/i,"es-ES":/^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,"fr-FR":/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,"hu-HU":/^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,"nl-NL":/^[0-9A-ZÉËÏÓÖÜ]+$/i,"pl-PL":/^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,"pt-PT":/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,"ru-RU":/^[0-9А-ЯЁ]+$/i,"sr-RS@latin":/^[0-9A-ZČĆŽŠĐ]+$/i,"sr-RS":/^[0-9А-ЯЂЈЉЊЋЏ]+$/i,"tr-TR":/^[0-9A-ZÇĞİıÖŞÜ]+$/i,"uk-UA":/^[0-9А-ЯЄIЇҐ]+$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/},r=e.englishLocales=["AU","GB","HK","IN","NZ","ZA","ZM"],s=0;s<r.length;s++)a="en-"+r[s],i[a]=i["en-US"],o[a]=o["en-US"];i["pt-BR"]=i["pt-PT"],o["pt-BR"]=o["pt-PT"];for(var l,c=e.arabicLocales=["AE","BH","DZ","EG","IQ","JO","KW","LB","LY","MA","QM","QA","SA","SD","SY","TN","YE"],u=0;u<c.length;u++)l="ar-"+c[u],i[l]=i.ar,o[l]=o.ar},470:function(t,e,n){"use strict";function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US";if((0,o.default)(t),e in r.alphanumeric)return r.alphanumeric[e].test(t);throw new Error("Invalid locale '"+e+"'")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var i=n(223),o=function(t){return t&&t.__esModule?t:{default:t}}(i),r=n(469);t.exports=e.default},472:function(t,e,n){"use strict";function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];for(var n in e)void 0===t[n]&&(t[n]=e[n]);return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a,t.exports=e.default},482:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(470),i=n.n(a),o=n(235),r=n.n(o),s=n(535),l=n.n(s),c=n(45);e.default={name:"admin-login11",data:function(){return{account:"",password:"",repassword:"",accountPass:!1,loginName:this.$route.meta.login,registerName:this.$route.meta.register,toName:this.$route.meta.to,pwdPass:!1,pwdAgainPass:!1,type:this.$route.meta.type,targetPath:""}},watch:{type:function(t){"register"===t?this.$router.push({name:this.registerName}):this.$router.push({name:this.loginName})}},methods:{accountFilter:function(t){return t=t.replace(/[^0-9a-zA-Z]/gi,""),t=t.length>20?t.slice(0,20):t},accountOrEmailIsRight:function(t,e){return e.status=t.length>=6?"normal":"error",e.process=t.length/6*100,r()(t,{min:6})},accountIsRight:function(t,e){return e.status=t.length>=6?"normal":"error",e.process=t.length/6*100,r()(t,{min:6,max:20})&&i()(t)},passwordIsRight:function(t,e){var n=this;return e.status=t.length>=6?"normal":"error",e.process=t.length/6*100,"register"===this.type&&this.$nextTick(function(){return n.$refs.repassword.is_complete()}),r()(t,{min:6})&&i()(t)},passwordIsEqual:function(t,e){return e.status=t===this.password?"normal":"error",e.process=t?100:0,t===this.password},submit:function(){"account"===this.type?this.login():"register"===this.type&&this.register()},login:function(){var t=this.account;l()(t)?this.loginByEmail(t):this.loginByAccount(t)},loginByAccount:function(t){var e=this,n=this.password;this.$graphql.mutation("\n        login ($account, $password) {\n          account,\n          admin,\n          avatar\n        }\n      ",{account:t,password:n}).then(function(t){e.$store.commit("setSignStatus",t),e.$toast("登录成功",{type:"success",callback:function(){e.$router.replace(e.targetPath)}})}).catch(function(t){return e.$toast(t.message,"error")})},loginByEmail:function(t){var e=this,n=this.password;this.$graphql.mutation("\n        loginByEmail ($email, $password) {\n          account,\n          admin,\n          avatar\n        }\n      ",{email:t,password:n}).then(function(t){e.$store.commit("setSignStatus",t),e.$toast("登录成功",{type:"success",callback:function(){e.$router.replace(e.targetPath)}})}).catch(function(t){return e.$toast(t.message,"error")})},register:function(){var t=this,e=this.account,n=this.password,a=this.repassword;this.$graphql.mutation("\n        register ($account, $password, $repassword) {\n          account,\n          admin,\n          avatar\n        }\n      ",{account:e,password:n,repassword:a}).then(function(e){t.$store.commit("setSignStatus",e),t.$toast("注册成功",{type:"success",callback:function(){t.$router.replace(t.targetPath)}})}).catch(function(e){t.$toast(e.message,"error")})},loginByGithub:function(){window.location="https://github.com/login/oauth/authorize?client_id="+c.a.github.clientId+"&state="+this.targetPath+"&scope=user"}},beforeRouteEnter:function(t,e,n){n(function(t){if(t.targetPath)return!1;"/"===e.fullPath?t.targetPath=t.$route.meta.to:t.targetPath=e.fullPath})}}},507:function(t,e,n){e=t.exports=n(203)(!0),e.push([t.i,".login-view[data-v-5e531479]{height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.form-wrap[data-v-5e531479]{position:relative;width:400px;height:320px}.form[data-v-5e531479]{position:absolute;width:100%;height:100%;top:0;left:0;background-color:#fff;box-shadow:1px 2px 1px rgba(0,0,0,.16);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;transition:all 3s}.form .form-item[data-v-5e531479]{margin-bottom:10px}.form .sign-btn[data-v-5e531479]{margin-top:20px;width:50%}.type-nav[data-v-5e531479]{position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;left:100%;top:0;height:50%;color:gray;font-size:14px;list-style:none;-webkit-transform:translateX(20px);transform:translateX(20px);transition:all .3s}.type-nav li[data-v-5e531479]{padding:3px 5px;white-space:nowrap;cursor:pointer}.type-nav li[data-v-5e531479]:hover{color:#383838}.type-nav li.active[data-v-5e531479]{color:#3da8f5}.other-btn[data-v-5e531479]{font-size:13px;margin-top:15px;cursor:pointer;color:#a6a6a6;transition:color .3s}.other-btn[data-v-5e531479]:hover{color:#3da8f5}","",{version:3,sources:["/Users/mac/Desktop/mine/NightCat/view/src/views/common/sign.vue"],names:[],mappings:"AAKA,6BACE,aAAc,AACd,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC7B,AACD,4BACE,kBAAmB,AACnB,YAAa,AACb,YAAc,CACf,AACD,uBACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,MAAO,AACP,OAAQ,AACR,sBAAuB,AACvB,uCAA4C,AAC5C,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,iBAAmB,CACpB,AACD,kCACI,kBAAoB,CACvB,AACD,iCACI,gBAAiB,AACjB,SAAW,CACd,AACD,2BACE,kBAAmB,AACnB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,UAAW,AACX,MAAO,AACP,WAAY,AACZ,WAAe,AACf,eAAgB,AAChB,gBAAiB,AACjB,mCAAoC,AAC5B,2BAA4B,AACpC,kBAAoB,CACrB,AACD,8BACI,gBAAiB,AACjB,mBAAoB,AACpB,cAAgB,CACnB,AACD,oCACM,aAAe,CACpB,AACD,qCACM,aAAe,CACpB,AACD,4BACE,eAAgB,AAChB,gBAAiB,AACjB,eAAgB,AAChB,cAAe,AACf,oBAAsB,CACvB,AACD,kCACI,aAAe,CAClB",file:"sign.vue",sourcesContent:['\n@charset "UTF-8";\n/*\n * 基础色\n */\n.login-view[data-v-5e531479] {\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.form-wrap[data-v-5e531479] {\n  position: relative;\n  width: 400px;\n  height: 320px;\n}\n.form[data-v-5e531479] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.16);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  transition: all 3s;\n}\n.form .form-item[data-v-5e531479] {\n    margin-bottom: 10px;\n}\n.form .sign-btn[data-v-5e531479] {\n    margin-top: 20px;\n    width: 50%;\n}\n.type-nav[data-v-5e531479] {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  left: 100%;\n  top: 0;\n  height: 50%;\n  color: #808080;\n  font-size: 14px;\n  list-style: none;\n  -webkit-transform: translateX(20px);\n          transform: translateX(20px);\n  transition: all .3s;\n}\n.type-nav li[data-v-5e531479] {\n    padding: 3px 5px;\n    white-space: nowrap;\n    cursor: pointer;\n}\n.type-nav li[data-v-5e531479]:hover {\n      color: #383838;\n}\n.type-nav li.active[data-v-5e531479] {\n      color: #3da8f5;\n}\n.other-btn[data-v-5e531479] {\n  font-size: 13px;\n  margin-top: 15px;\n  cursor: pointer;\n  color: #a6a6a6;\n  transition: color .3s;\n}\n.other-btn[data-v-5e531479]:hover {\n    color: #3da8f5;\n}\n'],sourceRoot:""}])},524:function(t,e,n){var a=n(507);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(204)("3e11db47",a,!0)},535:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if((0,r.default)(t),e=(0,l.default)(e,f),e.require_display_name||e.allow_display_name){var n=t.match(d);if(n)t=n[1];else if(e.require_display_name)return!1}var a=t.split("@"),i=a.pop(),o=a.join("@"),s=i.toLowerCase();if("gmail.com"!==s&&"googlemail.com"!==s||(o=o.replace(/\./g,"").toLowerCase()),!(0,u.default)(o,{max:64})||!(0,u.default)(i,{max:256}))return!1;if(!(0,p.default)(i,{require_tld:e.require_tld}))return!1;if('"'===o[0])return o=o.slice(1,o.length-1),e.allow_utf8_local_part?h.test(o):g.test(o);for(var c=e.allow_utf8_local_part?B:m,A=o.split("."),x=0;x<A.length;x++)if(!c.test(A[x]))return!1;return!0}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(223),r=a(o),s=n(472),l=a(s),c=n(235),u=a(c),A=n(536),p=a(A),f={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},d=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,m=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,g=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,B=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,h=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;t.exports=e.default},536:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e){(0,r.default)(t),e=(0,l.default)(e,c),e.allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var n=t.split(".");if(e.require_tld){var a=n.pop();if(!n.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(a))return!1}for(var i,o=0;o<n.length;o++){if(i=n[o],e.allow_underscores&&(i=i.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(i))return!1;if(/[\uff01-\uff5e]/.test(i))return!1;if("-"===i[0]||"-"===i[i.length-1])return!1}return!0}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(223),r=a(o),s=n(472),l=a(s),c={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};t.exports=e.default},545:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-view"},[n("div",{staticClass:"form-wrap"},["login"!==t.type?n("form",{staticClass:"form",on:{submit:function(e){e.preventDefault(),t.submit(e)}}},["account"===t.type?n("Input",{ref:"account",staticClass:"form-item",attrs:{label:"Account / Email",complete:t.accountPass,verify:t.accountOrEmailIsRight},on:{"update:complete":function(e){t.accountPass=e}},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}):t._e(),t._v(" "),"register"===t.type?n("Input",{ref:"account",staticClass:"form-item",attrs:{label:"Account",complete:t.accountPass,filter:t.accountFilter,verify:t.accountIsRight},on:{"update:complete":function(e){t.accountPass=e}},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}):t._e(),t._v(" "),n("Input",{ref:"password",staticClass:"form-item",attrs:{type:"password",label:"Password",complete:t.pwdPass,verify:t.passwordIsRight},on:{"update:complete":function(e){t.pwdPass=e}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),"register"===t.type?n("Input",{ref:"repassword",staticClass:"form-item",attrs:{type:"password",label:"Password Again",complete:t.pwdAgainPass,verify:t.passwordIsEqual},on:{"update:complete":function(e){t.pwdAgainPass=e}},model:{value:t.repassword,callback:function(e){t.repassword=e},expression:"repassword"}}):t._e(),t._v(" "),"account"===t.type?n("Btn",{staticClass:"sign-btn",attrs:{disabled:!t.accountPass||!t.pwdPass,type:"submit"}},[t._v("Login")]):t._e(),t._v(" "),"register"===t.type?n("Btn",{staticClass:"sign-btn",attrs:{disabled:!t.accountPass||!t.pwdPass||!t.pwdAgainPass,type:"submit"}},[t._v("Register")]):t._e(),t._v(" "),"account"===t.type?n("div",{staticClass:"other-btn",on:{click:function(e){t.type="login"}}},[t._v("Other")]):t._e()],1):t._e(),t._v(" "),"login"===t.type?n("div",{staticClass:"form"},[n("Btn",{staticClass:"sign-btn",on:{click:function(e){t.type="account"}}},[t._v("Account")]),t._v(" "),n("Btn",{staticClass:"sign-btn",on:{click:t.loginByGithub}},[t._v("Github")])],1):t._e(),t._v(" "),n("ul",{staticClass:"type-nav"},[n("li",{class:{active:"register"!==t.type},on:{click:function(e){t.type="login"}}},[t._v("Login")]),t._v(" "),n("li",{class:{active:"register"===t.type},on:{click:function(e){t.type="register"}}},[t._v("Register")])])])])},staticRenderFns:[]}},78:function(t,e,n){n(524);var a=n(4)(n(482),n(545),"data-v-5e531479",null);t.exports=a.exports}});
//# sourceMappingURL=3.e93b25f15336c6c6aa0f.js.map