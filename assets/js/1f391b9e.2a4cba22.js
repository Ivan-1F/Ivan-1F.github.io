"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[85],{6416:function(e,a,l){l.r(a),l.d(a,{default:function(){return o}});var n=l(7294),t=l(6010),i=l(3570),c=l(8704),s=l(4853),m=l(7556),r="mdxPageWrapper_zHyg";function o(e){var a=e.content,l=a.metadata,o=l.title,d=l.description,v=l.frontMatter,u=v.wrapperClassName,N=v.hide_table_of_contents;return n.createElement(m.FG,{className:(0,t.Z)(null!=u?u:m.kM.wrapper.mdxPages,m.kM.page.mdxPage)},n.createElement(m.d,{title:o,description:d}),n.createElement(i.Z,null,n.createElement("main",{className:"container container--fluid margin-vert--lg"},n.createElement("div",{className:(0,t.Z)("row",r)},n.createElement("div",{className:(0,t.Z)("col",!N&&"col--8")},n.createElement(c.Z,null,n.createElement(a,null))),!N&&a.toc&&n.createElement("div",{className:"col col--2"},n.createElement(s.Z,{toc:a.toc,minHeadingLevel:v.toc_min_heading_level,maxHeadingLevel:v.toc_max_heading_level}))))))}},4853:function(e,a,l){l.d(a,{Z:function(){return u}});var n=l(7462),t=l(3366),i=l(7294),c=l(6010),s=l(7556),m=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function r(e){var a=e.toc,l=e.className,n=e.linkClassName,t=e.isChild;return a.length?i.createElement("ul",{className:t?void 0:l},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(r,{isChild:!0,toc:e.children,className:l,linkClassName:n}))}))):null}function o(e){var a=e.toc,l=e.className,c=void 0===l?"table-of-contents table-of-contents__left-border":l,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,v=e.linkActiveClassName,u=void 0===v?void 0:v,N=e.minHeadingLevel,f=e.maxHeadingLevel,g=(0,t.Z)(e,m),k=(0,s.LU)(),_=null!=N?N:k.tableOfContents.minHeadingLevel,C=null!=f?f:k.tableOfContents.maxHeadingLevel,E=(0,s.b9)({toc:a,minHeadingLevel:_,maxHeadingLevel:C}),b=(0,i.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:_,maxHeadingLevel:C}}),[d,u,_,C]);return(0,s.Si)(b),i.createElement(r,(0,n.Z)({toc:E,className:c,linkClassName:d},g))}var d="tableOfContents_cNA8",v=["className"];function u(e){var a=e.className,l=(0,t.Z)(e,v);return i.createElement("div",{className:(0,c.Z)(d,"thin-scrollbar",a)},i.createElement(o,(0,n.Z)({},l,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}}}]);