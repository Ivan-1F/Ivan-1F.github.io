"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[89],{7329:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(7294),n=a(2263),l=a(8665),i=a(8902),m=a(6299),o=a(7556),s=a(4739),c=a(6010);function g(e){var t=e.metadata,a=(0,n.Z)().siteConfig.title,l=t.blogDescription,i=t.blogTitle,m="/"===t.permalink?a:i;return r.createElement(r.Fragment,null,r.createElement(o.d,{title:m,description:l}),r.createElement(s.Z,{tag:"blog_posts_list"}))}function u(e){var t=e.metadata,a=e.items,n=e.sidebar;return r.createElement(l.Z,{sidebar:n},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(m.Z,{metadata:t}))}function d(e){return r.createElement(o.FG,{className:(0,c.Z)(o.kM.wrapper.blogPages,o.kM.page.blogListPage)},r.createElement(g,e),r.createElement(u,e))}},6299:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(5999),l=a(1750);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(l.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&r.createElement(l.Z,{permalink:i,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},8902:function(e,t,a){a.d(t,{Z:function(){return L}});var r=a(7294),n=a(6010),l=a(5999),i=a(9960),m=a(4996),o=a(7556),s=a(8780),c=a(8704),g=a(7462),u=a(3366),d="iconEdit_dcUD",p=["className"];function E(e){var t=e.className,a=(0,u.Z)(e,p);return r.createElement("svg",(0,g.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,n.Z)(d,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function h(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},r.createElement(E,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var v="blogPostTitle_rzP5",b="blogPostData_Zg1s",f="blogPostDetailsFull_h6_j",_=a(7774),Z="tags_XVD_",N="tag_JSN8";function P(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(Z,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:N},r.createElement(_.Z,{name:t,permalink:a}))}))))}var k="image_o0gy";function T(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function w(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL,m=t.email,o=l||m&&"mailto:"+m||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement("span",{className:"avatar__photo-link avatar__photo"},r.createElement(T,{href:o},r.createElement("img",{className:k,src:i,alt:a}))),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(T,{href:o,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}var y="authorCol_FlmR",M="imageOnlyAuthorRow_trpF",U="imageOnlyAuthorCol_S2np";function x(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?M:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?U:y),key:t},r.createElement(w,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function L(e){var t,a,g=(a=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),u=(0,m.C)().withBaseUrl,d=e.children,p=e.frontMatter,E=e.assets,_=e.metadata,Z=e.truncated,N=e.isBlogPostPage,k=void 0!==N&&N,T=_.date,w=_.formattedDate,y=_.permalink,M=_.tags,U=_.readingTime,L=_.title,R=_.editUrl,C=_.authors,F=null!=(t=E.image)?t:p.image,A=!k&&Z,D=M.length>0,I=k?"h1":"h2";return r.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(I,{className:v,itemProp:"headline"},k?L:r.createElement(i.Z,{itemProp:"url",to:y},L)),r.createElement("div",{className:(0,n.Z)(b,"margin-vert--md")},r.createElement("time",{dateTime:T,itemProp:"datePublished"},w),void 0!==U&&r.createElement(r.Fragment,null," \xb7 ",g(U))),r.createElement(x,{authors:C,assets:E})),F&&r.createElement("meta",{itemProp:"image",content:u(F,{absolute:!0})}),r.createElement("div",{id:k?s.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(c.Z,null,d)),(D||Z)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",k&&f)},D&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":A})},r.createElement(P,{tags:M})),k&&R&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(h,{editUrl:R})),A&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":D})},r.createElement(i.Z,{to:_.permalink,"aria-label":(0,l.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:L})},r.createElement("b",null,r.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},1750:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),n=a(9960);function l(e){var t=e.permalink,a=e.title,l=e.subLabel;return r.createElement(n.Z,{className:"pagination-nav__link",to:t},l&&r.createElement("div",{className:"pagination-nav__sublabel"},l),r.createElement("div",{className:"pagination-nav__label"},a))}}}]);