!function(e){function t(l){if(n[l])return n[l].exports;var o=n[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t){e.exports=wp.i18n},function(e,t){e.exports=wp.blocks},function(e,t){e.exports=wp.blockEditor},function(e,t){e.exports=wp.data},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(5),n(13)},function(e,t,n){"use strict";function l(e){var t=e.rootClientId;return wp.element.createElement(u.Inserter,{rootClientId:t,renderToggle:function(e){var t=e.onToggle,n=e.disabled;return wp.element.createElement(m.Tooltip,{text:Object(c.__)("Add a slide"),position:"bottom center"},wp.element.createElement(m.Button,{isSecondary:!0,onClick:t,disabled:n,icon:wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",role:"img","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"}))}))},isAppender:!0})}var o=n(6),r=(n.n(o),n(7)),s=n.n(r),i=n(8),a=(n.n(i),n(9)),c=(n.n(a),n(0)),d=(n.n(c),n(1)),p=(n.n(d),n(10)),u=(n.n(p),n(2)),m=(n.n(u),n(11)),b=(n.n(m),n(3)),f=(n.n(b),n(12)),h=["cb/slide"];Object(d.registerBlockType)("cb/carousel",{icon:f.a,edit:function(e){var t=e.attributes,n=e.setAttributes,o=e.clientId,r=(t.slides,t.slidesToShow),i=(t.scrollGroup,t.slidesToScroll),a=t.speed,d=(t.slidePadding,t.arrows),f=t.dots,w=t.infinite,v=t.autoplay,g=t.autoplaySpeed,S=t.rtl,y=t.responsiveWidth,E=t.responsiveSlides,T=t.responsiveSlidesToScroll,k=Object(b.useSelect)(function(e){return e("core/block-editor").getBlock(o).innerBlocks}),O=Object(u.useBlockProps)({className:s()("cb-shows-"+r+"-slides",k.length+1>r?"cb-show-scrollbar":"cb-hide-scrollbar")}),_=wp.element.createElement("div",{className:"cb-carousel-placeholder"},Object(c.__)("Click plus to add slides "));return wp.element.createElement(p.Fragment,null,wp.element.createElement(u.InspectorControls,null,wp.element.createElement(m.PanelBody,{title:Object(c.__)("Carousel Settings"),initialOpen:!0},wp.element.createElement(m.RangeControl,{label:Object(c.__)("Slides to show"),value:r,onChange:function(e){return n({slidesToShow:e})},min:1,max:10}),wp.element.createElement(m.RangeControl,{label:Object(c.__)("Slides to scroll at a time"),value:i,onChange:function(e){return n({slidesToScroll:e})},min:1,max:10}),wp.element.createElement(m.RangeControl,{label:Object(c.__)("Slide animation speed (ms)"),value:a,onChange:function(e){return n({speed:e})},step:50,min:0,max:1e3}),wp.element.createElement(m.ToggleControl,{label:Object(c.__)("Prev/Next arrows"),checked:!!d,onChange:function(e){return n({arrows:e})}}),wp.element.createElement(m.ToggleControl,{label:Object(c.__)("Dots navigation"),checked:!!f,onChange:function(e){return n({dots:e})}}),wp.element.createElement(m.ToggleControl,{label:Object(c.__)("Infinite loop sliding"),checked:!!w,onChange:function(e){return n({infinite:e})}}),wp.element.createElement(m.ToggleControl,{label:Object(c.__)("Autoplay"),checked:!!v,onChange:function(e){return n({autoplay:e})}}),v&&wp.element.createElement(m.TextControl,{type:"number",label:Object(c.__)("Autoplay speed (ms)"),value:g,onChange:function(e){return n({autoplaySpeed:parseInt(e,10)})}}),wp.element.createElement(m.ToggleControl,{label:Object(c.__)("RTL"),checked:!!S,onChange:function(e){return n({rtl:e})}})),wp.element.createElement(m.PanelBody,{title:Object(c.__)("Responsive Settings"),initialOpen:!1},wp.element.createElement(m.TextControl,{type:"number",label:Object(c.__)("Screen width (px)","cb"),value:y,onChange:function(e){return n({responsiveWidth:parseInt(e,10)})}}),wp.element.createElement(m.RangeControl,{label:Object(c.__)("Slides to show","cb"),value:E,help:Object(c.__)("# of slides to show at given screen width","cb"),onChange:function(e){return n({responsiveSlides:e})},min:1,max:6}),wp.element.createElement(m.RangeControl,{label:Object(c.__)("Slides to scroll at a time"),value:T,onChange:function(e){return n({responsiveSlidesToScroll:e})},min:1,max:10}))),wp.element.createElement("div",O,wp.element.createElement(u.InnerBlocks,{orientation:"horizontal",allowedBlocks:h,templateLock:!1,renderAppender:function(){return wp.element.createElement(l,{rootClientId:o})},placeholder:_})))},save:function(e){var t=e.attributes,n=(t.slides,t.slidesToShow),l=(t.scrollGroup,t.slidesToScroll),o=t.speed,r=(t.slidePadding,t.arrows),i=t.dots,a=t.infinite,c=t.autoplay,d=t.autoplaySpeed,p=t.rtl,m=t.responsiveWidth,b=t.responsiveSlides,f=t.responsiveSlidesToScroll,h={slidesToShow:n,slidesToScroll:l,speed:o,arrows:r,dots:i,autoplay:c,autoplaySpeed:d,infinite:a,rtl:p,responsive:[Object.assign({},m?{breakpoint:m+1}:{breakpoint:993},{settings:Object.assign({},b?{slidesToShow:b}:{slidesToShow:1},f?{slidesToScroll:f}:{slidesToScroll:1})})]},w=u.useBlockProps.save({className:s()({"cb-single-slide":1==n}),"data-slick":JSON.stringify(h),dir:p?"rtl":void 0});return wp.element.createElement("div",w,wp.element.createElement(u.InnerBlocks.Content,null))},deprecated:[{attributes:{slides:{type:"number",default:4},slidesToShow:{type:"number",default:3},scrollGroup:{type:"boolean",default:!1},slidesToScroll:{type:"number",default:1},speed:{type:"number",default:300},slidePadding:{type:"boolean",default:!0},arrows:{type:"boolean",default:!0},dots:{type:"boolean",default:!0},autoplay:{type:"boolean",default:!1},autoplaySpeed:{type:"number",default:3e3},infinite:{type:"boolean",default:!1},rtl:{type:"boolean"},responsiveWidth:{type:"number",default:768},responsiveSlides:{type:"number",default:1}},save:function(e){var t=e.attributes,n=(t.slides,t.slidesToShow),l=(t.scrollGroup,t.slidesToScroll),o=t.speed,r=(t.slidePadding,t.arrows),i=t.dots,a=t.infinite,c=t.autoplay,d=t.autoplaySpeed,p=t.rtl,m=t.responsiveWidth,b=t.responsiveSlides,f={slidesToShow:n,slidesToScroll:l,speed:o,arrows:r,dots:i,autoplay:c,autoplaySpeed:d,infinite:a,rtl:p,responsive:[Object.assign({},m?{breakpoint:m+1}:{breakpoint:993},{settings:Object.assign({},b?{slidesToShow:b}:{slidesToShow:1})})]},h=u.useBlockProps.save({className:s()({"cb-single-slide":1==n}),"data-slick":JSON.stringify(f),dir:p?"rtl":void 0});return wp.element.createElement("div",h,wp.element.createElement(u.InnerBlocks.Content,null))}},{attributes:{slides:{type:"number",default:4},slidesToShow:{type:"number",default:3},scrollGroup:{type:"boolean",default:!1},slidesToScroll:{type:"number",default:1},speed:{type:"number",default:300},slidePadding:{type:"boolean",default:!0},arrows:{type:"boolean",default:!0},dots:{type:"boolean",default:!0},infinite:{type:"boolean",default:!1},responsiveWidth:{type:"number",default:768},responsiveSlides:{type:"number",default:1}},save:function(e){var t=e.attributes,n=(t.slides,t.slidesToShow),l=(t.scrollGroup,t.slidesToScroll),o=t.speed,r=t.slidePadding,i=t.arrows,a=t.dots,c=t.responsiveWidth,d=t.responsiveSlides,p={slidesToShow:n,slidesToScroll:l,speed:o,arrows:i,dots:a,infinite:!1,responsive:[Object.assign({},c?{breakpoint:c+1}:{breakpoint:993},{settings:Object.assign({},d?{slidesToShow:d}:{slidesToShow:1})})]};return wp.element.createElement("div",{className:s()({"cb-single-slide":1==n,"cb-padding":r}),"data-slick":JSON.stringify(p)},wp.element.createElement(u.InnerBlocks.Content,null))}}]})},function(e,t){e.exports=lodash},function(e,t,n){var l,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var o=typeof l;if("string"===o||"number"===o)e.push(l);else if(Array.isArray(l)){if(l.length){var s=n.apply(null,l);s&&e.push(s)}}else if("object"===o)if(l.toString===Object.prototype.toString)for(var i in l)r.call(l,i)&&l[i]&&e.push(i);else e.push(l.toString())}}return e.join(" ")}var r={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(n.default=n,e.exports=n):(l=[],void 0!==(o=function(){return n}.apply(t,l))&&(e.exports=o))}()},function(e,t){},function(e,t){},function(e,t){e.exports=wp.element},function(e,t){e.exports=wp.components},function(e,t,n){"use strict";t.a=wp.element.createElement("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"},wp.element.createElement("path",{d:"M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"}),wp.element.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},function(e,t,n){"use strict";var l=n(0),o=(n.n(l),n(1)),r=(n.n(o),n(2)),s=(n.n(r),n(3)),i=(n.n(s),n(14));Object(o.registerBlockType)("cb/slide",{icon:i.a,edit:function(e){var t=e.clientId,n=Object(r.useBlockProps)(),l=Object(s.useSelect)(function(e){return{hasChildBlocks:(0,e(r.store).getBlockOrder)(t).length>0}},[t]),o=l.hasChildBlocks;return wp.element.createElement("div",n,wp.element.createElement(r.InnerBlocks,{templateLock:!1,renderAppender:o?void 0:r.InnerBlocks.ButtonBlockAppender}))},save:function(){var e=r.useBlockProps.save();return wp.element.createElement("div",e,wp.element.createElement(r.InnerBlocks.Content,null))}})},function(e,t,n){"use strict";t.a=wp.element.createElement("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",focusable:"false"}," ",wp.element.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})," ",wp.element.createElement("path",{d:"m18 6v11h4v-11h-4z"})," ",wp.element.createElement("path",{d:"m2 17h4v-11h-4v11z"})," ",wp.element.createElement("path",{d:"m7.0059 4v15.004h9.9902v-15.004h-9.9902zm1.3574 1.3555h7.2773v12.291h-7.2773v-12.291z"})," ")}]);