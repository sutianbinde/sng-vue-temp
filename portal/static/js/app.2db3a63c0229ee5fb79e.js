webpackJsonp([6],{"+Ckq":function(t,e){},0:function(t,e,n){n("briU"),t.exports=n("NHnr")},"3xPT":function(t,e,n){n("j/wA");var a=n("mEwh")(n("6kBN"),n("D0NF"),null,null);t.exports=a.exports},"6PY7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{username:function(){return this.$store.getters.userinfo}},methods:{logOut:function(){this.$router.push("../login")}}}},"6kBN":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isCollapse:!1}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}}},"8Qit":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:function(e){t.logOut()}}},[t._v("退出")]),t._v(" "),n("h3",[t._v(t._s(t.$store.state.user.name))]),n("h3",[t._v(t._s(t.username.name))])],1)},staticRenderFns:[]}},"9mqr":function(t,e,n){n("+Ckq");var a=n("mEwh")(n("6PY7"),n("8Qit"),"data-v-f4f5068e",null);t.exports=a.exports},BpjM:function(t,e,n){"use strict";e.a={install:function(t,e){t.prototype.globalTest=function(){return"globalTest is fun"},console.log(e)}}},D0NF:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%"}},[n("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{height:"900px"},attrs:{"default-active":"1-1","unique-opened":!0,collapse:t.isCollapse},on:{open:t.handleOpen,close:t.handleClose}},[n("el-submenu",{attrs:{index:"1",open:t.handleOpen()}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("Module1")])]),t._v(" "),n("router-link",{attrs:{to:"/module1/sub1"}},[n("el-menu-item",{attrs:{index:"1-1"}},[t._v("选项1")])],1),t._v(" "),n("router-link",{attrs:{to:"/module1/sub2"}},[n("el-menu-item",{attrs:{index:"1-2"}},[t._v("选项2")])],1)],2),t._v(" "),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-location"}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("Module2")])]),t._v(" "),n("router-link",{attrs:{to:"/module2/sub1"}},[n("el-menu-item",{attrs:{index:"2-1"}},[t._v("选项1")])],1),t._v(" "),n("router-link",{attrs:{to:"/module2/sub2"}},[n("el-menu-item",{attrs:{index:"2-2"}},[t._v("选项2")])],1)],2)],1)],1)},staticRenderFns:[]}},E1NK:function(t,e,n){"use strict";e.a={domlang:{ACTIVE_NAME:"Active Name",ACTIVE_AREA:"Active Area",NOW_SEND:"Now Send"},placeholder:{ACTIVE_NAME:"please add active name",ACTIVE_AREA:"please add active area"},validate:{},msg:{}}},"I9+C":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"wrapper"},[n("router-view")],1)},staticRenderFns:[]}},IcnI:function(t,e,n){"use strict";var a=n("VCXJ"),o=n("9rMa"),i=n("bREw"),s=n("j8C+"),u=n("UjVw");a.default.use(o.a);var r=new o.a.Store({modules:{modalOptions:s.a,user:i.a},getters:u.a});e.a=r},K86V:function(t,e,n){n("WYdj");var a=n("mEwh")(n("Qazo"),n("wL7h"),null,null);t.exports=a.exports},"KW9/":function(t,e,n){"use strict";var a=n("cLQA"),o=n.n(a),i={setMockData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments[1],n=arguments[2],a=[];return t&&(a=o.a.valid(t,JSON.parse(n.body))),0===a.length?{code:0,data:e,msg:""}:{code:1200,data:a,msg:"参数错误"}}};e.a=i},LmM6:function(t,e,n){"use strict";n("VCXJ").default.directive("bgColor",{bind:function(t,e){$(t).css("background","#FF3D00"),console.log(e)},update:function(t,e){$(t).css("background",e.value.color.bgcolor)},unbind:function(){}})},M93x:function(t,e,n){n("Sqxy");var a=n("mEwh")(n("V6wN"),n("I9+C"),null,null);t.exports=a.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("VCXJ"),o=n("M93x"),i=n.n(o),s=n("Zjva"),u=n.n(s),r=n("SXr1"),c=(n.n(r),n("SgXG")),l=(n.n(c),n("44w4")),d=n.n(l),f=n("sV6v"),m=n("IcnI"),p=n("BpjM"),v=n("zucv");n("LmM6"),n("qs/E");a.default.use(u.a),a.default.use(p.a),a.default.use(d.a,{dialog:!0}),new a.default({el:"#app",store:m.a,router:f.a,i18n:v.a,components:{App:i.a},template:"<App/>"})},"O9s/":function(t,e,n){"use strict";var a=n("K86V"),o=n.n(a);e.a=[{path:"/module2",name:"module2",component:o.a,hidden:!0,children:[{path:"sub1",component:function(t){n.e(2).then(function(){var e=[n("9jQ3")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"sub2",component:function(t){n.e(0).then(function(){var e=[n("3r2W")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}]},Oaf6:function(t,e,n){"use strict";var a=n("cLQA"),o=n.n(a),i=n("KW9/"),s=function(t){var e={list:[{id:1,name:"刘德华"},{id:2,name:"张学友"}]};return i.a.setMockData(null,e,t)};o.a.mock("api/auth/v1/users/list1?id=123","get",s)},Qazo:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("9mqr"),o=n.n(a),i=n("3xPT"),s=n.n(i);e.default={name:"Layout",components:{MegHeader:o.a,MegMenu:s.a},computed:{key:function(){return void 0!==this.$route.name?this.$route.name+ +new Date:this.$route+ +new Date}}}},SXr1:function(t,e){},SgXG:function(t,e){},Sqxy:function(t,e){},UjVw:function(t,e,n){"use strict";var a={userinfo:function(t){return t.user},modalOptions:function(t){return t.modalOptions}};e.a=a},V6wN:function(t,e){},WYdj:function(t,e){},XMCB:function(t,e,n){"use strict";var a=n("cLQA"),o=n.n(a),i=n("KW9/"),s=function(t){var e={list:[{id:1,name:"刘德华"},{id:2,name:"张学友"}]};return i.a.setMockData(null,e,t)};o.a.mock("api/auth/v1/users/list2?id=123","get",s)},bREw:function(t,e,n){"use strict";var a={state:{name:"1231231231"},mutations:{SET_USERNAME:function(t,e){t.name=e}}};e.a=a},iW45:function(t,e,n){"use strict";e.a={domlang:{ACTIVE_NAME:"活动名称",ACTIVE_AREA:"活动地点",NOW_SEND:"及时配送"},placeholder:{ACTIVE_NAME:"请填写活动名称",ACTIVE_AREA:"请填写活动地点"},validate:{},msg:{}}},"j/wA":function(t,e){},"j8C+":function(t,e,n){"use strict";var a={state:{minWidth:300,minHeight:200,pivotX:.5,pivotY:.5,adaptive:!0,scrollable:!0,reset:!0,width:500,height:400,clickToClose:!1,transition:"nice-modal-fade",classes:"modal-container"},mutations:{}};e.a=a},"qs/E":function(t,e,n){"use strict";var a=n("cLQA"),o=n.n(a);n("Oaf6"),n("XMCB");o.a.setup({timeout:"200-600"})},sV6v:function(t,e,n){"use strict";function a(){}var o=n("IHPB"),i=n.n(o),s=n("VCXJ"),u=n("zO6J"),r=n("uXod"),c=n("uf9b"),l=n("vmp5"),d=n("O9s/");s.default.use(u.a);var f=new u.a({routes:[].concat(i()(l.a),i()(d.a),i()(r.a),i()(c.a))});a.install=function(t,e){t.getRouter=function(){return f},console.log(e)},s.default.use(a),console.log(f),e.a=f},uXod:function(t,e,n){"use strict";e.a=[{path:"/login",name:"login",component:function(t){n.e(3).then(function(){var e=[n("XmP8")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},uf9b:function(t,e,n){"use strict";e.a=[{path:"/",name:"layout",redirect:"/module1/sub1",component:function(t){new Promise(function(t){t()}).then(function(){var e=[n("K86V")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},vmp5:function(t,e,n){"use strict";var a=n("K86V"),o=n.n(a);e.a=[{path:"/module1",name:"module1",component:o.a,hidden:!0,redirect:"sub1",children:[{path:"sub1",component:function(t){n.e(1).then(function(){var e=[n("GZXB")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"sub2",component:function(t){n.e(4).then(function(){var e=[n("UtEX")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}]},wL7h:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("meg-header")],1),t._v(" "),n("el-container",[n("el-aside",{staticClass:"menu"},[n("meg-menu")],1),t._v(" "),n("el-main",{staticClass:"content"},[n("transition",{attrs:{name:"el-zoom-in-center",mode:"out-in"}},[n("router-view",{key:t.key})],1)],1)],1)],1)},staticRenderFns:[]}},zucv:function(t,e,n){"use strict";var a=n("VCXJ"),o=n("t1ko"),i=n("E1NK"),s=n("iW45");a.default.use(o.a);var u={us:i.a,cn:s.a};console.log(this);var r=new o.a({locale:"us",messages:u});e.a=r}},[0]);
//# sourceMappingURL=app.2db3a63c0229ee5fb79e.js.map