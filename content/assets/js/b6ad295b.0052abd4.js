"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3455],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),m=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=m(e.components);return n.createElement(l.Provider,{value:a},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=m(t),c=r,u=f["".concat(l,".").concat(c)]||f[c]||d[c]||i;return t?n.createElement(u,s(s({ref:a},p),{},{components:t})):n.createElement(u,s({ref:a},p))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=c;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[f]="string"==typeof e?e:r,s[1]=o;for(var m=2;m<i;m++)s[m]=t[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},21442:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=t(87462),r=(t(67294),t(3905));const i={id:"administration-anti-affinity-namespaces",title:"Anti-affinity namespaces",sidebar_label:"Anti-affinity namespaces",description:"Get a comprehensive understanding of anti-affinity namespaces in Pulsar."},s=void 0,o={unversionedId:"administration-anti-affinity-namespaces",id:"version-3.2.0/administration-anti-affinity-namespaces",title:"Anti-affinity namespaces",description:"Get a comprehensive understanding of anti-affinity namespaces in Pulsar.",source:"@site/versioned_docs/version-3.2.0/administration-anti-affinity-namespaces.md",sourceDirName:".",slug:"/administration-anti-affinity-namespaces",permalink:"/docs/3.2.0/administration-anti-affinity-namespaces",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.0/administration-anti-affinity-namespaces.md",tags:[],version:"3.2.0",frontMatter:{id:"administration-anti-affinity-namespaces",title:"Anti-affinity namespaces",sidebar_label:"Anti-affinity namespaces",description:"Get a comprehensive understanding of anti-affinity namespaces in Pulsar."},sidebar:"docsSidebar",previous:{title:"Pulsar proxy",permalink:"/docs/3.2.0/administration-proxy"},next:{title:"Upgrade",permalink:"/docs/3.2.0/administration-upgrade"}},l={},m=[{value:"Distribute anti-affinity namespaces across failure domains",id:"distribute-anti-affinity-namespaces-across-failure-domains",level:2},{value:"Create a failure domain and register brokers",id:"create-a-failure-domain-and-register-brokers",level:3},{value:"Create an anti-affinity namespace group",id:"create-an-anti-affinity-namespace-group",level:3}],p={toc:m},f="wrapper";function d(e){let{components:a,...i}=e;return(0,r.kt)(f,(0,n.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"distribute-anti-affinity-namespaces-across-failure-domains"},"Distribute anti-affinity namespaces across failure domains"),(0,r.kt)("p",null,"When your application has multiple namespaces and you want one of them available all the time to avoid any downtime, you can group these namespaces and distribute them across different ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.2.0/reference-terminology#failure-domain"},"failure domains")," and different brokers. Thus, if one of the failure domains is down (due to release rollout or brokers restart), it only disrupts namespaces owned by that specific failure domain and the rest of the namespaces owned by other domains remain available without any impact."),(0,r.kt)("p",null,"Such a group of namespaces has anti-affinity to each other, that is, all the namespaces in this group are ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.2.0/reference-terminology#anti-affinity-namespaces"},"anti-affinity namespaces")," and are distributed to different failure domains in a load-balanced manner."),(0,r.kt)("p",null,"As illustrated in the following figure, Pulsar has 2 failure domains (Domain1 and Domain2) and each domain has 2 brokers in it. You can create an anti-affinity namespace group that has 4 namespaces in it, and all the 4 namespaces have anti-affinity to each other. The load manager tries to distribute namespaces evenly across all the brokers in the same domain. Since each domain has 2 brokers, every broker owns one namespace from this anti-affinity namespace group, and you can see each domain owns 2 namespaces, and each broker owns 1 namespace."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Distribute anti-affinity namespaces across failure domains",src:t(50764).Z,width:"1546",height:"741"})),(0,r.kt)("p",null,"The load manager follows an even distribution policy across failure domains to assign anti-affinity namespaces. The following table outlines the even-distributed assignment sequence illustrated in the above figure."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Assignment sequence"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Namespace"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Failure domain candidates"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Broker candidates"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Selected broker"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespace1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain1, Domain2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Broker1, Broker2, Broker3, Broker4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain1:Broker1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespace2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Broker3, Broker4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain2:Broker3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespace3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain1, Domain2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Broker2, Broker4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain1:Broker2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespace4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Broker4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Domain2:Broker4")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each namespace belongs to only one anti-affinity group. If a namespace with an existing anti-affinity assignment is assigned to another anti-affinity group, the original assignment is dropped.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If there are more anti-affinity namespaces than failure domains, the load manager distributes namespaces evenly across all the domains, and also every domain distributes namespaces evenly across all the brokers under that domain.")))),(0,r.kt)("h3",{id:"create-a-failure-domain-and-register-brokers"},"Create a failure domain and register brokers"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"One broker can only be registered to a single failure domain.")),(0,r.kt)("p",null,"To create a domain under a specific cluster and register brokers, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pulsar-admin clusters create-failure-domain <cluster-name> --domain-name <domain-name> --broker-list <broker-list-comma-separated>\n")),(0,r.kt)("p",null,"You can also view, update, and delete domains under a specific cluster. For more information, refer to ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/"},"Pulsar admin docs"),"."),(0,r.kt)("h3",{id:"create-an-anti-affinity-namespace-group"},"Create an anti-affinity namespace group"),(0,r.kt)("p",null,"An anti-affinity group is created automatically when the first namespace is assigned to the group. To assign a namespace to an anti-affinity group, run the following command. It sets an anti-affinity group name for a namespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pulsar-admin namespaces set-anti-affinity-group <namespace> --group <group-name>\n")),(0,r.kt)("p",null,"For more information about ",(0,r.kt)("inlineCode",{parentName:"p"},"anti-affinity-group")," related commands, refer to ",(0,r.kt)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/"},"Pulsar admin docs"),"."))}d.isMDXComponent=!0},50764:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/anti-affinity-namespaces-across-failure-domains-49c34611c66243659ac8382597e04281.svg"}}]);