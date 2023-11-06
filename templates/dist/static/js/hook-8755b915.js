import{n as m,aw as Z,p as U,ax as y,ay as S,e as a,r,w as p,R as u,aa as M,aN as $,aB as w,aO as ee}from"./index-8391854f.js";import{E}from"./edit-pen-af58ba35.js";import{d as V}from"./check-3815600c.js";import{a as O,r as le}from"./ctiTemplate-08e25d3b.js";import{b as te}from"./browser-5e8f72a1.js";import{E as ae}from"./index-46334353.js";function D(k){return typeof k=="function"||Object.prototype.toString.call(k)==="[object Object]"&&!ee(k)}function oe(){const k=m(!0),x=m(!0);let A=[];const q=[{label:"string",value:"string"},{label:"integer",value:"integer"},{label:"double",value:"double"},{label:"boolean",value:"boolean"},{label:"file",value:"file"},{label:"array",value:"array"},{label:"datetime",value:"datetime"},{label:"date",value:"date"},{label:"time",value:"time"},{label:"wday",value:"wday"}],L=[{label:"Normal",value:0},{label:"NoEcho",value:1},{label:"Password",value:2},{label:"PasswordEchoOnEdit",value:3}],H=[{label:"boolean",value:"boolean"},{label:"number",value:"number"},{label:"string",value:"string"},{label:"object",value:"object"},{label:"array",value:"array"}];function P(e){const l=()=>Math.random().toString(36).substr(2,9);return e.map(t=>{const n={...t,key:l()};return n.children&&n.children.length>0&&(n.children=P(n.children)),n})}m();const c=m(),s=m();function N(e,l){for(const t of e){if(e&&e.includes(l))return{children:e,display:"属性",editable:!1,name:"parent"};if(t.children&&t.children.includes(l))return t;if(t.children){const n=N(t.children,l);if(n)return n}}return null}const J=(e,l,t)=>{s.value=N(f.value,e),c.value=e};function K(){if(c.value){const e={name:"",key:Date.now(),children:[]};Object.keys(c.value).forEach(l=>{e[l]="",Array.isArray(c.value[l])?e[l]=[]:Array.isArray(c.value[l])?e[l]={}:e[l]=""}),e.name="new",e.key=Date.now(),s.value.children.push(e)}else{const e={display:"",editable:"",help:"",input_candidate:"",input_echomode:"",input_mask:"",input_type:"",key:0,name:"new",type:"",value:""};e.name="new",e.key=Date.now(),f.value.push(e)}try{O(f.value),y("编辑成功",{type:"success"})}catch{y("编辑失败！",{type:"error"})}}function z(){if(c.value.type!=="object"){S.error("不是objcet不能添加子");return}const e={name:""};Object.keys(c.value).forEach(l=>{typeof e[l]!="object"&&(e[l]="")}),e.name="new",c.value.children||(c.value.children=[]),c.value.children.push(e);try{O(f.value),y("编辑成功",{type:"success"})}catch{y("编辑失败！",{type:"error"})}}function F(){if(!s.value.children||!c.value)return;const e=s.value.children.indexOf(c.value);e!==-1&&s.value.children.splice(e,1);try{O(f.value),y("编辑成功",{type:"success"})}catch{y("编辑失败！",{type:"error"})}s.value=null,c.value=null}function G(){if(!s.value||!s.value.children||s.value.children.length<=1){S.warning("子节点不足，无法向上移动");return}const e=s.value.children.indexOf(c.value);if(e<=0){S.warning("当前行已经在顶部，无法再向上移动");return}const l=e-1;[s.value.children[e],s.value.children[l]]=[s.value.children[l],s.value.children[e]];try{O(f.value),y("编辑成功",{type:"success"})}catch{y("编辑失败！",{type:"error"})}}function Q(){if(!s.value||!s.value.children||s.value.children.length<=1){S.warning("子节点不足，无法向下移动");return}const e=s.value.children.indexOf(c.value);if(e>=s.value.children.length-1){S.warning("当前行已经在底部，无法再向下移动");return}const l=e+1;[s.value.children[e],s.value.children[l]]=[s.value.children[l],s.value.children[e]];try{O(f.value),y("编辑成功",{type:"success"})}catch{y("编辑失败！",{type:"error"})}}async function W(){x.value=!0;const e=await le();f.value=e.result.CtiTemplate.children,f.value=P(f.value),te.nextTick(()=>{k.value=!1,x.value=!1})}const I=m({}),R=m({}),d=m(-1),_=m(""),f=m(Z(A,!0));W();const B=U(()=>(e,l)=>{var t;return(t=I.value[e])==null?void 0:t[l]}),i=U(()=>(e,l)=>{var t,n;return((t=R.value[e])==null?void 0:t.editing)&&l.property===((n=R.value[e])==null?void 0:n.prop)}),v=U(()=>(e,l,t=!1)=>["cursor-pointer","ml-2","transition","delay-100",t?["hover:scale-110","hover:text-red-500"]:i.value(e,l)&&["scale-150","text-red-500"]]);U(()=>(e,l)=>["flex-bc","w-full","h-[32px]",e.hasChildren?["hover:scale-110","hover:text-red-500"]:[""]]);const X=[{label:"编号",prop:"name",hide:function(e,l,t){return!0}},{label:"参数字段",prop:"name",width:"260",fixed:!0,cellRenderer:({row:e,index:l,column:t})=>a("div",{class:"flex-bc h-[32px] templateItemBox",style:" display:inline-flex; width:100%",onMouseenter:()=>b(e,l,t),onMouseleave:()=>h(l)},[a(r("el-tooltip"),{content:String(e[t.property]),placement:"top"},{default:()=>[p(a("p",{class:"templateItemText"},[e[t.property]]),[[u,!i.value(l,t)]])]}),a(M,{"enter-active-class":"animate__animated animate__fadeInUp animate__faster"},{default:()=>[p(a(r("el-input"),{modelValue:B.value(l,t.property),onInput:n=>C(n,l,t.property)},null),[[u,i.value(l,t)]])]}),p(a(r("iconify-icon-offline"),{icon:V,class:v.value(l,t),onClick:()=>j(l,e,t.property)},null),[[u,i.value(l,t)]]),p(a(r("iconify-icon-offline"),{icon:E,class:`${v.value(l,!0)} templateEditIcon`,onClick:()=>g(e,l,t)},null),[[u,d.value===l&&!i.value(l,t)&&_.value===t.property]])])},{label:"参数名称",prop:"display",cellRenderer:({row:e,index:l,column:t})=>a("div",{class:"flex-bc h-[32px] templateItemBox",style:" display:inline-flex; width:100%",onMouseenter:()=>b(e,l,t),onMouseleave:()=>h(l)},[a(r("el-tooltip"),{content:String(e[t.property]),placement:"top"},{default:()=>[p(a("p",{class:"templateItemText"},[e[t.property]]),[[u,!i.value(l,t)]])]}),a(M,{"enter-active-class":"animate__animated animate__fadeInUp animate__faster"},{default:()=>[p(a(r("el-input"),{modelValue:B.value(l,t.property),onInput:n=>C(n,l,t.property)},null),[[u,i.value(l,t)]])]}),p(a(r("iconify-icon-offline"),{icon:V,class:v.value(l,t),onClick:()=>j(l,e,t.property)},null),[[u,i.value(l,t)]]),p(a(r("iconify-icon-offline"),{icon:E,class:`${v.value(l,!0)} templateEditIcon`,onClick:()=>g(e,l,t)},null),[[u,d.value===l&&!i.value(l,t)&&_.value===t.property]])])},{label:"类型",prop:"type",cellRenderer:({row:e,index:l,column:t})=>{let n;return a(r("el-select"),{modelValue:e[t.property],"onUpdate:modelValue":o=>e[t.property]=o,onChange:o=>T(o,e,l,t)},D(n=H.map(o=>a($,{key:o.value,label:o.label,value:o.value},null)))?n:{default:()=>[n]})}},{label:"help",prop:"help",width:"160",cellRenderer:({row:e,index:l,column:t})=>a("div",{class:"flex-bc  templateItemBox",style:" display:inline-flex; width:100%",onMouseenter:()=>b(e,l,t),onMouseleave:()=>h(l)},[a(r("el-tooltip"),{content:e[t.property],placement:"top"},{default:()=>[p(a("p",{class:"templateItemText"},[e[t.property]]),[[u,!i.value(l,t)]])]}),a(M,{"enter-active-class":"animate__animated animate__fadeInUp animate__faster"},{default:()=>[p(a(r("el-input"),{modelValue:B.value(l,t.property),onInput:n=>C(n,l,t.property)},null),[[u,i.value(l,t)]])]}),p(a(r("iconify-icon-offline"),{icon:V,class:v.value(l,t),onClick:()=>j(l,e,t.property)},null),[[u,i.value(l,t)]]),p(a(r("iconify-icon-offline"),{icon:E,class:`${v.value(l,!0)} templateEditIcon`,onClick:()=>g(e,l,t)},null),[[u,d.value===l&&!i.value(l,t)&&_.value===t.property]])])},{label:"默认值",prop:"value",cellRenderer:({row:e,index:l,column:t})=>a("div",{class:`flex-bc w-full h-[32px] templateItemBox  ${e.type==="object"?"disable":""}`,style:" display:inline-flex; width:100%",onMouseenter:()=>b(e,l,t),onMouseleave:()=>h(l)},[a(r("el-tooltip"),{content:String(e[t.property]),placement:"top"},{default:()=>[p(a("p",{class:"templateItemText"},[e[t.property]]),[[u,!i.value(l,t)]])]}),a(M,{"enter-active-class":"animate__animated animate__fadeInUp animate__faster"},{default:()=>[p(a(r("el-input"),{modelValue:B.value(l,t.property),onInput:n=>C(n,l,t.property)},null),[[u,i.value(l,t)]])]}),p(a(r("iconify-icon-offline"),{icon:V,class:v.value(l,t),onClick:()=>j(l,e,t.property)},null),[[u,i.value(l,t)]]),p(a(r("iconify-icon-offline"),{icon:E,class:`${v.value(l,!0)} templateEditIcon`,onClick:()=>g(e,l,t)},null),[[u,d.value===l&&!i.value(l,t)&&_.value===t.property]])])},{label:"edit",prop:"input_type",cellRenderer:({row:e,index:l,column:t})=>{let n;return a("div",{class:`flex-bc w-full h-[32px] templateItemBox  ${e.type==="object"?"disable":""}`,style:" display:inline-flex; width:100%",onMouseenter:()=>b(e,l,t),onMouseleave:()=>h(l)},[p(a(r("el-select"),{modelValue:e[t.property],"onUpdate:modelValue":o=>e[t.property]=o,onChange:o=>T(o,e,l,t)},D(n=q.map(o=>a($,{key:o.value,label:o.label,value:o.value},null)))?n:{default:()=>[n]}),[[u,e.type!=="object"]])])}},{label:"tristate",prop:"input_tristate",cellRenderer:({row:e,index:l,column:t})=>e.type==="object"?a("div",{class:"flex-bc w-full h-[32px] templateItemBox  disable "},null):e.input_type!=="boolean"?a("div",{class:"flex-bc w-full h-[32px] templateItemBox  disable "},null):a("div",{class:`flex-bc w-full h-[32px] templateItemBox  ${e.input_type==="boolean"?"":"disable"}  `,onMouseenter:()=>b(e,l,t),onMouseleave:()=>h(l)},[p(a(r("el-switch"),{modelValue:e[t.property],"onUpdate:modelValue":n=>e[t.property]=n,class:"ml-2",onChange:n=>T(n,e,l,t)},null),[[u,e.input_type==="boolean"]])])},{label:"min",prop:"input_min",cellRenderer:({row:e,index:l,column:t})=>e.type==="object"?a("div",{class:"flex-bc w-full h-[32px] templateItemBox  disable "},null):e.input_type!=="integer"&&e.input_type!=="double"?a("div",{class:"flex-bc w-full h-[32px] templateItemBox  disable "},null):a("div",{class:"flex-bc w-full h-[32px] templateItemBox  ",onMouseenter:()=>b(e,l,t),onMouseleave:()=>h(l)},[a(r("el-tooltip"),{content:String(e[t.property]),placement:"top"},{default:()=>[p(a("p",{class:"templateItemText"},[e[t.property]]),[[u,!i.value(l,t)]])]}),a(M,{"enter-active-class":"animate__animated animate__fadeInUp animate__faster"},{default:()=>[p(a(r("el-input"),{type:"number",modelValue:B.value(l,t.property),onInput:n=>C(n,l,t.property)},null),[[u,i.value(l,t)]])]}),p(a(r("iconify-icon-offline"),{icon:V,class:v.value(l,t),onClick:()=>j(l,e,t.property)},null),[[u,i.value(l,t)]]),p(a(r("iconify-icon-offline"),{icon:E,class:`${v.value(l,!0)} templateEditIcon`,onClick:()=>g(e,l,t)},null),[[u,d.value===l&&!i.value(l,t)&&_.value===t.property]])])},{label:"max",prop:"input_max",cellRenderer:({row:e,index:l,column:t})=>e.type==="object"?a("div",{class:"flex-bc w-full h-[32px] templateItemBox  disable "},null):e.input_type!=="integer"&&e.input_type!=="double"?a("div",{class:"flex-bc w-full h-[32px] templateItemBox  disable "},null):a("div",{class:"flex-bc w-full h-[32px] templateItemBox  ",onMouseenter:()=>b(e,l,t),onMouseleave:()=>h(l)},[a(r("el-tooltip"),{content:String(e[t.property]),placement:"top"},{default:()=>[p(a("p",{class:"templateItemText"},[e[t.property]]),[[u,!i.value(l,t)]])]}),a(M,{"enter-active-class":"animate__animated animate__fadeInUp animate__faster"},{default:()=>[p(a(r("el-input"),{type:"number",modelValue:B.value(l,t.property),onInput:n=>C(n,l,t.property)},null),[[u,i.value(l,t)]])]}),p(a(r("iconify-icon-offline"),{icon:V,class:v.value(l,t),onClick:()=>j(l,e,t.property)},null),[[u,i.value(l,t)]]),p(a(r("iconify-icon-offline"),{icon:E,class:`${v.value(l,!0)} templateEditIcon`,onClick:()=>g(e,l,t)},null),[[u,d.value===l&&!i.value(l,t)&&_.value===t.property]])])},{label:"echomode",prop:"input_echomode",cellRenderer:({row:e,index:l,column:t})=>{if(e.type==="object")return a("div",{class:"flex-bc w-full h-[32px] templateItemBox  disable "},null);if(e.input_type!=="string")return a("div",{class:"flex-bc w-full h-[32px] templateItemBox  disable "},null);{let n;return a("div",{class:"flex-bc w-full h-[32px] templateItemBox  "},[p(a(r("el-select"),{modelValue:e[t.property],"onUpdate:modelValue":o=>e[t.property]=o,onChange:o=>T(o,e,l,t)},D(n=L.map(o=>a($,{key:o.value,label:o.label,value:o.value},null)))?n:{default:()=>[n]}),[[u,e.input_type==="integer"||e.input_type==="string"]])])}}},{label:"candidate",prop:"input_candidate",width:"160",cellRenderer:({row:e,index:l,column:t})=>e.type==="object"?a("div",{class:"flex-bc w-full h-[32px] templateItemBox  disable "},null):e.input_type!=="string"&&e.input_type!=="array"?a("div",{class:"flex-bc w-full h-[32px] templateItemBox  disable "},null):a(ae,{data:e.input_candidate,onChange:Y,onSubmit:n=>T(n.join(","),e,l,t),key:e.input_candidate},null)},{label:"selectonly",prop:"input_selectonly",cellRenderer:({row:e,index:l,column:t})=>e.type==="object"?a("div",{class:"flex-bc w-full h-[32px] templateItemBox  disable "},null):e.input_candidate===""?a("div",{class:"flex-bc w-full h-[32px] templateItemBox  disable "},null):a("div",{class:"flex-bc w-full h-[32px] templateItemBox ",onMouseenter:()=>b(e,l,t),onMouseleave:()=>h(l)},[p(a(r("el-switch"),{modelValue:e[t.property],"onUpdate:modelValue":n=>e[t.property]=n,class:"ml-2",onChange:n=>T(n,e,l,t)},null),[[u,e.input_type==="string"||e.input_type==="array"||e.input_candidate]])])},{label:"column",prop:"input_column",width:"220",cellRenderer:({row:e,index:l,column:t})=>e.type==="object"?a("div",{class:"flex-bc w-full h-[32px] templateItemBox  disable "},null):e.input_type!=="array"?a("div",{class:"flex-bc w-full h-[32px] templateItemBox  disable "},null):a("div",{class:"flex-bc w-full h-[32px] templateItemBox  ",style:" display:inline-flex; width:100%",onMouseenter:()=>b(e,l,t),onMouseleave:()=>h(l)},[a(r("el-tooltip"),{content:String(e[t.property]),placement:"top"},{default:()=>[p(a("p",{class:"templateItemText"},[e[t.property]]),[[u,!i.value(l,t)]])]}),a(M,{"enter-active-class":"animate__animated animate__fadeInUp animate__faster"},{default:()=>[p(a(r("el-input"),{modelValue:B.value(l,t.property),onInput:n=>C(n,l,t.property)},null),[[u,i.value(l,t)]])]}),p(a(r("iconify-icon-offline"),{icon:V,class:v.value(l,t),onClick:()=>j(l,e,t.property)},null),[[u,i.value(l,t)]]),p(a(r("iconify-icon-offline"),{icon:E,class:`${v.value(l,!0)} templateEditIcon`,onClick:()=>g(e,l,t)},null),[[u,d.value===l&&!i.value(l,t)&&_.value===t.property]])])}];function g(e,l,t){I.value[l]=Object.assign({},I.value[l],{[t.property]:e[t.property]}),R.value[l]=Object.assign({},R.value[l],{editing:!0,prop:t.property})}function b(e,l,t){d.value=l,_.value=t.property}function h(e){var l;_.value="",(l=I.value[e])!=null&&l.value?d.value=e:d.value=-1}function C(e,l,t){I.value[l][t]=e}async function j(e,l,t){l[t]=I.value[e][t];try{await O(f.value),y(`编辑成功,${JSON.stringify(I.value[e][t])}`,{type:"success"})}catch{y("编辑失败！",{type:"error"})}R.value[e]=Object.assign({},R.value[e],{editing:!1,prop:""}),w().then(()=>I.value[e].value=null)}const T=async(e,l,t,n)=>{await g(l,t,n),await C(e,t,n.property),await j(t,l,n.property)},Y=e=>{};return{columns:X,dataList:f,rowClickHandle:J,currentParent:s,currentRow:c,addRow:K,addRowChilren:z,deleteRow:F,moveRowDown:Q,moveRowUp:G,autoExpand:k,loading:x}}export{oe as useColumns};