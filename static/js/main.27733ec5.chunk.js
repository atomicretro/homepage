(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{17:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),o=a.n(r),l=a(6),i=a(22),s=a(11),u=a(8),m=a.n(u),d={NIGHTSKY:"#000000",PASTEL:"#2753bb",GRANDMA:"#5b1734",MARS:"#590d1e",PURPLY:"#311b14",VIVID:"#0f3044",FOREST:"#000232",RHENIUM:"#252c41",SEWERS:"#0a1e35",NIKAIDO:"#1a1a0d",SEPIA:"#4f2108",WETLAND:"#265341",NOSTALGIA:"#3c5a77"},p={NIGHTSKY:"#ffffff",PASTEL:"#ee7967",GRANDMA:"#669c4b",MARS:"#d9525b",PURPLY:"#6cc4fa",VIVID:"#bc2619",FOREST:"#395c39",RHENIUM:"#d79abe",SEWERS:"#72f9ff",NIKAIDO:"#f19737",SEPIA:"#7ca597",WETLAND:"#a47e45",NOSTALGIA:"#e7a7a5"},f=(a(17),c.a.memo((function(e){var t=e.currentPalette,a=Object(n.useRef)();return Object(n.useEffect)((function(){var e=a.current,n=e.getContext("2d");n.fillStyle=d[t],n.fillRect(0,0,e.width,e.height),n.fill()}),[t]),c.a.createElement("canvas",{className:"night-sky",ref:a,style:{width:"100vw",height:"100vh"}})}))),h=a(20),E=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e},b=function(e,t){var a=function(e){var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t}(t),n=getComputedStyle(e).getPropertyValue("width").slice(0,-2),c=getComputedStyle(e).getPropertyValue("height").slice(0,-2);e.width=n*a,e.height=c*a,e.style.width="".concat(n,"px"),e.style.height="".concat(c,"px")},g=function e(t){var a=this,n=t.x,c=t.y,r=t.size,o=t.alpha,l=t.alphaStep;Object(h.a)(this,e),this.updateAlpha=function(){var e=a.alpha+a.alphaStep;e>=1?(e=1,a.alphaStep=-1*a.alphaStep):e<=0&&(e=0,a.alphaStep=-1*a.alphaStep),a.alpha=e},this.x=n,this.y=c,this.size=r,this.alpha=o,this.alphaStep=l},S=c.a.memo((function(e){var t=e.currentPalette,a=Object(n.useRef)(),r=Object(n.useState)([]),o=Object(s.a)(r,2),l=o[0],i=o[1];return Object(n.useEffect)((function(){var e=a.current,t=e.getContext("2d");b(e,t)}),[]),Object(n.useEffect)((function(){for(var e,t,n=a.current,c=[],r=0;r<1e3;r++){var o=new g({x:E(1,n.width),y:E(1,n.height),size:E(1,5),alpha:(e=0,t=1,Math.random()*(t-e)+e),alphaStep:E(1,11)/2e3});c.push(o)}i(c)}),[]),Object(n.useEffect)((function(){var e,n=a.current.getContext("2d");return function a(){for(var c=0;c<l.length;c++){var r=l[c];n.fillStyle=d[t],n.fillRect(r.x,r.y,r.size,r.size),n.fill(),r.updateAlpha(),n.fillStyle=p[t],n.globalAlpha=r.alpha,n.fillRect(r.x,r.y,r.size,r.size),n.fill()}e=requestAnimationFrame(a)}(),function(){cancelAnimationFrame(e)}})),c.a.createElement("canvas",{className:"stars",ref:a})})),_=c.a.memo((function(e){var t=e.currentPalette;return c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{currentPalette:t}),c.a.createElement(S,{currentPalette:t}))})),v=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("h1",{className:"header__title"},"Alec Cuccia"))},N=a(1),I=(a(27),function(e){var t=e.isHidden?"-1":"0";return c.a.createElement("div",{className:"contact"},c.a.createElement("a",{href:"mailto:ajcuccia+dev@gmail.com",tabIndex:t},"Email"),c.a.createElement("a",{href:"https://www.github.com/atomicretro",rel:"noopener noreferrer",target:"_blank",tabIndex:t},"GitHub"),c.a.createElement("a",{href:"https://www.linkedin.com/in/alec-cuccia",rel:"noopener noreferrer",target:"_blank",tabIndex:t},"LinkedIn"))}),P=function(e){var t=e.isHidden,a=e.isSelected,n=e.palette,r=e._setPalette,o=m()("palette_card palette_card--".concat(n),{"palette_card--selected":a});return c.a.createElement("button",{className:o,onClick:function(e){e.stopPropagation(),r(n)},onKeyDown:function(e){e.stopPropagation()},onMouseUp:function(e){e.currentTarget.blur()},tabIndex:t?"-1":"0"},c.a.createElement("img",{alt:n,className:"palette_card__img",src:"".concat("/homepage","/palettes/").concat(n,".png")}),c.a.createElement("span",{className:"palette_card__desc"},n))},A=["NIGHTSKY","PASTEL","GRANDMA","MARS","PURPLY","VIVID","FOREST","RHENIUM","SEWERS","NIKAIDO","SEPIA","WETLAND","NOSTALGIA"],R=(a(28),function(e){var t=e.isHidden,a=e.currentPalette,n=e._setPalette;return c.a.createElement("div",{className:"home"},c.a.createElement("h2",{className:"home__title"},"Paint the sky"),c.a.createElement("div",{className:"home__grid"},A.map((function(e){return c.a.createElement(P,{isHidden:t,isSelected:e===a,key:e,palette:e,_setPalette:n})}))),c.a.createElement("span",{className:"home__acknowledgment"},"Color palettes inspired by ",c.a.createElement("a",{href:"https://downwellgame.com/",tabIndex:t?"-1":"0"},"downwell")))}),x=function(e){var t=e.desc,a=e.header,n=e.imgDesc,r=e.imgSrc;return c.a.createElement("div",{className:"project_card"},c.a.createElement("img",{alt:n,className:"project_card__img",src:r}),c.a.createElement("div",{className:"project_card__info"},c.a.createElement("h2",{className:"project_card__info__title"},a),c.a.createElement("div",{className:"project_card__info__desc"},t)))},w=(a(29),function(e){var t=e.isHidden?"-1":"0",a=c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Neon Circles is a claustrophobic shoot-em-up in the likeness of Space Invaders and Asteroids. You are stuck on the inside of a circle and can only point towards the center. To shoot the demons shooting you, you must aim through the circle and out the other side."),c.a.createElement("p",null,"Designed and built in a week, Neon Circles is both a love letter to the shoot-em-up genre and the first draft of a larger idea. It was coded solely in JS and is drawn on Canvas. All game mechanics and sprites were designed from scratch."),c.a.createElement("p",null,"Live link: ",c.a.createElement("a",{href:"http://aleccuccia.com/neon_circles",tabIndex:t},"Neon Circles")));return c.a.createElement("div",{className:"projects"},c.a.createElement(x,{desc:a,header:"Neon Circles",imgDesc:"Logo for Neon Circles",imgSrc:"".concat("/homepage","/projects/neon_circles-logo.png"),tabIndex:t}))}),y=function(e){var t=e.isHidden,a=e.palette,n=e._setPalette;return c.a.createElement("section",{className:"display display--".concat(a)},c.a.createElement(N.c,null,c.a.createElement(N.a,{path:"/contact",component:function(){return c.a.createElement(I,{isHidden:t})}}),c.a.createElement(N.a,{path:"/projects",component:function(){return c.a.createElement(w,{isHidden:t})}}),c.a.createElement(N.a,{path:"/",component:function(){return c.a.createElement(R,{isHidden:t,currentPalette:a,_setPalette:n})}})))},j=function(e){var t=e.isHidden,a=e.palette,n=e._setIsHidden,r=function(e){e.currentTarget.blur()},o=t?"-1":"0";return c.a.createElement("nav",{className:"navbar navbar--".concat(a)},c.a.createElement(l.b,{tabIndex:o,to:"/",onMouseUp:r},"Home"),c.a.createElement(l.b,{tabIndex:o,to:"/projects",onMouseUp:r},"Projects"),c.a.createElement(l.b,{tabIndex:o,to:"/contact",onMouseUp:r},"Contact"),c.a.createElement("button",{className:"button-stargaze button-stargaze--".concat(a),onClick:function(e){e.stopPropagation(),n(!t)},onMouseUp:r,tabIndex:o},"Stargaze"))},k=(a(35),function(e){var t=e.isHidden,a=e.palette,n=e._setIsHidden,r=e._setPalette,o=m()("stuff",{"stuff--hidden":t});return c.a.createElement("section",{className:o},c.a.createElement(v,null),c.a.createElement(j,{isHidden:t,palette:a,_setIsHidden:n}),c.a.createElement(y,{isHidden:t,palette:a,_setPalette:r}))}),H=(a(36),a(37),a(38),A[0]),O=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(H),l=Object(s.a)(o,2),u=l[0],d=l[1],p=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(a),f=Object(n.useRef)(null);!1===p&&!0===a&&f.current.focus();var h=m()("main-button","main-button--".concat(u),{"main-button--hidden":!a});return c.a.createElement("main",{className:"app app--".concat(u),onClick:function(e){r(!1)},onKeyDown:function(e){var t=e.keyCode;13!==t&&32!==t||r(!1)},ref:f,tabIndex:a?"0":"-1"},c.a.createElement(_,{currentPalette:u}),c.a.createElement(k,{isHidden:a,palette:u,_setIsHidden:r,_setPalette:d}),c.a.createElement("button",{className:"".concat(h," main-button--random-palette"),onClick:function(e){e.stopPropagation();var t=A.findIndex((function(e){return e===u})),a=Object(i.a)(A);a.splice(t,1);var n=a[E(0,a.length)];d(n)},onMouseUp:function(e){e.currentTarget.blur()},tabIndex:a?"0":"-1"},"Random palette"),c.a.createElement("button",{className:"".concat(h," main-button--instructions"),onMouseUp:function(e){e.currentTarget.blur()},tabIndex:a?"0":"-1"},"Click to enter"))};a(39);o.a.render(c.a.createElement(l.a,null,c.a.createElement(O,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.27733ec5.chunk.js.map