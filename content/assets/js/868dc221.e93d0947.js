"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7536],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||a;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(87462),o=(n(67294),n(3905));const a={id:"security-openid-connect",title:"Authentication using OpenID Connect",sidebar_label:"Authentication using OpenID Connect"},r=void 0,s={unversionedId:"security-openid-connect",id:"version-3.0.x/security-openid-connect",title:"Authentication using OpenID Connect",description:'Apache Pulsar supports authenticating clients using OpenID Connect, which is an implementation of the OAuth 2.0 Protocol. Using an access token obtained from an OpenID Connect compliant Identity Provider service acting as the token issuer, you can identify a Pulsar client and associate it with a "principal" (or "role") that is permitted to do some actions, such as publishing messages to a topic or performing some admin operation.',source:"@site/versioned_docs/version-3.0.x/security-openid-connect.md",sourceDirName:".",slug:"/security-openid-connect",permalink:"/docs/3.0.x/security-openid-connect",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.0.x/security-openid-connect.md",tags:[],version:"3.0.x",frontMatter:{id:"security-openid-connect",title:"Authentication using OpenID Connect",sidebar_label:"Authentication using OpenID Connect"},sidebar:"docsSidebar",previous:{title:"Authentication using OAuth 2.0 access tokens",permalink:"/docs/3.0.x/security-oauth2"},next:{title:"Authentication using HTTP basic",permalink:"/docs/3.0.x/security-basic-auth"}},c={},l=[{value:"OpenID Connect Authentication Flow",id:"openid-connect-authentication-flow",level:2},{value:"Enable OpenID Connect Authentication in the Broker and Proxy",id:"enable-openid-connect-authentication-in-the-broker-and-proxy",level:2},{value:"Enable OpenID Connect Authentication in the Function Worker",id:"enable-openid-connect-authentication-in-the-function-worker",level:2},{value:"Enable Custom OpenID Connect Integration with Kubernetes",id:"enable-custom-openid-connect-integration-with-kubernetes",level:2},{value:"Configuring Pulsar Components and Applications to use Projected Service Account Tokens to Authenticate with other Pulsar Components",id:"configuring-pulsar-components-and-applications-to-use-projected-service-account-tokens-to-authenticate-with-other-pulsar-components",level:2},{value:"Enabling AuthenticationProviderOpenID Connect and AuthenticationProviderToken Simultaneously",id:"enabling-authenticationprovideropenid-connect-and-authenticationprovidertoken-simultaneously",level:2},{value:"Configure OIDC authentication in Pulsar Clients and CLI Tools",id:"configure-oidc-authentication-in-pulsar-clients-and-cli-tools",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache Pulsar supports authenticating clients using ",(0,o.kt)("a",{parentName:"p",href:"https://openid.net/connect"},"OpenID Connect"),', which is an implementation of the OAuth 2.0 Protocol. Using an access token obtained from an OpenID Connect compliant Identity Provider service acting as the token issuer, you can identify a Pulsar client and associate it with a "principal" (or "role") that is permitted to do some actions, such as publishing messages to a topic or performing some admin operation.'),(0,o.kt)("p",null,"The source code for the OpenID Connect implementation is in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-broker-auth-oidc/"},"pulsar-broker-auth-oidc")," submodule in the Apache Pulsar git repo."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Pulsar's OpenID Connect integration was introduced in Pulsar 3.0.0. As always, if you encounter any issues, please ask questions on Pulsar channels and open issues in GitHub.")),(0,o.kt)("h2",{id:"openid-connect-authentication-flow"},"OpenID Connect Authentication Flow"),(0,o.kt)("p",null,"After authenticating with the Identity Provider, the Pulsar client gets an access token from the server and passes this access token to Pulsar Server (Broker, Proxy, WebSocket Proxy, or Function Worker) for authentication. When using the ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthenticationProviderOpenID")," class, the Pulsar Server performs the following validations in order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Validate that the token's issuer claim (",(0,o.kt)("inlineCode",{parentName:"li"},"iss"),") is one of the allowed token issuers (",(0,o.kt)("inlineCode",{parentName:"li"},"openIDAllowedTokenIssuers"),")."),(0,o.kt)("li",{parentName:"ol"},"Retrieve and cache the OpenID Connect discovery document from the issuer following the ",(0,o.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-discovery-1_0.html"},"OpenID Connect Discovery 1.0")," specification."),(0,o.kt)("li",{parentName:"ol"},"Verify the resulting JSON document's ",(0,o.kt)("inlineCode",{parentName:"li"},"issuer")," field matches the token's issuer claim."),(0,o.kt)("li",{parentName:"ol"},"Retrieve and cache the public key set from the ",(0,o.kt)("inlineCode",{parentName:"li"},"jwks_uri")," provided by the discovery document obtained in step 2."),(0,o.kt)("li",{parentName:"ol"},"Verify the signature of the token using the public key set obtained in step 4."),(0,o.kt)("li",{parentName:"ol"},"Validate the token's claims, like ",(0,o.kt)("inlineCode",{parentName:"li"},"aud"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"exp"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"iat"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"nbf"),"."),(0,o.kt)("li",{parentName:"ol"},"When token validation is successful, the Pulsar Server extracts the ",(0,o.kt)("inlineCode",{parentName:"li"},"sub")," claim from the token (or the configured ",(0,o.kt)("inlineCode",{parentName:"li"},"openIDRoleClaim"),") and uses it as the principal for authorization."),(0,o.kt)("li",{parentName:"ol"},"When the token expires, the Pulsar Server challenges the client to re-authenticate with the Identity Provider and provide a new access token. If the client fails to re-authenticate, the Pulsar Server closes the connection.")),(0,o.kt)("h2",{id:"enable-openid-connect-authentication-in-the-broker-and-proxy"},"Enable OpenID Connect Authentication in the Broker and Proxy"),(0,o.kt)("p",null,"To configure Pulsar Servers to authenticate clients using OpenID Connect, add the following parameters to the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/proxy.conf"),". If you use a standalone Pulsar, you need to add these parameters to the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/standalone.conf")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"# Configuration to enable authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.oidc.AuthenticationProviderOpenID\n\n# Required settings for AuthenticationProviderOpenID\n# A comma separated list of allowed, or trusted, token issuers. The token issuer is the URL of the token issuer.\nPULSAR_PREFIX_openIDAllowedTokenIssuers=https://my-issuer-1.com,https://my-issuer-2.com\n# The list of allowed audiences for the token. The audience is the intended recipient of the token. A token with\n# at least one of these audience claims will pass the audience validation check.\nPULSAR_PREFIX_openIDAllowedAudiences=audience-1,audience-2\n\n# Optional settings (values shown are the defaults)\n# The path to the file containing the trusted certificate(s) of the token issuer(s). If not set, uses the default\n# trust store of the JVM.\nPULSAR_PREFIX_openIDTokenIssuerTrustCertsFilePath=\n# The JWT's claim to use for the role/principal during authorization.\nPULSAR_PREFIX_openIDRoleClaim=sub\n# The leeway, in seconds, to use when validating the token's expiration time.\nPULSAR_PREFIX_openIDAcceptedTimeLeewaySeconds=0\n\n# Cache settings\nPULSAR_PREFIX_openIDCacheSize=5\nPULSAR_PREFIX_openIDCacheRefreshAfterWriteSeconds=64800\nPULSAR_PREFIX_openIDCacheExpirationSeconds=86400\nPULSAR_PREFIX_openIDHttpConnectionTimeoutMillis=10000\nPULSAR_PREFIX_openIDHttpReadTimeoutMillis=10000\n\n# Whether to require that issuers use HTTPS. It is part of the OIDC spec to use HTTPS, so the default is true.\n# This setting is for testing purposes and is not recommended for any production environment.\nPULSAR_PREFIX_openIDRequireIssuersUseHttps=true\n\n# A setting describing how to handle discovery of the OpenID Connect configuration document when the issuer is not\n# in the list of allowed issuers. This setting is documented below.\nPULSAR_PREFIX_openIDFallbackDiscoveryMode=DISABLED\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When using OIDC for a client connecting through the proxy to the broker, it is necessary to set the broker's ",(0,o.kt)("inlineCode",{parentName:"p"},"openIDAcceptedTimeLeewaySeconds")," to double the proxy's ",(0,o.kt)("inlineCode",{parentName:"p"},"authenticationRefreshCheckSeconds")," configuration because the proxy caches the client's token and only refreshes it when it is expired. As such, in certain cases, when the proxy initiates a new connection to the broker, the token may not yet be expired in the proxy, but may be expired when it reaches the broker. You can mitigate this edge case by setting the broker's ",(0,o.kt)("inlineCode",{parentName:"p"},"openIDAcceptedTimeLeewaySeconds")," correctly.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The Pulsar WebSocket Proxy does not yet support OpenID Connect authentication. Here is an issue tracking this feature: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues/20236"},"#20236"),".")),(0,o.kt)("h2",{id:"enable-openid-connect-authentication-in-the-function-worker"},"Enable OpenID Connect Authentication in the Function Worker"),(0,o.kt)("p",null,"To configure the Pulsar Function Worker to authenticate clients using OpenID Connect, add the following parameters to the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/functions_worker.yml")," file. The documentation for these settings is ",(0,o.kt)("a",{parentName:"p",href:"#enable-openid-connect-authentication-in-the-brokers-proxies-and-websocket-proxies"},"above"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Configuration to enable authentication\nauthenticationEnabled: true\nauthenticationProviders: "org.apache.pulsar.broker.authentication.oidc.AuthenticationProviderOpenID"\nproperties:\n  openIDAllowedTokenIssuers: "https://my-issuer-1.com,https://my-issuer-2.com"\n  openIDAllowedAudiences: "audience-1,audience-2"\n  openIDTokenIssuerTrustCertsFilePath: ""\n  openIDRoleClaim: "sub"\n  openIDAcceptedTimeLeewaySeconds: 0\n  openIDCacheSize: 5\n  openIDCacheRefreshAfterWriteSeconds: 64800\n  openIDCacheExpirationSeconds: 86400\n  openIDHttpConnectionTimeoutMillis: 10000\n  openIDHttpReadTimeoutMillis: 10000\n  openIDRequireIssuersUseHttps: true\n  openIDFallbackDiscoveryMode: "DISABLED"\n')),(0,o.kt)("h2",{id:"enable-custom-openid-connect-integration-with-kubernetes"},"Enable Custom OpenID Connect Integration with Kubernetes"),(0,o.kt)("p",null,"Kubernetes has a built-in OpenID Connect integration where ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#serviceaccount-token-volume-projection"},"Service Account Token Volume Projections")," can easily be mounted into pods as signed JWTs that can be used as OpenID Connect access tokens. The only drawback is that the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#service-account-issuer-discovery"},"Kubernetes token issuer discovery")," feature is not completely compliant with the OpenID Spec (as their documentation explicitly mentions). To account for these discrepancies, Pulsar uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"openIDFallbackDiscoveryMode")," setting to integrate with Kubernetes while technically breaking the spec in documented ways."),(0,o.kt)("p",null,"The modes configure how the Open ID Connect Authentication Provider should handle a JWT that has an issuer claim that is not explicitly in the allowed issuers set configured by ",(0,o.kt)("inlineCode",{parentName:"p"},"openIDAllowedTokenIssuers"),". The current implementations rely on using the Kubernetes API Server's Open ID Connect features to discover an additional issuer or additional public keys to trust."),(0,o.kt)("p",null,"The available values for ",(0,o.kt)("inlineCode",{parentName:"p"},"openIDFallbackDiscoveryMode")," are: ",(0,o.kt)("inlineCode",{parentName:"p"},"DISABLED"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"KUBERNETES_DISCOVER_TRUSTED_ISSUER"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"KUBERNETES_DISCOVER_PUBLIC_KEYS"),". The quick summary is that EKS requires ",(0,o.kt)("inlineCode",{parentName:"p"},"KUBERNETES_DISCOVER_TRUSTED_ISSUER")," right now, but GKE and AKS require ",(0,o.kt)("inlineCode",{parentName:"p"},"KUBERNETES_DISCOVER_PUBLIC_KEYS"),". The implementation details follow."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"DISABLED"),": There will be no discovery of additional trusted issuers or public keys. This setting requires that operators explicitly allow all issuers that will be trusted. For the Kubernetes Service Account Token Projections to work, the operator must explicitly trust the issuer on the token's ",(0,o.kt)("inlineCode",{parentName:"li"},"iss")," claim. This is the default setting because it is the only mode that explicitly follows the OIDC spec for verification of discovered provider configuration."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"KUBERNETES_DISCOVER_TRUSTED_ISSUER"),": The Kubernetes API Server will be used to discover an additional trusted issuer by getting the issuer at the API Server's ",(0,o.kt)("inlineCode",{parentName:"li"},"/.well-known/openid-configuration")," endpoint, verifying that issuer matches the ",(0,o.kt)("inlineCode",{parentName:"li"},"iss")," claim on the supplied token, then treating that issuer as a trusted issuer by discovering the ",(0,o.kt)("inlineCode",{parentName:"li"},"jwks_uri")," via that issuer's ",(0,o.kt)("inlineCode",{parentName:"li"},"/.well-known/openid-configuration")," endpoint. This mode can be helpful in EKS environments where the API Server's public keys served at the ",(0,o.kt)("inlineCode",{parentName:"li"},"/openid/v1/jwks")," endpoint are not the same as the public keys served at the issuer's ",(0,o.kt)("inlineCode",{parentName:"li"},"jwks_uri"),". It fails to be OIDC compliant because the URL used to discover the provider configuration is not the same as the issuer claim on the token."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"KUBERNETES_DISCOVER_PUBLIC_KEYS"),": The Kubernetes API Server will be used to discover an additional set of valid public keys by getting the issuer at the API Server's ",(0,o.kt)("inlineCode",{parentName:"li"},"/.well-known/openid-configuration")," endpoint, verifying that issuer matches the ",(0,o.kt)("inlineCode",{parentName:"li"},"iss")," claim on the supplied token, then calling the API Server endpoint to get the public keys using a Kubernetes client. This mode is currently useful for getting the public keys from the API Server because the API Server requires custom TLS and authentication, and the Kubernetes client automatically handles those. It fails to be OIDC compliant because the URL used to discover the provider configuration is not the same as the issuer claim on the token.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When deploying with either ",(0,o.kt)("inlineCode",{parentName:"p"},"KUBERNETES_DISCOVER_TRUSTED_ISSUER")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"KUBERNETES_DISCOVER_PUBLIC_KEYS"),", you will likely encounter an error like the following ",(0,o.kt)("inlineCode",{parentName:"p"},'forbidden: User \\"system:serviceaccount:pulsar:superuser\\" cannot get path \\"/.well-known/openid-configuration/\\"'),". That error is a result of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/issues/117455"},"https://github.com/kubernetes/kubernetes/issues/117455"),", which happens because the ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthenticationProviderOpenID")," plugin uses the Java Kubernetes client to connect to the Kubernetes API Server. The solution, which is minimally invasive, is to run the following command against your target Kubernetes cluster:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch clusterrole system:service-account-issuer-discovery --patch \'{"rules":[{"nonResourceURLs":["/.well-known/openid-configuration/","/.well-known/openid-configuration","/openid/v1/jwks/","/openid/v1/jwks"],"verbs":["get"]}]}\'\n'))),(0,o.kt)("h2",{id:"configuring-pulsar-components-and-applications-to-use-projected-service-account-tokens-to-authenticate-with-other-pulsar-components"},"Configuring Pulsar Components and Applications to use Projected Service Account Tokens to Authenticate with other Pulsar Components"),(0,o.kt)("p",null,"To leverage ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#serviceaccount-token-volume-projection"},"Service Account Token Volume Projections")," in your pulsar components, follow the Kubernetes documentation on mounting service account tokens and then configure the pulsar components to use the token with the following config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"brokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationToken\nbrokerClientAuthenticationParameters=file:///path/to/mounted/token\n")),(0,o.kt)("p",null,"We use the ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthenticationToken")," client plugin because Kubernetes automatically retrieves and refreshes the token for us. The ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthenticationToken")," works because it always reads the token from the filesystem, which ensures that it will always read the latest token."),(0,o.kt)("h2",{id:"enabling-authenticationprovideropenid-connect-and-authenticationprovidertoken-simultaneously"},"Enabling AuthenticationProviderOpenID Connect and AuthenticationProviderToken Simultaneously"),(0,o.kt)("p",null,"In order to simplify migration from Static JWTs to OIDC Authentication, it is possible to configure both the ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthenticationProviderOpenID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthenticationProviderToken")," simultaneously. This allows for a seamless transition from static JWTs to OIDC tokens. The ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthenticationProviderToken")," will be used to authenticate clients that do not provide an OIDC token, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthenticationProviderOpenID")," will be used to authenticate clients that do provide an OIDC token."),(0,o.kt)("h2",{id:"configure-oidc-authentication-in-pulsar-clients-and-cli-tools"},"Configure OIDC authentication in Pulsar Clients and CLI Tools"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.0.x/security-oauth2"},"OAuth2")," documentation for configuring clients to use OAuth2 authentication."))}p.isMDXComponent=!0}}]);