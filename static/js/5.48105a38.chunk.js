(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(151),r=n.n(o),a=n(3),s=function(e){var t=e.children;return Object(a.jsx)("div",{className:r.a.container,children:t})}},150:function(e,t,n){e.exports={"new-contact":"Section_new-contact__2BHkk",section:"Section_section__41vIk",sectionList:"Section_sectionList__mMIgS Section_section__41vIk"}},151:function(e,t,n){e.exports={container:"Container_container__WA20h"}},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(150),r=n.n(o),a=n(149),s=n(3),c=function(e){var t=e.nameForClass,n=e.children;return Object(s.jsx)("section",{className:r.a["".concat(t)],children:Object(s.jsx)(a.a,{children:n})})}},161:function(e,t,n){e.exports={buttonGoogle:"ButtonGoogleLogin_buttonGoogle__y9ODQ",logoWrapper:"ButtonGoogleLogin_logoWrapper__2zzs0"}},162:function(e,t,n){e.exports={form:"FormaLogIn_form__3BFuh",wrapperFormaLogIn:"FormaLogIn_wrapperFormaLogIn__3t783",buttonLog:"FormaLogIn_buttonLog__1ro7C",separator:"FormaLogIn_separator__3qhk-"}},181:function(e,t,n){"use strict";n.r(t);var o=n(55),r=n(175),a=n(183),s=(n(155),n(12)),c=n(0),i=n(160),l=n(7),u=n.n(l),g=n(19),p=n(161),j=n.n(p),b=n(3),d=function(){return Object(b.jsx)(i.GoogleLogin,{clientId:"1053058699180-rjbu64pbbnr3glt31ten2uj7p4uv0jrn.apps.googleusercontent.com",buttonText:"Log in with Google",onSuccess:function(e){console.log("Login Success: currentUser:",e.profileObj),function(e){var t=1e3*(e.tokenObj.expires_in||3300),n=function(){var o=Object(g.a)(u.a.mark((function o(){var r;return u.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.reloadAuthResponse();case 2:r=o.sent,t=1e3*(r.expires_in||3300),console.log("newAuthRes:",r),localStorage.setItem("authToken",r.id_token),setTimeout(n,t);case 7:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}}();setTimeout(n,t)}(e)},onFailure:function(e){console.log("Login failed: res:",e),alert("Failed to login. \ud83d\ude22 Please ping this to repo owner twitter.com/sivanesh_fiz")},isSignedIn:!0,render:function(e){return Object(b.jsxs)("button",{className:j.a.buttonGoogle,onClick:e.onClick,disabled:e.disabled,children:[Object(b.jsx)("div",{className:j.a.logoWrapper,children:Object(b.jsx)("img",{src:"https://img.icons8.com/color/50/000000/google-logo.png",width:"32",height:"32",alt:"logo google"})}),"Log in with Google"]})}})},h=n(25),m=n(162),_=n.n(m),f=function(){var e=Object(s.b)(),t=Object(c.useState)(""),n=Object(o.a)(t,2),i=n[0],l=n[1],u=Object(c.useState)(""),g=Object(o.a)(u,2),p=g[0],j=g[1],m=function(e){var t=e.target,n=t.id,o=t.value;switch(n){case"email":return l(o);case"password":return j(o);default:return}};return Object(b.jsx)("div",{className:_.a.wrapperFormaLogIn,children:Object(b.jsxs)(r.a,{onSubmit:function(t){t.preventDefault(),e(h.a.logIn({email:i,password:p})),l(""),j("")},children:[Object(b.jsxs)(r.a.Group,{className:"mb-3",children:[Object(b.jsx)(r.a.Label,{children:"Email address"}),Object(b.jsx)(r.a.Control,{type:"email",id:"email",value:i,onChange:m,placeholder:"Enter email"}),Object(b.jsx)(r.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(b.jsxs)(r.a.Group,{className:"mb-3",children:[Object(b.jsx)(r.a.Label,{children:"Password"}),Object(b.jsx)(r.a.Control,{type:"password",id:"password",value:p,onChange:m,placeholder:"Password"})]}),Object(b.jsx)(a.a,{className:_.a.buttonLog,type:"submit",children:"Log In"}),Object(b.jsx)("span",{className:_.a.separator,children:"Or"}),Object(b.jsx)(d,{})]})})},x=n(152);t.default=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(x.a,{nameForClass:"section",children:Object(b.jsx)(f,{})})})}}}]);
//# sourceMappingURL=5.48105a38.chunk.js.map