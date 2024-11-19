"use strict";(self.webpackChunkthomas_docs=self.webpackChunkthomas_docs||[]).push([[106],{1971:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Collated Information/cdn","title":"CDNs & How they Work","description":"CDN - Content Delivery Network","source":"@site/docs/Collated Information/cdn.md","sourceDirName":"Collated Information","slug":"/Collated Information/cdn","permalink":"/thomas-docs/docs/Collated Information/cdn","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Collated Information/cdn.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Adaptive Bitrate & Testing Achieved Resolution","permalink":"/thomas-docs/docs/Collated Information/bitrate"},"next":{"title":"DRM","permalink":"/thomas-docs/docs/Collated Information/drm"}}');var r=t(4848),i=t(8453);const o={},a="CDNs & How they Work",l={},d=[{value:"CDN - Content Delivery Network",id:"cdn---content-delivery-network",level:4},{value:"Example:",id:"example",level:4},{value:"Benefits of using a CDN",id:"benefits-of-using-a-cdn",level:3},{value:"Examples of CDNs in Use",id:"examples-of-cdns-in-use",level:3}];function c(e){const n={a:"a",h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"cdns--how-they-work",children:"CDNs & How they Work"})}),"\n",(0,r.jsx)(n.h4,{id:"cdn---content-delivery-network",children:"CDN - Content Delivery Network"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Your player downloads the segments/chunks that make up the video stream from a web-server into which the live video stream is being pushed."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If there were only 1 web-server, then every viewer would have to access it."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Depending on the popularity of the content, the server probably would not be able to cope with the number of users."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)("p",{align:"center",children:[" ",(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/cdn/cdn1.png",alt:"cdn1"})," "]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Instead of overloading the origin server, we use additional servers that are placed between the original (Origin) server and the viewers. These servers will request segments from the origin when required."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"They store the segments when requested, if any other viewers require the stored segments, they are served a cached copy of the original."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In the real world, you need many thousands of these caching servers distributed around the globe in a network and these are called \u201cContent Delivery Networks\u201d."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)("p",{align:"center",children:[" ",(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/cdn/cdn2.png",alt:"cdn1"})," "]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example:"}),"\n",(0,r.jsxs)("p",{align:"center",children:[" ",(0,r.jsx)(n.img,{src:"https://raw.githubusercontent.com/thomas-abraham13/thomas-docs/refs/heads/main/static/img/cdn/cdn3.png",alt:"cdn1"})," "]}),"\n",(0,r.jsx)(n.h3,{id:"benefits-of-using-a-cdn",children:"Benefits of using a CDN"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Improves Performance"}),"\n",(0,r.jsx)(n.li,{children:"Reduces Bandwidth Costs"}),"\n",(0,r.jsx)(n.li,{children:"Increases Content Availability"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.cloudflare.com/en-gb/learning/ddos/ddos-mitigation/",children:"Improves Security"})}),"\n",(0,r.jsx)(n.li,{children:"Scalability"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"examples-of-cdns-in-use",children:"Examples of CDNs in Use"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.cloudflare.com/en-gb/application-services/products/cdn/",children:"Cloudflare"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.akamai.com/solutions/content-delivery-network",children:"Akamai"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.fastly.com/products/cdn",children:"Fastly"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://aws.amazon.com/cloudfront/",children:"Cloudfront"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);