"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[29514,24608],{24608:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(67294),o=n(77498),l=n(95999);const i=function(){return a.createElement(o.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},93783:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(10412);const l={desktop:"desktop",mobile:"mobile",ssr:"ssr"},i=996;function c(){return o.Z.canUseDOM?window.innerWidth>i?l.desktop:l.mobile:l.ssr}const r=function(){const[e,t]=(0,a.useState)((()=>c()));return(0,a.useEffect)((()=>{function e(){t(c())}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),e}},86555:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var a=n(67294),o=n(3905),l=n(46291),i=n(77498),c=n(86010),r=n(53810),s=n(93783),d=n(55537),m=n(87462);const u=function(e){return a.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))};var b=n(95999),p=n(39960),h=n(13919),f=n(90541);const E={menuLinkText:"menuLinkText_OKON",hasHref:"hasHref_TwRn"};var g=n(72389);const _=(0,a.memo)((e=>{let{items:t,...n}=e;return a.createElement(a.Fragment,null,t.map(((e,t)=>a.createElement(k,(0,m.Z)({key:t,item:e},n)))))}));function k(e){let{item:t,...n}=e;return"category"===t.type?0===t.items.length?null:a.createElement(v,(0,m.Z)({item:t},n)):a.createElement(C,(0,m.Z)({item:t},n))}function v(e){let{item:t,onItemClick:n,activePath:o,level:l,...i}=e;const{items:s,label:d,collapsible:u,className:h,href:f}=t,k=function(e){const t=(0,g.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,r.Wl)(e):void 0),[e,t])}(t),v=(0,r._F)(t,o),{collapsed:C,setCollapsed:S,toggleCollapsed:N}=(0,r.uR)({initialState:()=>!!u&&(!v&&t.collapsed)});return function(e){let{isActive:t,collapsed:n,setCollapsed:o}=e;const l=(0,r.D9)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n,o])}({isActive:v,collapsed:C,setCollapsed:S}),a.createElement("li",{className:(0,c.Z)(r.kM.docs.docSidebarItemCategory,r.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":C},h)},a.createElement("div",{className:"menu__list-item-collapsible"},a.createElement(p.Z,(0,m.Z)({className:(0,c.Z)("menu__link",{"menu__link--sublist":u&&!f,"menu__link--active":v,[E.menuLinkText]:!u,[E.hasHref]:!!k}),onClick:u?e=>{n?.(t),f?S(!1):(e.preventDefault(),N())}:()=>{n?.(t)},href:u?k??"#":k},i),d),f&&u&&a.createElement("button",{"aria-label":(0,b.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:d}),type:"button",className:"clean-btn menu__caret",onClick:e=>{e.preventDefault(),N()}})),a.createElement(r.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(_,{items:s,tabIndex:C?-1:0,onItemClick:n,activePath:o,level:l+1})))}function C(e){let{item:t,onItemClick:n,activePath:o,level:l,...i}=e;const{href:s,label:d,className:u}=t,b=(0,r._F)(t,o);return a.createElement("li",{className:(0,c.Z)(r.kM.docs.docSidebarItemLink,r.kM.docs.docSidebarItemLinkLevel(l),"menu__list-item",u),key:d},a.createElement(p.Z,(0,m.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":b}),"aria-current":b?"page":void 0,to:s},(0,h.Z)(s)&&{onClick:n?()=>n(t):void 0},i),(0,h.Z)(s)?d:a.createElement("span",null,d,a.createElement(f.Z,null))))}const S={sidebar:"sidebar_a3j0",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_VlPv",sidebarHidden:"sidebarHidden_OqfG",sidebarLogo:"sidebarLogo_hmkv",menu:"menu_cyFh",menuWithAnnouncementBar:"menuWithAnnouncementBar_+O1J",collapseSidebarButton:"collapseSidebarButton_eoK2",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_e+kA",sidebarMenuIcon:"sidebarMenuIcon_iZzd",sidebarMenuCloseIcon:"sidebarMenuCloseIcon_6kU2"};function N(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,b.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t},a.createElement(u,{className:S.collapseSidebarButtonIcon}))}function T(e){let{path:t,sidebar:n,onCollapse:o,isHidden:l}=e;const i=function(){const{isActive:e}=(0,r.nT)(),[t,n]=(0,a.useState)(e);return(0,r.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}(),{navbar:{hideOnScroll:s},hideableSidebar:m}=(0,r.LU)();return a.createElement("div",{className:(0,c.Z)(S.sidebar,{[S.sidebarWithHideableNavbar]:s,[S.sidebarHidden]:l})},s&&a.createElement(d.Z,{tabIndex:-1,className:S.sidebarLogo}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",S.menu,{[S.menuWithAnnouncementBar]:i})},a.createElement("ul",{className:(0,c.Z)(r.kM.docs.docSidebarMenu,"menu__list")},a.createElement(_,{items:n,activePath:t,level:1}))),m&&a.createElement(N,{onClick:o}))}const Z=e=>{let{toggleSidebar:t,sidebar:n,path:o}=e;return a.createElement("ul",{className:(0,c.Z)(r.kM.docs.docSidebarMenu,"menu__list")},a.createElement(_,{items:n,activePath:o,onItemClick:e=>{"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function I(e){return a.createElement(r.Cv,{component:Z,props:e})}const w=a.memo(T),M=a.memo(I);function y(e){const t=(0,s.Z)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(w,e),o&&a.createElement(M,e))}var A=n(67707),B=n(24608);const L="backToTopButton_i9tI",x="backToTopButtonShow_wCmF",F=!1;function H(){const e=(0,a.useRef)(null);return{smoothScrollTop:function(){e.current=F?(window.scrollTo({top:0,behavior:"smooth"}),()=>{}):function(){let e=null;return function t(){const n=document.documentElement.scrollTop;n>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*n)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>e.current?.()}}const $=function(){const[e,t]=(0,a.useState)(!1),n=(0,a.useRef)(!1),{smoothScrollTop:o,cancelScrollToTop:l}=H();return(0,r.RF)(((e,a)=>{let{scrollY:o}=e;const i=a?.scrollY;if(!i)return;if(n.current)return void(n.current=!1);const c=o<i;if(c||l(),o<300)t(!1);else if(c){const e=document.documentElement.scrollHeight;o+window.innerHeight<e&&t(!0)}else t(!1)})),(0,r.SL)((e=>{e.location.hash&&(n.current=!0,t(!1))})),a.createElement("button",{"aria-label":(0,b.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",r.kM.common.backToTopButton,L,{[x]:e}),type:"button",onClick:()=>o()})};var P=n(16550);const R={docPage:"docPage_GMj9",docMainContainer:"docMainContainer_Q970",docSidebarContainer:"docSidebarContainer_k0Pq",docMainContainerEnhanced:"docMainContainerEnhanced_ipQ4",docSidebarContainerHidden:"docSidebarContainerHidden_05py",collapsedDocSidebar:"collapsedDocSidebar_3Col",expandSidebarButtonIcon:"expandSidebarButtonIcon_Dhhx",docItemWrapperEnhanced:"docItemWrapperEnhanced_JuqB"};var D=n(12859);function W(e){let{currentDocRoute:t,versionMetadata:n,children:l,sidebarName:s}=e;const d=(0,r.Vq)(),{pluginId:m,version:p}=n,[h,f]=(0,a.useState)(!1),[E,g]=(0,a.useState)(!1),_=(0,a.useCallback)((()=>{E&&g(!1),f((e=>!e))}),[E]);return"undefined"!=typeof window&&(0,a.useEffect)((()=>{const e=setTimeout((()=>{const[e,t]=window.location.href.split("#"),n=document.querySelectorAll(`[href="#${t}"]`)?.[0];if(n){const e=90,t=n.getBoundingClientRect().top+window.pageYOffset-e;window.scrollTo({top:t})}}),100);return()=>{clearTimeout(e)}}),[window.location.href]),a.createElement(i.Z,{wrapperClassName:r.kM.wrapper.docsPages,pageClassName:r.kM.page.docsDocPage,searchMetadata:{version:p,tag:(0,r.os)(m,p)}},a.createElement("div",{className:R.docPage},a.createElement($,null),d&&a.createElement("aside",{className:(0,c.Z)(R.docSidebarContainer,{[R.docSidebarContainerHidden]:h}),onTransitionEnd:e=>{e.currentTarget.classList.contains(R.docSidebarContainer)&&h&&g(!0)}},a.createElement(y,{key:s,sidebar:d,path:t.path,onCollapse:_,isHidden:E}),E&&a.createElement("div",{className:R.collapsedDocSidebar,title:(0,b.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},a.createElement(u,{className:R.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(R.docMainContainer,{[R.docMainContainerEnhanced]:h||!d})},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",R.docItemWrapper,{[R.docItemWrapperEnhanced]:h})},a.createElement(o.Zo,{components:A.Z},l)))))}const z=function(e){const{route:{routes:t},versionMetadata:n,location:o}=e,i=t.find((e=>(0,P.LX)(o.pathname,e)));if(!i)return a.createElement(B.default,null);const s=i.sidebar,d=s?n.docsSidebars[s]:null,m=(u=e.match.path,b=e.location.pathname,(e=>[`${e}/configurations`,`${e}/basic_configurations`,`${e}/timeline`,`${e}/table_types`,`${e}/migration_guide`,`${e}/compaction`,`${e}/clustering`,`${e}/indexing`,`${e}/metadata`,`${e}/metadata_indexing`,`${e}/record_payload`,`${e}/file_sizing`,`${e}/hoodie_cleaner`,`${e}/concurrency_control`,,`${e}/write_operations`,`${e}/key_generation`])(u).includes(b));var u,b;return a.createElement(a.Fragment,null,a.createElement(D.Z,null,a.createElement("html",{className:(0,c.Z)(n.className,{"docs-custom-styles":m})})),a.createElement(r.qu,{version:n},a.createElement(r.bT,{sidebar:d},a.createElement(W,{currentDocRoute:i,versionMetadata:n,sidebarName:s},(0,l.Z)(t,{versionMetadata:n})))))}}}]);