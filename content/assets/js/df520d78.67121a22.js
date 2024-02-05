"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),b=i,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},52999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={id:"client-libraries-cpp-initialize",title:"Initialize a C++ client object",sidebar_label:"Initialize",description:"Learn how to Initialize C++ client in Pulsar."},l=void 0,o={unversionedId:"client-libraries-cpp-initialize",id:"version-3.2.0/client-libraries-cpp-initialize",title:"Initialize a C++ client object",description:"Learn how to Initialize C++ client in Pulsar.",source:"@site/versioned_docs/version-3.2.0/client-libraries-cpp-initialize.md",sourceDirName:".",slug:"/client-libraries-cpp-initialize",permalink:"/docs/3.2.0/client-libraries-cpp-initialize",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.0/client-libraries-cpp-initialize.md",tags:[],version:"3.2.0",frontMatter:{id:"client-libraries-cpp-initialize",title:"Initialize a C++ client object",sidebar_label:"Initialize",description:"Learn how to Initialize C++ client in Pulsar."},sidebar:"docsSidebar",previous:{title:"Set up",permalink:"/docs/3.2.0/client-libraries-cpp-setup"},next:{title:"Use",permalink:"/docs/3.2.0/client-libraries-cpp-use"}},c={},p=[],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can instantiate a Client object using just a URL for the target Pulsar ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.2.0/reference-terminology#cluster"},"cluster")," like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'Client client("pulsar://localhost:6650");\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you run a cluster in ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.2.0/getting-started-standalone"},"standalone mode"),", the broker is available at the ",(0,i.kt)("inlineCode",{parentName:"p"},"pulsar://localhost:6650")," URL by default.")))}d.isMDXComponent=!0}}]);