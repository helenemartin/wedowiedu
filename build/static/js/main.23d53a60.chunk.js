(this["webpackJsonpfirebase-course-test"]=this["webpackJsonpfirebase-course-test"]||[]).push([[0],{14:function(e,t,a){e.exports=a(25)},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),l=a.n(s),i=a(2),o=a(3),c=a(5),u=a(4),m=a(6),d=a(7),g=a.n(d);a(19),a(22);g.a.initializeApp({apiKey:"AIzaSyB-R3tleCgFRGv9OFAYpJJQEMxLGfHOMVg",authDomain:"bla-bla-be5cd.firebaseapp.com",databaseURL:"https://bla-bla-be5cd.firebaseio.com",projectId:"bla-bla-be5cd",storageBucket:"bla-bla-be5cd.appspot.com",messagingSenderId:"151405944308",appId:"1:151405944308:web:66d22074eb7fb3780c6da1"});var h=g.a.database(),f={writeTo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=h.ref(e);a.push(t)},listenTo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},a=h.ref(e);return a.on("value",(function(e){t(e)})),a},update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=h.ref(e);a.update(t)},remove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=h.ref(e);t.remove()},getCurrentUser:function(){return g.a.auth().currentUser},isLoggedIn:function(){return!!g.a.auth().currentUser},signIn:function(e,t){return g.a.auth().signInWithEmailAndPassword(e,t)},onLoginChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=g.a.auth().onAuthStateChanged((function(t){e(t)}));return t},signOut:function(){return g.a.auth().signOut()},createUser:function(e,t){return g.a.auth().createUserWithEmailAndPassword(e,t)}},b=function(e){var t=e.data,a=t.isChecked,n=e.firebaseKey,s=a?"list-group-item-secondary text-muted":"";return r.a.createElement("div",{className:"".concat(s," list-group-item list-group-item d-flex justify-content-between align-items-center")},r.a.createElement("div",{onClick:function(){t.isChecked=!t.isChecked,f.update("messages/".concat(f.getCurrentUser().uid,"/").concat(n),t)},className:"w-100"},t.message,r.a.createElement("br",null),r.a.createElement("small",{className:"text-muted"},t.time)),r.a.createElement("span",{onClick:function(){var e="messages/".concat(f.getCurrentUser().uid,"/").concat(n);f.remove(e)},className:"badge badge-danger badge-pill"},"x"))},p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t={time:(new Date).toLocaleString("en-gb"),message:a.state.value,isChecked:!1};f.writeTo("messages/".concat(f.getCurrentUser().uid),t),a.setState({value:""})},a.handleChange=function(e){a.setState({value:e.target.value})},a.state={value:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit,className:"d-flex flex-row form-group"},r.a.createElement("input",{value:this.state.value,onChange:this.handleChange,className:"form-control w-100",type:"text"}),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit"))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!0,data:{}},a.messagesRef=null,a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.messagesRef=f.listenTo("messages/".concat(f.getCurrentUser().uid),(function(t){e.setState({isLoading:!1,data:t.val()})}))}},{key:"componentWillUnmount",value:function(){this.messagesRef.off()}},{key:"render",value:function(){if(this.state.isLoading)return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")));var e=Object.entries(this.state.data||{}).map((function(e){return{key:e[0],value:e[1]}}));return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("div",{className:"list-group"},e.map((function(e){return r.a.createElement(b,{key:e.key,firebaseKey:e.key,data:e.value})}))))}}]),t}(r.a.Component),E=(a(24),function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Logged in. ",r.a.createElement("button",{onClick:f.signOut},"Log out")),r.a.createElement(v,null))}),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),a.state.email&&a.state.password&&f.signIn(a.state.email,a.state.password).catch((function(e){a.setState({errorMessage:e.message})}))},a.handleEmailChange=function(e){a.setState({email:e.target.value})},a.handlePasswordChange=function(e){a.setState({password:e.target.value})},a.state={email:"",password:"",errorMessage:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email address",r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email",onChange:this.handleEmailChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password",r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",onChange:this.handlePasswordChange}))),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),this.state.errorMessage&&r.a.createElement("div",{className:"alert alert-danger"},this.state.errorMessage))}}]),t}(r.a.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),a.state.email&&a.state.password&&f.createUser(a.state.email,a.state.password).catch((function(e){a.setState({errorMessage:e.message})}))},a.handleEmailChange=function(e){a.setState({email:e.target.value})},a.handlePasswordChange=function(e){a.setState({password:e.target.value})},a.state={email:"",password:"",errorMessage:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email address",r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter email",onChange:this.handleEmailChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password",r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",onChange:this.handlePasswordChange}))),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"),this.state.errorMessage&&r.a.createElement("div",{className:"alert alert-danger"},this.state.errorMessage))}}]),t}(r.a.Component),y=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"You are logged out."),r.a.createElement("h2",null,"Login"),r.a.createElement(C,null),r.a.createElement("h2",null,"Register"),r.a.createElement(w,null))},O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isLoggedIn:f.isLoggedIn()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.onLoginChange((function(t){t?e.setState({isLoggedIn:!0}):e.setState({isLoggedIn:!1})}))}},{key:"render",value:function(){return this.state.isLoggedIn?r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"We do wie du"),r.a.createElement(E,null)):r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"We do wie du"),r.a.createElement(y,null))}}]),t}(r.a.Component);l.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.23d53a60.chunk.js.map