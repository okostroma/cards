(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{26:function(e,t,n){e.exports={default:"Button_default__2jSKj",primary:"Button_primary__1DPcd",danger:"Button_danger__-kexo",load:"Button_load__2ZywC"}},315:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(37),r=n.n(i),u=(n(95),n(96),n(14)),l=n(7),s=n(10),c=n(26),p=n.n(c),m=function(e){var t,n="";return"primary"===e.buttonType&&(n=p.a.primary),"danger"===e.buttonType&&(n=p.a.danger),e.loading&&(t=o.a.createElement("img",{alt:"loading",className:p.a.load,src:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"})),e.loading&&(n=p.a.primary),o.a.createElement("div",null,o.a.createElement("button",{className:p.a.default+" "+n,onClick:e.onClick},t," ",e.buttonName))},d=function(e){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("input",{onChange:e.onChange,type:e.inputType,value:e.value})))},g=Object(s.b)((function(e){return{buttonName:e.login.buttonName,buttonType:e.login.buttonType[0],loading:e.login.loading,inputType:e.login.inputType,value:e.login.value,isAuth:e.login.isAuth}}),null)((function(e){var t=function(){},n=function(){};return o.a.createElement("div",null,o.a.createElement("div",null,"Login ",o.a.createElement(d,{onChange:n,value:e.value,inputType:e.inputType[0]})),o.a.createElement("div",null,"Password ",o.a.createElement(d,{onChange:n,value:e.value,inputType:e.inputType[1]})),o.a.createElement("div",null,o.a.createElement(u.b,{to:"/restorePassword"},"Forgot password?")),e.isAuth?o.a.createElement(u.b,{to:"/profile"},o.a.createElement(m,{onClick:t,loading:e.loading,buttonType:e.buttonType,buttonName:e.buttonName})):o.a.createElement(m,{onClick:t,loading:e.loading,buttonType:e.buttonType,buttonName:e.buttonName}))})),b=Object(s.b)((function(e){return{buttonName:e.registration.buttonName,buttonType:e.registration.buttonType[0],loading:e.registration.loading,inputType:e.registration.inputType,value:e.registration.value,isAuth:e.registration.isAuth}}),null)((function(e){var t=function(){},n=function(){};return o.a.createElement("div",null,o.a.createElement("div",null,"Your name ",o.a.createElement(d,{onChange:n,value:e.value,inputType:e.inputType[0]})),o.a.createElement("div",null,"Your e-mail ",o.a.createElement(d,{onChange:n,value:e.value,inputType:e.inputType[0]})),o.a.createElement("div",null,"Your password ",o.a.createElement(d,{onChange:n,value:e.value,inputType:e.inputType[1]})),e.isAuth?o.a.createElement(u.b,{to:"/profile"},o.a.createElement(m,{onClick:t,loading:e.loading,buttonType:e.buttonType,buttonName:e.buttonName})):o.a.createElement(m,{onClick:t,loading:e.loading,buttonType:e.buttonType,buttonName:e.buttonName}))})),y=n(86),v=n.n(y),h=Object(s.b)((function(e){return{isAuthByLogin:e.login.isAuth,isAuthByRestore:e.restore.isAuth,isAuthByRegistration:e.registration.isAuth}}),{})((function(e){var t=e.isAuthByLogin||e.isAuthByRegistration||e.isAuthByRestore;return o.a.createElement("div",null,!t&&o.a.createElement("div",{className:v.a.header},o.a.createElement(u.b,{to:"/login"}," Sign in ")," |",o.a.createElement(u.b,{to:"/registration"}," Sign up ")))})),E=n(87),f=n.n(E),T=Object(s.b)((function(e){return{buttonName:e.restore.buttonName,buttonType:e.restore.buttonType[0],loading:e.restore.loading,inputType:e.restore.inputType,value:e.restore.value,isAuth:e.restore.isAuth}}),null)((function(e){return o.a.createElement("div",null,"Enter your e-mail ",o.a.createElement(d,{onChange:function(){},value:e.value,inputType:e.inputType[0]}),o.a.createElement(u.b,{to:"/login"}," ",o.a.createElement(m,{onClick:function(){},loading:e.loading,buttonType:e.buttonType,buttonName:e.buttonName})))})),N=n(88),A=n.n(N),_=n(89),w=n.n(_),k=Object(s.b)((function(e){return{userId:e.profile.userId,userName:e.profile.userName}}),{})((function(e){return o.a.createElement("div",null,o.a.createElement("img",{className:w.a.avatar,alt:"user",src:A.a})," ",e.userName)})),B=Object(s.b)((function(e){return{isAuthByLogin:e.login.isAuth,isAuthByRestore:e.restore.isAuth,isAuthByRegistration:e.registration.isAuth}}),{})((function(e){var t=e.isAuthByLogin||e.isAuthByRegistration||e.isAuthByRestore;return o.a.createElement("div",{className:"App"},o.a.createElement(u.a,null,o.a.createElement(f.a,{className:"particles",params:{particles:{number:{value:50,density:{enable:!0,value_area:800}},color:{value:"#715858"},line_linked:{enable:!0,distance:150,color:"#E6E6FA",opacity:.4,width:1},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},size:{value:20,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}}}}}),o.a.createElement(h,null),o.a.createElement(l.a,{path:"/login",component:g}),o.a.createElement(l.a,{path:"/registration",component:b}),o.a.createElement(l.a,{path:"/restorePassword",component:T}),o.a.createElement(l.a,{path:"/profile",component:k}),!t&&o.a.createElement("div",{className:"main"},o.a.createElement("span",{className:"welcome"}," Welcome to ANOX! "),o.a.createElement("div",null,"Study different things with us!"))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=n(29),j={buttonName:"Sign in",buttonType:["primary","danger"],loading:!1,inputType:["text","password"],isAuth:!1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;return e},O={buttonName:"Sign up",buttonType:["primary","danger"],loading:!1,inputType:["text","password"],isAuth:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;return e},S={buttonName:"Send password",buttonType:["primary","danger"],loading:!1,inputType:["text","password"],isAuth:!1},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;return e},L={userId:"1",userName:"Oxana"},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;return e},z=Object(C.b)({login:x,registration:R,restore:I,profile:Y}),P=Object(C.c)(z);r.a.render(o.a.createElement(s.a,{store:P},o.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,n){e.exports={header:"Header_header__3Bcrf"}},88:function(e,t,n){e.exports=n.p+"static/media/user.93a57c9f.png"},89:function(e,t,n){e.exports={avatar:"profile_avatar__ikWHI"}},90:function(e,t,n){e.exports=n(315)},95:function(e,t,n){},96:function(e,t,n){}},[[90,1,2]]]);
//# sourceMappingURL=main.0fac3c14.chunk.js.map