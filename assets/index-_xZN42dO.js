import{w as e,r as o,aa as n,ab as r,ac as t,ad as s,ae as i,af as c,a7 as d}from"./vendor-g4dTTj4d.js";import{u as l,S as a}from"./vendor_notistack-yUCOZdZw.js";import{B as u,S as h,G as x,g,T as j,a as m,b as k,u as f,P,d as p,e as L,f as b,M as E,h as v,L as R,i as y,j as w,C,k as S}from"./vendor_mui-hkXgBJGh.js";import{L as I,D as T,S as _}from"./vendor_mui_icon-Zk4ULpsy.js";import"./vendor_emotion_react-1uciRPEh.js";import"./vendor_emotion_styled-sg3xoyeo.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&o(e)})).observe(document,{childList:!0,subtree:!0})}function o(e){if(e.ep)return;e.ep=!0;const o=function(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?o.credentials="include":"anonymous"===e.crossOrigin?o.credentials="omit":o.credentials="same-origin",o}(e);fetch(e.href,o)}}();var O=(e=>(e[e.END=0]="END",e[e.SYMBOL=1]="SYMBOL",e[e.KEYWORD=2]="KEYWORD",e[e.LEFT_PAREN=3]="LEFT_PAREN",e[e.RIGHT_PAREN=4]="RIGHT_PAREN",e[e.LEFT_CURLY=5]="LEFT_CURLY",e[e.RIGHT_CURLY=6]="RIGHT_CURLY",e[e.SEMICOLON=7]="SEMICOLON",e[e.WHITE_SPACE=8]="WHITE_SPACE",e))(O||{});const A=["for","if","else","while","do"],F={"{":5,"}":6,"(":3,")":4,";":7},N=e=>{const o={kind:0,text:""};if(e.cursorPos>=e.contentLength)return o;if(/\s/.test(e.content[e.cursorPos]))return o.kind=8,o.text=e.content[e.cursorPos],e.cursorPos++,o;if(o.text=e.content[e.cursorPos],e.cursorPos++,o.text in F)return o.kind=F[o.text],o;for(;e.cursorPos<e.contentLength&&!(e.content[e.cursorPos]in F)&&!/\s/.test(e.content[e.cursorPos]);)o.text+=e.content[e.cursorPos],e.cursorPos++;return A.includes(o.text)?(o.kind=2,o):(o.kind=1,o)};var Y=(e=>(e[e.END=0]="END",e[e.PROCESS=1]="PROCESS",e[e.LOOP_FIRST=2]="LOOP_FIRST",e[e.LOOP_LAST=3]="LOOP_LAST",e[e.IF_ELSE=4]="IF_ELSE",e))(Y||{});const U=e=>({tokens:e,tokenLength:e.length,cursorPos:0}),G=(e,o,n)=>{if(e.cursorPos>=e.tokenLength)return[];if(e.tokens[e.cursorPos].kind!==o)return[];e.cursorPos++;const r=[];let t,s=-1;for(;e.cursorPos<e.tokenLength&&(t=e.tokens[e.cursorPos],e.cursorPos++,t.kind===o&&s--,t.kind===n&&s++,0!==s);)r.push(t);return r},H=e=>{for(;e.cursorPos<e.tokenLength&&e.tokens[e.cursorPos].kind===O.WHITE_SPACE;)e.cursorPos++},W=e=>{if(H(e),e.cursorPos>=e.tokenLength)return{kind:0};let o=e.tokens[e.cursorPos];if(e.cursorPos++,o.kind===O.KEYWORD)switch(o.text){case"for":case"while":return(e=>{const o={kind:2,body:[],condition:[]};return H(e),e.cursorPos>=e.tokenLength||e.tokens[e.cursorPos].kind!==O.LEFT_PAREN||(o.condition=G(e,O.LEFT_PAREN,O.RIGHT_PAREN),H(e),e.cursorPos>=e.tokenLength||e.tokens[e.cursorPos].kind!==O.LEFT_CURLY||(o.body=B(U(G(e,O.LEFT_CURLY,O.RIGHT_CURLY))))),o})(e);case"do":return(e=>{const o={kind:3,body:[],condition:[]};return H(e),e.cursorPos>=e.tokenLength||e.tokens[e.cursorPos].kind!==O.LEFT_CURLY||(o.body=B(U(G(e,O.LEFT_CURLY,O.RIGHT_CURLY))),H(e),e.cursorPos>=e.tokenLength||e.tokens[e.cursorPos].kind!==O.KEYWORD||"while"!==e.tokens[e.cursorPos].text||(e.cursorPos++,H(e),e.cursorPos>=e.tokenLength||e.tokens[e.cursorPos].kind!==O.LEFT_PAREN||(o.condition=G(e,O.LEFT_PAREN,O.RIGHT_PAREN),H(e),e.cursorPos>=e.tokenLength||e.tokens[e.cursorPos].kind===O.SEMICOLON&&e.cursorPos++))),o})(e);case"if":return(e=>{const o={kind:4,condition:[],bodyIf:[],bodyElse:[]};return H(e),e.cursorPos>=e.tokenLength||e.tokens[e.cursorPos].kind!==O.LEFT_PAREN||(o.condition=G(e,O.LEFT_PAREN,O.RIGHT_PAREN),H(e),e.cursorPos>=e.tokenLength||e.tokens[e.cursorPos].kind!==O.LEFT_CURLY||(o.bodyIf=B(U(G(e,O.LEFT_CURLY,O.RIGHT_CURLY))),H(e),e.cursorPos>=e.tokenLength||e.tokens[e.cursorPos].kind!==O.KEYWORD||"else"!==e.tokens[e.cursorPos].text||(e.cursorPos++,H(e),e.cursorPos>=e.tokenLength||e.tokens[e.cursorPos].kind!==O.LEFT_CURLY||(o.bodyElse=B(U(G(e,O.LEFT_CURLY,O.RIGHT_CURLY))))))),o})(e)}const n={kind:1,body:[]};if(o.kind===O.SEMICOLON)return n;for(n.body.push(o);e.cursorPos<e.tokenLength&&(o=e.tokens[e.cursorPos],e.cursorPos++,o.kind!==O.END&&o.kind!==O.SEMICOLON);)n.body.push(o);return n},B=e=>{const o=[];let n;for(;0!==(n=W(e)).kind;)o.push(n);return o},D=o=>{const{children:n,borderTop:r,borderBottom:t,borderLeft:s,borderRight:i}=o;return e.jsx(u,{height:"100%",sx:{borderColor:"inherit",backgroundColor:"inherit",borderStyle:"solid",borderLeftWidth:s?"inherit":0,borderTopWidth:r?"inherit":0,borderBottomWidth:t?"inherit":0,borderRightWidth:i?"inherit":0},children:n})},z=o=>{const{sx:n}=o;return e.jsx(h,{sx:{position:"absolute",width:"100%",height:"100%",...n},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",fill:"none",viewBox:"0 0 5 5",strokeWidth:"0.1",children:e.jsx("line",{x1:"0",y1:"0",x2:"5",y2:"5",stroke:"currentColor",strokeLinecap:"round"})})})},M=o=>{const{sx:n}=o;return e.jsx(h,{sx:{position:"absolute",width:"100%",height:"100%",...n},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",fill:"none",viewBox:"0 0 5 5",strokeWidth:"0.1",children:e.jsx("line",{x1:"0",y1:"5",x2:"5",y2:"0",stroke:"currentColor",strokeLinecap:"round"})})})},K=o=>{const{children:n,...r}=o;return e.jsx(j,{fontFamily:"inherit",fontWeight:"inherit",padding:1,paddingLeft:2,...r,children:n??"..."})},V=o=>{const{text:n,...r}=o;return e.jsx(D,{...r,children:e.jsx(K,{children:n})})},$=o=>{const{condition:n,body:r,...t}=o;let s=e.jsx(V,{borderTop:!0,borderLeft:!0});return r.length>0&&(s=r.map(((o,n)=>e.jsx(Q,{borderTop:!0,borderLeft:!0,node:o},`subnode-${n}`)))),e.jsxs(D,{...t,children:[e.jsx(K,{children:n}),e.jsx(u,{paddingLeft:2,children:s})]})},q=o=>{const{condition:n,body:r,...t}=o;let s=e.jsx(V,{borderBottom:!0,borderLeft:!0});return r.length>0&&(s=r.map(((o,n)=>e.jsx(Q,{node:o,borderBottom:!0,borderLeft:!0},`subnode-${n}`)))),e.jsxs(D,{...t,children:[e.jsx(u,{paddingLeft:2,children:s}),e.jsx(K,{children:n})]})},J=o=>{const{condition:n,bodyIf:r,bodyElse:t,...s}=o;let i=e.jsx(V,{borderTop:!0,borderRight:!0});r.length>0&&(i=r.map(((o,n)=>e.jsx(Q,{borderTop:!0,borderRight:!0,node:o},`index-${n}`))));let c=e.jsx(V,{borderTop:!0});return t.length>0&&(c=t.map(((o,n)=>e.jsx(Q,{borderTop:!0,node:o},`index-${n}`)))),e.jsx(D,{...s,children:e.jsxs(x,{container:!0,height:"100%",children:[e.jsx(x,{item:!0,xs:12,children:e.jsx(K,{children:n})}),e.jsx(x,{item:!0,xs:6,children:e.jsxs(u,{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",children:[e.jsx(z,{color:"inherit"}),e.jsx(K,{sx:{zIndex:2,backgroundColor:g[300]},children:"True"})]})}),e.jsx(x,{item:!0,xs:6,children:e.jsxs(u,{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",children:[e.jsx(M,{color:"inherit"}),e.jsx(K,{sx:{zIndex:2,backgroundColor:g[300]},children:"False"})]})}),e.jsx(x,{item:!0,xs:6,children:i}),e.jsx(x,{item:!0,xs:6,children:c})]})})},X=e=>e.kind!==Y.PROCESS||e.body.map((e=>e.text)).join("").trim().length>0,Q=n=>{const{node:r,...t}=n;switch(r.kind){case Y.LOOP_FIRST:{let o;return r.condition.length>0&&(o=r.condition.map((e=>e.text)).join("").trim()),e.jsx($,{...t,condition:o,body:r.body.filter(X)})}case Y.LOOP_LAST:{let o;return r.condition.length>0&&(o=r.condition.map((e=>e.text)).join("").trim()),e.jsx(q,{...t,condition:o,body:r.body.filter(X)})}case Y.IF_ELSE:{let o;return r.condition.length>0&&(o=r.condition.map((e=>e.text)).join("").trim()),e.jsx(J,{...t,condition:o,bodyIf:r.bodyIf.filter(X),bodyElse:r.bodyElse.filter(X)})}case Y.PROCESS:{let o=r.body.map((e=>e.text)).join("").trim();return 0===o.length&&(o=void 0),e.jsx(V,{...t,text:o})}}return e.jsx(o.Fragment,{})},Z=(o,n,r)=>{let t=e.jsx(j,{fontFamily:"inherit",fontStyle:"italic",children:"Nothing to display."});const s=o.filter((e=>e.kind!==Y.PROCESS||e.body.map((e=>e.text)).join("").trim().length>0));return s.length>0&&(t=s.map(((o,n)=>e.jsx(Q,{node:o,borderLeft:!0,borderTop:!0,borderRight:!0,borderBottom:n===s.length-1},n)))),e.jsx(u,{sx:r,children:e.jsx(u,{id:n,maxWidth:"640px",fontFamily:"Fira Code",sx:{wordBreak:"break-all",fontVariantLigatures:"contextual",userSelect:"none"},children:t})})},ee=o=>{const{value:r,onValueChange:t,boxProps:s}=o;return e.jsx(u,{sx:s,children:e.jsx(n,{value:r,onChange:t,theme:"dark"})})},oe=o=>{const{collapse:n,...r}=o;return n?e.jsx(m,{title:r.children,children:e.jsxs(k,{...r,startIcon:void 0,endIcon:void 0,children:[r.startIcon,r.endIcon]})}):e.jsx(k,{...r,startIcon:r.startIcon,endIcon:r.endIcon,children:r.children})},ne=()=>{const{enqueueSnackbar:n}=l(),c=f((e=>e.breakpoints.down("md"))),[d,a]=o.useState(null),[h,j]=o.useState((()=>{const e=new URL(window.location.href).searchParams.get("preview");return null!==e&&"true"===e})),[m,w]=o.useState([]),[C,S]=o.useState((()=>{const e=new URL(window.location.href).searchParams.get("content");if(null!==e)return window.localStorage.setItem("content",e),e;const o=window.localStorage.getItem("content");return null!==o?o:""}));o.useEffect((()=>{const e=(e=>{const o=[];let n;for(;0!==(n=N(e)).kind;)o.push(n);return o})({content:(o=C).normalize(),contentLength:o.normalize().length,cursorPos:0});var o;const n=B(U(e));w(n)}),[C]);const O=o.useCallback((e=>{S(e),window.localStorage.setItem("content",e)}),[]),A=o.useCallback((async()=>{const e=document.getElementById("structogram-preview-region");null!==e&&(r(e).then((e=>{null!==e&&(window.saveAs?window.saveAs(e,"structogram"):t.saveAs(e,"structogram"))})),n("Saved structogram as SVG",{variant:"info"}))}),[n]),F=o.useCallback((async()=>{const e=document.getElementById("structogram-preview-region");null!==e&&(s(e).then((e=>{null!==e&&(window.saveAs?window.saveAs(e,"structogram"):t.saveAs(e,"structogram"))})),n("Saved structogram as PNG",{variant:"info"}))}),[n]),Y=o.useCallback((async()=>{const e=document.getElementById("structogram-preview-region");null!==e&&(i(e).then((e=>{null!==e&&(window.saveAs?window.saveAs(e,"structogram"):t.saveAs(e,"structogram"))})),n("Saved structogram as JPEG",{variant:"info"}))}),[n]),G=o.useCallback((()=>{j((e=>!e))}),[]),H=o.useCallback((()=>{const e=new URL(window.location.href);e.searchParams.set("preview","true"),e.searchParams.set("content",C),navigator.clipboard.writeText(e.href),n("Copied link to clipboard",{variant:"info"})}),[C,n]),W=o.useCallback((e=>{a(e.currentTarget)}),[]),D=o.useCallback((()=>{a(null)}),[]);return e.jsxs(o.Fragment,{children:[e.jsxs(u,{children:[e.jsx(P,{square:!0,elevation:0,sx:{padding:1},children:e.jsxs(p,{display:"flex",direction:"row",justifyContent:"space-between",children:[e.jsxs(L,{variant:"outlined",children:[e.jsx(k,{onClick:G,children:h?"Show code":"Hide code"}),e.jsx(k,{href:"https://eurydia.github.io/project-nassi-shneiderman-diagram-builder-online-docs/",component:"a",target:"_blank",endIcon:e.jsx(I,{}),children:"docs"})]}),e.jsxs(L,{variant:"outlined",children:[e.jsx(oe,{collapse:c,startIcon:e.jsx(T,{}),onClick:W,children:"EXPORT"}),e.jsx(oe,{collapse:c,endIcon:e.jsx(_,{}),onClick:H,children:"SHARE"})]})]})}),e.jsx(u,{children:e.jsxs(x,{container:!0,children:[e.jsx(x,{item:!0,xs:12,lg:6,display:h?"none":void 0,children:e.jsx(ee,{value:C,onValueChange:O,boxProps:{overflowY:"auto",height:"calc(100vh - 61.6833px)"}})}),e.jsx(x,{item:!0,xs:!0,lg:!0,display:c&&!h?"none":void 0,children:Z(m,"structogram-preview-region",{padding:4,overflowY:"auto",backgroundColor:g[300],height:"calc(100vh - 61.6833px)"})})]})})]}),e.jsx(b,{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},anchorEl:d,open:null!==d,onClose:D,children:e.jsx(P,{sx:{padding:1},children:e.jsxs(E,{children:[e.jsxs(v,{onClick:Y,children:[e.jsx(R,{children:e.jsx(T,{fontSize:"small"})}),e.jsx(y,{children:"Save as JPEG"})]}),e.jsxs(v,{onClick:F,children:[e.jsx(R,{children:e.jsx(T,{fontSize:"small"})}),e.jsx(y,{children:"Save as PNG"})]}),e.jsxs(v,{onClick:A,children:[e.jsx(R,{children:e.jsx(T,{fontSize:"small"})}),e.jsx(y,{children:"Save as SVG"})]})]})})})]})},re=w({palette:{mode:"dark"}}),te=()=>e.jsxs(o.Fragment,{children:[e.jsx(C,{}),e.jsx(S,{theme:re,children:e.jsx(a,{preventDuplicate:!0,autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"center"},children:e.jsx(ne,{})})})]});c.createRoot(document.getElementById("root")).render(e.jsx(d.StrictMode,{children:e.jsx(te,{})}));
