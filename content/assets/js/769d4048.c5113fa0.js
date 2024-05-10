"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[98351],{15680:(e,t,a)=>{a.d(t,{xA:()=>o,yg:()=>y});var r=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var g=r.createContext({}),s=function(e){var t=r.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=s(e.components);return r.createElement(g.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,g=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=s(a),d=l,y=u["".concat(g,".").concat(d)]||u[d]||m[d]||n;return a?r.createElement(y,i(i({ref:t},o),{},{components:a})):r.createElement(y,i({ref:t},o))}));function y(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=d;var p={};for(var g in t)hasOwnProperty.call(t,g)&&(p[g]=t[g]);p.originalType=e,p[u]="string"==typeof e?e:l,i[1]=p;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},75981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var r=a(58168),l=(a(96540),a(15680));const n={id:"client-libraries",title:"Pulsar client libraries",sidebar_label:"Overview"},i=void 0,p={unversionedId:"client-libraries",id:"version-2.11.x/client-libraries",title:"Pulsar client libraries",description:"Pulsar supports the following language-specific client libraries:",source:"@site/versioned_docs/version-2.11.x/client-libraries.md",sourceDirName:".",slug:"/client-libraries",permalink:"/docs/2.11.x/client-libraries",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/client-libraries.md",tags:[],version:"2.11.x",frontMatter:{id:"client-libraries",title:"Pulsar client libraries",sidebar_label:"Overview"},sidebar:"docsSidebar",previous:{title:"Pulsar Perf",permalink:"/docs/2.11.x/performance-pulsar-perf"},next:{title:"Java",permalink:"/docs/2.11.x/client-libraries-java"}},g={},s=[{value:"Feature matrix",id:"feature-matrix",level:2},{value:"Third-party clients",id:"third-party-clients",level:2},{value:".NET",id:"net",level:3},{value:"Go",id:"go",level:3},{value:"Haskell",id:"haskell",level:3},{value:"Node.js",id:"nodejs",level:3},{value:"PHP",id:"php",level:3},{value:"Rust",id:"rust",level:3},{value:"Scala",id:"scala",level:3}],o={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,l.yg)(u,(0,r.A)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Pulsar supports the following language-specific client libraries:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Language"),(0,l.yg)("th",{parentName:"tr",align:null},"Documentation"),(0,l.yg)("th",{parentName:"tr",align:null},"Release note"),(0,l.yg)("th",{parentName:"tr",align:null},"Code repo"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Java"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"/docs/2.11.x/client-libraries-java"},"User doc"),"   ",(0,l.yg)("br",null)," ",(0,l.yg)("a",{parentName:"td",href:"https://pulsar.apache.org/api/client/2.11.x/"},"API doc")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"pathname:///release-notes/client-java"},"Standalone")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/pulsar-client"},"Bundled"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"C++"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"/docs/2.11.x/client-libraries-cpp"},"User doc"),"    ",(0,l.yg)("br",null)," ",(0,l.yg)("a",{parentName:"td",href:"https://pulsar.apache.org/api/cpp/3.5.x"},"API doc")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"pathname:///release-notes/client-cpp"},"Standalone")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar-client-cpp"},"Standalone"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Python"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"/docs/2.11.x/client-libraries-python"},"User doc")," ",(0,l.yg)("br",null)," ",(0,l.yg)("a",{parentName:"td",href:"https://pulsar.apache.org/api/python/3.5.x"},"API doc")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"pathname:///release-notes/client-python"},"Standalone")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar-client-python"},"Standalone"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Go client"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"/docs/2.11.x/client-libraries-go"},"User doc")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"pathname:///release-notes/client-go"},"Standalone")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar-client-go"},"Standalone"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Node.js"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"/docs/2.11.x/client-libraries-node"},"User doc")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"pathname:///release-notes/client-node"},"Standalone")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar-client-node"},"Standalone"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"C#"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"/docs/2.11.x/client-libraries-dotnet"},"User doc")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"pathname:///release-notes/client-cs"},"Standalone")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar-dotpulsar"},"Standalone"))))),(0,l.yg)("p",null,"Pulsar supports the following language-agnostic client libraries:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Interface"),(0,l.yg)("th",{parentName:"tr",align:null},"Documentation"),(0,l.yg)("th",{parentName:"tr",align:null},"Release note"),(0,l.yg)("th",{parentName:"tr",align:null},"Code repo"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"REST"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"/docs/2.11.x/client-libraries-rest"},"User doc")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"pathname:///release-notes/"},"Bundled")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/pulsar-broker"},"Bundled"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"WebSocket"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"/docs/2.11.x/client-libraries-websocket"},"User doc")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"pathname:///release-notes/client-ws"},"Standalone")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar/tree/master/pulsar-websocket"},"Bundled"))))),(0,l.yg)("h2",{id:"feature-matrix"},"Feature matrix"),(0,l.yg)("p",null,"Pulsar client feature matrix for different languages is listed on ",(0,l.yg)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1YHYTkIXR8-Ql103u-IMI18TXLlGStK8uJjDsOOA0T20/edit#gid=1784579914"},"Pulsar Feature Matrix (Client and Function)")," page."),(0,l.yg)("h2",{id:"third-party-clients"},"Third-party clients"),(0,l.yg)("p",null,"Besides the officially released clients, multiple projects on developing Pulsar clients are available in different languages."),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},'Want your repository listed here? Click the "Edit this page" button at the bottom of this page.')),(0,l.yg)("h3",{id:"net"},".NET"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Project"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"),(0,l.yg)("th",{parentName:"tr",align:null},"License"),(0,l.yg)("th",{parentName:"tr",align:null},"Badges"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/fsprojects/pulsar-client-dotnet"},"pulsar-client-dotnet")),(0,l.yg)("td",{parentName:"tr",align:null},"Apache Pulsar native client for .NET (C#/F#/VB)"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://opensource.org/licenses/MIT"},"MIT")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{parentName:"td",src:"https://img.shields.io/github/stars/fsprojects/pulsar-client-dotnet?color=FEEA00&style=flat-square",alt:"GitHub Repo Stars"})," ",(0,l.yg)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/fsprojects/pulsar-client-dotnet?color=7FD8BE&style=flat-square",alt:"GitHub Last Commit"}))))),(0,l.yg)("h3",{id:"go"},"Go"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Project"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"),(0,l.yg)("th",{parentName:"tr",align:null},"License"),(0,l.yg)("th",{parentName:"tr",align:null},"Badges"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/Comcast/pulsar-client-go"},"pulsar-client-go")),(0,l.yg)("td",{parentName:"tr",align:null},"A Go client library for Apache Pulsar"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache-2.0")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{parentName:"td",src:"https://img.shields.io/github/stars/apache/pulsar-client-go?color=FEEA00&style=flat-square",alt:"GitHub Repo Stars"})," ",(0,l.yg)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/apache/pulsar-client-go?color=7FD8BE&style=flat-square",alt:"GitHub Last Commit"}))))),(0,l.yg)("h3",{id:"haskell"},"Haskell"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Project"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"),(0,l.yg)("th",{parentName:"tr",align:null},"License"),(0,l.yg)("th",{parentName:"tr",align:null},"Badges"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/cr-org/supernova"},"supernova")),(0,l.yg)("td",{parentName:"tr",align:null},"Apache Pulsar client for Haskell"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache-2.0")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{parentName:"td",src:"https://img.shields.io/github/stars/cr-org/supernova?color=FEEA00&style=flat-square",alt:"GitHub Repo Stars"})," ",(0,l.yg)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/cr-org/supernova?color=7FD8BE&style=flat-square",alt:"GitHub Last Commit"}))))),(0,l.yg)("h3",{id:"nodejs"},"Node.js"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Project"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"),(0,l.yg)("th",{parentName:"tr",align:null},"License"),(0,l.yg)("th",{parentName:"tr",align:null},"Badges"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/ayeo-flex-org/pulsar-flex"},"pulsar-flex")),(0,l.yg)("td",{parentName:"tr",align:null},"Pulsar Flex is a modern Apache Pulsar client for Node.js, developed to be independent of C++."),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://opensource.org/licenses/MIT"},"MIT")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{parentName:"td",src:"https://img.shields.io/github/stars/ayeo-flex-org/pulsar-flex?color=FEEA00&style=flat-square",alt:"GitHub Repo Stars"})," ",(0,l.yg)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/ayeo-flex-org/pulsar-flex?color=7FD8BE&style=flat-square",alt:"GitHub Last Commit"}))))),(0,l.yg)("h3",{id:"php"},"PHP"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Project"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"),(0,l.yg)("th",{parentName:"tr",align:null},"License"),(0,l.yg)("th",{parentName:"tr",align:null},"Badges"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/ikilobyte/pulsar-client-php"},"pulsar-client-php")),(0,l.yg)("td",{parentName:"tr",align:null},"PHP Native Client library for Apache Pulsar"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://opensource.org/licenses/MIT"},"MIT")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{parentName:"td",src:"https://img.shields.io/github/stars/ikilobyte/pulsar-client-php?color=FEEA00&style=flat-square",alt:"GitHub Repo Stars"})," ",(0,l.yg)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/ikilobyte/pulsar-client-php?color=7FD8BE&style=flat-square",alt:"GitHub Last Commit"}))))),(0,l.yg)("h3",{id:"rust"},"Rust"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Project"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"),(0,l.yg)("th",{parentName:"tr",align:null},"License"),(0,l.yg)("th",{parentName:"tr",align:null},"Badges"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/streamnative/pulsar-rs"},"pulsar-rs")),(0,l.yg)("td",{parentName:"tr",align:null},"Rust Client library for Apache Pulsar"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache-2.0")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{parentName:"td",src:"https://img.shields.io/github/stars/streamnative/pulsar-rs?color=FEEA00&style=flat-square",alt:"GitHub Repo Stars"})," ",(0,l.yg)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/streamnative/pulsar-rs?color=7FD8BE&style=flat-square",alt:"GitHub Last Commit"}))))),(0,l.yg)("h3",{id:"scala"},"Scala"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Project"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"),(0,l.yg)("th",{parentName:"tr",align:null},"License"),(0,l.yg)("th",{parentName:"tr",align:null},"Badges"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/CleverCloud/pulsar4s"},"pulsar4s")),(0,l.yg)("td",{parentName:"tr",align:null},"Idiomatic, typesafe, and reactive Scala client for Apache Pulsar"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache-2.0")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{parentName:"td",src:"https://img.shields.io/github/stars/CleverCloud/pulsar4s?color=FEEA00&style=flat-square",alt:"GitHub Repo Stars"})," ",(0,l.yg)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/CleverCloud/pulsar4s?color=7FD8BE&style=flat-square",alt:"GitHub Last Commit"}))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://github.com/cr-org/neutron"},"neutron")),(0,l.yg)("td",{parentName:"tr",align:null},"Purely functional Apache Pulsar client for Scala built on top of Fs2"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache-2.0")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{parentName:"td",src:"https://img.shields.io/github/stars/cr-org/neutron?color=FEEA00&style=flat-square",alt:"GitHub Repo Stars"})," ",(0,l.yg)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/cr-org/neutron?color=7FD8BE&style=flat-square",alt:"GitHub Last Commit"}))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://neutron.profunktor.dev"},"neutron (profunktor's fork)")),(0,l.yg)("td",{parentName:"tr",align:null},"Fs2-powered Apache Pulsar client with support for Scala 2 and 3"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache-2.0")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("img",{parentName:"td",src:"https://img.shields.io/github/stars/profunktor/neutron?color=FEEA00&style=flat-square",alt:"GitHub Repo Stars"})," ",(0,l.yg)("img",{parentName:"td",src:"https://img.shields.io/github/last-commit/profunktor/neutron?color=7FD8BE&style=flat-square",alt:"GitHub Last Commit"}))))))}m.isMDXComponent=!0}}]);