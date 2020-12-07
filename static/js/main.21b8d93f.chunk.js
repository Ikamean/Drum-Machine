(this.webpackJsonpdrummachine=this.webpackJsonpdrummachine||[]).push([[0],{10:function(e,r,c){},11:function(e,r,c){},12:function(e,r,c){"use strict";c.r(r);var t=c(0),a=c(1),s=c.n(a),d=c(4),o=c.n(d),n=(c(10),c(2));c(11);var m=function(e){var r=e.sound,c=e.setDisplay,s=e.volume;Object(a.useEffect)((function(){return document.addEventListener("keydown",d),function(){document.removeEventListener("keydown",d)}}));var d=function(e){e.keyCode===r.keyCode&&o()},o=function(){var e=document.getElementById(r.keyTrigger);e.currentTime=0,e.play(),c(r.id),e.volume=s};return Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("button",{className:"drum-pad",type:"button",id:r.id,name:r.keyTrigger,onClick:function(){return o()},children:[r.keyTrigger,Object(t.jsx)("audio",{className:"clip",id:r.keyTrigger,src:r.url})]})})},i=[{name:"Drum",keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],u=[{name:"Piano",keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}];var l=function(){var e=Object(a.useState)(""),r=Object(n.a)(e,2),c=r[0],s=r[1],d=Object(a.useState)(1),o=Object(n.a)(d,2),l=o[0],p=o[1],h=Object(a.useState)(i),k=Object(n.a)(h,2),g=k[0],y=k[1],j=0,b=Object(a.useState)(!0),C=Object(n.a)(b,2),f=C[0],O=C[1];Object(a.useEffect)((function(){return document.addEventListener("onClick",v),function(){document.removeEventListener("onClick",v)}}));var v=function(){O(!f),p(f?0:1)};return Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("div",{className:"App row",children:[Object(t.jsx)("div",{className:"col-12",children:Object(t.jsx)("h2",{id:"header",children:"Drum Machine"})}),Object(t.jsxs)("div",{id:"drum-machine",children:[Object(t.jsx)("div",{className:"pads ",children:g.map((function(e){return Object(t.jsx)(m,{sound:e,setDisplay:s,volume:l})}))}),Object(t.jsxs)("div",{className:"display row",children:[Object(t.jsxs)("div",{className:" changeSound col-12 row",children:[Object(t.jsx)("div",{className:" switch col-12",children:Object(t.jsx)("button",{type:"button col-12",className:"switcher",onClick:function(){y(j%2===0?u:i),j++},children:g[0].name})}),Object(t.jsx)("div",{className:"chord col-12",children:Object(t.jsx)("h4",{id:"display",children:c})}),Object(t.jsx)("br",{})]}),Object(t.jsxs)("div",{id:"volume",className:"volume col-12",children:[Object(t.jsx)("input",{type:"range",step:"0.01",value:l,max:"1",min:"0",onChange:function(e){return p(e.target.value)}}),Object(t.jsx)("button",{type:"button",className:"mute col-3",onClick:v,children:"Mute"})]})]})]})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(r){var c=r.getCLS,t=r.getFID,a=r.getFCP,s=r.getLCP,d=r.getTTFB;c(e),t(e),a(e),s(e),d(e)}))};o.a.render(Object(t.jsx)(s.a.StrictMode,{children:Object(t.jsx)(l,{})}),document.getElementById("root")),p()}},[[12,1,2]]]);
//# sourceMappingURL=main.21b8d93f.chunk.js.map