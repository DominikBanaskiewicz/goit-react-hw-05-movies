"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[322],{322:function(e,t,r){r.r(t),r.d(t,{PopularMovies:function(){return f}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(243),i=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1",{method:"get",params:{api_key:"63b14a4f04fca1cccc4d7c2b70917b7d",language:"en-US"}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=r(791),p=r(87),l=r(184),f=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],s=(0,o.useState)(!1),f=(0,a.Z)(s,2),h=f[0],v=f[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,i();case 4:0!==(t=e.sent).data.results.length&&c(t.data.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:!h&&r.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(p.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})})}}}]);
//# sourceMappingURL=322.c0aa59fc.chunk.js.map