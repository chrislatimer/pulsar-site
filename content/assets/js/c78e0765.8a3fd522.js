"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[32311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},28802:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},10599:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),s=n(16550),l=n(91980),c=n(67392),p=n(50012);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function y(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=m({queryString:n,groupId:r}),[u,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),k=(()=>{const e=l??u;return y({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!y({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var k=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),r=c[n].value;r!==s&&(u(t),l(r))},y=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:y,onClick:d},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(b,(0,r.Z)({},e,t)))}function C(e){const t=(0,k.Z)();return a.createElement(v,(0,r.Z)({key:String(t)},e))}},80758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(10599),i=n(28802);const s={id:"security-encryption",title:"End-to-End Encryption",sidebar_label:"End-to-End Encryption",description:"Get a comprehensive understanding of the workflow, usage, and troubleshooting of end-to-end encryption in Pulsar."},l=void 0,c={unversionedId:"security-encryption",id:"version-3.2.0/security-encryption",title:"End-to-End Encryption",description:"Get a comprehensive understanding of the workflow, usage, and troubleshooting of end-to-end encryption in Pulsar.",source:"@site/versioned_docs/version-3.2.0/security-encryption.md",sourceDirName:".",slug:"/security-encryption",permalink:"/docs/3.2.0/security-encryption",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.0/security-encryption.md",tags:[],version:"3.2.0",frontMatter:{id:"security-encryption",title:"End-to-End Encryption",sidebar_label:"End-to-End Encryption",description:"Get a comprehensive understanding of the workflow, usage, and troubleshooting of end-to-end encryption in Pulsar."},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/3.2.0/security-overview"},next:{title:"TLS Encryption",permalink:"/docs/3.2.0/security-tls-transport"}},p={},u=[{value:"How end-to-end encryption works in Pulsar",id:"how-end-to-end-encryption-works-in-pulsar",level:2},{value:"Get started",id:"get-started",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1: Configure end-to-end encryption",id:"step-1-configure-end-to-end-encryption",level:3},{value:"Step 2: Encrypt a message with multiple keys",id:"step-2-encrypt-a-message-with-multiple-keys",level:3},{value:"Troubleshoot",id:"troubleshoot",level:2}],d={toc:u},y="wrapper";function m(e){let{components:t,...s}=e;return(0,a.kt)(y,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Applications can use Pulsar end-to-end encryption (E2EE) to encrypt messages on the producer side and decrypt messages on the consumer side. You can use the public and private key pair that the application configures to perform encryption and decryption. Only the consumers with a valid key can decrypt the encrypted messages."),(0,a.kt)("h2",{id:"how-end-to-end-encryption-works-in-pulsar"},"How end-to-end encryption works in Pulsar"),(0,a.kt)("p",null,"Pulsar uses a dynamically generated symmetric session key to encrypt messages (data). You can use the application-provided ECDSA (Elliptic Curve Digital Signature Algorithm) or RSA (Rivest\u2013Shamir\u2013Adleman) key pair to encrypt the session key (data key), so you do not have to share the secret with everyone."),(0,a.kt)("p",null,"The following figure illustrates how Pulsar encrypts messages on the producer side and decrypts messages on the consumer side."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"End-to-end encryption in Pulsar",src:n(40644).Z,width:"2198",height:"532"})),(0,a.kt)("p",null,"The workflow of end-to-end encryption in Pulsar is as follows."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The producer generates a session key regularly (every 4 hours or after publishing a certain number of messages) to encrypt the message payload using a symmetric algorithm, such as AES, and fetches the asymmetric public key every 4 hours. The ciphertext is packed as the message body."),(0,a.kt)("li",{parentName:"ol"},"The producer uses the consumer\u2019s public key to encrypt the session key using an asymmetric algorithm, such as RSA, and adds an alias with the encrypted secret to the message header."),(0,a.kt)("li",{parentName:"ol"},"The consumer reads the message header and decrypts the session key using its private key."),(0,a.kt)("li",{parentName:"ol"},"The consumer uses the decrypted session key to decrypt the message payload.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The consumer's public key is shared with the producer, but only the consumer has the access to the private key."),(0,a.kt)("li",{parentName:"ul"},"Pulsar does not store the encryption key anywhere in the Pulsar service. If you lose or delete the private key, your message is irretrievably lost and unrecoverable."))),(0,a.kt)("p",null,"Pulsar isolates the key management and only provides interfaces (",(0,a.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader"),") to access public keys. For production systems, it's highly recommended to extend/implement ",(0,a.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," with cloud key management (",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html"},"KMS")," or ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/security-key-management"},"CKM"),") or PKI (Public Key Infrastructure, such as freeIPA)."),(0,a.kt)("p",null,"If the produced messages are consumed across application boundaries, you need to ensure that consumers in other applications have access to one of the private keys that can decrypt the messages. You can do this in two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Access the public key that the consumer application provides and add it to the producer's keys."),(0,a.kt)("li",{parentName:"ul"},"Grant access to one of the private keys from the pairs that the producer uses.")),(0,a.kt)("h2",{id:"get-started"},"Get started"),(0,a.kt)("p",null,"To enable end-to-end encryption in Puslar, complete the following steps."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pulsar Java/Python/C++/Node.js client 2.7.1 or later versions."),(0,a.kt)("li",{parentName:"ul"},"Pulsar Go client 0.6.0 or later versions.")),(0,a.kt)("h3",{id:"step-1-configure-end-to-end-encryption"},"Step 1: Configure end-to-end encryption"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create both public and private key pairs."),(0,a.kt)(o.Z,{groupId:"lang-choice",defaultValue:"ECDSA",values:[{label:"ECDSA (for Java and Go clients)",value:"ECDSA"},{label:"RSA (for Python, C++ and Node.js clients)",value:"RSA"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"ECDSA",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"openssl ecparam -name secp521r1 -genkey -param_enc explicit -out test_ecdsa_privkey.pem\nopenssl ec -in test_ecdsa_privkey.pem -pubout -outform pem -out test_ecdsa_pubkey.pem\n"))),(0,a.kt)(i.Z,{value:"RSA",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"openssl genrsa -out test_rsa_privkey.pem 2048\nopenssl rsa -in test_rsa_privkey.pem -pubout -outform pkcs8 -out test_rsa_pubkey.pem\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure a ",(0,a.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," on producers, consumers or readers."),(0,a.kt)(o.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"C++",value:"C++"},{label:"Go",value:"Go"},{label:"Node.js",value:"Node.js"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'PulsarClient pulsarClient = PulsarClient.builder().serviceUrl("pulsar://localhost:6650").build();\nString topic = "persistent://my-tenant/my-ns/my-topic";\n// RawFileKeyReader is just an example implementation that\'s not provided by Pulsar\nCryptoKeyReader keyReader = new RawFileKeyReader("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem");\n\nProducer<byte[]> producer = pulsarClient.newProducer()\n     .topic(topic)\n     .cryptoKeyReader(keyReader)\n     .addEncryptionKey("myappkey")\n     .create();\n\nConsumer<byte[]> consumer = pulsarClient.newConsumer()\n     .topic(topic)\n     .subscriptionName("my-subscriber-name")\n     .cryptoKeyReader(keyReader)\n     .subscribe();\n\nReader<byte[]> reader = pulsarClient.newReader()\n     .topic(topic)\n     .startMessageId(MessageId.earliest)\n     .cryptoKeyReader(keyReader)\n     .create();\n'))),(0,a.kt)(i.Z,{value:"Python",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from pulsar import Client, CryptoKeyReader\n\nclient = Client('pulsar://localhost:6650')\ntopic = 'my-topic'\n# CryptoKeyReader is a built-in implementation that reads public key and private key from files\nkey_reader = CryptoKeyReader('test_rsa_pubkey.pem', 'test_rsa_privkey.pem')\n\nproducer = client.create_producer(\n    topic=topic,\n    encryption_key='myappkey',\n    crypto_key_reader=key_reader\n)\n\nconsumer = client.subscribe(\n    topic=topic,\n    subscription_name='my-subscriber-name',\n    crypto_key_reader=key_reader\n)\n\nreader = client.create_reader(\n    topic=topic,\n    start_message_id=MessageId.earliest,\n    crypto_key_reader=key_reader\n)\n\nclient.close()\n"))),(0,a.kt)(i.Z,{value:"C++",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'Client client("pulsar://localhost:6650");\nstd::string topic = "persistent://my-tenant/my-ns/my-topic";\n// DefaultCryptoKeyReader is a built-in implementation that reads public key and private key from files\nauto keyReader = std::make_shared<DefaultCryptoKeyReader>("test_rsa_pubkey.pem", "test_rsa_privkey.pem");\n\nProducer producer;\nProducerConfiguration producerConf;\nproducerConf.setCryptoKeyReader(keyReader);\nproducerConf.addEncryptionKey("myappkey");\nclient.createProducer(topic, producerConf, producer);\n\nConsumer consumer;\nConsumerConfiguration consumerConf;\nconsumerConf.setCryptoKeyReader(keyReader);\nclient.subscribe(topic, "my-subscriber-name", consumerConf, consumer);\n\nReader reader;\nReaderConfiguration readerConf;\nreaderConf.setCryptoKeyReader(keyReader);\nclient.createReader(topic, MessageId::earliest(), readerConf, reader);\n'))),(0,a.kt)(i.Z,{value:"Go",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'client, err := pulsar.NewClient(pulsar.ClientOptions{\n URL: "pulsar://localhost:6650",\n})\nif err != nil {\n   log.Fatal(err)\n}\n\ndefer client.Close()\n\ntopic := "persistent://my-tenant/my-ns/my-topic"\nkeyReader := crypto.NewFileKeyReader("test_ecdsa_pubkey.pem", "test_ecdsa_privkey.pem")\nproducer, err := client.CreateProducer(pulsar.ProducerOptions{\n   Topic: topic,\n   Encryption: &pulsar.ProducerEncryptionInfo{\n    KeyReader: keyReader,\n    Keys:      []string{"myappkey"},\n   },\n})\nif err != nil {\n    log.Fatal(err)\n}\ndefer producer.Close()\n\nconsumer, err := client.Subscribe(pulsar.ConsumerOptions{\n   Topic:            topic,\n   SubscriptionName: "my-subscriber-name",\n   Decryption: &pulsar.MessageDecryptionInfo{\n       KeyReader: keyReader,\n   },\n})\nif err != nil {\n   log.Fatal(err)\n}\ndefer consumer.Close()\n\nreader, err := client.CreateReader(pulsar.ReaderOptions{\n   Topic: topic,\n   Decryption: &pulsar.MessageDecryptionInfo{\n       KeyReader: keyReader,\n   },\n})\nif err != nil {\n   log.Fatal(err)\n}\ndefer reader.Close()\n'))),(0,a.kt)(i.Z,{value:"Node.js",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const Pulsar = require('pulsar-client');\n\nconst topic = 'persistent://my-tenant/my-ns/my-topic';\n\n(async () => {\n// Create a client\nconst client = new Pulsar.Client({\n    serviceUrl: 'pulsar://localhost:6650',\n    operationTimeoutSeconds: 30,\n});\n\n// Create a producer\nconst producer = await client.createProducer({\n    topic: topic,\n    sendTimeoutMs: 30000,\n    batchingEnabled: true,\n    publicKeyPath: \"test_rsa_pubkey.pem\",\n    encryptionKey: \"encryption-key\"\n});\n\n// Create a consumer\nconst consumer = await client.subscribe({\n    topic: topic,\n    subscription: 'my-subscriber-name',\n    subscriptionType: 'Shared',\n    ackTimeoutMs: 10000,\n    privateKeyPath: \"test_rsa_privkey.pem\"\n});\nawait consumer.close();\nawait producer.close();\nawait client.close();\n})();\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Optional: customize the ",(0,a.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," implementation."),(0,a.kt)(o.Z,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"},{label:"C++",value:"C++"},{label:"Go",value:"Go"},{label:"Node.js",value:"Node.js"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Java",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'class RawFileKeyReader implements CryptoKeyReader {\n\n String publicKeyFile = "";\n String privateKeyFile = "";\n\n RawFileKeyReader(String pubKeyFile, String privKeyFile) {\n     publicKeyFile = pubKeyFile;\n     privateKeyFile = privKeyFile;\n }\n\n @Override\n public EncryptionKeyInfo getPublicKey(String keyName, Map<String, String> keyMeta) {\n     EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n     try {\n         keyInfo.setKey(Files.readAllBytes(Paths.get(publicKeyFile)));\n     } catch (IOException e) {\n         System.out.println("ERROR: Failed to read public key from file " + publicKeyFile);\n         e.printStackTrace();\n     }\n     return keyInfo;\n }\n\n @Override\n public EncryptionKeyInfo getPrivateKey(String keyName, Map<String, String> keyMeta) {\n     EncryptionKeyInfo keyInfo = new EncryptionKeyInfo();\n     try {\n         keyInfo.setKey(Files.readAllBytes(Paths.get(privateKeyFile)));\n     } catch (IOException e) {\n         System.out.println("ERROR: Failed to read private key from file " + privateKeyFile);\n         e.printStackTrace();\n     }\n     return keyInfo;\n }\n}\n'))),(0,a.kt)(i.Z,{value:"Python",mdxType:"TabItem"},(0,a.kt)("p",{parentName:"li"},"Currently, customizing the ",(0,a.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," implementation is not supported in Python. However, you can use the default implementation by specifying the path of the private key and public keys.")),(0,a.kt)(i.Z,{value:"C++",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class CustomCryptoKeyReader : public CryptoKeyReader {\n public:\n Result getPublicKey(const std::string& keyName, std::map<std::string, std::string>& metadata,\n                     EncryptionKeyInfo& encKeyInfo) const override {\n     // TODO\n     return ResultOk;\n }\n\n Result getPrivateKey(const std::string& keyName, std::map<std::string, std::string>& metadata,\n                     EncryptionKeyInfo& encKeyInfo) const override {\n     // TODO\n     return ResultOk;\n }\n};\n"))),(0,a.kt)(i.Z,{value:"Go",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type CustomKeyReader struct {\n   publicKeyPath  string\n   privateKeyPath string\n}\n\nfunc (c *CustomKeyReader) PublicKey(keyName string, keyMeta map[string]string) (*EncryptionKeyInfo, error) {\n   keyInfo := &EncryptionKeyInfo{}\n   // TODO\n   return keyInfo, nil\n}\n\n// PrivateKey read private key from the given path\nfunc (c *CustomKeyReader) PrivateKey(keyName string, keyMeta map[string]string) (*EncryptionKeyInfo, error) {\n   keyInfo := &EncryptionKeyInfo{}\n   // TODO\n   return keyInfo, nil\n}\n"))),(0,a.kt)(i.Z,{value:"Node.js",mdxType:"TabItem"},(0,a.kt)("p",{parentName:"li"},"Currently, customizing the ",(0,a.kt)("inlineCode",{parentName:"p"},"CryptoKeyReader")," implementation is not supported in Node.js client. However, you can use the default implementation by specifying the path of the private key and public keys."))))),(0,a.kt)("h3",{id:"step-2-encrypt-a-message-with-multiple-keys"},"Step 2: Encrypt a message with multiple keys"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is only available for Java clients.")),(0,a.kt)("p",null,"You can encrypt a message with more than one key. Producers add all such keys to the config and consumers can decrypt the message as long as they have access to at least one of the keys. Any one of the keys used for encrypting the message is sufficient to decrypt the message."),(0,a.kt)("p",null,"For example, encrypt the messages using 2 keys (",(0,a.kt)("inlineCode",{parentName:"p"},"myapp.messagekey1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"myapp.messagekey2"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'PulsarClient.newProducer().addEncryptionKey("myapp.messagekey1").addEncryptionKey("myapp.messagekey2");\n')),(0,a.kt)("h2",{id:"troubleshoot"},"Troubleshoot"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Producer/Consumer loses access to the key",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Producer action fails to indicate the cause of the failure. Application has the option to proceed with sending unencrypted messages in such cases. Call ",(0,a.kt)("inlineCode",{parentName:"li"},"PulsarClient.newProducer().cryptoFailureAction(ProducerCryptoFailureAction)")," to control the producer behavior. The default behavior is to fail the request."),(0,a.kt)("li",{parentName:"ul"},"If consumption fails due to decryption failure or missing keys in the consumer, the application has the option to consume the encrypted message or discard it. Call ",(0,a.kt)("inlineCode",{parentName:"li"},"PulsarClient.newConsumer().cryptoFailureAction(ConsumerCryptoFailureAction)")," to control the consumer behavior. The default behavior is to fail the request. Application is never able to decrypt the messages if the private key is permanently lost."))),(0,a.kt)("li",{parentName:"ul"},"Batch messaging",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If decryption fails and the message contains batch messages, client is not able to retrieve individual messages in the batch, hence message consumption fails even if ",(0,a.kt)("inlineCode",{parentName:"li"},"cryptoFailureAction()")," is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"ConsumerCryptoFailureAction.CONSUME"),"."))),(0,a.kt)("li",{parentName:"ul"},"If decryption fails, the message consumption stops and the application notices backlog growth in addition to decryption failure messages in the client log. If the application does not have access to the private key to decrypt the message, the only option is to skip or discard backlogged messages.")))}m.isMDXComponent=!0},40644:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pulsar-encryption-ed24c413933294ca4c6dc4acfb76eca3.svg"}}]);