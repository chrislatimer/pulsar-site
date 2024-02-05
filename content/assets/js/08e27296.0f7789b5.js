"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[35711],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),u=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=r,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return t?o.createElement(d,l(l({ref:n},s),{},{components:t})):o.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},38925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=t(87462),r=(t(67294),t(3905));const a={id:"functions-deploy-localrun",title:"Deploy a function in localrun mode",sidebar_label:"Deploy a function in localrun mode",description:"Deploy a Pulsar function in localrun mode."},l=void 0,i={unversionedId:"functions-deploy-localrun",id:"version-3.2.0/functions-deploy-localrun",title:"Deploy a function in localrun mode",description:"Deploy a Pulsar function in localrun mode.",source:"@site/versioned_docs/version-3.2.0/functions-deploy-localrun.md",sourceDirName:".",slug:"/functions-deploy-localrun",permalink:"/docs/3.2.0/functions-deploy-localrun",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.0/functions-deploy-localrun.md",tags:[],version:"3.2.0",frontMatter:{id:"functions-deploy-localrun",title:"Deploy a function in localrun mode",sidebar_label:"Deploy a function in localrun mode",description:"Deploy a Pulsar function in localrun mode."},sidebar:"docsSidebar",previous:{title:"Default arguments of CLI",permalink:"/docs/3.2.0/functions-deploy-arguments"},next:{title:"Deploy a function in cluster mode",permalink:"/docs/3.2.0/functions-deploy-cluster"}},c={},u=[],s={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you deploy a function in localrun mode, it runs on the machine where you enter the commands \u2013 on your laptop, for example, or in an ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/"},"AWS EC2")," instance."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"localrun")," command to run a single instance of a function. To run multiple instances, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"localrun")," command multiple times."),(0,r.kt)("p",null,"The following is an example of how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"localrun")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions localrun \\\n  --py myfunc.py \\\n  --classname myfunc.SomeFunction \\\n  --inputs persistent://public/default/input-1 \\\n  --output persistent://public/default/output-1\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In localrun mode, Java functions use thread runtime; Python and Go functions use process runtime.")),(0,r.kt)("p",null,"By default, the function connects with a Pulsar cluster running on the same machine via a local broker service URL. If you want to connect it to a non-local Pulsar cluster, you can specify a different broker service URL using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--brokerServiceUrl")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions localrun \\\n  --broker-service-url pulsar://my-cluster-host:6650 \\\n  # Other function parameters\n")))}m.isMDXComponent=!0}}]);