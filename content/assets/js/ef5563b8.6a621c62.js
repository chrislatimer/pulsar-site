"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[70839],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,b=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?i.createElement(b,o(o({ref:t},p),{},{components:n})):i.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const a={id:"client-libraries-node-initialize",title:"Initialize Node.js client",sidebar_label:"Initialize",description:"Learn how to initialize Node.js client in Pulsar."},o=void 0,l={unversionedId:"client-libraries-node-initialize",id:"version-3.2.0/client-libraries-node-initialize",title:"Initialize Node.js client",description:"Learn how to initialize Node.js client in Pulsar.",source:"@site/versioned_docs/version-3.2.0/client-libraries-node-initialize.md",sourceDirName:".",slug:"/client-libraries-node-initialize",permalink:"/docs/3.2.0/client-libraries-node-initialize",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.0/client-libraries-node-initialize.md",tags:[],version:"3.2.0",frontMatter:{id:"client-libraries-node-initialize",title:"Initialize Node.js client",sidebar_label:"Initialize",description:"Learn how to initialize Node.js client in Pulsar."},sidebar:"docsSidebar",previous:{title:"Set up",permalink:"/docs/3.2.0/client-libraries-node-setup"},next:{title:"Use",permalink:"/docs/3.2.0/client-libraries-node-use"}},c={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To interact with Pulsar, you first need a client object. You can create a client instance using a ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," operator and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Client")," method, passing in a client options object."),(0,r.kt)("p",null,"Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Pulsar = require('pulsar-client');\n\n(async () => {\n  const client = new Pulsar.Client({\n    serviceUrl: 'pulsar://localhost:6650',\n  });\n\n  await client.close();\n})();\n")),(0,r.kt)("p",null,"For a complete list of client configurations, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.2.0/client-libraries-node-configs#client-configuration"},"here"),"."))}d.isMDXComponent=!0}}]);