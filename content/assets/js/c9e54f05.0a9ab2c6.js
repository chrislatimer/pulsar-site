"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1318],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},g=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),y=l(t),u=a,d=y["".concat(p,".").concat(u)]||y[u]||c[u]||o;return t?r.createElement(d,s(s({ref:n},g),{},{components:t})):r.createElement(d,s({ref:n},g))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[y]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},88090:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(58168),a=(t(96540),t(15680));const o={id:"create-gpg-keys",title:"Creating GPG keys"},s=void 0,i={unversionedId:"create-gpg-keys",id:"create-gpg-keys",title:"Creating GPG keys",description:"This page provides instructions for Pulsar committers on how to do the initial GPG setup.",source:"@site/contribute/create-gpg-keys.md",sourceDirName:".",slug:"/create-gpg-keys",permalink:"/contribute/create-gpg-keys",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/contribute/create-gpg-keys.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1718933742,formattedLastUpdatedAt:"Jun 21, 2024",frontMatter:{id:"create-gpg-keys",title:"Creating GPG keys"},sidebar:"sidebarDevelopment",previous:{title:"Release process",permalink:"/contribute/release-process"},next:{title:"Writing release notes",permalink:"/contribute/release-note-guide"}},p={},l=[{value:"Upload the key to a public key server",id:"upload-the-key-to-a-public-key-server",level:2},{value:"Make your the Apache key the default key for GPG",id:"make-your-the-apache-key-the-default-key-for-gpg",level:2},{value:"Appending the key to KEYS files",id:"appending-the-key-to-keys-files",level:2}],g={toc:l},y="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(y,(0,r.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This page provides instructions for Pulsar committers on how to do the initial GPG setup."),(0,a.yg)("p",null,"This is a condensed version of instructions available at ",(0,a.yg)("a",{parentName:"p",href:"http://apache.org/dev/openpgp.html"},"http://apache.org/dev/openpgp.html"),"."),(0,a.yg)("p",null,"Create ~/.gnupg directory with proper permissions before adding custom config:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir ~/.gnupg\nchmod 0700 ~/.gnupg\n")),(0,a.yg)("p",null,"Install GnuPG. For example on macOS:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'brew install gnupg\n# On MacOS, install keychain integration\nbrew install pinentry-mac\necho "pinentry-program $(brew --prefix)/bin/pinentry-mac" | tee -a ~/.gnupg/gpg-agent.conf\n')),(0,a.yg)("p",null,"Configure gnupg to use standard DNS resolution:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'# resolves common "gpg: keyserver receive failed: Network is unreachable" and \n# "gpg: keyserver receive failed: No keyserver available" errors\necho "standard-resolver" >  ~/.gnupg/dirmngr.conf\nsudo pkill dirmngr\n')),(0,a.yg)("p",null,"Set configuration to use ",(0,a.yg)("inlineCode",{parentName:"p"},"SHA512")," keys by default:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"cat <<EOL >> ~/.gnupg/gpg.conf\npersonal-digest-preferences SHA512\ncert-digest-algo SHA512\ndefault-preference-list SHA512 SHA384 SHA256 SHA224 AES256 AES192 AES CAST5 ZLIB BZIP2 ZIP Uncompressed\nEOL\n")),(0,a.yg)("p",null,"Check the version:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"gpg --version\n\n# gpg (GnuPG) 2.1.22\n# ...\n")),(0,a.yg)("p",null,"Generate new GPG key:"),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"New ",(0,a.yg)("strong",{parentName:"p"},"RSA")," keys generated should be at least ",(0,a.yg)("strong",{parentName:"p"},"4096")," bits."),(0,a.yg)("p",{parentName:"admonition"},"The requested passphrase is for your GPG private key. The passphrase should be a strong password, and you should store it securely in your personal password manager.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'# For 1.x or 2.0.x\ngpg --gen-key\n\n# For 2.1.x\ngpg --full-gen-key\n\ngpg (GnuPG) 2.1.22; Copyright (C) 2017 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0) 0\nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: test user\nEmail address: test@apache.org\nComment: CODE SIGNING KEY\nYou selected this USER-ID:\n    "test user (CODE SIGNING KEY) <test@apache.org>"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O\n<Enter passphrase>\n')),(0,a.yg)("h2",{id:"upload-the-key-to-a-public-key-server"},"Upload the key to a public key server"),(0,a.yg)("p",null,"Use the key id to publish it to several public key servers:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'# find out your key id\nAPACHEID=your_asf_id\nKEY_ID=$(gpg --list-keys --with-colons $APACHEID@apache.org | egrep "^pub" | awk -F: \'{print $5}\')\necho "key id: $KEY_ID"\n# send the public key to multiple servers\ngpg --send-key $KEY_ID\ngpg --send-key --keyserver=keys.openpgp.org $KEY_ID\ngpg --send-key --keyserver=keyserver.ubuntu.com $KEY_ID\n')),(0,a.yg)("h2",{id:"make-your-the-apache-key-the-default-key-for-gpg"},"Make your the Apache key the default key for GPG"),(0,a.yg)("p",null,"This is required for signing the release artifacts"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'APACHEID=your_asf_id\nKEY_ID=$(gpg --list-keys --with-colons $APACHEID@apache.org | egrep "^pub" | awk -F: \'{print $5}\')\necho "default-key $KEY_ID" >> ~/.gnupg/gpg.conf\n')),(0,a.yg)("h2",{id:"appending-the-key-to-keys-files"},"Appending the key to KEYS files"),(0,a.yg)("p",null,"The GPG key needs to be appended to ",(0,a.yg)("inlineCode",{parentName:"p"},"KEYS")," file for the release candidates."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"A PMC member should complete this step.\nPlease provide your GPG key id to the PMC member to verify that it matches the one uploaded to the key servers.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'# Checkout the SVN folder containing the KEYS file\nsvn co https://dist.apache.org/repos/dist/release/pulsar pulsar-dist-release-keys --depth files\ncd pulsar-dist-release-keys\nsvn up KEYS\n\nAPACHEID=apacheid\n\n# import the key from the keyserver, ensure that the key id matches the one provided by the committer\ngpg --search-keys $APACHEID@apache.org\nKEY_ID=$(gpg --list-keys --with-colons $APACHEID@apache.org | egrep "^pub" | awk -F: \'{print $5}\')\necho "key id: $KEY_ID"\n\n# Export the key in ascii format and append it to the file\n# Make sure that the GPG key id matches the one from the committer\n( gpg --list-sigs $APACHEID@apache.org\n  gpg --export --armor $APACHEID@apache.org ) | tee -a KEYS\n\n# Commit to SVN\nsvn ci -m "Added gpg key for $APACHEID"\n')))}c.isMDXComponent=!0}}]);