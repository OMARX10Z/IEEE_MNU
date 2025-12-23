import{r as o,j as X}from"./index-Clb_ZcwE.js";import{g as m}from"./ScrollTrigger-B2uKOqL4.js";const N=12,S=300,k="0, 102, 161",O=768,j=(t,l,r=k)=>{const i=document.createElement("div");return i.className="particle",i.style.cssText=`
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${r}, 1);
    box-shadow: 0 0 6px rgba(${r}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${t}px;
    top: ${l}px;
  `,i},z=t=>({proximity:t*.5,fadeDistance:t*.75}),_=(t,l,r,i,a)=>{const n=t.getBoundingClientRect(),u=(l-n.left)/n.width*100,p=(r-n.top)/n.height*100;t.style.setProperty("--glow-x",`${u}%`),t.style.setProperty("--glow-y",`${p}%`),t.style.setProperty("--glow-intensity",i.toString()),t.style.setProperty("--glow-radius",`${a}px`)},G=({children:t,className:l="",disableAnimations:r=!1,style:i,particleCount:a=N,glowColor:n=k,enableTilt:u=!0,clickEffect:p=!1,enableMagnetism:y=!1})=>{const d=o.useRef(null),s=o.useRef([]),Y=o.useRef([]),f=o.useRef(!1),L=o.useRef([]),b=o.useRef(!1),g=o.useRef(null),E=o.useCallback(()=>{if(b.current||!d.current)return;const{width:e,height:w}=d.current.getBoundingClientRect();L.current=Array.from({length:a},()=>j(Math.random()*e,Math.random()*w,n)),b.current=!0},[a,n]),M=o.useCallback(()=>{Y.current.forEach(clearTimeout),Y.current=[],g.current?.kill(),s.current.forEach(e=>{m.to(e,{scale:0,opacity:0,duration:.3,ease:"back.in(1.7)",onComplete:()=>{e.parentNode?.removeChild(e)}})}),s.current=[]},[]),A=o.useCallback(()=>{!d.current||!f.current||(b.current||E(),L.current.forEach((e,w)=>{const v=setTimeout(()=>{if(!f.current||!d.current)return;const x=e.cloneNode(!0);d.current.appendChild(x),s.current.push(x),m.fromTo(x,{scale:0,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(1.7)"}),m.to(x,{x:(Math.random()-.5)*100,y:(Math.random()-.5)*100,rotation:Math.random()*360,duration:2+Math.random()*2,ease:"none",repeat:-1,yoyo:!0}),m.to(x,{opacity:.3,duration:1.5,ease:"power2.inOut",repeat:-1,yoyo:!0})},w*100);Y.current.push(v)}))},[E]);return o.useEffect(()=>{if(r||!d.current)return;const e=d.current,w=()=>{f.current=!0,A(),u&&m.to(e,{rotateX:5,rotateY:5,duration:.3,ease:"power2.out",transformPerspective:1e3})},v=()=>{f.current=!1,M(),u&&m.to(e,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),y&&m.to(e,{x:0,y:0,duration:.3,ease:"power2.out"})},x=C=>{if(!u&&!y)return;const c=e.getBoundingClientRect(),h=C.clientX-c.left,$=C.clientY-c.top,R=c.width/2,P=c.height/2;if(u){const D=($-P)/P*-10,I=(h-R)/R*10;m.to(e,{rotateX:D,rotateY:I,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(y){const D=(h-R)*.05,I=($-P)*.05;g.current=m.to(e,{x:D,y:I,duration:.3,ease:"power2.out"})}},B=C=>{if(!p)return;const c=e.getBoundingClientRect(),h=C.clientX-c.left,$=C.clientY-c.top,R=Math.max(Math.hypot(h,$),Math.hypot(h-c.width,$),Math.hypot(h,$-c.height),Math.hypot(h-c.width,$-c.height)),P=document.createElement("div");P.style.cssText=`
        position: absolute;
        width: ${R*2}px;
        height: ${R*2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${n}, 0.4) 0%, rgba(${n}, 0.2) 30%, transparent 70%);
        left: ${h-R}px;
        top: ${$-R}px;
        pointer-events: none;
        z-index: 1000;
      `,e.appendChild(P),m.fromTo(P,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>P.remove()})};return e.addEventListener("mouseenter",w),e.addEventListener("mouseleave",v),e.addEventListener("mousemove",x),e.addEventListener("click",B),()=>{f.current=!1,e.removeEventListener("mouseenter",w),e.removeEventListener("mouseleave",v),e.removeEventListener("mousemove",x),e.removeEventListener("click",B),M()}},[A,M,r,u,y,p,n]),X.jsx("div",{ref:d,className:`${l} particle-container`,style:{...i,position:"relative",overflow:"hidden"},children:t})},U=({gridRef:t,disableAnimations:l=!1,enabled:r=!0,spotlightRadius:i=S,glowColor:a=k})=>{const n=o.useRef(null),u=o.useRef(!1);return o.useEffect(()=>{if(l||!t?.current||!r)return;const p=document.createElement("div");p.className="global-spotlight",p.style.cssText=`
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${a}, 0.15) 0%,
        rgba(${a}, 0.08) 15%,
        rgba(${a}, 0.04) 25%,
        rgba(${a}, 0.02) 40%,
        rgba(${a}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `,document.body.appendChild(p),n.current=p;const y=s=>{if(!n.current||!t.current)return;const f=t.current.closest(".bento-section")?.getBoundingClientRect(),L=f&&s.clientX>=f.left&&s.clientX<=f.right&&s.clientY>=f.top&&s.clientY<=f.bottom;u.current=L||!1;const b=t.current.querySelectorAll(".magic-bento-card");if(!L){m.to(n.current,{opacity:0,duration:.3,ease:"power2.out"}),b.forEach(e=>{e.style.setProperty("--glow-intensity","0")});return}const{proximity:g,fadeDistance:E}=z(i);let M=1/0;b.forEach(e=>{const w=e,v=w.getBoundingClientRect(),x=v.left+v.width/2,B=v.top+v.height/2,C=Math.hypot(s.clientX-x,s.clientY-B)-Math.max(v.width,v.height)/2,c=Math.max(0,C);M=Math.min(M,c);let h=0;c<=g?h=1:c<=E&&(h=(E-c)/(E-g)),_(w,s.clientX,s.clientY,h,i)}),m.to(n.current,{left:s.clientX,top:s.clientY,duration:.1,ease:"power2.out"});const A=M<=g?.8:M<=E?(E-M)/(E-g)*.8:0;m.to(n.current,{opacity:A,duration:A>0?.2:.5,ease:"power2.out"})},d=()=>{u.current=!1,t.current?.querySelectorAll(".magic-bento-card").forEach(s=>{s.style.setProperty("--glow-intensity","0")}),n.current&&m.to(n.current,{opacity:0,duration:.3,ease:"power2.out"})};return document.addEventListener("mousemove",y),document.addEventListener("mouseleave",d),()=>{document.removeEventListener("mousemove",y),document.removeEventListener("mouseleave",d),n.current?.parentNode?.removeChild(n.current)}},[t,l,r,i,a]),null},T=()=>{const[t,l]=o.useState(!1);return o.useEffect(()=>{const r=()=>l(window.innerWidth<=O);return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),t},F=({children:t,className:l="",textAutoHide:r=!0,enableStars:i=!0,enableBorderGlow:a=!0,enableTilt:n=!0,enableMagnetism:u=!0,clickEffect:p=!0,particleCount:y=N,glowColor:d=k,disableAnimations:s=!1,style:Y={}})=>{const f=T(),L=s||f,b=`magic-bento-card ${r?"magic-bento-card--text-autohide":""} ${a?"magic-bento-card--border-glow":""} ${l}`,g={...Y,"--glow-color":d};return i&&!L?X.jsx(G,{className:b,style:g,disableAnimations:L,particleCount:y,glowColor:d,enableTilt:n,clickEffect:p,enableMagnetism:u,children:t}):X.jsx("div",{className:b,style:g,children:t})},W=({children:t,className:l="",enableSpotlight:r=!0,spotlightRadius:i=S,glowColor:a=k,disableAnimations:n=!1})=>{const u=o.useRef(null),p=T(),y=n||p;return X.jsxs(X.Fragment,{children:[r&&X.jsx(U,{gridRef:u,disableAnimations:y,enabled:r,spotlightRadius:i,glowColor:a}),X.jsx("div",{ref:u,className:`magic-bento-grid bento-section ${l}`,children:t})]})},K=o.memo(W),V=o.memo(F);export{F as MagicBentoCard,K as MagicBentoGrid,V as default};
