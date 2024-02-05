"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[12851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={Id:"tutorials-tenant",title:"How to set up a tenant",sidebar_label:"Set up a tenant",description:"Learn how to set up a tenant in Pulsar."},i=void 0,s={unversionedId:"tutorials-tenant",id:"version-3.2.0/tutorials-tenant",title:"How to set up a tenant",description:"Learn how to set up a tenant in Pulsar.",source:"@site/versioned_docs/version-3.2.0/tutorials-tenant.md",sourceDirName:".",slug:"/tutorials-tenant",permalink:"/docs/3.2.0/tutorials-tenant",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.0/tutorials-tenant.md",tags:[],version:"3.2.0",frontMatter:{Id:"tutorials-tenant",title:"How to set up a tenant",sidebar_label:"Set up a tenant",description:"Learn how to set up a tenant in Pulsar."},sidebar:"docsSidebar",previous:{title:"Tutorials",permalink:"/docs/3.2.0/how-to-landing"},next:{title:"Create a namespace",permalink:"/docs/3.2.0/tutorials-namespace"}},l={},p=[{value:"Related Topics",id:"related-topics",level:4}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar is a powerful messaging system you can use to process and route high volumes of data. Each ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.2.0/concepts-multi-tenancy#tenants"},"tenant")," provides a distinct unit of isolation with its own set of roles, permissions, configuration settings, and bookmarks. "),(0,r.kt)("p",null,'In this tutorial, you will create a new tenant, named "apache" in your Pulsar cluster, hosted in K8s helm. '),(0,r.kt)("p",null,"To create a tenant, complete the following steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the toolset container."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it -n pulsar pulsar-mini-toolset-0 -- /bin/bash\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the toolset container, create a tenant named apache."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin tenants create apache\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"List the tenants to see if the tenant is created successfully."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin tenants list\n")),(0,r.kt)("p",{parentName:"li"},"You should see a similar output as below. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'The tenant apache has been successfully created.\n"apache"\n"public"\n"pulsar"\n')))),(0,r.kt)("h4",{id:"related-topics"},"Related Topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.2.0/tutorials-namespace"},"Create a namespace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.2.0/tutorials-topic"},"Create a topic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.2.0/getting-started-helm"},"Run a standalone cluster in Kubernetes"))))}m.isMDXComponent=!0}}]);