"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[65409],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>u});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),g=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=g(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=g(t),y=r,u=d["".concat(s,".").concat(y)]||d[y]||m[y]||l;return t?a.createElement(u,i(i({ref:n},p),{},{components:t})):a.createElement(u,i({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=t[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},62859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=t(58168),r=(t(96540),t(15680));const l={id:"io-redis-sink",title:"Redis sink connector",sidebar_label:"Redis sink connector"},i=void 0,o={unversionedId:"io-redis-sink",id:"version-3.2.x/io-redis-sink",title:"Redis sink connector",description:"You can download all the Pulsar connectors on download page.",source:"@site/versioned_docs/version-3.2.x/io-redis-sink.md",sourceDirName:".",slug:"/io-redis-sink",permalink:"/docs/3.2.x/io-redis-sink",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/io-redis-sink.md",tags:[],version:"3.2.x",frontMatter:{id:"io-redis-sink",title:"Redis sink connector",sidebar_label:"Redis sink connector"}},s={},g=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:3}],p={toc:g},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"You can download all the Pulsar connectors on ",(0,r.yg)("a",{parentName:"p",href:"pathname:///download"},"download page"),".")),(0,r.yg)("p",null,"The  Redis sink connector pulls messages from Pulsar topics and persists the messages to a Redis database."),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"The configuration of the Redis sink connector has the following properties."),(0,r.yg)("h3",{id:"property"},"Property"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"redisHosts")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"A comma-separated list of Redis hosts to connect to.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"redisPassword")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The password used to connect to Redis.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"redisDatabase")),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"The Redis database to connect to.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"clientMode")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Standalone"),(0,r.yg)("td",{parentName:"tr",align:null},"The client mode when interacting with Redis cluster. ",(0,r.yg)("br",null),(0,r.yg)("br",null),"Below are the available options: ",(0,r.yg)("br",null),(0,r.yg)("li",null,"Standalone",(0,r.yg)("br",null)),(0,r.yg)("li",null,"Cluster "))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"autoReconnect")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether the Redis client automatically reconnect or not.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"requestQueue")),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"2147483647"),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum number of queued requests to Redis.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"tcpNoDelay")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to enable TCP with no delay or not.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"keepAlive")),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to enable a keepalive to Redis or not.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"connectTimeout")),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"10000"),(0,r.yg)("td",{parentName:"tr",align:null},"The time to wait before timing out when connecting in milliseconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"operationTimeout")),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"10000"),(0,r.yg)("td",{parentName:"tr",align:null},"The time before an operation is marked as timed out in milliseconds .")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"batchTimeMs")),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"The Redis operation time in milliseconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"batchSize")),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"200"),(0,r.yg)("td",{parentName:"tr",align:null},"The batch size of writing to Redis database.")))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"Before using the Redis sink connector, you need to create a configuration file in the path you will start the Pulsar service (",(0,r.yg)("inlineCode",{parentName:"p"},"PULSAR_HOME"),") through one of the following methods."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JSON"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "configs": {\n      "redisHosts": "localhost:6379",\n      "redisPassword": "mypassword",\n      "redisDatabase": "0",\n      "clientMode": "Standalone",\n      "operationTimeout": "2000",\n      "batchSize": "1",\n      "batchTimeMs": "1000",\n      "connectTimeout": "3000"\n   }\n}\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"YAML"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'configs:\n    redisHosts: "localhost:6379"\n    redisPassword: "mypassword"\n    redisDatabase: 0\n    clientMode: "Standalone"\n    operationTimeout: 2000\n    batchSize: 1\n    batchTimeMs: 1000\n    connectTimeout: 3000\n')))),(0,r.yg)("h3",{id:"usage"},"Usage"),(0,r.yg)("p",null,"This example shows how to write records to a Redis database using the Pulsar Redis connector."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start a Redis server."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'docker pull redis:5.0.5\ndocker run -d -p 6379:6379 --name my-redis redis:5.0.5 --requirepass "mypassword"\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start a Pulsar service locally in standalone mode."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar standalone\n")),(0,r.yg)("p",{parentName:"li"},"Make sure the NAR file is available at ",(0,r.yg)("inlineCode",{parentName:"p"},"connectors/pulsar-io-redis-3.2.4.nar"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start the Pulsar Redis connector in local run mode using one of the following methods."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Use the ",(0,r.yg)("strong",{parentName:"li"},"JSON")," configuration file as shown previously.")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-admin sinks localrun \\\n    --archive $PWD/connectors/pulsar-io-redis-3.2.4.nar \\\n    --tenant public \\\n    --namespace default \\\n    --name my-redis-sink \\\n    --sink-config \'{"redisHosts": "localhost:6379","redisPassword": "mypassword","redisDatabase": "0","clientMode": "Standalone","operationTimeout": "3000","batchSize": "1"}\' \\\n    --inputs my-redis-topic\n')),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use the ",(0,r.yg)("strong",{parentName:"p"},"YAML")," configuration file as shown previously."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin sinks localrun \\\n    --archive $PWD/connectors/pulsar-io-redis-3.2.4.nar \\\n    --tenant public \\\n    --namespace default \\\n    --name my-redis-sink \\\n    --sink-config-file $PWD/redis-sink-config.yaml \\\n    --inputs my-redis-topic\n"))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Publish records to the topic."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-client produce \\\n    persistent://public/default/my-redis-topic \\\n    -k "streaming" \\\n    -m "Pulsar"\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start a Redis client in Docker."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'docker exec -it my-redis redis-cli -a "mypassword"\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Check the key/value in Redis."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> keys *\n1) "streaming"\n127.0.0.1:6379> get "streaming"\n"Pulsar"\n')))))}m.isMDXComponent=!0}}]);