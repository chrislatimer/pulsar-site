"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[5594],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(f,o(o({ref:t},l),{},{components:a})):r.createElement(f,o({ref:t},l))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90501:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={Id:"tutorials-topic",title:"How to create a topic",sidebar_label:"Create a topic",description:"Learn how to create a topic in Pulsar."},o=void 0,p={unversionedId:"tutorials-topic",id:"version-3.2.0/tutorials-topic",title:"How to create a topic",description:"Learn how to create a topic in Pulsar.",source:"@site/versioned_docs/version-3.2.0/tutorials-topic.md",sourceDirName:".",slug:"/tutorials-topic",permalink:"/docs/3.2.0/tutorials-topic",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.0/tutorials-topic.md",tags:[],version:"3.2.0",frontMatter:{Id:"tutorials-topic",title:"How to create a topic",sidebar_label:"Create a topic",description:"Learn how to create a topic in Pulsar."},sidebar:"docsSidebar",previous:{title:"Create a namespace",permalink:"/docs/3.2.0/tutorials-namespace"},next:{title:"Produce and consume messages",permalink:"/docs/3.2.0/tutorials-produce-consume"}},c={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a topic",id:"create-a-topic",level:2},{value:"Related Topics",id:"related-topics",level:4}],l={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Apache Pulsar is a distributed messaging system that supports high performance and low latency. ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.2.0/concepts-messaging#topics"},"Topics")," are the primary way to structure data in Apache Pulsar. Each message in a topic has an offset, which uniquely identifies the message within the topic. "),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/3.2.0/admin-api-topics#publish-to-partitioned-topics"},"Publish to partitioned topics")),(0,n.kt)("h2",{id:"create-a-topic"},"Create a topic"),(0,n.kt)("p",null,"To create a topic, complete the following steps."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create ",(0,n.kt)("inlineCode",{parentName:"p"},"test-topic")," with 4 partitions in the namespace ",(0,n.kt)("inlineCode",{parentName:"p"},"apache/pulsar"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics create-partitioned-topic apache/pulsar/test-topic -p 4\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"List all the partitioned topics in the namespace ",(0,n.kt)("inlineCode",{parentName:"p"},"apache/pulsar"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin topics list-partitioned-topics apache/pulsar\n")))),(0,n.kt)("h4",{id:"related-topics"},"Related Topics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/3.2.0/tutorials-tenant"},"Set up a tenant")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/3.2.0/tutorials-namespace"},"Create a namespace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/3.2.0/tutorials-produce-consume"},"Produce and consume messages"))))}d.isMDXComponent=!0}}]);