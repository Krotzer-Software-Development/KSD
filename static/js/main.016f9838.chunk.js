(this.webpackJsonpksd=this.webpackJsonpksd||[]).push([[0],{33:function(e,a,t){},54:function(e,a,t){e.exports=t.p+"static/media/bg.a5e1da9b.png"},59:function(e,a,t){e.exports=t(91)},64:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),i=t.n(r),m=t(30),o=(t(64),t(33),t(55)),c=t(101),s=t(102),u=t(100),d=t(97),E=t(103),h=t(98),p=t(99);var v=function(){return l.a.createElement("div",{className:"PageContainer"},l.a.createElement("div",{className:"Page"},l.a.createElement("h1",null," Web & Mobile App Developer "),l.a.createElement("div",{className:"Intro"},l.a.createElement("div",{id:"Title"})),l.a.createElement("div",{className:"PageBody"},l.a.createElement(d.a,null,l.a.createElement(h.a,null,l.a.createElement(p.a,null,l.a.createElement("div",{id:"PageContent"},l.a.createElement("li",{id:"SubTitle"}," Web Development "),l.a.createElement("li",null," Exisiting Web Site Modifications "),l.a.createElement("li",null,"Cross-platform Mobile Apps"),l.a.createElement("li",null," New Website Creation "),l.a.createElement("li",null,"Debuging"),l.a.createElement("li",null,"Search Engine Optimization "),l.a.createElement("li",null,"Disabiliy friendly"),l.a.createElement("li",null,"And Much more!"))),l.a.createElement(p.a,null,l.a.createElement("div",{id:"PageContent"},l.a.createElement("li",{id:"SubTitle"},"Android Apps"),l.a.createElement("li",null,"Android Phone and Tablet Apps"),l.a.createElement("li",null,"Wearables"),l.a.createElement("li",null,"Tv app"),l.a.createElement("li",null,"Automotive apps"))),l.a.createElement(p.a,null,l.a.createElement("div",{id:"PageContent"},l.a.createElement("li",{id:"SubTitle"},"Apple Apps"),l.a.createElement("li",null,"Iphone "),l.a.createElement("li",null,"Mac "),l.a.createElement("li",null,"Apple Watch "),l.a.createElement("li",null,"Tv "))))))))},g=t(47),b=t(48),f=t(57),N=t(56),C=t(49),y=t.n(C),S=function(e){Object(f.a)(t,e);var a=Object(N.a)(t);function t(e){var n;return Object(g.a)(this,t),(n=a.call(this,e)).state={firstName:"",lastName:"",phone:"",email:"",message:""},n}return Object(b.a)(t,[{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),y()({method:"POST",url:"http://localhost:3002/send",data:this.state}).then((function(e){"success"===e.data.status?(alert("Thank You for your time and interest! \n Krotzer Software Developmnet sent your message successfully."),a.resetForm()):"fail"===e.data.status&&alert("Message failed to send.")}))}},{key:"resetForm",value:function(){this.setState({firstName:"",lastName:"",phone:"",email:"",message:""})}},{key:"render",value:function(){return l.a.createElement("div",{className:"PageContainer"},l.a.createElement("div",{className:"Page"},l.a.createElement("h1",null," Contact "),l.a.createElement("div",{className:"Intro"},l.a.createElement(h.a,null,l.a.createElement("div",{className:"email"},l.a.createElement(p.a,null,"Email: ",l.a.createElement("a",{href:"mailto:krotzersoftwaredevelopment@gmail.com"}," krotzersoftwaredevelopment@gmail.com "))),l.a.createElement("div",{className:"phone"},l.a.createElement(p.a,null,"Phone:  ",l.a.createElement("a",{href:"tel:5418199410"}," (541) 819 9410 "))))),l.a.createElement("div",{className:"PageBody"},l.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Contact KSD today!"),l.a.createElement(h.a,null,l.a.createElement(p.a,null,l.a.createElement("input",{type:"text",className:"form-control",placeholder:"First Name",id:"firstName",value:this.state.firstName,onChange:this.onFirstNameChange.bind(this)})),l.a.createElement("br",null),l.a.createElement(p.a,null,l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Last Name",id:"lastName",value:this.state.lastName,onChange:this.onLastNameChange.bind(this)}))),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Phone Number",id:"phone",value:this.state.phone,onChange:this.onPhoneChange.bind(this)}),l.a.createElement("br",null),l.a.createElement("div",{className:"email"},l.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Email","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"message"},"Message:"),l.a.createElement("textarea",{className:"form-control",rows:"10",id:"message",value:this.state.message,onChange:this.onMessageChange.bind(this)})),l.a.createElement("div",{className:"Mobile"},l.a.createElement("div",{class:"g-recaptcha","data-sitekey":"6LddIOEZAAAAANyRLXS-CEU7ohRMY0AxbrQzfU3G"})),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",className:"btn btn-primary",value:"Submit"}," Submit ")))))}},{key:"onFirstNameChange",value:function(e){this.setState({firstName:e.target.value})}},{key:"onLastNameChange",value:function(e){this.setState({lastName:e.target.value})}},{key:"onPhoneChange",value:function(e){this.setState({phone:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),t}(l.a.Component);var k=function(){return l.a.createElement("div",{className:"PageContainer"},l.a.createElement("div",{className:"Page"},l.a.createElement("h1",null,"Payments"),l.a.createElement("div",{className:"Intro"},l.a.createElement("div",{id:"Title"}," ")),l.a.createElement("div",{id:"PageBody"},l.a.createElement("div",{id:"PageContent"},l.a.createElement("div",{id:"SubTitle"}," Discounts "),"Discounts offered for small businesses impacted by covid.",l.a.createElement("br",null),l.a.createElement("br",null),"Please make sure you have had a phone consultation; before making any form of deposit or payment."),l.a.createElement("div",{id:"PageContent"},l.a.createElement("div",{id:"SubTitle"}," Payment Methods "),"Stripe payments coming soon!"),l.a.createElement("div",{id:"PageContent"},l.a.createElement("div",{id:"SubTitle"}," Crypto Currency"),l.a.createElement("div",{id:"Title"},"Bitcoin:"),l.a.createElement("p",{id:"Crypto"},"3HatRvtFeubW1NASJbvy4ghekHWveprS8H"),l.a.createElement("div",{id:"Title"}," Ethereum: "),l.a.createElement("p",{id:"Crypto"},"0x9527a7b2325cfe157e4a3a50ac1275be46770702"),l.a.createElement("div",{id:"Title"}," LiteCoin: "),l.a.createElement("p",{id:"Crypto"},"LXYsXXZMhTPuwbFZ4zTBXFSojPAKBxJFWg "),l.a.createElement("div",{id:"Title"},"Ripple:"),l.a.createElement("p",{id:"Crypto"},"rwpMvfxoodXggJ1g4qv6MWAPQqWDwQyHUW")))))},P=t(6),w=[{path:"/Home",name:"Home",Component:v},{path:"/Contact",name:"Contact",Component:S},{path:"/Deposit",name:"Deposit",Component:k}];var A=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",null,l.a.createElement(c.a,{fixed:"top",collapseOnSelect:!0,expand:"lg",expanded:t,bg:"dark",variant:"dark"},l.a.createElement(c.a.Brand,null," KSD "),l.a.createElement(c.a.Toggle,{onClick:function(){return r(!t&&"expanded")}}),l.a.createElement(c.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(s.a,{className:"mr-auto"},w.map((function(e){return l.a.createElement(s.a.Link,{onClick:function(){return r(!1)},key:e.path,as:m.b,to:e.path,activeClassName:"active",exact:!0},e.name)})),l.a.createElement(u.a,{title:"Portfolio",id:"collasible-nav-dropdown"},l.a.createElement(u.a.Item,{href:"https://www.homeraisedcairns.com/"}," Home Raised Cairns - AKC Puppies"),l.a.createElement(u.a.Divider,null),l.a.createElement(u.a.Item,{href:"https://github.com/KrotzerSoftwareDevelopment/"}," GitHub "))),l.a.createElement(s.a,null,l.a.createElement(u.a.Divider,null),l.a.createElement(s.a.Link,{eventKey:2,href:"https://www.linkedin.com/in/dean-krotzer-0800b11a2/"},"LinkedIn")))),l.a.createElement("div",{className:"containertwo"},l.a.createElement(d.a,{className:"container"},w.map((function(e){var a=e.path,t=e.Component;return l.a.createElement(P.a,{key:a,exact:!0,path:a},(function(e){var a=e.match;return l.a.createElement(E.a,{in:null!=a,unmountOnExit:!0},l.a.createElement(t,null))}))})))))};t(90),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=t(54),x=t.n(T);var D=function(){return l.a.createElement("div",{className:"Footer"},l.a.createElement("p",{id:"copyRight"}," \xa9 2020  Krotzer Software Development"))};i.a.render(l.a.createElement("div",{className:"wholeBg"},l.a.createElement("img",{className:"bgStyle",src:x.a}),l.a.createElement(m.a,null,l.a.createElement(A,null),l.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.016f9838.chunk.js.map