(self.webpackChunkpaynterperformance=self.webpackChunkpaynterperformance||[]).push([[293],{8828:function(e){"use strict";e.exports=Object.assign},2794:function(e,t,n){"use strict";var r=n(6540);t.A=e=>r.createElement("footer",{id:"footer"},r.createElement("div",{className:"inner"},r.createElement("ul",{className:"icons"},r.createElement("li",null,r.createElement("a",{href:"https://twitter.com/PaynterPerform",className:"icon alt fa-twitter"},r.createElement("span",{className:"label"},"Twitter"))),r.createElement("li",null,r.createElement("a",{href:"https://www.facebook.com/PaynterPerformance",className:"icon alt fa-facebook"},r.createElement("span",{className:"label"},"Facebook"))),r.createElement("li",null,r.createElement("a",{href:"https://www.instagram.com/paynter_performance",className:"icon alt fa-instagram"},r.createElement("span",{className:"label"},"Instagram"))),r.createElement("li",null,r.createElement("a",{href:"https://www.linkedin.com/company/paynterperformance",className:"icon alt fa-linkedin"},r.createElement("span",{className:"label"},"LinkedIn")))),r.createElement("ul",{className:"copyright"},r.createElement("li",null,"© Kai Paynter 2023"),r.createElement("li",null,"Design: ",r.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))))},772:function(e,t,n){"use strict";var r=n(6540),a=n(4794);t.A=e=>r.createElement("header",{id:"header",className:"alt"},r.createElement(a.Link,{to:"/",className:"logo"},r.createElement("span",null,"HOME")),r.createElement("nav",null,r.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))},5722:function(e,t,n){"use strict";var r=n(6540),a=n(4794);t.A=e=>r.createElement("nav",{id:"menu"},r.createElement("div",{className:"inner"},r.createElement("ul",{className:"links"},r.createElement("li",null,r.createElement(a.Link,{onClick:e.onToggleMenu,to:"/"},"Home")),r.createElement("li",null,r.createElement(a.Link,{onClick:e.onToggleMenu,to:"/teaching_and_training"},"Teaching and Training")),r.createElement("li",null,r.createElement(a.Link,{onClick:e.onToggleMenu,to:"/workplace_and_career"},"Workplace and Career")),r.createElement("li",null,r.createElement(a.Link,{onClick:e.onToggleMenu,to:"/whats_new"},"What's New")))),r.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))},8384:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});var r=n(7387),a=n(6540),o=n(772),i=n(5722);var l=e=>a.createElement("section",{id:"contact"},a.createElement("div",{className:"inner"},a.createElement("section",null,a.createElement("form",{method:"post",action:"https://formspree.io/f/mvodweje"},a.createElement("div",{className:"field half first"},a.createElement("label",{htmlFor:"name"},"Name"),a.createElement("input",{type:"text",name:"name",id:"name"})),a.createElement("div",{className:"field half"},a.createElement("label",{htmlFor:"email"},"Email"),a.createElement("input",{type:"text",name:"email",id:"email"})),a.createElement("div",{className:"field"},a.createElement("label",{htmlFor:"message"},"Message"),a.createElement("textarea",{name:"message",id:"message",rows:"6"})),a.createElement("ul",{className:"actions"},a.createElement("li",null,a.createElement("input",{type:"submit",value:"Send Message",className:"special"})),a.createElement("li",null,a.createElement("input",{type:"reset",value:"Clear"}))))),a.createElement("section",{className:"split"},a.createElement("section",null,a.createElement("div",{className:"contact-method"},a.createElement("span",{className:"icon alt fa-envelope"}),a.createElement("h3",null,"Email"),a.createElement("a",{href:"mailto:info@paynterperformance.com"},"info@paynterperformance.com"))),a.createElement("section",null,a.createElement("div",{className:"contact-method"},a.createElement("span",{className:"icon alt fa-home"}),a.createElement("h3",null,"Address"),a.createElement("span",null,"Carlton Crescent",a.createElement("br",null),"Sydney",a.createElement("br",null),"NSW 2130",a.createElement("br",null),"AU"))),a.createElement("section",null,a.createElement("div",{className:"contact-method"},a.createElement("span",{className:"icon alt fa-home"}),a.createElement("h3",null,"Address"),a.createElement("span",null,"Occidental Blvd",a.createElement("br",null),"Los Angeles",a.createElement("br",null),"CA 90057",a.createElement("br",null),"USA")))))),c=n(2794);var s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isMenuVisible:!1,loading:"is-loading"},n.handleToggleMenu=n.handleToggleMenu.bind(n),n}(0,r.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.timeoutId=setTimeout((()=>{this.setState({loading:""})}),100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},n.render=function(){const{children:e}=this.props;return a.createElement("div",{className:`body ${this.state.loading} ${this.state.isMenuVisible?"is-menu-visible":""}`},a.createElement("div",{id:"wrapper"},a.createElement(o.A,{onToggleMenu:this.handleToggleMenu}),e,a.createElement(l,null),a.createElement(c.A,null)),a.createElement(i.A,{onToggleMenu:this.handleToggleMenu}))},t}(a.Component)},5648:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Oe}});var r,a,o,i,l=n(7387),c=n(6540),s=n(4794),u=n(5556),m=n.n(u),f=n(2098),p=n.n(f),d=n(115),h=n.n(d),y=n(8828),E=n.n(y),g="bodyAttributes",b="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),A="cssText",C="href",k="http-equiv",O="innerHTML",N="itemprop",S="name",j="property",L="rel",P="src",M="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",_="defer",R="encodeSpecialCharacters",D="onChangeClientState",H="titleTemplate",F=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),B=[T.NOSCRIPT,T.SCRIPT,T.STYLE],q="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=X(e,T.TITLE),n=X(e,H);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,x);return t||r||void 0},K=function(e){return X(e,D)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],c=l.toLowerCase();-1===t.indexOf(c)||n===L&&"canonical"===e[n].toLowerCase()||c===L&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==O&&l!==A&&l!==N||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var l=o[i],c=E()({},r[l],a[l]);r[l]=c}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Z=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:n.g.requestAnimationFrame||Z,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,m=e.title,f=e.titleAttributes;ce(T.BODY,r),ce(T.HTML,a),le(m,f);var p={baseTag:se(T.BASE,n),linkTags:se(T.LINK,o),metaTags:se(T.META,i),noscriptTags:se(T.NOSCRIPT,l),scriptTags:se(T.SCRIPT,s),styleTags:se(T.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(T.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(q),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var c=i[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var u=o.indexOf(c);-1!==u&&o.splice(u,1)}for(var m=o.length-1;m>=0;m--)n.removeAttribute(o[m]);a.length===o.length?n.removeAttribute(q):n.getAttribute(q)!==i.join(",")&&n.setAttribute(q,i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"["+q+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===A)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(q,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[q]=!0,a=me(n,r),[c.createElement(T.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+" "+q+'="true" '+a+">"+V(o,r)+"</"+e+">":"<"+e+" "+q+'="true">'+V(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case b:return{toComponent:function(){return me(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[q]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===O||n===A){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===O||e===A)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+" "+q+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,m=void 0===u?"":u,f=e.titleAttributes;return{base:fe(T.BASE,t,r),bodyAttributes:fe(g,n,r),htmlAttributes:fe(b,a,r),link:fe(T.LINK,o,r),meta:fe(T.META,i,r),noscript:fe(T.NOSCRIPT,l,r),script:fe(T.SCRIPT,c,r),style:fe(T.STYLE,s,r),title:fe(T.TITLE,{title:m,titleAttributes:f},r)}},de=p()((function(e){return{baseTag:J([C,M],e),bodyAttributes:G(g,e),defer:X(e,_),encode:X(e,R),htmlAttributes:G(b,e),linkTags:Q(T.LINK,[L,C],e),metaTags:Q(T.META,[S,w,k,j,N],e),noscriptTags:Q(T.NOSCRIPT,[O],e),onChangeClientState:K(e),scriptTags:Q(T.SCRIPT,[P,O],e),styleTags:Q(T.STYLE,[A],e),title:z(e),titleAttributes:G(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),he=(a=de,i=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!h()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case T.TITLE:return W({},a,((t={})[r.type]=i,t.titleAttributes=W({},o),t));case T.BODY:return W({},a,{bodyAttributes:W({},o)});case T.HTML:return W({},a,{htmlAttributes:W({},o)})}return W({},a,((n={})[r.type]=W({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[F[n]||n]=e[n],t}),t)}($(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=$(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(a,r)},Y(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:m().object,bodyAttributes:m().object,children:m().oneOfType([m().arrayOf(m().node),m().node]),defaultTitle:m().string,defer:m().bool,encodeSpecialCharacters:m().bool,htmlAttributes:m().object,link:m().arrayOf(m().object),meta:m().arrayOf(m().object),noscript:m().arrayOf(m().object),onChangeClientState:m().func,script:m().arrayOf(m().object),style:m().arrayOf(m().object),title:m().string,titleAttributes:m().object,titleTemplate:m().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;var ye=he,Ee=n(8384);var ge=e=>c.createElement("section",{id:"banner",className:"major"},c.createElement("div",{className:"inner"},c.createElement("header",{className:"major"},c.createElement("h1",null,"Hi, my name is Kai")),c.createElement("div",{className:"content"},c.createElement("p",null,"Welcome. I help heart-centered folk realize their dreams."),c.createElement("ul",{className:"actions"},c.createElement("li",null,c.createElement("a",{href:"#one",className:"button next scrolly"},"Get Started")))))),be=n.p+"static/Orange_Socks-8917d9035934ed12b961760ba510a563.jpg",ve=n.p+"static/Filtered_Eggs-f7aee71c744be6cc92979d4b50cc59d6.jpg",Te=n.p+"static/Red_dress-68f97c81d21657a372efca1a35f770de.jpg",we=n.p+"static/Record_man-2f8f08a12c8235c71129b0b18a2b8bf3.jpg",Ae=n.p+"static/Cloud_teacup-c95a0672fdcea212470128555a34e7a5.jpg",Ce=n.p+"static/Spaghetti_paintbrush_bubbles-e37572ca7009e3317a1aaa0acf8cbe11.jpg";let ke=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.A)(t,e),t.prototype.render=function(){return c.createElement(Ee.A,null,c.createElement(ye,{title:"Paynter Performance",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),c.createElement(ge,null),c.createElement("div",{id:"main"},c.createElement("section",{id:"one",className:"tiles"},c.createElement("article",{style:{backgroundImage:`url(${be})`}},c.createElement("header",{className:"major"},c.createElement("h3",null,"Directing"),c.createElement("p",null,"Film/TV & Theatre ")),c.createElement(s.Link,{to:"https://beartigerproductions.com",target:"_blank",rel:"noreferrer",className:"link primary"})),c.createElement("article",{style:{backgroundImage:`url(${ve})`}},c.createElement("header",{className:"major"},c.createElement("h3",null,"Teaching & Training"),c.createElement("p",null,"Performing Artists, Athletes, & Creatives")),c.createElement(s.Link,{to:"/teaching_and_training",className:"link primary"})),c.createElement("article",{style:{backgroundImage:`url(${Te})`}},c.createElement("header",{className:"major"},c.createElement("h3",null,"Talent Management"),c.createElement("p",null,"Boutique Management Company")),c.createElement(s.Link,{to:"https://kapmgmt.paynterperformance.com",target:"_blank",rel:"noreferrer",className:"link primary"})),c.createElement("article",{style:{backgroundImage:`url(${we})`}},c.createElement("header",{className:"major"},c.createElement("h3",null,"Workplace & Career"),c.createElement("p",null,"Corporate Optimization & Strategy")),c.createElement(s.Link,{to:"/workplace_and_career",className:"link primary"})),c.createElement("article",{style:{backgroundImage:`url(${Ae})`}},c.createElement("header",{className:"major"},c.createElement("h3",null,"Programs"),c.createElement("p",null,"One-Off Courses & Seasonal Offers")),c.createElement(s.Link,{to:"https://linktr.ee/paynterperformance",target:"_blank",rel:"noreferrer",className:"link primary"})),c.createElement("article",{style:{backgroundImage:`url(${Ce})`}},c.createElement("header",{className:"major"},c.createElement("h3",null,"What's New"),c.createElement("p",null,"New and exciting updates")),c.createElement(s.Link,{to:"/whats_new",className:"link primary"}))),c.createElement("section",{id:"two"},c.createElement("div",{className:"inner"},c.createElement("header",{className:"major"},c.createElement("h2",null,"Additional Resources")),c.createElement("p",null,"Need more help? We got you covered."),c.createElement("ul",{className:"actions"},c.createElement("li",null,c.createElement(s.Link,{to:"https://www.youtube.com/playlist?list=PLSRJurNadm4enwGT53-0xjEYLDpj7mV4p",target:"_blank",rel:"noreferrer",className:"button next"},"Get Started")))))))},t}(c.Component);var Oe=ke},115:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(!o(e[c],i[c]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],i.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof i.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof i.toString)return e.toString()===i.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!o(e[s[c]],i[s[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},2098:function(e,t,n){"use strict";var r,a=n(6540),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),m.canUseDOM?t(c):n&&(c=n(c))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(m,"canUseDOM",l),m}}}}]);
//# sourceMappingURL=component---src-pages-index-js-ae88fec31e095ab1d176.js.map