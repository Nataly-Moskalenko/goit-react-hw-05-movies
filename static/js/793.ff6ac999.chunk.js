"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[793],{793:function(e,i,t){t.r(i),t.d(i,{default:function(){return u}});var s=t(861),a=t(439),n=t(757),c=t.n(n),l=t(791),r=t(689),o=t(87),_=t(183),d={movieDetails:"MovieDetails_movieDetails__YUgVh",buttonBack:"MovieDetails_buttonBack__NiZGM",back:"MovieDetails_back__FLS4E",movie:"MovieDetails_movie__NrKvA",movie__img:"MovieDetails_movie__img__5enrd",movie__title:"MovieDetails_movie__title__Jlpd1",add:"MovieDetails_add__fnoo3",add__item:"MovieDetails_add__item__Xha4-",link:"MovieDetails_link__Lx01J",add__list:"MovieDetails_add__list__ITyj6",add__title:"MovieDetails_add__title__UD7vK"},v=t(617),m=t(184);function u(){var e,i,t,n=(0,l.useState)({}),u=(0,a.Z)(n,2),h=u[0],p=u[1],x=(0,r.UO)().movieId,j=(0,r.TH)(),f=(0,l.useRef)(null!==(e=null===(i=j.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/");return(0,l.useEffect)((function(){function e(){return(e=(0,s.Z)(c().mark((function e(){var i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.Z)("/movie/".concat(x));case 3:i=e.sent,p(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[x]),(0,m.jsxs)("div",{className:d.movieDetails,children:[(0,m.jsx)("button",{type:"button",className:d.buttonBack,children:(0,m.jsxs)(o.OL,{to:f.current,className:d.back,children:[(0,m.jsx)(v.jTe,{size:"12"}),(0,m.jsx)("span",{children:" Go back"})]})}),(0,m.jsxs)("div",{className:d.movie,children:[h.poster_path&&(0,m.jsx)("img",{className:d.movie__img,src:"https://image.tmdb.org/t/p/w185/".concat(h.poster_path),alt:h.title,width:"278",height:"417"}),(0,m.jsxs)("div",{className:d.movie__description,children:[(0,m.jsx)("h1",{className:d.movie__title,children:h.title}),(0,m.jsxs)("p",{children:["Release date: ",h.release_date]}),(0,m.jsxs)("p",{children:["User average: ",h.vote_average]}),(0,m.jsx)("h2",{className:d.movie__title,children:"Overview"}),(0,m.jsx)("p",{children:h.overview}),(0,m.jsx)("h2",{className:d.movie__title,children:"Genres"}),(0,m.jsx)("p",{children:null===(t=h.genres)||void 0===t?void 0:t.map((function(e){return(0,m.jsxs)("span",{children:[e.name," "]},e.id)}))})]})]}),(0,m.jsxs)("div",{className:d.add,children:[(0,m.jsx)("h3",{className:d.add__title,children:"Additional information"}),(0,m.jsxs)("ul",{className:d.add__list,children:[(0,m.jsx)("li",{className:d.add__item,children:(0,m.jsx)(o.OL,{to:"cast",className:d.link,children:"Cast"})}),(0,m.jsx)("li",{className:d.add__item,children:(0,m.jsx)(o.OL,{to:"reviews",className:d.link,children:"Reviews"})})]})]}),(0,m.jsx)(l.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading..."}),children:(0,m.jsx)(r.j3,{})})]})}},183:function(e,i,t){t.d(i,{Z:function(){return o}});var s=t(861),a=t(757),n=t.n(a),c=t(243),l="e1e6b0abeb0232c01b22621de6af9734",r="https://api.themoviedb.org/3";function o(e,i){return _.apply(this,arguments)}function _(){return(_=(0,s.Z)(n().mark((function e(i,t){var s;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(r).concat(i,"?api_key=").concat(l,"&").concat(t));case 2:return s=e.sent,e.abrupt("return",s.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=793.ff6ac999.chunk.js.map