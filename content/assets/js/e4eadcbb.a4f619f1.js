(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[68853],{15680:(e,a,t)=>{"use strict";t.d(a,{xA:()=>c,yg:()=>m});var r=t(96540);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,s=function(e,a){if(null==e)return{};var t,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),v=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=v(e.components);return r.createElement(l.Provider,{value:a},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},j=r.forwardRef((function(e,a){var t=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=v(t),j=s,m=d["".concat(l,".").concat(j)]||d[j]||g[j]||n;return t?r.createElement(m,o(o({ref:a},c),{},{components:t})):r.createElement(m,o({ref:a},c))}));function m(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var n=t.length,o=new Array(n);o[0]=j;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[d]="string"==typeof e?e:s,o[1]=i;for(var v=2;v<n;v++)o[v]=t[v];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}j.displayName="MDXCreateElement"},618:(e,a,t)=>{"use strict";t.d(a,{A:()=>p});var r=t(58168),s=t(98587),n=t(96540),o=t(54533),i=t(64111),l=t(27256),v=t(3541),c=t(22871),d=t(27553),g=t(34548);function j(e){return(0,g.Ay)("MuiTableHead",e)}(0,d.A)("MuiTableHead",["root"]);var m=t(74848);const N=["className","component"],x=(0,c.Ay)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,a)=>a.root})({display:"table-header-group"}),b={variant:"head"},u="thead",p=n.forwardRef((function(e,a){const t=(0,v.A)({props:e,name:"MuiTableHead"}),{className:n,component:c=u}=t,d=(0,s.A)(t,N),g=(0,r.A)({},t,{component:c}),p=(e=>{const{classes:a}=e;return(0,i.A)({root:["root"]},j,a)})(g);return(0,m.jsx)(l.A.Provider,{value:b,children:(0,m.jsx)(x,(0,r.A)({as:c,className:(0,o.A)(p.root,n),ref:a,role:c===u?null:"rowgroup",ownerState:g},d))})}))},17575:(e,a,t)=>{"use strict";t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>v,default:()=>N,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var r=t(58168),s=(t(96540),t(15680)),n=t(21590),o=t(99235),i=t.n(o);const l={id:"client-java",title:"Java Client Release Notes",sidebar_label:"Java Client"},v=void 0,c={unversionedId:"client-java",id:"client-java",title:"Java Client Release Notes",description:"",source:"@site/release-notes/client-java.mdx",sourceDirName:".",slug:"/client-java",permalink:"/release-notes/client-java",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/client-java.mdx",tags:[],version:"current",frontMatter:{id:"client-java",title:"Java Client Release Notes",sidebar_label:"Java Client"},sidebar:"releaseNote",previous:{title:"Pulsar Clients Release Notes",permalink:"/release-notes/clients"},next:{title:"WebSocket Client",permalink:"/release-notes/client-ws"}},d={},g=[],j={toc:g},m="wrapper";function N(e){let{components:a,...t}=e;return(0,s.yg)(m,(0,r.A)({},j,t,{components:a,mdxType:"MDXLayout"}),(0,s.yg)(n.A,{data:i(),mdxType:"ClientReleaseTable"}))}N.isMDXComponent=!0},99235:e=>{e.exports=[{tagName:"v3.3.1",vtag:"3.3.x",releaseNotes:"/release-notes/versioned/client-java-3.3.1/",doc:"/docs/3.3.x/client-libraries-java",version:"v3.3.x"},{tagName:"v3.3.0",vtag:"3.3.x",releaseNotes:"/release-notes/versioned/client-java-3.3.0/",doc:"/docs/3.2.x/client-libraries-java",version:""},{tagName:"v3.2.4",vtag:"3.2.x",releaseNotes:"/release-notes/versioned/client-java-3.2.4/",doc:"/docs/3.2.x/client-libraries-java",version:"v3.2.x"},{tagName:"v3.2.3",vtag:"3.2.x",releaseNotes:"/release-notes/versioned/client-java-3.2.3/",doc:"/docs/3.2.x/client-libraries-java",version:""},{tagName:"v3.2.2",vtag:"3.2.x",releaseNotes:"/release-notes/versioned/client-java-3.2.2/",doc:"/docs/3.2.x/client-libraries-java",version:""},{tagName:"v3.2.1",vtag:"3.2.x",releaseNotes:"/release-notes/versioned/client-java-3.2.1/",doc:"/docs/3.2.x/client-libraries-java",version:""},{tagName:"v3.2.0",vtag:"3.2.x",releaseNotes:"/release-notes/versioned/client-java-3.2.0/",doc:"/docs/3.2.x/client-libraries-java",version:""},{tagName:"v3.1.3",vtag:"3.1.x",releaseNotes:"/release-notes/versioned/client-java-3.1.3/",doc:"/docs/3.1.x/client-libraries-java",version:"v3.1.x"},{tagName:"v3.1.2",vtag:"3.1.x",releaseNotes:"/release-notes/versioned/client-java-3.1.2/",doc:"/docs/3.1.x/client-libraries-java",version:""},{tagName:"v3.1.1",vtag:"3.1.x",releaseNotes:"/release-notes/versioned/client-java-3.1.1/",doc:"/docs/3.1.x/client-libraries-java",version:""},{tagName:"v3.1.0",vtag:"3.1.x",releaseNotes:"/release-notes/versioned/client-java-3.1.0/",doc:"/docs/3.1.x/client-libraries-java",version:""},{tagName:"v3.0.6",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/client-java-3.0.6/",doc:"/docs/3.0.x/client-libraries-java",version:"v3.0.x"},{tagName:"v3.0.5",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/client-java-3.0.5/",doc:"/docs/3.0.x/client-libraries-java",version:""},{tagName:"v3.0.4",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/client-java-3.0.4/",doc:"/docs/3.0.x/client-libraries-java",version:""},{tagName:"v3.0.3",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/client-java-3.0.3/",doc:"/docs/3.0.x/client-libraries-java",version:""},{tagName:"v3.0.2",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/client-java-3.0.2/",doc:"/docs/3.0.x/client-libraries-java",version:""},{tagName:"v3.0.1",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/client-java-3.0.1/",doc:"/docs/3.0.x/client-libraries-java",version:""},{tagName:"v3.0.0",vtag:"3.0.x",releaseNotes:"/release-notes/versioned/client-java-3.0.0/",doc:"/docs/3.0.x/client-libraries-java",version:""},{tagName:"v2.11.4",vtag:"2.11.x",releaseNotes:"/release-notes/versioned/client-java-2.11.4/",doc:"/docs/2.11.x/client-libraries-java",version:"v2.11.x"},{tagName:"v2.11.3",vtag:"2.11.x",releaseNotes:"/release-notes/versioned/client-java-2.11.3/",doc:"/docs/2.11.x/client-libraries-java",version:""},{tagName:"v2.11.2",vtag:"2.11.x",releaseNotes:"/release-notes/versioned/client-java-2.11.2/",doc:"/docs/2.11.x/client-libraries-java",version:""},{tagName:"v2.11.1",vtag:"2.11.x",releaseNotes:"/release-notes/versioned/client-java-2.11.1/",doc:"/docs/2.11.x/client-libraries-java",version:""},{tagName:"v2.11.0",vtag:"2.11.x",releaseNotes:"/release-notes/versioned/client-java-2.11.0/",doc:"/docs/2.11.x/client-libraries-java",version:""},{tagName:"v2.10.6",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-java-2.10.6/",doc:"/docs/2.10.x/client-libraries-java",version:"v2.10.x"},{tagName:"v2.10.5",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-java-2.10.5/",doc:"/docs/2.10.x/client-libraries-java",version:""},{tagName:"v2.10.4",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-java-2.10.4/",doc:"/docs/2.10.x/client-libraries-java",version:""},{tagName:"v2.10.3",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-java-2.10.3/",doc:"/docs/2.10.x/client-libraries-java",version:""},{tagName:"v2.10.2",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-java-2.10.2/",doc:"/docs/2.10.x/client-libraries-java",version:""},{tagName:"v2.10.1",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-java-2.10.1/",doc:"/docs/2.10.x/client-libraries-java",version:""},{tagName:"v2.10.0",vtag:"2.10.x",releaseNotes:"/release-notes/versioned/client-java-2.10.0/",doc:"/docs/2.10.x/client-libraries-java",version:""},{tagName:"v2.9.5",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-java-2.9.5/",doc:"/docs/2.9.x/client-libraries-java",version:"v2.9.x"},{tagName:"v2.9.4",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-java-2.9.4/",doc:"/docs/2.9.x/client-libraries-java",version:""},{tagName:"v2.9.3",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-java-2.9.3/",doc:"/docs/2.9.x/client-libraries-java",version:""},{tagName:"v2.9.2",vtag:"2.9.x",releaseNotes:"/release-notes/versioned/client-java-2.9.2/",doc:"/docs/2.9.x/client-libraries-java",version:""},{tagName:"v2.8.4",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-java-2.8.4/",doc:"/docs/2.8.x/client-libraries-java",version:"v2.8.x"},{tagName:"v2.8.3",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-java-2.8.3/",doc:"/docs/2.8.x/client-libraries-java",version:""},{tagName:"v2.8.2",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-java-2.8.2/",doc:"/docs/2.8.x/client-libraries-java",version:""},{tagName:"v2.8.1",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-java-2.8.1/",doc:"/docs/2.8.x/client-libraries-java",version:""},{tagName:"v2.8.0",vtag:"2.8.x",releaseNotes:"/release-notes/versioned/client-java-2.8.0/",doc:"/docs/2.8.x/client-libraries-java",version:""},{tagName:"v2.7.5",vtag:"2.7.5",releaseNotes:"/release-notes/versioned/client-java-2.7.5/",doc:"/docs/2.7.5/client-libraries-java",version:"v2.7.x"},{tagName:"v2.7.4",vtag:"2.7.4",releaseNotes:"/release-notes/versioned/client-java-2.7.4/",doc:"/docs/2.7.4/client-libraries-java",version:""},{tagName:"v2.7.3",vtag:"2.7.3",releaseNotes:"/release-notes/versioned/client-java-2.7.3/",doc:"/docs/2.7.3/client-libraries-java",version:""},{tagName:"v2.7.2",vtag:"2.7.2",releaseNotes:"/release-notes/versioned/client-java-2.7.2/",doc:"/docs/2.7.2/client-libraries-java",version:""},{tagName:"v2.7.1",vtag:"2.7.1",releaseNotes:"/release-notes/versioned/client-java-2.7.1/",doc:"/docs/2.7.1/client-libraries-java",version:""},{tagName:"v2.7.0",vtag:"2.7.0",releaseNotes:"/release-notes/versioned/client-java-2.7.0/",doc:"/docs/2.7.0/client-libraries-java",version:""},{tagName:"v2.6.4",vtag:"2.6.4",releaseNotes:"/release-notes/versioned/client-java-2.6.4/",doc:"/docs/2.6.4/client-libraries-java",version:"v2.6.x"},{tagName:"v2.6.2",vtag:"2.6.2",releaseNotes:"/release-notes/versioned/client-java-2.6.2/",doc:"/docs/2.6.2/client-libraries-java",version:""},{tagName:"v2.6.1",vtag:"2.6.1",releaseNotes:"/release-notes/versioned/client-java-2.6.1/",doc:"/docs/2.6.1/client-libraries-java",version:""},{tagName:"v2.6.0",vtag:"2.6.0",releaseNotes:"/release-notes/versioned/client-java-2.6.0/",doc:"/docs/2.6.0/client-libraries-java",version:""},{tagName:"v2.5.1",vtag:"2.5.1",releaseNotes:"/release-notes/versioned/client-java-2.5.1/",doc:"/docs/2.5.1/client-libraries-java",version:"v2.5.x"},{tagName:"v2.5.0",vtag:"2.5.0",releaseNotes:"/release-notes/versioned/client-java-2.5.0/",doc:"/docs/2.5.0/client-libraries-java",version:""}]},21590:(e,a,t)=>{"use strict";t.d(a,{A:()=>c});var r=t(96540),s=t(53881),n=t(88933),o=t(46780),i=t(618),l=t(73231),v=t(21312);function c(e){return r.createElement(s.A,{size:"small"},r.createElement(i.A,null,r.createElement(l.A,null,["Version","Release Note","Documentation"].map((e=>r.createElement(o.A,{className:"font-bold",sx:{color:"inherit"},key:e},r.createElement(v.A,null,e)))))),r.createElement(n.A,null,e.data.map(((e,a)=>r.createElement(l.A,{key:a,sx:{color:"inherit"}},r.createElement(o.A,{sx:{color:"inherit"}},e.version),r.createElement(o.A,{sx:{color:"inherit"}},r.createElement("a",{href:e.releaseNotes},e.tagName)),r.createElement(o.A,{sx:{color:"inherit"}},r.createElement("a",{href:e.doc},e.vtag," Documentation")))))))}}}]);