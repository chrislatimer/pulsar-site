"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[84338],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},37020:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={id:"client-libraries-java-setup",title:"Set up Java client",sidebar_label:"Set up",description:"Learn how to set up Java client library in Pulsar."},i=void 0,o={unversionedId:"client-libraries-java-setup",id:"client-libraries-java-setup",title:"Set up Java client",description:"Learn how to set up Java client library in Pulsar.",source:"@site/docs/client-libraries-java-setup.md",sourceDirName:".",slug:"/client-libraries-java-setup",permalink:"/docs/next/client-libraries-java-setup",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/client-libraries-java-setup.md",tags:[],version:"current",frontMatter:{id:"client-libraries-java-setup",title:"Set up Java client",sidebar_label:"Set up",description:"Learn how to set up Java client library in Pulsar."},sidebar:"docsSidebar",previous:{title:"Java",permalink:"/docs/next/client-libraries-java"},next:{title:"Initialize",permalink:"/docs/next/client-libraries-java-initialize"}},p={},s=[{value:"Step 1: Install Java client library",id:"step-1-install-java-client-library",level:2},{value:"Maven",id:"maven",level:3},{value:"Gradle",id:"gradle",level:3},{value:"Step 2: Connect to Pulsar cluster",id:"step-2-connect-to-pulsar-cluster",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To set up Java client in Pulsar, complete the following steps."),(0,r.kt)("h2",{id:"step-1-install-java-client-library"},"Step 1: Install Java client library"),(0,r.kt)("p",null,"The latest version of the Pulsar Java client library is available via ",(0,r.kt)("a",{parentName:"p",href:"http://search.maven.org/#artifactdetails%7Corg.apache.pulsar%7Cpulsar-client%7C3.2.0%7Cjar"},"Maven Central"),". To use the latest version, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-client")," library to your build configuration."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://search.maven.org/artifact/org.apache.pulsar/pulsar-client"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," and ",(0,r.kt)("a",{parentName:"li",href:"https://search.maven.org/artifact/org.apache.pulsar/pulsar-client-admin"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client-admin"))," shade dependencies via ",(0,r.kt)("a",{parentName:"li",href:"https://maven.apache.org/plugins/maven-shade-plugin/"},"maven-shade-plugin")," to avoid conflicts of the underlying dependency packages (such as Netty). If you do not want to manage dependency conflicts manually, you can use them."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://search.maven.org/artifact/org.apache.pulsar/pulsar-client-original"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client-original"))," and ",(0,r.kt)("a",{parentName:"li",href:"https://search.maven.org/artifact/org.apache.pulsar/pulsar-client-admin-original"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-client-admin-original"))," ",(0,r.kt)("strong",{parentName:"li"},"does not")," shade dependencies. If you want to manage dependencies manually, you can use them."))),(0,r.kt)("h3",{id:"maven"},"Maven"),(0,r.kt)("p",null,"If you use Maven, add the following information to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- in your <properties> block --\x3e\n<pulsar.version>3.2.0</pulsar.version>\n\n\x3c!-- in your <dependencies> block --\x3e\n<dependency>\n  <groupId>org.apache.pulsar</groupId>\n  <artifactId>pulsar-client</artifactId>\n  <version>${pulsar.version}</version>\n</dependency>\n")),(0,r.kt)("h3",{id:"gradle"},"Gradle"),(0,r.kt)("p",null,"If you use Gradle, add the following information to the ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"def pulsarVersion = '3.2.0'\n\ndependencies {\n    compile group: 'org.apache.pulsar', name: 'pulsar-client', version: pulsarVersion\n}\n")),(0,r.kt)("h2",{id:"step-2-connect-to-pulsar-cluster"},"Step 2: Connect to Pulsar cluster"),(0,r.kt)("p",null,"To connect to Pulsar using client libraries, you need to specify a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/developing-binary-protocol"},"Pulsar protocol")," URL."),(0,r.kt)("p",null,"You can assign Pulsar protocol URLs to specific clusters and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar")," scheme. The following is an example of ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," with the default port ",(0,r.kt)("inlineCode",{parentName:"p"},"6650"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6650\n")),(0,r.kt)("p",null,"If you have multiple brokers, separate ",(0,r.kt)("inlineCode",{parentName:"p"},"IP:port")," by commas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6550,localhost:6651,localhost:6652\n")),(0,r.kt)("p",null,"If you use ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/security-tls-authentication"},"mTLS")," authentication, add ",(0,r.kt)("inlineCode",{parentName:"p"},"+ssl")," in the scheme:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},"pulsar+ssl://pulsar.us-west.example.com:6651\n")))}d.isMDXComponent=!0}}]);