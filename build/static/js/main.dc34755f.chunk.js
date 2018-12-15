(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n.p+"static/media/fruits-watermelon.147c9232.gif"},27:function(e,t,n){e.exports=n(57)},32:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(11),c=n.n(i),o=(n(32),n(4)),r=n(5),l=n(7),u=n(6),m=n(8),h=n(10),d=n(3),p=n(12),f=n.n(p),g=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=n.componentDidMount.bind(Object(h.a)(Object(h.a)(n))),n.state={},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://esi.evetech.net/latest/universe/constellations/".concat(this.props.constellationId)).then(function(t){return e.setState({constellationName:t.data.name,regionId:t.data.region_id}),f.a.get("https://esi.evetech.net/latest/universe/regions/".concat(t.data.region_id))}).then(function(t){e.setState({regionName:t.data.name})}).then(function(){})}},{key:"render",value:function(){return void 0===this.state.regionName?s.a.createElement("div",null,"LOADING...."):s.a.createElement("div",{className:"text-center"},s.a.createElement("a",{className:"",title:"The constellation where the incursion is happening.",href:"https://evemaps.dotlan.net/map/".concat(this.state.regionName,"/").concat(this.state.constellationName)},s.a.createElement("h3",{className:""},this.state.constellationName)),s.a.createElement("a",{className:"",title:"The region that the constellation belongs to.",href:"https://evemaps.dotlan.net/map/".concat(this.state.regionName.split(" ").join("_"))},s.a.createElement("h4",null,"(",this.state.regionName,")")))}}]),t}(a.Component),E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://esi.evetech.net/latest/universe/systems/".concat(this.props.solarSystemId)).then(function(t){e.setState({stagingSolarSystem:t.data.name,securityStatus:t.data.security_status})})}},{key:"render",value:function(){var e="",t=Math.round(10*this.state.securityStatus)/10;return 0===t&&(console.log("null sec system detected: ".concat(this.state.stagingSolarSystem)),t="0.0"),t>=.5?(console.log("high sec system detected: ".concat(this.state.stagingSolarSystem)),e="text-success"):t>0&&t<=.4?(console.log("low sec system detected: ".concat(this.state.stagingSolarSystem)),e="text-warning"):t<=0&&(console.log("high sec system detected: ".concat(this.state.stagingSolarSystem)),e="text-danger"),s.a.createElement("div",{className:"my-2",title:"".concat(this.props.helpText)},s.a.createElement("p",{className:"float-left"},this.props.titleText),s.a.createElement("a",{className:"float-right",href:"https://evemaps.dotlan.net/system/".concat(this.state.stagingSolarSystem)},s.a.createElement("p",{className:e},this.state.stagingSolarSystem," (",t,")")))}}]),t}(a.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=100*Math.round(this.props.influenceValue),t="";return t=0===e?"success":100===e?"danger":"warning",s.a.createElement("div",{className:"text-center",title:" The level of influence the incursion has on the constellation.  This affects the severity of system-wide incursion penalties. Lower influence rating == lower penalties."},s.a.createElement("div",null,"Influence @ ",e,"%"),s.a.createElement(d.h,{value:e,color:t}))}}]),t}(a.Component),v={maxHeight:"200px",overflow:"scroll"},y=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){console.log(this.props.infestedSystems);var e=this.props.infestedSystems.map(function(e){return s.a.createElement(E,{solarSystemId:e,helpText:"Solar systems affected by incursion penalties."})});return s.a.createElement("div",null,s.a.createElement(d.g,{style:v},s.a.createElement("p",null,"Infested Solar Systems:"),s.a.createElement(d.f,{className:"mt-3"},e)))}}]),t}(a.Component),O=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).INCURSIONSTATES={mobilizing:s.a.createElement(d.a,{color:"warning",className:"text-center",id:"mobilizationStatus"},"MOBILIZING"),established:s.a.createElement(d.a,{color:"success",className:"text-center",id:"mobilizationStatus"},"ESTABLISHED"),withdrawing:s.a.createElement(d.a,{color:"danger",className:"text-center",id:"mobilizationStatus"},"WITHDRAWING")},n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{title:"Whether the incursion has just started (Mobilizing), is in progress (Established), or coming to an end (Withdrawing)"},this.INCURSIONSTATES[this.props.incursionState])}}]),t}(a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e="",t="";!0===this.props.hasBoss?(e="Yes",t="text-success"):(e="No",t="text-danger");var n="float-right ".concat(t);return s.a.createElement("div",{className:"my-1",title:"Has the boss site spawned yet?"},s.a.createElement("p",{className:"float-left"},"Has Boss?"),s.a.createElement("p",{className:n},e))}}]),t}(a.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return console.log("".concat(this.props.incursion.has_boss)),s.a.createElement("div",null,s.a.createElement(d.b,{className:"my-2"},s.a.createElement(d.c,null,s.a.createElement(d.d,null,s.a.createElement(d.f,null,s.a.createElement(g,{constellationId:this.props.incursion.constellation_id}),s.a.createElement(O,{incursionState:this.props.incursion.state}),s.a.createElement(b,{influenceValue:this.props.incursion.influence}),s.a.createElement(E,{solarSystemId:this.props.incursion.staging_solar_system_id,titleText:"Staging System: ",helpText:"The solar system the incursion is staging out of."}),s.a.createElement(j,{hasBoss:this.props.incursion.has_boss}),s.a.createElement(y,{infestedSystems:this.props.incursion.infested_solar_systems}))))))}}]),t}(a.Component),N=n(25),w=n.n(N),I=n(26),x=n.n(I),k=(n(55),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n.incs=[],n.getWholeIncursions=n.getWholeIncursions.bind(Object(h.a)(Object(h.a)(n))),n.componentDidMount=n.componentDidMount.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"getWholeIncursions",value:function(){return f.a.get("https://esi.evetech.net/latest/incursions/").then(function(e){return e.data}).catch(function(e){console.log("error fetching incursions: ".concat(e))})}},{key:"componentDidMount",value:function(){var e=this,t=[];this.getWholeIncursions().then(function(e){t=e}).then(function(){e.incs=t.map(function(e){return s.a.createElement(d.e,{xs:"12",lg:"4"},s.a.createElement(S,{incursion:e}))}),e.incs=w()(e.incs,3),e.incs=e.incs.map(function(e){return s.a.createElement(d.i,null,e)})}).then(function(){e.setState({random:"foobar"})})}},{key:"render",value:function(){return void 0===this.incs||0===this.incs.length?s.a.createElement("div",{className:"m-5 text-center"},s.a.createElement("img",{src:x.a,alt:""}),s.a.createElement("p",null,"Please enjoy this watermelon while we fetch incursion data.")):s.a.createElement("div",null,s.a.createElement("div",{class:"container text-center"},s.a.createElement("h1",null,"Incursion Watch"),s.a.createElement("hr",null)),s.a.createElement("div",{className:"text-center"},s.a.createElement("div",null,s.a.createElement("p",null,"Incursions in EVE Online are encounters in which fleets of pilots work to drive back NPC pirate invasions in across the game's universe. They represent high-end PVE content and are equivalent to 'raids' in other MMOs."),s.a.createElement("p",null,"This website is a tool designed to help EVE Online players locate and track the status of Incursions within the game's universe. Refresh the page to get the latest data."),s.a.createElement("p",null,"It pulls data straight from the ",s.a.createElement("a",{href:"https://esi.evetech.net/"},"EVE Online API"),", but certain things aren't available (like who owns null-sec sovereign space). For cases like those, I link systems, regions, and constellations to their respective DOTLAN pages for more info.")),this.incs),s.a.createElement("div",null,s.a.createElement("footer",{className:"footer m-2"},s.a.createElement("div",{className:"container text-center"},s.a.createElement("hr",null),s.a.createElement("span",{className:"text-muted d-block"},"This site was built using ReactJS + bootstrap 4"),s.a.createElement("span",{className:"text-muted d-block"},"(c) 2018 Enrico Tuvera Jr",s.a.createElement("a",{href:"https://github.com/cornjuliox"},s.a.createElement("i",{className:"fab fa-github-square mx-1 fa-lg"})),s.a.createElement("a",{href:"https://linkedin.com/in/enrico-jr-tuvera"},s.a.createElement("i",{className:"fab fa-linkedin mx-1 fa-lg"}))),s.a.createElement("span",{className:"text-muted d-block"},"EVE Online & the API I used here are property of CCP Games")))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.dc34755f.chunk.js.map