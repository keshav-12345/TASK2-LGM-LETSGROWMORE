(this.webpackJsonptask2=this.webpackJsonptask2||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),i=c(13),a=c.n(i),j=(c(19),c(3)),r=(c(20),c(0));var d=function(e){var t=e.clickedInNav;return Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsx)("h2",{children:"LetsGrowMore"}),Object(r.jsx)("button",{onClick:function(){t(!0)},children:"Get Users"})]})};c(22),c(23);var l=function(e){return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"imgContainer",children:Object(r.jsx)("img",{src:e.avatar,alt:"img"})}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsxs)("h3",{children:[e.first_name," ",e.last_name," "]}),Object(r.jsxs)("p",{children:[e.email," "]})]})]})};c(24);var b=function(e){return e.load?Object(r.jsx)("div",{className:"containL",children:Object(r.jsxs)("div",{className:"lds-default",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})}):""},u=c(14),o=c.n(u);var O=function(e){var t=Object(n.useState)(!1),c=Object(j.a)(t,2),s=c[0],i=c[1],a=Object(n.useState)(null),d=Object(j.a)(a,2),u=d[0],O=d[1];return Object(n.useEffect)((function(){var t=setTimeout((function(){e.click&&(i(!0),o.a.get("https://reqres.in/api/users?page=1",{timeout:1100}).then((function(e){O(e.data.data),i(!1)})))}),2e3);return function(){clearTimeout(t),i(!0)}}),[e.click]),Object(r.jsxs)("div",{className:"container",children:[u&&u.map((function(e){return Object(r.jsx)(l,{last_name:e.last_name,first_name:e.first_name,avatar:e.avatar,email:e.email},e.id)})),Object(r.jsx)(b,{load:s})]})};c(43);var v=function(){return Object(r.jsxs)("div",{className:"before",children:[Object(r.jsx)("h1",{children:"Task-2 "}),Object(r.jsx)("h3",{children:"Fetch Data From API And Display."})]})};c(44);var x=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)(d,{clickedInNav:function(e){s(e)}}),!c&&Object(r.jsx)(v,{}),Object(r.jsx)(O,{click:c})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),f()}},[[45,1,2]]]);
//# sourceMappingURL=main.f77ee4f7.chunk.js.map