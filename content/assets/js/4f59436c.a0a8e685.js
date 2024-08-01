"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8745],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>g});var r=t(96540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function n(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),u=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=u(e.components);return r.createElement(o.Provider,{value:a},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,s=n(e,["components","mdxType","originalType","parentName"]),c=u(t),m=l,g=c["".concat(o,".").concat(m)]||c[m]||h[m]||p;return t?r.createElement(g,i(i({ref:a},s),{},{components:t})):r.createElement(g,i({ref:a},s))}));function g(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var p=t.length,i=new Array(p);i[0]=m;var n={};for(var o in a)hasOwnProperty.call(a,o)&&(n[o]=a[o]);n.originalType=e,n[c]="string"==typeof e?e:l,i[1]=n;for(var u=2;u<p;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61222:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>p,metadata:()=>n,toc:()=>u});var r=t(58168),l=(t(96540),t(15680));const p={id:"pulsar-3.3.1",title:"Apache Pulsar 3.3.1",sidebar_label:"Apache Pulsar 3.3.1"},i=void 0,n={unversionedId:"versioned/pulsar-3.3.1",id:"versioned/pulsar-3.3.1",title:"Apache Pulsar 3.3.1",description:"2024-08-01",source:"@site/release-notes/versioned/pulsar-3.3.1.md",sourceDirName:"versioned",slug:"/versioned/pulsar-3.3.1",permalink:"/release-notes/versioned/pulsar-3.3.1",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-3.3.1.md",tags:[],version:"current",frontMatter:{id:"pulsar-3.3.1",title:"Apache Pulsar 3.3.1",sidebar_label:"Apache Pulsar 3.3.1"}},o={},u=[{value:"2024-08-01",id:"2024-08-01",level:4},{value:"Broker",id:"broker",level:3},{value:"Client",id:"client",level:3},{value:"Pulsar IO and Pulsar Functions",id:"pulsar-io-and-pulsar-functions",level:3},{value:"Others",id:"others",level:3},{value:"Library updates",id:"library-updates",level:3},{value:"Tests &amp; CI",id:"tests--ci",level:3}],s={toc:u},c="wrapper";function h(e){let{components:a,...t}=e;return(0,l.yg)(c,(0,r.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h4",{id:"2024-08-01"},"2024-08-01"),(0,l.yg)("h3",{id:"broker"},"Broker"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[feat][broker]"," PIP-264: Add OpenTelemetry consumer metrics (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22693"},"#22693"),")"),(0,l.yg)("li",{parentName:"ul"},"[feat][broker]"," PIP-321 Introduce allowed-cluster at the namespace level (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22378"},"#22378"),") (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22961"},"#22961"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix]"," Make operations on ",(0,l.yg)("inlineCode",{parentName:"li"},"individualDeletedMessages")," in lock scope (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22966"},"#22966"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix]"," Remove blocking calls from BookieRackAffinityMapping (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22846"},"#22846"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][admin]"," Fix half deletion when attempt to topic with a incorrect API (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23002"},"#23002"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Asynchronously return brokerRegistry.lookupAsync when checking if broker is active(ExtensibleLoadManagerImpl only) (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22899"},"#22899"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Can't connecte to non-persist topic when enable broker client tls (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22991"},"#22991"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Check the markDeletePosition and calculate the backlog (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22947"},"#22947"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Ensure that PulsarService is ready for serving incoming requests (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22977"},"#22977"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," EntryFilters fix NoClassDefFoundError due to closed classloader (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22767"},"#22767"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix MessageDeduplication replay timeout cause topic loading stuck (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23004"},"#23004"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix NPE after publishing a tombstone to the service unit channel (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22859"},"#22859"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix ProducerBusy issue due to incorrect userCreatedProducerCount on non-persistent topic (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22685"},"#22685"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix broker OOM when upload a large package. (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22989"},"#22989"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix cursor should use latest ledger config (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22644"},"#22644"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix geo-replication admin client url (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22584"},"#22584"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix stuck when enable topic level replication and build remote admin fails (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23028"},"#23028"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix topic status for oldestBacklogMessageAgeSeconds continuously increases even when there is no backlog. (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22907"},"#22907"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Fix updatePartitionedTopic when replication at ns level and topic policy is set (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22971"},"#22971"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Handle BucketDelayedDeliveryTracker recover failed (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22735"},"#22735"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Immediately tombstone Deleted and Free state bundles (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22743"},"#22743"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Messages lost on the remote cluster when using topic level replication (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22890"},"#22890"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," PulsarStandalone started with error if --stream-storage-port is not 4181 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22993"},"#22993"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Remove blocking calls from Subscription.getStats (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23088"},"#23088"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Replication stuck when partitions count between two clusters is not the same (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22983"},"#22983"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Support advertised listeners when gracefully transferring topics (ExtensibleLoadManagerImpl only) (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22862"},"#22862"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," The topic might reference a closed ledger (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22860"},"#22860"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," Update init and shutdown time and other minor logic (ExtensibleLoadManagerImpl only) (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22930"},"#22930"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," broker log a full thread dump when a deadlock is detected in healthcheck every time (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22916"},"#22916"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," disable loadBalancerDirectMemoryResourceWeight by default (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22821"},"#22821"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," fix deadlock when disable topic level Geo-Replication (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22738"},"#22738"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," fix replicated subscriptions for transactional messages (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22452"},"#22452"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," fix topic partitions was expanded even if disabled topic level replication (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22769"},"#22769"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," maintain last active info in memory only. (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22794"},"#22794"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," rename to changeMaxReadPositionCount (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22656"},"#22656"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," response not-found error if topic does not exist when calling getPartitionedTopicMetadata (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22838"},"#22838"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]"," usedLocallySinceLastReport should always be reset (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22672"},"#22672"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]","Fix lookupService.getTopicsUnderNamespace can not work with a quote pattern (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23014"},"#23014"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][broker]","[branch-3.3]"," Do not try to clean owned bundles from inactive source brokers (ExtensibleLoadManagerImpl only) (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23064"},"#23064"),") (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23085"},"#23085"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][misc]"," Disable JFR based telemetry collection since it's not used (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22869"},"#22869"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][misc]"," Topic name from persistence name should decode local name (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22879"},"#22879"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][ml]"," Add entry fail due to race condition about add entry failed/timeout and switch ledger (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22221"},"#22221"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][ml]"," Fix race conditions in RangeCache (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22789"},"#22789"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][ml]"," RangeCache refactoring: test race conditions and prevent endless loops (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22814"},"#22814"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][ml]"," RangeCache refactoring follow-up: use StampedLock instead of synchronized (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22818"},"#22818"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][ml]",": subscription props could be lost in case of missing ledger during recovery (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22637"},"#22637"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve]"," Refactored BK ClientFactory to return futures (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22853"},"#22853"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve]"," Validate range of argument before long -> int conversion (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22830"},"#22830"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Add additionalSystemCursorNames ignore list for TTL check (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22614"},"#22614"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Add subscription prefix for internal reader (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23044"},"#23044"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Check max producers/consumers limitation first before other ops to save resources (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23074"},"#23074"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Close protocol handlers before unloading namespace bundles (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22728"},"#22728"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Do not call cursor.isCursorDataFullyPersistable if disabled dispatcherPauseOnAckStatePersistentEnabled (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22729"},"#22729"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," GetPartitionMetadata fail also can produce messages (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23050"},"#23050"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Improve CPU resources usege of TopicName Cache (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23052"},"#23052"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Improve exception for topic does not have schema to check (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22974"},"#22974"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," PIP-355: Enhancing Broker-Level Metrics for Pulsar (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22779"},"#22779"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," PIP-356 Support Geo-Replication starts at earliest position (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22856"},"#22856"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Reduce number of OpenTelemetry consumer attributes (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22837"},"#22837"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Reduce the CPU pressure from the transaction buffer in rolling restarts (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23062"},"#23062"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Remove ClassLoaderSwitcher to avoid objects allocations and consistent the codestyle (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22796"},"#22796"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Reuse topic OpenTelemetry attributes (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22876"},"#22876"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Trigger offload on topic load (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22652"},"#22652"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," Use RoaringBitmap in tracking individual acks to reduce memory usage (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23006"},"#23006"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," avoid creating new objects when intercepting (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22790"},"#22790"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," high CPU usage caused by list topics under namespace (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23049"},"#23049"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]"," make system topic distribute evenly. (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22953"},"#22953"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]","Ensure namespace deletion doesn't fail (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22627"},"#22627"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][broker]","[branch-3.0]"," PIP-364: Introduce a new load balance algorithm AvgShedder (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23053"},"#23053"),")")),(0,l.yg)("h3",{id:"client"},"Client"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[fix][client]"," Fix negative acknowledgement by messageId (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23060"},"#23060"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][client]"," Fix orphan consumer when reconnection and closing are concurrency executing (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22958"},"#22958"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][client]"," Fix pattern consumer create crash if a part of partitions of a topic have been deleted (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22854"},"#22854"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][client]"," Fix resource leak in Pulsar Client since HttpLookupService doesn't get closed (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22858"},"#22858"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][client]"," PIP-344 Do not create partitioned metadata when calling pulsarClient.getPartitionsForTopic(topicName) (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22206"},"#22206"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][client]"," PIP-344 support feature flag supportsGetPartitionedMetadataWithoutAutoCreation (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22773"},"#22773"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][client]"," improve the class GetTopicsResult (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22766"},"#22766"),")")),(0,l.yg)("h3",{id:"pulsar-io-and-pulsar-functions"},"Pulsar IO and Pulsar Functions"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[fix][fn]"," Enable optimized Netty direct byte buffer support for Pulsar Function runtimes (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22910"},"#22910"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][fn]"," Support compression type and crypto config for all producers in Functions and Connectors (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22950"},"#22950"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][fn]"," Make producer cache bounded and expiring in Functions/Connectors (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22945"},"#22945"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][io]"," The JDBC connector supports JSON substructure schema (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23043"},"#23043"),")")),(0,l.yg)("h3",{id:"others"},"Others"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[fix][cli]",' Fix Pulsar standalone "--wipe-data" (',(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22885"},"#22885"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][cli]"," Fix Pulsar standalone shutdown - bkCluster wasn't closed (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22868"},"#22868"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][cli]",' Fix expiration of tokens created with "pulsar tokens create" (',(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22815"},"#22815"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][cli]"," Fix healthcheck script pulsar-zookeeper-ruok.sh (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22873"},"#22873"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][cli]"," Fix the pulsar-daemon parameter passthrough syntax (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22905"},"#22905"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][conf]"," fix configuration name and typo. (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22822"},"#22822"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][meta]"," Check if metadata store is closed in RocksdbMetadataStore (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22852"},"#22852"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][offload]"," Allow to disable the managedLedgerOffloadDeletionLagInMillis (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22689"},"#22689"),")")),(0,l.yg)("h3",{id:"library-updates"},"Library updates"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[fix][sec]"," Upgrade Bouncycastle libraries to address CVEs (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22826"},"#22826"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][sec]"," Upgrade postgresql version to avoid CVE-2024-1597 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22635"},"#22635"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix]"," Bump io.airlift:aircompressor from 0.20 to 0.27 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22819"},"#22819"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve]"," Upgrade IPAddress to 5.5.0 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22886"},"#22886"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve]"," Upgrade Jetcd to 0.7.7 and VertX to 4.5.8 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22835"},"#22835"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve]"," Upgrade to Oxia client 0.3.0 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22807"},"#22807"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix]"," Upgrade to Oxia 0.3.1 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23048"},"#23048"),")"),(0,l.yg)("li",{parentName:"ul"},"[cleanup][misc]"," Remove classifier from netty-transport-native-unix-common dependency (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22951"},"#22951"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][misc]"," Set Alpine base image to 3.20 instead of 3.19.1 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22941"},"#22941"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][misc]"," Replace rename-netty-native-libs.sh script with renaming with maven-shade-plugin (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22957"},"#22957"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][misc]"," Upgrade Bookkeeper to 4.17.1 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22962"},"#22962"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][misc]"," Upgrade OTel library to 1.38.0 version (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22825"},"#22825"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][misc]"," Upgrade to Netty 4.1.111.Final and switch to use grpc-netty-shaded (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22892"},"#22892"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][misc]"," Add proper nslookup (included in bind-tools) to docker image (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22878"},"#22878"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][misc]"," Remove RoaringBitmap dependency from pulsar-common (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23008"},"#23008"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][misc]"," Rename netty native libraries in pulsar-client-admin-shaded (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22954"},"#22954"),")")),(0,l.yg)("h3",{id:"tests--ci"},"Tests & CI"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[fix][ci]"," Fix OWASP Dependency Check download by using NVD API key (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22999"},"#22999"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][ci]"," Fix jacoco code coverage report aggregation (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22964"},"#22964"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][ci]"," Replace removed macos-11 with macos-latest in GitHub Actions (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22965"},"#22965"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][test]"," Fix TableViewBuilderImplTest NPE and infinite loop (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22924"},"#22924"),")"),(0,l.yg)("li",{parentName:"ul"},"[fix][test]"," Update OpenTelemetry receiver endpoint in integration test (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22998"},"#22998"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][build]"," Support git worktree working directory while building docker images (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22851"},"#22851"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][build]"," Upgrade dependency-check-maven-plugin to 10.0.2 (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23012"},"#23012"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][ci]"," Add arm64 image build (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22755"},"#22755"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][ci]"," Migrate from Gradle Enterprise to Develocity (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22880"},"#22880"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][ci]"," Switch to use DEVELOCITY_ACCESS_KEY from GRADLE_ENTERPRISE_ACCESS_KEY (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/23090"},"#23090"),")"),(0,l.yg)("li",{parentName:"ul"},"[improve][test]"," Add a test to guarantee the TNX topics will not be replicated (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar/pull/22721"},"#22721"),")")),(0,l.yg)("p",null,"For the complete list, check the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/compare/v3.3.0...v3.3.1"},"full changelog"),"."))}h.isMDXComponent=!0}}]);