"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[75390],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(r),d=a,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},54394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={id:"ci-testing-in-fork",title:"CI Testing in Fork",sidebar_label:"CI Testing in Fork"},i=void 0,s={unversionedId:"testing-and-ci/ci-testing-in-fork",id:"testing-and-ci/ci-testing-in-fork",title:"CI Testing in Fork",description:"Pulsar CI is currently hosted on Apache Infra resources. Since we cannot add more resources to Pulsar CI, we need to find other ways to reduce the load on Pulsar CI.",source:"@site/contribute/testing-and-ci/ci-testing-in-fork.md",sourceDirName:"testing-and-ci",slug:"/testing-and-ci/ci-testing-in-fork",permalink:"/contribute/testing-and-ci/ci-testing-in-fork",draft:!1,editUrl:"https://github.com/apache/pulsar-site/tree/main/site2/website-next/contribute/testing-and-ci/ci-testing-in-fork.md",tags:[],version:"current",lastUpdatedBy:"tison",lastUpdatedAt:1668512475,formattedLastUpdatedAt:"Nov 15, 2022",frontMatter:{id:"ci-testing-in-fork",title:"CI Testing in Fork",sidebar_label:"CI Testing in Fork"},sidebar:"sidebar",previous:{title:"Testing and CI",permalink:"/contribute/category/testing-and-ci"},next:{title:"Licensing",permalink:"/contribute/testing-and-ci/licensing"}},l={},c=[{value:"Run CI in fork",id:"run-ci-in-fork",level:2},{value:"Stay in-sync with upstream",id:"stay-in-sync-with-upstream",level:2},{value:"SSH to CI jobs",id:"ssh-to-ci-jobs",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pulsar CI is currently hosted on Apache Infra resources. Since we cannot add more resources to Pulsar CI, we need to find other ways to reduce the load on Pulsar CI."),(0,a.kt)("p",null,"After ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/pull/17693"},"PR-17693")," merged, any pull request directly sent to ",(0,a.kt)("inlineCode",{parentName:"p"},"apache/pulsar")," won't be triggered any more."),(0,a.kt)("p",null,"That said, pull requests should be first tested in your own fork. GitHub Actions provides separate quota for pull requests that are executed in a forked repository."),(0,a.kt)("h2",{id:"run-ci-in-fork"},"Run CI in fork"),(0,a.kt)("p",null,"Here are instructions to use your personal CI on GitHub:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Push your intended pull request changes to a new branch in your fork (the usual way you do it)."),(0,a.kt)("li",{parentName:"ol"},"Open a pull request to your own fork.")),(0,a.kt)("p",null,"These are the instructions for command-line interface:"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"https://cli.github.com/"},"GitHub CLI")," and configure it. With GitHub CLI, there's an easy way to open the PR to your own fork with a single command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gh pr create --repo=<your-github-id>/pulsar --base master --head <your-pr-branch> -f\n")),(0,a.kt)("p",null,'Alternatively, you can also create a PR to your own fork in the GitHub UI when opening a new PR. To do so, first click on "compare across forks" and then choose your own fork as both the forked repository and head repository.'),(0,a.kt)("h2",{id:"stay-in-sync-with-upstream"},"Stay in-sync with upstream"),(0,a.kt)("p",null,"It's worth keeping your master branch in sync with apache/pulsar's master so that the PR diff will be reasonable in your own fork."),(0,a.kt)("p",null,"Here's one way to sync your fork's master branch with apache/pulsar's master branch: Let's say you have git remotes called \"upstream\" for apache/pulsar and \"forked\" for your fork, with these commands, you synchronize your fork's remote master branch with apache/pulsar's master branch:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'replace "upstream" with the name of the git remote for apache/pulsar'),(0,a.kt)("li",{parentName:"ul"},'replace "forked" with the name of the git remote for your fork of pulsar')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch upstream\ngit push -f forked upstream/master:master\n")),(0,a.kt)("p",null,"When you finally want to create a PR to apache/pulsar, it can be started from the command line (this will open a browser for filling in the PR details):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gh pr create --repo=apache/pulsar --base master --head <your-pr-branch> --web\n")),(0,a.kt)("h2",{id:"ssh-to-ci-jobs"},"SSH to CI jobs"),(0,a.kt)("p",null,'The additional benefit of the "Personal CI" is that you get SSH access to the build VMs when the build is running. That is handled by this logic in the ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/.github/workflows/pulsar-ci.yaml"},"pulsar-ci.yaml")," GitHub Actions workflow file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Setup ssh access to build runner VM\n  # ssh access is enabled for builds in own forks\n  if: ${{ github.repository != 'apache/pulsar' && needs.changed_files_job.outputs.docs_only != 'true' }}\n  uses: ./.github/actions/ssh-access\n  with:\n  limit-access-to-actor: true\n")),(0,a.kt)("p",null,"... and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/.github/actions/ssh-access/action.yml"},"the inline composite action implementation"),". The SSH access is secured with the SSH key registered in GitHub. For example, your public keys are ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/horizonzy.keys"},"https://github.com/horizonzy.keys"),". You will first have to register an SSH public key in GitHub for that to work."))}p.isMDXComponent=!0}}]);