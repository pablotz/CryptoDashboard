(this.webpackJsonpcyptodash=this.webpackJsonpcyptodash||[]).push([[0],{16:function(e,t,c){},23:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(17),r=c.n(s),i=c(18),o=c(3),l=(c(23),c(7)),u=c.n(l),j=(c(16),c(42),c(0)),d=function(e){var t=e.name,c=e.image,n=e.symbol,s=e.price,r=(e.volume,e.priceChange),i=(e.marketcap,e.likedCrypto),l=e.dislikedCrypto,u=e.id,d=e.like,p=Object(a.useState)(!1),b=Object(o.a)(p,2),m=b[0],f=b[1];return Object(j.jsx)("div",{className:"coin-container hvr-bounce-in",children:Object(j.jsxs)("div",{className:"coin-card",children:[Object(j.jsxs)("div",{className:"coin",children:[1==m||1==d?Object(j.jsx)("button",{className:"like-btn",onClick:function(){l(t,u),f(!1)},children:Object(j.jsx)("i",{class:"fas fa-star fa-2x"})}):Object(j.jsx)("button",{className:"like-btn",onClick:function(){i(t,u),f(!0)},children:Object(j.jsx)("i",{class:"far fa-star fa-2x"})}),Object(j.jsx)("img",{src:c,alt:"crypto",className:"coinimg"}),t.length<=12?Object(j.jsx)("h1",{className:"coin-name",children:t}):Object(j.jsx)("h1",{className:"coin-name sm-txt",children:t})]}),Object(j.jsxs)("div",{className:"coin-data",children:[Object(j.jsxs)("p",{className:"coin-symbol",children:["$",n.toUpperCase()]}),Object(j.jsxs)("p",{className:"coin-price",children:["$",s]}),r<0?Object(j.jsxs)("p",{className:"coin-percent red",children:[r.toFixed(2),"%"]}):Object(j.jsxs)("p",{className:"coin-percent green",children:[r.toFixed(2),"%"]})]})]})})};var p=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(o.a)(s,2),l=r[0],p=r[1],b=Object(a.useState)("usd"),m=Object(o.a)(b,2),f=m[0],h=m[1],O=Object(a.useState)([]),x=Object(o.a)(O,2),v=x[0],g=x[1],k=Object(a.useState)(!1),N=Object(o.a)(k,2),y=N[0],C=N[1],S=Object(a.useState)([]),_=Object(o.a)(S,2),I=(_[0],_[1]),E=function(e,t){g([].concat(Object(i.a)(v),[e]))},J=function(e){var t=v.filter((function(t){return t!==e}));g(t)},w=function(){C(!0);I([])},L=function(){C(!1)};Object(a.useEffect)((function(){U()}),[]),Object(a.useEffect)((function(){localStorage.setItem("cryptos",JSON.stringify(v))}),[v]),Object(a.useEffect)((function(){var e="";return e=y?setInterval((function(){u.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency="+f+"&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){var t=e.data.filter((function(e){return v.includes(e.name)})),c=JSON.parse(localStorage.getItem("cryptos"));t.forEach((function(e){return c.some((function(t){return t==e.name?e.like=!0:e.like=!1,t==e.name})),e})),n(t)})).catch((function(e){return console.log(e)}))}),1e3):setInterval((function(){u.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency="+f+"&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){var t=JSON.parse(localStorage.getItem("cryptos"));e.data.forEach((function(e){return t.some((function(t){return t==e.name?e.like=!0:e.like=!1,t==e.name})),e})),n(e.data)})).catch((function(e){return console.log(e)}))}),1e3),function(){return clearInterval(e)}}),[f,y]);var U=function(){if(null===localStorage.getItem("cryptos"))localStorage.setItem("cryptos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("cryptos"));g(e)}},B=c.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())||e.symbol.toLowerCase().includes(l.toLowerCase())}));return Object(j.jsxs)("div",{className:"app-container",children:[Object(j.jsx)("div",{className:"title-app",children:Object(j.jsxs)("h1",{className:"title-text",children:["Dashboard  ",Object(j.jsx)("a",{class:"link",href:"#",children:" Crypto Currency"})]})}),Object(j.jsxs)("div",{className:"coin-search",children:[Object(j.jsx)("div",{className:"input-search",children:Object(j.jsx)("input",{type:"text",name:"",className:"user-box",required:"",placeholder:"Search crypto",onChange:function(e){p(e.target.value)}})}),Object(j.jsx)("div",{className:"select",children:Object(j.jsxs)("select",{name:"slct",id:"slct",value:f,onChange:function(e){h(e.target.value)},children:[Object(j.jsx)("option",{selected:!0,disabled:!0,children:"Choose a currency"}),Object(j.jsx)("option",{value:"usd",children:"USD"}),Object(j.jsx)("option",{value:"mxn",children:"MXN"}),Object(j.jsx)("option",{value:"eur",children:"EUR"})]})}),Object(j.jsxs)("div",{className:"filter-favorites",children:[1==y?Object(j.jsx)("span",{className:"favorite-text",onClick:function(){return L()},children:"Back to all"}):Object(j.jsx)("span",{className:"favorite-text",onClick:function(){return w()},children:"See favorites"}),1==y?Object(j.jsx)("button",{className:"favorites",onClick:function(){return L()},children:Object(j.jsx)("i",{class:"fas fa-star fa-2x"})}):Object(j.jsx)("button",{className:"favorites",onClick:function(){return w()},children:Object(j.jsx)("i",{class:"far fa-star fa-2x"})})]})]}),Object(j.jsx)("div",{className:"coin-app",children:B.map((function(e){return Object(j.jsx)(d,{name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price,priceChange:e.price_change_percentage_24h,volume:e.total_volume,id:e.id,like:e.like,likedCrypto:E,dislikedCrypto:J},e.id)}))})]})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.bbaadbf9.chunk.js.map