(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-my_interest-my_interest"],{"288b":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("28a5");var o={data:function(){return{interestFilmList:[]}},onLoad:function(){var e=this,t=uni.getStorageSync("USER_ID"),i=uni.getStorageSync("AUTH_TOKEN");uni.request({url:this.apiServer+"api/v1/my_interest_movie/",method:"GET",header:{"auth-token":i},data:{user_id:t},success:function(t){if(console.log(t),""==t.data)uni.showToast({title:"还没有收藏过任何电影",icon:"none"});else if(200==t.data[0].status){for(var i in console.log(t),t.data)t.data[i].cover=e.mediaServer+t.data[i].cover;e.interestFilmList=t.data}else 400==t.data[0].status&&(console.log(400),console.log(t),e.relogin())},fail:function(){uni.setStorageSync("IS_LOGIN",!1),uni.showToast({title:"系统错误，响应超时",icon:"none"})}})},methods:{showMovie:function(e){var t=e.currentTarget.dataset.movieid;uni.navigateTo({url:"/pages/movie/movie?movieId="+t})},setting:function(e){var t=this,i=e.currentTarget.dataset.movieid;uni.showActionSheet({itemList:["取消收藏"],success:function(e){uni.showToast({title:"已取消收藏",icon:"none"});var o=uni.getStorageSync("INTEREST_FILM_ID"),n=o.split(",");n=t.deleteByValue(n,i);uni.setStorageSync("INTEREST_FILM_ID",n+"");var a=uni.getStorageSync("USER_ID"),s=uni.getStorageSync("AUTH_TOKEN");uni.request({url:t.apiServer+"api/v1/interest_movie/?user_id="+a+"&movie_id="+i,method:"DELETE",header:{"auth-token":s},success:function(e){200==e.data.status?uni.redirectTo({url:"my_interest"}):400==e.data.status&&(console.log(400),console.log(e),t.relogin())},fail:function(){uni.showToast({title:"系统错误,响应超时",icon:"none"})},complete:function(){}})}})},deleteByValue:function(e,t){for(var i=0;i<e.length;i++)t==e[i]&&e.splice(i,1);return e}}};t.default=o},3677:function(e,t,i){"use strict";i.r(t);var o=i("288b"),n=i.n(o);for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);t["default"]=n.a},"689e":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"/* 猜你喜欢 */.guess-u-like[data-v-ad362ff4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.guess-u-like-movie[data-v-ad362ff4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:%?30?% %?20?%;border-bottom:dashed 2px;border-bottom-color:#dbdbda}.like-movie[data-v-ad362ff4]{width:%?180?%;height:%?240?%;border-radius:3%}.movie-desc[data-v-ad362ff4]{width:%?340?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:%?10?%}.movie-title[data-v-ad362ff4]{\r\n\t/* 过长的名字添加省略号 */white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;margin-top:%?10?%}.movie-info[data-v-ad362ff4]{color:grey;font-size:14px;margin-top:%?10?%;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}\r\n/* 点赞css */.movie-oper[data-v-ad362ff4]{width:%?140?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.praise-ico[data-v-ad362ff4]{width:%?40?%;height:%?40?%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.praise-gray-txt[data-v-ad362ff4]{font-size:14px;color:#grey;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.praise-txt[data-v-ad362ff4]{font-size:14px;color:#feab2a;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.animation-opacity[data-v-ad362ff4]{opacity:0}.praise-font[data-v-ad362ff4]{font-size:12px;color:grey;margin-left:%?8?%}",""])},"97f0":function(e,t,i){var o=i("689e");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("4f06").default;n("9758f172",o,!0,{sourceMap:!1,shadowMode:!1})},c10d:function(e,t,i){"use strict";i.r(t);var o=i("e6fd"),n=i("3677");for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);i("e640");var s=i("2877"),r=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,"ad362ff4",null);t["default"]=r.exports},e640:function(e,t,i){"use strict";var o=i("97f0"),n=i.n(o);n.a},e6fd:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"guess-u-like page-block"},e._l(e.interestFilmList,function(t,o){return i("v-uni-view",{key:o,staticClass:"guess-u-like-movie"},[i("v-uni-image",{staticClass:"like-movie",attrs:{src:t.cover,"data-movieId":t.id},on:{click:function(t){t=e.$handleEvent(t),e.showMovie(t)}}}),i("v-uni-view",{staticClass:"movie-desc",attrs:{"data-movieId":t.id},on:{click:function(t){t=e.$handleEvent(t),e.showMovie(t)}}},[i("v-uni-view",{staticClass:"movie-title"},[e._v(e._s(t.name))]),i("scoreComp",{attrs:{score:t.score}}),i("v-uni-view",{staticClass:"movie-info"},[e._v(e._s(t.basic_info))]),i("v-uni-view",{staticClass:"movie-info"},[e._v(e._s(t.release_date)+"("+e._s(t.release_place)+")")])],1),i("v-uni-view",{staticClass:"movie-oper",attrs:{"data-movieId":t.id},on:{click:function(t){t=e.$handleEvent(t),e.setting(t)}}},[i("v-uni-image",{staticClass:"praise-ico",attrs:{src:"/static/icos/settings.png"}})],1)],1)}),1)],1)},n=[];i.d(t,"a",function(){return o}),i.d(t,"b",function(){return n})}}]);