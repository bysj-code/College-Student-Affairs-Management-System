(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiaoshi/add-or-update"],{"0522":function(e,n,t){"use strict";t.r(n);var r=t("f824"),a=t("6a1b");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("ff55");var o,u=t("f0c5"),s=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"cf4c806a",null,!1,r["a"],o);n["default"]=s.exports},"0b6e":function(e,n,t){"use strict";(function(e){t("ec13");r(t("66fd"));var n=r(t("0522"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"6a1b":function(e,n,t){"use strict";t.r(n);var r=t("c382"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},"9e8e":function(e,n,t){},c382:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,a,i,o){try{var u=e[i](o),s=u.value}catch(c){return void t(c)}u.done?n(s):Promise.resolve(s).then(r,a)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function u(e){i(o,r,a,u,s,"next",e)}function s(e){i(o,r,a,u,s,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("2666"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{cross:"",ruleForm:{jiaoshigonghao:"",mima:"",jiaoshixingming:"",xingbie:"",zhengjian:"",lianxidianhua:"",sfsh:"",shhf:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{jiaoshigonghao:!1,mima:!1,jiaoshixingming:!1,xingbie:!1,zhengjian:!1,lianxidianhua:!1,sfsh:!1,shhf:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return o(r.default.mark((function a(){var i,o,u,s;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.getStorageSync("nowTable"),a.next=3,t.$api.session(i);case 3:if(o=a.sent,t.user=o.data,t.ro.jiaoshixingming=!0,t.xingbieOptions="男,女".split(","),t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=15;break}return t.ruleForm.id=n.id,a.next=13,t.$api.info("jiaoshi",t.ruleForm.id);case 13:o=a.sent,t.ruleForm=o.data;case 15:if(t.cross=n.cross,!n.cross){a.next=47;break}u=e.getStorageSync("crossObj"),a.t0=r.default.keys(u);case 19:if((a.t1=a.t0()).done){a.next=47;break}if(s=a.t1.value,"jiaoshigonghao"!=s){a.next=25;break}return t.ruleForm.jiaoshigonghao=u[s],t.ro.jiaoshigonghao=!0,a.abrupt("continue",19);case 25:if("mima"!=s){a.next=29;break}return t.ruleForm.mima=u[s],t.ro.mima=!0,a.abrupt("continue",19);case 29:if("jiaoshixingming"!=s){a.next=33;break}return t.ruleForm.jiaoshixingming=u[s],t.ro.jiaoshixingming=!0,a.abrupt("continue",19);case 33:if("xingbie"!=s){a.next=37;break}return t.ruleForm.xingbie=u[s],t.ro.xingbie=!0,a.abrupt("continue",19);case 37:if("zhengjian"!=s){a.next=41;break}return t.ruleForm.zhengjian=u[s],t.ro.zhengjian=!0,a.abrupt("continue",19);case 41:if("lianxidianhua"!=s){a.next=45;break}return t.ruleForm.lianxidianhua=u[s],t.ro.lianxidianhua=!0,a.abrupt("continue",19);case 45:a.next=19;break;case 47:t.styleChange();case 48:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhengjianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.zhengjian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(r.default.mark((function t(){var a,i,o,u,s,c,l,f,g,d;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.jiaoshigonghao){t.next=3;break}return n.$utils.msg("教师工号不能为空"),t.abrupt("return");case 3:if(n.ruleForm.mima){t.next=6;break}return n.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(!n.ruleForm.lianxidianhua||n.$validate.isMobile(n.ruleForm.lianxidianhua)){t.next=9;break}return n.$utils.msg("联系电话应输入手机格式"),t.abrupt("return");case 9:if(!n.cross){t.next=25;break}if(u=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==u){t.next=25;break}if(c=e.getStorageSync("crossObj"),u.startsWith("[")){t.next=21;break}for(l in c)l==u&&(c[l]=s);return f=e.getStorageSync("crossTable"),t.next=19,n.$api.update("".concat(f),c);case 19:t.next=25;break;case 21:a=Number(e.getStorageSync("userid")),i=c["id"],o=e.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 25:if(!i||!a){t.next=47;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=i,g={page:1,limit:10,crossuserid:a,crossrefid:i},t.next=31,n.$api.list("jiaoshi",g);case 31:if(d=t.sent,!(d.data.total>=o)){t.next=37;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 37:if(!n.ruleForm.id){t.next=42;break}return t.next=40,n.$api.update("jiaoshi",n.ruleForm);case 40:t.next=44;break;case 42:return t.next=44,n.$api.add("jiaoshi",n.ruleForm);case 44:n.$utils.msgBack("提交成功");case 45:t.next=55;break;case 47:if(!n.ruleForm.id){t.next=52;break}return t.next=50,n.$api.update("jiaoshi",n.ruleForm);case 50:t.next=54;break;case 52:return t.next=54,n.$api.add("jiaoshi",n.ruleForm);case 54:n.$utils.msgBack("提交成功");case 55:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},f824:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},ff55:function(e,n,t){"use strict";var r=t("9e8e"),a=t.n(r);a.a}},[["0b6e","common/runtime","common/vendor"]]]);