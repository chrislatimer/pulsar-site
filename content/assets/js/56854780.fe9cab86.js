"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[18880],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>d});var n=t(96540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||r;return t?n.createElement(d,l(l({ref:a},p),{},{components:t})):n.createElement(d,l({ref:a},p))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(96540),i=t(20053);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,l),hidden:t},a)}},89089:(e,a,t)=>{t.d(a,{A:()=>w});var n=t(58168),i=t(96540),r=t(20053),l=t(23104),o=t(56347),s=t(57485),c=t(31682),p=t(89466);function u(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:i}}=e;return{value:a,label:t,attributes:n,default:i}}))}function g(e){const{values:a,children:t}=e;return(0,i.useMemo)((()=>{const e=a??u(t);return function(e){const a=(0,c.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function d(e){let{queryString:a=!1,groupId:t}=e;const n=(0,o.W6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function y(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,r=g(e),[l,o]=(0,i.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[s,c]=d({queryString:t,groupId:n}),[u,y]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,p.Dv)(t);return[n,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),h=(()=>{const e=s??u;return m({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),y(e)}),[c,y,r]),tabValues:r}}var h=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:a,block:t,selectedValue:o,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),g=e=>{const a=e.currentTarget,t=p.indexOf(a),n=c[t].value;n!==o&&(u(a),s(n))},m=e=>{let a=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}a?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},a)},c.map((e=>{let{value:a,label:t,attributes:l}=e;return i.createElement("li",(0,n.A)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>p.push(e),onKeyDown:m,onClick:g},l,{className:(0,r.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":o===a})}),t??a)})))}function N(e){let{lazy:a,children:t,selectedValue:n}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,i.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function v(e){const a=y(e);return i.createElement("div",{className:(0,r.A)("tabs-container",f.tabList)},i.createElement(b,(0,n.A)({},e,a)),i.createElement(N,(0,n.A)({},e,a)))}function w(e){const a=(0,h.A)();return i.createElement(v,(0,n.A)({key:String(a)},e))}},45194:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=t(58168),i=(t(96540),t(15680)),r=t(89089),l=t(19365);const o={id:"administration-geo",title:"Pulsar geo-replication",sidebar_label:"Geo-replication"},s=void 0,c={unversionedId:"administration-geo",id:"version-2.11.x/administration-geo",title:"Pulsar geo-replication",description:"Enable geo-replication for a namespace",source:"@site/versioned_docs/version-2.11.x/administration-geo.md",sourceDirName:".",slug:"/administration-geo",permalink:"/docs/2.11.x/administration-geo",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.11.x/administration-geo.md",tags:[],version:"2.11.x",frontMatter:{id:"administration-geo",title:"Pulsar geo-replication",sidebar_label:"Geo-replication"},sidebar:"docsSidebar",previous:{title:"Configure metadata store",permalink:"/docs/2.11.x/administration-metadata-store"},next:{title:"Pulsar Manager",permalink:"/docs/2.11.x/administration-pulsar-manager"}},p={},u=[{value:"Enable geo-replication for a namespace",id:"enable-geo-replication-for-a-namespace",level:2},{value:"Local persistence and forwarding",id:"local-persistence-and-forwarding",level:2},{value:"Configure replication",id:"configure-replication",level:2},{value:"Connect replication clusters",id:"connect-replication-clusters",level:3},{value:"Grant permissions to properties",id:"grant-permissions-to-properties",level:3},{value:"Enable geo-replication",id:"enable-geo-replication",level:3},{value:"Enable geo-replication at namespace level",id:"enable-geo-replication-at-namespace-level",level:4},{value:"Enable geo-replication at topic level",id:"enable-geo-replication-at-topic-level",level:4},{value:"Use topics with geo-replication",id:"use-topics-with-geo-replication",level:3},{value:"Selective replication",id:"selective-replication",level:4},{value:"Topic stats",id:"topic-stats",level:4},{value:"Delete a geo-replication topic",id:"delete-a-geo-replication-topic",level:4},{value:"Replicated subscriptions",id:"replicated-subscriptions",level:2},{value:"Enable replicated subscription",id:"enable-replicated-subscription",level:3},{value:"Advantages",id:"advantages",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Migrate data between clusters using geo-replication",id:"migrate-data-between-clusters-using-geo-replication",level:2}],g={toc:u},m="wrapper";function d(e){let{components:a,...o}=e;return(0,i.yg)(m,(0,n.A)({},g,o,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"enable-geo-replication-for-a-namespace"},"Enable geo-replication for a namespace"),(0,i.yg)("p",null,"You must enable geo-replication on a ",(0,i.yg)("a",{parentName:"p",href:"#concepts-multi-tenancy"},"per-tenant basis")," in Pulsar. For example, you can enable geo-replication between two specific clusters only when a tenant has access to both clusters."),(0,i.yg)("p",null,"Geo-replication is managed at the namespace level, which means you only need to create and configure a namespace to replicate messages between two or more provisioned clusters that a tenant can access."),(0,i.yg)("p",null,"Complete the following tasks to enable geo-replication for a namespace:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#enable-geo-replication-at-namespace-level"},"Enable a geo-replication namespace")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/2.11.x/admin-api-namespaces#configure-replication-clusters"},"Configure that namespace to replicate across two or more provisioned clusters"))),(0,i.yg)("p",null,"Any message published on ",(0,i.yg)("em",{parentName:"p"},"any")," topic in that namespace is replicated to all clusters in the specified set."),(0,i.yg)("h2",{id:"local-persistence-and-forwarding"},"Local persistence and forwarding"),(0,i.yg)("p",null,"When messages are produced on a Pulsar topic, messages are first persisted in the local cluster, and then forwarded asynchronously to the remote clusters."),(0,i.yg)("p",null,"In normal cases, when connectivity issues are none, messages are replicated immediately, at the same time as they are dispatched to local consumers. Typically, the network ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-trip_delay_time"},"round-trip time")," (RTT) between the remote regions defines end-to-end delivery latency."),(0,i.yg)("p",null,"Applications can create producers and consumers in any of the clusters, even when the remote clusters are not reachable (like during a network partition)."),(0,i.yg)("p",null,"Producers and consumers can publish messages to and consume messages from any cluster in a Pulsar instance. However, subscriptions cannot only be local to the cluster where the subscriptions are created but also can be transferred between clusters after the replicated subscription is enabled. Once the replicated subscription is enabled, you can keep the subscription state in synchronization. Therefore, a topic can be asynchronously replicated across multiple geographical regions. In case of failover, a consumer can restart consuming messages from the failure point in a different cluster."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"A typical geo-replication example with a full-mesh pattern",src:t(89353).A,width:"709",height:"349"})),(0,i.yg)("p",null,"In the aforementioned example, the ",(0,i.yg)("strong",{parentName:"p"},"T1")," topic is replicated among three clusters, ",(0,i.yg)("strong",{parentName:"p"},"Cluster-A"),", ",(0,i.yg)("strong",{parentName:"p"},"Cluster-B"),", and ",(0,i.yg)("strong",{parentName:"p"},"Cluster-C"),"."),(0,i.yg)("p",null,"All messages produced in any of the three clusters are delivered to all subscriptions in other clusters. In this case, ",(0,i.yg)("strong",{parentName:"p"},"C1")," and ",(0,i.yg)("strong",{parentName:"p"},"C2")," consumers receive all messages that ",(0,i.yg)("strong",{parentName:"p"},"P1"),", ",(0,i.yg)("strong",{parentName:"p"},"P2"),", and ",(0,i.yg)("strong",{parentName:"p"},"P3")," producers publish. Ordering is still guaranteed on a per-producer basis."),(0,i.yg)("h2",{id:"configure-replication"},"Configure replication"),(0,i.yg)("p",null,"This section guides you through the steps to configure geo-replicated clusters."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"#connect-replication-clusters"},"Connect replication clusters")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"#grant-permissions-to-properties"},"Grant permissions to properties")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"#enable-geo-replication"},"Enable geo-replication")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("a",{parentName:"li",href:"#use-topics-with-geo-replication"},"Use topics with geo-replication"))),(0,i.yg)("h3",{id:"connect-replication-clusters"},"Connect replication clusters"),(0,i.yg)("p",null,"To replicate data among clusters, you need to configure each cluster to connect to the other. You can use the ",(0,i.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/"},(0,i.yg)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool to create a connection."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Example")),(0,i.yg)("p",null,"Suppose that you have 3 replication clusters: ",(0,i.yg)("inlineCode",{parentName:"p"},"us-west"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"us-cent"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"us-east"),"."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Configure the connection from ",(0,i.yg)("inlineCode",{parentName:"p"},"us-west")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"us-east"),"."),(0,i.yg)("p",{parentName:"li"},"Run the following command on ",(0,i.yg)("inlineCode",{parentName:"p"},"us-west"),"."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin clusters create \\\n--broker-url pulsar://<DNS-OF-US-EAST>:<PORT> \\\n--url http://<DNS-OF-US-EAST>:<PORT> \\\nus-east\n")))),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},"If you want to use a secure connection for a cluster, you can use the flags ",(0,i.yg)("inlineCode",{parentName:"li"},"--broker-url-secure")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"--url-secure"),". For more information, see ",(0,i.yg)("a",{parentName:"li",href:"pathname:///reference/#/2.11.x/pulsar-admin/clusters?id=create"},"pulsar-admin clusters create"),"."),(0,i.yg)("li",{parentName:"ul"},"Different clusters may have different authentications. You can use the authentication flag ",(0,i.yg)("inlineCode",{parentName:"li"},"--auth-plugin")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"--auth-parameters")," together to set cluster authentication, which overrides ",(0,i.yg)("inlineCode",{parentName:"li"},"brokerClientAuthenticationPlugin")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"brokerClientAuthenticationParameters")," if ",(0,i.yg)("inlineCode",{parentName:"li"},"authenticationEnabled")," sets to ",(0,i.yg)("inlineCode",{parentName:"li"},"true")," in ",(0,i.yg)("inlineCode",{parentName:"li"},"broker.conf")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"standalone.conf"),". For more information, see ",(0,i.yg)("a",{parentName:"li",href:"/docs/2.11.x/concepts-authentication"},"authentication and authorization"),"."))),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Configure the connection from ",(0,i.yg)("inlineCode",{parentName:"p"},"us-west")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"us-cent"),"."),(0,i.yg)("p",{parentName:"li"},"Run the following command on ",(0,i.yg)("inlineCode",{parentName:"p"},"us-west"),"."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin clusters create \\\n--broker-url pulsar://<DNS-OF-US-CENT>:<PORT>   \\\n--url http://<DNS-OF-US-CENT>:<PORT> \\\nus-cent\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Run similar commands on ",(0,i.yg)("inlineCode",{parentName:"p"},"us-east")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"us-cent")," to create connections among clusters."))),(0,i.yg)("h3",{id:"grant-permissions-to-properties"},"Grant permissions to properties"),(0,i.yg)("p",null,"To replicate to a cluster, the tenant needs permission to use that cluster. You can grant permission to the tenant when you create the tenant or grant it later."),(0,i.yg)("p",null,"Specify all the intended clusters when you create a tenant:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin tenants create my-tenant \\\n--admin-roles my-admin-role \\\n--allowed-clusters us-west,us-east,us-cent\n")),(0,i.yg)("p",null,"To update permissions of an existing tenant, use ",(0,i.yg)("inlineCode",{parentName:"p"},"update")," instead of ",(0,i.yg)("inlineCode",{parentName:"p"},"create"),"."),(0,i.yg)("h3",{id:"enable-geo-replication"},"Enable geo-replication"),(0,i.yg)("p",null,"You can enable geo-replication at ",(0,i.yg)("strong",{parentName:"p"},"namespace")," or ",(0,i.yg)("strong",{parentName:"p"},"topic")," level."),(0,i.yg)("h4",{id:"enable-geo-replication-at-namespace-level"},"Enable geo-replication at namespace level"),(0,i.yg)("p",null,"You can create a namespace with the following command sample."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin namespaces create my-tenant/my-namespace\n")),(0,i.yg)("p",null,"Initially, the namespace is not assigned to any cluster. You can assign the namespace to clusters using the ",(0,i.yg)("inlineCode",{parentName:"p"},"set-clusters")," subcommand:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin namespaces set-clusters my-tenant/my-namespace \\\n--clusters us-west,us-east,us-cent\n")),(0,i.yg)("h4",{id:"enable-geo-replication-at-topic-level"},"Enable geo-replication at topic level"),(0,i.yg)("p",null,"You can set geo-replication at topic level using the command ",(0,i.yg)("inlineCode",{parentName:"p"},"pulsar-admin topics set-replication-clusters"),". For the latest and complete information about ",(0,i.yg)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more information, see ",(0,i.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/"},"Pulsar admin doc"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin topics set-replication-clusters --clusters us-west,us-east,us-cent my-tenant/my-namespace/my-topic\n")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},"You can change the replication clusters for a namespace at any time, without disruption to ongoing traffic. Replication channels are immediately set up or stopped in all clusters as soon as the configuration changes."),(0,i.yg)("li",{parentName:"ul"},"Once you create a geo-replication namespace, any topics that producers or consumers create within that namespace are replicated across clusters. Typically, each application uses the ",(0,i.yg)("inlineCode",{parentName:"li"},"serviceUrl")," for the local cluster."),(0,i.yg)("li",{parentName:"ul"},"If you are using Pulsar version ",(0,i.yg)("inlineCode",{parentName:"li"},"2.10.x"),", to enable geo-replication at topic level, you need to change the following configurations in the ",(0,i.yg)("inlineCode",{parentName:"li"},"conf/broker.conf")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"conf/standalone.conf")," file to enable topic policies service.")),(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre",className:"language-conf"},"systemTopicEnabled=true\ntopicLevelPoliciesEnabled=true\n"))),(0,i.yg)("h3",{id:"use-topics-with-geo-replication"},"Use topics with geo-replication"),(0,i.yg)("h4",{id:"selective-replication"},"Selective replication"),(0,i.yg)("p",null,"By default, messages are replicated to all clusters configured for the namespace. You can restrict replication selectively by specifying a replication list for a message, and then that message is replicated only to the subset in the replication list."),(0,i.yg)("p",null,"The following is an example of the ",(0,i.yg)("a",{parentName:"p",href:"/docs/2.11.x/client-libraries-java"},"Java API"),". Note the use of the ",(0,i.yg)("inlineCode",{parentName:"p"},"replicationClusters")," method when you construct the ",(0,i.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/2.11.x/org/apache/pulsar/client/api/Message"},"Message")," object:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'List<String> restrictReplicationTo = Arrays.asList(\n        "us-west",\n        "us-east"\n);\n\nProducer producer = client.newProducer()\n        .topic("some-topic")\n        .create();\n\nproducer.newMessage()\n        .value("my-payload".getBytes())\n        .replicationClusters(restrictReplicationTo)\n        .send();\n')),(0,i.yg)("h4",{id:"topic-stats"},"Topic stats"),(0,i.yg)("p",null,"You can check topic-specific statistics for geo-replication topics using one of the following methods."),(0,i.yg)(r.A,{groupId:"api-choice",defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"}],mdxType:"Tabs"},(0,i.yg)(l.A,{value:"pulsar-admin",mdxType:"TabItem"},(0,i.yg)("p",null,"Use the ",(0,i.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.11.x/pulsar-admin/topics?id=stats"},(0,i.yg)("inlineCode",{parentName:"a"},"pulsar-admin topics stats"))," command."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin topics stats persistent://my-tenant/my-namespace/my-topic\n"))),(0,i.yg)(l.A,{value:"REST API",mdxType:"TabItem"},(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.11.4&apiversion=v2#operation/getStats"},"GET /admin/v2/:schema/:tenant/:namespace/:topic/stats/getStats")))),(0,i.yg)("p",null,"Each cluster reports its own local stats, including the incoming and outgoing replication rates and backlogs."),(0,i.yg)("h4",{id:"delete-a-geo-replication-topic"},"Delete a geo-replication topic"),(0,i.yg)("p",null,"Given that geo-replication topics exist in multiple regions, directly deleting a geo-replication topic is not possible. Instead, you should rely on automatic topic garbage collection."),(0,i.yg)("p",null,"In Pulsar, a topic is automatically deleted when the topic meets the following three conditions:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"no producers or consumers are connected to it;"),(0,i.yg)("li",{parentName:"ul"},"no subscriptions to it;"),(0,i.yg)("li",{parentName:"ul"},"no more messages are kept for retention.\nFor geo-replication topics, each region uses a fault-tolerant mechanism to decide when deleting the topic locally is safe.")),(0,i.yg)("p",null,"You can explicitly disable topic garbage collection by setting ",(0,i.yg)("inlineCode",{parentName:"p"},"brokerDeleteInactiveTopicsEnabled")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"false")," in your ",(0,i.yg)("a",{parentName:"p",href:"/docs/2.11.x/reference-configuration#broker"},"broker configuration"),"."),(0,i.yg)("p",null,"To delete a geo-replication topic, close all producers and consumers on the topic, and delete all of its local subscriptions in every replication cluster. When Pulsar determines that no valid subscription for the topic remains across the system, it will garbage collect the topic."),(0,i.yg)("h2",{id:"replicated-subscriptions"},"Replicated subscriptions"),(0,i.yg)("p",null,"Pulsar supports replicated subscriptions, so you can keep the subscription state in sync, within a sub-second timeframe, in the context of a topic that is being asynchronously replicated across multiple geographical regions."),(0,i.yg)("p",null,"In case of failover, a consumer can restart consuming from the failure point in a different cluster."),(0,i.yg)("h3",{id:"enable-replicated-subscription"},"Enable replicated subscription"),(0,i.yg)("p",null,"If you want to use replicated subscriptions in Pulsar:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"For broker side: set ",(0,i.yg)("inlineCode",{parentName:"p"},"enableReplicatedSubscriptions")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"true")," in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/470b674016c8718f2dfd0a0f93cf02d49af0fead/conf/broker.conf#L592"},(0,i.yg)("inlineCode",{parentName:"a"},"broker.conf")),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"For consumer side: replicated subscription is disabled by default. You can enable replicated subscriptions when creating a consumer."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-java"},'Consumer<String> consumer = client.newConsumer(Schema.STRING)\n            .topic("my-topic")\n            .subscriptionName("my-subscription")\n            .replicateSubscriptionState(true)\n            .subscribe();\n')))),(0,i.yg)("h3",{id:"advantages"},"Advantages"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"It is easy to implement the logic."),(0,i.yg)("li",{parentName:"ul"},"You can choose to enable or disable replicated subscription."),(0,i.yg)("li",{parentName:"ul"},"When you enable it, the overhead is low, and it is easy to configure."),(0,i.yg)("li",{parentName:"ul"},"When you disable it, the overhead is zero.")),(0,i.yg)("h3",{id:"limitations"},"Limitations"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"When you enable replicated subscriptions, you're creating a consistent distributed snapshot to establish an association between message ids from different clusters. The snapshots are taken periodically. The default value is ",(0,i.yg)("inlineCode",{parentName:"li"},"1 second"),". It means that a consumer failing over to a different cluster can potentially receive 1 second of duplicates. You can also configure the frequency of the snapshot in the ",(0,i.yg)("inlineCode",{parentName:"li"},"broker.conf")," file."),(0,i.yg)("li",{parentName:"ul"},"Only the base line cursor position is synced in replicated subscriptions while the individual acknowledgments are not synced. This means the messages acknowledged out-of-order could end up getting delivered again, in the case of a cluster failover.")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},"This replicated subscription will add a new special message every second, it will contains the ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/wiki/PIP-33:-Replicated-subscriptions#storing-snapshots"},"snapshot")," of the subscription. That means,  if there are inactive subscriptions over the topic there can be an increase in backlog in source and destination clusters."))),(0,i.yg)("h2",{id:"migrate-data-between-clusters-using-geo-replication"},"Migrate data between clusters using geo-replication"),(0,i.yg)("p",null,"Using geo-replication to migrate data between clusters is a special use case of the ",(0,i.yg)("a",{parentName:"p",href:"/docs/2.11.x/concepts-replication#active-active-replication"},"active-active replication pattern")," when you don't have a large amount of data."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create your new cluster.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Add the new cluster to your old cluster."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin clusters create new-cluster\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Add the new cluster to your tenant."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin tenants update my-tenant --cluster old-cluster,new-cluster\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Set the clusters on your namespace."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin namespaces set-clusters my-tenant/my-ns --cluster old-cluster,new-cluster\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Update your applications using ",(0,i.yg)("a",{parentName:"p",href:"#replicated-subscriptions"},"replicated subscriptions"),".")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Validate subscription replication is active."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"bin/pulsar-admin topics stats-internal public/default/t1\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Move your consumers and producers to the new cluster by modifying the values of ",(0,i.yg)("inlineCode",{parentName:"p"},"serviceURL"),"."))),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},"The replication starts from step 4, which means existing messages in your old cluster are not replicated."),(0,i.yg)("li",{parentName:"ul"},"If you have some older messages to migrate, you can pre-create the replication subscriptions for each topic and set it at the earliest position by using ",(0,i.yg)("inlineCode",{parentName:"li"},"pulsar-admin topics create-subscription -s pulsar.repl.new-cluster -m earliest <topic>"),"."))))}d.isMDXComponent=!0},89353:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/geo-replication-34036a887215513a9173d150f92e093e.png"}}]);