"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[47533],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>b});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=u(t),c=a,b=d["".concat(s,".").concat(c)]||d[c]||p[c]||o;return t?r.createElement(b,i(i({ref:n},g),{},{components:t})):r.createElement(b,i({ref:n},g))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},97122:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(58168),a=(t(96540),t(15680));const o={id:"setup-debugging",title:"Debugging Pulsar source code in IDE",sidebar_label:"Debugging",description:"Getting started to debugging Pulsar in IDE."},i=void 0,l={unversionedId:"setup-debugging",id:"setup-debugging",title:"Debugging Pulsar source code in IDE",description:"Getting started to debugging Pulsar in IDE.",source:"@site/contribute/setup-debugging.md",sourceDirName:".",slug:"/setup-debugging",permalink:"/contribute/setup-debugging",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/setup-debugging.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1713490569,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{id:"setup-debugging",title:"Debugging Pulsar source code in IDE",sidebar_label:"Debugging",description:"Getting started to debugging Pulsar in IDE."},sidebar:"sidebarDevelopment",previous:{title:"Setting up Git mergetool",permalink:"/contribute/setup-mergetool"},next:{title:"Coding conventions",permalink:"/contribute/develop-coding-conventions"}},s={},u=[{value:"Debugging Pulsar in Standalone Mode",id:"debugging-pulsar-in-standalone-mode",level:2},{value:"Download and Extract Pulsar Binary Distribution",id:"download-and-extract-pulsar-binary-distribution",level:3},{value:"Run Pulsar in Standalone Mode with Debugger Options",id:"run-pulsar-in-standalone-mode-with-debugger-options",level:3},{value:"Configure IntelliJ IDEA for Remote Debugging",id:"configure-intellij-idea-for-remote-debugging",level:2},{value:"Debugging the source version of Pulsar",id:"debugging-the-source-version-of-pulsar",level:2},{value:"Debugging pulsar-shell and pulsar-client",id:"debugging-pulsar-shell-and-pulsar-client",level:2}],g={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Debugging the Pulsar with its source code can be essential for identifying and resolving issues during development. This page provides step-by-step instructions on debugging Pulsar in standalone mode and debugging the source version of Apache Pulsar."),(0,a.yg)("h2",{id:"debugging-pulsar-in-standalone-mode"},"Debugging Pulsar in Standalone Mode"),(0,a.yg)("h3",{id:"download-and-extract-pulsar-binary-distribution"},"Download and Extract Pulsar Binary Distribution"),(0,a.yg)("p",null,"Download the binary distribution of the desired Pulsar release and extract it to a directory of your choice."),(0,a.yg)("h3",{id:"run-pulsar-in-standalone-mode-with-debugger-options"},"Run Pulsar in Standalone Mode with Debugger Options"),(0,a.yg)("p",null,"Navigate to the Pulsar directory and run the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'OPTS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005" ./bin/pulsar standalone -nss -nfw\n')),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"suspend=n")," allows the process to start without waiting for the debugger to connect immediately. You can change ",(0,a.yg)("inlineCode",{parentName:"p"},"suspend=n")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"suspend=y")," if you want the process to wait for the debugger to connect.")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"In your IDE, follow the instructions at ",(0,a.yg)("a",{parentName:"p",href:"/contribute/setup-ide"},"Setting up an IDE")," to configure your IDE for Pulsar development.")),(0,a.yg)("h2",{id:"configure-intellij-idea-for-remote-debugging"},"Configure IntelliJ IDEA for Remote Debugging"),(0,a.yg)("p",null,"First, Open Your Pulsar Project in IntelliJ IDEA:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Open IntelliJ IDEA."),(0,a.yg)("li",{parentName:"ol"},"Go to ",(0,a.yg)("inlineCode",{parentName:"li"},"File > Open")," and navigate to your Pulsar project.")),(0,a.yg)("p",null,"Then, create a Remote Debugger Configuration:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Open the ",(0,a.yg)("inlineCode",{parentName:"li"},"Run/Debug Configurations")," dialog by clicking on the dropdown near the top-right corner (next to the ",(0,a.yg)("inlineCode",{parentName:"li"},"Run/Debug")," button) and selecting ",(0,a.yg)("inlineCode",{parentName:"li"},"Edit Configurations"),"."),(0,a.yg)("li",{parentName:"ol"},"Click the ",(0,a.yg)("inlineCode",{parentName:"li"},"+")," button to add a new configuration and choose ",(0,a.yg)("inlineCode",{parentName:"li"},"Remote")," from the list."),(0,a.yg)("li",{parentName:"ol"},'Provide a name for your configuration (e.g., "Pulsar Remote Debugger"). '),(0,a.yg)("li",{parentName:"ol"},"Set ",(0,a.yg)("inlineCode",{parentName:"li"},"Debugger mode")," to ",(0,a.yg)("inlineCode",{parentName:"li"},"Attach to remote JVM"),"."),(0,a.yg)("li",{parentName:"ol"},"Set ",(0,a.yg)("inlineCode",{parentName:"li"},"Host")," to localhost or the IP address of the machine running Pulsar."),(0,a.yg)("li",{parentName:"ol"},"Set ",(0,a.yg)("inlineCode",{parentName:"li"},"Port")," to the same port number used in your Pulsar startup command (e.g., 5005)."),(0,a.yg)("li",{parentName:"ol"},"Click ",(0,a.yg)("inlineCode",{parentName:"li"},"Ok")," to save the configuration.")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"To reset the persistent state, you can remove data under the ",(0,a.yg)("inlineCode",{parentName:"p"},"data")," folder before starting, with: ",(0,a.yg)("inlineCode",{parentName:"p"},"rm -rf data"),".")),(0,a.yg)("h2",{id:"debugging-the-source-version-of-pulsar"},"Debugging the source version of Pulsar"),(0,a.yg)("p",null,"Clone and compile Pulsar from source code and run Pulsar in standalone mode with debugger options:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/apache/pulsar\ncd pulsar\nmvn -Pcore-modules,-main -T 1C install -DskipTests -Dspotbugs.skip=true\nOPTS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005" ./bin/pulsar standalone -nss -nfw\n')),(0,a.yg)("h2",{id:"debugging-pulsar-shell-and-pulsar-client"},"Debugging pulsar-shell and pulsar-client"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'# For Pulsar-Shell\nOPTS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005" ./bin/pulsar-shell\n# For Pulsar-Client\n# Consumer\nOPTS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005" ./bin/pulsar-client consume -s sub apache/pulsar/test-topic -n 0  \n# Producer\nOPTS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005" ./bin/pulsar-client produce apache/pulsar/test-topic  -m "---------hello apache pulsar-------" -n 10\n')),(0,a.yg)("p",null,"Ensure that the debugger is configured in your IDE to connect to the specified port."),(0,a.yg)("p",null,"By following these steps, you can effectively debug both the standalone mode and the source version of Apache Pulsar, including pulsar-shell and pulsar-client processes."))}p.isMDXComponent=!0}}]);