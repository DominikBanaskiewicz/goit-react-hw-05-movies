"use strict";(self.webpackChunkgoit_react_hw_05=self.webpackChunkgoit_react_hw_05||[]).push([[684],{684:function(e,t,r){r.r(t),r.d(t,{SearchMovies:function(){return p}});var n=r(861),c=r(439),a=r(757),u=r.n(a),s=r(791),i=r(243),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie",{method:"get",params:{api_key:"63b14a4f04fca1cccc4d7c2b70917b7d",language:"en-US",query:t,page:1}});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=r(87),f=r(184),p=function(){var e=(0,s.useState)(!0),t=(0,c.Z)(e,2),r=t[0],a=t[1],i=(0,s.useState)([]),p=(0,c.Z)(i,2),l=p[0],d=p[1],v=(0,s.useState)([]),x=(0,c.Z)(v,2),b=x[0],g=x[1];return(0,s.useEffect)((function(){a(!0),d([]);var e=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o(t);case 3:0!==(r=e.sent).data.results.length&&d(r.data.results),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.prev=9,a(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,7,9,12]])})));return function(t){return e.apply(this,arguments)}}();e(b)}),[b]),(0,s.useEffect)((function(){d([])}),[]),(0,f.jsx)("div",{children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget;g(t.elements.searchQuery.value),t.reset()},children:[(0,f.jsxs)("label",{children:[(0,f.jsx)("input",{name:"searchQuery",type:"text"}),(0,f.jsx)("button",{children:"Search"})]}),(0,f.jsx)("div",{children:r||0===l.length?(0,f.jsx)("p",{children:"Sorry, check search query"}):l.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(h.rU,{to:"".concat(e.id),children:e.title})},e.id)}))})]})})}}}]);
//# sourceMappingURL=684.22628fe1.chunk.js.map