(this["webpackJsonpform-constructor"]=this["webpackJsonpform-constructor"]||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a,r=n(8),c=n(37),i=n.n(c),s=n(16),o=n(12),u=n(32),l=u.c,d=n(33),j=n(11),b=n(0),p=n.n(b),O=n(1),f=n(27),h=function(){var e=Object(O.a)(p.a.mark((function e(t,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(f.b)(),e.next=3,Object(f.c)(a,t,n);case 3:return r=e.sent,e.abrupt("return",r.user);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(O.a)(p.a.mark((function e(t,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(f.b)(),e.next=3,Object(f.a)(a,t,n);case 3:return r=e.sent,e.abrupt("return",r.user);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(O.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(f.b)(),e.next=3,Object(f.d)(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!function(e){e.SET_AUTH="SET_AUTH",e.SET_ERROR="SET_ERROR",e.SET_USER="SET_USER",e.SET_IS_LOADING="SET_IS_LOADING"}(a||(a={}));var x,g={setUser:function(e){return{type:a.SET_USER,payload:e}},setIsAuth:function(e){return{type:a.SET_AUTH,payload:e}},setIsLoading:function(e){return{type:a.SET_IS_LOADING,payload:e}},setError:function(e){return{type:a.SET_ERROR,payload:e}},signup:function(e,t){return function(){var n=Object(O.a)(p.a.mark((function n(a){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(g.setIsLoading(!0)),n.next=4,m(e,t);case 4:a(g.setIsLoading(!1)),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),a(g.setIsLoading(!1)),a(g.setError("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"));case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},login:function(e,t){return function(){var n=Object(O.a)(p.a.mark((function n(a){var r,c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(g.setIsLoading(!0)),n.next=4,h(e,t);case 4:(r=n.sent).uid&&r.email&&(a(g.setIsAuth(!0)),a(g.setUser({uid:r.uid,email:r.email})),a(g.setIsLoading(!1))),n.next=13;break;case 8:n.prev=8,n.t0=n.catch(0),a(g.setIsLoading(!1)),c="Firebase: Error (auth/wrong-password)."===n.t0.message?"\u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c":"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d",a(g.setError(c));case 13:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:t(g.setUser({})),t(g.setIsAuth(!1)),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},isLoggedinAction:function(){return function(e){e(g.setIsLoading(!0));try{Object(f.b)().onAuthStateChanged((function(t){(null===t||void 0===t?void 0:t.email)&&t.uid&&(e(g.setUser({uid:t.uid,email:t.email})),e(g.setIsAuth(!0))),e(g.setIsLoading(!1))}))}catch(t){e(g.setIsLoading(!1))}}}},y=n(48),S=n(39),E=Object(y.a)({apiKey:"AIzaSyBvr5j94VfQRUCGl05gWSG4SoaFktzcjhA",authDomain:"diagnostdemo.firebaseapp.com",databaseURL:"https://diagnostdemo-default-rtdb.europe-west1.firebasedatabase.app",projectId:"diagnostdemo",storageBucket:"diagnostdemo.appspot.com",messagingSenderId:"139429853213",appId:"1:139429853213:web:5cfae7c8480af121abaef4",measurementId:"G-M6MQCXTVQ9"}),N=Object(S.g)(E),I=n(24),w=Object(I.b)(N,"schemas"),k=function(){var e=Object(O.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.a)(w,Object(j.a)(Object(j.a)({},t),{},{uid:n}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(O.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(I.g)(Object(I.b)(N,"schemas"),Object(I.i)("uid","==",t)),e.next=3,Object(I.f)(n);case 3:return a=e.sent,r=a.docs.map((function(e){return Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id})})),console.log(r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(O.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(I.d)(N,"schemas",t),e.next=3,Object(I.e)(n);case 3:return a=e.sent,e.abrupt("return",Object(j.a)(Object(j.a)({},a.data()),{},{id:t}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(O.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(I.d)(N,"schemas",t),e.next=3,Object(I.c)(n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(O.a)(p.a.mark((function e(t,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(I.d)(N,"schemas",t),e.next=3,Object(I.h)(a,n);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();!function(e){e.SET_SCHEMA="SET_SCHEMA",e.SET_SCHEMA_ITEM="SET_SCHEMA_ITEM",e.SET_IS_LOADING="SET_IS_LOADING",e.SET_ERROR="SET_ERROR"}(x||(x={}));var _={setSchema:function(e){return{type:x.SET_SCHEMA,payload:e}},setSchemaItem:function(e){return{type:x.SET_SCHEMA_ITEM,payload:e}},setIsLoading:function(e){return{type:x.SET_IS_LOADING,payload:e}},setError:function(e){return{type:x.SET_ERROR,payload:e}},createSchema:function(e,t){return function(){var n=Object(O.a)(p.a.mark((function n(a,r){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(_.setIsLoading(!0)),n.next=4,k({name:e,fields:t},r().auth.user.uid);case 4:a(_.setIsLoading(!1)),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()},fetchSchemas:function(){return function(){var e=Object(O.a)(p.a.mark((function e(t,n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(_.setIsLoading(!0)),e.prev=1,e.next=4,C(n().auth.user.uid);case 4:a=e.sent,t(_.setSchema(a)),t(_.setIsLoading(!1)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(_.setIsLoading(!1));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()},fetchSchemaItem:function(e){return function(){var t=Object(O.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_.setIsLoading(!0)),t.prev=1,t.next=4,T(e);case 4:a=t.sent,n(_.setSchemaItem(a)),n(_.setIsLoading(!1)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(_.setIsLoading(!1));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},updateSchemaItem:function(e,t){return function(){var n=Object(O.a)(p.a.mark((function n(a){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,L(e,t);case 3:n.next=7;break;case 5:n.prev=5,n.t0=n.catch(0);case 7:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e){return n.apply(this,arguments)}}()},removeSchemaItem:function(e){return function(){var t=Object(O.a)(p.a.mark((function t(n,a){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A(e);case 3:return t.next=5,C(a().auth.user.uid);case 5:r=t.sent,n(_.setSchema(r)),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()}},R=Object(j.a)(Object(j.a)({},g),_),M=function(){var e=Object(u.b)();return Object(d.b)(R,e)},D=(n(60),n(61),n(5)),q=function(e){var t=e.error,n=e.label;return Object(D.jsx)("div",{className:"labelcomp",children:Object(D.jsx)("label",{className:t&&"error",children:t||n})})},H=(n(63),function(e){var t=e.value,n=e.required,a=e.onChange,r=(e.onError,e.placeholder),c=e.type,i=e.error,s=e.label,o=e.isRemoveIcon,u=e.delOptionsVaraint;return Object(D.jsxs)("div",{className:"textfield",children:[s&&Object(D.jsx)("div",{children:Object(D.jsx)(q,{label:s,error:i})}),Object(D.jsxs)("div",{className:"input-container ".concat(o?"removeIcon":""),children:[Object(D.jsx)("input",{className:i&&"error",value:t,onChange:a,required:n,type:c,placeholder:r}),o&&"\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u043f\u0446\u0438\u0438"!==r&&Object(D.jsx)("i",{className:"remove-icon",onClick:u,children:"X"})]})]})}),U=(n(64),function(e){var t=e.name,n=e.onClick,a=e.disabled,r=e.type,c=e.form,i=e.variant;return Object(D.jsx)("div",{className:"uibutton",children:Object(D.jsx)("button",{onClick:n,type:r,disabled:a,form:c,className:i,children:t})})}),G=(n(65),function(e){var t=e.title;return Object(D.jsx)("div",{className:"error-info",children:Object(D.jsx)("span",{children:t})})}),P=(n(66),function(){return Object(D.jsx)("div",{className:"lds-wrapper",children:Object(D.jsx)("div",{className:"lds-dual-ring"})})}),V=n.p+"static/media/flogo.150cc412.jpg",F=function(){var e=l((function(e){return e.auth})),t=e.error,n=e.isLoading,a=Object(r.useState)(""),c=Object(o.a)(a,2),i=c[0],s=c[1],u=Object(r.useState)(""),d=Object(o.a)(u,2),j=d[0],b=d[1],p=Object(r.useState)(""),O=Object(o.a)(p,2),f=O[0],h=O[1],m=Object(r.useRef)(null),v=M(),x=v.login,g=v.signup,y=v.setError;return Object(r.useEffect)((function(){"login"!==f&&"signup"!==f||m.current&&m.current.dispatchEvent(new Event("submit",{bubbles:!0,cancelable:!0}))}),[f,i]),Object(r.useEffect)((function(){t&&setTimeout((function(){y(""),"\u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"===t&&b(""),"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"===t&&s("")}),1e3)}),[t]),Object(D.jsx)("div",{className:"loader-wrapper",children:n?Object(D.jsx)("div",{children:Object(D.jsx)(P,{})}):Object(D.jsxs)("div",{className:"login-form-wrapper",children:[Object(D.jsx)("div",{className:"login-form-wrapper-logo",children:Object(D.jsx)("img",{src:V,width:150})}),Object(D.jsxs)("form",{onSubmit:function(e){e.preventDefault(),"login"===f&&x(i,j),"signup"===f&&g(i,j),h(""),s(""),b("")},ref:m,children:[Object(D.jsx)("div",{className:"login-form-wrapper--inp",children:Object(D.jsx)(H,{label:"Email",value:i,type:"email",onChange:function(e){return s(e.target.value)}})}),Object(D.jsx)("div",{className:"login-form-wrapper--inp",children:Object(D.jsx)(H,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",value:j,onChange:function(e){return b(e.target.value)},type:"password"})}),Object(D.jsx)("div",{className:"login-form-wrapper--btn",children:Object(D.jsx)(U,{type:"button",onClick:function(){return h("login")},variant:"fill",name:"\u0412\u043e\u0439\u0442\u0438"})}),Object(D.jsx)("div",{className:"login-form-wrapper--btn",children:Object(D.jsx)(U,{type:"button",onClick:function(){return h("signup")},variant:"fill",name:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})]}),t&&Object(D.jsx)(G,{title:t})]})})},B=function(){return Object(D.jsx)(F,{})},Q=n(13),z=n(4),J=(n(67),n.p+"static/media/Vector.ce7aa419.svg"),X=function(e){e.required;var t=e.onChange,n=e.options,a=e.value,c=e.label,i=(e.propertyNumber,e.error),s=Object(r.useState)(!1),u=Object(o.a)(s,2),l=u[0],d=u[1],j=Object(r.useState)(null),b=Object(o.a)(j,2),p=b[0],O=b[1];return Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{children:Object(D.jsx)(q,{label:c,error:i})}),Object(D.jsxs)("div",{className:"dropdown ".concat(l?"isopened":""),children:[Object(D.jsxs)("div",{className:"dropdown-header ".concat(l?"isopened":""),children:[Object(D.jsx)("span",{children:a}),Object(D.jsx)("img",{src:J,className:"vector-svg",alt:"vector icon",onClick:function(){return d((function(e){return!e}))}})]}),l&&Object(D.jsx)("div",{className:"dropdownlist",children:n.map((function(e,n){return Object(D.jsx)("div",{className:"dropdown-list-item ".concat(p===n?"clicked":""),onClick:function(a){return function(e,n){O(e),t(n),d((function(e){return!e}))}(n,e)},children:Object(D.jsx)("span",{children:e})})}))})]})]})},K=n(50),W=(n(68),["id","Text"]),Y=function(e){var t=e.id,n=void 0===t?"toggle-switch":t,a=(e.Text,Object(K.a)(e,W));return Object(D.jsxs)("div",{className:"toggle-switch"+(a.Small?"small-switch":""),children:[Object(D.jsx)("input",{type:"checkbox",className:"toggle-switch-checkbox",id:n,checked:a.currentValue,defaultChecked:!0,onChange:a.onChange}),n?Object(D.jsxs)("label",{className:"toggle-switch-label",htmlFor:n,children:[Object(D.jsx)("span",{className:"toggle-switch-inner"}),Object(D.jsx)("span",{className:"toggle-switch-switch"})]}):null]})},Z=n.p+"static/media/DeleteIcon.4ad48d4d.svg",$=n.p+"static/media/Arrow.8afdceb1.svg",ee=n.p+"static/media/arrowdown.68dc6f63.svg",te=(n(69),function(e){var t=e.propertyNumber,n=e.propertyOrderNumber,a=e.property,r=e.toggleId,c=e.onUpdateProperty,i=e.openTabIndex,s=e.handleOpenTab,o=e.deleteProperty,u=function(e,n,r){var i,s=null===(i=a.options)||void 0===i?void 0:i.map((function(t,a){return a===n?Object(j.a)(Object(j.a)({},t),{},Object(z.a)({},r,e.target.value)):t}));c("options",s,t)},l=function(){return!!n||t===i};return Object(D.jsxs)("div",{className:"property-form ".concat(l()?"isDisplayed":""),children:[Object(D.jsxs)("div",{className:"property-form-left-column",children:[Object(D.jsxs)("div",{className:"created-property-item section-title ".concat(void 0!==t?"is-created":""),children:[Object(D.jsx)("img",{src:t===i?ee:$,alt:"arrow icon",className:"arrow-icon"}),Object(D.jsxs)("div",{onClick:function(){return s&&void 0!==t&&s(t)},children:[Object(D.jsx)("span",{children:"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e ".concat(void 0!==t?t+1:n,": ").concat(a.label)}),Object(D.jsx)("br",{}),void 0!==t&&t!==i&&Object(D.jsxs)("span",{className:"created-property-keytype",children:[a.type,",",a.key]})]})]}),l()&&Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{className:"property-key",children:Object(D.jsx)(H,{label:"\u041a\u043b\u044e\u0447 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430",value:a.key,required:!0,placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u043b\u044e\u0447 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430",onChange:function(e){return c("key",e.target.value,t)}})}),Object(D.jsx)("div",{className:"property-label",children:Object(D.jsx)(H,{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430",value:a.label,required:!0,placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430",onChange:function(e){return c("label",e.target.value,t)}})}),Object(D.jsxs)("div",{className:"dropdown-block",children:[Object(D.jsx)(X,{label:"\u041f\u043e\u043b\u0435 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",value:a.type,onChange:function(e){c("type",e,t)},options:["\u0427\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435","\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435","\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430","\u041f\u0430\u0440\u043e\u043b\u044c","\u0412\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a"],propertyNumber:t}),"\u0412\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a"===a.type&&Object(D.jsxs)("div",{children:[a.options&&a.options.map((function(e,n){return Object(D.jsxs)("div",{className:"property-form-dropdown-inputs",children:[Object(D.jsx)("div",{children:Object(D.jsx)(H,{type:"text",placeholder:"\u043a\u043b\u044e\u0447 \u043e\u043f\u0446\u0438\u0438",value:e.key,required:!0,onChange:function(e){return u(e,n,"key")},isRemoveIcon:!0,delOptionsVaraint:function(){return function(e){if(a.options&&a.options.length>1){var n=a.options.filter((function(t,n){return e!==n}));c("options",n,t)}}(n)}})}),Object(D.jsx)("div",{children:Object(D.jsx)(H,{type:"text",placeholder:"\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u043f\u0446\u0438\u0438",value:e.value,required:!0,onChange:function(e){return u(e,n,"value")},isRemoveIcon:!0})})]},n)})),Object(D.jsx)("div",{className:"add-options-button",children:Object(D.jsx)(U,{type:"button",onClick:function(){a.options&&c("options",[].concat(Object(Q.a)(a.options),[{key:"",value:""}]),t)},name:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",variant:"fill"})})]})]})]})]}),l()&&Object(D.jsxs)("div",{className:"validation-section",children:[Object(D.jsx)("span",{className:"section-title",children:"\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f"}),Object(D.jsxs)("div",{className:"validation-required-toggle",children:[Object(D.jsx)(Y,{id:r,currentValue:a.validation.required,Text:"hello",onChange:function(e){return c("validation",Object(j.a)(Object(j.a)({},a.validation),{},{required:e.target.checked}),t)}}),Object(D.jsx)("span",{children:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"})]}),("\u0427\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435"===a.type||"\u041f\u0430\u0440\u043e\u043b\u044c"===a.type||"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435"===a.type)&&Object(D.jsxs)("div",{className:"validation-section-minmax",children:[Object(D.jsx)("div",{className:"validation-section-min-max-input",children:Object(D.jsx)(H,{type:"text",label:"\u0427\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435"===a.type?"\u041c\u0438\u043d. \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435":"\u041c\u0438\u043d. \u043a\u043e\u043b-\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",value:a.validation.min,onChange:function(e){return c("validation",Object(j.a)(Object(j.a)({},a.validation),{},{min:e.target.value}),t)},required:!0})}),Object(D.jsx)("div",{className:"validation-section-min-max-input",children:Object(D.jsx)(H,{type:"text",label:"\u0427\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435"===a.type?"\u041c\u0430\u043a\u0441. \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435":"\u041c\u0430\u043a\u0441. \u043a\u043e\u043b-\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",value:a.validation.max,onChange:function(e){return c("validation",Object(j.a)(Object(j.a)({},a.validation),{},{max:e.target.value}),t)},required:!0})})]}),("\u041f\u0430\u0440\u043e\u043b\u044c"===a.type||"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435"===a.type)&&Object(D.jsx)("div",{className:"pattern-block",children:Object(D.jsx)(H,{type:"text",label:"\u0428\u0430\u0431\u043b\u043e\u043d \u0432\u0432\u043e\u0434\u0430",value:a.validation.pattern,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435",onChange:function(e){return c("validation",Object(j.a)(Object(j.a)({},a.validation),{},{pattern:e.target.value}),t)},required:"\u041f\u0430\u0440\u043e\u043b\u044c"===a.type||"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435"===a.type})})]}),Object(D.jsx)("div",{className:"delete-icon",onClick:function(){return o&&void 0!==t&&o(t)},children:Object(D.jsx)("img",{src:Z,alt:"delete-icon"})})]})});n(70);var ne,ae=function(e){var t=l((function(e){return e.schema})),n=t.schemaItem,a=t.isLoading,c=(t.error,Object(s.h)().id),i=Object(r.useState)(c?n.fields:[]),u=Object(o.a)(i,2),d=u[0],b=u[1],p=Object(r.useState)({label:"",key:"",type:"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435",options:[{key:"",value:""}],validation:{required:!0,min:"",max:"",pattern:""}}),O=Object(o.a)(p,2),f=O[0],h=O[1],m=Object(r.useState)({}),v=Object(o.a)(m,2),x=v[0],g=v[1],y=Object(r.useState)(""),S=Object(o.a)(y,2),E=S[0],N=S[1],I=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e}),[e]),t.current}(d.length>0?d.length:0),w=M(),k=w.fetchSchemaItem,C=w.createSchema,T=w.updateSchemaItem,A=Object(s.g)(),L=function(e,t,n){if(void 0===n)h((function(n){return Object(j.a)(Object(j.a)({},n),{},Object(z.a)({},e,t))}));else{var a=d.map((function(a,r){return r===n?Object(j.a)(Object(j.a)({},a),{},Object(z.a)({},e,t)):a}));b((function(e){return a}))}},_=function(e){b((function(t){return t.filter((function(t,n){return e!==n}))}))},R=function(e){if(x[e]===e){var t=Object(j.a)({},x);delete t[e],g((function(e){return Object(j.a)({},t)}))}else g((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(z.a)({},e,e))}))};Object(r.useEffect)((function(){I<d.length&&h((function(e){return{key:"",label:"",type:"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435",options:[{key:"",value:""}],validation:{required:!0,min:"",max:"",pattern:""}}}))}),[d]),Object(r.useEffect)((function(){h((function(e){return Object(j.a)(Object(j.a)({},e),{},{options:[{key:"",value:""}],validation:{required:!0,min:"",max:"",pattern:""}})}))}),[f.type]),Object(r.useEffect)((function(){c?k(c):(b([]),h((function(e){return Object(j.a)(Object(j.a)({},e),{},{label:"",type:"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435",options:[{key:"",value:""}],validation:{required:!0,min:"",max:"",pattern:""}})})))}),[c]),Object(r.useEffect)((function(){c&&(b(n.fields),N(n.name))}),[n]);return a?Object(D.jsx)(P,{}):Object(D.jsxs)("div",{children:[Object(D.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=Object(j.a)({key:f.key,type:f.type,label:f.label,validation:Object(j.a)(Object(j.a)({required:f.validation.required},"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435"===f.type||"\u041f\u0430\u0440\u043e\u043b\u044c"===f.type?{min:f.validation.min,max:f.validation.max,pattern:f.validation.pattern}:{}),"\u0427\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435"===f.type?{min:f.validation.min,max:f.validation.max}:{})},"\u0412\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a"===f.type?{options:f.options}:{});b([].concat(Object(Q.a)(d),[Object(j.a)({},t)]))},id:"property-form",children:[Object(D.jsx)("div",{children:Object(D.jsxs)("div",{className:"property",children:[Object(D.jsx)("h2",{children:"\u041d\u043e\u0432\u0430\u044f \u0441\u0445\u0435\u043c\u0430"}),Object(D.jsx)("div",{className:"schema-name",children:Object(D.jsx)(H,{label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0445\u0435\u043c\u044b",type:"text",placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0445\u0435\u043c\u044b",value:E,required:!0,onChange:function(e){return N(e.target.value)}})}),Object(D.jsx)("div",{className:"divider"}),Object(D.jsx)("h2",{children:"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0441\u0445\u0435\u043c\u044b"}),Object(D.jsx)("div",{className:"schema-description",children:Object(D.jsx)("span",{children:"\u0421\u0445\u0435\u043c\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"})}),Object(D.jsx)("div",{className:"propery-saved-properties",children:d.length>0&&d.map((function(e,t){return Object(D.jsx)("div",{children:Object(D.jsx)(te,{propertyNumber:t,property:e,toggleId:"toggle".concat(t),onUpdateProperty:L,openTabIndex:x[t],handleOpenTab:R,deleteProperty:_})},t+1)}))}),Object(D.jsx)("div",{className:"create-property-block",children:Object(D.jsx)(te,{property:f,propertyOrderNumber:d.length+1,toggleId:"property-toggle",onUpdateProperty:L})})]})}),Object(D.jsxs)("div",{className:"property-action-butttons",children:[Object(D.jsx)(U,{type:"submit",form:"property-form",variant:"inline",name:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"}),Object(D.jsx)(U,{type:"button",disabled:!(d.length>0&&E),onClick:function(){return c?(c&&T(c,{name:E,fields:d}),void A.push(ne.SCHEMAS)):void(d.length>0&&E&&(C(E,d),A.push(ne.SCHEMAS)))},name:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u0445\u0435\u043c\u0443",variant:"fill"})]})]}),Object(D.jsx)("div",{})]})},re=(n(72),function(){var e=M(),t=e.fetchSchemas,n=e.removeSchemaItem,a=l((function(e){return e.schema})).schemas,c=Object(s.g)();Object(r.useEffect)((function(){t()}),[]);return Object(D.jsxs)("div",{children:[Object(D.jsx)("h2",{children:"\u041c\u043e\u0438 \u0441\u0445\u0435\u043c\u044b"}),Object(D.jsx)("div",{className:"schema-list-wrapper",children:a.length>0?a.map((function(e){var t=e.id,a=e.name;e.fields;return Object(D.jsxs)("div",{className:"schema-list-item",children:[Object(D.jsx)("span",{children:a}),Object(D.jsxs)("div",{className:"schemalist-buttons",children:[Object(D.jsx)("span",{onClick:function(){return c.push("".concat(ne.SCHEMAITEM,"/").concat(t))},children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"}),Object(D.jsx)("span",{onClick:function(e){return t&&function(e){c.push("".concat(ne.SCHEMAUPDT,"/").concat(e))}(t)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(D.jsx)("span",{onClick:function(e){return t&&function(e){n(e)}(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]},t)})):Object(D.jsx)("span",{children:" \u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"})}),Object(D.jsx)("div",{className:"schema-list-create-schema-button",children:Object(D.jsx)(U,{name:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0445\u0435\u043c\u0443",variant:"fill",onClick:function(){return c.push("".concat(ne.ADDMODAL))}})})]})}),ce=/\+\d \d\d\d \d\d\d \d\d \d\d/,ie=(n(73),function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)({}),i=Object(o.a)(c,2),u=i[0],d=i[1],b=Object(r.useState)({}),p=Object(o.a)(b,2),O=p[0],f=p[1],h=M().fetchSchemaItem,m=l((function(e){return e.schema})),v=m.schemaItem,x=m.isLoading,g=Object(s.h)().id,y=function(){var e=!0;return v.fields.forEach((function(t){var n=t.label,a=t.validation,r=t.type,c=u[n];!c&&a.required?(f((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(z.a)({},n,"\u041f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e"))})),e=!1):"\u0427\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435"===r&&a.required&&a.min&&a.max?(isNaN(c)||parseInt(c)<parseInt(a.min)||parseInt(c)>parseInt(a.max))&&(f((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(z.a)({},n,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 ".concat(a.min," \u0438 \u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 ").concat(a.max)))})),e=!1):"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435"===r&&a.required&&a.min&&a.max&&a.pattern?c.length<parseInt(a.min)||c.length>parseInt(a.max)?(f((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(z.a)({},n,"\u0421\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 ".concat(a.min," \u0438 \u043d\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 ").concat(a.max)))})),e=!1):new RegExp(a.pattern).test(c)||(f((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(z.a)({},n,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0432\u0443\u0435\u0442 \u0448\u0430\u0431\u043b\u043e\u043d\u0443"))})),e=!1):"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"===r&&a.required&&(ce.test(c)||(f((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(z.a)({},n,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 +7 (999) 999 99 99 \u0438\u043b\u0438 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 8 (999) 999 99 99"))})),e=!1))})),a((function(t){return e?"passed":"failed"})),e},S=function(e,t){d((function(n){return Object(j.a)(Object(j.a)({},n),{},Object(z.a)({},e,t))})),a((function(e){return""})),f((function(t){var n=Object(j.a)({},O);return delete n[e],Object(j.a)({},n)}))};return Object(r.useEffect)((function(){h(g)}),[]),x?Object(D.jsx)("div",{className:"loader-wrapper",children:Object(D.jsx)(P,{})}):Object(D.jsx)("div",{className:"form-item",children:v.uid&&Object(D.jsxs)("div",{className:"fields-container",children:[Object(D.jsx)("h2",{children:v.name}),Object(D.jsx)("form",{id:"form-item",onSubmit:function(e){e.preventDefault(),y()},children:v.fields.map((function(e,t){return Object(D.jsx)("div",{children:e.options?Object(D.jsx)("div",{className:"form-item-dropdown",children:Object(D.jsx)(X,{options:e.options.map((function(e){return e.value})),value:u[e.label]?u[e.label]:"",onChange:function(t){return S(e.label,t)},label:e.validation.required?e.label:"",error:O[e.label]})}):Object(D.jsx)("div",{className:"form-item-shema-item",children:Object(D.jsx)(H,{error:O[e.label],label:e.validation.required?e.label:"",value:u[e.label]?u[e.label]:"",onChange:function(t){return S(e.label,t.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ".concat(e.label)})})},e.key)}))}),Object(D.jsx)("div",{className:"validation-button",children:Object(D.jsx)(U,{variant:"fill",type:"submit",form:"form-item",name:"\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f"})}),""!==n&&Object(D.jsxs)("div",{className:"validation-result ".concat("failed"===n?"validation-error":"validation-success"),children:[Object(D.jsx)("span",{children:"x"}),Object(D.jsx)("span",{children:"passed"===n?"\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u0432":"\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043d\u0435 \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u0430"})]})]})})});!function(e){e.LOGIN="/login",e.ADDMODAL="/addm",e.SCHEMAS="/",e.SCHEMAITEM="/schemas",e.SCHEMAUPDT="/schemaupd"}(ne||(ne={}));var se=[{path:ne.LOGIN,exact:!0,component:B}],oe=[{path:ne.ADDMODAL,component:ae},{path:ne.SCHEMAS,exact:!0,component:re},{path:"".concat(ne.SCHEMAITEM,"/:id"),component:ie},{path:"".concat(ne.SCHEMAUPDT,"/:id"),component:ae}],ue=function(){return l((function(e){return e.auth})).isAuth?Object(D.jsxs)(s.d,{children:[oe.map((function(e){return Object(D.jsx)(s.b,{path:e.path,exact:e.exact,component:e.component},e.path)})),Object(D.jsx)(s.a,{to:ne.SCHEMAS})]}):Object(D.jsxs)(s.d,{children:[se.map((function(e){return Object(D.jsx)(s.b,{path:e.path,exact:e.exact,component:e.component},e.path)})),Object(D.jsx)(s.a,{to:ne.LOGIN})]})},le=(n(74),function(){var e=Object(s.g)(),t=l((function(e){return e.auth})).isAuth,n=M().logout;return Object(D.jsx)("div",{children:Object(D.jsx)("div",{children:t&&Object(D.jsxs)("div",{className:"navbar-wrapper",children:[Object(D.jsxs)("div",{className:"navbar-menu",children:[Object(D.jsx)("img",{src:V}),Object(D.jsx)("div",{onClick:function(){e.push(ne.SCHEMAS)},children:"\u041c\u043e\u0438 \u0441\u0445\u0435\u043c\u044b"},1),Object(D.jsx)("div",{onClick:function(){return e.push(ne.ADDMODAL)},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0445\u0435\u043c\u0443"},1)]}),Object(D.jsx)("div",{onClick:n,className:"logout-btn",children:"\u0412\u044b\u0439\u0442\u0438"},1)]})})})}),de=(n(75),function(){var e=M().isLoggedinAction;return Object(r.useEffect)((function(){e()}),[]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(le,{}),Object(D.jsx)(ue,{})]})}),je=n(34),be=n(49),pe={isAuth:!1,error:"",isLoading:!1,user:{}};var Oe={schemas:[],schemaItem:{uid:"",name:"",fields:[]},error:"",isLoading:!1};var fe={auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SET_AUTH:return Object(j.a)(Object(j.a)({},e),{},{isAuth:t.payload,isLoading:!1});case a.SET_USER:return Object(j.a)(Object(j.a)({},e),{},{user:t.payload});case a.SET_ERROR:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload,isLoading:!1});case a.SET_IS_LOADING:return Object(j.a)(Object(j.a)({},e),{},{isLoading:t.payload});default:return e}},schema:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.SET_SCHEMA:return Object(j.a)(Object(j.a)({},e),{},{schemas:t.payload});case x.SET_SCHEMA_ITEM:return Object(j.a)(Object(j.a)({},e),{},{schemaItem:t.payload});case x.SET_ERROR:return Object(j.a)(Object(j.a)({},e),{},{error:t.payload});case x.SET_IS_LOADING:return Object(j.a)(Object(j.a)({},e),{},{isLoading:t.payload});default:return e}}},he=Object(d.c)(fe),me=Object(d.d)(he,Object(d.a)(be.a));i.a.render(Object(D.jsx)(u.a,{store:me,children:Object(D.jsx)(je.a,{children:Object(D.jsx)(de,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.f9d1351a.chunk.js.map