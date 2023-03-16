"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{3485:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,o,c,i=e(9439),u=e(2791),p=e(1087),s=e(7689),f=e(9705),d=e(168),h=e(6444),l=h.ZP.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  padding: 25px;\n  margin-left: 15px;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 65px;\n"]))),x=h.ZP.li(a||(a=(0,d.Z)(["\n  width: 350px;\n  margin-top: 10px;\n  background-color: #a8daf7;\n  border-bottom-left-radius: 15px;\n\n  &:hover,\n  &:focus {\n    transition: all 0.2s ease-out;\n    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);\n    top: -4px;\n    background-color: #ffaebb;\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    z-index: -1;\n    top: -16px;\n    right: -16px;\n    background: #00838d;\n    height: 32px;\n    width: 32px;\n    border-radius: 32px;\n    transform: scale(2);\n    transform-origin: 50% 50%;\n    transition: transform 0.15s ease-out;\n  }\n\n  &:hover:before {\n    transform: scale(2.15);\n  }\n"]))),m=h.ZP.img(o||(o=(0,d.Z)(["\n  width: 350px;\n  height: auto;\n"]))),g=h.ZP.h2(c||(c=(0,d.Z)(["\n  padding-bottom: 5px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  letter-spacing: 0.03em;\n  padding-left: 15px;\n  color: #382aff;\n  margin-top: -5px;\n"]))),b=e(1686),v=e.n(b),y=e(184);v().Notify.init({width:"420px",position:"center-top",distance:"100px",timeout:1500,fontSize:"20px"});var w=function(){var n=(0,u.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,s.TH)();return(0,u.useEffect)((function(){(0,f.Cp)().then((function(n){r(n.results),v().Notify.success("We have prepared for you the 20 best movies for today")})).catch((function(n){v().Notify.failure(n)}))}),[]),(0,y.jsxs)(l,{children:[e.map((function(n){var t="".concat("https://image.tmdb.org/t/p/w500/").concat(n.backdrop_path);return(0,y.jsx)(p.OL,{to:"movies/".concat(n.id),state:{from:a},children:(0,y.jsxs)(x,{children:[(0,y.jsx)(m,{src:t,alt:n.original_title}),(0,y.jsx)(g,{children:n.original_title})]},n.id)})})),(0,y.jsx)(s.j3,{})]})}},9705:function(n,t,e){e.d(t,{IQ:function(){return x},Pg:function(){return h},XT:function(){return f},Cp:function(){return p},Jh:function(){return g}});var r=e(5861),a=e(7757),o=e.n(a),c=e(1243),i="db72402e2e89e57b99e88c265b440972",u="https://api.themoviedb.org/3/";function p(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"trending/movie/day?api_key=").concat(i,"\n"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/search/movie?api_key=").concat(i,"&page=1&query=").concat(t,"\n"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(i,"\n"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i,"\n"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(i,"\n"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=485.9f42cde8.chunk.js.map