(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(2),i=n.n(r),o=n(3),l=n(4),u=n(6),s=n(5),m=(n(12),function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={time:new Date},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({time:new Date})}},{key:"render",value:function(){return a.a.createElement("div",{className:"clock"},a.a.createElement("h1",null,"React clock"),a.a.createElement("p",null,"Current time: ".concat(this.state.time.toLocaleTimeString())))}}]),n}(a.a.Component));i.a.render(a.a.createElement(m,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.135bb90a.chunk.js.map