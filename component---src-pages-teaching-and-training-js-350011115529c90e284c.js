"use strict";(self.webpackChunkpaynterperformance=self.webpackChunkpaynterperformance||[]).push([[413],{772:function(e,n,t){var a=t(6540),l=t(4794);n.A=e=>a.createElement("header",{id:"header",className:"alt"},a.createElement(l.Link,{to:"/",className:"logo"},a.createElement("span",null,"HOME")),a.createElement("nav",null,a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))},2794:function(e,n,t){var a=t(6540);n.A=e=>a.createElement("footer",{id:"footer"},a.createElement("div",{className:"inner"},a.createElement("ul",{className:"icons"},a.createElement("li",null,a.createElement("a",{href:"https://twitter.com/PaynterPerform",className:"icon alt fa-twitter"},a.createElement("span",{className:"label"},"Twitter"))),a.createElement("li",null,a.createElement("a",{href:"https://www.facebook.com/PaynterPerformance",className:"icon alt fa-facebook"},a.createElement("span",{className:"label"},"Facebook"))),a.createElement("li",null,a.createElement("a",{href:"https://www.instagram.com/paynter_performance",className:"icon alt fa-instagram"},a.createElement("span",{className:"label"},"Instagram"))),a.createElement("li",null,a.createElement("a",{href:"https://www.linkedin.com/company/paynterperformance",className:"icon alt fa-linkedin"},a.createElement("span",{className:"label"},"LinkedIn")))),a.createElement("ul",{className:"copyright"},a.createElement("li",null,"© Kai Paynter 2023"),a.createElement("li",null,"Design: ",a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))))},2945:function(e,n,t){var a=t(7387),l=t(6540),i=t(772),c=t(5722),r=t(2794);let o=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(t),t}(0,a.A)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.timeoutId=setTimeout((()=>{this.setState({loading:""})}),100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},t.render=function(){const{children:e}=this.props;return l.createElement("div",{className:`body ${this.state.loading} ${this.state.isMenuVisible?"is-menu-visible":""}`},l.createElement("div",{id:"wrapper"},l.createElement(i.A,{onToggleMenu:this.handleToggleMenu}),e,l.createElement(r.A,null)),l.createElement(c.A,{onToggleMenu:this.handleToggleMenu}))},n}(l.Component);n.A=o},5722:function(e,n,t){var a=t(6540),l=t(4794);n.A=e=>a.createElement("nav",{id:"menu"},a.createElement("div",{className:"inner"},a.createElement("ul",{className:"links"},a.createElement("li",null,a.createElement(l.Link,{onClick:e.onToggleMenu,to:"/"},"Home")),a.createElement("li",null,a.createElement(l.Link,{onClick:e.onToggleMenu,to:"/teaching_and_training"},"Teaching and Training")),a.createElement("li",null,a.createElement(l.Link,{onClick:e.onToggleMenu,to:"/workplace_and_career"},"Workplace and Career")),a.createElement("li",null,a.createElement(l.Link,{onClick:e.onToggleMenu,to:"/whats_new"},"What's New")))),a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))},8270:function(e,n,t){t.r(n),t.d(n,{default:function(){return c}});var a=t(6540),l=t(2945),i=t.p+"static/teaching-853121d91b1773753324d00e749cede4.png";var c=e=>a.createElement(l.A,null,a.createElement("div",{id:"main",className:"alt noFooter"},a.createElement("section",{id:"one"},a.createElement("img",{class:"image fit",src:i,alt:"Teaching and Training"}))))}}]);
//# sourceMappingURL=component---src-pages-teaching-and-training-js-350011115529c90e284c.js.map