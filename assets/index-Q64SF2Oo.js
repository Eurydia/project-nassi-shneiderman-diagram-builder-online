import{j as e,r as o,a as r}from"./react-Fif6PzBx.js";import{a as t}from"./react-dom-blAL0JrS.js";import{u as n,S as s}from"./notistack-ViGZw_AK.js";import{L as i}from"./react-latex-next-tt7YI-TC.js";import{S as c,g as l,B as d,T as a,a as u,b as h,u as x,P as p,c as g,d as f,L as k,G as m,D as j,e as b,f as P,M as L,h as R,i as E,j as T,k as y,l as C,C as I,m as w}from"./@mui-cAMQSWgC.js";import{R as N}from"./@uiw-J5UT4H6Q.js";import{A as v}from"./@codemirror-CcIHR75-.js";import{F as O}from"./file-saver-JCY3FFHR.js";import{t as S,a as _,b as $}from"./html-to-image-palyY_jE.js";/* empty css              *//* empty css                    */import"./scheduler-PaNQALdK.js";import"./goober-mW-Zfmm-.js";import"./prop-types-k0KnFkmK.js";import"./react-is-0I7_m2ik.js";import"./@babel-YlazYIEB.js";import"./@emotion-f7437ait.js";import"./hoist-non-react-statics-hr1Q-onO.js";import"./stylis-XXM1udSR.js";import"./clsx--uYwsrIR.js";import"./react-transition-group-HlBtu82i.js";import"./@popperjs-q0QZYxvb.js";import"./@lezer-Dc3lL2az.js";import"./crelt-hB7JEBxz.js";import"./style-mod-Uk0nQip4.js";import"./w3c-keyname-mGP7QFYY.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&o(e)})).observe(document,{childList:!0,subtree:!0})}function o(e){if(e.ep)return;e.ep=!0;const o=function(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?o.credentials="include":"anonymous"===e.crossOrigin?o.credentials="omit":o.credentials="same-origin",o}(e);fetch(e.href,o)}}();var F=(e=>(e[e.EOF=0]="EOF",e[e.SYMBOL=1]="SYMBOL",e[e.KEYWORD=2]="KEYWORD",e[e.WHITE_SPACE=3]="WHITE_SPACE",e[e.LEFT_PAREN=4]="LEFT_PAREN",e[e.RIGHT_PAREN=5]="RIGHT_PAREN",e[e.LEFT_CURLY=6]="LEFT_CURLY",e[e.RIGHT_CURLY=7]="RIGHT_CURLY",e[e.SEMICOLON=8]="SEMICOLON",e))(F||{});const A=["for","if","else","while","do"],Y={"{":6,"}":7,"(":4,")":5,";":8},G=e=>{const o={kind:0,text:"",lineNumber:e.lineNumber,charNumber:e.charNumber};if(e.cursorPos>=e.contentLength)return o;if(o.text=e.content[e.cursorPos],e.cursorPos++,e.charNumber++,/\s/.test(o.text))return o.kind=3,"\n"===o.text&&(e.lineNumber++,e.charNumber=1),o;if(o.text in Y)return o.kind=Y[o.text],o;if("$"===o.text)for(;e.cursorPos<e.contentLength&&(o.text+=e.content[e.cursorPos],e.cursorPos++,e.charNumber++,"$"!==e.content[e.cursorPos-1]););for(;e.cursorPos<e.contentLength&&!(e.content[e.cursorPos]in Y)&&!/\s/.test(e.content[e.cursorPos]);)if(o.text+=e.content[e.cursorPos],e.cursorPos++,e.charNumber++,"$"===e.content[e.cursorPos-1])for(;e.cursorPos<e.contentLength&&(o.text+=e.content[e.cursorPos],e.cursorPos++,e.charNumber++,"$"!==e.content[e.cursorPos-1]););return A.includes(o.text)?(o.kind=2,o):(o.kind=1,o)};var U=(e=>(e[e.END=0]="END",e[e.ERROR=1]="ERROR",e[e.PROCESS=2]="PROCESS",e[e.LOOP_FIRST=3]="LOOP_FIRST",e[e.LOOP_LAST=4]="LOOP_LAST",e[e.IF_ELSE=5]="IF_ELSE",e[e.FUNCTION=6]="FUNCTION",e))(U||{});const H=e=>({tokens:e,tokenLength:e.length,cursorPos:0}),B=(e,o,r)=>{if(e.cursorPos>=e.tokenLength)return[];if(e.tokens[e.cursorPos].kind!==o)return[];e.cursorPos++;const t=[];let n,s=-1;for(;e.cursorPos<e.tokenLength&&(n=e.tokens[e.cursorPos],e.cursorPos++,t.push(n),n.kind===o&&s--,n.kind===r&&s++,0!==s););return t},W=e=>{if(!(e.cursorPos>=e.tokenLength)&&e.tokens[e.cursorPos].kind===F.WHITE_SPACE)for(;e.tokens[e.cursorPos].kind===F.WHITE_SPACE;)if(e.cursorPos++,e.cursorPos>=e.tokenLength)return},D=(e,o,r)=>{const{text:t,lineNumber:n,charNumber:s}=e;return{kind:1,reason:`Incomplete ${o} declaration. Missing a "${r}" token.`,context:t,caretOffset:t.length,lineNumber:n,charNumber:s}},M=(e,o,r,t)=>{const{text:n}=e,{text:s,lineNumber:i,charNumber:c}=o;return{kind:1,reason:`Unexpected token found in ${r} declaration. Expected a "${t}" token but found "${s}" instead.`,context:`${n} ${s}`,caretOffset:n.length+1,lineNumber:i,charNumber:c}},z=e=>{if(W(e),e.cursorPos>=e.tokenLength)return{kind:0};const o=e.tokens[e.cursorPos];if(e.cursorPos++,o.kind===F.KEYWORD)switch(o.text){case"for":case"while":return(e=>{const o={kind:3,body:[],condition:[]};let r=e.tokens[e.cursorPos-1];if(W(e),e.cursorPos>=e.tokenLength)return D(r,"test-first loop","(");if(e.tokens[e.cursorPos].kind!==F.LEFT_PAREN)return M(r,e.tokens[e.cursorPos],"test-first loop","(");if(r=e.tokens[e.cursorPos],o.condition=B(e,F.LEFT_PAREN,F.RIGHT_PAREN),o.condition.length>0&&(r=o.condition[o.condition.length-1]),0===o.condition.length||r.kind!==F.RIGHT_PAREN)return D(r,"test-first loop",")");if(o.condition.pop(),W(e),e.cursorPos>=e.tokenLength)return D(r,"test-first loop","{");if(e.tokens[e.cursorPos].kind!==F.LEFT_CURLY)return M(r,e.tokens[e.cursorPos],"test-first loop","{");r=e.tokens[e.cursorPos];const t=B(e,F.LEFT_CURLY,F.RIGHT_CURLY);return t.length>0&&(r=t[t.length-1]),0===t.length||r.kind!==F.RIGHT_CURLY?D(r,"test-first loop","}"):(t.pop(),o.body=K(H(t)),o)})(e);case"do":return(e=>{const o={kind:4,body:[],condition:[]};let r=e.tokens[e.cursorPos-1];if(W(e),e.cursorPos>=e.tokenLength)return D(r,"test-last loop","{");if(e.tokens[e.cursorPos].kind!==F.LEFT_CURLY)return M(r,e.tokens[e.cursorPos],"test-last loop","{");r=e.tokens[e.cursorPos];const t=B(e,F.LEFT_CURLY,F.RIGHT_CURLY);return t.length>0&&(r=t[t.length-1]),0===t.length||r.kind!==F.RIGHT_CURLY?D(r,"test-last loop","}"):(t.pop(),W(e),e.cursorPos>=e.tokenLength?D(r,"test-last loop","while"):e.tokens[e.cursorPos].kind!==F.KEYWORD||"while"!==e.tokens[e.cursorPos].text?M(r,e.tokens[e.cursorPos],"test-last loop","while"):(r=e.tokens[e.cursorPos],e.cursorPos++,W(e),e.cursorPos>=e.tokenLength?D(r,"test-last loop","("):e.tokens[e.cursorPos].kind!==F.LEFT_PAREN?M(r,e.tokens[e.cursorPos],"test-last loop","("):(r=e.tokens[e.cursorPos],o.condition=B(e,F.LEFT_PAREN,F.RIGHT_PAREN),o.condition.length>0&&(r=o.condition[o.condition.length-1]),0===o.condition.length||r.kind!==F.RIGHT_PAREN?D(r,"test-last loop",")"):(o.condition.pop(),W(e),e.cursorPos>=e.tokenLength?D(r,"test-last loop",";"):e.tokens[e.cursorPos].kind!==F.SEMICOLON?M(r,e.tokens[e.cursorPos],"test-last loop",";"):(e.cursorPos++,o.body=K(H(t)),o)))))})(e);case"if":return(e=>{const o={kind:5,condition:[],bodyIf:[],bodyElse:[]};let r=e.tokens[e.cursorPos-1];if(W(e),e.cursorPos>=e.tokenLength)return D(r,"branching block (if)","(");if(e.tokens[e.cursorPos].kind!==F.LEFT_PAREN)return M(r,e.tokens[e.cursorPos],"branching block (if)","(");if(r=e.tokens[e.cursorPos],o.condition=B(e,F.LEFT_PAREN,F.RIGHT_PAREN),o.condition.length>0&&(r=o.condition[o.condition.length-1]),0===o.condition.length||r.kind!==F.RIGHT_PAREN)return D(r,"branching block (if)",")");if(o.condition.pop(),W(e),e.cursorPos>=e.tokenLength)return D(r,"branching block (if)","{");if(e.tokens[e.cursorPos].kind!==F.LEFT_CURLY)return M(r,e.tokens[e.cursorPos],"branching block (if)","{");r=e.tokens[e.cursorPos];const t=B(e,F.LEFT_CURLY,F.RIGHT_CURLY);if(t.length>0&&(r=t[t.length-1]),0===t.length||r.kind!==F.RIGHT_CURLY)return D(r,"branching block (if)","}");if(t.pop(),o.bodyIf=K(H(t)),W(e),e.cursorPos>=e.tokenLength||e.tokens[e.cursorPos].kind!==F.KEYWORD||"else"!==e.tokens[e.cursorPos].text)return o;if(r=e.tokens[e.cursorPos],e.cursorPos++,W(e),e.cursorPos>=e.tokenLength)return D(r,"branching block (if-else)","{");if(e.tokens[e.cursorPos].kind!==F.LEFT_CURLY)return M(r,e.tokens[e.cursorPos],"branching block (if-else)","{");r=e.tokens[e.cursorPos];const n=B(e,F.LEFT_CURLY,F.RIGHT_CURLY);return n.length>0&&(r=n[n.length-1]),0===n.length||r.kind!==F.RIGHT_CURLY?D(r,"branching block (if-else)","}"):(n.pop(),o.bodyElse=K(H(n)),o)})(e)}const r=[o];let t=o;if(t.kind===F.SEMICOLON)return{kind:2,body:[]};for(;e.cursorPos<e.tokenLength&&e.tokens[e.cursorPos].kind!==F.SEMICOLON&&e.tokens[e.cursorPos].kind!==F.LEFT_CURLY;)t=e.tokens[e.cursorPos],r.push(e.tokens[e.cursorPos]),e.cursorPos++;if(e.cursorPos>=e.tokenLength||e.tokens[e.cursorPos].kind!==F.LEFT_CURLY&&e.tokens[e.cursorPos].kind!==F.SEMICOLON)return D(t,"process",";");if(e.tokens[e.cursorPos].kind===F.SEMICOLON)return e.cursorPos++,{kind:2,body:r};t=e.tokens[e.cursorPos];const n=B(e,F.LEFT_CURLY,F.RIGHT_CURLY);return n.length>0&&(t=n[n.length-1]),0===n.length||t.kind!==F.RIGHT_CURLY?D(t,"function","}"):(n.pop(),{kind:6,declaration:r,body:K(H(n))})},K=e=>{const o=[];let r;for(;0!==(r=z(e)).kind&&(o.push(r),1!==r.kind););return o},V=o=>{const{sx:r}=o;return e.jsx(c,{sx:{position:"absolute",width:"100%",height:"100%",...r},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",fill:"none",viewBox:"0 0 5 5",strokeWidth:"0.1",children:e.jsx("line",{x1:"0",y1:"0",x2:"5",y2:"5",stroke:"currentColor",strokeLinecap:"round"})})})},J=o=>{const{sx:r}=o;return e.jsx(c,{sx:{position:"absolute",width:"100%",height:"100%",...r},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",fill:"none",viewBox:"0 0 5 5",strokeWidth:"0.1",children:e.jsx("line",{x1:"0",y1:"5",x2:"5",y2:"0",stroke:"currentColor",strokeLinecap:"round"})})})},q=`${l[300]} 3px 0px 0px, ${l[300]} 2.83487px 0.981584px 0px, ${l[300]} 2.35766px 1.85511px 0px, ${l[300]} 1.62091px 2.52441px 0px, ${l[300]} 0.705713px 2.91581px 0px, ${l[300]} -0.287171px 2.98622px 0px, ${l[300]} -1.24844px 2.72789px 0px, ${l[300]} -2.07227px 2.16926px 0px, ${l[300]} -2.66798px 1.37182px 0px, ${l[300]} -2.96998px 0.42336px 0px, ${l[300]} -2.94502px -0.571704px 0px, ${l[300]} -2.59586px -1.50383px 0px, ${l[300]} -1.96093px -2.27041px 0px, ${l[300]} -1.11013px -2.78704px 0px, ${l[300]} -0.137119px -2.99686px 0px, ${l[300]} 0.850987px -2.87677px 0px, ${l[300]} 1.74541px -2.43999px 0px, ${l[300]} 2.44769px -1.73459px 0px, ${l[300]} 2.88051px -0.838247px 0px`,X=o=>{const{children:r,borderTop:t,borderBottom:n,borderLeft:s,borderRight:i}=o;return e.jsx(d,{width:"100%",sx:{borderStyle:"solid",borderLeftWidth:s?2:0,borderTopWidth:t?2:0,borderBottomWidth:n?2:0,borderRightWidth:i?2:0},children:r})},Q=o=>{const{children:r,...t}=o;return e.jsx(a,{padding:1.5,...t,sx:{fontFamily:"Fira Code",wordBreak:"break-word",fontVariantLigatures:"contextual",...t.sx},children:e.jsx(i,{delimiters:[{left:"$",right:"$",display:!1}],children:r??"-"})})},Z=o=>{const{bodyTokens:r,...t}=o;let n;return void 0!==r&&(n=r.map((e=>e.text)).join("").trim(),0===n.length&&(n=void 0)),e.jsx(X,{...t,children:e.jsx(Q,{children:n})})},ee=o=>{const{conditionTokens:r,body:t,...n}=o;let s;void 0!==r&&r.length>0&&(s=r.map((e=>e.text)).join("").trim());let i=e.jsx(Z,{borderTop:!0,borderLeft:!0});return t.length>0&&(i=t.map(((o,r)=>e.jsx(se,{borderTop:!0,borderLeft:!0,node:o},`subnode-${r}`)))),e.jsxs(X,{...n,children:[e.jsx(Q,{children:s}),e.jsx(d,{paddingLeft:2,children:i})]})},oe=o=>{const{conditionTokens:r,body:t,...n}=o;let s;void 0!==r&&r.length>0&&(s=r.map((e=>e.text)).join("").trim());let i=e.jsx(Z,{borderBottom:!0,borderLeft:!0});return t.length>0&&(i=t.map(((o,r)=>e.jsx(se,{node:o,borderBottom:!0,borderLeft:!0},`subnode-${r}`)))),e.jsxs(X,{...n,children:[e.jsx(d,{paddingLeft:2,children:i}),e.jsx(Q,{children:s})]})},re=r=>{var t;const{conditionTokens:n,bodyIf:s,bodyElse:i,...c}=r,l=o.useRef(null),[a,u]=o.useState(void 0);let h;o.useEffect((()=>{if(!l||!l.current)return;const e=l.current.getBoundingClientRect().width;u(`${e}px`)}),[null==(t=l.current)?void 0:t.getBoundingClientRect()]),void 0!==n&&n.length>0&&(h=n.map((e=>e.text)).join("").trim());let x=e.jsx(Z,{borderTop:!0});s.length>0&&(x=s.map(((o,r)=>e.jsx(se,{borderTop:!0,node:o},`index-${r}`))));let p=e.jsx(Z,{borderTop:!0});return i.length>0&&(p=i.map(((o,r)=>e.jsx(se,{borderTop:!0,node:o},`index-${r}`)))),e.jsx(X,{...c,children:e.jsxs(d,{width:"100%",height:"100%",display:"flex",flexDirection:"column",children:[e.jsx(Q,{align:"center",children:h}),e.jsxs(d,{display:"flex",flexDirection:"row",children:[e.jsxs(d,{width:a,height:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",children:[e.jsx(Q,{sx:{wordBreak:"keep-all",zIndex:2,textShadow:q},children:"True"}),e.jsx(V,{htmlColor:"black"})]}),e.jsxs(d,{flexGrow:1,height:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",children:[e.jsx(J,{}),e.jsx(Q,{sx:{wordBreak:"keep-all",zIndex:2,textShadow:q},children:"False"})]})]}),e.jsxs(d,{width:"100%",maxWidth:"100%",height:"100%",display:"flex",flexDirection:"row",children:[e.jsx(d,{ref:l,component:d,flexGrow:1,flexShrink:1,minWidth:"20%",minHeight:"100%",sx:{borderColor:"inherit",borderRightStyle:"solid",borderRightWidth:2},children:x}),e.jsx(d,{display:"flex",flexGrow:1,flexShrink:1,flexDirection:"column",minWidth:"20%",minHeight:"100%",children:p})]})]})})},te=o=>{const{declarationTokens:r,body:t,...n}=o;let s;void 0!==r&&r.length>0&&(s=r.map((e=>e.text)).join("").trim());let i=e.jsx(Z,{borderTop:!0,borderLeft:!0,borderRight:!0});return t.length>0&&(i=t.map(((o,r)=>e.jsx(se,{node:o,borderTop:!0,borderLeft:!0,borderRight:!0},`subnode-${r}`)))),e.jsxs(X,{...n,children:[e.jsx(Q,{align:"center",children:s}),e.jsx(d,{paddingX:2,children:i})]})},ne=o=>{const{context:r,reason:t,lineNumber:n,charNumber:s,caretOffset:i,...c}=o,l=`At line ${n}, character ${s}: ${t}`,d="~".repeat(i)+"^";return e.jsxs(X,{...c,children:[e.jsx(Q,{children:l}),e.jsx(Q,{paddingY:0,children:r}),e.jsx(Q,{paddingY:0,children:d})]})},se=r=>{const{node:t,...n}=r;switch(t.kind){case U.ERROR:return e.jsx(ne,{...n,caretOffset:t.caretOffset,context:t.context,reason:t.reason,lineNumber:t.lineNumber,charNumber:t.charNumber});case U.FUNCTION:return e.jsx(te,{declarationTokens:t.declaration,body:t.body,...n});case U.LOOP_FIRST:return e.jsx(ee,{...n,conditionTokens:t.condition,body:t.body});case U.LOOP_LAST:return e.jsx(oe,{...n,conditionTokens:t.condition,body:t.body});case U.IF_ELSE:return e.jsx(re,{...n,conditionTokens:t.condition,bodyIf:t.bodyIf,bodyElse:t.bodyElse});case U.PROCESS:return e.jsx(Z,{...n,bodyTokens:t.body})}return e.jsx(o.Fragment,{})},ie=o=>{const{nodes:r,id:t,boxProps:n}=o;let s=e.jsx(a,{fontFamily:"Fira Code",fontStyle:"italic",children:"Nothing to display."});return r.length>0&&(s=r.map(((o,t)=>e.jsx(se,{node:o,borderLeft:!0,borderTop:!0,borderRight:!0,borderBottom:t===r.length-1},`top-level-node-${t}`)))),e.jsx(d,{sx:n,children:e.jsx(d,{id:t,sx:{maxWidth:"640px",backgroundColor:l[300],borderColor:l[700]},children:s})})},ce=o=>{const{value:r,onValueChange:t}=o;return e.jsx(N,{value:r,onChange:t,theme:"dark",extensions:[v.lineWrapping]})},le=o=>{const{collapsed:r,...t}=o;return r?e.jsx(u,{title:t.children,children:e.jsxs(h,{...t,startIcon:void 0,endIcon:void 0,children:[t.startIcon,t.endIcon]})}):e.jsx(h,{...t,startIcon:t.startIcon,endIcon:t.endIcon,children:t.children})},de=(e,o)=>{const r=new URL(o);return r.searchParams.set("preview","true"),r.searchParams.set("content",e),r.href},ae=r=>{const{slotAppBar:t,slotPanelLeft:n,slotPanelRight:s}=r,i=o.useRef(null);let c=0;null!==i.current&&(c=i.current.getBoundingClientRect().height);const[a,u]=o.useState((e=>{const o=new URL(e).searchParams.get("preview");return null!==o&&"true"===o})(window.location.href)),j=x((e=>e.breakpoints.down("md")));return e.jsxs(d,{sx:{backgroundColor:l[300],borderColor:l[700]},children:[e.jsx(p,{ref:i,square:!0,elevation:0,sx:{padding:1},children:e.jsxs(g,{display:"flex",direction:"row",justifyContent:"space-between",children:[e.jsxs(f,{variant:"outlined",children:[e.jsx(h,{onClick:()=>{u((e=>!e))},children:a?"Show code":"Hide code"})," ",e.jsx(h,{href:"https://eurydia.github.io/project-nassi-shneiderman-diagram-builder-online-docs/",component:"a",target:"_blank",endIcon:e.jsx(k,{}),children:"docs"})]}),t]})}),e.jsx(d,{children:e.jsxs(m,{container:!0,children:[e.jsx(m,{item:!0,xs:12,lg:6,display:a?"none":void 0,children:e.jsx(d,{overflow:"auto",height:`calc(100vh - ${c}px)`,children:n})}),e.jsx(m,{item:!0,xs:!0,lg:!0,display:j&&!a?"none":void 0,children:e.jsx(d,{overflow:"auto",height:`calc(100vh - ${c}px)`,children:s})})]})})]})},ue=()=>{const{enqueueSnackbar:r}=n(),{exportJPEG:t,exportPNG:s,exportSVG:i}=(c="structogram-preview-region",{exportSVG:async()=>{const e=document.getElementById(c);return null!==e&&S(e).then((e=>null!==e&&(O.saveAs(e,"structogram"),!0)))},exportJPEG:async()=>{const e=document.getElementById(c);return null!==e&&$(e).then((e=>null!==e&&(O.saveAs(e,"structogram"),!0)))},exportPNG:async()=>{const e=document.getElementById(c);return null!==e&&_(e).then((e=>null!==e&&(O.saveAs(e,"structogram"),!0)))}});var c;const{editorContent:l,setEditorContent:d}=((e,r)=>{const[t,n]=o.useState((()=>{const o=new URL(e).searchParams.get("content");if(null!==o)return window.localStorage.setItem(r,o),o;const t=window.localStorage.getItem(r);if(null!==t)try{return JSON.parse(t)}catch{return t}return"Hello World;"}));return{editorContent:t,setEditorContent:e=>{n(e),window.localStorage.setItem(r,JSON.stringify(e))}}})(window.location.href,"autosaveContent"),a=x((e=>e.breakpoints.down("md"))),[u,h]=o.useState([]),[g,k]=o.useState(null),[m,C]=o.useState(null);o.useEffect((()=>{const e=(e=>{const o=[];let r;for(;0!==(r=G(e)).kind;)o.push(r);return o})((e=>{const o=(e=>{let o="",r=0;for(;r<e.length;)if(r+1<e.length&&"/"===e[r]&&"/"===e[r+1])for(;r<e.length&&"\n"!==e[r];)r++;else o+=e[r],r++;return o})(e.normalize());return{content:o,contentLength:o.length,cursorPos:0,lineNumber:1,charNumber:1}})(l)),o=K(H(e));h(o)}),[l]);const I=async e=>{e().then((e=>{e?r("Diagram exported",{variant:"info"}):r("Failed to export diagram",{variant:"error"})}))};return e.jsxs(o.Fragment,{children:[e.jsx(ae,{slotAppBar:e.jsxs(f,{variant:"outlined",children:[e.jsx(le,{collapsed:a,startIcon:e.jsx(j,{}),onClick:e=>{k(e.currentTarget)},children:"EXPORT"}),e.jsx(le,{collapsed:a,endIcon:e.jsx(b,{}),onClick:e=>{C(e.currentTarget)},children:"SHARE"})]}),slotPanelLeft:e.jsx(ce,{value:l,onValueChange:d}),slotPanelRight:e.jsx(ie,{nodes:u,id:"structogram-preview-region",boxProps:{height:"100%",padding:4,userSelect:"none"}})}),e.jsx(P,{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},anchorEl:g,open:null!==g,onClose:()=>k(null),children:e.jsx(p,{sx:{padding:1},children:e.jsxs(L,{children:[e.jsxs(R,{onClick:()=>I(t),children:[e.jsx(E,{children:e.jsx(j,{})}),e.jsx(T,{children:"Save as JPEG"})]}),e.jsxs(R,{onClick:()=>I(s),children:[e.jsx(E,{children:e.jsx(j,{})}),e.jsx(T,{children:"Save as PNG"})]}),e.jsxs(R,{onClick:()=>I(i),children:[e.jsx(E,{children:e.jsx(j,{})}),e.jsx(T,{children:"Save as SVG"})]})]})})}),e.jsx(P,{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},anchorEl:m,open:null!==m,onClose:()=>C(null),children:e.jsx(p,{sx:{padding:1},children:e.jsxs(L,{children:[e.jsxs(R,{onClick:()=>{navigator.clipboard.writeText(de(l,window.location.href)),r("Link copied to clipboard",{variant:"info"})},children:[e.jsx(E,{children:e.jsx(y,{})}),e.jsx(T,{children:"Copy Link"})]}),e.jsxs(R,{onClick:()=>{const e=`<iframe loading="lazy" height="auto" width="100%" src="${de(l,window.location.href)}" style="aspect-ratio: 16/10; border: none;"></iframe>`;navigator.clipboard.writeText(e),r("Link copied to clipboard",{variant:"info"})},children:[e.jsx(E,{children:e.jsx(y,{})}),e.jsx(T,{children:"Copy Iframe Embed"})]})]})})})]})},he=C({palette:{mode:"dark"}}),xe=()=>e.jsxs(o.Fragment,{children:[e.jsx(I,{}),e.jsx(w,{theme:he,children:e.jsx(s,{preventDuplicate:!0,autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"center"},children:e.jsx(ue,{})})})]});t.createRoot(document.getElementById("root")).render(e.jsx(r.StrictMode,{children:e.jsx(xe,{})}));