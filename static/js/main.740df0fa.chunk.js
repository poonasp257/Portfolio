(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),r=n.n(i),l=(n(15),n(1)),c=n(2),s=n(4),p=n(3),u=n(5),h=(n(16),n(6)),m=(n(17),n(18),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={menuOpen:!1},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleMenuClick",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"handleLinkClick",value:function(){this.setState({menuOpen:!1})}},{key:"render",value:function(){var e=this,t={button:{position:"sticky",top:10,left:0,right:10,float:"right",zIndex:"99",opacity:.9,display:"flex",color:"gray"},footer:{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw",height:"100vh"}},n=["Home.","Project.","About Me."].map(function(t,n){return o.a.createElement(d,{key:n,delay:"".concat(.1*n,"s"),onClick:function(){e.handleLinkClick()}},t)});return o.a.createElement("div",null,o.a.createElement("div",{style:t.button},o.a.createElement(v,{open:this.state.menuOpen,onClick:function(){return e.handleMenuClick()},color:"gray"})),o.a.createElement(f,{open:this.state.menuOpen},n),o.a.createElement("div",{style:t.footer},o.a.createElement(y,{open:this.state.menuOpen})))}}]),t}(a.Component)),d=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={hover:!1},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleHover",value:function(){this.setState({hover:!this.state.hover})}},{key:"render",value:function(){var e=this,t={container:{opacity:0,animation:"1s appear forwards",animationDelay:this.props.delay},menuItem:{fontFamily:"'Open Sans', sans-serif",fontSize:"1.2rem",padding:"1rem 0",margin:"0 5%",cursor:"pointer",color:this.state.hover?"#87cefa":"gray",transition:"color 0.2s ease-in-out",animation:"0.5s slideIn forwards",animationDelay:this.props.delay},line:{width:"90%",height:"1px",background:"gray",margin:"0 auto",animation:"0.5s shrink forwards",animationDelay:this.props.delay}};return o.a.createElement("div",{style:t.container},o.a.createElement("div",{style:t.menuItem,onMouseEnter:function(){e.handleHover()},onMouseLeave:function(){e.handleHover()},onClick:this.props.onClick},this.props.children),o.a.createElement("div",{style:t.line}))}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={open:n.props.open},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"render",value:function(){var e={container:{position:"absolute",top:0,left:0,height:this.state.open?"100%":0,width:"100vw",display:"flex",flexDirection:"column",background:"white",opacity:.95,color:"#fafafa",transition:"height 0.3s ease",zIndex:2},menuList:{paddingTop:"3rem"}};return o.a.createElement("div",{style:e.container},this.state.open?o.a.createElement("div",{style:e.menuList},this.props.children):null)}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={open:n.props.open,color:n.props.color?n.props.color:"gray"},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"handleClick",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this,t={container:{height:"32px",width:"32px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer",padding:"4px"},line:{height:"2px",width:"40px",background:this.state.color,transition:"all 0.5s ease"},lineTop:{transform:this.state.open?"translateX(1px) rotate(45deg)":"none",transformOrigin:"top left",marginBottom:"10px"},lineMiddle:{opacity:this.state.open?0:1,transform:this.state.open?"translateX(-16px)":"none"},lineBottom:{transform:this.state.open?"translateY(4px) rotate(-45deg)":"none",transformOrigin:"top left",marginTop:"10px"}};return o.a.createElement("div",{style:t.container,onClick:this.props.onClick?this.props.onClick:function(){e.handleClick()}},o.a.createElement("div",{style:Object(h.a)({},t.line,t.lineTop)}),o.a.createElement("div",{style:Object(h.a)({},t.line,t.lineMiddle)}),o.a.createElement("div",{style:Object(h.a)({},t.line,t.lineBottom)}))}}]),t}(a.Component),y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={open:n.props.open},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={footer:{position:"absolute",bottom:0,width:"100%",marginTop:"1rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"black"},line:{height:"1px",width:"90%",background:"black"},text:{padding:"0.5rem"},social:{width:"1.6em",height:"1.6em"}};return o.a.createElement("div",{style:e.footer},o.a.createElement("div",{style:e.line}),o.a.createElement("ul",{className:"social"},o.a.createElement("li",{className:"social__icon_1"},o.a.createElement("a",{href:"https://github.com/poonasp257",target:"_blank"})),o.a.createElement("li",{className:"social__icon_2"},o.a.createElement("a",{href:"https://github.com/poonasp257",target:"_blank"}))))}}]),t}(a.Component),b=m,g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",height:"100vh"}},o.a.createElement(b,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(21)}},[[9,1,2]]]);
//# sourceMappingURL=main.740df0fa.chunk.js.map