(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{WpR3:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var a=n("q1tI"),i=n.n(a),r=n("axcl"),s=n.n(r),c={angle:"90",spread:"360",startVelocity:"37",elementCount:"67",dragFriction:"0.05",duration:"1420",stagger:"3",width:"12px",height:"11px",perspective:"890px",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"]};function o(e){var t=e.closeTimer,n=new Date("November 27, 2020"),r=new Date(n);r.setDate(r.getDate()+1);var o=Object(a.useState)(r.getTime()),l=o[0],u=(o[1],Object(a.useState)(!1)),f=u[0],p=u[1],m=Object(a.useState)(!1),d=m[0],h=m[1],y=Object(a.useState)(!1),v=y[0],g=y[1],b=Object(a.useState)(!1),E=b[0],w=b[1],M=Object(a.useState)({days:0,hours:0,minutes:0,seconds:0}),O=M[0],N=M[1];Object(a.useEffect)((function(){setInterval((function(){return j()}),1e3),setTimeout((function(){return p(!0)}),400),setTimeout((function(){return h(!0)}),800),setTimeout((function(){return g(!0)}),1600),setTimeout((function(){return w(!0)}),2e3)}),[]);var j=function(){if(l){var e=(new Date).getTime(),t=l-e,n=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),i=Math.floor(t%36e5/6e4),r=Math.floor(t%6e4/1e3),s=[1,2,3,4,5,6,7,8,9];n=""+n,s.includes(a)?a="0"+a:s.includes(i)?i="0"+i:s.includes(r)&&(r="0"+r),N({days:n,hours:a,minutes:i,seconds:r})}};return i.a.createElement("div",{className:"stickyTimerWrap"},i.a.createElement("span",{className:"confetti1"},i.a.createElement(s.a,{active:f,config:c})),i.a.createElement("span",{className:"confetti2"},i.a.createElement(s.a,{active:d,config:c})),i.a.createElement("span",{className:"confetti3"},i.a.createElement(s.a,{active:v,config:c})),i.a.createElement("span",{className:"confetti4"},i.a.createElement(s.a,{active:E,config:c})),i.a.createElement("button",{type:"button",className:"closeAct",onClick:t},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M 5.9902344 4.9902344 A 1.0001 1.0001 0 0 0 5.2929688 6.7070312 L 10.585938 12 L 5.2929688 17.292969 A 1.0001 1.0001 0 1 0 6.7070312 18.707031 L 12 13.414062 L 17.292969 18.707031 A 1.0001 1.0001 0 1 0 18.707031 17.292969 L 13.414062 12 L 18.707031 6.7070312 A 1.0001 1.0001 0 0 0 17.980469 4.9902344 A 1.0001 1.0001 0 0 0 17.292969 5.2929688 L 12 10.585938 L 6.7070312 5.2929688 A 1.0001 1.0001 0 0 0 5.9902344 4.9902344 z"}))),i.a.createElement("div",{className:"stickyTimer"},i.a.createElement("div",{className:"infoWrap"},i.a.createElement("div",null,"Last few seats!"),i.a.createElement("span",null,"REGISTRATIONS CLOSE IN")),i.a.createElement("div",{className:"timerWrap"},i.a.createElement("div",null,i.a.createElement("div",{className:"time"},"0",O.days||"0"),i.a.createElement("span",null,"Days")),i.a.createElement("div",null,i.a.createElement("div",{className:"time"},O.hours||"00"),i.a.createElement("span",null,"Hours")),i.a.createElement("div",null,i.a.createElement("div",{className:"time"},O.minutes||"00"),i.a.createElement("span",null,"Minutes")),i.a.createElement("div",null,i.a.createElement("div",{className:"time"},O.seconds||"00"),i.a.createElement("span",null,"Seconds")))))}},"a/YJ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.confetti=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.assign({},s,c(t)),o=n.elementCount,l=n.colors,u=n.width,f=n.height,p=n.perspective,m=n.angle,d=n.spread,h=n.startVelocity,y=n.decay,v=n.dragFriction,g=n.duration,b=n.stagger,E=n.random;e.style.perspective=p;var w=a(e,o,l,u,f),M=w.map((function(e){return{element:e,physics:i(m,d,h,E)}}));return r(e,M,v,y,g,b)};function a(e,t,n,a,i){return Array.from({length:t}).map((function(t,r){var s=document.createElement("div"),c=n[r%n.length];return s.style["background-color"]=c,s.style.width=a,s.style.height=i,s.style.position="absolute",s.style.willChange="transform, opacity",s.style.visibility="hidden",e.appendChild(s),s}))}function i(e,t,n,a){var i=e*(Math.PI/180),r=t*(Math.PI/180);return{x:0,y:0,z:0,wobble:10*a(),wobbleSpeed:.1+.1*a(),velocity:.5*n+a()*n,angle2D:-i+(.5*r-a()*r),angle3D:-Math.PI/4+a()*(Math.PI/2),tiltAngle:a()*Math.PI,tiltAngleSpeed:.1+.3*a()}}function r(e,t,n,a,i,r){var s=void 0;return new Promise((function(c){requestAnimationFrame((function o(l){s||(s=l);var u=l-s,f=s===l?0:(l-s)/i;t.slice(0,Math.ceil(u/r)).forEach((function(e){!function(e,t,n,a){e.physics.x+=Math.cos(e.physics.angle2D)*e.physics.velocity,e.physics.y+=Math.sin(e.physics.angle2D)*e.physics.velocity,e.physics.z+=Math.sin(e.physics.angle3D)*e.physics.velocity,e.physics.wobble+=e.physics.wobbleSpeed,a?e.physics.velocity*=a:e.physics.velocity-=e.physics.velocity*n,e.physics.y+=3,e.physics.tiltAngle+=e.physics.tiltAngleSpeed;var i=e.physics,r=i.x,s=i.y,c=i.z,o=i.tiltAngle,l=i.wobble,u="translate3d("+(r+10*Math.cos(l))+"px, "+(s+10*Math.sin(l))+"px, "+c+"px) rotate3d(1, 1, 1, "+o+"rad)";e.element.style.visibility="visible",e.element.style.transform=u,e.element.style.opacity=1-t}(e,f,n,a)})),l-s<i?requestAnimationFrame(o):(t.forEach((function(t){if(t.element.parentNode===e)return e.removeChild(t.element)})),c())}))}))}var s={angle:90,spread:45,startVelocity:45,elementCount:50,width:"10px",height:"10px",perspective:"",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"],duration:3e3,stagger:0,dragFriction:.1,random:Math.random};function c(e){return!e.stagger&&e.delay&&(e.stagger=e.delay),e}},axcl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n("q1tI"),s=(a=r)&&a.__esModule?a:{default:a},c=n("a/YJ");var o={position:"relative"},l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setRef=n.setRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidUpdate",value:function(e){!e.active&&this.props.active&&(0,c.confetti)(this.container,this.props.config)}},{key:"setRef",value:function(e){this.container=e}},{key:"render",value:function(){return s.default.createElement("div",{className:this.props.className,style:o,ref:this.setRef})}}]),t}(r.Component);t.default=l}}]);
//# sourceMappingURL=component---src-pages-timer-js-f6b9c882946954b36b5d.js.map