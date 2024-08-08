"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[92],{15680:(e,a,r)=>{r.d(a,{xA:()=>p,yg:()=>b});var n=r(96540);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var d=n.createContext({}),g=function(e){var a=n.useContext(d),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},p=function(e){var a=g(e.components);return n.createElement(d.Provider,{value:a},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=g(r),m=t,b=s["".concat(d,".").concat(m)]||s[m]||c[m]||l;return r?n.createElement(b,o(o({ref:a},p),{},{components:r})):n.createElement(b,o({ref:a},p))}));function b(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i[s]="string"==typeof e?e:t,o[1]=i;for(var g=2;g<l;g++)o[g]=r[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35374:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var n=r(58168),t=(r(96540),r(15680));const l={id:"concepts-broker-load-balancing-migration",title:"Migration",sidebar_label:"Migration"},o=void 0,i={unversionedId:"concepts-broker-load-balancing-migration",id:"version-3.2.x/concepts-broker-load-balancing-migration",title:"Migration",description:"Pulsar has 3 types of broker load balancers, that is, simple, modular, and extensible.",source:"@site/versioned_docs/version-3.2.x/concepts-broker-load-balancing-migration.md",sourceDirName:".",slug:"/concepts-broker-load-balancing-migration",permalink:"/docs/3.2.x/concepts-broker-load-balancing-migration",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/concepts-broker-load-balancing-migration.md",tags:[],version:"3.2.x",frontMatter:{id:"concepts-broker-load-balancing-migration",title:"Migration",sidebar_label:"Migration"},sidebar:"docsSidebar",previous:{title:"Quick start",permalink:"/docs/3.2.x/concepts-broker-load-balancing-quick-start"},next:{title:"Geo Replication",permalink:"/docs/3.2.x/concepts-replication"}},d={},g=[{value:"Considerations",id:"considerations",level:2},{value:"Migrate from simple to modular broker load balancer",id:"migrate-from-simple-to-modular-broker-load-balancer",level:2},{value:"Change broker.conf file",id:"change-brokerconf-file",level:3},{value:"Use pulsar-admin tool",id:"use-pulsar-admin-tool",level:3},{value:"Migrate from modular to extensible broker load balancer",id:"migrate-from-modular-to-extensible-broker-load-balancer",level:2},{value:"Change broker.conf file",id:"change-brokerconf-file-1",level:3},{value:"Migrate from extensible to modular broker load balancer",id:"migrate-from-extensible-to-modular-broker-load-balancer",level:2},{value:"Change broker.conf file",id:"change-brokerconf-file-2",level:3},{value:"Related topics",id:"related-topics",level:2}],p={toc:g},s="wrapper";function c(e){let{components:a,...r}=e;return(0,t.yg)(s,(0,n.A)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Pulsar has 3 types of broker load balancers, that is, simple, modular, and extensible. "),(0,t.yg)("p",null,"You can perform the following migrations."),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Migration"),(0,t.yg)("th",{parentName:"tr",align:null},"When to use"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("a",{parentName:"td",href:"#migrate-from-simple-to-modular-broker-load-balancer"},"Migrate from simple to modular")),(0,t.yg)("td",{parentName:"tr",align:null},"If you want to use the ",(0,t.yg)("a",{parentName:"td",href:"/docs/3.2.x/concepts-broker-load-balancing-concepts#bundle-unloading-strategies"},"bundle unloading strategy")," of OverloadShedder, ThresholdShedder, or UniformLoadShedder.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("a",{parentName:"td",href:"#migrate-from-modular-to-extensible-broker-load-balancer"},"Migrate from modular to extensible")),(0,t.yg)("td",{parentName:"tr",align:null},"If you want to use the ",(0,t.yg)("a",{parentName:"td",href:"/docs/3.2.x/concepts-broker-load-balancing-concepts#bundle-unloading-strategies"},"bundle unloading strategy")," of TransferShedder.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("a",{parentName:"td",href:"#migrate-from-modular-to-extensible-broker-load-balancer"},"Migrate from extensible to modular")),(0,t.yg)("td",{parentName:"tr",align:null},"If you want to use the ",(0,t.yg)("a",{parentName:"td",href:"/docs/3.2.x/concepts-broker-load-balancing-concepts#bundle-unloading-strategies"},"bundle unloading strategy")," of OverloadShedder, ThresholdShedder, or UniformLoadShedder.")))),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"It is not recommended to migrate from the modular or extensible to the simple broker load balancer since the simple broker load balancer is deprecated and no longer in use.")),(0,t.yg)("h2",{id:"considerations"},"Considerations"),(0,t.yg)("p",null,"Before migrating from one broker load balancer type to another, review the relationship between ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-types"},"broker load balancer type"),", Pulsar version, and ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-concepts#bundle-unloading-strategies"},"bundle unloading strategy"),". You may need to upgrade Pulsar versions or update the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-concepts#bundle-unloading-strategies"},"bundle unloading strategy"),". Below are brief summaries."),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"This broker load balancer type"),(0,t.yg)("th",{parentName:"tr",align:null},"is available in this Pulsar version"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"Simple"),(0,t.yg)("td",{parentName:"tr",align:null},"All versions")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"Modular"),(0,t.yg)("td",{parentName:"tr",align:null},"1.7 and later")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"Extensible"),(0,t.yg)("td",{parentName:"tr",align:null},"3.0 and later")))),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"This bundle unloading strategy"),(0,t.yg)("th",{parentName:"tr",align:null},"is available for this broker load balancer type"),(0,t.yg)("th",{parentName:"tr",align:null},"in available this Pulsar version"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"OverloadShedder"),(0,t.yg)("td",{parentName:"tr",align:null},"Modular"),(0,t.yg)("td",{parentName:"tr",align:null},"1.18 and later")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"ThresholdShedder"),(0,t.yg)("td",{parentName:"tr",align:null},"Modular"),(0,t.yg)("td",{parentName:"tr",align:null},"2.6 and later")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"UniformLoadShedder"),(0,t.yg)("td",{parentName:"tr",align:null},"Modular"),(0,t.yg)("td",{parentName:"tr",align:null},"2.10 and later")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"TransferShedder"),(0,t.yg)("td",{parentName:"tr",align:null},"Extensible"),(0,t.yg)("td",{parentName:"tr",align:null},"3.0 and later")))),(0,t.yg)("h2",{id:"migrate-from-simple-to-modular-broker-load-balancer"},"Migrate from simple to modular broker load balancer"),(0,t.yg)("p",null,"You can migrate from the simple to the modular broker load balancer, by manually changing the configuration settings in the broker.conf file or by using the pulsar-admin tool. "),(0,t.yg)("h3",{id:"change-brokerconf-file"},"Change broker.conf file"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Access to the broker.conf file."),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"vim apache-pulsar-3.2.4/conf/broker.conf\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Change the broker load balancer by setting ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/69d7a2bf14555f11a716a9545c5cf391d8179a27/conf/broker.conf#L1309C20-L1309C20"},"loadManagerClassName")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"ModularLoadManagerImpl")," in the broker.conf file."),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-conf"},"loadManagerClassName=org.apache.pulsar.broker.loadbalance.extensions.ModularLoadManagerImpl\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Restart the Pulsar cluster. The new setting will take effect after the restart.  "))),(0,t.yg)("h3",{id:"use-pulsar-admin-tool"},"Use pulsar-admin tool"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Access the ",(0,t.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/next/reference-cli-tools/"},"pulsar-admin tool"),"."),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"cd apache-pulsar-3.2.4/bin\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Set ",(0,t.yg)("inlineCode",{parentName:"p"},"--config")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"loadManagerClassName")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"--value")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.loadbalance.impl.ModularLoadManagerImpl"),"."),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"pulsar-admin brokers update-dynamic-config \\\n--config loadManagerClassName \\\n--value org.apache.pulsar.broker.loadbalance.impl.ModularLoadManagerImpl\n")),(0,t.yg)("p",{parentName:"li"},"You do not need to restart the Pulsar cluster. The new settings will take effect after 1 to 2 minutes."))),(0,t.yg)("h2",{id:"migrate-from-modular-to-extensible-broker-load-balancer"},"Migrate from modular to extensible broker load balancer"),(0,t.yg)("p",null,"You can migrate from the modular to the extensible broker load balancer, by manually changing settings in the broker.conf file. During the migration, the lookup and assignment will be redirected to the brokers with the extensible load balancer."),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"The pulsar-admin tool is not supported for this migration.")),(0,t.yg)("h3",{id:"change-brokerconf-file-1"},"Change broker.conf file"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/helm-upgrade"},"Upgrade the Pulsar cluster")," to 3.0.0 or later versions.")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Access to the broker.conf file."),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"vim apache-pulsar-3.2.4/conf/broker.conf\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Change the following settings in the broker.conf file:"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Update ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-overview"},"broker load balancer")," by setting ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/69d7a2bf14555f11a716a9545c5cf391d8179a27/conf/broker.conf#L1309C20-L1309C20"},"loadManagerClassName")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"ExtensibleLoadManagerImpl"),". ")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Update ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-concepts#bundle-unloading-strategies"},"bundle unloading strategy")," by setting ",(0,t.yg)("inlineCode",{parentName:"p"},"loadBalancerLoadSheddingStrategy")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"TransferShedder"),". "),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-conf"},"loadManagerClassName=org.apache.pulsar.broker.loadbalance.extensions.ExtensibleLoadManagerImpl \n\nloadBalancerLoadSheddingStrategy=org.apache.pulsar.broker.loadbalance.extensions.scheduler.TransferShedder\n")),(0,t.yg)("admonition",{parentName:"li",type:"note"},(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},"The ",(0,t.yg)("a",{parentName:"li",href:"/docs/3.2.x/concepts-broker-load-balancing-types"},"extensible broker load balancer")," is ",(0,t.yg)("strong",{parentName:"li"},"available in Pulsar 3.0.0")," or later."),(0,t.yg)("li",{parentName:"ul"},"The ",(0,t.yg)("a",{parentName:"li",href:"/docs/3.2.x/concepts-broker-load-balancing-concepts#bundle-unloading-strategies"},"TransferShedder unloading strategy")," is ",(0,t.yg)("strong",{parentName:"li"},"only available")," in the ",(0,t.yg)("a",{parentName:"li",href:"/docs/3.2.x/concepts-broker-load-balancing-types"},"extensible load balancer"),".")))))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Restart the Pulsar cluster. The new settings will take effect after the restart.  "))),(0,t.yg)("h2",{id:"migrate-from-extensible-to-modular-broker-load-balancer"},"Migrate from extensible to modular broker load balancer"),(0,t.yg)("p",null,"You can migrate from the extensible to the modular broker load balancer, by manually changing the setting in the broker.conf file. During the migration, the lookup and assignment will be redirected to the brokers with the modular load balancer."),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"The pulsar-admin tool is not supported for this migration.")),(0,t.yg)("h3",{id:"change-brokerconf-file-2"},"Change broker.conf file"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Access to the broker.conf file."),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"vim apache-pulsar-3.2.4/conf/broker.conf\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Change the following settings in the broker.conf file:"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Update broker load balancer by setting ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/69d7a2bf14555f11a716a9545c5cf391d8179a27/conf/broker.conf#L1309C20-L1309C20"},"loadManagerClassName")," to ModularLoadManagerImpl")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Update ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-concepts#bundle-unloading-strategies"},"bundle unloading strategy")," to OverloadShedder, ThresholdShedder, or UniformLoadShedder based on your needs."),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre"},"loadManagerClassName=org.apache.pulsar.broker.loadbalance.impl.ModularLoadManagerImpl\n\nloadBalancerLoadSheddingStrategy=org.apache.pulsar.broker.loadbalance.impl.ThresholdShedder\n")),(0,t.yg)("admonition",{parentName:"li",type:"note"},(0,t.yg)("p",{parentName:"admonition"},(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-concepts#bundle-unloading-strategies"},"TransferShedder")," is ",(0,t.yg)("strong",{parentName:"p"},"only supported")," in the extensible broker load balancer, so you need to change TransferShedder to other ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-concepts#bundle-unloading-strategies"},"bundle unloading strategies"),"."))))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Restart the Pulsar cluster. The new settings will take effect after the restart.  "))),(0,t.yg)("h2",{id:"related-topics"},"Related topics"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"To get a comprehensive understanding and discover the key insights, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-overview"},"Broker load balancing | Overview"),". ")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"To discover different usage scenarios, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-use-cases"},"Broker load balancing | Use cases"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"To explore functionalities, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-features"},"Broker load balancing | Features"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"To understand advantages, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-benefits"},"Broker load balancing | Benefits"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"To learn essential fundamentals, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-concepts"},"Broker load balancing | Concepts"),".")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"To review various versions of broker load balancers, see ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-types"},"Broker load balancing | Types"),"."))))}c.isMDXComponent=!0}}]);