(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/exampaperlist/list"],{"0b6f":function(e,t,n){},"5d99":function(e,t,n){"use strict";n.r(t);var r=n("f1ed"),a=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,(function(){return r[e]}))}(c);t["default"]=a.a},6051:function(e,t,n){"use strict";n.r(t);var r=n("6eae"),a=n("5d99");for(var c in a)"default"!==c&&function(e){n.d(t,e,(function(){return a[e]}))}(c);n("cdae");var o,s=n("f0c5"),u=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);t["default"]=u.exports},"6eae":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r}));var r={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"0c91"))}},a=function(){var e=this,t=e.$createElement;e._self._c},c=[]},"8e45":function(e,t,n){"use strict";(function(e){n("ec13");r(n("66fd"));var t=r(n("6051"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},cdae:function(e,t,n){"use strict";var r=n("0b6f"),a=n.n(r);a.a},f1ed:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,r,a,c,o){try{var s=e[c](o),u=s.value}catch(i){return void n(i)}s.done?t(u):Promise.resolve(u).then(r,a)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function s(e){c(o,r,a,s,u,"next",e)}function u(e){c(o,r,a,s,u,"throw",e)}s(void 0)}))}}var s={data:function(){return{list:[],btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},CustomBar:"0",userid:""}},onShow:function(){this.btnColor=this.btnColor.sort((function(){return.5-Math.random()}))},onLoad:function(t){this.userid=e.getStorageSync("userid"),this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(e){var t=this;return o(r.default.mark((function n(){var a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$api.list("exampaper",{page:e.num,limit:e.size,status:1});case 2:a=n.sent,1==e.num&&(t.list=[]),t.list=t.list.concat(a.data.list),0==a.data.list.length&&(t.hasNext=!1),e.endSuccess(e.size,t.hasNext);case 7:case"end":return n.stop()}}),n)})))()},onDetailTap:function(e){var t=this;return o(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$api.deleteRecords(t.userid,e);case 2:t.$utils.jump("./exam?id=".concat(e));case 3:case"end":return n.stop()}}),n)})))()},search:function(){var e=this;return o(r.default.mark((function t(){var n,a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.mescroll.num=1,n={page:e.mescroll.num,limit:e.mescroll.size},e.searchForm.name&&(n["name"]="%"+e.searchForm.name+"%"),t.next=5,e.$api.list("exampaper",n);case 5:a=t.sent,1==e.mescroll.num&&(e.list=[]),e.list=e.list.concat(a.data.list),0==a.data.list.length&&(e.hasNext=!1),e.mescroll.endSuccess(e.mescroll.size,e.hasNext);case 10:case"end":return t.stop()}}),t)})))()}}};t.default=s}).call(this,n("543d")["default"])}},[["8e45","common/runtime","common/vendor"]]]);