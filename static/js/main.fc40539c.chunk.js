(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={list:"ContactList_list__1QXPz",listItem:"ContactList_listItem__3HGn-",btn:"ContactList_btn__2UkKU"}},14:function(e,t,n){e.exports={label:"Filter_label__2h1AF",input:"Filter_input__3XehC"}},15:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),o=n.n(r),s=(n(23),n(3)),i=n(4),l=n(32),b=Object(i.a)("App/addContact",(function(e,t){return{payload:{name:e,number:t,id:Object(l.a)()}}})),u=Object(i.a)("App/removeContact"),j=n(10),m=n.n(j),d=n(1);function p(){var e=Object(s.c)((function(e){return e.items})),t=Object(s.c)((function(e){return e.filter})),n=Object(s.b)();var a=function(){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return Object(d.jsx)("ul",{className:m.a.list,children:a&&a.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(d.jsxs)("li",{className:m.a.listItem,children:["".concat(a,": ").concat(c),Object(d.jsx)("button",{className:m.a.btn,type:"button",onClick:function(){return n(u(t))},children:"delete"})]},t)}))})}var O=n(16),f=n(5),h=n.n(f);function _(e){e.onSubmit;var t=Object(s.b)(),n=Object(a.useState)(""),c=Object(O.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),l=Object(O.a)(i,2),u=l[0],j=l[1],m=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":j(a);break;default:return}};return Object(d.jsxs)("form",{className:h.a.form,onSubmit:function(e){e.preventDefault(),t(b(r,u)),o(""),j("")},children:[Object(d.jsxs)("label",{className:h.a.label,children:["Name",Object(d.jsx)("input",{type:"text",name:"name",placeholder:"Steve Jobs",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:m,value:r,className:h.a.input})]}),Object(d.jsxs)("label",{className:h.a.label,children:["Number",Object(d.jsx)("input",{type:"tel",name:"number",placeholder:"+38(0XX)-XXX-XX-XX",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:m,value:u,className:h.a.input})]}),Object(d.jsx)("button",{className:h.a.btn,type:"submit",children:"Add contact"})]})}var x=n(14),v=n.n(x),C=Object(i.a)("App/filter");function A(){var e=Object(s.c)((function(e){return e.filter})),t=Object(s.b)();return Object(d.jsxs)("label",{className:v.a.label,children:["Filter",Object(d.jsx)("input",{className:v.a.input,type:"text",name:"name",placeholder:"Enter contact name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,onChange:function(e){return t(C(e.currentTarget.value))}})]})}var N=n(15),X=n.n(N);function g(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:X.a,children:"Phonebook"}),Object(d.jsx)(_,{}),Object(d.jsx)("h2",{className:X.a,children:"Contacts"}),Object(d.jsx)(A,{}),Object(d.jsx)(p,{})]})}n(29);var y,F=n(2),k=n(7),z=n(18),w=Object(i.b)([],(y={},Object(k.a)(y,b,(function(e,t){var n=t.payload;return e.find((function(e){return e.name===n.name}))?(alert("\u0422\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"),e):[].concat(Object(z.a)(e),[n])})),Object(k.a)(y,u,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),y)),S=Object(i.b)("",Object(k.a)({},C,(function(e,t){return t.payload}))),Z=n(17),L=Object(F.combineReducers)({items:w,filter:S}),J=Object(F.createStore)(L,Object(Z.composeWithDevTools)());o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(s.a,{store:J,children:Object(d.jsx)(g,{})})}),document.getElementById("root"))},5:function(e,t,n){e.exports={form:"Form_form__30vLo",label:"Form_label__3Fj5X",btn:"Form_btn__3cOap",input:"Form_input__2cZV0"}}},[[30,1,2]]]);
//# sourceMappingURL=main.fc40539c.chunk.js.map