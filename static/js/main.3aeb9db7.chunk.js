(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={form:"ContactForm_form___A5Sl",btn:"ContactForm_btn__OstSP"}},20:function(t,e,n){t.exports={container:"Section_container__3GCct",title:"Section_title__Kh-yg"}},21:function(t,e,n){t.exports={title:"PageTitle_title__2p2RN"}},22:function(t,e,n){t.exports={title:"Title_title__M6SFI"}},25:function(t,e,n){t.exports={filter:"Filter_filter__2SlGE"}},41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),i=n(8),o=n.n(i),s=n(5),l=n(9),u=n(3),b=n(17),j=n.n(b),d=n(4),f=n(18),h=n.n(f),m=n(6),O=n(2),p=Object(u.b)("phonebook/add"),x=Object(u.b)("phonebook/delete"),_=Object(u.b)("phonebook/updateFilter"),v=Object(u.c)([],(c={},Object(m.a)(c,p,(function(t,e){return[e.payload].concat(Object(l.a)(t))})),Object(m.a)(c,x,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),g=Object(u.c)("",Object(m.a)({},_,(function(t,e){return e.payload}))),C=Object(O.c)({items:v,filter:g}),k=[].concat(Object(l.a)(Object(u.d)({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}})),[h.a]),y={key:"phonebook",storage:j.a,blacklist:["filter"]},N=Object(u.a)({reducer:{contacts:Object(d.g)(y,C)},middleware:k,devTools:!1}),S=Object(d.h)(N),w=n(19),F=n(20),L=n.n(F),A=n(1),P=function(t){var e=t.children;return Object(A.jsx)("section",{children:Object(A.jsx)("div",{className:L.a.container,children:e})})},I=n(21),D=n.n(I),T=function(t){var e=t.title;return e&&Object(A.jsx)("h1",{className:D.a.title,children:e})};T.defaultProps={title:""};var q=T,B=n(22),M=n.n(B),V=function(t){var e=t.title;return e&&Object(A.jsx)("h2",{className:M.a.title,children:e})};V.defaultProps={title:""};var E=V,G=n(23),H=n(24),J=n(27),U=n(26),z=n(44),K=n(14),R=n.n(K),Y=function(t){Object(J.a)(n,t);var e=Object(U.a)(n);function n(){var t;Object(G.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(m.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=Object(z.a)(),c=t.state,a=c.name,r=c.number;if(a){var i=t.props.state.contacts.items.find((function(t){return t.name===a}));if(i)alert("".concat(i.name," is already in contacts."));else{var o={id:n,name:a,number:r};t.props.submitHandler(o),t.reset()}}},t.reset=function(){t.setState({name:"",number:""})},t}return Object(H.a)(n,[{key:"render",value:function(){return Object(A.jsxs)("form",{className:R.a.form,onSubmit:this.handleSubmit,children:[Object(A.jsxs)("label",{children:["Name",Object(A.jsx)("input",{type:"name",name:"name",value:this.state.name,onChange:this.handleInputChange,required:!0})]}),Object(A.jsxs)("label",{children:["Number",Object(A.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleInputChange,required:!0})]}),Object(A.jsx)("button",{type:"submit",className:R.a.btn,children:"Add"})]})}}]),n}(a.Component),Q=Object(s.b)((function(t){return{state:t}}),(function(t){return{submitHandler:function(e){return t(p(e))}}}))(Y),W=n(25),X=n.n(W),Z=function(t){var e=t.filterValue,n=t.filterUpdate;return Object(A.jsx)("div",{className:X.a.filter,children:Object(A.jsxs)("label",{children:["Find contacts by name",Object(A.jsx)("input",{type:"text",name:"filter",value:e,onChange:n,autoComplete:"off",required:!0})]})})};Z.defaultProps={filterValue:""};var $=Object(s.b)((function(t){return{filterValue:t.contacts.filter}}),(function(t){return{filterUpdate:function(e){return t(_(e.target.value))}}}))(Z),tt=n(7),et=n.n(tt),nt=Object(s.b)((function(t){return{filtered:t.contacts.items.filter((function(e){var n=e.name,c=e.number;return n.toLowerCase().includes(t.contacts.filter.toLocaleLowerCase())||c.includes(t.contacts.filter)}))}}),(function(t){return{onDeleteContact:function(e){return t(x(e))}}}))((function(t){var e=t.filtered,n=t.onDeleteContact;return Object(A.jsx)("ul",{className:et.a.contacts,children:e.length?e.map((function(t){return Object(A.jsxs)("li",{className:et.a.item,children:[Object(A.jsxs)("div",{children:[Object(A.jsxs)("p",{children:[t.name,":"]}),Object(A.jsx)("p",{children:t.number})]}),Object(A.jsx)("button",{className:et.a.btn,onClick:function(){n(t.id)},children:"Delete"})]},t.id)})):Object(A.jsx)("li",{className:et.a.notification,children:"No contact found."})})})),ct=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(q,{title:"Phone Book"}),Object(A.jsxs)(P,{children:[Object(A.jsx)(E,{title:"Add contacts"}),Object(A.jsx)(Q,{}),Object(A.jsx)(E,{title:"\u0421ontacts"}),Object(A.jsx)($,{}),Object(A.jsx)(nt,{})]})]})};n(40),n(41);o.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(s.a,{store:N,children:Object(A.jsx)(w.a,{loading:"Loading...",persistor:S,children:Object(A.jsx)(ct,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={contacts:"ContactList_contacts__1MhiF",item:"ContactList_item__3BAxP",btn:"ContactList_btn__iASNk",notification:"ContactList_notification__2bp0Y"}}},[[42,1,2]]]);
//# sourceMappingURL=main.3aeb9db7.chunk.js.map