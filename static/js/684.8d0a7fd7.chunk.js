"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[684],{684:function(e,t,r){r.r(t),r.d(t,{SearchMovies:function(){return f}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),i=r(243),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie",{method:"get",params:{api_key:"63b14a4f04fca1cccc4d7c2b70917b7d",language:"en-US",query:t,page:1}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=r(87),p=r(184),f=function(){var e=(0,s.useState)(!0),t=(0,a.Z)(e,2),r=t[0],c=t[1],i=(0,s.useState)([]),f=(0,a.Z)(i,2),l=f[0],d=f[1],v=(0,s.useState)([]),m=(0,a.Z)(v,2),x=m[0],b=m[1];return(0,s.useEffect)((function(){c(!0),d([]);var e=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o(t);case 3:0!==(r=e.sent).data.results.length&&d(r.data.results),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.prev=9,c(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,7,9,12]])})));return function(t){return e.apply(this,arguments)}}();e(x)}),[x]),(0,s.useEffect)((function(){d([])}),[]),(0,p.jsx)("div",{children:(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget;b(t.elements.searchQuery.value),t.reset()},children:[(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{name:"searchQuery",type:"text"}),(0,p.jsx)("button",{children:"Search"})]}),(0,p.jsx)("div",{children:r||0===l.length?(0,p.jsx)("p",{children:"Sorry, check search query"}):l.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(h.rU,{to:"".concat(e.id),children:e.title})},e.id)}))})]})})}}}]);
//# sourceMappingURL=684.8d0a7fd7.chunk.js.map