var n,e,t={exports:{}},a={};function r(){return e||(e=1,t.exports=(n||(n=1,function(n){function e(n,e){var t=n.length;n.push(e);n:for(;0<t;){var a=t-1>>>1,i=n[a];if(!(0<r(i,e)))break n;n[a]=e,n[t]=i,t=a}}function t(n){return 0===n.length?null:n[0]}function a(n){if(0===n.length)return null;var e=n[0],t=n.pop();if(t!==e){n[0]=t;n:for(var a=0,i=n.length,l=i>>>1;a<l;){var u=2*(a+1)-1,o=n[u],s=u+1,c=n[s];if(0>r(o,t))s<i&&0>r(c,o)?(n[a]=c,n[s]=t,a=s):(n[a]=o,n[u]=t,a=u);else{if(!(s<i&&0>r(c,t)))break n;n[a]=c,n[s]=t,a=s}}}return e}function r(n,e){var t=n.sortIndex-e.sortIndex;return 0!==t?t:n.id-e.id}if("object"==typeof performance&&"function"==typeof performance.now){var i=performance;n.unstable_now=function(){return i.now()}}else{var l=Date,u=l.now();n.unstable_now=function(){return l.now()-u}}var o=[],s=[],c=1,f=null,b=3,p=!1,v=!1,d=!1,y="function"==typeof setTimeout?setTimeout:null,m="function"==typeof clearTimeout?clearTimeout:null,g="undefined"!=typeof setImmediate?setImmediate:null;function _(n){for(var r=t(s);null!==r;){if(null===r.callback)a(s);else{if(!(r.startTime<=n))break;a(s),r.sortIndex=r.expirationTime,e(o,r)}r=t(s)}}function h(n){if(d=!1,_(n),!v)if(null!==t(o))v=!0,E(k);else{var e=t(s);null!==e&&N(h,e.startTime-n)}}function k(e,r){v=!1,d&&(d=!1,m(T),T=-1),p=!0;var i=b;try{for(_(r),f=t(o);null!==f&&(!(f.expirationTime>r)||e&&!L());){var l=f.callback;if("function"==typeof l){f.callback=null,b=f.priorityLevel;var u=l(f.expirationTime<=r);r=n.unstable_now(),"function"==typeof u?f.callback=u:f===t(o)&&a(o),_(r)}else a(o);f=t(o)}if(null!==f)var c=!0;else{var y=t(s);null!==y&&N(h,y.startTime-r),c=!1}return c}finally{f=null,b=i,p=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var w,x=!1,I=null,T=-1,P=5,C=-1;function L(){return!(n.unstable_now()-C<P)}function M(){if(null!==I){var e=n.unstable_now();C=e;var t=!0;try{t=I(!0,e)}finally{t?w():(x=!1,I=null)}}else x=!1}if("function"==typeof g)w=function(){g(M)};else if("undefined"!=typeof MessageChannel){var F=new MessageChannel,j=F.port2;F.port1.onmessage=M,w=function(){j.postMessage(null)}}else w=function(){y(M,0)};function E(n){I=n,x||(x=!0,w())}function N(e,t){T=y((function(){e(n.unstable_now())}),t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(n){n.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,E(k))},n.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<n?Math.floor(1e3/n):5},n.unstable_getCurrentPriorityLevel=function(){return b},n.unstable_getFirstCallbackNode=function(){return t(o)},n.unstable_next=function(n){switch(b){case 1:case 2:case 3:var e=3;break;default:e=b}var t=b;b=e;try{return n()}finally{b=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(n,e){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var t=b;b=n;try{return e()}finally{b=t}},n.unstable_scheduleCallback=function(a,r,i){var l=n.unstable_now();switch(i="object"==typeof i&&null!==i&&"number"==typeof(i=i.delay)&&0<i?l+i:l,a){case 1:var u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}return a={id:c++,callback:r,priorityLevel:a,startTime:i,expirationTime:u=i+u,sortIndex:-1},i>l?(a.sortIndex=i,e(s,a),null===t(o)&&a===t(s)&&(d?(m(T),T=-1):d=!0,N(h,i-l))):(a.sortIndex=u,e(o,a),v||p||(v=!0,E(k))),a},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(n){var e=b;return function(){var t=b;b=e;try{return n.apply(this,arguments)}finally{b=t}}}}(a)),a)),t.exports}export{r};
//# sourceMappingURL=scheduler-PaNQALdK.js.map
