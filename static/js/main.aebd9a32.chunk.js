(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c,s=n(6),o=n.n(s),a=n(4),r=n(7),u=n(1),i=(n(12),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.NONE="NONE",t.ALPABET="ALPABET",t.LENGTH="LENGTH"}(c||(c={}));var l=function(){var t=Object(u.useState)(!1),e=Object(a.a)(t,2),n=e[0],s=e[1],o=Object(u.useState)(!1),l=Object(a.a)(o,2),p=l[0],j=l[1],O=Object(u.useState)(c.NONE),h=Object(a.a)(O,2),N=h[0],d=h[1],m=function(t,e,n){var s=Object(r.a)(t);switch(e){case c.ALPABET:s.sort((function(t,e){return t.localeCompare(e)}));break;case c.LENGTH:s.sort((function(t,e){return t.length-e.length}))}return n?s.reverse():s}(b,N,p);return Object(i.jsxs)("div",{className:"App",children:[!n&&Object(i.jsx)("button",{className:"App__button",type:"button",onClick:function(){s(!n)},children:"Start"}),n&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"App__buttons",children:[Object(i.jsx)("button",{className:"App__button",type:"button",onClick:function(){d(c.ALPABET)},children:"Sort alphabetically"}),Object(i.jsx)("button",{className:"App__button",type:"button",onClick:function(){d(c.LENGTH)},children:"Sort by length"}),Object(i.jsx)("button",{className:"App__button",type:"button",onClick:function(){j(!p)},children:"Reverse"}),Object(i.jsx)("button",{className:"App__button App__button--reset",type:"button",onClick:function(){j(!1),d(c.NONE)},children:"Reset"})]}),Object(i.jsx)("ul",{className:"Goods",children:m.map((function(t){return Object(i.jsx)("li",{className:"Goods__item",children:t},t)}))})]})]})};o.a.render(Object(i.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.aebd9a32.chunk.js.map