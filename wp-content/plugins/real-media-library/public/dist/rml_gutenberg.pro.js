/*! For license information please see rml_gutenberg.pro.js.LICENSE.txt */
var rml_gutenberg;(()=>{"use strict";var e={5820:(e,t,s)=>{var r=s(1594),o=Symbol.for("react.element"),n=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,s){var r,a={},p=null,u=null;for(r in void 0!==s&&(p=""+s),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(u=t.ref),t)n.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:p,ref:u,props:a,_owner:i.current}}t.jsx=a,t.jsxs=a},1568:(e,t,s)=>{e.exports=s(5820)},1594:e=>{e.exports=React}},t={};function s(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,s),n.exports}s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};s.r(r);var o=s(1568);s(1594);const n=wp,i="real-media-library/gallery",{registerBlockType:l}=n.blocks,{G:a,SVG:p,Path:u,ServerSideRender:d,PanelBody:c,RangeControl:h,ToggleControl:m,SelectControl:g,TreeSelect:b,Notice:y,Spinner:f,Button:x,withNotices:v}=n.components,{Component:C,Fragment:j}=n.element,{InspectorControls:_,ServerSideRender:S}=n.editor,{__:k}=n.i18n,w=d||S,T=[{value:"attachment",label:k("Attachment Page")},{value:"media",label:k("Media File")},{value:"none",label:k("None")}];class O extends C{constructor(){super(...arguments),this.state={$busy:!0,tree:[]}}async componentDidMount(){const{tree:e}=await window.rml.request({location:{path:"/tree"}});e.unshift({id:-1,name:rmlOpts.others.lang.unorganized}),e.unshift({id:void 0,name:"-"}),this.setState({tree:e,$busy:!1})}render(){const{...e}=this.props,{$busy:t,tree:s}=this.state;return t?(0,o.jsx)(f,{}):(0,o.jsx)(b,{label:rmlOpts.others.lang.folder,...e,tree:s})}}l(i,{title:"Real Media Library Gallery",description:"Display folder images in a rich gallery.",icon:(0,o.jsxs)(p,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)(u,{fill:"none",d:"M0 0h24v24H0V0z"}),(0,o.jsxs)(a,{children:[(0,o.jsx)(u,{d:"M20 4v12H8V4h12m0-2H8L6 4v12l2 2h12l2-2V4l-2-2z"}),(0,o.jsx)(u,{d:"M12 12l1 2 3-3 3 4H9z"}),(0,o.jsx)(u,{d:"M2 6v14l2 2h14v-2H4V6H2z"})]})]}),category:"common",supports:{align:!0},attributes:{fid:{type:"number",default:0},columns:{type:"number",default:3},imageCrop:{type:"boolean",default:!0},captions:{type:"boolean",default:!0},linkTo:{type:"string",default:"none"},lastEditReload:{type:"number",default:0}},edit:v(class extends C{constructor(){super(...arguments),this.setFid=e=>this.props.setAttributes({fid:+e}),this.setLinkTo=e=>this.props.setAttributes({linkTo:e}),this.setColumnsNumber=e=>this.props.setAttributes({columns:e}),this.toggleImageCrop=()=>this.props.setAttributes({imageCrop:!this.props.attributes.imageCrop}),this.toggleCaptions=()=>this.props.setAttributes({captions:!this.props.attributes.captions}),this.handleReload=()=>this.props.setAttributes({lastEditReload:(new Date).getTime()}),this.render=()=>{const{attributes:e}=this.props,{fid:t,columns:s=3,imageCrop:r,captions:n,linkTo:l}=e;return(0,o.jsxs)(j,{children:[(0,o.jsx)(_,{children:(0,o.jsxs)(c,{title:k("Gallery Settings"),children:[(0,o.jsx)(O,{value:t,onChange:this.setFid}),(0,o.jsx)(h,{label:k("Columns"),value:s,onChange:this.setColumnsNumber,min:"1",max:"8"}),(0,o.jsx)(m,{label:k("Crop Images"),checked:!!r,onChange:this.toggleImageCrop}),(0,o.jsx)(m,{label:k("Caption"),checked:!!n,onChange:this.toggleCaptions}),(0,o.jsx)(g,{label:k("Link To"),value:l,onChange:this.setLinkTo,options:T}),(0,o.jsx)(x,{isPrimary:!0,onClick:this.handleReload,children:rmlOpts.others.lang.reloadContent})]})}),(0,o.jsx)(w,{block:i,attributes:e}),!t&&(0,o.jsx)(y,{status:"error",isDismissible:!1,children:(0,o.jsx)("p",{children:rmlOpts.others.lang.gutenBergBlockSelect})})]})},this.state={refresh:(new Date).getTime()}}}),save:()=>null}),rml_gutenberg=r})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-media-library/4.22.20/a8a8bf7ab95a5a59fad32b642fb294c0/rml_gutenberg.pro.js.map
