"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[93136],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(k,s(s({ref:t},p),{},{components:r})):n.createElement(k,s({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22975:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={id:"getting-started-docker-compose",title:"Run a Pulsar cluster locally with Docker Compose",sidebar_label:"Run Pulsar locally with Docker Compose",description:"Get started with Apache Pulsar on your local machine using Docker Compose."},s=void 0,i={unversionedId:"getting-started-docker-compose",id:"version-3.2.0/getting-started-docker-compose",title:"Run a Pulsar cluster locally with Docker Compose",description:"Get started with Apache Pulsar on your local machine using Docker Compose.",source:"@site/versioned_docs/version-3.2.0/getting-started-docker-compose.md",sourceDirName:".",slug:"/getting-started-docker-compose",permalink:"/docs/3.2.0/getting-started-docker-compose",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.0/getting-started-docker-compose.md",tags:[],version:"3.2.0",frontMatter:{id:"getting-started-docker-compose",title:"Run a Pulsar cluster locally with Docker Compose",sidebar_label:"Run Pulsar locally with Docker Compose",description:"Get started with Apache Pulsar on your local machine using Docker Compose."},sidebar:"docsSidebar",previous:{title:"Run Pulsar in Kubernetes",permalink:"/docs/3.2.0/getting-started-helm"},next:{title:"Overview",permalink:"/docs/3.2.0/concepts-overview"}},l={},c=[{value:"Step 1: Configure the <code>compose.yml</code> template",id:"step-1-configure-the-composeyml-template",level:2},{value:"Step 2: Create a Pulsar cluster",id:"step-2-create-a-pulsar-cluster",level:2},{value:"Step 3: Destroy the Pulsar cluster",id:"step-3-destroy-the-pulsar-cluster",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To run Pulsar loccally with Docker Compose, follow the steps below."),(0,o.kt)("h2",{id:"step-1-configure-the-composeyml-template"},"Step 1: Configure the ",(0,o.kt)("inlineCode",{parentName:"h2"},"compose.yml")," template"),(0,o.kt)("p",null,"To get up and run a Pulsar cluster quickly, you can use the following template to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"compose.yml")," file by modifying or adding the configurations in the ",(0,o.kt)("strong",{parentName:"p"},"environment")," section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'3\'\nnetworks:\n  pulsar:\n    driver: bridge\nservices:\n  # Start zookeeper\n  zookeeper:\n    image: apachepulsar/pulsar:latest\n    container_name: zookeeper\n    restart: on-failure\n    networks:\n      - pulsar\n    volumes:\n      - ./data/zookeeper:/pulsar/data/zookeeper\n    environment:\n      - metadataStoreUrl=zk:zookeeper:2181\n      - PULSAR_MEM=-Xms256m -Xmx256m -XX:MaxDirectMemorySize=256m\n    command: >\n      bash -c "bin/apply-config-from-env.py conf/zookeeper.conf && \\\n             bin/generate-zookeeper-config.sh conf/zookeeper.conf && \\\n             exec bin/pulsar zookeeper"\n    healthcheck:\n      test: ["CMD", "bin/pulsar-zookeeper-ruok.sh"]\n      interval: 10s\n      timeout: 5s\n      retries: 30\n\n  # Init cluster metadata\n  pulsar-init:\n    container_name: pulsar-init\n    hostname: pulsar-init\n    image: apachepulsar/pulsar:latest\n    networks:\n      - pulsar\n    command: >\n      bin/pulsar initialize-cluster-metadata \\\n               --cluster cluster-a \\\n               --zookeeper zookeeper:2181 \\\n               --configuration-store zookeeper:2181 \\\n               --web-service-url http://broker:8080 \\\n               --broker-service-url pulsar://broker:6650\n    depends_on:\n      zookeeper:\n        condition: service_healthy\n\n  # Start bookie\n  bookie:\n    image: apachepulsar/pulsar:latest\n    container_name: bookie\n    restart: on-failure\n    networks:\n      - pulsar\n    environment:\n      - clusterName=cluster-a\n      - zkServers=zookeeper:2181\n      - metadataServiceUri=metadata-store:zk:zookeeper:2181\n      # otherwise every time we run docker compose uo or down we fail to start due to Cookie\n      # See: https://github.com/apache/bookkeeper/blob/405e72acf42bb1104296447ea8840d805094c787/bookkeeper-server/src/main/java/org/apache/bookkeeper/bookie/Cookie.java#L57-68\n      - advertisedAddress=bookie\n      - BOOKIE_MEM=-Xms512m -Xmx512m -XX:MaxDirectMemorySize=256m\n    depends_on:\n      zookeeper:\n        condition: service_healthy\n      pulsar-init:\n        condition: service_completed_successfully\n    # Map the local directory to the container to avoid bookie startup failure due to insufficient container disks.\n    volumes:\n      - ./data/bookkeeper:/pulsar/data/bookkeeper\n    command: bash -c "bin/apply-config-from-env.py conf/bookkeeper.conf && exec bin/pulsar bookie"\n\n  # Start broker\n  broker:\n    image: apachepulsar/pulsar:latest\n    container_name: broker\n    hostname: broker\n    restart: on-failure\n    networks:\n      - pulsar\n    environment:\n      - metadataStoreUrl=zk:zookeeper:2181\n      - zookeeperServers=zookeeper:2181\n      - clusterName=cluster-a\n      - managedLedgerDefaultEnsembleSize=1\n      - managedLedgerDefaultWriteQuorum=1\n      - managedLedgerDefaultAckQuorum=1\n      - advertisedAddress=broker\n      - advertisedListeners=external:pulsar://127.0.0.1:6650\n      - PULSAR_MEM=-Xms512m -Xmx512m -XX:MaxDirectMemorySize=256m\n    depends_on:\n      zookeeper:\n        condition: service_healthy\n      bookie:\n        condition: service_started\n    ports:\n      - "6650:6650"\n      - "8080:8080"\n    command: bash -c "bin/apply-config-from-env.py conf/broker.conf && exec bin/pulsar broker"\n')),(0,o.kt)("h2",{id:"step-2-create-a-pulsar-cluster"},"Step 2: Create a Pulsar cluster"),(0,o.kt)("p",null,"As preparation, create data directories and change the data directory ownership to uid(10000) which is the default user id used in the Pulsar Docker container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p ./data/zookeeper ./data/bookkeeper\n# this step might not be necessary on other than Linux platforms\nsudo chown 10000 -R data\n")),(0,o.kt)("p",null,"To create a Pulsar cluster by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"compose.yml")," file, run the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d\n")),(0,o.kt)("h2",{id:"step-3-destroy-the-pulsar-cluster"},"Step 3: Destroy the Pulsar cluster"),(0,o.kt)("p",null,"If you want to destroy the Pulsar cluster with all the containers, run the following command. It will also delete the network that the containers are connected to."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose down\n")))}d.isMDXComponent=!0}}]);