(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={list:"ContactList_list__2GULq",listItem:"ContactList_listItem__1noWe",btn:"ContactList_btn__2jDYE"}},21:function(t,e,n){t.exports={label:"Filter_label__2VJhp",input:"Filter_input__1mfiW"}},22:function(t,e,n){},38:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(14),i=n.n(r),s=(n(38),n(39),n(7)),o=n(16),u=n.n(o),b=n(8),l=n.n(b),j=n(17),d=n(11),f=n.n(d);f.a.defaults.baseURL="http://localhost:7777";var O=n(5),m=Object(O.c)("contacts/fetchContacts",Object(j.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("/contacts").then((function(t){return t.data}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),p=Object(O.c)("contacts/addContact",function(){var t=Object(j.a)(l.a.mark((function t(e){var n,a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.name,a=e.number,t.next=3,r={name:n,number:a},f.a.post("/contacts",r).then((function(t){return t.data}));case 3:return c=t.sent,t.abrupt("return",c);case 5:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()),h=Object(O.c)("contacts/removeContact",function(){var t=Object(j.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n=e,f.a.delete("/contacts/".concat(n));case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}var n}),t)})));return function(e){return t.apply(this,arguments)}}()),v=function(t){return t.contacts.entities},x=function(t){return t.filter},_=n(1);function g(){var t=Object(s.c)(v),e=Object(s.c)(x),n=Object(s.b)();Object(a.useEffect)((function(){n(m())}),[n]);var c=function(){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}();return Object(_.jsx)("ul",{className:u.a.list,children:c&&c.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(_.jsxs)("li",{className:u.a.listItem,children:["".concat(e,": ").concat(a),Object(_.jsx)("button",{className:u.a.btn,type:"button",onClick:function(){return n(h(c))},children:"Remove"})]},c)}))})}var C=n(23),L=n(9),N=n.n(L);function w(){var t=Object(s.b)(),e=Object(a.useState)(""),n=Object(C.a)(e,2),c=n[0],r=n[1],i=Object(a.useState)(""),o=Object(C.a)(i,2),u=o[0],b=o[1],l=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":b(a);break;default:return}};return Object(_.jsxs)("form",{className:N.a.form,onSubmit:function(e){e.preventDefault(),t(p({name:c,number:u})),b(""),r("")},children:[Object(_.jsxs)("label",{className:N.a.label,children:["Name",Object(_.jsx)("input",{type:"text",name:"name",placeholder:"Steve Jobs",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:l,value:c,className:N.a.input})]}),Object(_.jsxs)("label",{className:N.a.label,children:["Number",Object(_.jsx)("input",{type:"tel",name:"number",placeholder:"+38(0XX)-XXX-XX-XX",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:l,value:u,className:N.a.input})]}),Object(_.jsx)("button",{className:N.a.btn,type:"submit",children:"Add contact"})]})}var y=n(21),k=n.n(y),A=Object(O.b)("filter/filter");function F(){var t=Object(s.c)((function(t){return t.filter})),e=Object(s.b)();return Object(_.jsxs)("label",{className:k.a.label,children:["Filter",Object(_.jsx)("input",{className:k.a.input,type:"text",name:"name",placeholder:"Enter contact name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:t,onChange:function(t){return e(A(t.currentTarget.value))}})]})}var X=n(22),z=n.n(X);function J(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h1",{className:z.a,children:"Phonebook"}),Object(_.jsx)(w,{}),Object(_.jsx)("h2",{className:z.a,children:"Contacts"}),Object(_.jsx)(F,{}),Object(_.jsx)(g,{})]})}var S,Z=n(3),I=Object(O.d)("",Object(Z.a)({},A,(function(t,e){return e.payload}))),T=n(33),q=n(2),D=Object(O.e)({name:"contacts",initialState:{entities:[],isLoading:!1,error:null},extraReducers:(S={},Object(Z.a)(S,m.fulfilled,(function(t,e){return Object(q.a)(Object(q.a)({},t),{},{entities:e.payload,isLoading:!1})})),Object(Z.a)(S,m.pending,(function(t){return Object(q.a)(Object(q.a)({},t),{},{isLoading:!0})})),Object(Z.a)(S,m.rejected,(function(t){return Object(q.a)(Object(q.a)({},t),{},{isLoading:!1})})),Object(Z.a)(S,p.fulfilled,(function(t,e){return Object(q.a)(Object(q.a)({},t),{},{entities:[].concat(Object(T.a)(t.entities),[e.payload]),isLoading:!1})})),Object(Z.a)(S,p.pending,(function(t){return Object(q.a)(Object(q.a)({},t),{},{isLoading:!0})})),Object(Z.a)(S,p.rejected,(function(t){return Object(q.a)(Object(q.a)({},t),{},{isLoading:!1})})),Object(Z.a)(S,h.fulfilled,(function(t,e){return Object(q.a)(Object(q.a)({},t),{},{entities:t.entities.filter((function(t){return t.id!==e.payload})),isLoading:!1})})),Object(Z.a)(S,h.pending,(function(t){return Object(q.a)(Object(q.a)({},t),{},{isLoading:!0})})),Object(Z.a)(S,h.rejected,(function(t){return Object(q.a)(Object(q.a)({},t),{},{isLoading:!1})})),S)}).reducer,E=n(32),R=Object(O.a)({reducer:{contacts:D,filter:I},devTools:E.composeWithDevTools});i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(s.a,{store:R,children:Object(_.jsx)(J,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"Form_form__Qphm_",label:"Form_label__3ytiF",btn:"Form_btn__DqRIT",input:"Form_input__3Omix"}}},[[64,1,2]]]);
//# sourceMappingURL=main.255e21e3.chunk.js.map