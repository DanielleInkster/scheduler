(this.webpackJsonpinvestocracy=this.webpackJsonpinvestocracy||[]).push([[0],{69:function(e,t,a){e.exports=a(98)},74:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),i=(a(74),a(15)),o=a(7),m=a(43),u=a(13),s=a(115),d=a(119),p=a(117),f=a(118),h=a(57),E=a.n(h),b=a(120),v=(a(21),Object(s.a)((function(e){return{root:{flexGrow:1,minHeight:36,paddingBottom:e.spacing(2)},toolbar:{minHeight:50,alignItems:"flex-start",paddingTop:e.spacing(1),paddingBottom:e.spacing(1)},title:{flexGrow:1,alignSelf:"flex-end",paddingBottom:e.spacing(2),paddingRight:e.spacing(2)},icon:{alignSelf:"flex-end",color:"#FFFFFF"}}})));function g(){var e=Object(o.k)(),t=v();return r.a.createElement("div",{className:t.root},r.a.createElement(p.a,{position:"static",height:"15%"},r.a.createElement(f.a,{className:t.toolbar}),r.a.createElement(d.a,{className:t.title,variant:"h4",noWrap:!0},"MyFakeBusiness"),r.a.createElement(b.a,{"aria-label":"home",className:t.icon,onClick:function(){e.push("/")}},r.a.createElement(E.a,{fontSize:"small"}))))}var w=a(3),j=a.n(w),y=a(9),x=a(126),O=a(121),k=a(127),F=Object(s.a)((function(e){return{table:{flexGrow:1},tablerow:{"&:nth-of-type(odd)":{backgroundColor:"#3f51b5"},textAlign:"center",flexGrow:1},tableitem:{flexGrow:1,padding:e.spacing(1),textAlign:"center"}}}));function N(e){var t=e.date,a=e.data,n=Object(o.m)(),c=F();function l(e){return e.replace(/[: ]+/g,"")}return r.a.createElement("div",{className:c.table},r.a.createElement(O.a,null,r.a.createElement(d.a,{variant:"h7"},r.a.createElement(k.a,null,r.a.createElement("tr",null,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;if("Please select a date for an appointment."!==t){var n=Object.keys(e[0]);return n.map((function(e,t){return r.a.createElement("th",{key:t},e.toUpperCase())}))}}()),r.a.createElement("tbody",null,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;if("Please select a date for an appointment."!==t)return a=e.map((function(e,a){var o=e.time,m=e.status;return r.a.createElement(x.a,{className:c.tablerow,key:a},r.a.createElement("td",{className:c.tableitem},o),r.a.createElement("td",{className:c.tableitem},m),"available"===m&&r.a.createElement("td",{className:c.tableitem},r.a.createElement(i.Link,{to:{pathname:"create/".concat(n.date,"/").concat(l(o)),state:{date:t,time:o}},style:{textDecoration:"none",color:"white",fontFamily:"sans-serif"}},"Create Request")),"pending"===m&&r.a.createElement("td",null,r.a.createElement(i.Link,{to:{pathname:"view/".concat(n.date,"/").concat(l(o)),state:{date:t,time:o}},style:{textDecoration:"none",color:"white",fontFamily:"sans-serif"}},"View Request")),"unavailable"===m&&r.a.createElement("td",null))}))}())))))}var S=function(e){return fetch("/".concat(e)).then((function(e){return e.json()}))},B=function(e,t){return fetch("/".concat(e,"/").concat(t)).then((function(e){return e.json()}))},A=function(e,t,a){return fetch("/".concat(t,"/").concat(a),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)})},P=function(e,t){return fetch("/delete/".concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}})};function R(e){var t=e.date,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],i=c[1],m=Object(o.m)(),s=[{time:"9:00 AM",status:"unavailable"},{time:"10:00 AM",status:"available"},{time:"11:00 AM",status:"available"},{time:"12:00 PM",status:"unavailable"},{time:"1:00 PM",status:"available"},{time:"2:00 PM",status:"available"},{time:"3:00 PM",status:"available"},{time:"4:00 PM",status:"available"},{time:"5:00 PM",status:"unavailable"}];return Object(n.useEffect)((function(){null!==m.date&&function(){var e=Object(y.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(m.date);case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[m.date]),r.a.createElement("div",null,r.a.createElement(d.a,{variant:"h6"},null===t&&r.a.createElement("p",{id:"date"},r.a.createElement("b",null," Please select a date. ")),void 0===t&&r.a.createElement("p",{id:"date"},r.a.createElement("b",null," Please select a date. ")),null!==t&&void 0!==t&&r.a.createElement("p",{id:"date"},r.a.createElement("b",null,t.toDateString()))),l.length>0&&void 0!==t&&function(){var e=[].concat(s);e.map((function(t){return l.map((function(a){return t.time===a.time&&(t.status="pending"),e}))}))}(),r.a.createElement("center",null,null!==t&&void 0!==t&&r.a.createElement(N,{date:t.toDateString(),data:s})))}var _=a(62),M=a(125),q=a(122),D=Object(_.a)();D=Object(M.a)(D);function C(){return r.a.createElement("div",null,r.a.createElement(q.a,{theme:D},r.a.createElement(d.a,{variant:"h4",gutterBottom:!0},r.a.createElement("b",null,"Welcome to MyFakeBusiness")),r.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png",alt:"generic person icon",width:"200vw",height:"200vh"}),r.a.createElement(d.a,{variant:"h5",gutterBottom:!0},"We're a fake business and you can be too!"),r.a.createElement(d.a,{variant:"subtitle1",gutterBottom:!0}," Interested in creating your own fake business? Unsure if your business idea has what it takes to be fake? We'd love to help you out. Request an appointment with one of our many fake experts to pitch us your best ideas.")))}var T=a(58),G=a.n(T),W=a(123),I=a(101),J=(a(95),Object(s.a)({paper:{padding:"1vw",paddingBottom:"2vw",textAlign:"center",color:"#FFFFFF",whiteSpace:"wrap",background:"#6573c3",margin:"1vh",borderRadius:"5%"},whitepaper:{padding:"1vw",paddingBottom:"2vw",textAlign:"center",background:"#FFFFFF",whiteSpace:"wrap",margin:"1vh",borderRadius:"5%"}}));function L(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(o.k)(),i=J();function m(e){if(null!==e){var t=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();return"".concat(t,a,n)}}return r.a.createElement("div",{className:i.root},r.a.createElement(g,null),r.a.createElement(W.a,{container:!0,spacing:1,direction:"row",justify:"space-evenly"},r.a.createElement(W.a,{item:!0,lg:5,md:4,sm:12},r.a.createElement(I.a,{className:i.paper},r.a.createElement(C,null))),r.a.createElement(W.a,{item:!0,lg:3,md:4,sm:6,xs:12},r.a.createElement(I.a,{className:i.whitepaper,lg:3,md:4,sm:6,xs:12},r.a.createElement(G.a,{selectedDays:a,onDayClick:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t.disabled){c(t.selected?void 0:e);var a=m(e);l.push("/".concat(a))}},disabledDays:[{daysOfWeek:[0,6]},{before:new Date}]}))),r.a.createElement(W.a,{item:!0,lg:4,md:4,sm:6,xs:12},r.a.createElement(I.a,{className:i.paper,lg:4,md:4,sm:6,xs:12},r.a.createElement(R,{date:a})))))}var U=a(63),H=a(124),V=a(59),z=a.n(V),Y=(a(96),Object(_.a)());Y=Object(M.a)(Y);var $=Object(s.a)({paper:{padding:"2vw",textAlign:"center",color:"#FFFFFF",whiteSpace:"wrap",background:"#6573c3",borderRadius:"1%"}});function K(e){var t=e.appt,a=e.onSubmit,n=(e.date,e.time,Object(o.m)()),c=Object(o.l)(),l=$(),i=Object(U.a)({defaultValues:{name:t?t.name:"",project_name:t?t.project_name:"",project_description:t?t.project_description:"",email:t?t.email:""}}),m=i.register,u=(0,i.handleSubmit)((function(e){a(e)}));return r.a.createElement("div",null,r.a.createElement(O.a,{className:l.paper,width:"110%"},r.a.createElement("form",{onSubmit:u},r.a.createElement("input",{type:"hidden",name:"date_id",id:"date_id",ref:m,value:n.date}),r.a.createElement("input",{type:"hidden",name:"time_id",id:"time_id",ref:m,value:n.time}),r.a.createElement("input",{type:"hidden",name:"date",id:"date",ref:m,value:c.state.date}),r.a.createElement("input",{type:"hidden",name:"time",id:"time",ref:m,value:c.state.time}),r.a.createElement("h3",null,"Request for Appointment"),r.a.createElement("p",null,"Date: ",t?t.date:c.state.date),r.a.createElement("p",null,"Time: ",t?t.time:c.state.time),r.a.createElement("label",{htmlFor:"name"},"Full name:"),r.a.createElement("input",{type:"name",id:"name",name:"name",ref:m({required:!0}),placeholder:"Ex: 'Peter Parker'"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"project_name"},"Business name:"),r.a.createElement("input",{type:"text",id:"project_name",name:"project_name",ref:m({required:!0}),placeholder:"Ex: 'Best Project'"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"project_description"},"Business description:"),r.a.createElement("input",{type:"text",id:"project_description",name:"project_description",maxLength:"250","line-height":"140px",ref:m({required:!0}),placeholder:"Maximum of 250 characters"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"email"},"Email Address:"),r.a.createElement("input",{type:"email",id:"email",name:"email",ref:m({required:!0}),placeholder:"Ex: 'peter.parker@marvel.com'"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(H.a,{className:l.button,color:"primary",variant:"contained",startIcon:r.a.createElement(z.a,{color:"white"}),type:"submit"},"Submit")),r.a.createElement(d.a,{variant:"subtitle1",gutterBottom:!0},"To cancel, click outside of the pop-up window or use the back button on your browser.")))}function Q(e){var t=e.date,a=e.time,n=Object(o.k)(),c=Object(o.m)(),l=function(){var e=Object(y.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a=t,fetch("/create",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)});case 2:window.alert("Appointment request created for ".concat(t.date," at ").concat(t.time,". A confirmation email has been sent to your inbox.")),n.push("/view/".concat(c.date,"/").concat(c.time));case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(K,{date:t,time:a,onSubmit:l}))}function X(){var e=Object(o.m)(),t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],i=Object(o.k)();Object(n.useEffect)((function(){(function(){var t=Object(y.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(e.date,e.time);case 2:a=t.sent,l(a[0]);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}));var m=function(){var t=Object(y.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(a,e.date,e.time);case 2:window.alert("Request updated successfully!"),i.push("/".concat(e.date,"/ViewAppointment/").concat(e.time));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,""!==c&&r.a.createElement(K,{appt:c,onSubmit:m}))}var Z=a(60),ee=a.n(Z),te=a(61),ae=a.n(te),ne=Object(s.a)((function(e){return{button:{flexGrow:1,margin:e.spacing(1),marginBottom:e.spacing(2)},whitepaper:{padding:"1vw",paddingBottom:"2vw",textAlign:"center",background:"#FFFFFF",whiteSpace:"wrap",margin:"1vh",borderRadius:"5%"}}}));function re(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(o.m)(),i=Object(o.k)(),m=ne();function s(){return(s=Object(y.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(l.date,l.time);case 2:return e.next=4,window.alert("Request cancelled. No other action is required");case 4:i.push("/");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){(function(){var e=Object(y.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(l.date,l.time);case 2:t=e.sent,c(t[0]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),a?r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(W.a,{container:!0,direction:"row",justify:"center"},r.a.createElement(W.a,{item:!0,lg:5,md:6,sm:12},r.a.createElement(d.a,{variant:"h5",component:"h2"},r.a.createElement("div",{className:m.whitepaper,lg:5,md:6,sm:8,xs:12},r.a.createElement("h2",null,r.a.createElement("u",null,"Request for Appointment")),r.a.createElement("h4",null,"Date: ",a.date),r.a.createElement("h4",null,"Time: ",a.time),r.a.createElement("h4",null,"Name: ",a.name),r.a.createElement("p",null,"Business Name: ",a.project_name),r.a.createElement("p",null,"Business Description: ",a.project_description),r.a.createElement("p",null,"Contact Email: ",a.email),r.a.createElement(H.a,{className:m.button,color:"primary",variant:"contained",margin:"2%",padding:"2%",startIcon:r.a.createElement(ee.a,null),onClick:function(){i.push("/edit/".concat(l.date,"/").concat(l.time),{appt:a})}},"Edit Request"),r.a.createElement(H.a,{className:m.button,color:"primary",variant:"contained",startIcon:r.a.createElement(ae.a,null),onClick:function(){return s.apply(this,arguments)}},"Delete Request")))))):r.a.createElement("div",{className:m.whitepaper,lg:5,md:6,sm:8,xs:12},r.a.createElement("p",null,"Uh-oh! Something went wrong loading this page. Please try again."),r.a.createElement("button",{onClick:function(){return i.push("/")}},"Go Home "))}a(97);var ce=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.BrowserRouter,null,r.a.createElement(o.g,null,r.a.createElement(o.d,{exact:!0,match:!0,path:"/",render:function(){return r.a.createElement(L,null)}}),r.a.createElement(o.d,{exact:!0,match:!0,path:"/:date",render:function(){return r.a.createElement(L,null)}}),r.a.createElement(m.ModalRoute,{component:Q,path:"/create/:date/:time",parentPath:"/"}),r.a.createElement(o.d,{exact:!0,match:!0,path:"/view/:date/:time",render:function(){return r.a.createElement(re,null)}}),r.a.createElement(m.ModalRoute,{component:X,path:"/edit/:date/:time",parentPath:"/"}),r.a.createElement(o.d,{path:"*",render:function(){return r.a.createElement("div",null,"Page Not Found")}})),r.a.createElement("div",{id:"modal"},r.a.createElement(m.ModalContainer,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.e65fff08.chunk.js.map