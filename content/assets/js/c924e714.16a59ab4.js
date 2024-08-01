"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[38162],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,g=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},91365:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const i={id:"client-java-3.3.1",title:"Client Java 3.3.1",sidebar_label:"Client Java 3.3.1"},l=void 0,o={unversionedId:"versioned/client-java-3.3.1",id:"versioned/client-java-3.3.1",title:"Client Java 3.3.1",description:"- fix Fix negative acknowledgement by messageId (#23060)",source:"@site/release-notes/versioned/client-java-3.3.1.md",sourceDirName:"versioned",slug:"/versioned/client-java-3.3.1",permalink:"/release-notes/versioned/client-java-3.3.1",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/client-java-3.3.1.md",tags:[],version:"current",frontMatter:{id:"client-java-3.3.1",title:"Client Java 3.3.1",sidebar_label:"Client Java 3.3.1"}},c={},p=[],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"[fix][client]"," Fix negative acknowledgement by messageId (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23060"},"#23060"),")"),(0,a.yg)("li",{parentName:"ul"},"[fix][client]"," Fix orphan consumer when reconnection and closing are concurrency executing (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22958"},"#22958"),")"),(0,a.yg)("li",{parentName:"ul"},"[fix][client]"," Fix pattern consumer create crash if a part of partitions of a topic have been deleted (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22854"},"#22854"),")"),(0,a.yg)("li",{parentName:"ul"},"[fix][client]"," Fix resource leak in Pulsar Client since HttpLookupService doesn't get closed (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22858"},"#22858"),")"),(0,a.yg)("li",{parentName:"ul"},"[fix][client]"," PIP-344 Do not create partitioned metadata when calling pulsarClient.getPartitionsForTopic(topicName) (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22206"},"#22206"),")"),(0,a.yg)("li",{parentName:"ul"},"[improve][client]"," PIP-344 support feature flag supportsGetPartitionedMetadataWithoutAutoCreation (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22773"},"#22773"),")"),(0,a.yg)("li",{parentName:"ul"},"[improve][client]"," improve the class GetTopicsResult (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22766"},"#22766"),")")))}m.isMDXComponent=!0}}]);