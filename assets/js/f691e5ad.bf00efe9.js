"use strict";(self.webpackChunkcasdk_docs=self.webpackChunkcasdk_docs||[]).push([[524],{6550:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=s(4848),a=s(8453);const t={},r="Azure API Management Policy",o={id:"samples/azure/apim-policy/README",title:"README",description:"This folder contains sample",source:"@site/docs/samples/azure/apim-policy/README.md",sourceDirName:"samples/azure/apim-policy",slug:"/samples/azure/apim-policy/",permalink:"/docs/samples/azure/apim-policy/",draft:!1,unlisted:!1,editUrl:"https://github.com/Green-Software-Foundation/carbon-aware-sdk/docs/samples/azure/apim-policy/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Samples",permalink:"/docs/category/samples"},next:{title:"Use Carbon Aware SDK with an Azure Function",permalink:"/docs/samples/azure/azure-function/"}},c={},d=[{value:"Request routing",id:"request-routing",level:2},{value:"Overview",id:"overview",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Enhancements &amp; considerations",id:"enhancements--considerations",level:3},{value:"Scheduled message delivery",id:"scheduled-message-delivery",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Dependencies",id:"dependencies-1",level:3},{value:"Enhancements &amp; considerations",id:"enhancements--considerations-1",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"azure-api-management-policy",children:"Azure API Management Policy"})}),"\n",(0,i.jsxs)(n.p,{children:["This folder contains sample\n",(0,i.jsx)(n.a,{href:"https://azure.microsoft.com/en-us/products/api-management/",children:"Azure API Management"}),"\n(APIM)\n",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-policies",children:"policy"}),"\ndefinitions that demonstrate how to integrate the\n",(0,i.jsx)(n.a,{href:"https://github.com/Green-Software-Foundation/carbon-aware-sdk",children:"Carbon Aware SDK"}),"\ninto APIM APIs and change the API behavior based on carbon intensity data. This\nsample does not cover creating a full APIM environment but focuses on how the\nCarbon Aware SDK can be integrated using\n",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/api-management/api-management-policies#advanced-policies",children:"advanced policies"}),"\nand\n",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/api-management/api-management-policy-expressions",children:"policy expressions"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"By integrating the Carbon Aware SDK at the API gateway level backend API's\nand/or downstream consumers are able to do their work at optimal carbon\nintensity times without any knowledge of the underlying system that determines\nthose times. This can be especially valuable in situations where the integration\nis with legacy systems or systems that cannot be readily modified to include\ncarbon awareness."}),"\n",(0,i.jsx)(n.p,{children:"This sample includes two use cases:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#request-routing",children:"Request routing"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#scheduled-message-delivery",children:"Scheduled message delivery"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In both use cases the Carbon Aware Web.Api is accessed behind an APIM API to\ntake advantage of response caching. This allows a high volume API to use the\nCarbon Aware Web.Api without concerns of being throttled by the underlying\nservices that the Carbon Aware SDK uses to provide the forecast data."}),"\n",(0,i.jsx)(n.h2,{id:"request-routing",children:"Request routing"}),"\n",(0,i.jsxs)(n.p,{children:["The request routing policy sample source can be found here -\n",(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(1952).A+"",children:"request-routing-policy.xml"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"request routing"})," use case involves an APIM policy that routes requests\nbased on the current carbon intensity in the target regions/data centers. In the\nsample policy, requests are routed to the\n",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/api-management/backends",children:"backend API"}),"\nin the region with the lowest carbon intensity."]}),"\n",(0,i.jsx)(n.p,{children:"This use case can be implemented in cases where requests are time sensitive and\ncannot take advantage of time shifting for optimal future carbon intensity\nusage."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Request Routing",src:s(3283).A+"",title:"Request Routing",width:"486",height:"428"})}),"\n",(0,i.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"This use case has the following dependencies:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Azure API Management"}),"\n",(0,i.jsxs)(n.li,{children:["Carbon Aware SDK Web.Api","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["represented as ",(0,i.jsx)(n.code,{children:"my-apim-instance.azure-api.net/emissions/forecasts"})," in the\nsample code"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["A backend web API deployed in multiple regions","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["represented as ",(0,i.jsx)(n.code,{children:"my-app-eastus.azurewebsites.net"})," &\n",(0,i.jsx)(n.code,{children:"my-app-westus.azurewebsites.net"})," in the sample code"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"enhancements--considerations",children:"Enhancements & considerations"}),"\n",(0,i.jsx)(n.p,{children:"This sample policy is a simple implementation to demonstrate how the Carbon\nAware SDK can be integrated into APIM. A few high level enhancements and\nconsiderations are outlined below."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Integration with hard coded regions is for demonstration purposes only and\nshould be automated or an alternate approach for region configuration should\nbe considered."}),"\n",(0,i.jsx)(n.li,{children:"It may be necessary to include other factors into the routing decision. This\nsample focuses purely on carbon intensity."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"scheduled-message-delivery",children:"Scheduled message delivery"}),"\n",(0,i.jsxs)(n.p,{children:["The scheduled message delivery policy sample source can be found here -\n",(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(8838).A+"",children:"scheduled-message-delivery-policy.xml"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"scheduled message delivery"})," use case involves a policy that is carbon aware\nand exposes a service bus queue through APIM. Message delivery is scheduled\nbased on the optimal future carbon intensity forecast. This use case is designed\nfor non time-sensitive workloads that can tolerate delayed processing."]}),"\n",(0,i.jsxs)(n.p,{children:["This implementation takes advantage of Azure Service Bus\n",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/service-bus-messaging/message-sequencing#scheduled-messages",children:"scheduled messages"}),"\nwhere messages can be submitted to a queue or topic for delayed processing.\nScheduled messages don't materialize in the queue until the defined enqueue time\nwhich is defined using the ",(0,i.jsx)(n.code,{children:"ScheduledEnqueueTimeUtc"})," message property."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Schedule Message Delivery",src:s(5683).A+"",title:"Schedule Message Delivery",width:"486",height:"428"})}),"\n",(0,i.jsx)(n.h3,{id:"dependencies-1",children:"Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"This sample uses the following services/components:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Azure API Management"}),"\n",(0,i.jsx)(n.li,{children:"Azure Service Bus"}),"\n",(0,i.jsxs)(n.li,{children:["Carbon Aware SDK Web.Api","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["represented as ",(0,i.jsx)(n.code,{children:"my-apim-instance.azure-api.net/emissions/forecasts"})," in the\nsample code"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"enhancements--considerations-1",children:"Enhancements & considerations"}),"\n",(0,i.jsx)(n.p,{children:"This sample policy is a simple implementation to demonstrate how the Carbon\nAware SDK can be integrated into APIM. A few high level enhancements and\nconsiderations are outlined below."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The specific message delivery time is based on the most optimal carbon\nintensity forecast value. To provide more control to the caller the request\ncan include a time window that can be used to select the lowest carbon\nintensity value in the specified window."}),"\n",(0,i.jsx)(n.li,{children:"This sample is using an API facade on top of a service bus queue to\nincorporate carbon awareness. Additional response information would most\nlikely be needed in a real world scenario."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1952:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/files/request-routing-policy-405921fdf293b9565f19f119d1c7b08f.xml"},8838:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/files/scheduled-message-delivery-policy-dafc0250299aec47b46b40fe5e1d911a.xml"},3283:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/request-routing-aede55c6d0cc1c9e75b583eafbd45fb6.jpg"},5683:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/schedule-message-delivery-8d5495479fe64edccfb259348c3d9a5b.jpg"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var i=s(6540);const a={},t=i.createContext(a);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);