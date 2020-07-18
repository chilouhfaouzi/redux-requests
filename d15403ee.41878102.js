(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),a=(n(0),n(149)),i={title:"Fetch driver"},s={id:"drivers/fetch-driver",title:"Fetch driver",description:"## Introduction",source:"@site/docs/drivers/fetch-driver.md",permalink:"/docs/drivers/fetch-driver",editUrl:"https://github.com/klis87/redux-requests/edit/master/docusaurus/docs/drivers/fetch-driver.md",lastUpdatedBy:"klis87",lastUpdatedAt:1595077872,sidebar:"docs",previous:{title:"Axios driver",permalink:"/docs/drivers/axios-driver"},next:{title:"GraphQL driver",permalink:"/docs/drivers/graphql-driver"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"fetch")," driver is for you if you like using ",Object(a.b)("inlineCode",{parentName:"p"},"Fetch API")," to make AJAX requests."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"First, install the driver:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install @redux-requests/fetch\n")),Object(a.b)("p",null,"or you can just use CDN: ",Object(a.b)("inlineCode",{parentName:"p"},"https://unpkg.com/@redux-requests/fetch"),"."),Object(a.b)("p",null,"You might want to also install ",Object(a.b)("inlineCode",{parentName:"p"},"Fetch API")," polyfill, like ",Object(a.b)("inlineCode",{parentName:"p"},"isomorphic-fetch"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install isomorphic-fetch\n")),Object(a.b)("p",null,"but this depends on browsers you want to support and is totally optional. The same\ngoes for any ",Object(a.b)("inlineCode",{parentName:"p"},"AbortController")," polyfill."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"Before you can use ",Object(a.b)("inlineCode",{parentName:"p"},"fetch")," driver, first pass it to ",Object(a.b)("inlineCode",{parentName:"p"},"handleRequests"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import 'isomorphic-fetch'; // or a different fetch polyfill\nimport { handleRequests } from '@redux-requests/core';\nimport { createDriver } from '@redux-requests/fetch';\n\nhandleRequests({\n  driver: createDriver(\n    window.fetch,\n    {\n      baseURL: 'https://my-domain.com' // optional - it works like axios baseURL, prepending all relative urls\n      AbortController: window.AbortController, // optional, if your browser supports\n      //AbortController or you use a polyfill like https://github.com/mo/abortcontroller-polyfill\n    }\n  ),\n});\n")),Object(a.b)("p",null,"Then, you can start using Fetch API config in your requests actions. For example,\nin order to create Fetch API requests, below:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"fetch('/users', {\n  method: 'POST',\n  body: JSON.stringify(data),\n  headers: {\n    'Content-Type': 'application/json',\n  },\n});\n")),Object(a.b)("p",null,"should be translated to this request action:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const fetchUsers = data => ({\n  type: 'FETCH_USERS',\n  request: {\n    url: '/users/',\n    method: 'POST',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  }\n});\n")),Object(a.b)("p",null,"The point is, you can use the same request config like you do with pure Fetch API.\nThe only difference is that you need to pass ",Object(a.b)("inlineCode",{parentName:"p"},"url")," in the config itself."),Object(a.b)("p",null,"Also, one additional parameter you could provide in the config is ",Object(a.b)("inlineCode",{parentName:"p"},"responseType"),", which is set as ",Object(a.b)("inlineCode",{parentName:"p"},"json"),"\nby default. Available response types are: ",Object(a.b)("inlineCode",{parentName:"p"},"'arraybuffer'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'blob'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'formData'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'json'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"'text'"),", or ",Object(a.b)("inlineCode",{parentName:"p"},"null"),"\n(if you don't want a response stream to be read for the given response)."),Object(a.b)("p",null,"Moreover, as you probably deducted from ",Object(a.b)("inlineCode",{parentName:"p"},"responseType")," option in config, this driver reads response streams automatically for you (depending on ",Object(a.b)("inlineCode",{parentName:"p"},"responseType")," you choose) and sets it as ",Object(a.b)("inlineCode",{parentName:"p"},"response.data"),", so instead of doing ",Object(a.b)("inlineCode",{parentName:"p"},"response.json()"),", just read ",Object(a.b)("inlineCode",{parentName:"p"},"response.data"),"."))}p.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(f,s({ref:t},l,{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);