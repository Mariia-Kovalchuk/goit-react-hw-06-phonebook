(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={container:"Phonebook_container__8akPZ"}},20:function(t,e,n){t.exports={input:"Filter_input__2zsz5"}},33:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),o=n(9),s=n.n(o),i=n(17),b=n(3),u=n(11),l=n(4),j=n(5),d=n(18),m=n.n(d),O=n(12),f=n(2),p=n(35),h={addContact:Object(l.b)("phonebook/add",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(p.a)(),name:e,number:n}}})),deleteContact:Object(l.b)("phonebook/delete"),filterContacts:Object(l.b)("phonebook/filter")},x=Object(l.c)([],(c={},Object(O.a)(c,h.addContact,(function(t,e){var n=e.payload;return[].concat(Object(u.a)(t),[n])})),Object(O.a)(c,h.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),C=Object(l.c)("",Object(O.a)({},h.filterContacts,(function(t,e){return e.payload}))),_=Object(f.b)({items:x,filter:C}),v=Object(u.a)(Object(l.d)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),k={key:"contacts",storage:m.a,blacklist:["filter"]},N=Object(l.a)({reducer:{contacts:Object(j.g)(k,_)},middleware:v,devTools:!1}),g=Object(j.h)(N),y=n(19),L=n.n(y),I=n(1),w=function(t){var e=t.children;return Object(I.jsx)("div",{className:L.a.container,children:e})},z=n(16),A=function(t){return t.contacts.items},T=function(t){return t.contacts.filter},F=function(t){var e=A(t),n=T(t);return e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})).sort((function(t,e){return t.name>e.name?1:-1}))},S=n(8),J=n.n(S);var M=function(){var t=Object(a.useState)(""),e=Object(z.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(z.a)(r,2),s=o[0],i=o[1],u=Object(b.c)(A),l=Object(b.b)(),j=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":i(a);break;default:return}};return Object(I.jsxs)("form",{className:J.a.contactForm,onSubmit:function(t){t.preventDefault();var e={name:n,number:s};u.find((function(t){return n.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(n," is already exists")):u.find((function(t){return s===t.number}))?alert("".concat(s," is already exists")):l(h.addContact(e)),c(""),i("")},children:[Object(I.jsxs)("label",{children:[" Name",Object(I.jsx)("input",{className:J.a.input,type:"text",name:"name",value:n,onChange:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(I.jsxs)("label",{children:[" Number",Object(I.jsx)("input",{className:J.a.input,type:"tel",name:"number",value:s,onChange:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 5 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(I.jsx)("button",{type:"submit",className:J.a.button,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})},P=n(6),Z=n.n(P),q=function(){var t=Object(b.c)(F),e=Object(b.b)();return Object(I.jsx)("ul",{className:Z.a.contactsList,children:t.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(I.jsxs)("li",{className:Z.a.contactItem,children:[Object(I.jsxs)("span",{className:Z.a.listItem,children:[Object(I.jsx)("p",{className:Z.a.listItemText,children:c}),Object(I.jsx)("p",{className:Z.a.listItemText,children:a})]}),Object(I.jsx)("button",{type:"button",onClick:function(){return e(h.deleteContact(n))},className:Z.a.button,children:"Delete"})]},n)}))})},B=n(20),D=n.n(B),E=function(){var t=Object(b.c)(T),e=Object(b.b)();return Object(I.jsxs)("label",{children:["Find contacts by name",Object(I.jsx)("input",{type:"text",value:t,onChange:function(t){return e(h.filterContacts(t.target.value))},className:D.a.input})]})};var Q=function(){return Object(I.jsxs)(w,{children:[Object(I.jsx)("h1",{children:"Phonebook"}),Object(I.jsx)(M,{}),Object(I.jsx)("h2",{children:"Contacts"}),Object(I.jsx)(E,{}),Object(I.jsx)(q,{})]})};n(32);s.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(b.a,{store:N,children:Object(I.jsx)(i.a,{loading:null,persistor:g,children:Object(I.jsx)(Q,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={contactsList:"ContactList_contactsList__jOvSQ",contactItem:"ContactList_contactItem__3MiA3",listItem:"ContactList_listItem__2NfQn",listItemText:"ContactList_listItemText__2PgRe",button:"ContactList_button__3VLME"}},8:function(t,e,n){t.exports={input:"ContactForm_input__2vxW9",button:"ContactForm_button__36UJY"}}},[[33,1,2]]]);
//# sourceMappingURL=main.248e2b74.chunk.js.map