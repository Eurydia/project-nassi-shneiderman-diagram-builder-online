let e={data:""},t=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,r=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,a=(e,t)=>{let r="",l="",o="";for(let n in e){let c=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+c+";":l+="f"==n[1]?a(c,n):n+"{"+a(c,"k"==n[1]?"":t)+"}":"object"==typeof c?l+=a(c,t?t.replace(/([^,])+/g,(e=>n.replace(/(^:.*)|([^,])+/g,(t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)))):n):null!=c&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=a.p?a.p(n,c):n+":"+c+";")}return r+(t&&o?t+"{"+o+"}":o)+l},o={},n=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+n(e[r]);return t}return e};function c(c){let i=this||{},p=c.call?c(i.p):c;return((e,c,i,p,d)=>{let s=n(e),g=o[s]||(o[s]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(s));if(!o[g]){let n=s!==e?e:(e=>{let a,o,n=[{}];for(;a=t.exec(e.replace(r,""));)a[4]?n.shift():a[3]?(o=a[3].replace(l," ").trim(),n.unshift(n[0][o]=n[0][o]||{})):n[0][a[1]]=a[2].replace(l," ").trim();return n[0]})(e);o[g]=a(d?{["@keyframes "+g]:n}:n,i?"":"."+g)}let u=i&&o.g?o.g:null;return i&&(o.g=o[g]),f=o[g],b=c,h=p,(m=u)?b.data=b.data.replace(m,f):-1===b.data.indexOf(f)&&(b.data=h?f+b.data:b.data+f),g;var f,b,h,m})(p.unshift?p.raw?((e,t,r)=>e.reduce(((e,l,o)=>{let n=t[o];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":a(e,""):!1===e?"":e}return e+l+(null==n?"":n)}),""))(p,[].slice.call(arguments,1),i.p):p.reduce(((e,t)=>Object.assign(e,t&&t.call?t(i.p):t)),{}):p,(d=i.target,"object"==typeof window?((d?d.querySelector("#_goober"):window._goober)||Object.assign((d||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:d||e),i.g,i.o,i.k);var d}c.bind({g:1}),c.bind({k:1});export{c as u};
