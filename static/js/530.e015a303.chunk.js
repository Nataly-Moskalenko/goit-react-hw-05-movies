"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[530],{530:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),c=n(439),a=n(757),u=n.n(a),s=n(791),i=n(87),o=n(689),l=n(183),p="Movies_movies__8Zx2j",f="Movies_input__N3yRL",h="Movies_searchButton__I-A1L",v=n(184);function d(){var e,t=(0,s.useState)([]),n=(0,c.Z)(t,2),a=n[0],d=n[1],m=(0,i.lr)(),_=(0,c.Z)(m,2),x=_[0],y=_[1],b=null!==(e=x.get("query"))&&void 0!==e?e:"",j=(0,o.TH)();(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Z)("/search/movie","&query=".concat(b));case 3:t=e.sent,d(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}""!==b&&function(){e.apply(this,arguments)}()}),[b]);return(0,v.jsxs)("div",{className:p,children:[(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target;if(""===t.elements.query.value)return y({});y({query:t.elements.query.value})},children:[(0,v.jsx)("input",{type:"text",name:"query",className:f}),(0,v.jsx)("button",{type:"submit",className:h,children:"Search"})]}),""!==b&&(0,v.jsx)("ul",{children:a.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(i.rU,{to:"".concat(e.id),state:{from:j},children:e.title})},e.id)}))})]})}},183:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(861),c=n(757),a=n.n(c),u=n(243),s="e1e6b0abeb0232c01b22621de6af9734",i="https://api.themoviedb.org/3";function o(e,t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i).concat(t,"?api_key=").concat(s,"&").concat(n));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=530.e015a303.chunk.js.map