webpackJsonp([6],{"1cVs":function(t,i,e){t.exports=e.p+"static/img/person_2.e4aaab4.png"},"1g5h":function(t,i){},BHQi:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("j7an"),a=(e("+cZj"),{data:function(){return{swiper:null,height:"0px",heightNum:0,timer:null,swiperIndex:0}},components:{},mounted:function(){var t=this;this.swiper=new s.a(".swiper-container",{effect:"flip",flipEffect:{slideShadows:!0,limitRotation:!0},on:{slideChangeTransitionEnd:function(){t.swiperIndex=this.realIndex,t.imgload()}},navigation:{nextEl:".next-icon",prevEl:".prev-icon"}}),this.imgload()},methods:{imgload:function(){var t=this;this.heightNum=0,this.height=0;var i=this.$refs["imgSize"+this.swiperIndex].offsetHeight;clearInterval(this.timer),this.timer=setInterval(function(){t.heightNum+=4,t.height=t.heightNum+"px",t.heightNum>i&&clearInterval(t.timer)},10)},next:function(){this.swiper.slideNext()},pre:function(){this.swiper.slidePrev()}}}),r={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"page"},[s("div",{staticClass:"swiper-container"},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"img-wrap ",style:{height:t.height}},[s("img",{ref:"imgSize0",staticStyle:{width:"5.77rem",height:"11.13rem"},attrs:{src:e("k5mQ"),alt:""}})])]),t._v(" "),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"img-wrap ",style:{height:t.height}},[s("img",{ref:"imgSize1",staticStyle:{width:"5.75rem",height:"11.24rem"},attrs:{src:e("1cVs"),alt:""}})])]),t._v(" "),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"img-wrap ",style:{height:t.height}},[s("img",{ref:"imgSize2",staticStyle:{width:"5.77rem",height:"11.14rem"},attrs:{src:e("KRaD"),alt:""}})])]),t._v(" "),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"img-wrap ",style:{height:t.height}},[s("img",{ref:"imgSize3",staticStyle:{width:"5.77rem",height:"11.13rem"},attrs:{src:e("zclt"),alt:""}})])]),t._v(" "),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"img-wrap ",style:{height:t.height}},[s("img",{ref:"imgSize4",staticStyle:{width:"5.77rem",height:"11.13rem"},attrs:{src:e("jFK4"),alt:""}})])]),t._v(" "),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"img-wrap ",style:{height:t.height}},[s("img",{ref:"imgSize5",staticStyle:{width:"5.77rem",height:"11.13rem"},attrs:{src:e("lLTH"),alt:""}})])])])]),t._v(" "),s("router-link",{staticClass:"return",attrs:{to:"/"}}),t._v(" "),s("div",{staticClass:"prev-btn",on:{click:t.pre}}),t._v(" "),s("div",{staticClass:"next-btn",on:{click:t.next}})],1)},staticRenderFns:[]};var n=e("VU/8")(a,r,!1,function(t){e("1g5h")},"data-v-1b30c5d6",null);i.default=n.exports},KRaD:function(t,i,e){t.exports=e.p+"static/img/person_3.13f0cbb.png"},jFK4:function(t,i,e){t.exports=e.p+"static/img/person_5.49dff23.png"},k5mQ:function(t,i,e){t.exports=e.p+"static/img/person_1.f4ef494.png"},lLTH:function(t,i,e){t.exports=e.p+"static/img/person_6.fa9567d.png"},zclt:function(t,i,e){t.exports=e.p+"static/img/person_4.ed87eb0.png"}});
//# sourceMappingURL=6.f057b97dc951ece60b67.js.map