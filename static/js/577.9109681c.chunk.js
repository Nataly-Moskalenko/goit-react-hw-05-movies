"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[577],{577:function(e,t,s){s.r(t),s.d(t,{default:function(){return k}});var r=s(861),a=s(439),n=s(757),i=s.n(n),c=s(791),o=s(87),u=s(689),l=s(183),_="Movies_movies__QIa1b",m="Movies_form__utRLM",v="Movies_input__+JkfI",h="Movies_searchButton__cozX1",p="Movies_defaultImage__A00Fi",f="Movies_movies__img__rkfEl",d="Movies_movies__text__iyQYU",x="Movies_movies__descr__NLgxL",y="Movies_movies__list__OPKjF",j="Movies_movies__item__T-yJ1",g="Movies_movies__itemWrapper__aioWA",b="Movies_link__XMa7X",w=s(779),N=s(596),M=s(184);function k(){var e,t,s=(0,c.useState)([]),n=(0,a.Z)(s,2),k=n[0],q=n[1],Z=(0,o.lr)(),S=(0,a.Z)(Z,2),A=S[0],L=S[1],P=null!==(e=A.get("query"))&&void 0!==e?e:"",W=(0,u.TH)(),C=(0,c.useRef)(P),I=(0,c.useState)(null!==(t=C.current)&&void 0!==t?t:""),O=(0,a.Z)(I,2),X=O[0],E=O[1];(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Z)("/search/movie","&query=".concat(P));case 3:t=e.sent,q(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}""!==P&&function(){e.apply(this,arguments)}()}),[P]);return(0,M.jsxs)("div",{className:_,children:[(0,M.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target;if(""===t.elements.query.value)return N.Am.info("Please enter your search query."),L({});t.elements.query.value!==P?L({query:t.elements.query.value}):N.Am.info('We already found movies with "'.concat(P,'"'))},className:m,children:[(0,M.jsx)("input",{type:"text",name:"query",className:v,value:X,onChange:function(e){E(e.target.value)}}),(0,M.jsx)("button",{type:"submit",className:h,children:"Search"})]}),""!==P&&k.length>0&&(0,M.jsx)("ul",{className:y,children:k.map((function(e){return(0,M.jsx)("li",{className:j,children:(0,M.jsx)("div",{className:g,children:(0,M.jsx)(o.OL,{to:"".concat(e.id),state:{from:W},className:b,children:e.poster_path?(0,M.jsx)("img",{className:f,src:"https://image.tmdb.org/t/p/w185/".concat(e.poster_path),alt:e.title,width:"220"}):(0,M.jsxs)("p",{className:x,children:["Sorry, there is no poster for this movie"," ",(0,M.jsx)("b",{children:e.title}),"."]})})})},e.id)}))}),""!==P&&0===k.length&&(0,M.jsxs)("div",{children:[(0,M.jsx)("img",{src:w,alt:"Movie poster",width:"480",className:p}),(0,M.jsxs)("p",{className:d,children:['Oops, there are no movies with "',P,'".']}),(0,M.jsx)("p",{className:d,children:"Please enter new search query."})]}),""===P&&(0,M.jsxs)("div",{children:[(0,M.jsx)("img",{src:w,alt:"Movie poster",width:"480",className:p}),(0,M.jsx)("p",{className:d,children:"What movies will we search?"}),(0,M.jsx)("p",{className:d,children:"Please enter your search query."})]})]})}},183:function(e,t,s){s.d(t,{Z:function(){return u}});var r=s(861),a=s(757),n=s.n(a),i=s(243),c="e1e6b0abeb0232c01b22621de6af9734",o="https://api.themoviedb.org/3";function u(e,t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(n().mark((function e(t,s){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(o).concat(t,"?api_key=").concat(c,"&").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},779:function(e,t,s){e.exports=s.p+"static/media/movie-597004_640.a5228f7d88bfe01b819f.jpg"}}]);
//# sourceMappingURL=577.9109681c.chunk.js.map