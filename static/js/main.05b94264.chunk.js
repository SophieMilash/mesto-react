(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(6),o=n.n(i),r=(n(14),n(9)),s=n(2),l=n.p+"static/media/logo.bbe2a6ea.svg",u=n(0);var d=function(){return Object(u.jsx)("header",{className:"header page__section page__section_place_header",children:Object(u.jsx)("a",{href:"#",target:"_self",children:Object(u.jsx)("img",{src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto Russia",className:"header__logo"})})})};var _=function(){return Object(u.jsx)("footer",{className:"footer page__section page__section_place_footer",children:Object(u.jsx)("p",{className:"footer__copyright",children:"\xa92021 Mesto Russia"})})};var p=function(){return Object(u.jsx)("section",{className:"loader loader_visible",children:Object(u.jsx)("div",{className:"loader__triangle triangle-spin"})})},b=c.a.createContext();var m=function(e){var t=c.a.useContext(b),n=e.card.owner._id===t._id,a="button card__delete-button ".concat(n?"":"card__delete-button_hidden"),i=e.card.likes.some((function(e){return e._id===t._id})),o="button card__like-button ".concat(i?"card__like-button_active":"");return Object(u.jsxs)("article",{className:"card",children:[Object(u.jsx)("div",{className:"card__image-wrap",children:Object(u.jsx)("img",{src:e.card.link,alt:e.card.name,className:"card__image",onClick:function(){e.onCardClick(e.card)}})}),Object(u.jsx)("button",{type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",className:a,onClick:function(){e.onCardDelete(),e.setCardDelete(e.card)}}),Object(u.jsxs)("div",{className:"card__info",children:[Object(u.jsx)("h2",{className:"card__title",children:e.card.name}),Object(u.jsxs)("div",{className:"card__like-wrap",children:[Object(u.jsx)("button",{type:"button","aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",className:o,onClick:function(){e.onCardLike(e.card)}}),Object(u.jsx)("p",{className:"card__like-number",children:e.card.likes.length})]})]})]})};var h=function(e){var t=c.a.useContext(b);return Object(u.jsxs)("main",{className:"content",children:[e.isLoading&&Object(u.jsx)(p,{}),Object(u.jsxs)("section",{className:"profile page__section page__section_place_profile ".concat(e.isLoading&&"page__section_hidden"),children:[Object(u.jsxs)("div",{className:"profile__avatar-wrap",children:[Object(u.jsx)("img",{src:t.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"}),Object(u.jsx)("button",{type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",className:"button profile__avatar-edit",onClick:e.onEditAvatar})]}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsx)("h1",{className:"profile__name",children:t.name}),Object(u.jsx)("button",{type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",className:"button button_action_edit profile__info-button",onClick:e.onEditProfile}),Object(u.jsx)("p",{className:"profile__activity",children:t.about})]}),Object(u.jsx)("button",{type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",className:"button button_action_add-card profile__button",onClick:e.onAddCard})]}),Object(u.jsx)("section",{className:"cards page__section page__section_place_cards ".concat(e.isLoading&&"page__section_hidden"),children:e.cards.map((function(t){return Object(u.jsx)(m,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,setCardDelete:e.setCardDelete},t._id)}))})]})};var j=function(){return Object(u.jsxs)("span",{className:"dots-loader dots-loader_visible",children:[Object(u.jsx)("span",{className:"dots-loader__dot dot-pulse",children:"."}),Object(u.jsx)("span",{className:"dots-loader__dot dot-pulse",children:"."}),Object(u.jsx)("span",{className:"dots-loader__dot dot-pulse",children:"."})]})};var f=function(e){return Object(u.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(u.jsxs)("div",{className:"popup__container popup__container_type_".concat(e.name),children:[Object(u.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"button popup__close-button",onClick:e.onClose}),Object(u.jsx)("form",{className:"form",name:e.name,onSubmit:e.onSubmit,noValidate:!0,children:Object(u.jsxs)("fieldset",{className:"form__profile-info",children:[Object(u.jsx)("legend",{className:"form__title",children:e.title}),e.children,Object(u.jsxs)("button",{type:"submit",name:"submit",className:"button button_action_submit form__button form__button_position_".concat(e.name),disabled:!!e.isFormLoading||"",children:[e.buttonText,e.isFormLoading&&Object(u.jsx)(j,{})]})]})})]})})};var O=function(e){var t=c.a.useContext(b),n=c.a.useState(""),a=Object(s.a)(n,2),i=a[0],o=a[1],r=c.a.useState(""),l=Object(s.a)(r,2),d=l[0],_=l[1];return c.a.useEffect((function(){o(t.name),_(t.about)}),[t]),Object(u.jsxs)(f,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:i,about:d})},isFormLoading:e.isFormLoading,children:[Object(u.jsx)("input",{type:"text",name:"name",id:"name-input",minLength:"2",maxLength:"40",required:!0,className:"form__input form__input_type_name",placeholder:"\u0418\u043c\u044f",value:i,onChange:function(e){o(e.target.value)}}),Object(u.jsx)("span",{className:"form__input-error name-input-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."}),Object(u.jsx)("input",{type:"text",name:"activity",id:"activity-input",minLength:"2",maxLength:"200",required:!0,className:"form__input form__input_type_activity",placeholder:"\u041e \u0441\u0435\u0431\u0435",value:d,onChange:function(e){_(e.target.value)}}),Object(u.jsx)("span",{className:"form__input-error activity-input-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."})]})};var v=function(e){var t=c.a.useRef();return Object(u.jsxs)(f,{name:"avatar-edit",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},isFormLoading:e.isFormLoading,children:[Object(u.jsx)("input",{type:"url",name:"link",id:"link-input",required:!0,className:"form__input form__input_type_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:t}),Object(u.jsx)("span",{className:"form__input-error link-input-error",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430."})]})};var x=function(e){var t=c.a.useState(""),n=Object(s.a)(t,2),a=n[0],i=n[1],o=c.a.useState(""),r=Object(s.a)(o,2),l=r[0],d=r[1];return Object(u.jsxs)(f,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddCard({name:a,link:l})},isFormLoading:e.isFormLoading,children:[Object(u.jsx)("input",{type:"text",name:"title",id:"title-input",minLength:"2",maxLength:"30",required:!0,className:"form__input form__input_type_title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onChange:function(e){i(e.target.value)}}),Object(u.jsx)("span",{className:"form__input-error title-input-error",children:"\u0412\u044b \u043f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u043b\u0438 \u044d\u0442\u043e \u043f\u043e\u043b\u0435."}),Object(u.jsx)("input",{type:"url",name:"link",id:"link-input",required:!0,className:"form__input form__input_type_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:function(e){d(e.target.value)}}),Object(u.jsx)("span",{className:"form__input-error link-input-error",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430."})]})};var g=function(e){return Object(u.jsx)("div",{className:"popup popup_type_image ".concat(e.card?"popup_opened":""),children:Object(u.jsxs)("div",{className:"popup__container popup__container_type_image",children:[Object(u.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"button popup__close-button",onClick:e.onClose}),Object(u.jsxs)("figure",{className:"popup__image-wrap",children:[Object(u.jsx)("img",{src:e.card.link,alt:e.card.name,className:"popup__image"}),Object(u.jsx)("figcaption",{className:"popup__caption",children:e.card.name})]})]})})};var C=function(e){return Object(u.jsx)(f,{name:"deletion-confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onConfirmDeletion()},isFormLoading:e.isFormLoading})},k=n(7),N=n(8),y=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(k.a)(this,e),this._baseUrl=n,this._headers=a}return Object(N.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(t),about:"".concat(n)})}).then(this._checkResponse)}},{key:"setAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:"".concat(t)})}).then(this._checkResponse)}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(t),link:"".concat(n)})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"setLikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"removeLikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.removeLikeCard(e):this.setLikeCard(e)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-24",headers:{authorization:"c72c9866-e9ca-4f90-b055-72d87299b8be","Content-Type":"application/json"}});var L=function(){var e=c.a.useState(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=c.a.useState(!1),o=Object(s.a)(i,2),l=o[0],p=o[1],m=c.a.useState(!1),j=Object(s.a)(m,2),f=j[0],k=j[1],N=c.a.useState(!1),L=Object(s.a)(N,2),S=L[0],U=L[1],F=c.a.useState(null),D=Object(s.a)(F,2),T=D[0],E=D[1],A=c.a.useState({name:"",about:"",avatar:""}),R=Object(s.a)(A,2),P=R[0],w=R[1],I=c.a.useState([]),q=Object(s.a)(I,2),J=q[0],M=q[1],B=c.a.useState({}),H=Object(s.a)(B,2),z=H[0],V=H[1],G=c.a.useState(!1),K=Object(s.a)(G,2),Q=K[0],W=K[1],X=c.a.useState(!1),Y=Object(s.a)(X,2),Z=Y[0],$=Y[1];function ee(){a(!1),p(!1),k(!1),U(!1),E(null)}return c.a.useEffect((function(){W(!0),Promise.all([y.getUserInfo(),y.getInitialCards()]).then((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];w(n),M(a)})).catch((function(e){return console.log(e)})).finally((function(){return W(!1)}))}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(b.Provider,{value:P,children:[Object(u.jsx)(d,{}),Object(u.jsx)(h,{onEditAvatar:function(){p(!0)},onEditProfile:function(){a(!0)},onAddCard:function(){k(!0)},onCardClick:function(e){E(e)},cards:J,isLoading:Q,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===P._id}));y.changeLikeCardStatus(e._id,t).then((function(t){M((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))}))},onCardDelete:function(){U(!0)},setCardDelete:V}),Object(u.jsx)(_,{}),Object(u.jsx)(O,{isOpen:n,onClose:ee,onUpdateUser:function(e){var t=e.name,n=e.about;$(!0),y.setUserInfo({name:t,about:n}).then((function(e){w({name:t,about:n,avatar:e.avatar}),ee()})).catch((function(e){return console.log(e)})).finally((function(){return $(!1)}))},isFormLoading:Z}),Object(u.jsx)(v,{isOpen:l,onClose:ee,onUpdateAvatar:function(e){var t=e.avatar;$(!0),y.setAvatar({avatar:t}).then((function(e){w({name:e.name,about:e.about,avatar:t}),ee()})).catch((function(e){return console.log(e)})).finally((function(){return $(!1)}))},isFormLoading:Z}),Object(u.jsx)(x,{isOpen:f,onClose:ee,onAddCard:function(e){var t=e.name,n=e.link;$(!0),y.addCard({name:t,link:n}).then((function(e){M([e].concat(Object(r.a)(J))),ee()})).catch((function(e){return console.log(e)})).finally((function(){return $(!1)}))},isFormLoading:Z}),Object(u.jsx)(g,{card:null!==T&&T,onClose:ee}),Object(u.jsx)(C,{isOpen:S,onClose:ee,onConfirmDeletion:function(){$(!0),y.deleteCard(z._id).then((function(){M((function(e){return e.filter((function(e){return e._id!==z._id}))})),ee()})).catch((function(e){return console.log(e)})).finally((function(){return $(!1)}))},isFormLoading:Z})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root")),S()}},[[16,1,2]]]);
//# sourceMappingURL=main.05b94264.chunk.js.map