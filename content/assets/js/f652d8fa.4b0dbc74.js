"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[80420],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>d});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},h="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),h=p(a),m=i,d=h["".concat(l,".").concat(m)]||h[m]||s[m]||r;return a?n.createElement(d,o(o({ref:e},c),{},{components:a})):n.createElement(d,o({ref:e},c))}));function d(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=m;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u[h]="string"==typeof t?t:i,o[1]=u;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},20762:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={id:"security-extending",title:"Extend Authentication and Authorization in Pulsar",sidebar_label:"Extend Authentication and Authorization",description:"Learn how to use custom authentication and authorization mechanisms."},o=void 0,u={unversionedId:"security-extending",id:"version-3.2.0/security-extending",title:"Extend Authentication and Authorization in Pulsar",description:"Learn how to use custom authentication and authorization mechanisms.",source:"@site/versioned_docs/version-3.2.0/security-extending.md",sourceDirName:".",slug:"/security-extending",permalink:"/docs/3.2.0/security-extending",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.0/security-extending.md",tags:[],version:"3.2.0",frontMatter:{id:"security-extending",title:"Extend Authentication and Authorization in Pulsar",sidebar_label:"Extend Authentication and Authorization",description:"Learn how to use custom authentication and authorization mechanisms."},sidebar:"docsSidebar",previous:{title:"Authorization and ACLs",permalink:"/docs/3.2.0/security-authorization"},next:{title:"Pulsar Perf",permalink:"/docs/3.2.0/performance-pulsar-perf"}},l={},p=[{value:"Authentication",id:"authentication",level:2},{value:"Client authentication plugin",id:"client-authentication-plugin",level:3},{value:"Broker/Proxy authentication plugin",id:"brokerproxy-authentication-plugin",level:3},{value:"Authorization",id:"authorization",level:2},{value:"Broker authorization plugin",id:"broker-authorization-plugin",level:3}],c={toc:p},h="wrapper";function s(t){let{components:e,...a}=t;return(0,i.kt)(h,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pulsar provides a way to use custom authentication and authorization mechanisms."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"You can use a custom authentication mechanism by providing the implementation in the form of two plugins."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Client authentication plugin ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.pulsar.client.api.AuthenticationDataProvider")," provides the authentication data for broker/proxy."),(0,i.kt)("li",{parentName:"ul"},"Broker/Proxy authentication plugin ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.pulsar.broker.authentication.AuthenticationProvider")," authenticates the authentication data from clients.")),(0,i.kt)("h3",{id:"client-authentication-plugin"},"Client authentication plugin"),(0,i.kt)("p",null,"For the client library, you need to implement ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.client.api.Authentication"),". By entering the command below, you can pass this class when you create a Pulsar client."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'PulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar://localhost:6650")\n    .authentication(new MyAuthentication())\n    .build();\n')),(0,i.kt)("p",null,"You can implement 2 interfaces on the client side:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/api/client/3.2.0/org/apache/pulsar/client/api/Authentication.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Authentication"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pulsar.apache.org/api/client/3.2.0/org/apache/pulsar/client/api/AuthenticationDataProvider.html"},(0,i.kt)("inlineCode",{parentName:"a"},"AuthenticationDataProvider")))),(0,i.kt)("p",null,"This in turn requires you to provide the client credentials in the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.client.api.AuthenticationDataProvider")," and also leaves the chance to return different kinds of authentication tokens for different types of connections or by passing a certificate chain to use for TLS."),(0,i.kt)("p",null,"You can find the following examples for different client authentication plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationTls.java"},"Mutual TLS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-auth-athenz/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationAthenz.java"},"Athenz")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client-auth-sasl/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationSasl.java"},"Kerberos")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationToken.java"},"JSON Web Token (JWT)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/oauth2/AuthenticationOAuth2.java"},"OAuth 2.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-client/src/main/java/org/apache/pulsar/client/impl/auth/AuthenticationBasic.java"},"Basic auth"))),(0,i.kt)("h3",{id:"brokerproxy-authentication-plugin"},"Broker/Proxy authentication plugin"),(0,i.kt)("p",null,"On the broker/proxy side, you need to configure the corresponding plugin to validate the credentials that the client sends. The proxy and broker can support multiple authentication providers at the same time."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/broker.conf"),", you can choose to specify a list of valid providers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"# Authentication provider name list, which is comma separated list of class names\nauthenticationProviders=\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Pulsar supports an authentication provider chain that contains multiple authentication providers with the same authentication method name."),(0,i.kt)("p",{parentName:"admonition"},"For example, your Pulsar cluster uses JSON Web Token (JWT) authentication (with an authentication method named ",(0,i.kt)("inlineCode",{parentName:"p"},"token"),") and you want to upgrade it to use OAuth2.0 authentication with the same authentication name. In this case, you can implement your own authentication provider ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthenticationProviderOAuth2")," and configure ",(0,i.kt)("inlineCode",{parentName:"p"},"authenticationProviders")," as follows."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"authenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderToken,org.apache.pulsar.broker.authentication.AuthenticationProviderOAuth2\n")),(0,i.kt)("p",{parentName:"admonition"},"As a result, brokers look up the authentication providers with the ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," authentication method (JWT and OAuth2.0 authentication) when receiving requests to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," authentication method. If a client cannot be authenticated via JWT authentication, OAuth2.0 authentication is used.")),(0,i.kt)("p",null,"For the implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.authentication.AuthenticationProvider")," interface, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProvider.java"},"code"),"."),(0,i.kt)("p",null,"You can find the following examples for different broker authentication plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderTls.java"},"Mutual TLS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-auth-athenz/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderAthenz.java"},"Athenz")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-auth-sasl/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderSasl.java"},"Kerberos")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderToken.java"},"JSON Web Token (JWT)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authentication/AuthenticationProviderToken.java"},"Basic auth"))),(0,i.kt)("h2",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,'Authorization is the operation that checks whether a particular "role" or "principal" has permission to perform a certain operation.'),(0,i.kt)("p",null,"By default, you can use the embedded authorization provider provided by Pulsar. You can also configure a different authorization provider through a plugin. Note that although the Authentication plugin is designed for use in both the proxy and broker, the Authorization plugin is designed only for use on the broker."),(0,i.kt)("h3",{id:"broker-authorization-plugin"},"Broker authorization plugin"),(0,i.kt)("p",null,"To provide a custom authorization provider, you need to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.authorization.AuthorizationProvider")," interface, put this class in the Pulsar broker classpath and configure the class in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/broker.conf"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"# Authorization provider fully qualified class-name\nauthorizationProvider=org.apache.pulsar.broker.authorization.PulsarAuthorizationProvider\n")),(0,i.kt)("p",null,"For the implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.pulsar.broker.authorization.AuthorizationProvider")," interface, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-common/src/main/java/org/apache/pulsar/broker/authorization/AuthorizationProvider.java"},"code"),"."))}s.isMDXComponent=!0}}]);