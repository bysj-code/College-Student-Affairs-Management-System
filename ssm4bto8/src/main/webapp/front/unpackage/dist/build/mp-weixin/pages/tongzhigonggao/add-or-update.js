(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tongzhigonggao/add-or-update"],{"02a2":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"2666"))}},a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},"3c13":function(e,n,t){"use strict";var r=t("48a3"),a=t.n(r);a.a},"48a3":function(e,n,t){},a401:function(e,n,t){"use strict";t.r(n);var r=t("02a2"),a=t("cba9");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("3c13");var o,u=t("f0c5"),s=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"02516892",null,!1,r["a"],o);n["default"]=s.exports},cba9:function(e,n,t){"use strict";t.r(n);var r=t("d703"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},d703:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,a,i,o){try{var u=e[i](o),s=u.value}catch(c){return void t(c)}u.done?n(s):Promise.resolve(s).then(r,a)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function u(e){i(o,r,a,u,s,"next",e)}function s(e){i(o,r,a,u,s,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("2666"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{cross:"",ruleForm:{biaoti:"",jianjie:"",fengmian:"",neirong:"",faburiqi:"",banji:"",jiaoshigonghao:"",jiaoshixingming:"",userid:""},banjiOptions:[],banjiIndex:0,user:{},ro:{biaoti:!1,jianjie:!1,fengmian:!1,neirong:!1,faburiqi:!1,banji:!1,jiaoshigonghao:!1,jiaoshixingming:!1,userid:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return o(r.default.mark((function a(){var i,o,u,s;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.ruleForm.faburiqi=t.$utils.getCurDateTime(),i=e.getStorageSync("nowTable"),a.next=4,t.$api.session(i);case 4:return o=a.sent,t.user=o.data,t.ruleForm.jiaoshigonghao=t.user.jiaoshigonghao,t.ro.jiaoshigonghao=!0,t.ruleForm.jiaoshixingming=t.user.jiaoshixingming,t.ro.jiaoshixingming=!0,a.next=12,t.$api.option("banji","banji",{});case 12:if(o=a.sent,t.banjiOptions=o.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=22;break}return t.ruleForm.id=n.id,a.next=20,t.$api.info("tongzhigonggao",t.ruleForm.id);case 20:o=a.sent,t.ruleForm=o.data;case 22:if(t.cross=n.cross,!n.cross){a.next=66;break}u=e.getStorageSync("crossObj"),a.t0=r.default.keys(u);case 26:if((a.t1=a.t0()).done){a.next=66;break}if(s=a.t1.value,"biaoti"!=s){a.next=32;break}return t.ruleForm.biaoti=u[s],t.ro.biaoti=!0,a.abrupt("continue",26);case 32:if("jianjie"!=s){a.next=36;break}return t.ruleForm.jianjie=u[s],t.ro.jianjie=!0,a.abrupt("continue",26);case 36:if("fengmian"!=s){a.next=40;break}return t.ruleForm.fengmian=u[s],t.ro.fengmian=!0,a.abrupt("continue",26);case 40:if("neirong"!=s){a.next=44;break}return t.ruleForm.neirong=u[s],t.ro.neirong=!0,a.abrupt("continue",26);case 44:if("faburiqi"!=s){a.next=48;break}return t.ruleForm.faburiqi=u[s],t.ro.faburiqi=!0,a.abrupt("continue",26);case 48:if("banji"!=s){a.next=52;break}return t.ruleForm.banji=u[s],t.ro.banji=!0,a.abrupt("continue",26);case 52:if("jiaoshigonghao"!=s){a.next=56;break}return t.ruleForm.jiaoshigonghao=u[s],t.ro.jiaoshigonghao=!0,a.abrupt("continue",26);case 56:if("jiaoshixingming"!=s){a.next=60;break}return t.ruleForm.jiaoshixingming=u[s],t.ro.jiaoshixingming=!0,a.abrupt("continue",26);case 60:if("userid"!=s){a.next=64;break}return t.ruleForm.userid=u[s],t.ro.userid=!0,a.abrupt("continue",26);case 64:a.next=26;break;case 66:t.styleChange();case 67:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},faburiqiConfirm:function(e){console.log(e),this.ruleForm.faburiqi=e.result,this.$forceUpdate()},banjiChange:function(e){this.banjiIndex=e.target.value,this.ruleForm.banji=this.banjiOptions[this.banjiIndex]},fengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.fengmian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(r.default.mark((function t(){var a,i,o,u,s,c,g,f,l,d;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.cross){t.next=16;break}if(u=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==u){t.next=16;break}if(c=e.getStorageSync("crossObj"),u.startsWith("[")){t.next=12;break}for(g in c)g==u&&(c[g]=s);return f=e.getStorageSync("crossTable"),t.next=10,n.$api.update("".concat(f),c);case 10:t.next=16;break;case 12:a=Number(e.getStorageSync("userid")),i=c["id"],o=e.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 16:if(!i||!a){t.next=38;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=i,l={page:1,limit:10,crossuserid:a,crossrefid:i},t.next=22,n.$api.list("tongzhigonggao",l);case 22:if(d=t.sent,!(d.data.total>=o)){t.next=28;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 28:if(!n.ruleForm.id){t.next=33;break}return t.next=31,n.$api.update("tongzhigonggao",n.ruleForm);case 31:t.next=35;break;case 33:return t.next=35,n.$api.add("tongzhigonggao",n.ruleForm);case 35:n.$utils.msgBack("提交成功");case 36:t.next=46;break;case 38:if(!n.ruleForm.id){t.next=43;break}return t.next=41,n.$api.update("tongzhigonggao",n.ruleForm);case 41:t.next=45;break;case 43:return t.next=45,n.$api.add("tongzhigonggao",n.ruleForm);case 45:n.$utils.msgBack("提交成功");case 46:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},de80:function(e,n,t){"use strict";(function(e){t("ec13");r(t("66fd"));var n=r(t("a401"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["de80","common/runtime","common/vendor"]]]);