(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[907],{64335:function(ue,G,l){"use strict";var U=l(67294),F=(0,U.createContext)({});G.Z=F},85224:function(ue,G,l){"use strict";var U=l(22122),F=l(28991),p=l(84305),I=l(75901),te=l(81253),re=l(94184),N=l.n(re),z=l(97435),P=l(67294),a=l(64335),S=l(56264),H=l.n(S),ae=["children","className","extra","style","renderContent"],k=function(M){var W=M.children,X=M.className,Y=M.extra,ve=M.style,V=M.renderContent,se=(0,te.Z)(M,ae),ce=(0,P.useContext)(I.ZP.ConfigContext),de=ce.getPrefixCls,$=M.prefixCls||de("pro"),fe="".concat($,"-footer-bar"),y=(0,P.useContext)(a.Z),ne=(0,P.useMemo)(function(){var J=y.hasSiderMenu,K=y.isMobile,Q=y.siderWidth;if(!!J)return Q?K?"100%":"calc(100% - ".concat(Q,"px)"):"100%"},[y.collapsed,y.hasSiderMenu,y.isMobile,y.siderWidth]),oe=P.createElement(P.Fragment,null,P.createElement("div",{className:"".concat(fe,"-left")},Y),P.createElement("div",{className:"".concat(fe,"-right")},W));return(0,P.useEffect)(function(){return!y||!(y==null?void 0:y.setHasFooterToolbar)?function(){}:(y==null||y.setHasFooterToolbar(!0),function(){var J;y==null||(J=y.setHasFooterToolbar)===null||J===void 0||J.call(y,!1)})},[]),P.createElement("div",(0,U.Z)({className:N()(X,"".concat(fe)),style:(0,F.Z)({width:ne},ve)},(0,z.Z)(se,["prefixCls"])),V?V((0,F.Z)((0,F.Z)((0,F.Z)({},M),y),{},{leftWidth:ne}),oe):oe)};G.Z=k},81907:function(ue,G,l){"use strict";l.d(G,{ZP:function(){return Mt}});var U=l(38663),F=l(70883),p=l(22122),I=l(96156),te=l(6610),re=l(5991),N=l(10379),z=l(44144),P=l(90484),a=l(67294),S=l(94184),H=l.n(S),ae=l(98423),k=l(48717),B=l(65632),M=l(85061),W=l(75164);function X(o){var e,r=function(i){return function(){e=null,o.apply(void 0,(0,M.Z)(i))}},t=function(){if(e==null){for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];e=(0,W.Z)(r(s))}};return t.cancel=function(){W.Z.cancel(e),e=null},t}function Y(){return function(e,r,t){var n=t.value,i=!1;return{configurable:!0,get:function(){if(i||this===e.prototype||this.hasOwnProperty(r))return n;var c=X(n.bind(this));return i=!0,Object.defineProperty(this,r,{value:c,configurable:!0,writable:!0}),i=!1,c}}}}var ve=l(64019);function V(o){return o!==window?o.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function se(o,e,r){if(r!==void 0&&e.top>o.top-r)return r+e.top}function ce(o,e,r){if(r!==void 0&&e.bottom<o.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var de=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],$=[];function fe(){return $}function y(o,e){if(!!o){var r=$.find(function(t){return t.target===o});r?r.affixList.push(e):(r={target:o,affixList:[e],eventHandlers:{}},$.push(r),de.forEach(function(t){r.eventHandlers[t]=(0,ve.Z)(o,t,function(){r.affixList.forEach(function(n){n.lazyUpdatePosition()})})}))}}function ne(o){var e=$.find(function(r){var t=r.affixList.some(function(n){return n===o});return t&&(r.affixList=r.affixList.filter(function(n){return n!==o})),t});e&&e.affixList.length===0&&($=$.filter(function(r){return r!==e}),de.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var oe=function(o,e,r,t){var n=arguments.length,i=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,s;if((typeof Reflect=="undefined"?"undefined":(0,P.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,r,t);else for(var c=o.length-1;c>=0;c--)(s=o[c])&&(i=(n<3?s(i):n>3?s(e,r,i):s(e,r))||i);return n>3&&i&&Object.defineProperty(e,r,i),i};function J(){return typeof window!="undefined"?window:null}var K;(function(o){o[o.None=0]="None",o[o.Prepare=1]="Prepare"})(K||(K={}));var Q=function(o){(0,N.Z)(r,o);var e=(0,z.Z)(r);function r(){var t;return(0,te.Z)(this,r),t=e.apply(this,arguments),t.state={status:K.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var n=t.props,i=n.offsetBottom,s=n.offsetTop;return i===void 0&&s===void 0?0:s},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(n){t.placeholderNode=n},t.saveFixedNode=function(n){t.fixedNode=n},t.measure=function(){var n=t.state,i=n.status,s=n.lastAffix,c=t.props.onChange,d=t.getTargetFunc();if(!(i!==K.Prepare||!t.fixedNode||!t.placeholderNode||!d)){var u=t.getOffsetTop(),m=t.getOffsetBottom(),h=d();if(!!h){var f={status:K.None},g=V(h),v=V(t.placeholderNode),x=se(v,g,u),E=ce(v,g,m);x!==void 0?(f.affixStyle={position:"fixed",top:x,width:v.width,height:v.height},f.placeholderStyle={width:v.width,height:v.height}):E!==void 0&&(f.affixStyle={position:"fixed",bottom:E,width:v.width,height:v.height},f.placeholderStyle={width:v.width,height:v.height}),f.lastAffix=!!f.affixStyle,c&&s!==f.lastAffix&&c(f.lastAffix),t.setState(f)}}},t.prepareMeasure=function(){if(t.setState({status:K.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var n},t}return(0,re.Z)(r,[{key:"getTargetFunc",value:function(){var n=this.context.getTargetContainer,i=this.props.target;return i!==void 0?i:n||J}},{key:"componentDidMount",value:function(){var n=this,i=this.getTargetFunc();i&&(this.timeout=setTimeout(function(){y(i(),n),n.updatePosition()}))}},{key:"componentDidUpdate",value:function(n){var i=this.state.prevTarget,s=this.getTargetFunc(),c=(s==null?void 0:s())||null;i!==c&&(ne(this),c&&(y(c,this),this.updatePosition()),this.setState({prevTarget:c})),(n.offsetTop!==this.props.offsetTop||n.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),ne(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var n=this.getTargetFunc(),i=this.state.affixStyle;if(n&&i){var s=this.getOffsetTop(),c=this.getOffsetBottom(),d=n();if(d&&this.placeholderNode){var u=V(d),m=V(this.placeholderNode),h=se(m,u,s),f=ce(m,u,c);if(h!==void 0&&i.top===h||f!==void 0&&i.bottom===f)return}}this.prepareMeasure()}},{key:"render",value:function(){var n=this,i=this.state,s=i.affixStyle,c=i.placeholderStyle,d=this.props,u=d.affixPrefixCls,m=d.children,h=H()((0,I.Z)({},u,!!s)),f=(0,ae.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls"]);return a.createElement(k.Z,{onResize:function(){n.updatePosition()}},a.createElement("div",(0,p.Z)({},f,{ref:this.savePlaceholderNode}),s&&a.createElement("div",{style:c,"aria-hidden":"true"}),a.createElement("div",{className:h,ref:this.saveFixedNode,style:s},a.createElement(k.Z,{onResize:function(){n.updatePosition()}},m))))}}]),r}(a.Component);Q.contextType=B.E_,oe([Y()],Q.prototype,"updatePosition",null),oe([Y()],Q.prototype,"lazyUpdatePosition",null);var we=a.forwardRef(function(o,e){var r=o.prefixCls,t=a.useContext(B.E_),n=t.getPrefixCls,i=n("affix",r),s=(0,p.Z)((0,p.Z)({},o),{affixPrefixCls:i});return a.createElement(Q,(0,p.Z)({},s,{ref:e}))}),Fe=we,jt=l(84305),me=l(75901),Gt=l(59903),kt=l(81262),Xt=l(30887),Yt=l(59250),Vt=l(94233),Jt=l(49111),Ce=l(28481),He=l(30470),R=l(28991),Ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},We=Ue,be=l(27029),ye=function(e,r){return a.createElement(be.Z,(0,R.Z)((0,R.Z)({},e),{},{ref:r,icon:We}))};ye.displayName="ArrowLeftOutlined";var ze=a.forwardRef(ye),$e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Ke=$e,Pe=function(e,r){return a.createElement(be.Z,(0,R.Z)((0,R.Z)({},e),{},{ref:r,icon:Ke}))};Pe.displayName="ArrowRightOutlined";var je=a.forwardRef(Pe),Ge=l(50344),ke=l(57254),Xe=l(81555),Ye=function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(o);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(o,t[n])&&(r[t[n]]=o[t[n]]);return r},Ee=function(e){var r=e.prefixCls,t=e.separator,n=t===void 0?"/":t,i=e.children,s=e.overlay,c=e.dropdownProps,d=Ye(e,["prefixCls","separator","children","overlay","dropdownProps"]),u=a.useContext(B.E_),m=u.getPrefixCls,h=m("breadcrumb",r),f=function(x){return s?a.createElement(Xe.Z,(0,p.Z)({overlay:s,placement:"bottom"},c),a.createElement("span",{className:"".concat(h,"-overlay-link")},x,a.createElement(ke.Z,null))):x},g;return"href"in d?g=a.createElement("a",(0,p.Z)({className:"".concat(h,"-link")},d),i):g=a.createElement("span",(0,p.Z)({className:"".concat(h,"-link")},d),i),g=f(g),i?a.createElement("li",null,g,n&&a.createElement("span",{className:"".concat(h,"-separator")},n)):null};Ee.__ANT_BREADCRUMB_ITEM=!0;var pe=Ee,Ne=function(e){var r=e.children,t=a.useContext(B.E_),n=t.getPrefixCls,i=n("breadcrumb");return a.createElement("span",{className:"".concat(i,"-separator")},r||"/")};Ne.__ANT_BREADCRUMB_SEPARATOR=!0;var Ve=Ne,Je=l(18515),Qe=l(96159),_e=function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(o);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(o,t[n])&&(r[t[n]]=o[t[n]]);return r};function qe(o,e){if(!o.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=o.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(n,i){return e[i]||n});return t}function et(o,e,r,t){var n=r.indexOf(o)===r.length-1,i=qe(o,e);return n?a.createElement("span",null,i):a.createElement("a",{href:"#/".concat(t.join("/"))},i)}var Re=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},tt=function(e,r,t){var n=(0,M.Z)(e),i=Re(r||"",t);return i&&n.push(i),n},he=function(e){var r=e.prefixCls,t=e.separator,n=t===void 0?"/":t,i=e.style,s=e.className,c=e.routes,d=e.children,u=e.itemRender,m=u===void 0?et:u,h=e.params,f=h===void 0?{}:h,g=_e(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),v=a.useContext(B.E_),x=v.getPrefixCls,E=v.direction,C,Z=x("breadcrumb",r);if(c&&c.length>0){var O=[];C=c.map(function(b){var D=Re(b.path,f);D&&O.push(D);var A;return b.children&&b.children.length&&(A=a.createElement(Je.Z,{items:b.children.map(function(L){return{key:L.path||L.breadcrumbName,label:m(L,f,c,tt(O,L.path,f))}})})),a.createElement(pe,{overlay:A,separator:n,key:D||b.breadcrumbName},m(b,f,c,O))})}else d&&(C=(0,Ge.Z)(d).map(function(b,D){return b&&(0,Qe.Tm)(b,{separator:n,key:D})}));var w=H()(Z,(0,I.Z)({},"".concat(Z,"-rtl"),E==="rtl"),s);return a.createElement("nav",(0,p.Z)({className:w,style:i},g),a.createElement("ol",null,C))};he.Item=pe,he.Separator=Ve;var rt=he,at=rt,nt=l(51890),ot=l(19650),it=l(34952),lt=l(42051),st=function(e,r,t){return!r||!t?null:a.createElement(lt.Z,{componentName:"PageHeader"},function(n){var i=n.back;return a.createElement("div",{className:"".concat(e,"-back")},a.createElement(it.Z,{onClick:function(c){t==null||t(c)},className:"".concat(e,"-back-button"),"aria-label":i},r))})},ct=function(e){return a.createElement(at,e)},dt=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?a.createElement(je,null):a.createElement(ze,null)},ft=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",n=r.title,i=r.avatar,s=r.subTitle,c=r.tags,d=r.extra,u=r.onBack,m="".concat(e,"-heading"),h=n||s||c||d;if(!h)return null;var f=dt(r,t),g=st(e,f,u),v=g||i||h;return a.createElement("div",{className:m},v&&a.createElement("div",{className:"".concat(m,"-left")},g,i&&a.createElement(nt.C,i),n&&a.createElement("span",{className:"".concat(m,"-title"),title:typeof n=="string"?n:void 0},n),s&&a.createElement("span",{className:"".concat(m,"-sub-title"),title:typeof s=="string"?s:void 0},s),c&&a.createElement("span",{className:"".concat(m,"-tags")},c)),d&&a.createElement("span",{className:"".concat(m,"-extra")},a.createElement(ot.Z,null,d)))},ut=function(e,r){return r?a.createElement("div",{className:"".concat(e,"-footer")},r):null},vt=function(e,r){return a.createElement("div",{className:"".concat(e,"-content")},r)},mt=function(e){var r=(0,He.Z)(!1),t=(0,Ce.Z)(r,2),n=t[0],i=t[1],s=function(d){var u=d.width;i(u<768,!0)};return a.createElement(B.C,null,function(c){var d,u=c.getPrefixCls,m=c.pageHeader,h=c.direction,f,g=e.prefixCls,v=e.style,x=e.footer,E=e.children,C=e.breadcrumb,Z=e.breadcrumbRender,O=e.className,w=!0;"ghost"in e?w=e.ghost:m&&"ghost"in m&&(w=m.ghost);var b=u("page-header",g),D=function(){return(C==null?void 0:C.routes)?ct(C):null},A=D(),L=C&&"props"in C,_=(f=Z==null?void 0:Z(e,A))!==null&&f!==void 0?f:A,T=L?C:_,ee=H()(b,O,(d={"has-breadcrumb":!!T,"has-footer":!!x},(0,I.Z)(d,"".concat(b,"-ghost"),w),(0,I.Z)(d,"".concat(b,"-rtl"),h==="rtl"),(0,I.Z)(d,"".concat(b,"-compact"),n),d));return a.createElement(k.Z,{onResize:s},a.createElement("div",{className:ee,style:v},T,ft(b,e,h),E&&vt(b,E),ut(b,x)))})},ht=mt,Ze=l(81253),Qt=l(18106),Oe=l(16004),ge=l(64335),gt=l(85224),_t=l(53645),xt=function(e){var r=(0,a.useContext)(ge.Z),t=e.children,n=e.contentWidth,i=e.className,s=e.style,c=(0,a.useContext)(me.ZP.ConfigContext),d=c.getPrefixCls,u=e.prefixCls||d("pro"),m=n||r.contentWidth,h="".concat(u,"-grid-content");return a.createElement("div",{className:H()(h,i,{wide:m==="Fixed"}),style:s},a.createElement("div",{className:"".concat(u,"-grid-content-children")},t))},Ct=xt,bt=l(83832),yt=function(e){if(!e)return 1;var r=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/r},Pt=function(e){var r=e.children,t=e.style,n=e.className,i=e.markStyle,s=e.markClassName,c=e.zIndex,d=c===void 0?9:c,u=e.gapX,m=u===void 0?212:u,h=e.gapY,f=h===void 0?222:h,g=e.width,v=g===void 0?120:g,x=e.height,E=x===void 0?64:x,C=e.rotate,Z=C===void 0?-22:C,O=e.image,w=e.content,b=e.offsetLeft,D=e.offsetTop,A=e.fontStyle,L=A===void 0?"normal":A,_=e.fontWeight,T=_===void 0?"normal":_,ee=e.fontColor,xe=ee===void 0?"rgba(0,0,0,.15)":ee,Te=e.fontSize,Be=Te===void 0?16:Te,Me=e.fontFamily,Se=Me===void 0?"sans-serif":Me,St=e.prefixCls,Dt=(0,a.useContext)(me.ZP.ConfigContext),At=Dt.getPrefixCls,De=At("pro-layout-watermark",St),Lt=H()("".concat(De,"-wrapper"),n),It=H()(De,s),wt=(0,a.useState)(""),Ae=(0,Ce.Z)(wt,2),Ft=Ae[0],Le=Ae[1];return(0,a.useEffect)(function(){var ie=document.createElement("canvas"),j=ie.getContext("2d"),q=yt(j),Ht="".concat((m+v)*q,"px"),Ut="".concat((f+E)*q,"px"),Wt=b||m/2,zt=D||f/2;if(ie.setAttribute("width",Ht),ie.setAttribute("height",Ut),j){j.translate(Wt*q,zt*q),j.rotate(Math.PI/180*Number(Z));var $t=v*q,Ie=E*q;if(O){var le=new Image;le.crossOrigin="anonymous",le.referrerPolicy="no-referrer",le.src=O,le.onload=function(){j.drawImage(le,0,0,$t,Ie),Le(ie.toDataURL())}}else if(w){var Kt=Number(Be)*q;j.font="".concat(L," normal ").concat(T," ").concat(Kt,"px/").concat(Ie,"px ").concat(Se),j.fillStyle=xe,j.fillText(w,0,0),Le(ie.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[m,f,b,D,Z,L,T,v,E,Se,xe,O,w,Be]),a.createElement("div",{style:(0,R.Z)({position:"relative"},t),className:Lt},r,a.createElement("div",{className:It,style:(0,R.Z)({zIndex:d,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(m+v,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(Ft,"')")},i)}))},Et=Pt,qt=l(12395),pt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],Nt=["children","loading","className","style","footer","affixProps","ghost","fixedHeader","breadcrumbRender"];function Rt(o){return(0,P.Z)(o)==="object"?o:{spinning:o}}var Zt=function(e){var r=e.tabList,t=e.tabActiveKey,n=e.onTabChange,i=e.tabBarExtraContent,s=e.tabProps,c=e.prefixedClassName;return Array.isArray(r)||i?a.createElement(Oe.Z,(0,p.Z)({className:"".concat(c,"-tabs"),activeKey:t,onChange:function(u){n&&n(u)},tabBarExtraContent:i},s),r==null?void 0:r.map(function(d,u){return a.createElement(Oe.Z.TabPane,(0,p.Z)({},d,{tab:d.tab,key:d.key||u}))})):null},Ot=function(e,r,t){return!e&&!r?null:a.createElement("div",{className:"".concat(t,"-detail")},a.createElement("div",{className:"".concat(t,"-main")},a.createElement("div",{className:"".concat(t,"-row")},e&&a.createElement("div",{className:"".concat(t,"-content")},e),r&&a.createElement("div",{className:"".concat(t,"-extraContent")},r))))},er=function(e){var r=useContext(RouteContext);return React.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},React.createElement(_Breadcrumb,_extends({},r==null?void 0:r.breadcrumb,r==null?void 0:r.breadcrumbProps,e)))},Tt=function(e){var r,t=(0,a.useContext)(ge.Z),n=e.title,i=e.content,s=e.pageHeaderRender,c=e.header,d=e.prefixedClassName,u=e.extraContent,m=e.style,h=e.prefixCls,f=e.breadcrumbRender,g=(0,Ze.Z)(e,pt),v=(0,a.useMemo)(function(){if(!!f)return f},[f]);if(s===!1)return null;if(s)return a.createElement(a.Fragment,null," ",s((0,R.Z)((0,R.Z)({},e),t)));var x=n;!n&&n!==!1&&(x=t.title);var E=(0,R.Z)((0,R.Z)((0,R.Z)({},t),{},{title:x},g),{},{footer:Zt((0,R.Z)((0,R.Z)({},g),{},{breadcrumbRender:f,prefixedClassName:d}))},c),C=E.breadcrumb,Z=(!C||!(C==null?void 0:C.itemRender)&&!(C==null||(r=C.routes)===null||r===void 0?void 0:r.length))&&!f;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(O){return!E[O]})&&Z&&!i&&!u?null:a.createElement("div",{className:"".concat(d,"-warp")},a.createElement(ht,(0,p.Z)({},E,{breadcrumb:f===!1?void 0:(0,R.Z)((0,R.Z)({},E.breadcrumb),t.breadcrumbProps),breadcrumbRender:v,prefixCls:h}),(c==null?void 0:c.children)||Ot(i,u,d)))},Bt=function(e){var r,t,n=e.children,i=e.loading,s=i===void 0?!1:i,c=e.className,d=e.style,u=e.footer,m=e.affixProps,h=e.ghost,f=e.fixedHeader,g=e.breadcrumbRender,v=(0,Ze.Z)(e,Nt),x=(0,a.useContext)(ge.Z),E=(0,a.useContext)(me.ZP.ConfigContext),C=E.getPrefixCls,Z=e.prefixCls||C("pro"),O="".concat(Z,"-page-container"),w=H()(O,c,(r={},(0,I.Z)(r,"".concat(Z,"-page-container-ghost"),h),(0,I.Z)(r,"".concat(Z,"-page-container-with-footer"),u),r)),b=(0,a.useMemo)(function(){return n?a.createElement(a.Fragment,null,a.createElement("div",{className:"".concat(O,"-children-content")},n),x.hasFooterToolbar&&a.createElement("div",{style:{height:48,marginTop:24}})):null},[n,O,x.hasFooterToolbar]),D=(0,a.useMemo)(function(){var T;return g==!1?!1:g||(v==null||(T=v.header)===null||T===void 0?void 0:T.breadcrumbRender)},[g,v==null||(t=v.header)===null||t===void 0?void 0:t.breadcrumbRender]),A=a.createElement(Tt,(0,p.Z)({},v,{breadcrumbRender:D,ghost:h,prefixCls:void 0,prefixedClassName:O})),L=(0,a.useMemo)(function(){if(a.isValidElement(s))return s;if(typeof s=="boolean"&&!s)return null;var T=Rt(s);return a.createElement(bt.Z,T)},[s]),_=(0,a.useMemo)(function(){var T=L||b;if(e.waterMarkProps||x.waterMarkProps){var ee=(0,R.Z)((0,R.Z)({},x.waterMarkProps),e.waterMarkProps);return a.createElement(Et,ee,T)}return T},[e.waterMarkProps,x.waterMarkProps,L,b]);return a.createElement("div",{style:d,className:w},f&&A?a.createElement(Fe,(0,p.Z)({offsetTop:x.hasHeader&&x.fixedHeader?x.headerHeight:0},m),A):A,_&&a.createElement(Ct,null,_),u&&a.createElement(gt.Z,{prefixCls:Z},u))},Mt=Bt},56264:function(){},53645:function(){},12395:function(){},70883:function(){},81262:function(){},59903:function(){},34952:function(ue,G,l){"use strict";var U=l(22122),F=l(67294),p=l(15105),I=function(N,z){var P={};for(var a in N)Object.prototype.hasOwnProperty.call(N,a)&&z.indexOf(a)<0&&(P[a]=N[a]);if(N!=null&&typeof Object.getOwnPropertySymbols=="function")for(var S=0,a=Object.getOwnPropertySymbols(N);S<a.length;S++)z.indexOf(a[S])<0&&Object.prototype.propertyIsEnumerable.call(N,a[S])&&(P[a[S]]=N[a[S]]);return P},te={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},re=F.forwardRef(function(N,z){var P=function(W){var X=W.keyCode;X===p.Z.ENTER&&W.preventDefault()},a=function(W){var X=W.keyCode,Y=N.onClick;X===p.Z.ENTER&&Y&&Y()},S=N.style,H=N.noStyle,ae=N.disabled,k=I(N,["style","noStyle","disabled"]),B={};return H||(B=(0,U.Z)({},te)),ae&&(B.pointerEvents="none"),B=(0,U.Z)((0,U.Z)({},B),S),F.createElement("div",(0,U.Z)({role:"button",tabIndex:0,ref:z},k,{onKeyDown:P,onKeyUp:a,style:B}))});G.Z=re}}]);