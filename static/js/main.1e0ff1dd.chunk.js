(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[3],{11:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(2),r=(n(24),n(5));e.default=function(t){var e=t.data,s=Object(c.q)().tabId,i=s?null===e||void 0===e?void 0:e.find((function(t){return t.id===s})):null===e||void 0===e?void 0:e.find((function(t){return 0===t.order})),d=null===i||void 0===i?void 0:i.path.slice(0,-3),u=Object(a.lazy)((function(){return n(37)("./".concat(d))}));return Object(r.jsx)("div",{className:"app",children:Object(r.jsx)(u,{})})}},18:function(t,e,n){"use strict";n.r(e),n.d(e,"Header",(function(){return r}));n(0);var a=n(12),c=(n(25),n(5)),r=function(t){var e=t.data;return Object(c.jsx)("header",{className:"header",children:null===e||void 0===e?void 0:e.map((function(t){return Object(c.jsx)(a.b,{to:"/".concat(t.id),className:"header__link",children:t.title},t.id)}))})}},24:function(t,e,n){},25:function(t,e,n){},34:function(t,e,n){},37:function(t,e,n){var a={"./Header":[18,9],"./Header.scss":[25,7],"./Header.tsx":[18,9],"./TabLoader":[11,9],"./TabLoader.tsx":[11,9],"./tabs/dummyChart":[27,9,0],"./tabs/dummyChart.js":[27,9,0],"./tabs/dummyList":[28,9,1],"./tabs/dummyList.js":[28,9,1],"./tabs/dummyTable":[29,9,2],"./tabs/dummyTable.js":[29,9,2]};function c(t){if(!n.o(a,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=a[t],c=e[0];return Promise.all(e.slice(2).map(n.e)).then((function(){return n.t(c,e[1])}))}c.keys=function(){return Object.keys(a)},c.id=37,t.exports=c},38:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(26),s=n.n(r),i=(n(34),n(4)),d=(n(24),n(12)),u=n(2),o=n(11),j=n(18),l=n(5),b=function(){var t=Object(a.useState)(null),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(a.useEffect)((function(){fetch("/tabs.json").then((function(t){return t.json()})).then((function(t){c(t)}))}),[]),Object(l.jsx)(d.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(j.Header,{data:n}),n?Object(l.jsx)(a.Suspense,{fallback:Object(l.jsx)("div",{className:"app",children:"Loading..."}),children:Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"/",element:Object(l.jsx)(o.default,{data:n})}),Object(l.jsx)(u.a,{path:"/:tabId",element:Object(l.jsx)(o.default,{data:n})})]})}):Object(l.jsx)("div",{className:"app",children:"Loading data..."})]})})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[38,4,5]]]);
//# sourceMappingURL=main.1e0ff1dd.chunk.js.map