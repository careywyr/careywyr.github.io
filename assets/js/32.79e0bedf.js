(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{321:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));r(128);var s=r(0);function i(){const e=Object(s.d)();if(!e)throw new Error("must be called in setup");return(null==e?void 0:e.proxy)||{}}function n(){const e=Object(s.h)(!1);return Object(s.e)(()=>{e.value=!0}),Object(s.f)(()=>{e.value=!1,setTimeout(()=>{e.value=!0},100)}),{recoShowModule:e}}},370:function(e,t,r){},387:function(e,t,r){"use strict";r(370)},415:function(e,t,r){"use strict";r.r(t);var s=r(0),i=r(17),n=r(321),c=Object(s.c)({setup(e,t){const r=Object(n.a)();return{headers:Object(s.a)(()=>r.$showSubSideBar?r.$page.headers:[]),isLinkActive:e=>Object(i.e)(r.$route,r.$page.path+"#"+e.slug)}},render(e){return e("ul",{class:{"sub-sidebar-wrapper":!0},style:{width:this.headers.length>0?"12rem":"0"}},[...this.headers.map(t=>e("li",{class:{active:this.isLinkActive(t),["level-"+t.level]:!0},attr:{key:t.title}},[e("router-link",{class:{"sidebar-link":!0,["reco-side-"+t.slug]:!0},props:{to:`${this.$page.path}#${t.slug}`}},t.title)]))])}}),u=(r(387),r(2)),a=Object(u.a)(c,void 0,void 0,!1,null,"b57cc07c",null);t.default=a.exports}}]);