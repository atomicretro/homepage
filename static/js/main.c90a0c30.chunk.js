(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],Array(19).concat([function(e,t,n){},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s={};n.r(s),n.d(s,"ExplanationAlien",(function(){return J})),n.d(s,"ExplanationClock",(function(){return K})),n.d(s,"ExplanationHover",(function(){return B})),n.d(s,"ExplanationMonster",(function(){return W})),n.d(s,"ExplanationSegments",(function(){return Y}));var c=n(1),a=n.n(c),i=n(21),r=n.n(i),o=n(4),l=n(9),d=Object(c.createContext)(),h=["NIGHTSKY","PASTEL","GRANDMA","MARS","PURPLY","VIVID","FOREST","RHENIUM","SEWERS","NIKAIDO","SEPIA","WETLAND","NOSTALGIA"],u=n(0),j=h[0],b=function(e){var t=Object(c.useState)(j),n=Object(l.a)(t,2),s={currentPalette:n[0],_setPalette:n[1]};return Object(u.jsx)(d.Provider,{value:s,children:e.children})},p=n(10),x=n(5),m=n.n(x),f=n(2),g={NIGHTSKY:"#000000",PASTEL:"#2753bb",GRANDMA:"#5b1734",MARS:"#590d1e",PURPLY:"#311b14",VIVID:"#0f3044",FOREST:"#000232",RHENIUM:"#252c41",SEWERS:"#0a1e35",NIKAIDO:"#1a1a0d",SEPIA:"#4f2108",WETLAND:"#265341",NOSTALGIA:"#3c5a77"},O={NIGHTSKY:"#ffffff",PASTEL:"#ee7967",GRANDMA:"#669c4b",MARS:"#d9525b",PURPLY:"#6cc4fa",VIVID:"#bc2619",FOREST:"#395c39",RHENIUM:"#d79abe",SEWERS:"#72f9ff",NIKAIDO:"#f19737",SEPIA:"#7ca597",WETLAND:"#a47e45",NOSTALGIA:"#e7a7a5"},_=(n(19),a.a.memo((function(e){var t=e.currentPalette,n=Object(c.useRef)();return Object(c.useEffect)((function(){var e=n.current,s=e.getContext("2d");s.fillStyle=g[t],s.fillRect(0,0,e.width,e.height),s.fill()}),[t]),Object(u.jsx)("canvas",{className:"night-sky",ref:n,style:{width:"100vw",height:"100vh"}})}))),v=n(22),k=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e},y=function(e,t){var n=function(e){var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t}(t),s=getComputedStyle(e).getPropertyValue("width").slice(0,-2),c=getComputedStyle(e).getPropertyValue("height").slice(0,-2);e.width=s*n,e.height=c*n,e.style.width="".concat(s,"px"),e.style.height="".concat(c,"px")},N=function e(t){var n=this,s=t.x,c=t.y,a=t.size,i=t.alpha,r=t.alphaStep,o=t.alphaDirection;Object(v.a)(this,e),this.updateAlpha=function(){var e=n.alpha+n.alphaStep;e>=1?(e=1,n.alphaStep=-1*n.alphaStep):e<=0&&(e=0,n.alphaStep=-1*n.alphaStep),n.alpha=e},this.x=s,this.y=c,this.size=a,this.alpha=i,this.alphaStep=r,this.alphaDirection=o},S=a.a.memo((function(e){var t=e.currentPalette,n=Object(c.useRef)(),s=Object(c.useState)([]),a=Object(l.a)(s,2),i=a[0],r=a[1];return Object(c.useEffect)((function(){var e=n.current,t=e.getContext("2d");y(e,t)}),[]),Object(c.useEffect)((function(){for(var e=n.current,t=[],s=0;s<1e3;s++){var c=k(5,11)/3e3;c*=1===k(1,3)?-1:1;var a=new N({x:k(1,e.width),y:k(1,e.height),size:k(1,5),alpha:0,alphaStep:c});t.push(a)}r(t)}),[]),Object(c.useEffect)((function(){var e,s=n.current.getContext("2d");return function n(){for(var c=0;c<i.length;c++){var a=i[c];s.fillStyle=g[t],s.fillRect(a.x,a.y,a.size,a.size),s.fill(),a.updateAlpha(),s.fillStyle=O[t],s.globalAlpha=a.alpha,s.fillRect(a.x,a.y,a.size,a.size),s.fill()}e=requestAnimationFrame(n)}(),function(){cancelAnimationFrame(e)}})),Object(u.jsx)("canvas",{className:"stars",ref:n})})),w=a.a.memo((function(e){var t=e.currentPalette;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(_,{currentPalette:t}),Object(u.jsx)(S,{currentPalette:t})]})})),I=function(e){var t=e.isHidden,n=e._setIsHidden;return Object(u.jsx)("header",{className:"header",onClick:function(e){e.stopPropagation(),n(!t)},children:Object(u.jsx)("h1",{className:"header__title",onClick:function(e){e.stopPropagation()},children:"Alec Cuccia"})})},P=(n(29),function(e){var t=function(e){e.currentTarget.blur()},n=e.isHidden?"-1":"0";return Object(u.jsxs)("div",{className:"contact",children:[Object(u.jsx)("a",{href:"mailto:ajcuccia+dev@gmail.com",onMouseUp:t,tabIndex:n,children:"Email"}),Object(u.jsx)("a",{href:"https://www.github.com/atomicretro",onMouseUp:t,rel:"noopener noreferrer",target:"_blank",tabIndex:n,children:"GitHub"}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/alec-cuccia",onMouseUp:t,rel:"noopener noreferrer",target:"_blank",tabIndex:n,children:"LinkedIn"})]})}),T=function(e){var t=e.isHidden,n=e.isSelected,s=e.palette,c=e._setPalette,a=m()("palette_card palette_card--".concat(s),{"palette_card--selected":n});return Object(u.jsxs)("button",{className:a,onClick:function(e){e.stopPropagation(),c(s)},onKeyDown:function(e){e.stopPropagation()},onMouseUp:function(e){e.currentTarget.blur()},tabIndex:t?"-1":"0",children:[Object(u.jsx)("img",{alt:s,className:"palette_card__img",src:"".concat("","/palettes/").concat(s,".png")}),Object(u.jsx)("span",{className:"palette_card__desc",children:s})]})},A=(n(30),function(e){var t=e.isHidden,n=e.currentPalette,s=e._setPalette;return Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)("h2",{className:"home__title",children:"Paint the sky"}),Object(u.jsx)("div",{className:"home__grid",children:h.map((function(e){return Object(u.jsx)(T,{isHidden:t,isSelected:e===n,palette:e,_setPalette:s},e)}))}),Object(u.jsxs)("span",{className:"home__acknowledgment",children:["Color palettes inspired by ",Object(u.jsx)("a",{href:"https://downwellgame.com/",rel:"noopener noreferrer",tabIndex:t?"-1":"0",target:"_blank",children:"downwell"})]})]})}),C=function(e){var t=e.desc,n=e.header,s=e.imgDesc,c=e.imgSrc,a=e.projectLink;return Object(u.jsxs)("div",{className:"project_card",children:[Object(u.jsx)("a",{href:a,rel:"noopener noreferrer",target:"_blank",children:Object(u.jsx)("img",{alt:s,className:"project_card__img",src:c})}),Object(u.jsxs)("div",{className:"project_card__info",children:[Object(u.jsx)("h2",{className:"project_card__info__title",children:n}),Object(u.jsx)("div",{className:"project_card__info__desc",children:t})]})]})},E=(n(31),function(e){var t=e.isHidden?"-1":"0",n="https://atomicretro.github.io/neon_circles/",s=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:"Neon Circles is a claustrophobic shoot-em-up in the likeness of Space Invaders and Asteroids. You are stuck on the inside of a circle and can only point towards the center. To shoot the demons shooting you, you must aim through the circle and out the other side."}),Object(u.jsx)("p",{children:"Designed and built in a week, Neon Circles is both a love letter to the shoot-em-up genre and the first draft of a larger idea. It was coded solely in JS and is drawn on Canvas. All game mechanics and sprites were designed from scratch."}),Object(u.jsxs)("p",{children:["Live link: ",Object(u.jsx)("a",{href:n,rel:"noopener noreferrer",tabIndex:t,target:"_blank",children:"Neon Circles"})]})]});return Object(u.jsx)("div",{className:"projects",children:Object(u.jsx)(C,{desc:s,header:"Neon Circles",imgDesc:"Logo for Neon Circles",imgSrc:"".concat("","/projects/neon_circles-logo.png"),projectLink:n,tabIndex:t})})}),H=(n(32),function(e){var t=e.isHidden?"-1":"0";return Object(u.jsx)("div",{className:"odds-ends",children:Object(u.jsxs)("div",{className:"odds-ends__column",children:[Object(u.jsx)("h2",{className:"odds-ends__column__header",children:"CSS Challenges"}),Object(u.jsxs)("span",{className:"odds-ends__column__link",children:["From ",Object(u.jsx)("a",{href:"https://100dayscss.com/",rel:"noopener noreferrer",target:"_blank",children:"100 Days CSS Challenge"})]}),Object(u.jsx)(o.b,{tabIndex:t,to:"/css/alien",children:"alien"}),Object(u.jsx)(o.b,{tabIndex:t,to:"/css/clock",children:"clock"}),Object(u.jsx)(o.b,{tabIndex:t,to:"/css/hover",children:"hover"}),Object(u.jsx)(o.b,{tabIndex:t,to:"/css/monster",children:"monster"}),Object(u.jsx)(o.b,{tabIndex:t,to:"/css/segments",children:"segments"})]})})}),R=(n(38),function(e){var t=e.showExplanation,n=m()("css-challenges-05",{"css-challenges-05--blur":t});return Object(u.jsxs)("div",{className:n,children:[Object(u.jsx)("div",{className:"css-challenges-05__circle css-challenges-05__circle--1"}),Object(u.jsx)("div",{className:"css-challenges-05__circle css-challenges-05__circle--2"}),Object(u.jsx)("div",{className:"css-challenges-05__circle css-challenges-05__circle--3"})]})}),M=(n(39),{129:!0,186:!0,212:!0,130:!0,187:!0,213:!0,148:!0,189:!0,228:!0,149:!0,190:!0,231:!0,150:!0,192:!0,247:!0,151:!0,193:!0,249:!0,167:!0,206:!0,250:!0,168:!0,207:!0,252:!0,169:!0,208:!0,266:!0,170:!0,209:!0,268:!0,171:!0,210:!0,271:!0,172:!0,211:!0,273:!0}),U=function(){return Object(u.jsx)("div",{className:"css-alien",children:Object(p.a)(Array(400).keys()).map((function(e){return Object(u.jsx)("input",{className:"pixel",defaultChecked:!M[e],onMouseUp:function(e){e.target.blur()},type:"checkbox"},e)}))})},D=(n(40),function(){return Object(u.jsxs)("div",{className:"css-monster",children:[Object(p.a)(Array(400).keys()).map((function(e){return Object(u.jsx)("div",{className:"css-monster__square css-monster__square--".concat(e)},e)})),Object(u.jsx)("div",{className:"css-monster__monster"})]})}),L=(n(41),function(e){var t=e.position,n=m()("css-clock__display__numbers","css-clock__display__numbers__".concat(t));return Object(u.jsxs)("div",{className:n,children:[Object(u.jsx)("span",{children:"0"}),Object(u.jsx)("span",{children:"1"}),Object(u.jsx)("span",{children:"2"}),Object(u.jsx)("span",{children:"3"}),Object(u.jsx)("span",{children:"4"}),Object(u.jsx)("span",{children:"5"}),Object(u.jsx)("span",{children:"6"}),Object(u.jsx)("span",{children:"7"}),Object(u.jsx)("span",{children:"8"}),Object(u.jsx)("span",{children:"9"})]})}),z=function(){return Object(u.jsxs)("div",{className:"css-clock",children:[Object(u.jsx)("input",{className:"css-clock__input",type:"checkbox"}),Object(u.jsx)("div",{className:"css-clock__pause"}),Object(u.jsx)("div",{className:"css-clock__play"}),Object(u.jsxs)("div",{className:"css-clock__display",children:[Object(u.jsx)(L,{position:"thousands"}),Object(u.jsx)(L,{position:"hundreds"}),Object(u.jsx)(L,{position:"tens"}),Object(u.jsx)(L,{position:"ones"})]})]})},F=(n(42),function(){return Object(u.jsxs)("div",{className:"css-hover",children:[Object(p.a)(Array(200).keys()).map((function(e){return Object(u.jsx)("div",{className:"css-hover__slice css-hover__slice--".concat(e+1),onMouseUp:function(e){e.target.blur()},tabIndex:"0"},e)})),Object(u.jsx)("div",{className:"css-hover__overlay"}),Object(u.jsx)("span",{className:"css-hover__text css-hover__text--one",children:"HOVER"}),Object(u.jsx)("span",{className:"css-hover__text css-hover__text--two",children:"HOVER"})]})}),G=(n(43),function(){return Object(u.jsxs)("div",{className:"css-segments",children:[Object(u.jsx)("div",{className:"css-segments__box css-segments__dark",onMouseUp:function(e){e.target.blur()},tabIndex:"0",children:Object(u.jsx)("span",{children:"FIRST"})}),Object(u.jsx)("div",{className:"css-segments__box css-segments__light",onMouseUp:function(e){e.target.blur()},tabIndex:"0",children:Object(u.jsx)("span",{children:"SECOND"})}),Object(u.jsx)("div",{className:"css-segments__box css-segments__dark",onMouseUp:function(e){e.target.blur()},tabIndex:"0",children:Object(u.jsx)("span",{children:"THIRD"})}),Object(u.jsx)("div",{className:"css-segments__box css-segments__light",onMouseUp:function(e){e.target.blur()},tabIndex:"0",children:Object(u.jsx)("span",{children:"FOURTH"})})]})}),V=function(){return Object(u.jsxs)(f.c,{children:[Object(u.jsx)(f.a,{path:"/css/05",component:R}),Object(u.jsx)(f.a,{path:"/css/alien",component:U}),Object(u.jsx)(f.a,{path:"/css/clock",component:z}),Object(u.jsx)(f.a,{path:"/css/hover",component:F}),Object(u.jsx)(f.a,{path:"/css/monster",component:D}),Object(u.jsx)(f.a,{path:"/css/segments",component:G})]})},J=function(e){var t=e.className;return Object(u.jsxs)("div",{className:t,children:[Object(u.jsx)("p",{children:'At first I had no idea how I was going to complete this challenge, and walked away from it to do other things. Hours later, thinking about something else entirely, it hit me: "they\'re all checkboxes!"'}),Object(u.jsx)("p",{children:"Once I realized that, writing the code was straightforward. I used JS to create the series of checkboxes, but then used vanilla CSS to arrange them and style them into pixels."}),Object(u.jsx)("p",{children:"The default image was brute-forced by figuring out which pixels are white in the demo template, and simply marking them \"unchecked\" as they are generated. It's low-tech, but since the default image is static I don't mind cheesing it a bit."}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:"https://100dayscss.com/days/47",rel:"noopener noreferrer",target:"_blank",children:"To the challenge!"})})]})},K=function(e){var t=e.className;return Object(u.jsxs)("div",{className:t,children:[Object(u.jsx)("p",{children:"Believe it or not, it was the pause button in this challenge that gave me the least amount of trouble. Once I figured out how to get the clock working pausing the animation was super straight forward."}),Object(u.jsx)("p",{children:"But I'm getting ahead of myself! The counter works kind of like an old school flip clock: each digit is actually an absolutely positioned column of the numbers 0\u20139. The \"counting\" is simply each column ticking up one place independently of each other. This was accomplished with a CSS animation that changes the vertical positioning of each column. Once a column gets to the number 9, its animation resets. The speed of each column is controlled through its animation's duration."}),Object(u.jsx)("p",{children:"To get the pause effect working I turned back to our good friend the checkbox. When you click on the pause button what you're actually doing is filling in an empty checkbox. Using the checkbox's :checked pseudo class and the CSS general sibling combinator I was able to set each column's animation-play-state to paused when the checkbox is checked."}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:"https://100dayscss.com/days/51/",rel:"noopener noreferrer",target:"_blank",children:"To the challenge!"})})]})},B=function(e){var t=e.className;return Object(u.jsxs)("div",{className:t,children:[Object(u.jsx)("p",{children:"After going through some other challenges I've picked up on how to handle pure CSS interactivity."}),Object(u.jsx)("p",{children:"The background is a series of horizontal grey slivers which, when hovered, increase the height of the foreground orange overlay. The slivers are created with JS, but that's the only JS used. Each sliver gets an index number, and the height of the orange overlay is simply a multiple of whichever sliver is being hovered at the moment."}),Object(u.jsx)("p",{children:"To achieve the blur effect on the text I've stacked two spans on top of each other with different z-indices. The higher z-index text has a blur filter while the lower text does not. The order goes: grey background, non-blurred text, orange overlay, blurred text. This causes the non-blurred text to get hidden by the orange layer, leaving only the blurred effect."}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:"https://100dayscss.com/days/60",rel:"noopener noreferrer",target:"_blank",children:"To the challenge!"})})]})},W=function(e){var t=e.className;return Object(u.jsxs)("div",{className:t,children:[Object(u.jsx)("p",{children:"This task was actually a lot simplier than I thought it would be."}),Object(u.jsx)("p",{children:"I racked my brain for a while trying to figure out how to pass the cursor position to the chasing circle. Eventually I decided to break the field into a grid of squares, then use SCSS and math to loop through the grid and reverse engineer the coordinate positioning of each square."}),Object(u.jsx)("p",{children:"I thought this was cheating, but after looking at how the demo template was created I saw it was done in almost exactly the same way. So... if it is cheating, then teacher cheated too :D"}),Object(u.jsx)("p",{children:"The only JS used is to create the grid. All positioning data is calculated in SCSS from the index number of each square."}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:"https://100dayscss.com/days/49",rel:"noopener noreferrer",target:"_blank",children:"To the challenge!"})})]})},Y=function(e){var t=e.className;return Object(u.jsxs)("div",{className:t,children:[Object(u.jsx)("p",{children:"I completed this challenge using flexbox and height manipulation on CSS events. Flexbox keeps the colored boxes organized and in place while :focus and :hover events increase the hovered box's dimensions."}),Object(u.jsx)("p",{children:"The animations are done entirely in CSS; the only JS used is to blur a box on mouse up to ensure wayward clicks don't cause two boxes to expand at once."}),Object(u.jsx)("p",{children:"The animations are fully responsive and work with both mouse and keyboard."}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:"https://100dayscss.com/days/80",rel:"noopener noreferrer",target:"_blank",children:"To the challenge!"})})]})},q=(n(44),function(e,t){try{var n=e.slice(0,1).toUpperCase()+e.slice(1);return s["Explanation".concat(n)]({className:t})}catch(c){return null}}),Q=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(f.f)(),i=m()("css-challenges__submission",{"css-challenges__submission--blur":n}),r=(a.pathname||"").split("/"),d=r[r.length-1],h=m()("css-challenges__explanation-text","css-challenges__explanation-text--".concat(d),{"css-challenges__explanation-text--hide":!n});return Object(u.jsxs)("div",{className:"css-challenges",children:[Object(u.jsx)(o.b,{className:"css-challenges__return-link",to:"/odds-and-ends",children:"Go back"}),Object(u.jsx)("div",{className:i,children:Object(u.jsx)(V,{})}),Object(u.jsxs)("button",{className:"css-challenges__explanation-button",onClick:function(){s(!n)},onMouseUp:function(e){e.target.blur()},children:[n?"Hide":"See"," Explanation"]}),q(d,h)]})},X=function(e){var t=e.isHidden,n=e.palette,s=e._setPalette;return Object(u.jsx)("section",{className:"display display--".concat(n),children:Object(u.jsxs)(f.c,{children:[Object(u.jsx)(f.a,{path:"/contact",component:function(){return Object(u.jsx)(P,{isHidden:t})}}),Object(u.jsx)(f.a,{path:"/odds-and-ends",component:function(){return Object(u.jsx)(H,{isHidden:t})}}),Object(u.jsx)(f.a,{path:"/projects",component:function(){return Object(u.jsx)(E,{isHidden:t})}}),Object(u.jsx)(f.a,{path:"/css",component:function(){return Object(u.jsx)(Q,{isHidden:t})}}),Object(u.jsx)(f.a,{path:"/",component:function(){return Object(u.jsx)(A,{isHidden:t,currentPalette:n,_setPalette:s})}})]})})},Z=function(e){var t=e.isHidden,n=e.palette,s=e._setIsHidden,c=function(e){e.currentTarget.blur()},a=t?"-1":"0";return Object(u.jsx)("nav",{className:"navbar navbar--".concat(n),children:Object(u.jsxs)("span",{children:[Object(u.jsx)(o.b,{tabIndex:a,to:"/",onMouseUp:c,children:"Home"}),Object(u.jsx)(o.b,{tabIndex:a,to:"/projects",onMouseUp:c,children:"Projects"}),Object(u.jsx)(o.b,{tabIndex:a,to:"/odds-and-ends",onMouseUp:c,children:"Odds And Ends"}),Object(u.jsx)(o.b,{tabIndex:a,to:"/contact",onMouseUp:c,children:"Contact"}),Object(u.jsx)("button",{className:"button-stargaze button-stargaze--".concat(n),onClick:function(e){e.stopPropagation(),s(!t)},onMouseUp:c,tabIndex:a,children:"Stargaze"})]})})},$=(n(45),function(e){var t=e.isHidden,n=e.palette,s=e._setIsHidden,c=e._setPalette,a=m()("stuff",{"stuff--hidden":t});return Object(u.jsxs)("section",{className:a,children:[Object(u.jsx)(I,{isHidden:t,_setIsHidden:s}),Object(u.jsx)(Z,{isHidden:t,palette:n,_setIsHidden:s}),Object(u.jsx)(X,{isHidden:t,palette:n,_setPalette:c})]})}),ee=(n(46),n(47),n(48),function(){var e=Object(c.useContext)(d),t=e.currentPalette,n=e._setPalette,s=Object(f.f)(),a=Object(c.useState)("/"===s.pathname),i=Object(l.a)(a,2),r=i[0],o=i[1],j=m()("main-button","main-button--random-palette","main-button--".concat(t),{"main-button--random-palette-hidden":!r}),b=m()("main-button","main-button--instructions","main-button--".concat(t),{"main-button--instructions-hidden":!r});return Object(u.jsxs)("main",{className:"app app--".concat(t),onClick:function(e){o(!1)},onKeyDown:function(e){var t=e.keyCode;13!==t&&32!==t||o(!1)},tabIndex:r?"0":"-1",children:[Object(u.jsx)(w,{currentPalette:t}),Object(u.jsx)($,{isHidden:r,palette:t,_setIsHidden:o,_setPalette:n}),Object(u.jsx)("button",{className:"".concat(j),onClick:function(e){e.stopPropagation();var s=h.findIndex((function(e){return e===t})),c=Object(p.a)(h);c.splice(s,1);var a=c[k(0,c.length)];n(a)},onMouseUp:function(e){e.currentTarget.blur()},children:"Random palette"}),Object(u.jsx)("button",{className:"".concat(b),onMouseUp:function(e){e.currentTarget.blur()},tabIndex:r?"0":"-1",children:"Click to enter"})]})});n(49);r.a.render(Object(u.jsx)(b,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(ee,{})})}),document.getElementById("root"))}]),[[50,1,2]]]);
//# sourceMappingURL=main.c90a0c30.chunk.js.map