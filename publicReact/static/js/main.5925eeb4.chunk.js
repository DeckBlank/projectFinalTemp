(this.webpackJsonpfrontendreact=this.webpackJsonpfrontendreact||[]).push([[0],{29:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(7),r=c.n(n),a=c(23),s=c(16),o=function(){var e=Object(s.a)(r.a.mark((function e(t,c,n){var s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s={method:c,headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(a.a)({},n))},e.t0=c.toLowerCase(),e.next="get"===e.t0?4:"delete"===e.t0?7:10;break;case 4:case 7:return delete s.headers,delete s.body,e.abrupt("break",10);case 10:return e.prev=10,e.next=13,fetch(t,s);case 13:return o=e.sent,e.abrupt("return",o.json());case 17:return e.prev=17,e.t1=e.catch(10),console.log(e.t1),e.abrupt("return",!1);case 21:case"end":return e.stop()}}),e,null,[[10,17]])})));return function(t,c,n){return e.apply(this,arguments)}}()},57:function(e,t,c){},58:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(49),s=c.n(a),o=(c(57),c(58),c(0));var i=function(){return Object(o.jsx)("header",{className:"content",children:Object(o.jsx)("h1",{children:"Coderhouse"})})},l=c(22),j=c(2),d=c(7),b=c.n(d),u=c(16),h=c(17),O=c(29),m=c(50),p=c.n(m)()(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).URL,{path:"/socket.io"});var x=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(h.a)(a,2),i=s[0],l=s[1];p.on("connect",(function(e){console.log("Sesion: ".concat(p.id)),p.on(p.id,(function(e){console.log(e)}))})),Object(n.useEffect)(Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)("/api/productos","get",{});case 2:(t=e.sent).error?l(t):r(t);case 4:case"end":return e.stop()}}),e)}))),[]);var j=Object(n.useState)(""),d=Object(h.a)(j,2),m=d[0],x=d[1];p.on("resp-chat",(function(e){var t="";e.forEach((function(e){t="".concat(t,"\n").concat(e.email,"-").concat(new Date(e.fecha).toLocaleString(),": ").concat(e.mensaje)})),console.log(t),x(t)})),Object(n.useEffect)(Object(u.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)("/chat","get",{});case 2:t=e.sent,console.log(t),c="",t.forEach((function(e){c="".concat(c,"\n").concat(e.email,"-").concat(new Date(e.fecha).toLocaleString(),": ").concat(e.mensaje)})),console.log(c),x(c);case 8:case"end":return e.stop()}}),e)}))),[]),p.on("mensaje",(function(e){e,r(e),l(!1)})),p.on("error",(function(e){alert(e.message)}));var f=Object(n.useState)(""),v=Object(h.a)(f,2),g=v[0],N=v[1];function y(){return(y=Object(u.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("#email").value,e.next=3,p.emit("registrarse",t);case 3:c=e.sent,console.log(c),alert("email aceptado"),N(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=Object(n.useState)(""),w=Object(h.a)(S,2);return w[0],w[1],Object(o.jsxs)("main",{className:"content",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{children:Object(o.jsx)("textarea",{style:{height:"200px"},className:"form-control",value:m})}),""===g?Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{placeholder:"Email",id:"email"})," ",Object(o.jsx)("button",{onClick:function(){return y.apply(this,arguments)},children:"Registrar"})]}):Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{placeholder:"Mensaje",id:"mensaje"})," ",Object(o.jsx)("button",{onClick:function(){var e=document.querySelector("#mensaje").value;console.log("enviamos",e),p.emit("chat",e)},children:"Enviar"})]})]}),Object(o.jsx)("div",{className:"row",children:i?Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"error",children:i.error})}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Vista de productos"}),Object(o.jsxs)("table",{className:"table table-dark table-striped",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"#"}),Object(o.jsx)("th",{scope:"col",children:"Nombre"}),Object(o.jsx)("th",{scope:"col",children:"Precio"}),Object(o.jsx)("th",{scope:"col",children:"Foto"})]})}),Object(o.jsx)("tbody",{children:c.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{scope:"row",children:t+1}),Object(o.jsx)("td",{children:e.title}),Object(o.jsx)("td",{children:e.price}),Object(o.jsx)("td",{children:Object(o.jsx)("img",{className:"image",src:e.tumbnails,alt:e.title})})]})}))})]})]})})]})},f=c(23);var v=function(e){var t=e.id,c=e.label,n=e.type,r=e.placeholder;return Object(o.jsxs)("div",{className:"col-md-12",children:[Object(o.jsx)("label",{htmlFor:t,className:"form-label",children:c}),Object(o.jsx)("input",{id:t,className:"form-control",type:n,placeholder:r,name:t})]})};var g=function(){return Object(n.useEffect)((function(){c.e(3).then(c.bind(null,97)).then((function(e){e.myForm}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Ingrese Producto"}),Object(o.jsxs)("form",{className:"row g-3",id:"myForm",children:[Object(o.jsxs)("div",{className:"col-md-12",children:[Object(o.jsx)("label",{htmlFor:"inputEmail4",className:"form-label",children:"Acci\xf3n"}),Object(o.jsxs)("select",{name:"metodo",className:"form-control",id:"select",children:[Object(o.jsx)("option",{value:"post",children:"Crear"}),Object(o.jsx)("option",{value:"put",children:"Actualizar"}),Object(o.jsx)("option",{value:"delete",children:"Eliminar"})]})]}),[{id:"id",label:"ID",type:"text",placeholder:"0"},{id:"title",label:"Nombre",type:"text",placeholder:"Calculadora"},{id:"price",label:"Precio",type:"number",placeholder:"123456"},{id:"tumbnails",label:"Foto URL",type:"text",placeholder:"https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-512.png"}].map((function(e){return Object(o.jsx)(v,Object(f.a)({},e),e.id)})),Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Enviar"})})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(x,{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)(l.b,{className:"btn btn-warning",to:"/productos",children:"Ver Productos"})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})};var N=function(){return Object(o.jsx)("main",{className:"content",children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:g}),Object(o.jsx)(j.a,{exact:!0,path:"/productos",component:x})]})})};var y=function(){return Object(o.jsx)("footer",{className:"content",children:"2021"})};var S=function(){return Object(o.jsxs)(o.Fragment,{children:[" ",Object(o.jsx)(i,{}),Object(o.jsx)(N,{}),Object(o.jsx)(y,{})]})},w=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,96)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root")),w()}},[[95,1,2]]]);