(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{100:function(e,t,n){e.exports={error:"Registration_error__1PcbB"}},101:function(e,t,n){e.exports={header:"Header_header__3Bcrf"}},103:function(e,t,n){e.exports=n.p+"static/media/user.93a57c9f.png"},104:function(e,t,n){e.exports={avatar:"profile_avatar__2tPc2"}},106:function(e,t,n){e.exports=n(348)},111:function(e,t,n){},112:function(e,t,n){},31:function(e,t,n){e.exports={default:"Button_default__3Uriw",primary:"Button_primary__8KPpr",danger:"Button_danger__14GBt",load:"Button_load__1LC-H"}},348:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(41),c=n.n(o),u=(n(111),n(112),n(17)),i=n(8),s=n(23),l=n(9),d=n(11),p=n.n(d),m=n(25),b=n(6),g=n(99),E=n.n(g).a.create({baseURL:"http://localhost:7542/1.0/"}),f=function(e,t,n){return E.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e}))},h={buttonName:"Sign in",buttonType:["primary","danger"],loading:!1,inputType:["text","password","checkbox"],isAuth:!1,error:"",userName:"",token:""},v=function(e){return{type:"login/SET_SUCCESS",isAuth:e}},y=function(e){return{type:"login/SET_ERROR",error:e}},O=function(e){return{type:"login/SET_LOADING",loading:e}},_=function(e){return{type:"SET_USER_NAME",userName:e}},T=function(e){return{type:"SET_TOKEN",token:e}},S=function(e){return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("input",{onChange:e.onChange,type:e.inputType,value:e.value})))},j=n(31),A=n.n(j),w=function(e){var t,n="";return"primary"===e.buttonType&&(n=A.a.primary),"danger"===e.buttonType&&(n=A.a.danger),e.loading&&(t=a.a.createElement("img",{alt:"loading",className:A.a.load,src:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"})),e.loading&&(n=A.a.primary),a.a.createElement("div",null,a.a.createElement("button",{disabled:e.buttonDisabled,className:A.a.default+" "+n,onClick:e.onClick},t," ",e.buttonName))},k=n(56),N=n.n(k),R=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(""),d=Object(s.a)(c,2),b=d[0],g=d[1],E=Object(r.useState)(!1),h=Object(s.a)(E,2),j=h[0],A=h[1],k=Object(r.useCallback)((function(e){return o(e.currentTarget.value)}),[o]),R=Object(r.useCallback)((function(e){return g(e.currentTarget.value)}),[g]),C=Object(r.useCallback)((function(e){return A(e.currentTarget.checked)}),[A]),x=Object(l.d)((function(e){return e.login})),P=Object(l.c)(),B=Object(r.useCallback)((function(){return P(function(e,t,n){return function(){var r=Object(m.a)(p.a.mark((function r(a){var o;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(O(!0)),r.prev=1,r.next=4,f(e,t,n);case 4:(o=r.sent).data&&(a(v(!0)),a(O(!1)),a(_(o.data.name)),a(T(o.data.token))),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(1),a(O(!1)),a(y(r.t0.response.data.error));case 12:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}()}(n,b,j))}),[n,b,j,P]);if(x.isAuth)return a.a.createElement(i.a,{to:"/profile"});var I=""!==x.error?N.a.errorLogin:"",L=!!x.loading;return a.a.createElement("form",null,a.a.createElement("div",{className:N.a.errorText},x.error),a.a.createElement("div",{className:I},"Login ",a.a.createElement(S,{onChange:k,value:x.value,inputType:x.inputType[0]})),a.a.createElement("div",{className:I},"Password ",a.a.createElement(S,{onChange:R,value:x.value,inputType:x.inputType[1]})),a.a.createElement("div",null,"Remember me ",a.a.createElement(S,{onChange:C,value:x.value,inputType:x.inputType[2]})),a.a.createElement("div",null,a.a.createElement(u.b,{to:"/restorePassword"},"Forgot password?")),a.a.createElement(w,{buttonDisabled:L,onClick:B,loading:x.loading,buttonType:""!==x.error?x.buttonType[1]:x.buttonType[0],buttonName:x.buttonName}))},C=function(e,t){return E.post("auth/register",{email:e,password:t}).then((function(e){return e.data}))},x={buttonName:"Sign up",buttonType:["primary","danger"],loading:!1,inputType:["text","password"],isAuth:!1,serverAnswer:""},P="REGISTRATION/IS_FETCHING",B="REGISTRATION/IS_USER_AUTH",I=function(e){return{type:P,loading:e}},L=function(e){return{type:"REGISTRATION/SET_SERVER_ANSWER",serverAnswer:e}},G=n(100),D=n.n(G),U=function(){var e=Object(l.d)((function(e){return e.registration})),t=Object(l.c)(),n=Object(r.useState)("oxa@gmail.com"),o=Object(s.a)(n,2),c=o[0],u=o[1],d=Object(r.useState)("!12345!123"),b=Object(s.a)(d,2),g=b[0],E=b[1],f=Object(r.useCallback)((function(e){u(e.currentTarget.value)}),[u]),h=Object(r.useCallback)((function(e){E(e.currentTarget.value)}),[E]),v=Object(r.useCallback)((function(){return t(function(e,t){return function(){var n=Object(m.a)(p.a.mark((function n(r){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(I(!0)),n.next=3,C(e,t);case 3:!0===n.sent.success?(r(I(!1)),r({type:B,isAuth:!0}),r(L("ok"))):(r(L("some error")),console.log("Such a user has already been created"),r(I(!1)));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(c,g))}),[c,g,t]),y=!!e.loading;return e.isAuth?a.a.createElement(i.a,{to:"/login"}):a.a.createElement("div",null,a.a.createElement("div",null,"Your e-mail ",a.a.createElement(S,{onChange:f,value:c,inputType:e.inputType[0]})),a.a.createElement("div",null,"Your password ",a.a.createElement(S,{onChange:h,value:g,inputType:e.inputType[1]})),a.a.createElement("div",null,g.length<=7&&a.a.createElement("span",{className:D.a.error},"Password length must be more then 7")),"some error"===e.serverAnswer&&a.a.createElement("span",null,e.serverAnswer),a.a.createElement(w,{buttonDisabled:y,onClick:v,loading:e.loading,buttonType:""!==e.serverAnswer?e.buttonType[1]:e.buttonType[0],buttonName:e.buttonName}))},W=n(101),K=n.n(W),z=function(){Object(l.d)((function(e){return e.login}));return a.a.createElement("div",{className:K.a.header},a.a.createElement("div",null,a.a.createElement(u.b,{to:"/login"}," Sign in ")," |",a.a.createElement(u.b,{to:"/registration"}," Sign up ")))},H=n(102),M=n.n(H),V=function(e){return E.post("auth/forgot",{email:e,html1:"<a href='http://localhost:3000/cards#/restorePassword/",html2:"'>reset-password-link</a>"}).then((function(e){return e.data}))},Y={buttonName:"Send password",buttonType:["primary","danger"],loading:!1,inputType:["text","password"],isAuth:!1,serverAnswer:""},F=function(e){return{type:"RESTORE_PASSWORD/SET_SERVER_ANSWER",serverAnswer:e}},J=function(){var e=Object(l.d)((function(e){return e.restore})),t=Object(l.c)(),n=Object(r.useState)(""),o=Object(s.a)(n,2),c=o[0],i=o[1],d=Object(r.useCallback)((function(e){i(e.currentTarget.value)}),[i]),b=!!e.loading;return a.a.createElement("div",null,"Enter your e-mail ",a.a.createElement(S,{onChange:d,value:e.value,inputType:e.inputType[0]}),a.a.createElement(u.b,{to:"/login"}," ",a.a.createElement(w,{buttonDisabled:b,onClick:function(){t(function(e){return function(){var t=Object(m.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V(e);case 2:t.sent.success?n(F("ok")):n(F("some error"));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(c))},loading:e.loading,buttonType:e.buttonType,buttonName:e.buttonName})))},X=n(103),Q=n.n(X),$=n(104),q=n.n($),Z=function(){var e=Object(l.d)((function(e){return e.login.userName}));return a.a.createElement("div",null,a.a.createElement("img",{className:q.a.avatar,alt:"user",src:Q.a})," ",e,a.a.createElement(u.b,{to:"/cards"}," Cards "))},ee=function(e){return E.get("cards/pack&token=".concat(e)).then((function(e){return e}))},te={cardPacks:[]},ne=function(){var e=Object(l.d)((function(e){return e.cards.cardPacks})),t=Object(l.d)((function(e){return e.login.token})),n=Object(l.c)();return a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){n(function(e){return function(){var t=Object(m.a)(p.a.mark((function t(n){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ee(e);case 2:r=t.sent,n({type:"GET_CARD_PACKS",cardPacks:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}},"Get cards"),e)},re=Object(l.b)((function(e){return{isAuthByLogin:e.login.isAuth,isAuthByRestore:e.restore.isAuth,isAuthByRegistration:e.registration.isAuth}}),{})((function(e){var t=e.isAuthByLogin||e.isAuthByRegistration||e.isAuthByRestore;return a.a.createElement("div",{className:"App"},a.a.createElement(u.a,null,a.a.createElement(M.a,{className:"particles",params:{particles:{number:{value:50,density:{enable:!0,value_area:800}},color:{value:"#715858"},line_linked:{enable:!0,distance:150,color:"#E6E6FA",opacity:.4,width:1},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},size:{value:20,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}}}}}),a.a.createElement(z,null),a.a.createElement(i.b,{path:"/login",component:R}),a.a.createElement(i.b,{path:"/registration",component:U}),a.a.createElement(i.b,{path:"/restorePassword",component:J}),a.a.createElement(i.b,{path:"/profile",component:Z}),a.a.createElement(i.b,{path:"/cards",component:ne}),!t&&a.a.createElement("div",{className:"main"},a.a.createElement("span",{className:"welcome"}," Welcome to ANOX! "),a.a.createElement("div",null,"Study different things with us!"))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=n(30),oe={userId:"1",userName:"Oxana"},ce=n(105),ue=Object(ae.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{isAuth:t.isAuth,loading:!1,error:""});case"login/SET_ERROR":return Object(b.a)(Object(b.a)({},e),{},{error:t.error,loading:!1,isAuth:!1});case"login/SET_LOADING":return Object(b.a)(Object(b.a)({},e),{},{error:"",loading:t.loading,isAuth:!1});case"SET_USER_NAME":return Object(b.a)(Object(b.a)({},e),{},{userName:t.userName});case"SET_TOKEN":return Object(b.a)(Object(b.a)({},e),{},{token:t.token});default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(b.a)(Object(b.a)({},e),{},{loading:t.loading});case B:return Object(b.a)(Object(b.a)({},e),{},{isAuth:t.isAuth});case"REGISTRATION/SET_SERVER_ANSWER":return Object(b.a)(Object(b.a)({},e),{},{serverAnswer:t.serverAnswer});default:return e}},restore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESTORE_PASSWORD/SET_SERVER_ANSWER":return Object(b.a)(Object(b.a)({},e),{},{serverAnswer:t.serverAnswer});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_NAME":return Object(b.a)(Object(b.a)({},e),{},{userName:t.userName});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CARD_PACKS":return Object(b.a)(Object(b.a)({},e),{},{cardPacks:t.cardPacks});default:return e}}}),ie=Object(ae.d)(ue,Object(ae.a)(ce.a));c.a.render(a.a.createElement(l.a,{store:ie},a.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,t,n){e.exports={errorLogin:"Login_errorLogin__3BSRQ",errorText:"Login_errorText__2vKpa",formSummaryError:"Login_formSummaryError__2jPBp"}}},[[106,1,2]]]);
//# sourceMappingURL=main.3a4f3bcd.chunk.js.map