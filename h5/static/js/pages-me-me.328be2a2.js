(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-me"],{"02fd":function(t,i,e){"use strict";e.r(i);var a=e("8cee"),n=e("ec9b");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);e("6976");var o=e("2877"),c=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"55841891",null);i["default"]=c.exports},"0f3e":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".header[data-v-55841891]{width:100%;height:%?250?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.face-wapper[data-v-55841891]{width:30%}.face[data-v-55841891]{width:%?180?%;height:%?180?%;margin-top:%?30?%;margin-left:%?30?%;border-radius:100%}.info-wapper[data-v-55841891]{width:60%}.info-darkgray[data-v-55841891]{font-size:16px;color:#a9a9a9}.info-black[data-v-55841891]{font-size:16px;color:#000}.ico[data-v-55841891]{width:%?50?%;height:%?50?%}.u-info-wapper[data-v-55841891]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#fff;padding:%?20?% %?30?% %?20?% %?30?%}.name[data-v-55841891]{font-size:16px;font-weight:700;\r\n\t/* 不换行 */white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.button[data-v-55841891]{margin-top:%?30?%;width:90%}.row-wapper[data-v-55841891]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}",""])},"24e1":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{userIsLogin:!1,userInfo:{nickname:"",username:"",face:"",saySth:""},flag:0,lastX:0,lastY:0}},methods:{toLogin:function(){uni.navigateTo({url:"login/login"})},toRegister:function(){uni.navigateTo({url:"register/register"})},showMyAccountInfo:function(){uni.navigateTo({url:"account_info/account_info"})},showMyInterest:function(){uni.navigateTo({url:"my_interest/my_interest"})},showSetup:function(){uni.navigateTo({url:"me_setup/me_setup"})},showMyHistory:function(){uni.navigateTo({url:"me_history/me_history"})},handletouchmove:function(t){if(0===this.flag){var i=t.touches[0].pageX,e=t.touches[0].pageY,a=i-this.lastX,n=e-this.lastY;this.mindex=-1,Math.abs(a)>Math.abs(n)&&(a<0?(this.flag=1,console.log("向左滑动")):a>0&&(this.flag=2,console.log("向右滑动"),uni.switchTab({url:"../search/search"}))),this.lastX=i,this.lastY=e}},handletouchstart:function(t){this.lastX=t.touches[0].pageX,this.lastY=t.touches[0].pageY},handletouchend:function(t){this.flag=0}},onLoad:function(){},onShow:function(){var t=uni.getStorageSync("IS_LOGIN");t?(this.userIsLogin=!0,this.userInfo.nickname=uni.getStorageSync("NICKNAME"),this.userInfo.username=uni.getStorageSync("USERNAME"),this.userInfo.face=uni.getStorageSync("FACE"),this.userInfo.saySth=uni.getStorageSync("SAYSTH")):this.userIsLogin=!1}};i.default=a},6976:function(t,i,e){"use strict";var a=e("80c1"),n=e.n(a);n.a},"80c1":function(t,i,e){var a=e("0f3e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("5bd9403d",a,!0,{sourceMap:!1,shadowMode:!1})},"8cee":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"page",on:{touchmove:function(i){i=t.$handleEvent(i),t.handletouchmove(i)},touchstart:function(i){i=t.$handleEvent(i),t.handletouchstart(i)},touchend:function(i){i=t.$handleEvent(i),t.handletouchend(i)}}},[t.userIsLogin?e("v-uni-view",[e("v-uni-view",{staticClass:"header"},[e("v-uni-view",{staticClass:"face-wapper"},[e("v-uni-image",{staticClass:"face",attrs:{src:t.userInfo.face,mode:""}})],1),e("v-uni-view",{staticClass:"info-wapper",staticStyle:{"margin-top":"60upx","padding-left":"20upx"}},[e("v-uni-view",{staticClass:"name",model:{value:t.userInfo,callback:function(i){t.userInfo=i},expression:"userInfo"}},[t._v(t._s(t.userInfo.nickname))]),e("v-uni-view",{staticClass:"info-darkgray",staticStyle:{"padding-right":"20upx"},model:{value:t.userInfo,callback:function(i){t.userInfo=i},expression:"userInfo"}},[t._v(t._s(t.userInfo.saySth))])],1)],1),e("v-uni-view",{staticClass:"line-wapper"},[e("v-uni-view",{staticClass:"line"})],1),e("v-uni-view",{staticClass:"u-info-wapper",on:{click:function(i){i=t.$handleEvent(i),t.showMyAccountInfo(i)}}},[e("v-uni-view",{staticClass:"info-black"},[t._v("账号资料")]),e("v-uni-view",{staticClass:"ico-wapper"},[e("v-uni-image",{staticClass:"ico",attrs:{src:"../../static/icos/left-gray-arrow.png",mode:""}})],1)],1),e("v-uni-view",{staticClass:"line-wapper"},[e("v-uni-view",{staticClass:"line"})],1),e("v-uni-view",{staticClass:"u-info-wapper",on:{click:function(i){i=t.$handleEvent(i),t.showMyInterest(i)}}},[e("v-uni-view",{staticClass:"info-black"},[t._v("我的收藏")]),e("v-uni-view",{staticClass:"ico-wapper"},[e("v-uni-image",{staticClass:"ico",attrs:{src:"../../static/icos/left-gray-arrow.png",mode:""}})],1)],1),e("v-uni-view",{staticClass:"line-wapper"},[e("v-uni-view",{staticClass:"line"})],1),e("v-uni-view",{staticClass:"u-info-wapper",on:{click:function(i){i=t.$handleEvent(i),t.showMyHistory(i)}}},[e("v-uni-view",{staticClass:"info-black"},[t._v("浏览记录")]),e("v-uni-view",{staticClass:"ico-wapper"},[e("v-uni-image",{staticClass:"ico",attrs:{src:"../../static/icos/left-gray-arrow.png",mode:""}})],1)],1),e("v-uni-view",{staticClass:"line-wapper",staticStyle:{"margin-bottom":"30upx"}},[e("v-uni-view",{staticClass:"line"})],1),e("v-uni-view",{staticClass:"u-info-wapper",on:{click:function(i){i=t.$handleEvent(i),t.showSetup(i)}}},[e("v-uni-view",{staticClass:"row-wapper"},[e("v-uni-view",{staticClass:"ico-wapper"},[e("v-uni-image",{staticClass:"ico",attrs:{src:"../../static/icos/settings.png",mode:""}})],1),e("v-uni-view",{staticClass:"info-black",staticStyle:{"margin-left":"10upx"}},[t._v("设置")])],1),e("v-uni-view",{staticClass:"ico-wapper"},[e("v-uni-image",{staticClass:"ico",attrs:{src:"../../static/icos/left-gray-arrow.png",mode:""}})],1)],1),e("v-uni-view",{staticClass:"line-wapper"},[e("v-uni-view",{staticClass:"line"})],1)],1):e("v-uni-view",[e("v-uni-view",{staticClass:"header"},[e("v-uni-image",{staticClass:"face",attrs:{src:"../../static/icos/default-face.png",mode:""}}),e("v-uni-view",{staticClass:"info-wapper"},[e("v-uni-view",{staticClass:"info",staticStyle:{"margin-top":"60upx","margin-left":"30upx"}},[t._v("未登录，请登录/注册")])],1)],1),e("v-uni-view",{staticClass:"line-wapper"},[e("v-uni-view",{staticClass:"line"})],1),e("v-uni-view",[e("v-uni-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(i){i=t.$handleEvent(i),t.toLogin(i)}}},[t._v("登录")]),e("v-uni-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(i){i=t.$handleEvent(i),t.toRegister(i)}}},[t._v("注册")])],1)],1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},ec9b:function(t,i,e){"use strict";e.r(i);var a=e("24e1"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a}}]);